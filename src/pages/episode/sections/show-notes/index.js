import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'

import PersonNotes from './person-notes'
import {sortPeople, intersperse} from '<utils>/utils'

export default ShowNotes

function ShowNotes({episode}) {
  const {guests, panelists, host, hideShowNotes} = episode
  const panelistsAndHost = sortPeople([...panelists, host])
  const showAttendees = [...sortPeople(guests), ...panelistsAndHost]
  if (hideShowNotes) {
    return <noscript />
  }
  return (
    <section id="show-notes">
      <h3 className="+margin-bottom-large">Links, Tips, and Picks</h3>
      <div className="show-notes">
        <PeopleNotes people={showAttendees} />
      </div>
    </section>
  )
}

ShowNotes.propTypes = {
  episode: PropTypes.object.isRequired,
}

function PeopleNotes({people = []}) {
  const {styles} = PeopleNotes
  return (
    <div>
      {
        intersperse(people.map((person, index) => (
          <PersonNotes person={person} key={index} />
        )), (p, i) => <hr key={`hr${i}`} className={css(styles.noteSeparator)} />)
      }
    </div>
  )
}

PeopleNotes.propTypes = {
  people: PropTypes.array,
}

PeopleNotes.styles = StyleSheet.create({
  noteSeparator: {
    width: '90%',
    '@media only screen and (max-width: 767px)': {
      marginTop: 20,
      marginBottom: 20,
    },
    '@media only screen and (min-width: 768px)': {
      marginTop: 36,
      marginBottom: 36,
    },
  },
})
