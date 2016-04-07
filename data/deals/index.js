import {sortBy} from 'lodash'
import {isFuture} from '../../shared/utils'

const deals = [
  {
    imgSrc: '/data/deals/dotjs.png',
    organization: 'dotJS',
    tagline: 'The largest JavaScript conference in Europe',
    link: 'http://jsair.io/dotjs-discount',
    deal: 'Use code JSAIR for 20% off your ticket',
    expires: '2016-12-05',
    description: `
      [dotJS](http://dotjs.io) is the largest JavaScript conference in Europe.
      Its 5th edition will happen on December 5th in Paris at the Théâtre Mogador.
      A lot of amazing speakers will be announced soon. Meanwhile you can check the
      dotJS 2015 talks [here](http://www.thedotpost.com/conference/dotjs-2015).
    `,
  },
  {
    imgSrc: '/data/deals/digitalocean.png',
    organization: 'Digital Ocean',
    tagline: 'Simple Cloud Infrastructure for Developers',
    link: 'http://jsair.io/digitalocean',
    deal: '**JSAIR10** - good for $10 credit on a new DigitalOcean account.',
    expires: '',
    description: `
      DigitalOcean is the best place to get your application off the ground quickly,
      and the easiest to scale when you find success.
      Start with the pre-configured NodeJS one-click to get up and running in 55 seconds,
      or build the exact infrastructure you need, with root access to servers running 100%
      SSD's in state-of-the-art datacenters around the world.
    `,
  },
  {
    imgSrc: '/data/deals/dinosaurjs.png',
    organization: 'Dinosaur.js',
    tagline: 'JavaScript Conference in Denver, Colorado on June 24, 2016',
    link: 'http://jsair.io/dinosaurjs',
    deal: 'You can use code "jsonair" for 10% off tickets 10 tickets',
    expires: '2016-04-30',
    description: `
      A non-profit, community-driven JavaScript conference happening in Denver, Colorado on Friday, June 24, 2016.
      One day. One track.
    `,
  },
  {
    imgSrc: '/data/deals/turing.png',
    organization: 'Turing School of Software and Design',
    tagline: 'Seven month developer training program in Denver, Colorado',
    link: 'http://jsair.io/turing',
    deal: 'Refer a student with the code FEE2016. You get $500 cash & the student gets $500 off their tuition.',
    expires: '2016-12-31',
    description: `
      We turn great people into outstanding developers. Turing believes in community-driven education. Our community is
      built on three core values which guide our work: love, respect, and curiosity.
      We believe in community-driven education. We're not a co-working space, and we're not a handful of folks in a
      conference room. Turing is a growing, thriving community of over a hundred people helping each other become more
      than what they thought to be possible.
    `,
  },
]

const sortedDeals = sortBy(deals, d => d.organization.toLowerCase())
const filteredDeals = sortedDeals.filter(d => d.expires ? isFuture(d.expires) : true)

export default filteredDeals
