import async from 'async'
import generateEpisode from '../generate/episode'
import generateEpisodeEmailPage from '../generate/episode-email'
import getEpisodeDirectories from '../episodes/get-episode-directories'

const episodeDirectories = getEpisodeDirectories()

const parallelLimit = 10

async.eachLimit(episodeDirectories, parallelLimit, buildEpisodeThings, err => {
  if (err) {
    throw err
  } else {
    console.log('Episodes done building 😎')
  }
})

function buildEpisodeThings(path, cb) {
  async.parallel([
    cb1 => generateEpisode(path, cb1),
    cb1 => generateEpisodeEmailPage(path, cb1),
  ], cb)
}
