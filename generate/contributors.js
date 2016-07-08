import {resolve} from 'path'
import renderComponentToFile from './renderComponentToFile'

import host from '<resources>/host'
import sponsors from '../sponsors'
import contributors from '../data/contributors'
import panelists from '<resources>/panelists'
import {nextEpisode} from '../episodes'
import Contributors from '../src/pages/contributors'
import {sortPeople} from '<utils>/utils'

const panelistContributors = panelists.map(p => ({
  contributions: 'Panelist',
  ...p,
}))

const sponsorContributors = Object.keys(sponsors).reduce((array, sponsorGroupKey) => {
  const groupName = sponsorGroupKey.replace('Sponsors', '').replace(/^./, m => m.toUpperCase())
  const groupArray = sponsors[sponsorGroupKey].map(sponsor => ({
    contributions: `${groupName} Sponsor`,
    squareImage: true,
    ...sponsor,
  }))
  return [...array, ...groupArray]
}, [])

const nonFinancialContributors = sortPeople([host, ...panelistContributors, ...contributors])

renderComponentToFile(
  <Contributors
    sponsors={sponsorContributors}
    nonFinancialContributors={nonFinancialContributors}
    nextEpisode={nextEpisode}
  />,
  resolve(__dirname, '../contributors/index.html'),
)
