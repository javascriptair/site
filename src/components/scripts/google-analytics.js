import InlineScript from './inline-script'

export default GoogleAnalytics

function GoogleAnalytics() {
  return (
    <div>
      <InlineScript fn={runScript} />
      <script async src="//www.google-analytics.com/analytics.js"></script>
      <script async src="https://cdn.rawgit.com/googleanalytics/autotrack/0.5.0/autotrack.js"></script>
    </div>
  )
}

function runScript() {
  /* eslint-disable */
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  ga('create', 'UA-70331623-1', 'auto');
  ga('require', 'displayfeatures');
  ga('require', 'autotrack');
  ga('send', 'pageview');
  /* eslint-enable */
}
