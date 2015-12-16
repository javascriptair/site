import React from 'react'

export default IconLink

function IconLink(props) {
  return (
    <a {...props} className={`icon-${props.name}`}></a>
  )
}

