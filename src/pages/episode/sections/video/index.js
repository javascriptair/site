import React from 'react'
import VideoPlayer from './video-player'

export default VideoSection

function VideoSection({youTubeId}) {
  return (
    <section id="video">
      <h2>Video</h2>
      <div className="+text-center">
        <VideoPlayer youTubeId={youTubeId} />
      </div>
    </section>
  )
}


