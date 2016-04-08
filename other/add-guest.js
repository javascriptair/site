/* eslint camelcase:0 */
import Twitter from 'twitter'
import request from 'request'
import fs from 'fs'
import path from 'path'

const exec = require('child_process').exec

const TW = new Twitter({
  consumer_key: process.env.TW_CONSUMER_KEY,
  consumer_secret: process.env.TW_CONSUMER_SECRET,
  access_token_key: process.env.TW_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TW_ACCESS_TOKEN_SECRET,
})

const guestTwitterHandle = process.argv[2]
const episodeDate = process.argv[3]

const imageName = `${guestTwitterHandle}.png`
const imgPath = path.join(__dirname, imageName)
const episodePath = __dirname.replace('other', `episodes/${episodeDate}/${imageName}`)

const twitterParams = {screen_name: guestTwitterHandle}

TW.get('users/show.json', twitterParams, parseTWData)

function parseTWData(error, data) {
  const fullImage = data.profile_image_url.replace('_normal', '')

  getImage(fullImage)
}

function getImage(imgUrl) {
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
