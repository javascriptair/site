import React from 'react'

import Page from '../../components/page'
import Header from './header'
import PreviousEpisodeSection from './sections/previous-episodes'
import EpisodesSection from './sections/episodes'
import PanelistsSection from './sections/panelists'
import SponsorsSection from '../../components/sponsors'
import LinksSection from './sections/links'
import Footer from './sections/footer';

import SocialIconGroupSection from './sections/social-icon-group'
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
      <EpisodesSection episodes={futureEpisodes} />
      <PanelistsSection panelists={panelists} />
      <Footer />

      <div className="container">

        <SponsorsSection {...sponsors} />

        <PreviousEpisodeSection episodes={pastEpisodes} />

        {pastEpisodes.length ? <hr /> : ''}

        <SocialIconGroupSection />

        <LinksSection />

        <FeatureShowScript />
      </div>
    </Page>
  )
}
