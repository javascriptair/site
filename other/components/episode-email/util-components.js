import {PropTypes} from 'react'

export {Clear, Spacer, Line}

function Clear({children}) {
  const styles = {
    visibility: 'hidden',
    display: 'block',
    height: 0,
    clear: 'both',
  }
  return (
    <div>
      {children}
      <div style={styles} />
    </div>
  )
}
Clear.propTypes = {
  children: PropTypes.node.isRequired,
}

function Spacer({space = 32}) {
  return <div style={{marginTop: space}} />
}
Spacer.propTypes = {
  space: PropTypes.number,
}

function Line() {
  return <hr style={{marginTop: 32, marginBottom: 32}} />
}
