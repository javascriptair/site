import UglifyJS from 'uglify-js'
import React from 'react'

export default InlineScript

function InlineScript({fn}) {
  const code = UglifyJS.minify(toStringFn(fn), {fromString: true}).code
  const innerHtml = {__html: code}
  return <script dangerouslySetInnerHTML={innerHtml} />
}

function toStringFn(fn) {
  return `(function(){${fn.toString()};${fn.name}()})()`
}

