import Twitter from 'twitter'

const TW = new Twitter(getTwitterConfig())
export {getProfileImageURL, sendTweet}

function getProfileImageURL(handle) {
  return new Promise((resolve, reject) => {
    const options = {screen_name: handle} // eslint-disable-line camelcase
    TW.get('users/show.json', options, (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data.profile_image_url.replace('_normal', ''))
      }
    })
  })
}

function sendTweet(message) {
  return new Promise((resolve, reject) => {
    TW.post('statuses/update', {status: message}, (error, tweet) => {
      if (error) {
        reject(error)
      } else {
        resolve(`Tweet sent ${tweet}`)
      }
    })
  })
}

function getTwitterConfig() {
  try {
    return require('./twitter.api.ignored.json') // eslint-disable-line global-require
  } catch (e) {
    throw new Error('you must provide Twitter API info with a twitter.api.ignored.json')
  }
}
