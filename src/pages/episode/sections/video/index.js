import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import RSVPIcon from '<components>/rsvp-icon'

import VideoPlayer from './video-player'

export default VideoSection

function VideoSection({youTubeId, hangoutUrl, label = 'Video'}) {
  const {styles} = VideoSection
  return (
    <section id="video">
      <h3 className={css(styles.headerSpacing)}>
        {label + ' '}
        {hangoutUrl ? <Rsvp hangoutUrl={hangoutUrl} /> : ''}
      </h3>
      <div style={{textAlign: 'center'}}>
        <VideoPlayer youTubeId={youTubeId} />
      </div>
    </section>
  )
}

VideoSection.propTypes = {
  youTubeId: PropTypes.string.isRequired,
  hangoutUrl: PropTypes.string,
  label: PropTypes.string,
}

VideoSection.styles = StyleSheet.create({
  headerSpacing: {
    marginBottom: 40,
  },
})

function Rsvp({hangoutUrl}) {
  if (!hangoutUrl) {
    return <noscript />
  }
  return (
    <span>
      <RSVPIcon hangoutUrl={hangoutUrl} />
      <br />
      <small>
        {'RSVP to '}
        <a href={hangoutUrl}>the event</a>
        {' to add it to your calendar'}
      </small>
    </span>
  )
}

Rsvp.propTypes = {
  hangoutUrl: PropTypes.string,
}
