// here be some interesting dragons
// beware...
import path from 'path'
import glob from 'glob'
import {getEpisodeData} from '../shared/utils'


const episodeDirectories = glob.sync(
  path.join(__dirname, '**/index.js'),
  {ignore: __filename}
)


export default episodeDirectories.map(getEpisodeData)

