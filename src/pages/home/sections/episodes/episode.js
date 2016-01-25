import React from 'react'
import PersonGroup from '../../../../components/person-group'
import RSVPIcon from '../../../../components/rsvp-icon'
import {sortPeople} from '../../../../../shared/utils'


export default Episode

function Episode({episodeData}) {
  const {
    date,
    title,
    timeHTML,
    dateDisplay,
    guests = [],
    descriptionHTML,
    hangoutUrl,
    numberDisplay,
  } = episodeData
  const sortedGuests = sortPeople(guests)
  return (
    <div className="episode">

      {/*

        DATE
        EPISODE PART
        Information, Calendar, etc 

      */}

      <div className="episode__part episode__part--date">

        {/* DATE SECTION Number - Displays large, stylized episode number*/}
        <div className="episode__part--date__section episode__part--date__section--number">
          <h2>{numberDisplay}</h2>
        </div>

        {/* DATE SECTION Calendar - Displays date info and surrounding days */}
        <div className="episode__part--date__section episode__part--date__section--calendar">

          {/* CALENDAR - The container element for the calendar display */}
          <div className="calendar">

            {/* SECTION - Month - Shows the month the episode airs or aired */}
            <div className="calendar__section calendar__section--month">
              <h3>January</h3>
            </div>

            {/* SECTION - Dates - Shows the date of and the dates surrounding the episode*/}
            <div className="calendar__section calendar__section--dates">

              <div className="calendar__date calendar__date--before">
                <div className="calendar__date__name">Tue</div>
                <div className="calendar__date__number">11</div>
              </div>

              <div className="calendar__date calendar__date--main">
                <div className="calendar__date__name">Wed</div>
                <div className="calendar__date__number">12</div>
              </div>

              <div className="calendar__date calendar__date--after">
                <div className="calendar__date__name">Thur</div>
                <div className="calendar__date__number">13</div>
              </div>

            </div>

            {/* SECTION - Time - Shows the time the episode airs or aired*/}
            <div className="calendar__section calendar__section--time">
              <h3 dangerouslySetInnerHTML={timeHTML}></h3>
            </div>

          </div>

        </div>

        {/* DATE SECTION Buttons - Episode options, such as add to calendar*/}
        <div className="episode__part--date__section episode__part--date__section--buttons">
          <a href={`/episodes/${date}`}>Add to Calendar</a>
        </div>

      </div>

      {/*
        
        CONTENT
        EPISODE PART
        Description, title, date, guests, etc

      */}

      <div className="episode__part episode__part--content">

        {/* CONTENT SECTION - Clickable episode title */}
        <div className="content__section content__section--title">

          <h1 className="content__section--title__header">
            <a className="content__section--title__header__link" href={`/episodes/${date}`}>
              {title}
            </a>
          </h1>

        </div>

        {/* CONTENT SECTION - Description of the current episode*/}
        <div className="content__section content__section--description">
          <p dangerouslySetInnerHTML={descriptionHTML} />
        </div>

        {/* CONTENT SECTION - Call-to-acton buttons regarding the current episode*/}
        <div className="content__section content__section--buttons">

          <a className="content__section__button" href={`/episodes/${date}`}>
            View Episode...
          </a>

          <a className="content__section__button" href={hangoutUrl}>
            Add to Calendar...
          </a>

        </div>

        {/* CONTENT SECTION - Grid display of the episode's guests*/}
        <div className="content__section content__section--guests">

          <PersonGroup people={sortedGuests} hangoutUrl={hangoutUrl} />

        </div>

      </div>

    </div>
  )
}
