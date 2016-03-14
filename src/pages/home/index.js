import React from 'react'

import {last} from 'lodash'
import Page from '../../components/page'
import Header from './header'
import EpisodesSection from './sections/episodes'
import PanelistsSection from './sections/panelists'
import SponsorsSection from '../../components/sponsors'
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
    <Page>

      <Header show={last(pastEpisodes)}/>
      <EpisodesSection future={futureEpisodes} past={pastEpisodes} />
      <SponsorsSection {...sponsors} />
      <PanelistsSection panelists={panelists} />
      <Footer />

    </Page>
  )
}
