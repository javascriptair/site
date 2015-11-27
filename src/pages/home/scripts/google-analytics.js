import InlineScript from './inline-script'
import React from 'react'

export default GoogleAnalytics

function GoogleAnalytics() {
  return <InlineScript fn={runScript} />
}

function runScript() {
  /* eslint-disable */
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-70331623-1', 'auto');
  ga('require', 'displayfeatures');
  ga('send', 'pageview');
  /* eslint-enable */
}


