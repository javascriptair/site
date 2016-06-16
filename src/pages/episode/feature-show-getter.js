import InlineScript from '<components>/scripts/inline-script'

export default FeatureShowGetter

function FeatureShowGetter() {
  return <InlineScript fn={runScript} />
}

function runScript() {
  if (/feature-show/.test(location.search)) {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', '/resources/feature-show.js')
    script.onload = function onLoad() {
      window.featureShow()
    }
    document.body.appendChild(script)
  }
}
