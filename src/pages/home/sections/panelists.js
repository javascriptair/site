import {StyleSheet, css} from 'aphrodite'
import {PropTypes} from 'react'
import Person from '../../../components/person'
import Decor from '../../../components/decor'
import Host from './host'
import sharedStyles from './shared-styles'

import Title from '../../../components/title.js'

export default Panelists

function Panelists({panelists}) {
  return (
    <section className="panelists-section" id="panelists">
      <Decor />
      <div className="panelists-section__container">

        <Title name="Host" yellow />
        <Host />
        <Title name="Panelists" yellow />
        <PanelistList panelists={panelists} />
        <p className="panelists-section__caption">
          JavaScript Air has{' '}
          <a className="panelists-section__link" href="http://panelists.javascriptair.com">a panel</a>
          {' '}of some of the finest people the community has to offer
        </p>
      </div>
    </section>
  )
}

Panelists.propTypes = {
  panelists: PropTypes.array,
}

function PanelistList({panelists}) {
  const {styles} = PanelistList
  const personClassNames = {twitter: css(styles.personTwitter)}
  return (
    <div className={css(styles.list)}>
      {panelists.map((p, i) => (
        <Person
          className={css(styles.panelist, sharedStyles.panelist)}
          {...p}
          personClassNames={personClassNames}
          key={i}
        />
      ))}
    </div>
  )
}

PanelistList.propTypes = {
  panelists: PropTypes.array,
}

PanelistList.styles = StyleSheet.create({
  list: {
    margin: 'auto',
    padding: '0 15px',
    '@media only screen and (min-width: 730px)': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  panelist: {
    '@media only screen and (min-width: 730px)': {
      width: '50%',
    },
    '@media only screen and (min-width : 900px)': {
      width: '33.3%',
    },
  },
  personTwitter: {
    textAlign: 'left',
    fontStyle: 'italic',
  },
})
