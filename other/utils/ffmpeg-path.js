import which from 'which'

let ffmpegPath

export default get

function get() {
  if (ffmpegPath) {
    return ffmpegPath
  }
  try {
    ffmpegPath = which.sync('ffmpeg')
    return ffmpegPath
  } catch (err) {
    throw new Error(
      'Unable to get ffmpeg executable which is required to use podcastify-youtube-video'
    )
  }
}
