import which from 'which'

let ffmpegPath
try {
  ffmpegPath = which.sync('ffmpeg')
} catch (err) {
  throw new Error(
    'Unable to get ffmpeg executable which is required to use podcastify-youtube-video'
  )
}

export default ffmpegPath
