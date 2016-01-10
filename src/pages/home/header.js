import React from 'react'

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
      </div>
    </header>
  )
}
