import React from 'react'

export default AudioPlayer

function AudioPlayer() {
  return (
    <iframe
      id="audio_iframe"
      src="http://www.podbean.com/media/player/ugk9e-5ad77a?from=yiiadmin&skin=103&postId=5953402&download=1&share=1&fonts=Helvetica&auto=0"
      height="100"
      width="100%"
      frameBorder="0"
      scrolling="no"
      data-name="pb-iframe-player"
    />
  )
}
