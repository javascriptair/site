import InlineScript from './inline-script'
import React from 'react'

export default TwitterWidget

function TwitterWidget() {
  return <InlineScript fn={runScript} />
}

function runScript() {
  /* eslint-disable */
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
  /* eslint-enable */
}


