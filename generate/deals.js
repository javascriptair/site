import {writeFileSync} from 'fs'
import {resolve} from 'path'
import ReactDOMServer from 'react-dom/server'
import {StyleSheetServer} from 'aphrodite'

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

const {html, css} = StyleSheetServer.renderStatic(() => {
  return ReactDOMServer.renderToStaticMarkup(
    <DealsPage deals={theDeals} />
  )
})

const string = html.replace('/* aphrodite-content */', css.content)

writeFileSync(resolve(__dirname, '../deals/index.html'), string)
