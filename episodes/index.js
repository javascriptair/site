// here be some interesting dragons
// beware...
import {groupBy} from 'lodash'
import getEpisodeData from '<utils>/get-episode-data'
import getEpisodeDirectories from './get-episode-directories'

const episodeDirectories = getEpisodeDirectories()
const episodes = episodeDirectories.map(getEpisodeData)
const episodeGroups = groupBy(episodes, e => e.past ? 'past' : 'future')
const {future = [], past} = episodeGroups
const nextEpisode = future[0]

export default episodes
export {future, past, episodes, nextEpisode}
