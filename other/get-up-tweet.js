import path from 'path'
import inquirer from 'inquirer'
import {copy} from 'copy-paste'
import {displayListify, sortPeople, getRandomPositiveEmoji} from '<utils>/utils'
import shortenEpisodeUrl from './shorten-episode-url/logic'
import episodeList from './utils/episode-list'

getEpisodeDirectory()
  .then(episodePathToEpisodeData)
  .then(generateMessage)
  .then(message => message + ' ' + getRandomPositiveEmoji())
  .then(copyMessage)
  .then(result => console.log(result))
  .catch(err => console.error(err))

function episodePathToEpisodeData(episodeData) {
  const {title, shortUrl, guests} = episodeData
  if (shortUrl) {
    return {title, shortUrl, guests}
  }
  console.warn('This episode has no short URL.')
  return inquirer.prompt([
    {
      name: 'createShortUrl',
      type: 'confirm',
      message: 'Would you like to create one right now?',
      default: true,
    },
  ]).then(({createShortUrl}) => {
    if (createShortUrl) {
      const noCopy = true
      const result = shortenEpisodeUrl(episodeData, noCopy)
        .then(createdShortUrl => {
          return {title, guests, shortUrl: createdShortUrl}
        })
      return result
    } else {
      return {title, guests}
    }
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
  return inquirer.prompt([
    {
      ...episodeList,
      message: 'Which episode is this tweet for?',
    },
  ]).then(({episode}) => episode)
}

function here(d) {
  return path.join(process.cwd(), d || '')
}
