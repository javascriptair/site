/* eslint no-console:0 */
import Imagina from 'imagina'
import path from 'path'
import mv from 'mv'

const inputImagePath = process.argv[2]
if (!inputImagePath) {
  throw new Error('Must provide an input image')
}
const outputFilePath = process.argv[3]
const imageDir = path.dirname(inputImagePath)
const imageExtension = path.extname(inputImagePath).substring(1)
const imageFilename = path.basename(inputImagePath, '.' + imageExtension)
const resizedImagePath = path.join(imageDir, imageFilename + '.resized.' + imageExtension)
const finalImagePath = path.join(imageDir, imageFilename + '.resized.png')

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
      move()
    })
  } else {
    console.log('no conversion necessary')
    move()
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

function move() {
  if (outputFilePath) {
    mv(finalImagePath, outputFilePath, function onMoveDone(err) {
      if (err) {
        throw err
      }
      console.log(`Resulting file at: ${outputFilePath}`)
    })
  } else {
    console.log(`Resulting file at: ${finalImagePath}`)
  }
}
