import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import IconLink from '<components>/icon-link'
import {displayListify, getRandomPositiveEmoji} from '<utils>/utils'

export default TweetLink

function TweetLink({episode}) {
  const message = getMessage(episode)
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURI(message)}`
  const {styles} = TweetLink

  return (
    <span className={css(styles.iconContainer)}>
      <IconLink
        black={true}
        href={tweetUrl}
        target="_blank"
        title="Tweet this"
        name="twitter"
      />
    </span>
  )
}

TweetLink.propTypes = {
  episode: PropTypes.object.isRequired,
}

TweetLink.styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 40,
    display: 'inline-block',
    padding: '0 5px',
  },
})

function getMessage({past, taglessTitle, sortedGuests, shortUrl, date}) {
  const guestList = sortedGuests.map((guest) => guest.twitter ? `@${guest.twitter}` : guest.name)
  const message = past ?
    `Check out "${taglessTitle}" w/ ${displayListify(guestList).join('')} ${shortUrl}` :
    `Watch "${taglessTitle}" live w/ ${displayListify(guestList).join('')} on ${date} ${shortUrl}`
  return message + ' ' + getRandomPositiveEmoji()
}
