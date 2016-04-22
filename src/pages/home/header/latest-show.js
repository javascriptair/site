import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'

export default LatestShow

function LatestShow({show}) {
  const {styles} = LatestShow
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <h2 className={css(styles.heading)}>Latest Show:</h2>
        <a className={css(styles.link)} href={show.page}>
          <span dangerouslySetInnerHTML={show.titleHTML} />
        </a>
        <time className={css(styles.date)} dateTime={show.dateDisplay}>
          {`${show.dateDisplay} at ${show.time.replace(/\*/g, '')}`}
        </time>
      </div>
    </div>
  )
}

LatestShow.propTypes = {
  show: PropTypes.object,
}

LatestShow.styles = StyleSheet.create({
  root: {
    color: 'white',
    '@media only screen and (min-width : 970px)': {
      backgroundImage: 'url(resources/images/confetti-dark.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '-10px -15px',
    },
  },
  container: {
    width: '90%',
    padding: '30px 0',
    margin: '0 auto',
    '@media only screen and (min-width : 970px)': {
      paddingLeft: 270,
    },
  },
  heading: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#e2d046',
    fontSize: '1.2em',
    letterSpacing: '1.3px',
    marginBottom: 4,
  },
  link: {
    color: '#f7f7f7',
    fontSize: '1.9em',
    lineHeight: '1.25em',
    marginBottom: 9,
    display: 'inline-block',
    textDecoration: 'none',
    borderBottom: '1px #BABABA dashed',
  },
  date: {
    display: 'block',
    textTransform: 'uppercase',
    color: '#999999',
    letterSpacing: '1.3px',
    fontWeight: 'bold',
    fontSize: '1em',
  },
})
