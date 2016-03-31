import path from 'path'
import userHome from 'user-home'
import which from 'which'
import YoutubeMp3Downloader from 'youtube-mp3-downloader'
import inquirer from 'inquirer'

import {past as episodes} from '../episodes'

const providedYouTubeId = process.argv[2]

if (providedYouTubeId) {
  downloadVideoToMp3(providedYouTubeId)
} else {
  askForYouTubeId(downloadVideoToMp3)
}

function askForYouTubeId(callback) {
  inquirer.prompt([
    {
      name: 'youTubeId',
      type: 'list',
      choices: episodes.map(e => ({name: e.title, value: e.youTubeId})),
      message: 'Which episode?',
      default: episodes.length - 1,
    },
  ], ({youTubeId}) => {
    callback(youTubeId)
  })
}

function downloadVideoToMp3(youTubeId) {
  console.log(`downloading https://youtube.com/${youTubeId} and logging progress`)
  const YD = new YoutubeMp3Downloader({
    ffmpegPath: which.sync('ffmpeg'),
    outputPath: path.join(userHome, 'Desktop'),
    youtubeVideoQuality: 'highest',
    queueParallelism: 2,
    progressTimeout: 2000,
  })

  YD.download(youTubeId)
  YD.on('finished', data => console.log(data))
  YD.on('error', error => console.error(error))
  YD.on('progress', progress => console.info(progress))
}

