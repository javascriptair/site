import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import moment from 'moment'
import IconLink from '<components>/icon-link'
import {displayListify, getRandomPositiveEmoji, tweetifyMessage} from '<utils>/utils'

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
        rel="noopener noreferrer"
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

function getMessage({past, taglessTitle, sortedGuests, shortUrl, date, timeObj, timezone}) {
  /* eslint max-len:[2, 130] */
  const mDate = moment(date)
  mDate.set(timeObj)
  const moreThanAWeekFormat = '[on] MMM Do [at] h:mm a'
  const withinAWeekFormat = '[on] dddd [at] h:mm a'
  const displayDateTime = mDate.calendar(new Date(), {
    nextWeek: withinAWeekFormat,
    sameElse: moreThanAWeekFormat,
  })
  const guestList = sortedGuests.map(guest => (guest.twitter ? `@${guest.twitter}` : guest.name))
  const displayGuests = displayListify(guestList).join('')
  const jsAirMention = ' on @JavaScriptAir'
  const emoji = getRandomPositiveEmoji()
  const message = past ?
    `Check out "${taglessTitle}" w/ ${displayGuests}${jsAirMention} ${shortUrl} ${emoji}` :
    `Watch "${taglessTitle}" live w/ ${displayGuests}${jsAirMention} ${displayDateTime} ${timezone} ${shortUrl} ${emoji}`
  return tweetifyMessage(message, shortUrl, [jsAirMention, emoji])
}
