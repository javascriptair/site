import ReactHTMLEmail, {renderEmail} from 'react-html-email'
import {copy} from 'copy-paste'
// import marked from 'marked'
// import deindent from 'deindent'

import {getSponsorsForDate} from '../sponsors'

import {episodes} from '../episodes'
import EpisodeEmail from './components/episode-email'
// import episodeList from './utils/episode-list'
// import inquirer from 'inquirer'

hijackConsole()

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

function hijackConsole() {
  const ignoreLogs = [
    'in outlook:',
    'unsupported in: outlook.',
    'unsupported in: outlook-web.',
    'mso-line-height-rule',
    'border-radius` supplied to `Box` unsupported in',
    'border-radius` supplied to `Image` unsupported in',
  ]
  hijack('warn')
  hijack('error')

  function hijack(logger) {
    const original = console[logger]
    console[logger] = function hijackedConsole(...args) {
      const line = args.join(' ')
      const shouldIgnore = ignoreLogs.some(l => line.includes(l))
      if (!shouldIgnore) {
        return original(...args)
      }
      return undefined
    }
  }
}
