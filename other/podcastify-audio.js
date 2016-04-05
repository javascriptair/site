import podcastifyAudio from './utils/audio'
import inquirer from 'inquirer'

inquirer.prompt([
  {
    name: 'file',
    type: 'input',
    message: 'Where is the input file?',
  },
  {
    name: 'title',
    type: 'input',
    message: 'Title?',
  },
  {
    name: 'number',
    type: 'input',
    message: 'Track number?',
  },
  {
    name: 'year',
    type: 'input',
    message: 'Year?',
    default: new Date().getFullYear(),
  },
  {
    name: 'url',
    type: 'input',
    message: 'URL?',
  },
  {
    name: 'artist',
    type: 'input',
    message: 'Artist?',
  },
], ({file, title, number, year, url, artist}) => {
  podcastifyAudio({
    file,
    episode: {title, number, year, url, artist},
  })
})
