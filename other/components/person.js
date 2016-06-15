import {PropTypes} from 'react'

export default Person

function Person({imgSrc, squareImage, link, twitter, name}) {
  const styles = {
    image: {
      borderRadius: squareImage ? undefined : '50%',
    },
  }
  return (
    <div style={{textAlign: 'center'}}>
      <a href={link}>
        <img src={`https://javascriptair.com${imgSrc}`} style={styles.image} />
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
}
