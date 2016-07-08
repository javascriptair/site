import {resolve} from 'path'
import LinksTipsPicks from '../src/pages/links-tips-picks'
import {episodes, nextEpisode} from '../episodes'
import renderComponentToFile from './renderComponentToFile'

renderComponentToFile(
  <LinksTipsPicks
    nextEpisode={nextEpisode}
    episodes={episodes}
  />,
  resolve(__dirname, '../links-tips-picks/index.html')
)
