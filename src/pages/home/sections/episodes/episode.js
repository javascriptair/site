import React from 'react'
import PersonGroup from '../../../../components/person-group'

export default Episode

function Episode({episodeData}) {
  const {
    date,
    title,
    time,
    dateDisplay,
    guests = [],
    descriptionHTML,
  } = episodeData

  return (
    <div className="episode">
      <h3>
        <a href={`/episodes/${date}`}>{title}</a>
        <br />
        <small>{dateDisplay} at {time}</small>
      </h3>
      <PersonGroup people={guests} />
      <div className="description">
        <p dangerouslySetInnerHTML={descriptionHTML}></p>
      </div>
    </div>
  )
}

