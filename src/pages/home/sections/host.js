import Person from '../../../components/person'
import {StyleSheet, css} from 'aphrodite'
import sharedStyles from './shared-styles'

export default Host

function Host() {
  const {styles} = Host
  return (
    <section id="host">
      <Person
        className={css(styles.host, sharedStyles.panelist)}
        name="Kent C. Dodds"
        twitter="kentcdodds"
        imgSrc="resources/kentcdodds.png"
        link="https://twitter.com/kentcdodds"
      />
      <p className="panelists-section__caption">
        <a
          className="panelists-section__link"
          href="https://egghead.io/instructors/kentcdodds"
          title="Egghead.io instructor page"
        >
          Egghead.io
        </a>
        {' '}instructor Kent C. Dodds is your host
      </p>
    </section>
  )
}

Host.styles = StyleSheet.create({
  host: {
    padding: '0 15px',
    '@media only screen and (min-width: 730px)': {
      width: 303,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
})
