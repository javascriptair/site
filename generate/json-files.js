import path from 'path'
import {writeJsonArray, writeJsonObject} from './write-to-json-file'
import {host} from '../resources/host'
import {episodes} from '../episodes'
import {panelists} from '../resources/panelists'
import sponsors from '../sponsors'
import * as config from './json-files-configs'

// all episodes data in a same data.json file (filtered properties only)
writeJsonArray(episodes, config.episodesToJson, true)

// all episodes data in a separate data.json file - per date - (no property filter)
episodes.forEach(
  episode => {
    const episodeConfig = Object.assign({}, config.episodesToJson)
    episodeConfig.destDirectoryFromHere = path.join(episodeConfig.destDirectoryFromHere, `${episode.date}`)
    writeJsonObject(episode, episodeConfig)
  }
)

// all panelists data in a data.json file (filtered properties only)
writeJsonArray(panelists, config.panelistsToJson, true)

// all sponsors data in a data.json file (filtered properties only)
const sponsorsArray = [].concat(sponsors)
writeJsonArray(sponsorsArray, config.sponsorsToJson, true)

// all host data in a data.json file (no property filter)
writeJsonObject(host, config.hostToJson, false)
