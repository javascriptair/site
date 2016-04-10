import InlineScript from './inline-script'

export default InsertLinkTag

function InsertLinkTag(props) {
  return <InlineScript fn={runScript} context={props} />
}

function runScript() {
  const raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
  if (raf) {
    raf(onLoad)
  } else {
    window.addEventListener('load', onLoad)
  }

  function onLoad() {
    const el = document.createElement('link')
    el.rel = 'stylesheet'
    // CONTEXT comes from InlineScript
    el.href = CONTEXT.href // eslint-disable-line
    const head = document.getElementsByTagName('head')[0]
    head.parentNode.insertBefore(el, head)
  }
}
