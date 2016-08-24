import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import IconLink from './icon-link'

export default AddToCalendarIcon

function AddToCalendarIcon(props) {
  if (!props.calendarUrl) {
    return <noscript />
  }
  const {styles} = AddToCalendarIcon
  const {calendarUrl, iconStyles, ...forwardProps} = props
  return (
    <IconLink
      className={css(styles.iconLink, iconStyles)}
      href={calendarUrl}
      name="calendar"
      aria-label="Add to Google Calendar"
      target="_blank"
      rel="noopener noreferrer"
      {...forwardProps}
    />
  )
}

AddToCalendarIcon.propTypes = {
  calendarUrl: PropTypes.string.isRequired,
  iconStyles: PropTypes.object,
}

AddToCalendarIcon.styles = StyleSheet.create({
  iconLink: {
    width: 20,
    height: 20,
  },
})
