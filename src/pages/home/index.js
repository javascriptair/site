import {PropTypes} from 'react'

import {last} from 'lodash'
import Page from '<components>/page'
import Header from './header'
import EpisodesSection from './sections/episodes'
import PanelistsSection from './sections/panelists'
import SponsorsSection from '<components>/sponsors'
import Footer from './sections/footer'

export default Home

function Home(
  {
    futureEpisodes = [],
    pastEpisodes = [],
    sponsors,
    panelists,
  }
) {
  return (
    <Page includeManifest={true}>
      <Header show={last(pastEpisodes)} />
      <EpisodesSection future={futureEpisodes} past={pastEpisodes} />
      <SponsorsSection {...sponsors} />
      <PanelistsSection panelists={panelists} />
      <Footer />
    </Page>
  )
}

Home.propTypes = {
  futureEpisodes: PropTypes.array,
  pastEpisodes: PropTypes.array,
  sponsors: PropTypes.object,
  panelists: PropTypes.array,
}
