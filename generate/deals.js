import React from 'react'
import ReactDOMServer from 'react-dom/server'

import deals from '../data/deals'
import DealsPage from '../src/pages/deals'
import {markdownToHTML} from '../shared/utils'

const theDeals = deals.map(d => {
  return {
    dealHTML: markdownToHTML(d.deal),
    descriptionHTML: markdownToHTML(d.description),
    // imgSrc: 'some-default', // TODO add a default image
    ...d,
  }
})

const string = ReactDOMServer.renderToStaticMarkup(
  <DealsPage deals={theDeals} />
)

console.log(string) // eslint-disable-line no-console


