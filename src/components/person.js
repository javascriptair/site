import React from 'react'

export default Person

function Person({twitter, link, name, imgSrc}) {
  return (
    <div className="person">
      <a href={link}>
        <img src={imgSrc} alt={`${name} Profile Picture`} />
        <p>
          {name}<br />
          {twitter ? `@${twitter}` : ''}
        </p>
      </a>
    </div>
  )
}

Person.propTypes = {
  twitter: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  imgSrc: React.PropTypes.string.isRequired,
}

