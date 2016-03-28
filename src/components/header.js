import React from 'react'
import Icon from './icon'

export default HeaderBar

function EpisodeBox({isEpisode, nextEpisode}) {
  const {titleHTML, page} = nextEpisode

  const episodeClass = 'header-bar__show--' + (isEpisode ? 'active' : 'inactive')

  return (
    <a className="social__link" href={page}>
      <div className={'header-bar__show ' + episodeClass}>
        <div className="social">

          <div className="social__decor"></div>

          <div className="header-bar__show__body">

            {/* Body Top - Header and show title information*/}
            <div className="header-bar__show__body__top">
              <h2>View Next Show</h2>
              <span dangerouslySetInnerHTML={titleHTML} />
            </div>

            {/* Body Bottom - Arrow button*/}
            <div className="header-bar__show__body__bottom">

              <div className="header-bar__show__body__bottom__arrow">
                <Icon
                  name="chevronRight"
                  viewBox="0 0 300 330"
                />
              </div>

            </div>

          </div> {/* End of body div */}

        </div> {/* End of social div */}
      </div>
    </a>
  )
}

function Navigation() {
  return (
    <div className="header-bar__bottom">
      <nav className="header__nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#episodes">Shows</a></li>
          <li><a href="/#host">Panel</a></li>
          <li><a href="/contributors">Sponsors</a></li>
        </ul>
      </nav>
    </div>
  )
}

function HeaderBar({isEpisode, nextEpisode}) {

  /*eslint-disable max-len, camelcase*/
  return (
    <div className="header-bar">

      <div className="header-bar__top">

        <div className="header-bar__logo">

          <a href="/">
            <Icon
              name="logo"
              className="header-bar__logo__image"
              viewBox="0 0 99 100"
            />

            <h1 className="header-bar__logo__name">
              <span className="header-bar__logo__name--bold">JavaScript</span> Air
            </h1>
          </a>

        </div>

        <EpisodeBox
          isEpisode={isEpisode}
          nextEpisode={nextEpisode}
        />

      </div>

      <Navigation />

    </div>
  )
}
