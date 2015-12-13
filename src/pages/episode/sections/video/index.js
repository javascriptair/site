import React from 'react'
import VideoPlayer from './video-player'

export default VideoSection

function VideoSection({youTubeId, label = 'Video'}) {
  return (
    <section id="video">
      <h2>{label}</h2>
      <div className="+text-center">
        <VideoPlayer youTubeId={youTubeId} />
      </div>
    </section>
  )
}


