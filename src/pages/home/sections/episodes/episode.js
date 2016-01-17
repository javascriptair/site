import React from 'react'
import PersonGroup from '../../../../components/person-group'
import RSVPIcon from '../../../../components/rsvp-icon'
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
    hangoutUrl,
    numberDisplay,
  } = episodeData
  const sortedGuests = sortPeople(guests)
  return (
    <div className="episode">

      <h3>

        <div className="episode__title">

          <span className="episode__title__part episode__title__number">
            {numberDisplay}
          </span>

          <span className="episode__title__part">
            <a className="episode__title__name" href={`/episodes/${date}`}>
              {title}
            </a>
          </span>

        </div>

        <div className="episode__date">

          <RSVPIcon className="rsvp-icon" hangoutUrl={hangoutUrl} />
          <span className="episode__date__spacer" />
          {dateDisplay} at <span dangerouslySetInnerHTML={timeHTML} />
          <span className="episode__date__spacer" />
          <a href="" className="episode__date__link">View Episode</a>

        </div>

      </h3>

      <div className="episode__description">
        <p dangerouslySetInnerHTML={descriptionHTML} />
      </div>

      <PersonGroup
        people={sortedGuests}
        hangoutUrl={hangoutUrl}
      />

    </div>
  )
}
