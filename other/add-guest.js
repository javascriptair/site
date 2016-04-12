import {getProfileImageURL} from './utils/twitter'
import request from 'request'
import fs from 'fs'
import path from 'path'

const exec = require('child_process').exec

const guestTwitterHandle = process.argv[2]
const episodeDate = process.argv[3]

const imageName = `${guestTwitterHandle}.png`
const imgPath = path.join(__dirname, imageName)
const episodePath = path.join(process.cwd(), 'episodes', episodeDate, imageName)

getProfileImageURL(guestTwitterHandle)
  .then(downloadImage)

function downloadImage(imgUrl) {
  request(imgUrl)
    .pipe(fs.createWriteStream(imgPath).on('close', compressImage))
}

function compressImage() {
  exec(`babel-node ./other/compress-image ${imgPath} ${episodePath}`, imgCompressionResult)
}

function imgCompressionResult(error) {
  if (error !== null) {
    console.log('exec error: ' + error)
  } else {
    fs.unlink(imgPath)
  }
}
