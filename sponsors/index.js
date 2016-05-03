import moment from 'moment'
import {sortBy} from 'lodash'
import {isPast} from '<utils>/utils'

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
      endDate: '2016-04-18',
    },
    {
      imgSrc: '/sponsors/codecov.png',
      name: 'Codecov.io',
      link: 'http://jsair.io/codecov',
      tagline: 'Code coverage done right',
      startDate: '2016-01-15',
      endDate: '2016-04-19',
    },
    {
      imgSrc: '/sponsors/sparkpost.png',
      name: 'SparkPost',
      link: 'http://jsair.io/sparkpost',
      tagline: `Email. We've Got It Down.`,
      startDate: '2016-04-19',
    },
    {
      imgSrc: '/sponsors/webstorm.png',
      name: 'WebStorm',
      link: 'http://jsair.io/webstorm',
      tagline: 'Smart JavaScript IDE',
      startDate: '2016-04-20',
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
    {
      imgSrc: '/sponsors/auth0.png',
      name: 'Auth0',
      link: 'http://jsair.io/auth0',
      tagline: 'Authentication Made Simple',
      startDate: '2016-02-17',
    },
    {
      imgSrc: '/sponsors/trading-tech.png',
      name: 'Trading Technologies',
      link: 'http://jsair.io/trading-technologies',
      tagline: `Building For What's Next`,
      startDate: '2016-03-22',
    },
    {
      imgSrc: '/sponsors/sparkpost.png',
      name: 'SparkPost',
      link: 'http://jsair.io/sparkpost',
      tagline: `Email. We've Got It Down.`,
      startDate: '2016-04-05',
      endDate: '2016-04-19',
    },
  ],
  appreciationSponsors: [
    {
      twitter: '_jwngr',
      name: 'Jacob Wenger',
      startDate: '2016-03-11',
    },
    {
      twitter: 'nyrosmith',
      name: 'Martin Schmid',
      startDate: '2016-03-11',
    },
  ].map(s => {
    return {
      imgSrc: `/sponsors/appreciation/${s.twitter}.png`,
      link: `https://twitter.com/${s.twitter}`,
      squareImage: false,
      ...s,
    }
  }),
}

function getSponsorsForDate(date) {
  const filterSponsor = getSponsorFilter(date)
  const sponsorsForDate = Object.keys(sponsors).reduce((current, key) => {
    const sponsorGroup = sponsors[key]
    const filteredSponsors = sponsorGroup.filter(filterSponsor)
    const sortedSponsors = sortBy(filteredSponsors, 'date')
    if (key === 'premierSponsors') {
      current.premierSponsor = sortedSponsors[0]
    } else {
      current[key] = sortedSponsors
    }
    return current
  }, {})
  return sponsorsForDate
}

function getSponsorFilter(date) {
  const momentDate = moment(date)
  return function filter(sponsor) {
    const {startDate, endDate} = sponsor
    const sponsorshipHasBegun = isPast(startDate, momentDate)
    const sponsorshipHasEnded = endDate && isPast(endDate, momentDate)
    return sponsorshipHasBegun && !sponsorshipHasEnded
  }
}

const currentSponsors = getSponsorsForDate(new Date())

export default sponsors

export {currentSponsors, getSponsorsForDate}
