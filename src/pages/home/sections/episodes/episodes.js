import React from 'react'
import Episode from './episode'

import * as utils from '../../../../../shared/utils'


export default EpisodesSection

function EpisodesSection({episodes = []}) {
  return (
    <section id="episodes" className="episodes">
      <div className="episodes__container">

        <h2 className="title">Upcoming Episodes</h2>

        <div className="episodes">
          {
            episodes
              .sort(utils.sortEpisodes)
              .map((e, i) => <Episode episodeData={e} key={i} />)
          }
        </div>

      </div>
    </section>
  )
}
