import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {linkColor, linkHoverColor} from '../styles/variables'
import Icon from './icon'

export default IconLink

function IconLink(props) {
  const {styles} = IconLink
  const iconClassName = css(styles.icon, props.iconStyles)
  return (
    <a {...props}>
      <Icon {...props} className={iconClassName}/>
    </a>
  )
}

IconLink.propTypes = {
  iconStyles: PropTypes.object,
}

IconLink.styles = StyleSheet.create({
  icon: {
    fill: linkColor,
    ':hover': {fill: linkHoverColor},
  },
})
