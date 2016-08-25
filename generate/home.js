import {resolve} from 'path'
import panelists from '<resources>/panelists'
import Home from '../src/pages/home'
import {future as futureEpisodes, past as pastEpisodes} from '../episodes'
import {currentSponsors} from '../sponsors'
import renderComponentToFile from './renderComponentToFile'

renderComponentToFile(
  <Home
    futureEpisodes={futureEpisodes}
    pastEpisodes={pastEpisodes}
    sponsors={currentSponsors}
    panelists={panelists}
  />,
  [
    resolve(__dirname, '../index.html'),
    resolve(__dirname, '../404.html'),
  ],
)
