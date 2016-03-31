import path from 'path'
import inquirer from 'inquirer'
import inquirerDirectory from 'inquirer-directory'
import Pageres from 'pageres'
import userHome from 'user-home'
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
    name: 'episode',
    type: 'list',
    choices: episodes.map(e => ({name: e.title, value: e})),
    message: 'Which episode?',
    default: 0,
  },
], ({url, episode}) => {
  const dest = path.resolve(userHome, 'Desktop')

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

