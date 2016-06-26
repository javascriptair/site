import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import moment from 'moment'
import RSVPIcon from '<components>/rsvp-icon'

export default Calendar

const CalendarSection = {
  section: {
    clear: 'both',
  },
  sectionHeading: {
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#4a4a4a',
    padding: '10px',
  },
  sectionMonth: {
    fontSize: '1.5em',
  },
  sectionTime: {
    letterSpacing: '0.06em',
    fontSize: '1.15em',
  },
  sectionDates: {
    width: '250px',
  },
  sectionDatesContainer: {
    display: 'flex',
    width: '360px',
    left: '-54px',
    position: 'relative',
    float: 'left',
  },
}

function Calendar({episode}) {
  const {
    date,
    hangoutUrl,
    timeHTML,
    page,
  } = episode
  const dateCurrent = moment(date)
  const dateAfter = moment(date).add(1, 'days')
  const dateBefore = moment(date).subtract(1, 'days')
  const {styles} = Calendar
  return (
    <div className={`${css(styles.calendar)}`}>
      <ShowMonth date={dateCurrent} />
      <ShowDays
        date={dateCurrent}
        page={page}
        dateBefore={dateBefore}
        dateAfter={dateAfter}
        hangoutUrl={hangoutUrl}
      />
      <ShowTime timeHTML={timeHTML} />
    </div>
  )
}

Calendar.propTypes = {
  episode: PropTypes.object.isRequired,
}

Calendar.styles = StyleSheet.create({
  calendar: {
    overflow: 'hidden',
    '@media only screen and (max-width : 1100px)': {
      display: 'none',
    },
  },
})

function ShowMonth({date}) {
  const {styles} = ShowMonth
  return (
    <div className={`${css(styles.section, styles.sectionHeading, styles.sectionMonth, styles.showMonth)}`}>
      <h3>{date.format('MMMM')}</h3>
    </div>
  )
}

ShowMonth.propTypes = {
  date: PropTypes.object.isRequired,
}

ShowMonth.styles = StyleSheet.create(Object.assign({
  showMonth: {
    paddingTop: 0,
  },
}, CalendarSection))

function ShowDays({date, page, dateBefore, dateAfter, hangoutUrl}) {
  const {styles} = ShowDays
  return (
    <div className={`${css(styles.section, styles.sectionDates)}`}>
      <div className={`${css(styles.sectionDatesContainer)}`}>
        <DateSquare side="before" date={dateBefore} />
        <MainDate
          page={page}
          date={date}
          hangoutUrl={hangoutUrl}
        />
        <DateSquare side="after" date={dateAfter} />
      </div>
    </div>
  )
}

ShowDays.propTypes = {
  date: PropTypes.object.isRequired,
  dateBefore: PropTypes.object.isRequired,
  dateAfter: PropTypes.object.isRequired,
  hangoutUrl: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
}

ShowDays.styles = StyleSheet.create(CalendarSection)

function MainDate({page, date, hangoutUrl}) {
  const {styles} = MainDate
  return (
    <DateSquare side="main" date={date}>
      <div className={`${css(styles.calendarDateSlide)}`}>
        <RSVPIcon
          hangoutUrl={hangoutUrl}
          black={true}
          iconStyles={styles.mainDateRSVPIcon}
        />
      <a className={`${css(styles.calendarDateSlideLink)}`} href={page}>Add to Calendar</a>
      </div>
    </DateSquare>
  )
}

MainDate.propTypes = {
  date: PropTypes.object.isRequired,
  hangoutUrl: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
}

MainDate.styles = StyleSheet.create({
  mainDateRSVPIcon: {
    fill: 'black',
    width: 40,
    height: 40,
    paddingBottom: 10,
  },
  calendarDateSlide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'absolute',
    boxSizing: 'border-box',
    padding: '10px',
    width: '120px',
    height: '120px',
    bottom: '-120px',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    transition: 'all 0.6s ease',
  },
  calendarDateSlideLink: {
    fontSize: '1.3em',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
  },
})

function DateSquare({side, date, children}) {
  const {styles} = DateSquare
  return (
    <div className={`${css(styles.calendarDate)} ${css(styles['calendarDate' + side])}`}>
      <div className={`${css(styles.calendarDateName)}`}>{date.format('ddd')}</div>
      <div className={`${css(styles.calendarDateNumber)}`}>{date.format('D')}</div>
      {children}
    </div>
  )
}

DateSquare.propTypes = {
  side: PropTypes.oneOf(['before', 'after', 'main']).isRequired,
  date: PropTypes.object.isRequired,
  children: PropTypes.any,
}

DateSquare.styles = StyleSheet.create({
  calendarDate: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: '1',
    position: 'relative',
    width: '120px',
    height: '120px',
    backgroundColor: '#c4c4c4',
    ':hover [class^=calendarDateName]': {
      filter: 'blur(1px)',
      color: 'gray',
      fontSize: '1.3em',
    },
    ':hover [class^=calendarDateNumber]': {
      filter: 'blur(1px)',
      color: 'gray',
      fontSize: '4.5em',
    },
  },
  calendarDatebefore: {
    transform: `perspective(500px) rotateX(0deg) rotateY(-30deg)
                rotateZ(0deg) scale(.935) scale3d(1, 1, 1) translate(9.4px, 0px)`,
    opacity: '0.4',
  },
  calendarDatemain: {
    ':hover [class^=calendarDateSlide]': {
      bottom: '0',
    },
    ':hover [class^=calendarDateName]': {
      filter: 'blur(5px)',
      color: 'gray',
      fontSize: '1.3em',
    },
    ':hover [class^=calendarDateNumber]': {
      filter: 'blur(5px)',
      color: 'gray',
      fontSize: '4.5em',
    },
  },
  calendarDateafter: {
    transform: `perspective(500px) rotateX(0deg) rotateY(30deg)
                rotateZ(0deg) scale(.935) scale3d(1, 1, 1) translate(-9.4px, 0px)`,
    opacity: '0.4',
  },
  calendarDateName: {
    fontSize: '1.4em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'all 0.25s',
  },
  calendarDateNumber: {
    display: 'block',
    fontSize: '4em',
    fontWeight: 'bold',
    transition: 'all 0.4s',
  },
})

function ShowTime({timeHTML}) {
  const {styles} = ShowTime
  return (
    <div className={`${css(styles.section, styles.sectionHeading, styles.sectionTime)}`}>
      <h3 dangerouslySetInnerHTML={timeHTML}></h3>
    </div>
  )
}

ShowTime.propTypes = {
  timeHTML: PropTypes.object.isRequired,
}

ShowTime.styles = StyleSheet.create(CalendarSection)
