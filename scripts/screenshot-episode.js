import generateEpisodeScreenshotPage from '../generate/episode-screenshot'

const pathArg = 2
const path = process.argv[pathArg]
generateEpisodeScreenshotPage(path, (err, screenshotFile) => {
  if (err) {
    throw err
  }
  console.log(`done creating the screenshot ${screenshotFile} 🎉`)
  const noError = 0
  process.exit(noError) // eslint-disable-line no-process-exit
})
