import {PropTypes} from 'react'

export default LinksPicksTips

function LinksPicksTips({linksHTML, tipsHTML, picksHTML}) {
  const notesSections = [
    {label: 'Links', notes: linksHTML},
    {label: 'Tips', notes: tipsHTML},
    {label: 'Picks', notes: picksHTML},
  ]
  const styles = {
    div: {
      marginLeft: 24,
    },
  }

  return (
    <div style={styles.div}>
      {
        notesSections.map((section, index) => (
          <Notes {...section} key={index} />
        ))
      }
    </div>
  )
}
LinksPicksTips.propTypes = {
  linksHTML: PropTypes.array.isRequired,
  picksHTML: PropTypes.array.isRequired,
  tipsHTML: PropTypes.array.isRequired,
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
    div: {
      fontSize: 16,
    },
  }
  return (
    <div style={styles.div}>
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
