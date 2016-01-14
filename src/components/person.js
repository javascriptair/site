import React from 'react'

export default Person

function Person({twitter, link, name, imgSrc, squareImage}) {
  return (
    <div className="person">
      <a className="person__link" href={link}>

        <img className="person__image"
          src={imgSrc}
          alt={`${name} Profile Picture`}
          className={squareImage ? 'square' : ''}
        />

        <p>
          <span className="person__name">{name}</span>
          <span className="person__twitter">{twitter ? `@${twitter}` : ''}</span>
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

