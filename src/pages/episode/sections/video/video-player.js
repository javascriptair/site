import React from 'react'

export default function VideoPlayer({youTubeId}) {
  return (
    <iframe
      width="640"
      height="360"
      src={`https://www.youtube-nocookie.com/embed/${youTubeId}?rel=0`}
      frameBorder="0"
      allowFullScreen
      style={{maxWidth: '100%'}}
    >
    </iframe>
  )
}

