import React from 'react'
import {sortEpisodes, displayListify} from '../../../utils'

export default PreviousEpisodeSection

function PreviousEpisodeSection({pastEpisodes = []}) {
  if (pastEpisodes.length === 0) {
    return <section />
  }

  return (
    <section>
      <h2>Previous Episodes</h2>
      <div className="episodes">
        {
          pastEpisodes
            .sort(sortEpisodes)
            .map((e, i) => {
              return (
                <div key={i}>
                  {i}. <a href={e.hangoutUrl} title={`${e.title} Hangout`}>{e.title}</a>
                  <small>
                    {' with '}
                    {
                      displayListify(
                        (e.guests || [])
                          .map((g, gI) => {
                            return <a key={gI} href={`https://twitter.com/${g.twitter}`}>{g.name}</a>
                          })
                      )
                    }
                  </small>
                </div>
              )
            })
        }
      </div>
    </section>
  )
}

