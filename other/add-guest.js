import path from 'path'
import inquirer from 'inquirer'
import {episodes} from '../episodes'
import downloadTwitterPhoto from './utils/download-twitter-photo'

inquirer.prompt([
  {
    name: 'twitter',
    type: 'input',
    message: 'Twitter handle?',
  },
  {
    name: 'episodeDate',
    type: 'list',
    choices: episodes.map(e => ({name: e.title, value: e.date})),
    message: 'Which episode?',
    default: episodes.length - 1,
  },
]).then(({twitter, episodeDate}) => {
  const episodePath = path.join(process.cwd(), 'episodes', episodeDate)
  downloadTwitterPhoto(twitter, episodePath)
})
