import {PropTypes} from 'react'
import UglifyJS from 'uglify-js'

export default InlineScript

function InlineScript({fn, context}) {
  const code = UglifyJS.minify(toStringFn(fn, context), {fromString: true}).code
  const innerHtml = {__html: code}
  return <script dangerouslySetInnerHTML={innerHtml} />
}

InlineScript.propTypes = {
  fn: PropTypes.func.isRequired,
  context: PropTypes.object,
}

function toStringFn(fn, context) {
  let fnString = fn.toString()
  if (context) {
    fnString = fnString.replace(/CONTEXT\.(.\w*)/g, (match, prop) => {
      return `'${context[prop]}'`
    })
  }
  return `(function(){${fnString};${fn.name}()})()`
}
