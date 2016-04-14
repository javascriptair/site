import {exec} from 'child_process'
import request from 'request'
import fs from 'fs'
import path from 'path'
import inquirer from 'inquirer'
import {episodes} from '../episodes'

import {getProfileImageURL} from './utils/twitter'

inquirer.prompt([
  {
    name: 'twitter',
    type: 'input',
    message: 'Twitter handle?',
  },
  {
    name: 'episodeDate',
    type: 'list',
    choices: episodes.map(e => ({name: e.title, value: e.date})),
    message: 'Which episode?',
    default: episodes.length - 1,
  },
], ({twitter, episodeDate}) => {
  const imageName = `${twitter}.png`
  const imgPath = path.join(__dirname, imageName)
  const episodePath = path.join(process.cwd(), 'episodes', episodeDate, imageName)

  getProfileImageURL(twitter)
    .then(downloadImage)
    .catch(logError)

  function downloadImage(imgUrl) {
    request(imgUrl)
      .pipe(fs.createWriteStream(imgPath).on('close', compressImage))
  }

  function compressImage() {
    return new Promise((resolve, reject) => {
      exec(`babel-node ./other/compress-image ${imgPath} ${episodePath}`, imgCompressionResult)
      function imgCompressionResult(error) {
        if (error !== null) {
          reject(error)
        } else {
          fs.unlink(imgPath, () => resolve(imgPath))
        }
      }
    })
  }

  function logError(error) {
    console.error('There was an error with adding the guest', error)
  }
})
