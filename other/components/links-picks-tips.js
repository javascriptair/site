import {PropTypes} from 'react'
import Person from './person'
import personPropTypes from './prop-types/person'

export default LinksPicksTips

function LinksPicksTips({person, Image}) {
  const {linksHTML, tipsHTML, picksHTML} = person
  const nothing = !linksHTML.length && !tipsHTML.length && !picksHTML.length
  const notesSections = [
    {label: 'Links', notes: linksHTML},
    {label: 'Tips', notes: tipsHTML},
    {label: 'Picks', notes: picksHTML},
  ]

  return (
    <div>
      <Person {...person} Image={Image} />
      {nothing ? ': No links, tips, or picks this week' : ''}
      <ul>
        <div>
          {
            notesSections.map((section, index) => (
              <Notes {...section} key={index} />
            ))
          }
        </div>
      </ul>
    </div>
  )
}
LinksPicksTips.propTypes = {
  Image: PropTypes.any,
  person: personPropTypes.isRequired,
}

function Notes({notes, label}) {
  if (!notes.length) {
    return <span></span>
  }
  const styles = {
    ul: {
      marginTop: 0,
      listStyle: 'disc',
    },
  }
  return (
    <div>
      <strong>{label}</strong>
      <ul style={styles.ul}>
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
