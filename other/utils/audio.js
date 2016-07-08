import path from 'path'
import spawn from 'spawn-command'
import shellEscape from 'shell-escape'
import filenamify from 'filenamify'
import getFfmpegPath from './ffmpeg-path'

const ffmpegPath = getFfmpegPath()

export {podcastifyAudio as default, analyzeAudio, optimizeAudio}

function podcastifyAudio(fileAndEpisode) {
  return Promise.resolve(fileAndEpisode)
    .then(analyzeAudio)
    .then(optimizeAudio)
    .catch(err => console.error(err))
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
    .stderr.on('data', data => {
      const chunk = data.toString()
      buffer += chunk
      console.log(chunk)
    })
    .on('error', err => {
      reject(err)
    })
    .on('close', () => {
      const maxVol = /max_volume: (-?[\d\.]+) dB/.exec(buffer)

      if (!maxVol) {
        return resolve({file, episode, gain: 0})
      }

      console.log(`Detected max volume: ${maxVol[1]}dB`)
      const gain = -parseFloat(maxVol[1])

      return resolve({file, episode, gain})
    })
  })
}

function optimizeAudio({file, episode, gain}) {
  const {
    numberDisplay = episode.number,
    title,
    number,
    year,
    url,
    artist = 'JavaScript Air',
    shortArtist = episode.artist || 'jsAir',
  } = episode
  const outputFilename = filenamify(`${numberDisplay} ${shortArtist} - ${title}.mp3`, {replacement: '-'})
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
    '-metadata', `artist=${artist}`,
    '-metadata', `track=${number}`,
    '-metadata', `date=${year}`,
    '-metadata', 'language=eng',
    '-metadata', `comment=${url}`,
    outputPath,
  ])
  const options = {stdio: 'inherit'}
  console.log(`Running: ${command}`)
  spawn(command, options).on('exit', process.exit)
}
