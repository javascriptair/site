import compressImage from './utils/compress-image'

const inputImagePath = process.argv[2]
const outputFilePath = process.argv[3]

compressImage(inputImagePath, outputFilePath)
