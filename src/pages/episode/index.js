import path from 'path'
import process from 'process'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Page from '../../components/page'
import Episode from '../../components/episode'
import AudioPlayer from './audio-player'



function EpisodePage({episode}) {
  return (
    <Page
      title={`JavaScript Air | ${episode.title}`}
    >
      <Episode
        episodeData={episode}
      />
      <hr />
      <AudioPlayer />
    </Page>
  )
}

const episodePath = path.join(process.cwd(), process.argv[2])
const episodeData = {
  date: episodePath.slice(-10),
  ...require(episodePath).default,
}
const string = ReactDOMServer.renderToStaticMarkup(
  <EpisodePage
    episode={episodeData}
  />
)

console.log(string) // eslint-disable-line no-console
