import React from 'react'
import SubscribeIconGroupSection from './sections/subscribe-icon-group'

export default Header

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__heading">JavaScript <span>Air</span></h1>
        <p className="header__subtext">
          Sponsored by <a className="header__sponsor-link" href="">Egghead.io</a>, and
           <a className="header__sponsor-link" href="" >others</a>.
        </p>
        <p className="header__site-tagline">The live broadcast all about JavaScript</p>
        <a href="#" className="header__btn">Upcoming Shows</a>
        <a href="#" className="header__btn">Past Shows</a>
      </div>
      <SubscribeIconGroupSection />
    </header>
  )
}
