import {StyleSheet, css} from 'aphrodite'
import {atLeastExtraSmall, atLeastSmall} from '../../../styles/media-queries'
import Icon from '../../../components/icon'

export default Heading

function Heading() {
  const {styles} = Heading
  const sponsorLinkClassName = css(styles.sponsorLink)
  return (
    <div className={css(styles.heading)}>
      <Icon
        name="logo"
        className={css(styles.logo)}
        viewBox="0 0 99 100"
      />
      <h1 className={css(styles.title)}>
        JavaScript <span className={css(styles.titleAir)}>Air</span>
      </h1>
      <p className={css(styles.subtext)}>
        Sponsored by <a className={sponsorLinkClassName} href="http://jsair.io/eggheadio">Egghead.io</a>
        , and <a className={sponsorLinkClassName} href="#sponsors">others</a>.
      </p>
    </div>
  )
}

Heading.styles = StyleSheet.create({
  heading: {
    marginBottom: 45,
    display: 'inline-block',
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '3em',
    letterSpacing: -1,
    [atLeastSmall]: {
      fontSize: '4.45em',
    },
  },
  titleAir: {fontWeight: '300'},
  logo: {
    width: 115,
    height: 115,
    fill: '#F7F7F7',
    transform: 'rotate(-25deg)',
    [atLeastExtraSmall]: {
      position: 'absolute',
      left: -68,
      top: -80,
    },
    [atLeastSmall]: {
      left: -98,
      top: -80,
    },
  },
  subtext: {
    fontSize: '1.5em',
    color: '#8C8015',
    marginTop: 10,
    lineHeight: '1.35em',
  },
  sponsorLink: {
    color: '#8C8015',
    textDecoration: 'underline',
    ':hover': {
      color: '#61590F',
    },
  },
})
