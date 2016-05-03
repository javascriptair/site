import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import PersonGroup from '<components>/person-group'
import {isPast} from '<utils>/utils'
import RSVPIcon from '<components>/rsvp-icon'
import TweetLink from './tweet-link'

export default Header

function Header({episode}) {
  const {
    titleHTML,
    timeHTML,
    dateDisplay,
    date,
    descriptionHTML,
    hangoutUrl,
    numberDisplay,
  } = episode
  const {styles} = Header
  const past = episode.past || isPast(date)

  return (
    <div>
      <div className={css(styles.titleContainer)}>
        <h1>
          <a href="/">JavaScript Air</a>
        </h1>
        <h2 className={css(styles.title)}>
          <strong>
            Episode {numberDisplay}: <span dangerouslySetInnerHTML={titleHTML} />
          </strong>
          <br />
          <small>
            {past ? '' : <RSVPIcon hangoutUrl={hangoutUrl} />}
            {' ' + dateDisplay} at <span dangerouslySetInnerHTML={timeHTML} />
          </small>
          <br />
          <TweetLink
            episode={episode}
          />
        </h2>
        <PersonGroup people={episode.sortedGuests} />
      </div>
      <div className={css(styles.description)}>
        <p dangerouslySetInnerHTML={descriptionHTML}></p>
      </div>
    </div>
  )
}

Header.propTypes = {
  episode: PropTypes.object.isRequired,
}

Header.styles = StyleSheet.create({
  title: {margin: '30px 0'},
  titleContainer: {textAlign: 'center'},
  description: {margin: '30px 0'},
})
