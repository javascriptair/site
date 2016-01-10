import path from 'path'
import {displayListify, sortPeople} from '../shared/utils'
import getEpisodeData from '../shared/get-episode-data'

const episodePath = path.join(process.cwd(), process.argv[2])
const episodeData = getEpisodeData(episodePath)
const {title, shortUrl, guests} = episodeData

const twitterHandles = sortPeople(guests)
  .map(g => (
    g.twitter ? `@${g.twitter}` : g.name
  ))

const message = `"${title}" w/ ${displayListify(twitterHandles).join('')} is up! ${shortUrl}`

console.log(message)
