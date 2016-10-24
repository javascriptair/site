import {resolve} from 'path'
import renderComponentToFile from './renderComponentToFile'
import Pageres from 'pageres'
import getServerAddress from './screenshot/server'

import EpisodeScreenshot from '../src/pages/episode-screenshot'
import getEpisodeData from '<utils>/get-episode-data'

export default generateEpisodeScreenshotPage

function generateEpisodeScreenshotPage(path, cb) {
  const episodePath = resolve(__dirname, '../', path)
  const episode = getEpisodeData(episodePath)

  renderComponentToFile(
    <EpisodeScreenshot episode={episode} />,
    resolve(episodePath, './screenshot.html'),
    getServerAddressAndTakeScreenshot,
  )

  function getServerAddressAndTakeScreenshot(err) {
    if (err) {
      throw err
    }
    getServerAddress(address => {
      const url = `${address}${episode.page}/screenshot.html`
      const screenshotPath = resolve(episodePath, 'screenshot.png')
      takeScreenshot(url, episodePath).then(() => cb(null, screenshotPath), cb)
    })
  }
}

function takeScreenshot(url, dest) {
  return new Pageres({filename: 'screenshot'})
    .src(url, ['1200x600'], {crop: true})
    .dest(dest)
    .run()
}
