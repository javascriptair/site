import moment from 'moment'
import deindent from 'deindent'
import {markdown} from 'markdown'
import panelists from '../resources/panelists'


export {
  displayListify, intersperse, sortEpisodes,
  isPast, isFuture, isToday, getEpisodeData,
  sortPeople,
}

/* intersperse: Return an array with the separator interspersed between
 * each element of the input array.
 *
 * > intersperse([1,2,3], 0)
 * [1,0,2,0,3]
 * modified from http://stackoverflow.com/a/23619085/971592
 */
function intersperse(arr, sep) {
  if (arr.length === 0) {
    return []
  }
  return arr.reduce(function intersperseReduce(xs, x, i) {
    if (i === 0) {
      return [x]
    } else if (typeof sep === 'function') {
      return xs.concat([sep(x, i), x])
    } else {
      return xs.concat([sep, x])
    }
  }, [])
}

function displayListify(arr) {
  const sep = ', '
  const preLast = 'and '

  if (arr.length === 0) {
    return []
  }

  if (arr.length === 1) {
    return arr
  }

  if (arr.length === 2) {
    return [arr[0], ' ', preLast, arr[1]]
  }

  return arr.reduce(function displayListifyReduce(xs, x, i) {
    let concat = [sep, x]
    if (i === 0) {
      concat = [x]
    } else if (i === arr.length - 1 && preLast) {
      concat = [sep, preLast, x]
    }
    return xs.concat(concat)
  }, [])
}

function sortEpisodes(a, b) {
  return moment(a.date) > moment(b.date)
}

function isFuture(date) {
  return moment().diff(date) < 0
}

function isPast(date) {
  return !isFuture(date)
}

function isToday(date) {
  return moment(date).isSame(moment(), 'day')
}

function getEpisodeData(episodePath) {
  const dateRegex = /\/(\d{4}-\d{2}-\d{2})/
  const episode = require(episodePath).default
  const date = dateRegex.exec(episodePath)[1]

  episode.guests = (episode.guests || []).map(guest => {
    guest = {
      imgSrc: `/episodes/${date}/${guest.twitter}.png`,
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

  function markdownToHTML(string) {
    return {__html: markdown.toHTML(deindent(string))}
  }

}

function sortPeople(people = []) {
  return people.sort((a, b) => a.twitter > b.twitter)
}
