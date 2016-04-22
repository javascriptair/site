import path from 'path'
import inquirer from 'inquirer'
import {copy} from 'copy-paste'
import {displayListify, sortPeople, validateMessageAndAddEmojiIfOk} from '../shared/utils'
import shortenEpisodeUrl from './shorten-episode-url/logic'
import episodeList from './utils/episode-list'

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
