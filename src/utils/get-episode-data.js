import fs from 'fs'
import path from 'path'
import moment from 'moment'
import striptags from 'striptags'

import {panelists} from '<resources>/panelists'
import host from '<resources>/host'
import {markdownToHTML, isPastAndNotToday, sortPeople} from './utils'

const episodes = getDirectories(path.resolve(__dirname, '../../episodes'))
const dateRegex = /\/(\d{4}-\d{2}-\d{2})/

export default getEpisodeData

function getEpisodeData(episodePath) {
  /* eslint complexity:[2,8] */
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
      id: guest.twitter || guest.name,
      ...guest,
    }
    htmlifyLinksPicksAndTips(guest)
    guest.hasNotes = hasNotes(guest)
    return guest
  })
  episode.sortedGuests = sortPeople(episode.guests)

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
    panelist.hasNotes = hasNotes(panelist)
    return panelist
  })

  episode.host = {
    ...host,
    links: [],
    tips: [],
    picks: [],
    ...episode.host,
  }
  htmlifyLinksPicksAndTips(episode.host)
  episode.host.hasNotes = hasNotes(episode.host)

  const time = episode.time || '12:00 PM (CT)'
  const dateDisplay = moment(date).format('dddd, MMMM Do, YYYY')
  const description = (episode.description && episode.description.trim()) || getDefaultDescription()
  const {transcript, title = 'TBA'} = episode
  const descriptionHTML = markdownToHTML(description)
  const titleHTML = markdownToHTML(title, true)

  return {
    date,
    time,
    dateDisplay,
    title,
    titleHTML,
    taglessTitle: striptags(titleHTML.__html),
    description,
    metaDescription: getMetaPageDescription(numberDisplay, descriptionHTML),
    screenshot: `https://javascriptair.com/episodes/${date}/screenshot.png`,
    page: `/episodes/${date}`,
    descriptionHTML,
    timeHTML: markdownToHTML(time, true),
    transcriptHTML: transcript ? transcriptToHTML(transcript) : null,
    hangoutUrl: episode.hangoutId ? `https://plus.google.com/events/${episode.hangoutId}` : null,
    past: episodeHasHappened(episode, date),
    number,
    numberDisplay,
    ...episode,
  }


  function getDefaultDescription() {
    return `
      This show is yet to be announced,
      but you can bet that it'll be awesome!
    `.trim()
  }

  function htmlifyLinksPicksAndTips(thing) {
    const stripP = true
    thing.linksHTML = thing.links.map(l => markdownToHTML(l, stripP))
    thing.tipsHTML = thing.tips.map(t => markdownToHTML(t, stripP))
    thing.picksHTML = thing.picks.map(p => markdownToHTML(p, stripP))
  }
}
function transcriptToHTML(transcript) {
  const html = transcript
    .split('\n')
    .map(t => t.trim()) // get rid extra whitespace
    .filter(t => !!t) // get rid of whitespace only
    .join('</p><p>')
  const wrappedHTML = `<p>${html}</p>`
  const noEmptyPTagsHTML = wrappedHTML.replace(/<p>\W{0,}<\/p>/g, '')
  return {__html: noEmptyPTagsHTML}
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

function episodeHasHappened(episodeRaw, date) {
  const {past, podbeanId, transcript, host: {picks = []} = {}} = episodeRaw // eslint-disable-line no-shadow
  return !!past || !!podbeanId || !!transcript || !!picks.length || isPastAndNotToday(date)
}

function hasNotes({links, tips, picks}) {
  return links.length + tips.length + picks.length > 0
}

function getMetaPageDescription(numberDisplay, descriptionHTML) {
  const description = descriptionHTML.__html
    .replace(/\n\n/g, 'DOUBLE_NEW_LINE')
    .replace(/\n/g, ' ')
    .replace(/DOUBLE_NEW_LINE/g, '\n\n')
    .trim()
  return `Episode ${numberDisplay} of the live JavaScript broadcast podcast. ${striptags(description)}`
}
