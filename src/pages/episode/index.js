import path from 'path'
import process from 'process'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import {isPast, getEpisodeData} from '../../../shared/utils'

import Page from '../../components/page'

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
          ''
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
      <hr />
      <VideoSection youTubeId={youTubeId} />
      <hr />
      <ShowNotes episode={episodeData} />
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
