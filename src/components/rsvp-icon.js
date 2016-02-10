import React from 'react'
import IconLink from './icon-link'


export default RSVPIcon

function RSVPIcon(props) {
  if (!props.hangoutUrl) {
    return <noscript />
  }
  return (
    <IconLink href={props.hangoutUrl} name="calendar-plus-o" {...props} />
  )
}

RSVPIcon.propTypes = {
  hangoutUrl: React.PropTypes.string.isRequired,
}
