import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import IconLink from './icon-link'

export default RSVPIcon

function RSVPIcon(props) {
  if (!props.hangoutUrl) {
    return <noscript />
  }
  const {styles} = RSVPIcon
  const {hangoutUrl, iconStyles, ...forwardProps} = props
  return (
    <IconLink
      className={css(styles.iconLink, iconStyles)}
      href={hangoutUrl}
      name="calendar"
      aria-label="RSVP"
      {...forwardProps}
    />
  )
}

RSVPIcon.propTypes = {
  hangoutUrl: PropTypes.string.isRequired,
  iconStyles: PropTypes.object,
}

RSVPIcon.styles = StyleSheet.create({
  iconLink: {
    width: 20,
    height: 20,
  },
})
