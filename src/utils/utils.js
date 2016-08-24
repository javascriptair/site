import moment from 'moment'
import marked from 'marked'
import deindent from 'deindent'
import arrify from 'arrify'
import {sample, shuffle, padStart} from 'lodash'
import {css} from 'aphrodite'

const timezones = {
  PT: 'America/Los_Angeles',
  AKT: 'America/Anchorage',
  CT: 'America/Chicago',
  MT: 'America/Denver',
  ET: 'America/New_York',
}

export {
  displayListify, intersperse,
  isPast, isFuture, isToday, isPastAndNotToday, shuffle as sortPeople,
  markdownToHTML, getClassNames,
  getRandomPositiveEmoji, timezones, tweetifyMessage,
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
  /* eslint no-magic-numbers: "off" */
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

function isFuture(date, compare = new Date()) {
  return moment(compare).diff(date) < 0
}

function isPast(date, compare = new Date()) {
  return !isFuture(date, compare) && !isToday(date)
}

function isToday(date) {
  return moment(date).isSame(moment(), 'day')
}

function isPastAndNotToday(date) {
  return isPast(date) && !isToday(date)
}

function markdownToHTML(string, stripP) {
  let html = marked(deindent(string))
  if (stripP) {
    html = html.slice(3, -5)
  }
  html = html
    .replace(/&#39;/g, `'`)
    .replace(/&#x27;/g, `'`)
    .replace(/&amp;/g, '&')
  return {__html: html}
}

function getClassNames(styles) {
  return Object.keys(styles).map(k => css(styles[k]))
}

function getRandomPositiveEmoji() {
  return sample(['✨', '💥', '🎉', '🚀', '🌟', '🎊', '👍', '💯', '👏', '🙌', '😎', '🔥', '😻', '💖', '🤘'])
}

function tweetifyMessage(message, urls, thingsToRemove) {
  thingsToRemove = arrify(thingsToRemove)
  const MAX_LENGTH = 140
  const LENGTH_OF_URLS = 23
  const messageWithProperLengthUrls = arrify(urls).reduce((msg, url, index) => {
    return msg.replace(url, padStart(`URL${index}`, LENGTH_OF_URLS, '_'))
  }, message)
  const tweetLength = lengthWithEmojiCountingAsOne(messageWithProperLengthUrls)
  if (tweetLength > MAX_LENGTH && thingsToRemove.length) {
    const [, ...remainingThingsToRemove] = thingsToRemove
    return tweetifyMessage(message.replace(thingsToRemove[0], ''), urls, remainingThingsToRemove)
  }
  return message
}

function lengthWithEmojiCountingAsOne(message) {
  return message.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '0').length
}
