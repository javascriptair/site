import {readdir, readFile} from 'fs'
import {resolve} from 'path'
import async from 'async'
import renderEpisode from './render-episode'


import hanson from 'hanson'
const episodeRoot = resolve(__dirname, '../../app/episodes')

readdir(episodeRoot, function(err, episodeFolders) {
  if (err) throw err
  console.log('episodeFolders', episodeFolders)
  let index = 0
  async.each(episodeFolders, function callCreateEpisode(folder, cb) {
    createEpisode(index++, folder, cb)
  }, function onDone() {
    console.log('DONE arguments', arguments)
  })
})

function createEpisode(episodeIndex, episodeDay, callback) {
  readFile(resolve(episodeRoot, episodeDay, 'data.hson'), 'utf-8', function(err, contents) {
    if (err) throw callback(err)
    const episode = hanson.parse(contents)
    const rendered = renderEpisode(episode, episodeIndex + 1)
    console.log('rendered', rendered)
    callback()
  })
}

//readGlob('app/episodes/**/data.hson', 'utf8', function(err, contents) {
  //if (err) throw err
  //const episodes = contents.map(c => hanson.parse(c))
  //console.log('episodes', episodes)
//})
