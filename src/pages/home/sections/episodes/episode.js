import React from 'react'
import PersonGroup from '../../../../components/person-group'
// import RSVPIcon from '../../../../components/rsvp-icon'
import {sortPeople} from '../../../../../shared/utils'


export default Episode

function Episode({episodeData}) {
  const {
    date,
    title,
    timeHTML,
    dateDisplay,
    guests = [],
    descriptionHTML,
    // hangoutUrl,
    numberDisplay,
  } = episodeData
  const sortedGuests = sortPeople(guests)
  return (
    <div className="episode">

      <h3>

        <a className="episode__title episode__title__part" href={`/episodes/${date}`}>
          <span className="episode__title__number">{numberDisplay}</span>
          <span className="episode__title__name"> {title}</span>
        </a>

        <small className="episode__date episode__title__part">
          {/* <RSVPIcon hangoutUrl={hangoutUrl} /> */}
          {' ' + dateDisplay} at <span dangerouslySetInnerHTML={timeHTML} />
        </small>

      </h3>

      <div className="episode__description">
        <p dangerouslySetInnerHTML={descriptionHTML} />
      </div>

      <PersonGroup people={sortedGuests} />

    </div>
  )
}
