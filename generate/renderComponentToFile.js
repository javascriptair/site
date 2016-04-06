import {writeFileSync} from 'fs'
import ReactDOMServer from 'react-dom/server'
import {StyleSheetServer} from 'aphrodite'

export default renderComponent

function renderComponent(comp, destination) {
  const {html, css} = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToStaticMarkup(comp)
  })
  const string = html.replace('/* aphrodite-content */', css.content)
  writeFileSync(destination, string)
}
