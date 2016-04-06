import {writeFileSync} from 'fs'
import {resolve} from 'path'
import ReactDOMServer from 'react-dom/server'

import sponsors from '../sponsors'
import contributors from '../data/contributors'
import {panelists} from '../resources/panelists'
import {nextEpisode} from '../episodes'

import Contributors from '../src/pages/contributors'

const host = {
  twitter: 'kentcdodds',
  link: 'https://twitter.com/kentcdodds',
  imgSrc: '/resources/kentcdodds.png',
  name: 'Kent C. Dodds',
  contributions: 'Host + stuff',
}

const panelistContributors = panelists.map(p => {
  return {
    contributions: 'Panelist',
    ...p,
  }
})

const sponsorContributors = Object.keys(sponsors).reduce((array, sponsorGroupKey) => {
  const groupName = sponsorGroupKey.replace('Sponsors', '').replace(/^./, m => m.toUpperCase())
  const groupArray = sponsors[sponsorGroupKey].map(sponsor => {
    return {
      contributions: `${groupName} Sponsor`,
      squareImage: true,
      ...sponsor,
    }
  })
  return [...array, ...groupArray]
}, [])


const string = ReactDOMServer.renderToStaticMarkup(
  <Contributors
    sponsors={sponsorContributors}
    contributors={contributors}
    panelists={panelistContributors}
    host={host}
    nextEpisode={nextEpisode}
  />
)

writeFileSync(resolve(__dirname, '../contributors/index.html'), string)
