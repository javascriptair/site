import {PropTypes} from 'react'
import classNames from 'classnames'
import {StyleSheet, css} from 'aphrodite'
import {linkColor, linkHoverColor} from '../styles/variables'
import Icon from './icon'

export default IconLink

function IconLink(props) {
  const {styles} = IconLink
  const iconClassName = css(styles.icon)
  return (
    <a {...props}>
      <Icon {...props} className={classNames(iconClassName, props.className)}/>
    </a>
  )
}

IconLink.propTypes = {
  className: PropTypes.string,
}

IconLink.styles = StyleSheet.create({
  icon: {
    fill: linkColor,
    ':hover': {fill: linkHoverColor},
  },
})
