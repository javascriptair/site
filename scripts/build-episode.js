import {parallel} from 'async'
import generateEpisode from '../generate/episode'
import generateEpisodeEmailPage from '../generate/episode-email'

const path = process.argv[2]

parallel([
  cb => generateEpisode(path, cb),
  cb => generateEpisodeEmailPage(path, cb),
], () => {
  console.log(`done building ${path} 🎉`)
})
