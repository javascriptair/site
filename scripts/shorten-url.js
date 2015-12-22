import axios from 'axios'
import inquirer from 'inquirer'
import inquirerDirectory from 'inquirer-directory'
import qs from 'qs'
import {copy} from 'copy-paste'


inquirer.registerPrompt('directory', inquirerDirectory);

 getCustomAlias()
  .then(getApiKey)
  .then(shortenUrl)
  .then(logFinished)
  .catch(logFailure)

function getCustomAlias(data = {}) {
  return getEpisodeInfo().then(({title, date}) => {
    return new Promise(resolve => {
      inquirer.prompt([
        {
          name: 'alias',
          type: 'input',
          message: 'What alias do you want?',
          default: getNameSuggestionFromEpisodeTitle(title),
        },
      ], ({alias}) => {
        resolve({...data, alias, date})
      })
    })
  })

  function getNameSuggestionFromEpisodeTitle(title) {
    return title
      .toLowerCase()
      .replace(/\W/g, ' ')
      .split(' ')
      .reduce((t, w) => {
        if (!t) {
          return w
        } else if (t.length > 6) {
          return t
        } else {
          return `${t}-${w}`
        }
      }, '')
      .trim()
  }

  function getEpisodeInfo() {
    return new Promise(resolve => {
      inquirer.prompt([
        {
          name: 'date',
          type: 'directory',
          message: 'Which episode are you short-linking?',
          basePath: './episodes',
        },
      ], ({date}) => {
        const {title} = require(`../episodes/${date}`).default
        resolve({title, date})
      })
    })
  }
}

function getApiKey(data = {}) {
  return new Promise(resolve => {
    let key
    try {
      key = require('./hive.api.ignored.json').key
    } catch (e) {
      key = null
    }
    inquirer.prompt([
      {
        name: 'key',
        type: 'input',
        message: `What's your API key for hive.am?`,
        default: key,
      },
    ], ({key: apiKey}) => {
      resolve({...data, apiKey})
    })
  })
}

function shortenUrl({alias: custom, apiKey: api, date}) {
  const url = `http://javascriptair.com/episodes/${date}`
  const query = qs.stringify({custom, url, api})
  return axios.get(`https://hive.am/api?${query}`)
}

function logFinished(response) {
  const {data: {error, short}} = response
  const NO_ERROR = 0
  if (error !== NO_ERROR) {
    logFailure(response)
  }
  copy(short, () => {
    console.log(`short url created. ${short} copied to your clipboard`)
  })
}

function logFailure(rejection) {
  console.error('There was a failure :-(')
  console.error(rejection)
}
