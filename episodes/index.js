// here be some interesting dragons
// beware...
import path from 'path'
import glob from 'glob'
import moment from 'moment'
import {groupBy} from 'lodash'
import getEpisodeData from '../shared/get-episode-data'


const episodeDirectories = glob.sync(
  path.join(__dirname, '**/index.js'),
  {ignore: __filename}
)


const episodes = episodeDirectories.map(getEpisodeData)

const today = moment()
const yesterday = today.subtract(1, 'day')
const episodeGroups = groupBy(episodes, e => {
  return yesterday.diff(e.date) < 0 ? 'future' : 'past'
})

const {future, past} = episodeGroups
const nextEpisode = future[0]

export default episodes
export {future, past, episodes, nextEpisode}
