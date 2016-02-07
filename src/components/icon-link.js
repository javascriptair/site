import React from 'react'
import Icon from './icon'

export default IconLink

function IconLink(props) {
  return (
    <a {...props}>
      <Icon {...props}/>
    </a>
  )
}
