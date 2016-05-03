import {StyleSheet, css} from 'aphrodite'
import {PropTypes} from 'react'
import Person from '<components>/person'
import Decor from '<components>/decor'
import Host from './host'
import sharedStyles from './shared-styles'
import {container as containerStyle} from '<styles>'

import Title from '<components>/title'

export default Panelists

function Panelists({panelists}) {
  const {styles} = Panelists
  return (
    <section className={css(styles.section)} id="panelists">
      <Decor />
      <div className={css(styles.container)}>
        <Title name="Host" yellow />
        <Host />
        <Title name="Panelists" yellow />
        <PanelistList panelists={panelists} />
        <p className={css(sharedStyles.caption)}>
          JavaScript Air has{' '}
          <a className={css(sharedStyles.link)} href="http://panelists.javascriptair.com">a panel</a>
          {' '}of some of the finest people the community has to offer
        </p>
      </div>
    </section>
  )
}

Panelists.propTypes = {
  panelists: PropTypes.array,
}

Panelists.styles = StyleSheet.create({
  section: {
    backgroundColor: '#141414',
    '@media only screen and (min-width : 1000px)': {
      backgroundImage: 'url(resources/images/confetti-dark.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right top',
      backgroundSize: '400px 200px',
    },
  },
  container: containerStyle,
})

function PanelistList({panelists}) {
  const {styles} = PanelistList
  const personClassNames = {
    twitter: css(sharedStyles.personTwitter),
    name: css(sharedStyles.personName),
  }
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
})
