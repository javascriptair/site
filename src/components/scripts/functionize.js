import InlineScript from './inline-script'
import React from 'react'

export default Functionize

function Functionize() {
  // we only want functionize on production
  if (process.env.CI) {
    return <InlineScript fn={runScript} />
  } else {
    return <noscript />
  }
}

function runScript() {
  /* eslint-disable */
  var functionizeProt = (("https:" == document.location.protocol) ? "https:" : "http:");
  var functioniseToken = '762ce8eaa006b9725d6ee081b6fdd9f1';
  var functionizePid = 3827;
  if (typeof window.functionizePluginInstalled == "undefined" || !window.functionizePluginInstalled) {
    document.write(unescape('%3Cscript src="' + functionizeProt + '//storage-download.googleapis.com/functionize-collector/762ce8eaa006b9725d6ee081b6fdd9f1/functionize-collector.js" type="text/javascript"%3E%3C/script%3E'));
  }
  /* eslint-enable */
}

