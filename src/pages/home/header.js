import React from 'react'
import SubscribeIconGroupSection from './sections/subscribe-icon-group'
import Decor from '../../components/decor'

export default Header

function Heading() {
  /*eslint-disable max-len, camelcase*/
  return (
    <div className="header__heading">

      <svg className="header__logo" viewBox="0 0 99 100">
        <path stroke="none" d="M 61,20 L 20,20 C 18.9,20 18,20.9 18,22 L 18,53 C 18,54.1 18.9,55 20,55 L 61,55 C 62.1,55 63,54.1 63,53 L 63,22 C 63,20.9 62.1,20 61,20 Z M 84.17,20.89 C 84.17,20.89 67.22,34.29 67.22,36.49 67.22,38.68 84.44,55.33 84.44,55.33 L 84.94,21.26 C 84.95,20.71 84.6,20.55 84.17,20.89 Z M 99,11.99 L 99,62.01 C 99,68.63 93.62,73.88 86.99,73.76 86.99,73.76 67.28,73.19 65.51,74 63.73,74.81 50.27,98.46 50.27,98.46 49.45,99.89 48.12,99.88 47.31,98.45 47.31,98.45 34.17,74.96 31.96,74 29.75,73.04 11.98,73.7 11.98,73.7 5.36,73.86 0,68.62 0,62.01 L 0,11.99 C 0,5.37 5.38,0 11.99,0 L 87.01,0 C 93.63,0 99,5.38 99,11.99 Z M 99,11.99" />
      </svg>

      <h1 className="header__title">
        JavaScript <span>Air</span>
      </h1>

      <p className="header__subtext">
        Sponsored by <a className="header__sponsor-link" href="http://jsair.io/eggheadio">Egghead.io</a>
        , and <a className="header__sponsor-link" href="#sponsors">others</a>.
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

      <div className="social__container">

        <div className="social">

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

function LatestShow() {
  return (
    <div className="latest-show">
      <div className="latest-show__container">

        <h2 className="latest-show__heading">Latest Show:</h2>
        <a className="latest-show__link" href="#">Episode 003: Functional JavaScript</a>
        <time className="latest-show__date" dateTime="2016-01-1">Recorded Wed, Jan 6th 2016 @ 12.00PM (CT)</time>

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

        </div>

        <Decor />

      </div>

      <div className="header__bottom-half">
        <LatestShow />
      </div>

    </header>
  )
}
