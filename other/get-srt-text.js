var parser = require('subtitles-parser');
var fs = require('fs');
var input = process.argv[2];
var output = input.replace('.srt', '.txt');
var srt = fs.readFileSync(input, 'utf8');
 
var data = parser.fromSrt(srt);

var string = data.map(i => i.text).join(' ').replace(/\n/g, ' ').replace(/  /g, ' ');

fs.writeFileSync(output, string, 'utf8');

console.log('written to %s', output);

