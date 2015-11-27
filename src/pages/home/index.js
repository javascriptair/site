import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {groupBy} from 'lodash'
import moment from 'moment'

import Page from '../page'
import Header from './header'
import SubscribeIconGroupSection from './sections/subscribe-icon-group'
import PreviousEpisodeSection from './sections/previous-episodes'
import EpisodesSection from './sections/episodes'
import HostSection from './sections/host'
import PanelistsSection from './sections/panelists'
import SocialIconGroupSection from './sections/social-icon-group'
import GoogleAnalyticsScript from './scripts/google-analytics'
import FeatureShowScript from './scripts/feature-show'

import episodes from '../../../episodes'

const today = moment()
const yesterday = today.subtract(1, 'day')
const episodeGroups = groupBy(episodes, e => {
  return yesterday.diff(e.date) < 0 ? 'future' : 'past'
})

function Home({futureEpisodes = [], pastEpisodes = []}) {
  return (
    <Page>
      <Header />

      <hr />

      <SubscribeIconGroupSection />

      <hr />

      <EpisodesSection episodes={futureEpisodes} />

      {futureEpisodes.length ? <hr /> : ''}

      <PreviousEpisodeSection episodes={pastEpisodes} />

      {pastEpisodes.length ? <hr /> : ''}

      <HostSection />

      <hr />

      <PanelistsSection />

      <hr />

      <SocialIconGroupSection />

      <GoogleAnalyticsScript />
      <FeatureShowScript />
    </Page>
  )
}

const string = ReactDOMServer.renderToStaticMarkup(
  <Home
    futureEpisodes={episodeGroups.future}
    pastEpisodes={episodeGroups.past}
  />
)

console.log(string) // eslint-disable-line no-console

