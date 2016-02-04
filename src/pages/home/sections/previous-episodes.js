import React from 'react'
import {sortEpisodes, displayListify} from '../../../../shared/utils'

export default PreviousEpisodeSection

function PreviousEpisodeSection({episodes = []}) {
  if (episodes.length === 0) {
    return <section />
  }

  return (
    <section className="previous-episodes-section" id="previous-episodes">
      <div className="previous-episodes-section__container">
        <h2 className="previous-episodes-section__heading">Previous Episodes</h2>
        <div className="previous-episodes-list">
          {
            episodes
              .sort(sortEpisodes)
              .map((e, i) => {
                return (
                  <div className="previous-episodes-list__item" key={i}>
                    {i}. <a className="previous-episodes-list__link"
                    href={`/episodes/${e.date}`} title={`${e.title}`}>{e.title}</a>
                    <small className="previous-episodes-list__small">
                      {' with '}
                      {
                        displayListify(
                          (e.guests || [])
                            .map((g, gI) => {
                              return <a className="previous-episodes-list__link"
                              key={gI} href={`https://twitter.com/${g.twitter}`}>{g.name}</a>
                            })
                        )
                      }
                    </small>
                  </div>
                )
              })
          }
        </div>
      </div>
    </section>
  )
}
