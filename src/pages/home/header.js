import {PropTypes} from 'react'
import SubscribeIconGroupSection from './sections/subscribe-icon-group'
import Icon from '../../components/icon'
import Decor from '../../components/decor'

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
  return (
    <div className="header__hero">
      <p className="header__tagline">The live broadcast podcast all about JavaScript</p>
      <div className="btn-container header__btn-container">
        <a href="#episodes" className="btn btn--large btn--black">Upcoming Shows</a>
        <a href="#previous-episodes" className="btn btn--large btn--black">Past Shows</a>
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

function LatestShow({show}) {
  return (
    <div className="latest-show">
      <div className="latest-show__container">
        <h2 className="latest-show__heading">Latest Show:</h2>
        <a className="latest-show__link" href={show.page}>
          <span dangerouslySetInnerHTML={show.titleHTML} />
        </a>
        <time className="latest-show__date" dateTime={show.dateDisplay}>
          {`${show.dateDisplay} at ${show.time.replace(/\*/g, '')}`}
        </time>
      </div>
    </div>
  )
}

LatestShow.propTypes = {
  show: PropTypes.object,
}

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
