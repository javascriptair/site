import React from 'react'
import Episode from './episode'
import EpisodeSmall from './episode-small'

import * as utils from '../../../../../shared/utils'

import Title from '../../../../components/title.js'

export default EpisodesSection

function EpisodesSection({future, past}) {

  const futureEpisodes = future.sort(utils.sortEpisodes)
  const pastEpisodes = past.sort(utils.sortEpisodes)

  return (
    <section id="episodes" className="episodes">
      <div className="episodes__container">

        {/* Upcoming Episodes - The first three upcoming episodes are displayed prominently */}

        <Title
          name="Upcoming Episodes"
          buttonText="Suggest Episode"
          buttonUrl="#"
        />

        <div className="episodes-container">
          {
            futureEpisodes.slice(0, 3).map((e, i) => <Episode episodeData={e} key={i} />)
          }
        </div>

        {/* Future Episodes - Anything after the first three is made concise */}

        <h2 className="episodes__title">Future Episodes</h2>

        <div className="episodes-container--future episodes-container--small">
          {
            futureEpisodes.splice(3, futureEpisodes.length)
              .map((e, i) => <EpisodeSmall episodeData={e} key={i} />)
          }
        </div>

        {/* Past Episodes - All episodes that have happened in the past */}

        <h2 className="episodes__title">Past Episodes</h2>

        <div className="episodes-container--past episodes-container--small">
          {
            pastEpisodes.map((e, i) => <EpisodeSmall episodeData={e} key={i} />)
          }
        </div>

      </div>
    </section>
  )
}
