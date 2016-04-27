import {PropTypes} from 'react'
import striptags from 'striptags'
import {displayListify, getRandomPositiveEmoji} from '../../../../../shared/utils'

export default TweetLink

function TweetLink({episode}) {
  const message = getMessage(episode)
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURI(message)}`

  return (
    <span>
      <a
        className="episode-tweet-link"
        href={tweetUrl}
        target="_blank"
      >
        Tweet this
      </a>
    </span>
  )
}

TweetLink.propTypes = {
  episode: PropTypes.object.isRequired,
}

function getMessage({past, titleHTML, sortedGuests, shortUrl, date}) {
  const title = striptags(titleHTML.__html)
  const guestList = sortedGuests.map((guest) => guest.twitter ? `@${guest.twitter}` : guest.name)
  const message = past ?
    `Check out "${title}" w/ ${displayListify(guestList).join('')} ${shortUrl}` :
    `Watch "${title}" live w/ ${displayListify(guestList).join('')} on ${date} ${shortUrl}`
  return message + ' ' + getRandomPositiveEmoji()
}
