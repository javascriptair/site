import async from 'async'
import generateEpisodeScreenshotPage from '../generate/episode-screenshot'
import getEpisodeDirectories from '../episodes/get-episode-directories'

const episodeDirectories = getEpisodeDirectories()

const parallelLimit = 10

async.eachLimit(episodeDirectories, parallelLimit, generateEpisodeScreenshotPage, err => {
  if (err) {
    throw err
  }
  console.log('All screenshots taken 🌈')
  process.exit(0)
})
