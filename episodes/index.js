// here be some interesting dragons
// beware...
import path from 'path'
import glob from 'glob'
import {groupBy} from 'lodash'
import getEpisodeData from '<utils>/get-episode-data'

const episodeDirectories = glob.sync(
  path.join(__dirname, '**/index.js'),
  {ignore: __filename}
)

const episodes = episodeDirectories.map(getEpisodeData)
const episodeGroups = groupBy(episodes, e => e.past ? 'past' : 'future')
const {future = [], past} = episodeGroups
const nextEpisode = future[0]

export default episodes
export {future, past, episodes, nextEpisode}
