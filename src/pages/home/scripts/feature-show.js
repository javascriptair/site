import React from 'react'
import InlineScript from '../../../components/scripts/inline-script'

export default FeatureShow

function FeatureShow() {
  return <InlineScript fn={setFeatureShow} />
}

function setFeatureShow() {
  /* eslint-disable */
  window.featureShow = featureShow
  function featureShow(index = 0) {
    // get featured episode
    var episodes = document.body.querySelectorAll('.episode')
    var feature = episodes[index]

    // replace body content with feature episode
    // document.body.innerHTML = feature.outerHTML

    // remove all prose
    Array.from(feature.querySelectorAll('.description'))
      .forEach(e => e.parentNode.removeChild(e))

    // style stuff
    var styles = `
      .episode {
        text-align: center;
        margin-top: 400px;
        margin-bottom: 1000px;
        zoom: 1.6;
      }
      a { text-decoration: none; }
      h3 { font-size: 40px; }
      body { width: inherit; max-width: inherit }
    `

    var container = document.createElement('div')
    container.innerHTML = `
      ${feature.outerHTML}
      <style>${styles}</style>
    `

    document.body.innerHTML = container.outerHTML
  }
  /* eslint-enable */
}

