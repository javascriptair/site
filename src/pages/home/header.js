import React from 'react'
import SubscribeIconGroupSection from './sections/subscribe-icon-group'

export default Header

function Heading() {
  /*eslint-disable max-len, camelcase*/
  return (
    <div className="header__heading">

      <svg className="header__logo" viewBox="0 0 99 100">
        <path fill-rule="evenodd" d="M0 11.992C0 5.37 5.375 0 11.99 0h75.02C93.63 0 99 5.382 99 11.992v50.016c0 6.623-5.376 11.87-12.006 11.748 0 0-19.712-.562-21.488.244-1.776.806-15.24 24.456-15.24 24.456-.82 1.433-2.147 1.42-2.957-.01 0 0-13.144-23.487-15.35-24.446-2.208-.96-19.982-.304-19.982-.304C5.363 73.864 0 68.618 0 62.008V11.992zm18 10.015C18 20.9 18.9 20 19.992 20h41.016c1.1 0 1.992.9 1.992 2.007v30.986C63 54.1 62.1 55 61.008 55H19.992c-1.1 0-1.992-.9-1.992-2.007V22.007zm66.17-1.115c.432-.345.777-.182.77.367l-.498 34.068S67.218 38.682 67.218 36.486c0-2.195 16.95-15.594 16.95-15.594z"/>
      </svg>

      <h1 className="header__title">
        JavaScript <span>Air</span>
      </h1>

      <p className="header__subtext">
        Sponsored by <a className="header__sponsor-link" href="">Egghead.io</a>
        , and <a className="header__sponsor-link" href="" >others</a>.
      </p>

    </div>
  )
  /*eslint-enable*/
}

function Hero() {
  return (
    <div className="header__hero">

      <p className="header__tagline">The live broadcast podcast all about JavaScript</p>

      <div className="btn-container header__btn-container">
        <a href="#" className="btn btn--large btn--black">Upcoming Shows</a>
        <a href="#" className="btn btn--large btn--black">Past Shows</a>
      </div>

    </div>
  )
}

function LatestShow() {
  return (
    <div className="latest-show">
      <div className="latest-show__container">

        <h2 className="latest-show__heading">Most recent show</h2>
        <a className="latest-show__link" href="#">Episode 003: Functional JavaScript</a>
        <time className="latest-show__date" dateTime="2016-01-1">1 January, 2016</time>

      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="header">

      <div className="header__top-half">

        <div className="header__container">

          <Heading />
          <Hero />

          <div className="header__bubble-container">
            <SubscribeIconGroupSection />
          </div>

        </div>

        <div className="decor">
          <span className="decor__part decor__part--dark"></span>
          <span className="decor__part decor__part--medium"></span>
          <span className="decor__part decor__part--light"></span>
        </div>

      </div>

      <div className="header__bottom-half">
        <LatestShow />
      </div>

    </header>
  )
}
