import moment from 'moment'
import {markdown} from 'markdown'
import deindent from 'deindent'

export {
  displayListify, intersperse, sortEpisodes,
  isPast, isFuture, isToday, isPastAndNotToday, sortPeople,
  markdownToHTML,
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

function isPastAndNotToday(date) {
  return isPast(date) && !isToday(date)
}

function markdownToHTML(string, stripP) {
  let html = markdown.toHTML(deindent(string))
  if (stripP) {
    html = html.slice(3, -4)
  }
  return {__html: html}
}

function sortPeople(people = []) {
  return people.sort((a, b) => {
    const aVal = (a.twitter || a.name).toLowerCase()
    const bVal = (b.twitter || b.name).toLowerCase()
    return aVal > bVal ? 1 : -1
  })
}

