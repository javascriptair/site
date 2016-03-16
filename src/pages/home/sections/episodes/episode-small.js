import React from 'react'
import {displayListify} from '../../../../../shared/utils'

export default EpisodeSmall

function EpisodeSmall({episodeData}) {

  const {
    date,
    title,
    titleHTML,
    guests = [],
  } = episodeData

  return (
    <div className="episode--small">

      <a
        className="episode--small__title"
        href={`/episodes/${date}`}
        title={`${title}`}
        dangerouslySetInnerHTML={titleHTML}
      />

      <small className="episode--small__guests">
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
