import React from 'react'
import moment from 'moment'
import {markdown} from 'markdown'
import Person from '../../components/person'
import deindent from 'deindent'

export default Episode

function Episode({episodeData}) {
  const {hangoutUrl, title, date, guests, description} = episodeData
  const time = episodeData.time || '12:00 PM (CT)'
  const dateDisplay = moment(date).format('dddd, MMMM Do, YYYY')
  return (
    <div className="episode">
      <h3>
        {getTitle(hangoutUrl, title)}
        <br />
        <small>{dateDisplay} at {time}</small>
      </h3>
      <div className="person-group +space-children">
        {guests.map((guest, index) => (
          <Person imgSrc={`episodes/${date}/${guest.twitter}.png`} key={index} {...guest} />
        ))}
      </div>
      <p dangerouslySetInnerHTML={getDescriptionHTML(description)}></p>
    </div>
  )
}

function getDescriptionHTML(description) {
  return {__html: markdown.toHTML(deindent(description))}
}

function getTitle(hangoutUrl, title) {
  if (hangoutUrl) {
    return <a href={hangoutUrl}>{title}</a>
  } else {
    return <span>{title} <small>(hangout link coming soon)</small></span>
  }
}

