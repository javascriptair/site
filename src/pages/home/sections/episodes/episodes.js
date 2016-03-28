import React from 'react'
import Episode from './episode'
import EpisodeSmall from './episode-small'
import {sortBy} from 'lodash'

import Title from '../../../../components/title.js'

export default EpisodesSection

function EpisodesSection({future, past}) {

  const futureEpisodes = sortBy(future, 'date')
  const nearFutureEpisodes = futureEpisodes.slice(0, 3)
  const farFutureEpisodes = futureEpisodes.splice(3, futureEpisodes.length)

  const pastEpisodes = sortBy(past, 'date').reverse()

  return (
    <section id="episodes" className="episodes">
      <div className="episodes__container">

        {/* Upcoming Episodes - The first three upcoming episodes are displayed prominently */}

        <Title
          name={lamePlural('Upcoming Episode', nearFutureEpisodes)}
          buttonText="Suggest an Episode"
          buttonUrl="http://suggest.javascriptair.com"
        />

        <div className="episodes-container">
          {
            nearFutureEpisodes.map((e, i) => <Episode episodeData={e} key={i} index={i} />)
          }
        </div>

        <FutureEpisodes episodes={farFutureEpisodes} />
        <PastEpisodes episodes={pastEpisodes} />

      </div>
    </section>
  )
}

function FutureEpisodes({episodes = []}) {
  if (!episodes.length) {
    return <noscript />
  }
  return (
    <div>
      <Title name={lamePlural('Future Episodes', episodes)} />

      <div className="episodes-container--future episodes-container--small">
        {mapToSmallEpisodes(episodes)}
      </div>
    </div>
  )
}

function PastEpisodes({episodes = []}) {
  if (!episodes.length) {
    return <noscript />
  }
  return (
    <div>
      <Title name="Past Episodes" id="previous-episodes" />

      <div className="episodes-container--past episodes-container--small">
        {mapToSmallEpisodes(episodes)}
      </div>
    </div>
  )
}

function mapToSmallEpisodes(episodes) {
  return episodes.map((e, i) => <EpisodeSmall episodeData={e} key={i} />)
}

function lamePlural(string, array) {
  return string + (array.length === 1 ? '' : 's')
}

