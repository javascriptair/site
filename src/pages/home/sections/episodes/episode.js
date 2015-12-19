import React from 'react'
import PersonGroup from '../../../../components/person-group'
import RSVPIcon from '../../../../components/rsvp-icon'
import {sortPeople} from '../../../../../shared/utils'


export default Episode

function Episode({episodeData}) {
  const {
    date,
    title,
    time,
    dateDisplay,
    guests = [],
    descriptionHTML,
    hangoutUrl,
    numberDisplay,
  } = episodeData
  const sortedGuests = sortPeople(guests)
  return (
    <div className="episode">
      <h3>
        <a href={`/episodes/${date}`}>Episode {numberDisplay}: {title}</a>
        <br />
        <small>
          <RSVPIcon hangoutUrl={hangoutUrl} />
          {' ' + dateDisplay} at {time}
        </small>
      </h3>
      <PersonGroup people={sortedGuests} />
      <div className="description">
        <p dangerouslySetInnerHTML={descriptionHTML}></p>
      </div>
    </div>
  )
}

