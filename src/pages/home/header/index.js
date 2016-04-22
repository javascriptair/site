import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import Decor from '../../../components/decor'
import {atLeastBig, atLeastHuge} from '../../../styles/media-queries'
import Hero from './hero'
import LatestShow from './latest-show'
import Heading from './heading'

export default Header

function Header({show}) {
  const {styles} = Header
  return (
    <header className={css(styles.header)}>
      <div className={css(styles.headerTop)}>
        <div className={css(styles.headerContainer)}>
          <Heading />
          <Hero />
        </div>
        <Decor />
      </div>
      <div className={css(styles.headerBottom)}>
        <LatestShow show={show} />
      </div>
    </header>
  )
}

Header.propTypes = {
  show: PropTypes.object,
}

Header.styles = StyleSheet.create({
  header: {
    position: 'relative',
    color: '#222',
  },
  headerTop: {
    backgroundColor: '#EFDD4F',
    textAlign: 'center',
    paddingTop: 80,
    [atLeastBig]: {
      paddingTop: 120,
    },
    [atLeastHuge]: {
      backgroundImage: 'url(/resources/images/confetti-light.svg), url(/resources/images/confetti-light-flipped.svg)',
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundSize: '420px 250px, 420px 250px',
      backgroundPosition: 'left bottom, right bottom',
    },
  },
  headerContainer: {
    maxWidth: 1000,
    width: '90%',
    margin: '0 auto',
    paddingBottom: 32,
    [atLeastBig]: {
      paddingBottom: 30,
    },
  },
  headerBottom: {
    backgroundColor: '#141414',
  },
})
