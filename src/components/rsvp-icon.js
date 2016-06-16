import {PropTypes} from 'react'
import IconLink from './icon-link'
import {StyleSheet, css} from 'aphrodite'

export default RSVPIcon

function RSVPIcon(props) {
  if (!props.hangoutUrl) {
    return <noscript />
  }
  const {styles} = RSVPIcon
  const {iconStyles} = props
  return (
    <IconLink
      className={css(styles.iconLink, iconStyles)}
      href={props.hangoutUrl}
      name="calendar"
      aria-label="RSVP"
      {...props}
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
