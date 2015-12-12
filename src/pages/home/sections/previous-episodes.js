import React from 'react'
import {sortEpisodes, displayListify} from '../../../../shared/utils'

export default PreviousEpisodeSection

function PreviousEpisodeSection({episodes = []}) {
  if (episodes.length === 0) {
    return <section />
  }

  return (
    <section id="previous-episodes">
      <h2>Previous Episodes</h2>
      <div className="episodes">
        {
          episodes
            .sort(sortEpisodes)
            .map((e, i) => {
              return (
                <div key={i}>
                  {i}. <a href={`/episodes/${e.date}`} title={`${e.title}`}>{e.title}</a>
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

