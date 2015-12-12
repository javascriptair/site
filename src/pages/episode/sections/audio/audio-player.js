import React from 'react'
import {stringify as queryify} from 'query-string'


export default AudioPlayer

function AudioPlayer({podbeanId}) {
  return (
    <iframe
      id="audio_iframe"
      src={getSource(podbeanId)}
      height="100"
      width="100%"
      frameBorder="0"
      scrolling="no"
      data-name="pb-iframe-player"
    />
  )
}

function getSource(podbeanId) {
  const query = {
    from: 'yiiadmin',
    skin: '103',
    postId: '5953402', // TODO see if this is unique for shows
    download: 1,
    share: 1,
    fonts: 'Helvetica',
    auth: 0,
  }
  const url = `http://www.podbean.com/media/player/${podbeanId}`
  return `${url}?${queryify(query)}`
}
