import {PropTypes} from 'react'
import moment from 'moment'
import RSVPIcon from '../../../../../components/rsvp-icon'

export default Calendar

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
  return (
    <div className="calendar">
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

function ShowMonth({date}) {
  return (
    <div className="calendar__section calendar__section--heading calendar__section--month">
      <h3>{date.format('MMMM')}</h3>
    </div>
  )
}

ShowMonth.propTypes = {
  date: PropTypes.object.isRequired,
}

function ShowDays({date, page, dateBefore, dateAfter, hangoutUrl}) {
  return (
    <div className="calendar__section calendar__section--dates">
      <div className="calendar__section--dates__container">
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

function MainDate({page, date, hangoutUrl}) {
  return (
    <DateSquare side="main" date={date}>
      <div className="calendar__date__slide">
        <RSVPIcon hangoutUrl={hangoutUrl} className="calendar__date__icon" />
        <a href={page}>Add to Calendar</a>
      </div>
    </DateSquare>
  )
}

MainDate.propTypes = {
  date: PropTypes.object.isRequired,
  hangoutUrl: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
}

function DateSquare({side, date, children}) {
  return (
    <div className={`calendar__date calendar__date--${side}`}>
      <div className="calendar__date__name">{date.format('ddd')}</div>
      <div className="calendar__date__number">{date.format('D')}</div>
      {children}
    </div>
  )
}

DateSquare.propTypes = {
  side: PropTypes.oneOf(['before', 'after', 'main']).isRequired,
  date: PropTypes.object.isRequired,
  children: PropTypes.any,
}

function ShowTime({timeHTML}) {
  return (
    <div className="calendar__section calendar__section--heading calendar__section--time">
      <h3 dangerouslySetInnerHTML={timeHTML}></h3>
    </div>
  )
}

ShowTime.propTypes = {
  timeHTML: PropTypes.object.isRequired,
}
