var inputImagePath = process.argv[2]
var Imagina = require('imagina')
var path = require('path')
var dir = path.dirname(inputImagePath)
var extension = path.extname(inputImagePath).substring(1)
var filename = path.basename(inputImagePath, '.' + extension)
var resizedImagePath = path.join(dir, filename + '.resized.' + extension)

var im = new Imagina()

resize(function onResizeDone(err) {
  if (err) {
    throw err
  }
  console.log('resize done')
  if (extension !== 'png') {
    convert(resizedImagePath, function onConvertDone(err) {
      if (err) {
        throw err
      }
      console.log('Conversion done')
    })
  } else {
    console.log('no conversion necessary');
  }
})

function convert(inputPath, cb) {
  var dir = path.dirname(inputPath)
  var extension = path.extname(inputPath).substring(1)
  var filename = path.basename(inputPath, '.' + extension)
  var outputPath = path.join(dir, filename + '.png')
  console.log('converting', inputPath, outputPath)
  im.convert(inputPath, outputPath, cb)
}

function resize(cb) {
  var params = '-resize 180x180^ -gravity center -extent 180x180'.split(' ')
  console.log('resizing', inputImagePath, resizedImagePath)
  im.resize(inputImagePath, resizedImagePath, '180x180', params, cb)
}

function getFilename(filepath) {
  return filepath.split(/(\\|\/)/g).pop()
}

