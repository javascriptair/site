import {resolve} from 'path'
import getEpisodeData from '<utils>/get-episode-data'
import {nextEpisode} from '../episodes'
import EpisodePage from '../src/pages/episode'
import {getSponsorsForDate} from '../sponsors'
import renderComponentToFile from './renderComponentToFile'

export default generateEpisode

function generateEpisode(path, cb) {
  const episodePath = resolve(__dirname, '../', path)
  const episodeData = getEpisodeData(episodePath)
  const sponsors = getSponsorsForDate(episodeData.date)

  renderComponentToFile(
    <EpisodePage
      episode={episodeData}
      nextEpisode={nextEpisode}
      sponsors={sponsors}
    />,
    resolve(episodePath, './index.html'),
    cb,
  )
}
