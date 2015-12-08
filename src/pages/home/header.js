import React from 'react'

export default Header

function Header() {
  return (
    <header className="+text-center">
      <div id="logo">
        <a href="https://twitter.com/JavaScriptAir">
          <img src="resources/logo.png" />
        </a>
      </div>
      <h1>JavaScript Air</h1>
      <p id="sub-title">
        The <strong>live</strong> broadcast podcast
        all about JavaScript
      </p>
      <p>
        Brought to you by <a href="https://egghead.io">Egghead.io</a>
        {' '}and{' '}
        <a href="#sponsors" alt="Sponsors">others</a>
      </p>
    </header>
  )
}

