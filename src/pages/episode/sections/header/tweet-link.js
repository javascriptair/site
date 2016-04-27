import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import striptags from 'striptags'
import IconLink from '../../../../components/icon-link'
import {linkColor, linkHoverColor} from '../../../../styles/variables'
import {displayListify, getRandomPositiveEmoji} from '../../../../../shared/utils'

export default TweetLink

function TweetLink({episode}) {
  const message = getMessage(episode)
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURI(message)}`
  const {styles} = TweetLink

  return (
    <span className={css(styles.iconContainer)}>
      <IconLink
        className={css(styles.icon)}
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
  icon: {
    fill: linkColor,
    ':hover': {fill: linkHoverColor},
  },
})

function getMessage({past, titleHTML, sortedGuests, shortUrl, date}) {
  const title = striptags(titleHTML.__html)
  const guestList = sortedGuests.map((guest) => guest.twitter ? `@${guest.twitter}` : guest.name)
  const message = past ?
    `Check out "${title}" w/ ${displayListify(guestList).join('')} ${shortUrl}` :
    `Watch "${title}" live w/ ${displayListify(guestList).join('')} on ${date} ${shortUrl}`
  return message + ' ' + getRandomPositiveEmoji()
}
