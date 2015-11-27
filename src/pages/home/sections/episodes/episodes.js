import React from 'react'
import Episode from './episode'

import utils from '../../../../utils'


export default EpisodesSection

function EpisodesSection({episodes = []}) {
  return (
    <section>
      <h2>Upcoming Episodes</h2>
      <div className="episodes">
        {
          utils.intersperse(
            episodes
              .sort(utils.sortEpisodes)
              .map((e, i) => <Episode episodeData={e} key={i} />),
            (e, i) => <hr key={`hr${i}`} className="episode-separator" />
          )
        }
      </div>
    </section>
  )
}
