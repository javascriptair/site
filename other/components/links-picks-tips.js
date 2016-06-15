import {PropTypes} from 'react'

export default LinksPicksTips

function LinksPicksTips({linksHTML, tipsHTML, picksHTML}) {
  const notesSections = [
    {label: 'Links', notes: linksHTML},
    {label: 'Tips', notes: tipsHTML},
    {label: 'Picks', notes: picksHTML},
  ]

  return (
    <ul>
      <div>
        {
          notesSections.map((section, index) => (
            <Notes {...section} key={index} />
          ))
        }
      </div>
    </ul>
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
