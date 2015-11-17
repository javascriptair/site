import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Base from '../../app/components/base'
import Episode from '../../app/components/episode'


export default renderEpisode

function renderEpisode(episode, episodeNumber) {
  return ReactDOMServer.renderToStaticMarkup(
    <Base title={`JavaScript Air | ${episode.title}`}>
      <Episode episode={episode} episodeNumber={episodeNumber} />
    </Base>
  )
}




