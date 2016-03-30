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
                if (!g.link) {
                  return <span key={gI}>{g.name}</span>
                }
                return <a key={gI} href={g.link}>{g.name}</a>
              })
          )
        }
      </small>

    </div>
  )
}
