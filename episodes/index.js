// here be some interesting dragons
// beware...
import path from 'path'
import glob from 'glob'

const things = glob.sync(
  path.join(__dirname, '**/index.js'),
  {ignore: __filename}
)

const dateRegex = /\/(\d{4}-\d{2}-\d{2})\/index\.js/

export default things.map(thing => {
  return {
    date: dateRegex.exec(thing)[1],
    ...require(thing).default,
  }
})

