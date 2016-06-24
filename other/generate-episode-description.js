/* eslint react/prop-types: 0 */
import ReactDOMServer from 'react-dom/server'

import {copy} from 'copy-paste'

import {getSponsorsForDate} from '../sponsors'

import * as utils from '<utils>/utils'
import episodeList from './utils/episode-list'
import inquirer from 'inquirer'

import LinksPicksTips from './components/links-picks-tips'
import ShowDescription from './components/show-description'
import People from './components/people'

inquirer.prompt([
  episodeList,
]).then(({episode}) => {
  const showSponsors = getSponsorsForDate(episode.date)

  const string = ReactDOMServer.renderToStaticMarkup(
    <EpisodeDescription
      episode={episode}
      sponsors={showSponsors}
    />
  )

  copy(string, err => {
    if (err) {
      throw err
    }
    console.log(`Podcast description for "${episode.title}" copied to your clipboard`)
  })
})


function EpisodeDescription({episode, sponsors}) {
  const {
    date,
    titleHTML,
    descriptionHTML,
    guests,
    host,
    panelists,
  } = episode
  const panelistsAndHost = utils.sortPeople([...panelists, host])
  const showAttendees = [...utils.sortPeople(guests), ...panelistsAndHost]
  const combinedSponsors = [sponsors.premierSponsor, ...sponsors.goldSponsors, ...sponsors.silverSponsors]
  return (
    <div>
      <div>
        <Title
          date={date}
          titleHTML={titleHTML}
          guests={guests}
        />
      </div>

      <div>
        <strong>Description:</strong>
        <div dangerouslySetInnerHTML={descriptionHTML} />
      </div>

      <div>
        <strong>Show sponsors:</strong>
        <ul>
          {
            combinedSponsors.map(({name, link, tagline}, i) => (
              <li key={i}>
                <a href={link}>{name}</a> - {tagline}
              </li>
            ))
          }
        </ul>
      </div>

      <div>
        <strong>Links, Picks, and Tips:</strong>
        {
          showAttendees.map((a, i) => <LinksPicksTips key={i} {...a} />)
        }
      </div>

      <div>
        <strong>About JavaScript Air:</strong>
        <div>
          <ShowDescription />
        </div>
      </div>

    </div>
  )
}

function Title({date, titleHTML, guests}) {
  return (
    <span>
      <a href={`http://javascriptair.com/episodes/${date}`} dangerouslySetInnerHTML={titleHTML} />
      {' with '}
      <People people={guests} />
    </span>
  )
}
