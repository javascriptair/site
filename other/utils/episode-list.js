import {episodes} from '../../episodes'

export default {
  name: 'episode',
  type: 'list',
  choices: episodes.map(e => ({name: `${e.numberDisplay}. ${e.title}`, value: e})),
  message: 'Which episode?',
  default: getEpisodeIndexWithNearestDate(episodes),
}

function getEpisodeIndexWithNearestDate(episodes) { // eslint-disable-line no-shadow
  const now = new Date().getTime()
  const timesFromNow = episodes
    .map(e => new Date(e.date).getTime() - now)
    .map(Math.abs)
  const minTime = Math.min(...timesFromNow)
  return timesFromNow.indexOf(minTime)
}
