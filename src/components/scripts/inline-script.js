import {PropTypes} from 'react'
import UglifyJS from 'uglify-js'

export default InlineScript

function InlineScript({fn}) {
  const code = UglifyJS.minify(toStringFn(fn), {fromString: true}).code
  const innerHtml = {__html: code}
  return <script dangerouslySetInnerHTML={innerHtml} />
}

InlineScript.propTypes = {
  fn: PropTypes.func.isRequired,
}

function toStringFn(fn) {
  return `(function(){${fn.toString()};${fn.name}()})()`
}
