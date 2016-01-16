import React from 'react'
import Person from './person'
import {renderGraphic} from './icon-link.js'

export default PersonGroup

function PersonGroup({people = [], hangoutUrl}) {
  return (
    <div className="person-group">

      {people.map((person, index) => (
        <Person key={index} {...person} />
      ))}

      <div className="person-group__btn-container">

        <a href={hangoutUrl} className="btn btn--monochrome-gray btn--show">
          <svg className="rsvp-icon--btn" viewBox='0 0 24 24'>
            {renderGraphic('calendar')}
          </svg>
        </a>

        <a className="btn btn--monochrome btn--show" href="#">  View Show</a>

      </div>

    </div>
  )
}
