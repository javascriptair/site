import React from 'react'
import PersonGroup from '../../../../components/person-group'
import {sortPeople} from '../../../../../shared/utils'


export default Header

function Header({episode}) {
  const {
    title,
    time,
    dateDisplay,
    guests = [],
    descriptionHTML,
  } = episode
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
          <small>{dateDisplay} at {time}</small>
        </h2>
        <PersonGroup people={sortedGuests} />
      </div>
      <div className="description">
        <p dangerouslySetInnerHTML={descriptionHTML}></p>
      </div>
    </div>
  )
}

