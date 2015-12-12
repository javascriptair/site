import React from 'react'
import AudioPlayer from './audio-player'

export default VideoSection

function VideoSection({podbeanId}) {
  return (
    <section id="audio">
      <h2>Audio</h2>
      <AudioPlayer podbeanId={podbeanId} />
    </section>
  )
}



