import React from 'react'
import PersonGroup from '../../../../components/person-group'
import RSVPIcon from '../../../../components/rsvp-icon'
import {sortPeople} from '../../../../../shared/utils'


export default Episode

function Episode({episodeData, index}) {
  const {
    date,
    title,
    timeHTML,
    dateDisplay,
    guests = [],
    descriptionHTML,
    hangoutUrl,
    numberDisplay,
  } = episodeData
  const sortedGuests = sortPeople(guests)
  return (
    <div className={`episode episode-index-${index}`}>
      <h3>
        <a href={`/episodes/${date}`}>Episode {numberDisplay}: {title}</a>
        <br />
        <small>
          <RSVPIcon hangoutUrl={hangoutUrl} />
          {' ' + dateDisplay} at <span dangerouslySetInnerHTML={timeHTML} />
        </small>
      </h3>
      <PersonGroup people={sortedGuests} />
      <div className="description">
        <p dangerouslySetInnerHTML={descriptionHTML} />
      </div>
    </div>
  )
}

