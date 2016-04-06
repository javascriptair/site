import {writeFileSync} from 'fs'
import {resolve} from 'path'
import ReactDOMServer from 'react-dom/server'
import getEpisodeData from '../shared/get-episode-data'
import {getSponsorsForDate} from '../sponsors'
import EpisodePage from '../src/pages/episode'

const episodePath = resolve(__dirname, '../', process.argv[2])
const episodeData = getEpisodeData(episodePath)
const sponsors = getSponsorsForDate(episodeData.date)

const string = ReactDOMServer.renderToStaticMarkup(
  <EpisodePage
    episode={episodeData}
    sponsors={sponsors}
  />
)

writeFileSync(resolve(episodePath, './index.html'), string)
