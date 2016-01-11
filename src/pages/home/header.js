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
            <span className="first">Javascript </span>
            <span className="second">Air</span>
          </h1>

          <p className="header__subtext">
            Sponsored by <a className="header__sponsor-link" href="">Egghead.io</a>
            , and <a className="header__sponsor-link" href="" >others</a>.
          </p>

        </div>

        {/* Hero - Call to action text and buttons*/}
        <div className="header__hero">
          <p className="header__tagline">The live broadcast podcast all about JavaScript</p>
          <a href="#" className="header__btn">Upcoming Shows</a>
          <a href="#" className="header__btn">Past Shows</a>
        </div>

      </div>

      <SubscribeIconGroupSection />

    </header>
  )
}
