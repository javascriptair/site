import path from 'path'
import host from '<resources>/host'
import panelists from '<resources>/panelists'
import {episodes} from '../episodes'
import sponsors from '../sponsors'
import {writeJsonArray, writeJsonObject} from './write-to-json-file'

const config = getConfig()

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


function getConfig() {
  return {
    hostToJson: {
      destDirectoryFromHere: '../resources/host/',
      propertiesToFilter: [
        'imgSrc',
        'name',
        'twitter',
        'link',
      ],
    },
    sponsorsToJson: {
      destDirectoryFromHere: '../sponsors/',
      propertiesToFilter: [
        'premierSponsors',
        'goldSponsors',
        'silverSponsors',
        'appreciationSponsors,',
      ],
    },
    panelistsToJson: {
      destDirectoryFromHere: '../resources/panelists/',
      propertiesToFilter: [
        'imgSrc',
        'name',
        'twitter',
        'link',
      ],
    },
    episodesToJson: {
      destDirectoryFromHere: '../episodes/',
      propertiesToFilter: [
        'numberDisplay',
        'title',
        'date',
        'time',
        'description',
        'calendarUrl',
        'youTubeId',
        'guests',
      ],
    },
  }
}
