import {writeFile} from 'fs'
import ReactDOMServer from 'react-dom/server'
import {StyleSheetServer} from 'aphrodite'
import {noop} from 'lodash'
import async from 'async'
import arrify from 'arrify'

export default renderComponent

function renderComponent(comp, destinations, callback = noop) {
  destinations = arrify(destinations)
  const {html, css} = StyleSheetServer.renderStatic(() => ReactDOMServer.renderToStaticMarkup(comp))
  const string = html.replace('/* aphrodite-content */', css.content)
  async.parallel(
    destinations.map(d => cb => writeFile(d, string, cb)),
    callback,
  )
}
