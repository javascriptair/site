import React from 'react'
import PersonGroup from '../../../../components/person-group'


export default Header

function Header({episode}) {
  const {
    title,
    time,
    dateDisplay,
    guests = [],
    descriptionHTML,
  } = episode
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
        <PersonGroup people={guests} />
      </div>
      <div className="description">
        <p dangerouslySetInnerHTML={descriptionHTML}></p>
      </div>
    </div>
  )
}

