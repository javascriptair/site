import React from 'react'
import Person from './person'

export default PersonGroup

function PersonGroup({people = []}) {
  return (
    <div className="person-group">
      {people.map((person, index) => (
        <Person key={index} {...person} />
      ))}
    </div>
  )
}

