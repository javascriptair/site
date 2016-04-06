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
import userHome from 'user-home'
import YoutubeMp3Downloader from 'youtube-mp3-downloader'
import inquirer from 'inquirer'
import ProgressBar from 'cli-progress-bar'
import {random as randomEmoji} from 'random-emoji'
import ffmpegPath from './ffmpeg-path'
import podcastifyAudio from './audio'

import {past as episodes} from '../../episodes'

export default podcastifyVideo

function podcastifyVideo() {
  return getEpisode()
    .then(downloadVideoToMp3)
    .then(podcastifyAudio)
    .catch(err => console.error(err))
}

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
    ], ({episode}) => resolve({
      url: episode.shortUrl || 'https://javascriptair.com',
      number: episode.number,
      numberDisplay: episode.numberDisplay,
      title: episode.title,
      year: new Date(episode.date).getFullYear(),
      youTubeId: episode.youTubeId,
    }))
  })
}

function downloadVideoToMp3(episode) {
  const {youTubeId} = episode
  return new Promise((resolve, reject) => {
    const bar = new ProgressBar()
    const youTubeUrl = `https://youtube.com/${youTubeId}`
    let currentEmoji = getRandomEmoji()
    const emojiUpdateInterval = setInterval(() => currentEmoji = getRandomEmoji(), 1000) // eslint-disable-line

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
      if (!percentage) {
        bar.show(`starting download for ${youTubeUrl}...`, 0)
        return
      }
      const amount = (percentage / 100).toFixed(2)
      const percent = Math.floor(percentage)
      bar.show(`${percent}% audio downloaded for ${youTubeUrl}`, amount)
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
