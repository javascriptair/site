import React from 'react'

export default Person

function Person({className, twitter, link, name, imgSrc, squareImage}) {
  className = className ? `${className} person` : 'person'
  return (
    <AncorOrDiv className={className} href={link}>

      <img
        className={`person__image person__part${squareImage ? ' person__image--square square' : ''}`}
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

    </AncorOrDiv>
  )
}

function AncorOrDiv(props) {
  if (!props.href) {
    return <div {...props}>{props.children}</div>
  }
  return <a {...props}>{props.children}</a>
}

Person.propTypes = {
  twitter: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  imgSrc: React.PropTypes.string.isRequired,
}
