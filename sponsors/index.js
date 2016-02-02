import moment from 'moment'
import {isPast} from '../shared/utils'

const sponsors = {
  premierSponsors: [
    {
      imgSrc: '/sponsors/eggheadio.png',
      name: 'Egghead.io',
      link: 'http://jsair.io/eggheadio',
      tagline: 'Bite-sized web development video training',
      startDate: '2015-12-08',
    },
  ],
  goldSponsors: [
    {
      imgSrc: '/sponsors/frontendmasters.png',
      name: 'Frontend Masters',
      link: 'http://jsair.io/frontendmasters',
      tagline: 'Expert front-end training',
      startDate: '2015-12-08',
    },
    {
      imgSrc: '/sponsors/trackjs.png',
      name: '{Track:js}',
      link: 'http://jsair.io/trackjs',
      tagline: 'JavaScript Error Monitoring',
      startDate: '2015-12-08',
    },
    {
      imgSrc: '/sponsors/wallabyjs.png',
      name: 'Wallaby.js',
      link: 'http://jsair.io/wallabyjs',
      tagline: 'Realtime code coverage',
      startDate: '2016-01-15',
    },
    {
      imgSrc: '/sponsors/codecov.png',
      name: 'Codecov.io',
      link: 'http://jsair.io/codecov',
      tagline: 'Code coverage done right',
      startDate: '2016-01-15',
    },
  ],
  silverSponsors: [
    {
      imgSrc: '/sponsors/fluent.png',
      name: 'Fluent',
      link: 'http://jsair.io/fluent',
      tagline: 'Web development training',
      startDate: '2016-02-02',
    },
  ],
}

function getSponsorsForDate(date) {
  const momentDate = moment(date)
  const sponsorsForDate = Object.keys(sponsors).reduce((current, key) => {
    const sponsorGroup = sponsors[key]
    const dateGroup = sponsorGroup.filter(sponsor => {
      const {startDate, endDate} = sponsor
      const sponsorshipHasBegun = isPast(startDate, momentDate)
      const sponsorshipHasEnded = endDate && isPast(endDate, momentDate)
      return sponsorshipHasBegun && !sponsorshipHasEnded
    })
    if (key === 'premierSponsors') {
      current.premierSponsor = dateGroup[0]
    } else {
      current[key] = dateGroup
    }
    return current
  }, {})
  return sponsorsForDate
}

const currentSponsors = getSponsorsForDate(new Date())

export default sponsors

export {currentSponsors, getSponsorsForDate}
