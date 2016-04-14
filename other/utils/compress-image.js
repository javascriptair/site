import Imagina from 'imagina'
import path from 'path'
import mv from 'mv'

export default compressImage

function compressImage(inputImagePath, outputFilePath) {
  if (!inputImagePath) {
    throw new Error('Must provide an input image')
  }
  const imageDir = path.dirname(inputImagePath)
  const imageExtension = path.extname(inputImagePath).substring(1)
  const imageFilename = path.basename(inputImagePath, '.' + imageExtension)
  const resizedImagePath = path.join(imageDir, imageFilename + '.resized.' + imageExtension)
  const finalImagePath = path.join(imageDir, imageFilename + '.resized.png')

  const im = new Imagina()

  return new Promise(promisifyResize)
    .then(maybeConvert)
    .then(move)
    .catch(logError)

  function promisifyResize(resolve, reject) {
    resize(function onResizeDone(err) {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  }

  function resize(cb) {
    const params = '-resize 180x180^ -gravity center -extent 180x180'.split(' ')
    im.resize(inputImagePath, resizedImagePath, '180x180', params, cb)
  }

  function maybeConvert() {
    if (imageExtension !== 'png') {
      return new Promise((resolve, reject) => {
        convert(resizedImagePath, function onConvertDone(doneErr) {
          if (doneErr) {
            reject(doneErr)
          } else {
            resolve()
          }
        })
      })
    } else {
      return undefined
    }
  }

  function convert(inputPath, cb) {
    const dir = path.dirname(inputPath)
    const extension = path.extname(inputPath).substring(1)
    const filename = path.basename(inputPath, '.' + extension)
    const outputPath = path.join(dir, filename + '.png')
    im.convert(inputPath, outputPath, cb)
  }

  function move() {
    if (outputFilePath) {
      mv(finalImagePath, outputFilePath, function onMoveDone(err) {
        if (err) {
          throw err
        }
      })
    }
  }

  function logError(error) {
    console.error('there was an error compressing the image', error)
    return Promise.reject(error)
  }
}
