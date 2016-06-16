import path from 'path'
import glob from 'glob'

export default getEpisodeDirectories

function getEpisodeDirectories() {
  const theGlob = path.join(__dirname, '**/index.js')
  const ignore = {ignore: [__filename, path.resolve(__dirname, './index.js')]}
  const matchedIndexFiles = glob.sync(theGlob, ignore)
  const directories = matchedIndexFiles.map(trimIndexJs)
  return directories
}

function trimIndexJs(string) {
  const indexJs = '/index.js'
  return string.slice(0, -indexJs.length)
}
