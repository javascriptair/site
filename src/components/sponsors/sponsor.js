import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'

export default Sponsor

function Sponsor({name, link, tagline = '', imgSrc}) {
  imgSrc = imgSrc || `sponsors/${name}.png`
  const {styles} = Sponsor
  return (
    <a
      className={css(styles.sponsor)}
      href={link}
      alt={`${name} site`}
    >
      <img className={css(styles.logo)} src={imgSrc} />
      <span className={css(styles.name)}>{name}</span>
      {tagline ? <span className={css(styles.tagline)}>{tagline}</span> : null}
    </a>
  )
}

Sponsor.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  tagline: PropTypes.string,
}

Sponsor.styles = StyleSheet.create({
  sponsor: {
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px 0',
    ':hover': {
      backgroundColor: '#E8E8E8',
    },
  },
  logo: {
    marginBottom: 10,
    '@media only screen and (max-width : 500px)': {
      width: '100%',
      maxWidth: 120,
    },
  },
  name: {
    marginBottom: 6,
    fontSize: '1.1em',
    fontWeight: 'bold',
    borderBottom: '2px black solid',
    lineHeight: '1.2em',
  },
  tagline: {textAlign: 'center'},
})
