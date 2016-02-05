import React from 'react'
import {displayListify} from '../../../../../shared/utils'

export default EpisodeSmall

function EpisodeSmall({episodeData}) {

  const {
    date,
    title,
    guests = [],
  } = episodeData

  return (
    <div className="episode-mobile">

      <a href={`/episodes/${date}`} title={`${title}`}>{title}</a>
      
      <small>
        {' with '}
        {
          displayListify(
            (guests || [])
              .map((g, gI) => {
                return <a key={gI} href={`https://twitter.com/${g.twitter}`}>{g.name}</a>
              })
          )
        }
      </small>

    </div>
  )
}
