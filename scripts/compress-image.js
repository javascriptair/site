/* eslint no-console:0 */
import Imagina from 'imagina'
import path from 'path'

const inputImagePath = process.argv[2]
const imageDir = path.dirname(inputImagePath)
const imageExtension = path.extname(inputImagePath).substring(1)
const imageFilename = path.basename(inputImagePath, '.' + imageExtension)
const resizedImagePath = path.join(imageDir, imageFilename + '.resized.' + imageExtension)

const im = new Imagina()

resize(function onResizeDone(err) {
  if (err) {
    throw err
  }
  console.log('resize done')
  if (imageExtension !== 'png') {
    convert(resizedImagePath, function onConvertDone(doneErr) {
      if (doneErr) {
        throw doneErr
      }
      console.log('Conversion done')
    })
  } else {
    console.log('no conversion necessary')
  }
})

function convert(inputPath, cb) {
  const dir = path.dirname(inputPath)
  const extension = path.extname(inputPath).substring(1)
  const filename = path.basename(inputPath, '.' + extension)
  const outputPath = path.join(dir, filename + '.png')
  console.log('converting', inputPath, outputPath)
  im.convert(inputPath, outputPath, cb)
}

function resize(cb) {
  const params = '-resize 180x180^ -gravity center -extent 180x180'.split(' ')
  console.log('resizing', inputImagePath, resizedImagePath)
  im.resize(inputImagePath, resizedImagePath, '180x180', params, cb)
}

