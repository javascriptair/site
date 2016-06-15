import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {upToBig, upToMedium} from '<styles>/media-queries'
import Date from './date'
import Content from './content'

export default Episode

function Episode({episodeData, index}) {
  const {date} = episodeData
  const {styles} = Episode
  // we have a special className to make it easier to run GhostInspector tests
  const className = `${css(styles.episodeRoot)} episode-index-${index} episode-${date}`
  return (
    <div className={className}>
      <Date episode={episodeData} />
      <Content episode={episodeData} />
    </div>
  )
}

Episode.propTypes = {
  episodeData: PropTypes.object,
  index: PropTypes.number,
}

Episode.styles = StyleSheet.create({
  episodeRoot: {
    display: 'flex',
    marginBottom: '50px',
    minHeight: '450px',
    backgroundColor: 'white',
    boxShadow: '0px 17px 69px -12px rgba(0,0,0,0.42)',
    [upToBig]: {
      width: '80%',
      margin: '0 auto',
      marginBottom: '50px',
      flexDirection: 'column',
    },
    [upToMedium]: {
      width: '90%',
    },
  },
})
