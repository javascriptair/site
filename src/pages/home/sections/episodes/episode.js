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

        EPISODE DATE
        Information, Calendar, etc 

      */}

      <div className="episode__date">

        {/* DATE SECTION Number - Displays large, stylized episode number*/}
        <div className="date-sec date-sec--num">
          <h2>{numberDisplay}</h2>
        </div>

        {/* DATE SECTION Calendar - Displays date info and surrounding days */}
        <div className="date-sec date-sec--cal">

          {/* Calendar Month - Displays the full name of the month */}
          <div className="cal-sec cal-sec--month">
            <h3>January</h3>
          </div>

          {/* Calendar Dates - Displays the dates in a calendar-like row */}
          <div className="cal-sec cal-sec--dates">

            {/* Date Before - The date before the date of the episode */}
            <div className="date date--secondary date--left">
              <div className="date__name">Tue</div>
              <div className="date__number">12</div>
            </div>

            {/* Date Episode- The date of the episode */}
            <div className="date date--main">
              <div className="date__name">Wed</div>
              <div className="date__number">13</div>
            </div>

            {/* Date After - The date after the date of the episode */}
            <div className="date date--secondary date--right">
              <div className="date__name">Thur</div>
              <div className="date__number">14</div>
            </div>

          </div>

          {/* Calendar Time - Displays the air time of the episode*/}
          <div className="cal-sec cal-sec--time">
            <h3 dangerouslySetInnerHTML={timeHTML}></h3>
          </div>

        </div>

        {/* DATE SECTION Buttons - Episode options, such as add to calendar*/}
        <div className="date-sec date-sec--btn">

        </div>

      </div>

      {/*
        
        EPISODE CONTENT
        Description, title, date, guests, etc

      */}

      <div className="episode__content">

        {/* CONTENT SECTION - Clickable episode title */}
        <div className="content-sec content-sec--title">

          <h1 className="episode__title">
            <a className="episode__title__link" href={`/episodes/${date}`}>
              {title}
            </a>
          </h1>

        </div>

        {/* CONTENT SECTION - Description of the current episode*/}
        <div className="content-sec content-sec--description">
          <p dangerouslySetInnerHTML={descriptionHTML} />
        </div>

        {/* CONTENT SECTION - Call-to-acton buttons regarding the current episode*/}
        <div className="content-sec content-sec--buttons">

          <a className="btn--episode" href={`/episodes/${date}`}>
            View Episode...
          </a>

          <a className="btn--episode" href={hangoutUrl}>
            Add to Calendar...
          </a>

        </div>

        {/* CONTENT SECTION - Grid display of the episode's guests*/}
        <div className="content-sec content-sec--guests">

          <PersonGroup people={sortedGuests} hangoutUrl={hangoutUrl} />

        </div>

      </div>

    </div>
  )
}
