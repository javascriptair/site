/* eslint-disable */ // this runs in phantom so no ES6 niceness
function featureShow(indexOrDate) {
  'use strict'
  // get featured episode
  var feature = document.body.querySelector('.episode-' + indexOrDate)

  // style stuff
  var styles = [
    'body {',
    '  width: 1200px;',
    '  margin: 0 auto;',
    '  padding: 1px;',
    '  height: 600px;',
    '  font-weight: normal;',
    '}',
    '.episode {',
    '  margin: 79px;',
    '  min-height: initial;',
    '}',
    'a, .person__details__text--twitter {',
    '  text-decoration: none !important;',
    '  color: black !important;',
    '}',
    '',
    '.episode__part--date__section--buttons,',
    '.content__section--buttons {',
    '  display: none',
    '}',
  ].join('\n')

  var container = document.createElement('div')
  container.innerHTML = feature.outerHTML + '<style>' + styles + '</style>'

  document.body.innerHTML = container.innerHTML
  var onlyEpisode = document.body.querySelector('.episode')
  document.body.height = (onlyEpisode.clientHeight + 160) + 'px'
}
