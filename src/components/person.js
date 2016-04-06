import {PropTypes} from 'react'

export default Person

function Person({
  className,
  twitter,
  link,
  name,
  imgSrc,
  squareImage,
  personClassNames = {name: '', twitter: '', image: ''},
}) {
  className = className ? `${className} person` : 'person'
  const nameClassName = `person__details__text person__details__text--name ${personClassNames.name}`
  const twitterClassName = `person__details__text person__details__text--twitter ${personClassNames.twitter}`
  const squareClassName = `person__part${squareImage ? ' person__image--square square' : ''}`
  const imageClassName = `person__image ${squareClassName} ${personClassNames.image}`
  return (
    <AncorOrDiv className={className} href={link}>

      <img
        className={imageClassName}
        src={imgSrc}
        alt={`${name} Profile Picture`}
      />

      <div className="person__details person__part">

        <p className={nameClassName}>
          {name}
        </p>

        <p className={twitterClassName}>
          {twitter ? `@${twitter}` : ''}
        </p>

      </div>

    </AncorOrDiv>
  )
}

Person.propTypes = {
  twitter: PropTypes.string,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
  link: PropTypes.string,
  squareImage: PropTypes.bool,
  personClassNames: PropTypes.object,
}

function AncorOrDiv(props) {
  if (!props.href) {
    return <div {...props}>{props.children}</div>
  }
  return <a {...props}>{props.children}</a>
}

AncorOrDiv.propTypes = {
  href: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
}
