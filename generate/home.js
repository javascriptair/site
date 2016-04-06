import {writeFileSync} from 'fs'
import {resolve} from 'path'
import ReactDOMServer from 'react-dom/server'

import {future as futureEpisodes, past as pastEpisodes} from '../episodes'
import {currentSponsors} from '../sponsors'
import {panelists} from '../resources/panelists'

import Home from '../src/pages/home'


const string = ReactDOMServer.renderToStaticMarkup(
  <Home
    futureEpisodes={futureEpisodes}
    pastEpisodes={pastEpisodes}
    sponsors={currentSponsors}
    panelists={panelists}
  />
)

writeFileSync(resolve(__dirname, '../index.html'), string)
