import path from 'path'
import process from 'process'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import {isPast, getEpisodeData} from '../../../shared/utils'

import TwitterWidgetScript from '../../components/scripts/twitter-widget'

import Page from '../../components/page'
import TwitterFeed from './twitter-feed'

import Header from './sections/header'
import AudioSection from './sections/audio'
import VideoSection from './sections/video'
import ShowNotes from './sections/show-notes'
import SponsorsSection from '../../components/sponsors'

import allSponsors from '../../../sponsors'


function EpisodePage({episode, sponsors}) {
  return (
    <Page
      title={`JavaScript Air | ${episode.title}`}
    >
      <Header
        episode={episode}
      />
      {
        isPast(episode.date) ?
          <PastEpisodeStuff episodeData={episode} sponsors={sponsors} /> :
          <FutureEpisodeStuff episodeData={episode} sponsors={sponsors} />
      }
    </Page>
  )
}

function PastEpisodeStuff({episodeData, sponsors}) {
  const {podbeanId, youTubeId} = episodeData
  return (
    <div>
      <hr />
      <AudioSection podbeanId={podbeanId} />
      {
        youTubeId ? (
          <div>
            <hr />
            <VideoSection youTubeId={youTubeId} />
          </div>
        ) : ''
      }
      <hr />
      <ShowNotes episode={episodeData} />
      <hr />
      <SponsorsSection {...sponsors} />
    </div>
  )
}

function FutureEpisodeStuff({episodeData, sponsors}) {
  const {youTubeId, hangoutId} = episodeData
  return (
    <div>
      {
        youTubeId ? (
          <div>
            <hr />
            <div className="+margin-bottom-large">
              <VideoSection
                youTubeId={youTubeId}
                hangoutId={hangoutId}
                label="Watch Live"
              />
            </div>

            <div className="+display-flex +space-children">
              <TwitterFeed
                widgetId="675885424049393664"
                linkTo="https://twitter.com/hashtag/JavaScriptAir"
              >
                Tweet about #JavaScriptAir
              </TwitterFeed>

              <TwitterFeed
                widgetId="675879000950988805"
                linkTo="https://twitter.com/hashtag/jsAirQuestion"
              >
                Ask a #jsAirQuestion
              </TwitterFeed>
              <TwitterWidgetScript />
            </div>
          </div>
        ) : ''
      }
      <hr />
      <SponsorsSection {...sponsors} />
    </div>
  )
}

const episodePath = path.join(process.cwd(), process.argv[2])
const episodeData = getEpisodeData(episodePath)

const string = ReactDOMServer.renderToStaticMarkup(
  <EpisodePage
    episode={episodeData}
    sponsors={allSponsors}
  />
)

console.log(string) // eslint-disable-line no-console
