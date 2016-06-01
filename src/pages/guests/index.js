import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'

import Page from '<components>/page'
import PersonGroup from '<components>/person-group'

export default Guests

function Guests({guests}) {
  const {styles} = Guests
  const personClassNames = {
    image: css(styles.image),
    twitter: css(styles.twitter),
    name: css(styles.name),
  }
  return (
    <Page
      title="JavaScript Air show guests"
    >
      <div className="container guests-page">
        <header className={css(styles.header)}>
          <h1 className={css(styles.title)}>
            <a href="/" alt="home">JavaScript Air</a>
          </h1>
          <a href="http://javascriptair.com/guests">
            Show Guests
          </a>
        </header>
        <hr />
        <PersonGroup people={guests} personClassNames={personClassNames} />
        <hr />
        <div className={css(styles.link)}>
          If you would like to suggest a guest or topic,
          please fill
          out <a href="http://suggest.javascriptair.com">this form</a>
        </div>
      </div>
    </Page>
  )
}

Guests.propTypes = {
  guests: PropTypes.array,
}

Guests.styles = StyleSheet.create({
  header: {textAlign: 'center'},
  title: {marginBottom: 20},
  link: {textAlign: 'center'},
  name: {fontSize: '0.8em'},
  image: {width: 'inherit', height: 'inherit', margin: '18px 10px 4px 10px'},
  twitter: {fontSize: '0.8em'},
})
