import {PropTypes} from 'react'
import AudioPlayer from './audio-player'

export default AudioSection

function AudioSection({podbeanId}) {
  return (
    <section id="audio">
      <h3>Audio</h3>
      <AudioPlayer podbeanId={podbeanId} />
    </section>
  )
}

AudioSection.propTypes = {
  podbeanId: PropTypes.string.isRequired,
}
