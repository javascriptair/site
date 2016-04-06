import {PropTypes} from 'react'
import Person from './person'
import Icon from './icon'

export default PersonGroup

function PersonGroup({people = [], hangoutUrl, personClassNames}) {
  return (
    <div className="person-group">

      {people.map((person, index) => (
        <Person
          key={index}
          {...person}
          personClassNames={personClassNames}
        />
      ))}

      <div className="person-group__btn-container">

        <a href={hangoutUrl} className="btn btn--monochrome-gray btn--show">
          <Icon name="calendar"/>
        </a>

        <a className="btn btn--monochrome btn--show" href="#">  View Show</a>

      </div>

    </div>
  )
}

PersonGroup.propTypes = {
  people: PropTypes.array,
  hangoutUrl: PropTypes.string,
  personClassNames: PropTypes.object,
}
