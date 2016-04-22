import {PropTypes} from 'react'
import Decor from '../../../components/decor'
import Hero from './hero'
import LatestShow from './latest-show'
import Heading from './heading'

export default Header

function Header({show}) {
  return (
    <header className="header">
      <div className="header__top-half">
        <div className="header__container">
          <Heading />
          <Hero />
        </div>
        <Decor />
      </div>
      <div className="header__bottom-half">
        <LatestShow show={show} />
      </div>
    </header>
  )
}

Header.propTypes = {
  show: PropTypes.object,
}
