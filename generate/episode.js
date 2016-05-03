import {resolve} from 'path'
import renderComponentToFile from './renderComponentToFile'

import getEpisodeData from '<utils>/get-episode-data'
import {getSponsorsForDate} from '../sponsors'
import EpisodePage from '../src/pages/episode'

const episodePath = resolve(__dirname, '../', process.argv[2])
const episodeData = getEpisodeData(episodePath)
const sponsors = getSponsorsForDate(episodeData.date)

renderComponentToFile(
  <EpisodePage
    episode={episodeData}
    sponsors={sponsors}
  />,
  resolve(episodePath, './index.html'),
)
