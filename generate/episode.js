import path from 'path'
import process from 'process'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import getEpisodeData from '../shared/get-episode-data'
import allSponsors from '../sponsors'
import EpisodePage from '../src/pages/episode'


const episodePath = path.join(process.cwd(), process.argv[2])
const episodeData = getEpisodeData(episodePath)

const string = ReactDOMServer.renderToStaticMarkup(
  <EpisodePage
    episode={episodeData}
    sponsors={allSponsors}
  />
)

console.log(string) // eslint-disable-line no-console
