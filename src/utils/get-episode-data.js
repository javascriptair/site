import fs from 'fs'
import path from 'path'
import moment from 'moment'
import striptags from 'striptags'
import {stringify as queryify} from 'query-string'

import panelists from '<resources>/panelists'
import host from '<resources>/host'
import {
  displayListify, markdownToHTML,
  isPastAndNotToday, sortPeople, timezones,
} from './utils'

const episodes = getDirectories(path.resolve(__dirname, '../../episodes'))
const dateRegex = /\/(\d{4}-\d{2}-\d{2})/

export default getEpisodeData

function getEpisodeData(episodePath) {
  /* eslint complexity:[2,8] */
  const episode = require(episodePath).default // eslint-disable-line global-require
  const [, date] = dateRegex.exec(episodePath)
  const number = episode.number || episodes.indexOf(date)
  const numberPad = 3
  const numberDisplay = pad(number, numberPad)

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

  const {title = 'TBA', time = '12:00', transcript, timezone = 'CT', shortUrl} = episode
  const dateDisplay = moment(date).format('dddd, MMMM Do, YYYY')
  const description = (episode.description && episode.description.trim()) || getDefaultDescription()
  const descriptionHTML = markdownToHTML(description)
  const titleHTML = markdownToHTML(title, true)
  const taglessTitle = striptags(titleHTML.__html)
  const metaDescription = getMetaPageDescription(numberDisplay, descriptionHTML)

  return {
    date,
    time,
    dateDisplay,
    title,
    titleHTML,
    taglessTitle,
    number,
    numberDisplay,
    description,
    descriptionHTML,
    metaDescription,
    calendarUrl: getCalendarUrl({
      numberDisplay,
      title: taglessTitle,
      details: metaDescription,
      guests: episode.guests,
      time,
      shortUrl,
      timezone,
      date,
    }),
    screenshot: `https://javascriptair.com/episodes/${date}/screenshot.png`,
    page: `/episodes/${date}`,
    timeHTML: getTimeHTML(time, timezone),
    transcriptHTML: transcript ? transcriptToHTML(transcript) : null,
    past: episodeHasHappened(episode, date),
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
  return fs.readdirSync(srcpath).filter(file => (
    fs.statSync(path.join(srcpath, file)).isDirectory()
  ))
}

function pad(n, width, z) {
  z = z || '0'
  n = String(n)
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n // eslint-disable-line no-magic-numbers
}

function episodeHasHappened(episodeRaw, date) {
  const {past, podbeanId, transcript, host: {picks = []} = {}} = episodeRaw // eslint-disable-line no-shadow
  return !!past || !!podbeanId || !!transcript || !!picks.length || isPastAndNotToday(date)
}

function hasNotes({links, tips, picks}) {
  const none = 0
  return links.length + tips.length + picks.length > none
}

function getMetaPageDescription(numberDisplay, descriptionHTML) {
  const description = descriptionHTML.__html
    .replace(/\n\n/g, 'DOUBLE_NEW_LINE')
    .replace(/\n/g, ' ')
    .replace(/DOUBLE_NEW_LINE/g, '\n\n')
    .trim()
  return `Episode ${numberDisplay} of the live JavaScript broadcast podcast. ${striptags(description)}`
}

function getCalendarUrl({
  numberDisplay,
  title,
  details,
  shortUrl,
  timezone,
  date,
  guests,
  time,
}) {
  const base = 'http://www.google.com/calendar/event'
  const guestNames = displayListify(guests.map(g => g.name)).join('')
  const ctz = timezones[timezone]
  const day = moment(date).format('YYYYMMDD')
  const startTime = moment(getHourAndMinute(time))
  const endTime = moment(startTime).add(1, 'hour')
  const start = startTime.format('HHmmss')
  const end = endTime.format('HHmmss')
  const params = {
    action: 'TEMPLATE',
    text: `JavaScript Air Episode ${numberDisplay}: ${title} with ${guestNames}`,
    ctz,
    dates: `${day}T${start}/${day}T${end}`,
    details,
    location: shortUrl,
    trp: false,
    sprop: [shortUrl, 'name:JavaScript Air'],
  }
  return `${base}?${queryify(params)}`
}

function getTimeHTML(time, timezone) {
  // just thought I'd try the functional approach. I think I like it...
  return [time]
    .map(getHourAndMinute)
    .map(s => moment(s))
    .map(s => s.format('h:mm a'))
    .map(s => `${s} ${timezone}`)
    .map(s => {
      const normalTime = '12:00 pm CT'
      if (s === normalTime) {
        return normalTime
      } else {
        return `**${s}**`
      }
    })
    .map(s => markdownToHTML(s, true))[0]
}

function getHourAndMinute(time) {
  const [, hour, minute] = /(\d{1,2}):(\d{2})/.exec(time)
  return {hour, minute, second: 0}
}
