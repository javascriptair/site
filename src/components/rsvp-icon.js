import React from 'react'
import IconLink from './icon-link'
import {StyleSheet, css} from 'aphrodite'

export default RSVPIcon

function RSVPIcon(props) {
  if (!props.hangoutUrl) {
    return <noscript />
  }
  const {styles} = RSVPIcon
  return (
    <IconLink
      className={css(styles.iconLink)}
      href={props.hangoutUrl}
      name="calendar"
      {...props}
    />
  )
}

RSVPIcon.propTypes = {
  hangoutUrl: React.PropTypes.string.isRequired,
}

RSVPIcon.styles = StyleSheet.create({
  iconLink: {
    width: 20,
    height: 20,
  },
})
