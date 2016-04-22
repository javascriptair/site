import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import SubscribeIconGroupSection from './sections/subscribe-icon-group'
import Icon from '../../components/icon'
import Decor from '../../components/decor'

const smallScreen = '@media only screen and (max-width : 515px)'
export default Header

function Heading() {
  return (
    <div className="header__heading">
      <Icon
        name="logo"
        className="header__logo"
        viewBox="0 0 99 100"
      />
      <h1 className="header__title">
        JavaScript <span>Air</span>
      </h1>
      <p className="header__subtext">
        Sponsored by <a className="header__sponsor-link" href="http://jsair.io/eggheadio">Egghead.io</a>
        , and <a className="header__sponsor-link" href="#sponsors">others</a>.
      </p>
    </div>
  )
}

function Hero() {
  const {styles} = Hero
  const buttonClassName = css(styles.button)
  return (
    <div className="header__hero">
      <p className="header__tagline">The live broadcast podcast all about JavaScript</p>
      <div className={css(styles.buttonContainer)}>
        <a href="#episodes" className={buttonClassName}>Upcoming Shows</a>
        <a href="#previous-episodes" className={buttonClassName}>Past Shows</a>
      </div>
      <div className="social__container">
        <div className="social social-home">
            <div className="social__decor"></div>
            <div className="social__bottom">
              <div className="social__title">
                <h2>Available On</h2>
              </div>
              <div className="social__actions">
                <SubscribeIconGroupSection />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

Hero.styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 22,
    [smallScreen]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  button: {
    margin: '0px 10px',
    display: 'flex',
    textDecoration: 'none',
    alignItems: 'center',
    [smallScreen]: {
      margin: '5px 0px',
    },
    width: 240,
    fontSize: '1.4em',
    fontWeight: 'bold',
    justifyContent: 'center',
    padding: 10,
    border: '5px solid #222',
    color: 'black',
    transition: '0.4s',
    ':hover': {
      backgroundColor: '#222',
      color: '#efdd4f',
    },
  },
})

function LatestShow({show}) {
  const {styles} = LatestShow
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <h2 className={css(styles.heading)}>Latest Show:</h2>
        <a className={css(styles.link)} href={show.page}>
          <span dangerouslySetInnerHTML={show.titleHTML} />
        </a>
        <time className={css(styles.date)} dateTime={show.dateDisplay}>
          {`${show.dateDisplay} at ${show.time.replace(/\*/g, '')}`}
        </time>
      </div>
    </div>
  )
}

LatestShow.propTypes = {
  show: PropTypes.object,
}

LatestShow.styles = StyleSheet.create({
  root: {
    color: 'white',
    '@media only screen and (min-width : 970px)': {
      backgroundImage: 'url(resources/images/confetti-dark.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '-10px -15px',
    },
  },
  container: {
    width: '90%',
    padding: '30px 0',
    margin: '0 auto',
    '@media only screen and (min-width : 970px)': {
      paddingLeft: 270,
    },
  },
  heading: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#e2d046',
    fontSize: '1.2em',
    letterSpacing: '1.3px',
    marginBottom: 4,
  },
  link: {
    color: '#f7f7f7',
    fontSize: '1.9em',
    lineHeight: '1.25em',
    marginBottom: 9,
    display: 'inline-block',
    textDecoration: 'none',
    borderBottom: '1px #BABABA dashed',
  },
  date: {
    display: 'block',
    textTransform: 'uppercase',
    color: '#999999',
    letterSpacing: '1.3px',
    fontWeight: 'bold',
    fontSize: '1em',
  },
})

function Header({show}) {
  return (
    <header className="header">
      <div className="header__top-half">
        <div className="header__container">
          <Heading />
          <Hero />
        </div>
        <Decor />
      </div>
      <div className="header__bottom-half">
        <LatestShow show={show} />
      </div>
    </header>
  )
}

Header.propTypes = {
  show: PropTypes.object,
}
