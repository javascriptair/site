import React from 'react'

import Page from '../../components/page.js'
import {intersperse} from '../../../shared/utils'

export default DealsPage

function DealsPage({deals}) {
  return (
    <Page
      title="JavaScript Air Deals"
    >
      <header className="+text-center">
        <h1>
          <a href="/deals" alt="home">JavaScript Air Deals</a>
        </h1>
        <p>
          <a href="/">JavaScript Air</a> is the live broadcast podcast all about JavaScript.
        </p>
        <small>
          If you wish to add a deal to this list, please{' '}
          <a href="mailto:javascriptair+deals@gmail.com">contact Kent</a>
        </small>
      </header>
      <hr />
      <Deals deals={deals} />
      <hr />
    </Page>
  )
}

DealsPage.propTypes = {
  deals: React.PropTypes.array,
}


function Deals({deals}) {
  return (
    <section id="deals" className="+text-center">
      {
        intersperse(
          deals.map((d, i) => <Deal deal={d} key={i} />),
          (d, i) => <hr key={`hr${i}`} className="deal-separator" />
        )
      }
    </section>
  )
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
        {organization}
        <br />
        <small>{tagline}</small>
      </h3>
      <div className="deal__organization">
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
      <div className="deal__link">
        <p dangerouslySetInnerHTML={dealHTML} />
        <a href={link}>Click here to use this deal</a>
        <br />
        { expires ? (
          <small>
            Expires {expires}
          </small>
        ) : null }
      </div>
    </div>
  )
}

