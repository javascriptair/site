import React from 'react'
import PersonGroup from '../../../../components/person-group'
import {sortPeople, isPast} from '../../../../../shared/utils'
import RSVPIcon from '../../../../components/rsvp-icon'

export default Header

function Header({episode}) {
  const {
    title,
    time,
    dateDisplay,
    date,
    guests = [],
    descriptionHTML,
    hangoutUrl,
  } = episode
  const past = episode.past || isPast(date)
  const sortedGuests = sortPeople(guests)
  return (
    <div className="episode">
      <div className="+text-center">
        <h1>
          <a href="/">JavaScript Air</a>
        </h1>
        <h2>
          <strong>{title}</strong>
          <br />
          <small>
            {past ? '' : <RSVPIcon hangoutUrl={hangoutUrl} />}
            {' ' + dateDisplay} at {time}
          </small>
        </h2>
        <PersonGroup people={sortedGuests} />
      </div>
      <div className="description">
        <p dangerouslySetInnerHTML={descriptionHTML}></p>
      </div>
    </div>
  )
}

