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
          people.map(({twitter, name}, i) => (
            <Person
              key={i}
              twitter={twitter}
              name={name}
            />
          ))
        )
      }
    </span>
  )
}
People.propTypes = {
  people: PropTypes.arrayOf(personPropTypes).isRequired,
}
