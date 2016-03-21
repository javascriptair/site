import React from 'react'

export default HeaderBar

function HeaderBar({isEpisode}) {

  const episodeClass = 'header-bar__show--' + (isEpisode ? 'active' : 'inactive')

  /*eslint-disable max-len, camelcase*/
  return (
    <div className="header-bar">

      <div className="header-bar__top">

        <div className="header-bar__logo">

          <a href="#">
            <svg className="header-bar__logo__image" viewBox="0 0 99 100">
              <path stroke="none" d="M 61,20 L 20,20 C 18.9,20 18,20.9 18,22 L 18,53 C 18,54.1 18.9,55 20,55 L 61,55 C 62.1,55 63,54.1 63,53 L 63,22 C 63,20.9 62.1,20 61,20 Z M 84.17,20.89 C 84.17,20.89 67.22,34.29 67.22,36.49 67.22,38.68 84.44,55.33 84.44,55.33 L 84.94,21.26 C 84.95,20.71 84.6,20.55 84.17,20.89 Z M 99,11.99 L 99,62.01 C 99,68.63 93.62,73.88 86.99,73.76 86.99,73.76 67.28,73.19 65.51,74 63.73,74.81 50.27,98.46 50.27,98.46 49.45,99.89 48.12,99.88 47.31,98.45 47.31,98.45 34.17,74.96 31.96,74 29.75,73.04 11.98,73.7 11.98,73.7 5.36,73.86 0,68.62 0,62.01 L 0,11.99 C 0,5.37 5.38,0 11.99,0 L 87.01,0 C 93.63,0 99,5.38 99,11.99 Z M 99,11.99" />
            </svg>

            <h1 className="header-bar__logo__name">
              <span className="header-bar__logo__name--bold">JavaScript</span> Air
            </h1>
          </a>

        </div>

        <div className={'header-bar__show' + episodeClass}>

        </div>

      </div>

      <div className="header-bar__bottom">
        <nav className="header__nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shows</a></li>
            <li><a href="#">Panel</a></li>
            <li><a href="#">Sponsors</a></li>
          </ul>
        </nav>
      </div>

    </div>
  )
}
