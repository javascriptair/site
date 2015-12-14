import React from 'react'
import VideoPlayer from './video-player'

export default VideoSection

function VideoSection({youTubeId, hangoutId, label = 'Video'}) {
  return (
    <section id="video">
      <h3 className="+margin-bottom-large">
        {label}
        {hangoutId ? <Rsvp hangoutId={hangoutId} /> : ''}
      </h3>
      <div className="+text-center">
        <VideoPlayer youTubeId={youTubeId} />
      </div>
    </section>
  )
}

VideoSection.propTypes = {
  youTubeId: React.PropTypes.string.isRequired,
  hangoutId: React.PropTypes.string,
  label: React.PropTypes.string,
}

function Rsvp({hangoutId}) {
  return (
    <span>
      <br />
      <small>
        {'RSVP to '}
        <a href={`https://plus.google.com/events/${hangoutId}`}>the event</a>
        {' to add it to your calendar'}
      </small>
    </span>
  )
}

