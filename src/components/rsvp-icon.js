import React from 'react'
import IconLink from './icon-link'


export default RSVPIcon

function RSVPIcon(props) {
  return (
    <IconLink className="episode-page__rsvp-icon" href={props.hangoutUrl} name="calendar" {...props} />
  )
}

RSVPIcon.propTypes = {
  hangoutUrl: React.PropTypes.string.isRequired,
}
