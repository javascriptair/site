import moment from 'moment'

export {
  displayListify, intersperse, sortEpisodes,
  isPast, isFuture, isToday, sortPeople,
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



function sortPeople(people = []) {
  return people.sort((a, b) => a.twitter > b.twitter)
}

