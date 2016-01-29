import React from 'react'

export default Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
        </div>
        <div className="footer__col">
          <ul className="footer-list">
            <li className="footer-list__item">
              <a className="footer-list__link" href="http://suggest.javascriptair.com/">Suggest an episode</a>
            </li>
            <li className="footer-list__item">
              <a className="footer-list__link" href="javascriptair+website@gmail.com">Cotact us</a>
            </li>
            <li className="footer-list__item">
              <a className="footer-list__link" href="/guests">All show guests</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
