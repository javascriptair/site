import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {upToMediumBig, atLeastMediumBig} from '<styles>/media-queries'

import PersonNotes from './person-notes'
import {sortPeople, intersperse} from '<utils>/utils'

export default ShowNotes

function ShowNotes({episode}) {
  const {styles} = ShowNotes
  const {guests, panelists, host, hideShowNotes} = episode
  const panelistsAndHost = sortPeople([...panelists, host])
  const showAttendees = [...sortPeople(guests), ...panelistsAndHost]
  if (hideShowNotes) {
    return <noscript />
  }
  return (
    <section id="show-notes" className={css(styles.showNotes)}>
      <h3 className={css(styles.headerSpacing)}>Links, Tips, and Picks</h3>
      <div>
        <PeopleNotes people={showAttendees} />
      </div>
    </section>
  )
}

ShowNotes.propTypes = {
  episode: PropTypes.object.isRequired,
}

ShowNotes.styles = StyleSheet.create({
  headerSpacing: {
    marginBottom: 40,
  },
  showNotes: {
    fontSize: 23,
  },
})

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
    [upToMediumBig]: {
      marginTop: 20,
      marginBottom: 20,
    },
    [atLeastMediumBig]: {
      marginTop: 36,
      marginBottom: 36,
    },
  },
})
