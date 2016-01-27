import React from 'react'

export default Person

function Person({className, twitter, link, name, imgSrc, squareImage}) {
  className = className ? `${className} person` : 'person'
  return (
    <a className={className} href={link}>

      <img
        className={squareImage ? 'square person__part' : 'person__image person__part'}
        src={imgSrc}
        alt={`${name} Profile Picture`}
      />

      <div className="person__details person__part">

        <p className="person__details__text person__details__text--name">
          {name}
        </p>

        <p className="person__details__text person__details__text--twitter">
          {twitter ? `@${twitter}` : ''}
        </p>

      </div>

    </a>
  )
}

Person.propTypes = {
  twitter: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  imgSrc: React.PropTypes.string.isRequired,
}
