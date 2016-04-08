import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'

export default Title

function Title({name, buttonText, buttonUrl, yellow, id}) {
  const {styles} = Title
  const yellowOrBlack = yellow ? styles.yellow : styles.black
  const invisible = buttonText ? undefined : styles.invisible
  return (
    <div className={css(styles.title, yellowOrBlack)} id={id}>
      <h2 className={css(styles.text)}>
        {name}
      </h2>
      <a className={css(styles.btn, invisible)} href={buttonUrl}>
        {buttonText}
      </a>
    </div>
  )
}

Title.propTypes = {
  name: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  yellow: PropTypes.bool,
  id: PropTypes.string,
}

const max1100 = '@media only screen and (max-width : 1100px)'
Title.styles = StyleSheet.create({
  title: {
    display: 'flex',
    jusifyContent: 'space-between',
    padding: '30px 0',
    [max1100]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  yellow: {color: '#e2d046'},
  black: {color: 'black'},
  text: {
    fontSize: '3em',
    fontWeight: 'bold',
    [max1100]: {textAlign: 'center'},
  },
  btn: {
    padding: '10px 40px',
    fontSize: '1.4em',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
    border: '5px solid black',
    transition: 'all 0.4s',
    ':hover': {
      color: '#e4e4e4',
      background: 'black',
    },
    [max1100]: {marginTop: 30},
  },
  invisible: {display: 'none'},
})
