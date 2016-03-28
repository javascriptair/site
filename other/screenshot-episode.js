import path from 'path'
import inquirer from 'inquirer'
import inquirerDirectory from 'inquirer-directory'
import Pageres from 'pageres'
import {find} from 'lodash'
import {future as episodes} from '../episodes'

inquirer.registerPrompt('directory', inquirerDirectory)
inquirer.prompt([
  {
    name: 'url',
    type: 'input',
    message: `What's the base URL to screenshot?`,
    default: 'http://javascriptair.com',
  },
  {
    name: 'episodeTitle',
    type: 'list',
    choices: episodes.map(e => e.title),
    message: 'Which episode?',
    default: 0,
  },
], ({url, episodeTitle}) => {
  const episode = find(episodes, {title: episodeTitle})
  const dest = path.resolve(getUserHome(), 'Desktop')

  const urlToScreenshot = `${url}/?feature-show=${episode.date}`
  console.log(`Taking a screenshot of ${urlToScreenshot}`)
  new Pageres({delay: 2})
    .src(urlToScreenshot, ['1200x600'], {crop: true})
    .dest(dest)
    .run()
    .then(() => {
      console.log(`Screenshot saved: \n${dest}`)
    })
    .catch(err => {
      console.error(`Problems saving screenshot: \n${err}`)
    })
})

function getUserHome() {
  return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
}

