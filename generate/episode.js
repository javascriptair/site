import path from 'path'
import process from 'process'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import getEpisodeData from '../shared/get-episode-data'
import {getSponsorsForDate} from '../sponsors'
import EpisodePage from '../src/pages/episode'

const episodePath = path.join(process.cwd(), process.argv[2])
const episodeData = getEpisodeData(episodePath)
const sponsors = getSponsorsForDate(episodeData.date)

const string = ReactDOMServer.renderToStaticMarkup(
  <EpisodePage
    episode={episodeData}
    sponsors={sponsors}
  />
)

console.log(string) // eslint-disable-line no-console
