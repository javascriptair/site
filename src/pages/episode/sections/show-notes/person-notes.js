import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {upToSmall, upToMedium, upToMediumBig, atLeastMediumBig} from '<styles>/media-queries'

import Person from '<components>/person'

export default PersonNotes

function PersonNotes({person}) {
  const {linksHTML, tipsHTML, picksHTML} = person
  const nothing = !linksHTML.length && !tipsHTML.length && !picksHTML.length
  const notesSections = [
    {label: 'Links', notes: linksHTML},
    {label: 'Tips', notes: tipsHTML},
    {label: 'Picks', notes: picksHTML},
  ]
  const {styles} = PersonNotes
  const personClassNames = {root: css(styles.personRoot)}

  return (
    <div className={css(styles.personNotes)}>
      <Person {...person} personClassNames={personClassNames} />
      {
        nothing ?
          <p>No links, tips, or picks this week</p> :
        (
          <div className={css(styles.notesContainer)}>
            {
              notesSections.map((section, index) => (
                <Notes {...section} key={index} />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

PersonNotes.propTypes = {
  person: PropTypes.object,
}

PersonNotes.styles = StyleSheet.create({
  personNotes: {
    display: 'flex',
    [upToMedium]: {
      flexDirection: 'column',
    },
  },
  notesContainer: {
    flex: 1,
    [upToMediumBig]: {
      marginLeft: '10',
      marginRight: '10',
    },
    [atLeastMediumBig]: {
      marginLeft: '28',
      marginRight: '28',
    },
  },
  personRoot: {
    minWidth: 220,
    [upToSmall]: {
      minWidth: 150,
    },
  },
})

function Notes({notes, label}) {
  if (!notes.length) {
    return <span></span>
  }
  const {styles} = Notes
  return (
    <div>
      <strong>{label}</strong>
      <ul className={css(styles.list)}>
        {
          notes.map((note, index) => (
            <li key={index} dangerouslySetInnerHTML={note} />
          ))
        }
      </ul>
    </div>
  )
}

Notes.propTypes = {
  notes: PropTypes.array,
  label: PropTypes.string,
}

Notes.styles = StyleSheet.create({
  list: {
    listStyle: 'disc',
    padding: '10px 0px 10px 40px',
    lineHeight: '1.2em',
  },
})
