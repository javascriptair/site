import {writeFile} from 'fs'
import ReactDOMServer from 'react-dom/server'
import {StyleSheetServer} from 'aphrodite'
import {noop} from 'lodash'

export default renderComponent

function renderComponent(comp, destination, cb = noop) {
  const {html, css} = StyleSheetServer.renderStatic(() => ReactDOMServer.renderToStaticMarkup(comp))
  const string = html.replace('/* aphrodite-content */', css.content)
  writeFile(destination, string, cb)
}
