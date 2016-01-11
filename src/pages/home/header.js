import React from 'react'
import SubscribeIconGroupSection from './sections/subscribe-icon-group'

export default Header

function Header() {
  return (
    <header className="header">

      <div className="header__container">

        {/* Header - Text based titles and subtitles */}
        <div className="header__heading">

          <h1 className="header__title">
            Javascript <span>Air</span>
          </h1>

          <p className="header__subtext">
            Sponsored by <a className="header__sponsor-link" href="">Egghead.io</a>
            , and <a className="header__sponsor-link" href="" >others</a>.
          </p>

        </div>

        {/* Hero - Call to action text and buttons*/}
        <div className="header__hero">

          <p className="header__tagline">The live broadcast podcast all about JavaScript</p>

          <div className="btn-container header__btn-container">
            <a href="#" className="btn btn--large btn--black">Upcoming Shows</a>
            <a href="#" className="btn btn--large btn--black">Past Shows</a>
          </div>

        </div>


      </div>

      <div className="latest-show">
        <div className="latest-show__container">
          <h2 className="latest-show__heading">Most recent show:</h2>
          <a className="latest-show__link" href="#">Episode 003: Functional JavaScript</a>
          <time className="latest-show__date" dateTime="2016-01-11">1 January, 2016</time>
        </div>
      </div>

      <SubscribeIconGroupSection />

    </header>
  )
}
