import {PropTypes} from 'react'
import Person from './person'
import {StyleSheet, css} from 'aphrodite'

export default PersonGroup

function PersonGroup({people = [], personClassNames}) {
  const {styles} = PersonGroup
  return (
    <div className={css(styles.group)}>
      {people.map((person, index) => (
        <Person
          key={index}
          {...person}
          personClassNames={personClassNames}
        />
      ))}
    </div>
  )
}

PersonGroup.propTypes = {
  people: PropTypes.array,
  personClassNames: PropTypes.object,
}

PersonGroup.styles = StyleSheet.create({
  group: {
    marginTop: 20,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'space-between',
    justifyContent: 'center',
  },
})
