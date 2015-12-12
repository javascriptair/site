import React from 'react'
import PersonGroup from './person-group'

export default Episode

function Episode({episodeData}) {
  const {
    hangoutUrl,
    title,
    time,
    dateDisplay,
    guests = [],
    descriptionHTML,
  } = episodeData

  return (
    <div className="episode">
      <h3>
        {getTitle(hangoutUrl, title)}
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

function getTitle(hangoutUrl, title) {
  if (hangoutUrl) {
    return <a href={hangoutUrl}>{title}</a>
  } else {
    return <span>{title} <small>(hangout link coming soon)</small></span>
  }
}

