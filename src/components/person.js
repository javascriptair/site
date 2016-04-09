import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'

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
  const {styles} = Person
  const personClassName = css(styles.person)
  className = className ? `${className} ${personClassName}` : personClassName
  const nameClassName = `${personClassNames.name} ${css(styles.name)}`
  const twitterClassName = `${personClassNames.twitter} ${css(styles.twitter)}`
  const circularImageClassName = squareImage ? '' : css(styles.circular)
  const imageClassName = `${circularImageClassName} ${css(styles.image)} ${personClassNames.image}`
  return (
    <AncorOrDiv className={className} href={link}>
      <img
        className={imageClassName}
        src={imgSrc}
        alt={`${name} Profile Picture`}
      />
      <div className={css(styles.details)}>
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

const text = {
  transition: 'all 0.4s',
  color: 'black',
  padding: '5px 10px',
  fontSize: '1em',
  ':visited': {color: '#adadad'},
}
Person.styles = StyleSheet.create({
  person: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
    textDecoration: 'none',
    color: '#adadad',
  },
  name: {...text, fontWeight: 700, textAlign: 'center'},
  twitter: {...text, textAlign: 'center'},
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#adadad',
  },
  circular: {borderRadius: '50%'},
  image: {
    transition: 'all 0.4s',
    width: 120,
    height: 120,
  },
})

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
