import React from 'react'

export default Person

function Person({twitter, name, imgSrc}) {
  return (
    <div className="person">
      <a href={`https://twitter.com/${twitter}`}>
        <img src={imgSrc} alt={`${name} Profile Picture`} />
        <p>{name}<br />@{twitter}</p>
      </a>
    </div>
  )
}

Person.propTypes = {
  twitter: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  imgSrc: React.PropTypes.string.isRequired,
}

