/* eslint-disable */ // this runs in phantom so no ES6 niceness
function featureShow() {
  'use strict'
  // get featured episode
  var feature = document.body.querySelector('[class^="episodeWrapper_"]')

  // style stuff
  var styles = [
    'body {',
    '  width: 1200px;',
    '  margin: 0 auto;',
    '  padding: 1px;',
    '  height: 600px;',
    '  font-weight: normal;',
    '}',
    '[class^="episodeRoot_"] {',
    '  margin: 79px;',
    '  min-height: initial;',
    '}',
    '',
    '[class^="buttonRoot_"],',
    '[class^="bottomWrapper_"] {',
    '  display: none',
    '}',
  ].join('\n')

  var container = document.createElement('div')
  container.innerHTML = feature.outerHTML + '<style>' + styles + '</style>'

  document.body.innerHTML = container.innerHTML
  var onlyEpisode = document.body.querySelector('.episode')
  document.body.height = (onlyEpisode.clientHeight + 160) + 'px'
}
