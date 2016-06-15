import * as utils from '<utils>/utils'
import {PropTypes} from 'react'
import personPropTypes from './prop-types/person'
import Person from './person'

export default People

function People({people}) {
  return (
    <span>
      {
        utils.displayListify(
          people.map(person => <Person key={person.id} {...person} />)
        )
      }
    </span>
  )
}
People.propTypes = {
  people: PropTypes.arrayOf(personPropTypes).isRequired,
}
