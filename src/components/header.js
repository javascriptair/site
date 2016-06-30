import {PropTypes} from 'react'
import Icon from './icon'
import {StyleSheet, css} from 'aphrodite'
import {social, socialDecor} from '<styles>'

export default HeaderBar

const smallScreen = '@media only screen and (max-width: 530px)'

const nextEpisodePropTypes = PropTypes.shape({
  titleHTML: PropTypes.object,
  page: PropTypes.string,
})

function EpisodeBox({nextEpisode}) {
  const {styles} = EpisodeBox
  const {titleHTML, page} = nextEpisode
  return (
    <a className={css(styles.socialLink)} href={page}>
      <div>
        <div className={css(styles.social)}>
          <div className={css(styles.socialDecor)}></div>
          <div className={css(styles.showBody)}>
            <div className={css(styles.bodyTop)}>
              <h2 className={css(styles.bodyTopH2)}>View Next Show</h2>
              <span dangerouslySetInnerHTML={titleHTML} />
            </div>
            <div className={css(styles.bodyBottom)}>
              <Icon
                name="chevronRight"
                viewBox="0 0 300 330"
                className={css(styles.bodyBottomSVG)}
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

EpisodeBox.propTypes = {nextEpisode: nextEpisodePropTypes}
EpisodeBox.styles = StyleSheet.create({
  socialLink: {
    textDecoration: 'none',
    color: 'black',
    [smallScreen]: {display: 'none'},
  },
  social,
  socialDecor,
  showBody: {
    display: 'flex',
    padding: 15,
  },
  bodyTop: {
    paddingRight: 20,
  },
  bodyTopH2: {
    fontSize: '1.55em',
    fontWeight: 'bold',
  },
  bodyBottom: {
    display: 'flex',
    alignItems: 'center',
  },
  bodyBottomSVG: {width: 30},
})

function Navigation() {
  const {styles} = Navigation
  const liClassName = css(styles.bottomLi)
  const anchorClassName = css(styles.bottomAnchor)
  const lis = [
    {href: '/', text: 'Home'},
    {href: '/#episodes', text: 'Shows'},
    {href: '/#host', text: 'Panel'},
    {href: '/contributors', text: 'Sponsors'},
  ].map((l, i) => (
    <li className={liClassName} key={i}>
      <a className={anchorClassName} href={l.href}>{l.text}</a>
    </li>
  ))
  return (
    <div className={css(styles.bottom)}>
      <nav>
        <ul className={css(styles.bottomUl)}>
          {lis}
        </ul>
      </nav>
    </div>
  )
}

Navigation.styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'black',
  },
  bottomUl: {
    display: 'flex',
    justifyContent: 'center',
  },
  bottomLi: {
    padding: '16px 15px',
    ':hover': {
      backgroundColor: '#262626',
    },
  },
  bottomAnchor: {
    fontFamily: 'Helvetica',
    fontSize: '1.5em',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
    [smallScreen]: {fontSize: '1em'},
  },
})

function HeaderBar({isEpisode, nextEpisode, showEpisodeBox}) {
  const {styles} = HeaderBar
  return (
    <div className={css(styles.headerBar)}>
      <div className={css(styles.headerTop)}>
        <div>
          <a href="/" className={css(styles.logoAnchor)}>
            <Icon
              name="logo"
              className={css(styles.logoImage)}
              viewBox="0 0 99 100"
            />
            <h1 className={css(styles.podcastName)}>
              <span className={css(styles.bold)}>JavaScript</span> Air
            </h1>
          </a>
        </div>
        {
          showEpisodeBox ? (
            <EpisodeBox
              isEpisode={isEpisode}
              nextEpisode={nextEpisode}
            />
          ) : ''
        }
      </div>
      <Navigation />
    </div>
  )
}

HeaderBar.propTypes = {
  showEpisodeBox: PropTypes.bool,
  isEpisode: PropTypes.bool,
  nextEpisode: nextEpisodePropTypes,
}

HeaderBar.styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#EFDD4F',
    backgroundImage: 'url(/resources/images/confetti-light-flipped.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '280px 166px',
    backgroundPosition: '103% -5px',
    [smallScreen]: {backgroundImage: 'inherit'},
  },
  headerTop: {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 40px',
    [smallScreen]: {
      padding: '5px 10px',
    },
  },
  logoAnchor: {
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    textDecoration: 'none',
  },
  logoImage: {
    transform: 'rotate(-20deg)',
    fill: 'white',
    width: 90,
    transition: 'all 0.4s',
    ':hover': {
      transform: 'rotate(-30deg)',
    },
    [smallScreen]: {width: 60},
  },
  podcastName: {
    paddingLeft: 20,
    fontSize: '3.5em',
    letterSpacing: '-1.3px',
    [smallScreen]: {
      fontSize: '2.5em',
      paddingLeft: 10,
    },
  },
  bold: {fontWeight: 'bold'},
})
