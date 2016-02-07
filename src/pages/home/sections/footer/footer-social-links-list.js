import React from 'react'
import Icon from '../../../../components/icon'


export default SocialIconGroup

function SocialIconGroup() {
  return (
    <ul className="footer-list">
      <li className="footer-list__item">
        <a className="footer-list__link" href="https://twitter.com/JavaScriptAir">
          <Icon className="footer-list__icon"className="footer-list__icon" name="twitter"/>
          Twitter
        </a>
      </li>
      <li className="footer-list__item">
        <a className="footer-list__link" href="https://plus.google.com/105493143005968326308">
          <Icon className="footer-list__icon"name="google-plus"/>
          Google+
        </a>
      </li>
      <li className="footer-list__item">
        <a className="footer-list__link" href="https://facebook.com/JavaScriptAir">
          <Icon className="footer-list__icon"name="facebook2"/>
          Facebook
        </a>
      </li>
    </ul>
  )
}
