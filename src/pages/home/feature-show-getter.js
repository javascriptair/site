import InlineScript from '../../components/scripts/inline-script'

export default FeatureShowGetter

function FeatureShowGetter() {
  return <InlineScript fn={runScript} />
}

function runScript() {
  const match = location.search.match(/feature-show=(.*?)($|\&)/) || []
  const showToFeature = match[1]
  if (showToFeature) {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', '/resources/feature-show.js')
    script.onload = () => window.featureShow(showToFeature)
    document.body.appendChild(script)
  }
}
