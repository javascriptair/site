/*
 * This file prompts you for a past episode to download
 * the video from YouTube for and extract the audio from
 * for use on the podcast. The result is two files on your
 * desktop. One is the raw audio file from YouTube and the
 * other is the compressed, mono version.
 *
 * This file depends on an ffmpeg binary to be available in
 * the currently executing environment
 */
import path from 'path'
import spawn from 'spawn-command'
import userHome from 'user-home'
import which from 'which'
import YoutubeMp3Downloader from 'youtube-mp3-downloader'
import inquirer from 'inquirer'
import shellEscape from 'shell-escape'
import transliteration from 'transliteration'
import ProgressBar from 'cli-progress-bar'
import {random as randomEmoji} from 'random-emoji'

import {past as episodes} from '../episodes'

let ffmpegPath
try {
  ffmpegPath = which.sync('ffmpeg')
} catch (err) {
  throw new Error(
    'Unable to get ffmpeg executable which is required to use podcastify-youtube-video'
  )
}

getEpisode()
  .then(downloadVideoToMp3)
  .then(analyzeAudio)
  .then(optimizeAudio)
  .catch(err => console.error(err))

function getEpisode() {
  return new Promise(resolve => {
    inquirer.prompt([
      {
        name: 'episode',
        type: 'list',
        choices: episodes.map(e => ({name: e.title, value: e})),
        message: 'Which episode?',
        default: episodes.length - 1,
      },
    ], ({episode}) => resolve(episode))
  })
}

function downloadVideoToMp3(episode) {
  const {youTubeId} = episode
  return new Promise((resolve, reject) => {
    const bar = new ProgressBar()
    let currentEmoji = getRandomEmoji()
    const emojiUpdateInterval = setInterval(() => currentEmoji = getRandomEmoji(), 1000)

    updateProgress()
    const pulsBarInterval = setInterval(() => bar.pulse(currentEmoji), 60)

    const YD = new YoutubeMp3Downloader({
      ffmpegPath,
      outputPath: path.join(userHome, 'Desktop'),
      youtubeVideoQuality: 'highest',
      queueParallelism: 2,
      progressTimeout: 250,
    })

    YD.download(youTubeId)
    YD.on('finished', ({file}) => {
      cleanup()
      resolve({file, episode})
    })
    YD.on('error', error => {
      cleanup()
      reject(error)
    })
    YD.on('progress', updateProgress)

    function updateProgress({progress: {percentage}} = {progress: {percentage: 0}}) {
      const amount = (percentage / 100).toFixed(2)
      const percent = Math.floor(percentage)
      bar.show(`${percent}% audio downloaded for https://youtube.com/${youTubeId}`, amount)
    }

    function cleanup() {
      clearInterval(emojiUpdateInterval)
      clearInterval(pulsBarInterval)
    }

    function getRandomEmoji() {
      return randomEmoji({count: 1})[0].character
    }
  })
}

function analyzeAudio({file, episode}) {
  console.log('Analyzing audio levels')
  return new Promise((resolve, reject) => {
    const command = shellEscape([
      ffmpegPath,
      '-ss', '00:05:00.00',
      '-t', '00:15:00.00',
      '-i', file,
      '-af', 'volumedetect',
      '-f', 'null', '/dev/null',
    ])
    console.log(`Running: ${command}`)

    let buffer = ''
    const options = {stdio: [process.stdin, process.stdout, 'pipe']}
    spawn(command, options)
    .stderr.on('data', (data) => {
      const chunk = data.toString()
      buffer += chunk
      console.log(chunk)
    })
    .on('error', (err) => {
      reject(err)
    })
    .on('close', () => {
      const maxVol = /max_volume: (-?[\d\.]+) dB/.exec(buffer)

      if (!maxVol) {
        return resolve({file, episode, gain: 0})
      }

      console.log(`Detected max volume: ${maxVol[1]}dB`)
      const gain = -parseFloat(maxVol[1])

      resolve({file, episode, gain})
    })
  })
}

function optimizeAudio({file, episode, gain}) {
  const {numberDisplay, title, number, date, shortUrl} = episode
  const outputFilename = transliteration(`${numberDisplay} jsAir - ${title}.mp3`)
  const outputPath = path.resolve(file, '../', outputFilename)
  const command = shellEscape([
    ffmpegPath,
    '-i', file,
    '-acodec', 'mp3',
    '-ab', '96k',
    '-ac', '1',
    '-id3v2_version', '3',
    '-write_id3v1', '1',
    '-af', `volume=${gain}dB`,
    '-metadata', `title=${title}`,
    '-metadata', 'artist=JavaScript Air',
    '-metadata', `track=${number}`,
    '-metadata', `date=${new Date(date).getFullYear()}`,
    '-metadata', 'language=eng',
    '-metadata', `comment=${shortUrl || 'https://javascriptair.com'}`,
    outputPath,
  ])
  const options = {stdio: 'inherit'}
  console.log(`Running: ${command}`)
  spawn(command, options).on('exit', process.exit)
}
