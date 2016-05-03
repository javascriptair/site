import {resolve} from 'path'
import renderComponentToFile from './renderComponentToFile'

import {future as futureEpisodes, past as pastEpisodes} from '../episodes'
import {currentSponsors} from '../sponsors'
import {panelists} from '<resources>/panelists'

import Home from '../src/pages/home'


renderComponentToFile(
  <Home
    futureEpisodes={futureEpisodes}
    pastEpisodes={pastEpisodes}
    sponsors={currentSponsors}
    panelists={panelists}
  />,
  resolve(__dirname, '../index.html'),
)
