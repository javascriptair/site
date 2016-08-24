import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import AddToCalendarIcon from '<components>/add-to-calendar-icon'

import VideoPlayer from './video-player'
import Chat from './chat'

export default VideoSection

function VideoSection({past, youTubeId, calendarUrl, label = 'Video'}) {
  const {styles} = VideoSection
  return (
    <section id="video">
      <h3 className={css(styles.headerSpacing)}>
        {`${label} `}
        {calendarUrl ? <Rsvp calendarUrl={calendarUrl} /> : ''}
      </h3>
      <div style={{textAlign: 'center'}}>
        <VideoPlayer youTubeId={youTubeId} />
        {past ? '' : <Chat youTubeId={youTubeId} />}
      </div>
    </section>
  )
}

VideoSection.propTypes = {
  youTubeId: PropTypes.string.isRequired,
  calendarUrl: PropTypes.string,
  label: PropTypes.string,
  past: PropTypes.bool,
}

VideoSection.styles = StyleSheet.create({
  headerSpacing: {
    marginBottom: 40,
  },
})

function Rsvp({calendarUrl}) {
  if (!calendarUrl) {
    return <noscript />
  }
  return (
    <span>
      <AddToCalendarIcon calendarUrl={calendarUrl} />
      <br />
      <small>
        {'Click '}
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        {' to add this to your Google Calendar'}
      </small>
    </span>
  )
}

Rsvp.propTypes = {
  calendarUrl: PropTypes.string,
}
