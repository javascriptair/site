import {resolve} from 'path'
import getEpisodeData from '<utils>/get-episode-data'
import {nextEpisode} from '../episodes'
import EpisodeEmail from '../src/pages/episode-email'
import {getSponsorsForDate} from '../sponsors'
import renderComponentToFile from './renderComponentToFile'

export default generateEpisodeEmailPage

function generateEpisodeEmailPage(path, cb) {
  const episodePath = resolve(__dirname, '../', path)
  const episodeData = getEpisodeData(episodePath)
  const sponsors = getSponsorsForDate(episodeData.date)

  renderComponentToFile(
    <EpisodeEmail
      nextEpisode={nextEpisode}
      episode={episodeData}
      sponsors={sponsors}
    />,
    resolve(episodePath, './email.html'),
    cb,
  )
}
