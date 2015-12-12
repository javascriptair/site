import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {groupBy} from 'lodash'
import moment from 'moment'

import Page from '../../components/page'
import Header from './header'
import SubscribeIconGroupSection from './sections/subscribe-icon-group'
import PreviousEpisodeSection from './sections/previous-episodes'
import EpisodesSection from './sections/episodes'
import HostSection from './sections/host'
import PanelistsSection from './sections/panelists'
import SponsorsSection from './sections/sponsors'
import LinksSection from './sections/links'

import SocialIconGroupSection from './sections/social-icon-group'
import FeatureShowScript from './scripts/feature-show'

import episodes from '../../../episodes'
import allSponsors from '../../../sponsors'

const today = moment()
const yesterday = today.subtract(1, 'day')
const episodeGroups = groupBy(episodes, e => {
  return yesterday.diff(e.date) < 0 ? 'future' : 'past'
})

function Home({futureEpisodes = [], pastEpisodes = [], sponsors}) {
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

      <PanelistsSection />

      <hr />

      <SocialIconGroupSection />

      <hr />

      <LinksSection />

      <FeatureShowScript />
    </Page>
  )
}

const string = ReactDOMServer.renderToStaticMarkup(
  <Home
    futureEpisodes={episodeGroups.future}
    pastEpisodes={episodeGroups.past}
    sponsors={allSponsors}
  />
)

console.log(string) // eslint-disable-line no-console
