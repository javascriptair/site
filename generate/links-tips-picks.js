import {resolve} from 'path'
import renderComponentToFile from './renderComponentToFile'
import {episodes, nextEpisode} from '../episodes'
import LinksTipsPicks from '../src/pages/links-tips-picks'

renderComponentToFile(
  <LinksTipsPicks
    nextEpisode={nextEpisode}
    episodes={episodes}
  />,
  resolve(__dirname, '../links-tips-picks/index.html')
)
