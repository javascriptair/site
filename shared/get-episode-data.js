import fs from 'fs'
import path from 'path'

import {panelists} from '../resources/panelists'
import moment from 'moment'
import deindent from 'deindent'
import {markdown} from 'markdown'

const episodes = getDirectories(path.resolve(__dirname, '../episodes'))
const dateRegex = /\/(\d{4}-\d{2}-\d{2})/

export default getEpisodeData

function getEpisodeData(episodePath) {
  /* eslint complexity:[2,6] */
  const episode = require(episodePath).default
  const date = dateRegex.exec(episodePath)[1]
  const number = episode.number || episodes.indexOf(date)
  const numberDisplay = pad(number, 3)

  episode.guests = (episode.guests || []).map(guest => {
    guest = {
      imgSrc: `/episodes/${date}/${guest.twitter}.png`,
      link: `https://twitter.com/${guest.twitter}`,
      links: [],
      tips: [],
      picks: [],
      ...guest,
    }
    htmlifyLinksPicksAndTips(guest)
    return guest
  })

  episode.panelists = (episode.panelists || []).map(panelist => {
    panelist = {
      imgSrc: `/resources/panelists/${panelist.twitter}.png`,
      links: [],
      tips: [],
      picks: [],
      ...panelists.find(({twitter}) => twitter === panelist.twitter),
      ...panelist,
    }
    htmlifyLinksPicksAndTips(panelist)
    return panelist
  })

  episode.host = {
    name: 'Kent C. Dodds',
    twitter: 'kentcdodds',
    imgSrc: '/resources/kentcdodds.png',
    links: [],
    tips: [],
    picks: [],
    ...episode.host,
  }
  htmlifyLinksPicksAndTips(episode.host)

  const time = episode.time || '12:00 PM (CT)'
  const dateDisplay = moment(date).format('dddd, MMMM Do, YYYY')
  const description = episode.description || getDefaultDescription()

  return {
    date,
    time,
    dateDisplay,
    title: 'TBA',
    description,
    descriptionHTML: markdownToHTML(description),
    hangoutUrl: `https://plus.google.com/events/${episode.hangoutId}`,
    number,
    numberDisplay,
    ...episode,
  }


  function getDefaultDescription() {
    return `
      This show is yet to be announced,
      but you can bet that it'll be awesome!
    `
  }

  function htmlifyLinksPicksAndTips(thing) {
    thing.linksHTML = thing.links.map(markdownToHTML)
    thing.tipsHTML = thing.tips.map(markdownToHTML)
    thing.picksHTML = thing.picks.map(markdownToHTML)
  }
}

function markdownToHTML(string) {
  return {__html: markdown.toHTML(deindent(string))}
}


function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter((file) => {
    return fs.statSync(path.join(srcpath, file)).isDirectory()
  })
}

function pad(n, width, z) {
  z = z || '0'
  n = n + ''
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

