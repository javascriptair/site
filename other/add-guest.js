import request from 'request'
import fs from 'fs'
import path from 'path'
import inquirer from 'inquirer'
import {episodes} from '../episodes'

import {getProfileImageURL} from './utils/twitter'
import compressImage from './utils/compress-image'

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
  twitter = cleanTwitter(twitter)
  const imageName = `${twitter}.png`
  const imgPath = path.join(__dirname, imageName)
  const episodePath = path.join(process.cwd(), 'episodes', episodeDate, imageName)

  getProfileImageURL(twitter)
    .then(downloadImage)
    .catch(logError)

  function downloadImage(imgUrl) {
    request(imgUrl)
      .pipe(fs.createWriteStream(imgPath).on('close', compress))
  }

  function compress() {
    return compressImage(imgPath, episodePath).then(unlinkImgPath)
  }

  function unlinkImgPath() {
    return new Promise(
      resolve => fs.unlink(imgPath, () => resolve(imgPath))
    )
  }

  function logError(error) {
    console.error('There was an error with adding the guest', error)
  }
})

function cleanTwitter(twitter) {
  return twitter.replace('@', '').trim()
}
