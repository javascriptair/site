import React from 'react'

export default ({twitter, name, imgSrc}) => {
  return (
    <div className="person">
      <a href={`https://twitter.com/${twitter}`}>
        <img src={imgSrc} alt={`${name} Profile Picture`} />
        <p>{name}<br />@{twitter}</p>
      </a>
    </div>
  )
}

