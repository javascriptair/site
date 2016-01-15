import React from 'react'
import Person from './person'

export default PersonGroup

function PersonGroup({people = []}) {
  return (
    <div className="person-group">

      {people.map((person, index) => (
        <Person key={index} {...person} />
      ))}

      <div>
        <a className="btn btn--monochrome-gray btn--show" href="#">  Add to Calendar</a>
        <a className="btn btn--monochrome btn--show" href="#">  View Show</a>
      </div>

    </div>
  )
}
