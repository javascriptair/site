import React from 'react'

import Page from '../../components/page.js'
import PersonGroup from '../../components/person-group.js'

export default Guests

function Guests({guests}) {
  return (
    <Page
      title="JavaScript Air show guests"
    >
      <header className="+text-center">
        <h1>
          <a href="/" alt="home">JavaScript Air</a>
        </h1>
        <a href="http://guests.javascriptair.com">
          Show Guests
        </a>
      </header>
      <hr />
      <PersonGroup people={guests} />
    </Page>
  )
}

Guests.propTypes = {
  guests: React.PropTypes.array,
}

