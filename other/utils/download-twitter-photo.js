import path from 'path'
import request from 'request'
import fs from 'fs'
import temp from 'temp'
import filenamify from 'filenamify'

import {getProfileImageURL} from './twitter'
import compressImage from './compress-image'

temp.track()

export default downloadTwitterPhoto

function downloadTwitterPhoto(twitter, destinationDir) {
  twitter = cleanTwitter(twitter)
  const imageName = filenamify(`${twitter}.png`)
  const tempDir = temp.mkdirSync()
  const imgPath = path.join(tempDir, imageName)
  const destinationPath = path.join(destinationDir, imageName)
  getProfileImageURL(twitter)
    .then(downloadImage)
    .catch(logError)

  function downloadImage(imgUrl) {
    request(imgUrl)
      .pipe(fs.createWriteStream(imgPath).on('close', compress))
  }

  function compress() {
    return compressImage(imgPath, destinationPath).then(unlinkImgPath)
  }

  function unlinkImgPath() {
    return new Promise(
      resolve => fs.unlink(imgPath, () => resolve(imgPath))
    )
  }

  function logError(error) {
    console.error('There was an error with adding the guest', error)
  }
}

function cleanTwitter(twitter) {
  return twitter.replace('@', '').trim()
}
