import FooterLinks from './footer-links-list'
import FooterSocialLinks from './footer-social-links-list'
import {StyleSheet, css} from 'aphrodite'

export default Footer

function Footer() {
  const {styles} = Footer
  return (
    <footer className={css(styles.footer)}>
      <div className={css(styles.container)}>
        <div className="row">
          <div className="col-md-6">
            <FooterSocialLinks />
          </div>
          <div className="col-md-6">
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.styles = StyleSheet.create({
  footer: {
    padding: '20px 0',
    backgroundColor: '#0a0a0a',
    color: 'white',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1000px',
    width: '90%',
    margin: '0 auto',
  },
})
