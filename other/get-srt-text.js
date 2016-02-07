const parser = require('subtitles-parser')
const fs = require('fs')
const input = process.argv[2]
const output = input.replace('.srt', '.txt')
const srt = fs.readFileSync(input, 'utf8')
 
const data = parser.fromSrt(srt)

const string = data.map(i => i.text).join(' ').replace(/\n/g, ' ').replace(/ {2,}/g, ' ')

fs.writeFileSync(output, string, 'utf8')

console.log('written to %s', output) // eslint-disable-line no-console

