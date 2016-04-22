import {PropTypes} from 'react'
import moment from 'moment'

import Calendar from './calendar'
export default Date

function Date({episode}) {
  const {
    numberDisplay,
    date,
    page,
  } = episode
  return (
    <div className="episode__part episode__part--date">
      <EpisodeNumber numberDisplay={numberDisplay} />
      <div className="episode__part--date__section episode__part--date__section--calendar">
        <MobileCalendar date={date} />
        <Calendar episode={episode} />
      </div>
      <AddToCalendar page={page} />
    </div>
  )
}

Date.propTypes = {
  episode: PropTypes.object.isRequired,
}

function EpisodeNumber({numberDisplay}) {
  return (
    <div className="episode__part--date__section episode__part--date__section--number">
      <h2 className="episode__part--date__section--number__h2">{numberDisplay}</h2>
    </div>
  )
}

EpisodeNumber.propTypes = {
  numberDisplay: PropTypes.string.isRequired,
}

function MobileCalendar({date}) {
  const dateCurrent = moment(date)
  return (
    <div className="calendar--mobile">
      {dateCurrent.format('ddd, MMM DD, YYYY')}
    </div>
  )
}

MobileCalendar.propTypes = {
  date: PropTypes.string.isRequired,
}

function AddToCalendar({page}) {
  return (
    <div className="episode__part--date__section episode__part--date__section--buttons">
      <a href={page}>Add to Calendar</a>
    </div>
  )
}

AddToCalendar.propTypes = {
  page: PropTypes.string.isRequired,
}
