import React from 'react'
import PersonNotes from './person-notes'
import {sortPeople, intersperse} from '../../../../../shared/utils'


export default ShowNotes

function ShowNotes({episode}) {
  const {guests, panelists, host} = episode
  const panelistsAndHost = sortPeople([...panelists, host])
  const showAttendees = [...guests, ...panelistsAndHost]
  return (
    <section id="show-notes">
      <h2 className="+margin-bottom-large">Links, Tips, and Picks</h2>
      <div className="show-notes">
        <PeopleNotes people={showAttendees} />
      </div>
    </section>
  )
}

function PeopleNotes({people = []}) {
  return (
    <div>
      {
        intersperse(people.map((person, index) => (
          <PersonNotes person={person} key={index} />
        )), (p, i) => <hr key={`hr${i}`} className="person-note-separator" />)
      }
    </div>
  )
}
