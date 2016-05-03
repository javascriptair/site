import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {linkColor, linkHoverColor} from '<styles>/variables'
import classNames from 'classnames'
import Icon from './icon'

export default IconLink

function IconLink(props) {
  const {styles} = IconLink
  const {black} = props
  const iconClassName = css(black ? styles.blackIcon : styles.icon)
  return (
    <a {...props} className={null}>
      <Icon {...props} className={classNames(iconClassName, props.className)}/>
    </a>
  )
}

IconLink.propTypes = {
  className: PropTypes.string,
  black: PropTypes.bool,
}

IconLink.styles = StyleSheet.create({
  icon: {
    fill: linkColor,
    ':hover': {fill: linkHoverColor},
  },
  blackIcon: {
    fill: 'black',
    ':hover': {fill: '#2B2B2B'},
  },
})
