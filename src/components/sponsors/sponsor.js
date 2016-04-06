import {PropTypes} from 'react'

export default Sponsor

function Sponsor({name, link, tagline = '', imgSrc}) {
  imgSrc = imgSrc || `sponsors/${name}.png`
  return (
    <a
      className="sponsor"
      href={link}
      alt={`${name} site`}
    >
      <img className="sponsor__logo" src={imgSrc} />
      <span className="sponsor__name">{name}</span>
      {tagline ? <span className="sponsor__tagline">{tagline}</span> : null}
    </a>
  )
}

Sponsor.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  tagline: PropTypes.string,
}
