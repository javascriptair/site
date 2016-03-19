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
  window.functionizeProt = (("https:" == document.location.protocol) ? "https:" : "http:");
  window.functioniseToken = '5384ec96677469c3f7fd50fbdb1a3830';
  window.functionizePid = 3879;
  if (typeof window.functionizePluginInstalled == "undefined" || !window.functionizePluginInstalled) {
    document.write(unescape('%3Cscript src="' + functionizeProt + '//storage-download.googleapis.com/functionize-collector/5384ec96677469c3f7fd50fbdb1a3830/functionize-collector.js" type="text/javascript"%3E%3C/script%3E'));
  }
  /* eslint-enable */
}

