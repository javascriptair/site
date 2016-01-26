import React from 'react'

import Page from '../../components/page'
import Header from './header'
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
      <EpisodesSection episodes={futureEpisodes} />
      <PanelistsSection panelists={panelists} />

      <div className="container">



        {futureEpisodes.length ? <hr /> : ''}

        <SponsorsSection {...sponsors} />

        <hr />

        <PreviousEpisodeSection episodes={pastEpisodes} />

        {pastEpisodes.length ? <hr /> : ''}

        <HostSection />

        <hr />


        <hr />

        <SocialIconGroupSection />

        <hr />

        <LinksSection />

        <FeatureShowScript />
      </div>
    </Page>
  )
}
