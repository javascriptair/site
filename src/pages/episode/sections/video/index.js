import {PropTypes} from 'react'
import RSVPIcon from '<components>/rsvp-icon'

import VideoPlayer from './video-player'

export default VideoSection

function VideoSection({youTubeId, hangoutUrl, label = 'Video'}) {
  return (
    <section id="video">
      <h3 className="+margin-bottom-large">
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
