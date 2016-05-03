import {resolve} from 'path'
import renderComponentToFile from './renderComponentToFile'

import {host} from '<resources>/host'
import sponsors from '../sponsors'
import contributors from '../data/contributors'
import {panelists} from '<resources>/panelists'
import {nextEpisode} from '../episodes'
import Contributors from '../src/pages/contributors'


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


renderComponentToFile(
  <Contributors
    sponsors={sponsorContributors}
    contributors={contributors}
    panelists={panelistContributors}
    host={host}
    nextEpisode={nextEpisode}
  />,
  resolve(__dirname, '../contributors/index.html'),
)
