import React from 'react'

import Page from '../../components/page.js'
import PersonGroup from '../../components/person-group.js'

export default Guests

function Guests({guests}) {
  return (
    <Page
      title="JavaScript Air show guests"
    >
      <div className="container guests-page">
        <header className="guests-page__header">
          <h1 className="guests-page__header__title">
            <a href="/" alt="home">JavaScript Air</a>
          </h1>
          <a href="http://guests.javascriptair.com" className="guests-page__header__subtitle">
            Show Guests
          </a>
        </header>
        <hr />
        <PersonGroup people={guests} />
        <hr />
        <div className="guests-page__suggest-link">
          If you would like to suggest a guest or topic,
          please fill
          out <a href="http://suggest.javascriptair.com">this form</a>
        </div>
      </div>
    </Page>
  )
}

Guests.propTypes = {
  guests: React.PropTypes.array,
}

