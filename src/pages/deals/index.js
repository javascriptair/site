import {PropTypes} from 'react'

import Page from '../../components/page.js'
import {intersperse} from '../../../shared/utils'

export default DealsPage

function DealsPage({deals}) {
  return (
    <Page
      title="JavaScript Air Deals"
    >
      <div className="deals-page container">
        <header className="deals-page__header">
          <h1 className="deals-page__title">
            <a href="/deals" alt="home">JavaScript Air Deals</a>
          </h1>
          <p className="deals-page__subtitle">
            <a href="/">JavaScript Air</a> is the live broadcast podcast all about JavaScript.
          </p>
          <small className="deals-page__email">
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


function Deals({deals}) {
  return (
    <section id="deals">
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

function Deal({deal}) {
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
        <span className="deal__org-name">{organization}</span>
        <br />
        <small className="deal__org-tagline">{tagline}</small>
      </h3>
      <div className="deal__org-image">
        <a href={link}>
          <img
            src={imgSrc}
            alt={`${organization} image`}
          />
        </a>
      </div>
      <div className="deal__description">
        <p dangerouslySetInnerHTML={descriptionHTML} />
      </div>
      <div>
        <div className="deal__deal">
          <p dangerouslySetInnerHTML={dealHTML} />
        </div>
        <a className="deal__link" href={link}>Click here to use this deal</a>
        <br />
        {expires ? (
          <small className="deal__expiration">
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
