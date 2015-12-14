import React from 'react'

import Page from '../../components/page'
import Header from './header'
import SubscribeIconGroupSection from './sections/subscribe-icon-group'
import PreviousEpisodeSection from './sections/previous-episodes'
import EpisodesSection from './sections/episodes'
import HostSection from './sections/host'
import PanelistsSection from './sections/panelists'
import SponsorsSection from '../../components/sponsors'
import LinksSection from './sections/links'

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

      <hr />

      <SubscribeIconGroupSection />

      <hr />

      <EpisodesSection episodes={futureEpisodes} />

      {futureEpisodes.length ? <hr /> : ''}

      <SponsorsSection {...sponsors} />

      <hr />

      <PreviousEpisodeSection episodes={pastEpisodes} />

      {pastEpisodes.length ? <hr /> : ''}

      <HostSection />

      <hr />

      <PanelistsSection panelists={panelists} />

      <hr />

      <SocialIconGroupSection />

      <hr />

      <LinksSection />

      <FeatureShowScript />
    </Page>
  )
}

