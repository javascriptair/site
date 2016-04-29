import path from 'path'
import inquirer from 'inquirer'
import downloadTwitterPhoto from './utils/download-twitter-photo'

inquirer.prompt([
  {
    name: 'twitter',
    type: 'input',
    message: 'Twitter handle?',
  },
]).then(({twitter}) => {
  const destinationPath = path.join(process.cwd(), 'data/contributors')
  downloadTwitterPhoto(twitter, destinationPath)
})
