import React, {PropTypes} from 'react'

export default Person

function Person({
  imgSrc,
  squareImage,
  link,
  twitter,
  name,
  Image = 'img',
}) {
  const styles = {
    image: {
      borderRadius: squareImage ? undefined : '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
  return (
    <div style={{textAlign: 'center'}}>
      <a href={link}>
        {React.createElement(Image, {
          src: `https://javascriptair.com${imgSrc}`,
          width: 120,
          height: 120,
          style: styles.image,
          alt: `Profile picture for ${name}`,
        })}
        <br />
        {name}
        {twitter ? <span><br />@{twitter}</span> : null}
      </a>
    </div>
  )
}
Person.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  squareImage: PropTypes.bool,
  link: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  name: PropTypes.string.isRequired,
  Image: PropTypes.any,
}
