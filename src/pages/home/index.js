import React from 'react'

import Page from '../../components/page'
import Header from './header'
import EpisodesSection from './sections/episodes'
import PanelistsSection from './sections/panelists'
import SponsorsSection from '../../components/sponsors'
import Footer from './sections/footer'

import FeatureShowScript from './scripts/feature-show'

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

      <Header />
      <EpisodesSection future={futureEpisodes} past={pastEpisodes} />
      <SponsorsSection {...sponsors} />
      <PanelistsSection panelists={panelists} />
      <Footer />

      <FeatureShowScript />
    </Page>
  )
}
