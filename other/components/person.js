import {PropTypes} from 'react'

export default Person

function Person({twitter, name}) {
  return <a href={`https://twitter.com/${twitter}`}>{name}</a>
}
Person.propTypes = {
  twitter: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
