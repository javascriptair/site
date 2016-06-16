import async from 'async'
import generateEpisode from '../generate/episode'
import getEpisodeDirectories from '../episodes/get-episode-directories'

const episodeDirectories = getEpisodeDirectories()

const parallelLimit = 10

async.eachLimit(episodeDirectories, parallelLimit, generateEpisode, err => {
  if (err) {
    throw err
  } else {
    console.log('Episodes done building 😎')
  }
})
