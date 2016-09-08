import {StyleSheet, css} from 'aphrodite'
import SubscribeIconGroupSection from '../sections/subscribe-icon-group'
import {social as socialStyles, socialDecor as socialDecorStyles} from '<styles>'
import {upToMedium, upToSmall} from '<styles>/media-queries'

export default Hero

function Hero() {
  const {styles} = Hero
  const buttonClassName = css(styles.button)
  return (
    <div className={css(styles.hero)}>
      <p className={css(styles.tagline)}>The live broadcast podcast all about JavaScript</p>
      <div className={css(styles.buttonContainer)}>
        <a href="#episodes" className={buttonClassName}>Upcoming Shows</a>
        <a href="#previous-episodes" className={buttonClassName}>Past Shows</a>
      </div>
      <div className={css(styles.socialContainer)}>
        <div className={css(styles.social)}>
          <div className={css(styles.socialDecor)} />
          <div className={css(styles.socialBottom)}>
            <h2 className={css(styles.socialTitle)}>Available On</h2>
            <SubscribeIconGroupSection />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.styles = StyleSheet.create({
  hero: {
    width: '100%',
    paddingBottom: 20,
  },
  tagline: {
    fontWeight: 'bold',
    fontSize: '2.4em',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 22,
    [upToSmall]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  button: {
    margin: '0px 10px',
    display: 'flex',
    textDecoration: 'none',
    alignItems: 'center',
    [upToSmall]: {
      margin: '5px 0px',
    },
    width: 240,
    fontSize: '1.4em',
    fontWeight: 'bold',
    justifyContent: 'center',
    padding: 10,
    border: '5px solid #222',
    color: 'black',
    transition: '0.4s',
    ':hover': {
      backgroundColor: '#222',
      color: '#efdd4f',
    },
  },
  socialContainer: {
    marginTop: 50,
  },
  social: {
    width: '500px',
    margin: '0 auto',
    [upToMedium]: {
      width: '240px',
    },
    ...socialStyles,
  },
  socialDecor: socialDecorStyles,
  socialBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 15px',
    [upToMedium]: {
      flexDirection: 'column',
    },
  },
  socialTitle: {
    paddingLeft: 8,
    fontSize: '1.8em',
    fontWeight: 'bold',
    [upToMedium]: {display: 'none'},
  },
})
