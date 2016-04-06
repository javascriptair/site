import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'

import Page from '../../components/page.js'
import {intersperse} from '../../../shared/utils'

export default DealsPage

function DealsPage({deals}) {
  const {styles} = DealsPage
  return (
    <Page
      title="JavaScript Air Deals"
    >
      <div className="deals-page container">
        <header className={css(styles.header)}>
          <h1>
            <a href="/deals" alt="home">JavaScript Air Deals</a>
          </h1>
          <p className={css(styles.subtitle)}>
            <a href="/">JavaScript Air</a> is the live broadcast podcast all about JavaScript.
          </p>
          <small className={css(styles.email)}>
            If you wish to add a deal to this list, please{' '}
            <a href="mailto:javascriptair+deals@gmail.com">contact Kent</a>
          </small>
        </header>
        <hr />
        <Deals deals={deals} />
        <hr />
      </div>
    </Page>
  )
}

DealsPage.propTypes = {
  deals: PropTypes.array,
}

DealsPage.styles = StyleSheet.create({
  header: {textAlign: 'center'},
  subtitle: {marginTop: 40},
  email: {display: 'block', marginTop: 20, fontSize: '0.8em'},
})


function Deals({deals}) {
  const {styles} = Deals
  return (
    <section id="deals" className={css(styles.root)}>
      {
        intersperse(
          deals.map((d, i) => <Deal deal={d} key={i} />),
          (d, i) => <hr key={`hr${i}`} className="deal-separator" />
        )
      }
    </section>
  )
}

Deals.propTypes = {
  deals: PropTypes.array,
}

Deals.styles = StyleSheet.create({
  root: {textAlign: 'center'},
})

function Deal({deal}) {
  const {styles} = Deal
  const {
    organization,
    imgSrc,
    tagline,
    link,
    dealHTML,
    descriptionHTML,
    expires,
  } = deal
  return (
    <div className="deal">
      <h3>
        {organization}
        <br />
        <small className={css(styles.tagline)}>{tagline}</small>
      </h3>
      <div className={css(styles.image)}>
        <a href={link}>
          <img
            src={imgSrc}
            alt={`${organization} image`}
          />
        </a>
      </div>
      <div>
        <p dangerouslySetInnerHTML={descriptionHTML} />
      </div>
      <div>
        <div className={css(styles.deal)}>
          <p dangerouslySetInnerHTML={dealHTML} />
        </div>
        <a href={link}>Click here to use this deal</a>
        <br />
        {expires ? (
          <small className={css(styles.expiration)}>
            Expires {expires}
          </small>
        ) : null}
      </div>
    </div>
  )
}

Deal.propTypes = {
  deal: PropTypes.object,
}

Deal.styles = StyleSheet.create({
  tagline: {display: 'block', marginTop: 10},
  image: {marginTop: 30},
  deal: {marginTop: 18, marginBottom: 18},
  expiration: {display: 'block', marginTop: 8, fontSize: '0.8em'},
})
