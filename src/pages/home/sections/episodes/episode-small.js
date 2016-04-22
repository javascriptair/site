import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {upToBig} from '../../../../styles/media-queries'
import {displayListify} from '../../../../../shared/utils'

export default EpisodeSmall

function EpisodeSmall({episodeData}) {
  const {styles} = EpisodeSmall
  const {
    date,
    title,
    titleHTML,
    guests = [],
    number,
  } = episodeData

  return (
    <div className={css(styles.episodeSmall)}>
      <a
        className={css(styles.title)}
        href={`/episodes/${date}`}
        title={`${title}`}
      >
        {`${number}. `}
        <span dangerouslySetInnerHTML={titleHTML} />
      </a>

      <small className={css(styles.guests)}>
        {' with '}
        {displayListify(guests.map(mapGuests))}
      </small>
    </div>
  )

  function mapGuests(g, gI) {
    if (!g.link) {
      return <span key={gI}>{g.name}</span>
    }
    return (
      <a
        key={gI}
        href={g.link}
        className={css(styles.guestsAnchor)}
      >
        {g.name}
      </a>
    )
  }
}

EpisodeSmall.propTypes = {
  episodeData: PropTypes.object,
}

EpisodeSmall.styles = StyleSheet.create({
  episodeSmall: {
    padding: '5px 0px',
    [upToBig]: {padding: '16px 20px'},
  },
  title: {
    fontSize: '1.3em',
    color: 'black',
    textDecoration: 'none',
    ':hover': {
      color: '#555',
    },
    [upToBig]: {
      display: 'block',
      fontSize: '1.6em',
      textAlign: 'center',
    },
  },
  guests: {
    fontSize: '0.9em',
    lineHeight: '1.3',
    color: 'gray',
    [upToBig]: {
      fontSize: '1.2em',
      paddingTop: 10,
      display: 'block',
      textAlign: 'center',
    },
  },
  guestsAnchor: {
    color: 'gray',
    ':hover': {
      color: 'black',
    },
  },
})
