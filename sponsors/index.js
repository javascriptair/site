import moment from 'moment'
import {sortBy} from 'lodash'
import {isPast, isToday} from '<utils>/utils'

const sponsors = {
  premierSponsors: [
    {
      imgSrc: '/sponsors/eggheadio.png',
      name: 'Egghead.io',
      link: 'http://jsair.io/eggheadio',
      tagline: 'Bite-sized web development video training',
      startDate: '2015-12-08',
      endDate: '2016-09-08',
    },
  ],
  goldSponsors: [
    {
      imgSrc: '/sponsors/frontendmasters.png',
      name: 'Frontend Masters',
      link: 'http://jsair.io/frontendmasters',
      tagline: 'Expert front-end training',
      startDate: '2015-12-08',
      endDate: '2016-09-08',
    },
    {
      imgSrc: '/sponsors/trackjs.png',
      name: 'TrackJS',
      link: 'http://jsair.io/trackjs',
      tagline: 'JavaScript Error Monitoring',
      startDate: '2015-12-08',
      endDate: '2016-09-08',
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
      endDate: '2016-07-12',
    },
    {
      imgSrc: '/sponsors/webstorm.png',
      name: 'WebStorm',
      link: 'http://jsair.io/webstorm',
      tagline: 'Smart JavaScript IDE',
      startDate: '2016-04-20',
      endDate: '2016-07-20',
    },
    {
      imgSrc: '/sponsors/trading-tech.png',
      name: 'Trading Technologies',
      link: 'http://jsair.io/trading-technologies',
      tagline: `Building For What's Next`,
      startDate: '2016-07-13',
      endDate: '2016-10-13',
    },
  ],
  silverSponsors: [
    {
      imgSrc: '/sponsors/fluent.png',
      name: 'Fluent',
      link: 'http://jsair.io/fluent',
      tagline: 'Web development training',
      startDate: '2016-02-02',
      endDate: '2016-05-02',
    },
    {
      imgSrc: '/sponsors/auth0.png',
      name: 'Auth0',
      link: 'http://jsair.io/auth0',
      tagline: 'Authentication Made Simple',
      startDate: '2016-02-17',
      endDate: '2016-05-17',
    },
    {
      imgSrc: '/sponsors/trading-tech.png',
      name: 'Trading Technologies',
      link: 'http://jsair.io/trading-technologies',
      tagline: `Building For What's Next`,
      startDate: '2016-03-22',
      endDate: '2016-07-12',
    },
    {
      imgSrc: '/sponsors/sparkpost.png',
      name: 'SparkPost',
      link: 'http://jsair.io/sparkpost',
      tagline: `Email. We've Got It Down.`,
      startDate: '2016-04-05',
      endDate: '2016-04-19',
    },
    {
      imgSrc: '/sponsors/reactjs-program.png',
      name: 'React.js Program',
      link: 'http://jsair.io/reactjs-program',
      tagline: `Master the React.js Ecosystem`,
      startDate: '2016-06-27',
      endDate: '2016-09-27',
    },
    {
      imgSrc: '/sponsors/sentry.png',
      name: 'Sentry',
      link: 'http://jsair.io/sentry',
      tagline: `Cross-platform crash-reporting`,
      startDate: '2016-06-24',
      endDate: '2016-09-24',
    },
  ],
  appreciationSponsors: [
    {
      twitter: '_jwngr',
      name: 'Jacob Wenger',
      startDate: '2016-03-11',
      endDate: '2016-06-11',
    },
    {
      twitter: 'nyrosmith',
      name: 'Martin Schmid',
      startDate: '2016-03-11',
      endDate: '2016-06-11',
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
    const sponsorshipHasBegun = isPast(startDate, momentDate) || isToday(startDate)
    const sponsorshipHasEnded = endDate && isPast(endDate, momentDate)
    return sponsorshipHasBegun && !sponsorshipHasEnded
  }
}

const currentSponsors = getSponsorsForDate(new Date())

export default sponsors

export {currentSponsors, getSponsorsForDate}
