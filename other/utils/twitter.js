/* eslint camelcase:0 */

import Twitter from 'twitter'

const TW = new Twitter({
  consumer_key: process.env.TW_CONSUMER_KEY,
  consumer_secret: process.env.TW_CONSUMER_SECRET,
  access_token_key: process.env.TW_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TW_ACCESS_TOKEN_SECRET,
})

function getProfileImageURL(handle) {
  return new Promise((resolve, reject) => {
    TW.get('users/show.json', {screen_name: handle}, (error, data) => {
      if (!error) {
        resolve(data.profile_image_url.replace('_normal', ''))
      } else {
        reject(error)
      }
    })
  })
}

function sendTweet(message) {
  return new Promise((resolve, reject) => {
    TW.post('statuses/update', {status: message}, (error, tweet) => {
      if (!error) {
        resolve(`Tweet sent ${tweet}`)
      } else {
        reject(error)
      }
    })
  })
}

export {getProfileImageURL, sendTweet}
