import {resolve} from 'path'
import renderComponentToFile from './renderComponentToFile'

import deals from '../data/deals'
import DealsPage from '../src/pages/deals'
import {markdownToHTML} from '<utils>/utils'

const theDeals = deals.map(d => {
  return {
    dealHTML: markdownToHTML(d.deal),
    descriptionHTML: markdownToHTML(d.description),
    // imgSrc: 'some-default', // TODO add a default image
    ...d,
  }
})

renderComponentToFile(
  <DealsPage deals={theDeals} />,
  resolve(__dirname, '../deals/index.html')
)
