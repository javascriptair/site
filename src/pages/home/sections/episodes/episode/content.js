import {PropTypes} from 'react'
import PersonGroup from '<components>/person-group'
import {sortPeople} from '<utils>/utils'

export default Content

function Content({episode}) {
  const {
    page,
    titleHTML,
    guests = [],
    descriptionHTML,
    hangoutUrl,
  } = episode

  return (
    <div className="episode__part episode__part--content">
      <Title page={page} titleHTML={titleHTML} />
      <Description descriptionHTML={descriptionHTML} />
      <Buttons page={page} hangoutUrl={hangoutUrl} />
      <Guests guests={guests} />
    </div>
  )
}

Content.propTypes = {
  episode: PropTypes.object.isRequired,
}

function Title({page, titleHTML}) {
  return (
    <div className="content__section content__section--title">
      <h1 className="content__section--title__header">
        <a
          className="content__section--title__header__link"
          href={page}
          dangerouslySetInnerHTML={titleHTML}
        />
      </h1>
    </div>
  )
}

Title.propTypes = {
  page: PropTypes.string.isRequired,
  titleHTML: PropTypes.object.isRequired,
}

function Description({descriptionHTML}) {
  return (
    <div className="content__section content__section--description">
      <p dangerouslySetInnerHTML={descriptionHTML} />
    </div>
  )
}

Description.propTypes = {
  descriptionHTML: PropTypes.object.isRequired,
}

function Buttons({page, hangoutUrl}) {
  return (
    <div className="content__section content__section--buttons">
      <a className="content__section__button" href={page}>
        View Episode...
      </a>
      <a className="content__section__button" href={hangoutUrl}>
        Add to Calendar...
      </a>
    </div>
  )
}

Buttons.propTypes = {
  page: PropTypes.string.isRequired,
  hangoutUrl: PropTypes.string.isRequired,
}

function Guests({guests}) {
  const sortedGuests = sortPeople(guests)
  return (
    <div className="content__section content__section--guests">
      <PersonGroup people={sortedGuests} />
    </div>
  )
}

Guests.propTypes = {
  guests: PropTypes.array.isRequired,
}
