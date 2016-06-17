import ReactHTMLEmail, {renderEmail} from 'react-html-email'
import {copy} from 'copy-paste'
// import marked from 'marked'
// import deindent from 'deindent'

import {getSponsorsForDate} from '../sponsors'

import {episodes} from '../episodes'
import EpisodeEmail from './components/episode-email'
// import episodeList from './utils/episode-list'
// import inquirer from 'inquirer'

ReactHTMLEmail.injectReactEmailAttributes()
renderAndCopy(episodes[26])
// inquirer.prompt([
//   episodeList,
// ]).then(({episode}) => {
//   renderAndCopy(episode)
// })

function renderAndCopy(episode) {
  const showSponsors = getSponsorsForDate(episode.date)
  const string = renderEmail(
    <EpisodeEmail
      episode={episode}
      sponsors={showSponsors}
    />
  )

  copy(string, err => {
    if (err) {
      throw err
    }
    console.log(`Podcast email for "${episode.title}" copied to your clipboard`)
  })
}
