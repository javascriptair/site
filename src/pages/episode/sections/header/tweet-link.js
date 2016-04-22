import React from 'react'
import {displayListify, validateMessageAndAddEmojiIfOk} from '../../../../../shared/utils'

export default TweetLink

function TweetLink(props) {
  const {
    episode,
    guests,
    isPast,
  } = props

  const {shortUrl} = episode
  const title = episode.titleHTML.__html
  const date = episode.dateDisplay
  const guestList = guests.map((guest) => guest.twitter ? `@${guest.twitter}` : guest.name)

  let message = isPast ?
    `Check out "${title}" w/ ${displayListify(guestList).join('')} ${shortUrl}` :
    `Watch "${title}" live w/ ${displayListify(guestList).join('')} on ${date} ${shortUrl}`
  message = validateMessageAndAddEmojiIfOk(message)
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURI(message)}`

  return (
    <span>
      <a className="episode-tweet-link" href={tweetUrl}>Tweet this</a>
    </span>
  )
}

TweetLink.propTypes = {
  episode: React.PropTypes.object.isRequired,
  guests: React.PropTypes.array.isRequired,
  isPast: React.PropTypes.bool.isRequired,
}
