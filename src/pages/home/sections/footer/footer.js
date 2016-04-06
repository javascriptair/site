import FooterLinks from './footer-links-list'
import FooterSocialLinks from './footer-social-links-list'

export default Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <FooterSocialLinks />
        </div>
        <div className="footer__col">
          <FooterLinks />
        </div>
      </div>
    </footer>
  )
}
