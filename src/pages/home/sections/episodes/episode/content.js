import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import PersonGroup from '<components>/person-group'
import {sortPeople} from '<utils>/utils'

export default Content

function Content({episode}) {
  const {
    page,
    titleHTML,
    guests = [],
    descriptionHTML,
    hangoutUrl,
  } = episode

  const {styles} = Content
  return (
    <div className={css(styles.episodeContentRoot)}>
      <Title page={page} titleHTML={titleHTML} />
      <Description descriptionHTML={descriptionHTML} />
      <Buttons page={page} hangoutUrl={hangoutUrl} />
      <Guests guests={guests} />
    </div>
  )
}

Content.propTypes = {
  episode: PropTypes.object.isRequired,
}

Content.styles = StyleSheet.create({
  episodeContentRoot: {
    float: 'left',
    padding: '20px',
    width: '100%',
  },
})

function Title({page, titleHTML}) {
  const {styles} = Title
  return (
    <div className={css(styles.title)}>
      <h1 className={css(styles.header)}>
        <a
          className={css(styles.link)}
          href={page}
          dangerouslySetInnerHTML={titleHTML}
        />
      </h1>
    </div>
  )
}

Title.propTypes = {
  page: PropTypes.string.isRequired,
  titleHTML: PropTypes.object.isRequired,
}

Title.styles = StyleSheet.create({
  title: {
    padding: '10px 0px',
    lineHeight: '2.8em',
  },
  header: {
    fontSize: '2.3em',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
})

function Description({descriptionHTML}) {
  const {styles} = Description
  return (
    <div className={css(styles.description)}>
      <p dangerouslySetInnerHTML={descriptionHTML} />
    </div>
  )
}

Description.propTypes = {
  descriptionHTML: PropTypes.object.isRequired,
}

Description.styles = StyleSheet.create({
  description: {
    marginTop: '20px',
    fontSize: '1.2em',
    lineHeight: '1.55em',
    textAlign: 'center',
  },
})

function Buttons({page, hangoutUrl}) {
  const {styles} = Buttons
  return (
    <div className={css(styles.buttonRoot)}>
      <a className={css(styles.button)} href={page}>
        View Episode...
      </a>
      <a className={css(styles.button)} href={hangoutUrl}>
        Add to Calendar...
      </a>
    </div>
  )
}

Buttons.propTypes = {
  page: PropTypes.string.isRequired,
  hangoutUrl: PropTypes.string.isRequired,
}

Buttons.styles = StyleSheet.create({
  buttonRoot: {textAlign: 'center'},
  button: {
    display: 'inline-block',
    padding: '20px 25px',
    fontSize: '1.4em',
    textDecoration: 'none',
    color: '#4a4a4a',
    transition: 'all 0.4s',
    ':hover': {
      letterSpacing: '0.1em',
    },
  },
})

function Guests({guests}) {
  const sortedGuests = sortPeople(guests)
  return <PersonGroup people={sortedGuests} />
}

Guests.propTypes = {
  guests: PropTypes.array.isRequired,
}
