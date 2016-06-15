import {PropTypes} from 'react'
import marked from 'marked'
import deindent from 'deindent'

export default Markdown

function Markdown({children}) {
  let html = marked(deindent(children))
  // get rid of <p> and </p>
  html = html.substring(3, html.length - 5)
  return <span dangerouslySetInnerHTML={({__html: html})} />
}
Markdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
