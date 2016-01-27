import React from 'react'
import Episode from './episode'

import * as utils from '../../../../../shared/utils'


export default EpisodesSection

function EpisodesSection({episodes = []}) {

  const sortedEpisodes = episodes.sort(utils.sortEpisodes)

  return (
    <section id="episodes" className="episodes">
      <div className="episodes__container">

        {/* Upcoming Episodes -  The first three upcoming episodes are displayed prominently */}

        <h2 className="episodes__title">Upcoming Episodes</h2>

        <div className="episodes-container">
          {
            sortedEpisodes.slice(0, 3).map((e, i) => <Episode episodeData={e} key={i} />)
          }
        </div>

        {/* Future Episodes - Anything after the first three is made concise*/}

        <h2 className="episodes__title">Future Episodes</h2>

        <div className="episodes-container--future">
          {
            sortedEpisodes.splice(3, sortedEpisodes.length).map((e, i) => <Episode episodeData={e} key={i} />)
          }
        </div>

      </div>
    </section>
  )
}
