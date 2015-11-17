import React from 'react'
import Base from './base'

export default Episode

function Episode({episodeNumber, episode: e}) {
  return <h1>
    JavaScript Air Episode {episodeNumber} - {e.title}
  </h1>
}
