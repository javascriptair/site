import React from 'react'
import PersonGroup from '../../../../components/person-group'
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
  } = episodeData
  const sortedGuests = sortPeople(guests)
  return (
    <div className="episode">
      <h3>
        <a href={`/episodes/${date}`}>{title}</a>
        <br />
        <small>{dateDisplay} at {time}</small>
      </h3>
      <PersonGroup people={sortedGuests} />
      <div className="description">
        <p dangerouslySetInnerHTML={descriptionHTML}></p>
      </div>
    </div>
  )
}

