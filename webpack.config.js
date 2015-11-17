require('babel-core/register')({
  presets: ['es2015', 'stage-2'],
});
module.exports = require('./other/webpack.config.es6');

