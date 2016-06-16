import generateEpisodeScreenshotPage from '../generate/episode-screenshot'

const path = process.argv[2]
generateEpisodeScreenshotPage(path, (err, screenshotFile) => {
  if (err) {
    throw err
  }
  console.log(`done creating the screenshot ${screenshotFile} 🎉`)
  process.exit(0)
})
