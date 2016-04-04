import {writeFileSync} from 'fs'
import {resolve} from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import {flatten, unique} from 'lodash'

import episodes from '../episodes'
import Guests from '../src/pages/guests'
import {sortPeople} from '../shared/utils'

const guests = sortPeople(
  unique(
    flatten(episodes.map(e => e.guests))
      .filter(g => g.name !== 'TBA'),
    g => (g.twitter || g.name)
  )
)

const string = ReactDOMServer.renderToStaticMarkup(
  <Guests guests={guests} />
)

writeFileSync(resolve(__dirname, '../guests/index.html'), string)

