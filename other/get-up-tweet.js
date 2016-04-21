import path from 'path'
import inquirer from 'inquirer'
import {copy} from 'copy-paste'
import {sample} from 'lodash'
import {displayListify, sortPeople} from '../shared/utils'
import shortenEpisodeUrl from './shorten-episode-url/logic'
import episodeList from './utils/episode-list'

export {validateMessageAndAddEmojiIfOk}

getEpisodeDirectory()
  .then(episodePathToEpisodeData)
  .then(generateMessage)
  .then(validateMessageAndAddEmojiIfOk)
  .then(copyMessage)
  .then(result => console.log(result))
  .catch(err => console.error(err))

function episodePathToEpisodeData(episodeData) {
  const {title, shortUrl, guests} = episodeData
  if (shortUrl) {
    return {title, shortUrl, guests}
  }
  console.warn('This episode has no short URL.')
  return new Promise(resolve => {
    inquirer.prompt([
      {
        name: 'createShortUrl',
        type: 'confirm',
        message: 'Would you like to create one right now?',
        default: true,
      },
    ], ({createShortUrl}) => {
      if (createShortUrl) {
        const noCopy = true
        const result = shortenEpisodeUrl(episodeData, noCopy)
          .then(createdShortUrl => {
            return {title, guests, shortUrl: createdShortUrl}
          })
        resolve(result)
      } else {
        resolve({title, guests})
      }
    })
  })
}

function generateMessage({title, guests, shortUrl}) {
  const twitterHandles = sortPeople(guests).map(g => g.twitter ? `@${g.twitter}` : g.name)
  const url = shortUrl ? ` ${shortUrl}` : ''

  return `"${title}" w/ ${displayListify(twitterHandles).join('')} is up!${url}`
}

function validateMessageAndAddEmojiIfOk(message) {
  const emoji = sample(['✨', '💥', '🎉', '🚀', '🌟', '🎊', '👍', '💯', '👏', '🙌', '😎', '🔥', '😻'])
  const MAX_TWEET_LENGTH = 140
  const LENGTH_OF_IMAGE = 24
  const AVAILABLE_TWEET_LENGTH = MAX_TWEET_LENGTH - LENGTH_OF_IMAGE
  if (AVAILABLE_TWEET_LENGTH - message.length >= emoji.length) {
    return `${message} ${emoji}`
  } else if (message.length > AVAILABLE_TWEET_LENGTH) {
    console.warn('**The tweet is too long**')
  }
  return message
}

function copyMessage(message) {
  return new Promise((resolve, reject) => {
    copy(message, err => {
      if (err) {
        reject(err)
      }
      resolve(`\`${message}\` was copied to your clipboard`)
    })
  })
}

function getEpisodeDirectory() {
  if (process.argv[2]) {
    return Promise.resolve(here(process.argv[2]))
  }
  return new Promise(resolve => {
    inquirer.prompt([
      {
        ...episodeList,
        message: 'Which episode is this tweet for?',
      },
    ], ({episode}) => {
      resolve(episode)
    })
  })
}

function here(d) {
  return path.join(process.cwd(), d || '')
}
