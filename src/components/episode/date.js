import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import moment from 'moment'
import {upToBig} from '<styles>/media-queries'

import TweetLink from './tweet-link'
import Calendar from './calendar'

export default Date

function Date({episode}) {
  const {
    numberDisplay,
    date,
    page,
  } = episode
  const {styles} = Date
  return (
    <div className={css(styles.dateRoot)}>
      <EpisodeNumber numberDisplay={numberDisplay} />
      <div>
        <MobileCalendar date={date} />
        <Calendar episode={episode} />
      </div>
      <div className={css(styles.bottomWrapper)}>
        <AddToCalendar page={page} />
        <TweetLink episode={episode} />
      </div>
    </div>
  )
}

Date.propTypes = {
  episode: PropTypes.object.isRequired,
}

Date.styles = StyleSheet.create({
  dateRoot: {
    float: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    minWidth: '250px',
    boxShadow: 'inset -23px -1px 35px -15px rgba(0,0,0,0.12)',
    backgroundColor: '#ebebeb',
    [upToBig]: {
      padding: '20px',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'none',
    },
  },
  bottomWrapper: {
    marginBottom: 10,
  },
})

function EpisodeNumber({numberDisplay}) {
  const {styles} = EpisodeNumber
  return (
    <div className={css(styles.episodeNumberRoot)}>
      <h2 className={css(styles.episodeNumberH2)}>{numberDisplay}</h2>
    </div>
  )
}

EpisodeNumber.propTypes = {
  numberDisplay: PropTypes.string.isRequired,
}

EpisodeNumber.styles = StyleSheet.create({
  episodeNumberRoot: {
    padding: '20px 40px',
    paddingBottom: '0',
    [upToBig]: {
      padding: '0px',
      paddingRight: '15px',
    },
  },
  episodeNumberH2: {
    display: 'block',
    fontSize: '6.25em',
    fontWeight: 'bold',
    [upToBig]: {
      fontSize: '1.7em',
    },
  },
})

function MobileCalendar({date}) {
  const dateCurrent = moment(date)
  const {styles} = MobileCalendar
  return (
    <div className={css(styles.mobileCalendar)}>
      {dateCurrent.format('ddd, MMM DD, YYYY')}
    </div>
  )
}

MobileCalendar.propTypes = {
  date: PropTypes.string.isRequired,
}

MobileCalendar.styles = StyleSheet.create({
  mobileCalendar: {
    display: 'none',
    [upToBig]: {
      display: 'block',
      fontSize: '1.7em',
    },
  },
})

function AddToCalendar({page}) {
  const {styles} = AddToCalendar
  return (
    <div className={css(styles.addToCalendarRoot)}>
      <a href={page} className={css(styles.addToCalendarLink)}>Add to Calendar</a>
    </div>
  )
}
AddToCalendar.styles = StyleSheet.create({
  addToCalendarRoot: {
    padding: 10,
    textAlign: 'center',
    [upToBig]: {
      display: 'none',
    },
  },
  addToCalendarLink: {
    fontSize: '1.05em',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#4a4a4a',
    padding: '10px',
    transition: 'all 0.4s',
    ':hover': {
      letterSpacing: '0.1em',
    },
  },
})

AddToCalendar.propTypes = {
  page: PropTypes.string.isRequired,
}
