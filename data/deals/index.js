import {sortBy} from 'lodash'

export default sortBy([
  {
    imgSrc: '/data/deals/forwardJS.png',
    organization: 'ForwardJS',
    tagline: 'Web Technology Summit',
    link: 'http://jsair.io/forward4-discount',
    deal: 'Use code **jsair** for $40 off your ticket!',
    expires: '2016-02-10',
    description: `
      Forward 4 is a professional web technology conference
      on February 10th, 2016 with workshops before and after
      the conference in downtown San Francisco.
    `,
  },
  {
    imgSrc: '/data/deals/fluent.png',
    organization: 'Fluent',
    tagline: 'Web Platform Training',
    link: 'http://jsair.io/fluent-discount',
    deal: 'Use code **JSAIR** for 20% off any pass',
    expires: '2016-03-10',
    description: `
      Flunet is a professional web platform training conference
      on March 7th-10th, 2016 with 2-day trainings, tutorials,
      keynotes, and sessions. For practical training in JavaScript,
      HTML5, CSS, and the latest web development technologies and
      frameworks, check out Fluent Conf.
    `,
  },
  {
    imgSrc: '/data/deals/thoughtram.png',
    organization: 'thoughtram',
    tagline: 'Angular 2 Master Class',
    link: 'http://jsair.io/cOG3C',
    deal: 'Use code **JSAIR** for 50,00 € off your ticket!',
    expires: '2016-03-09',
    description: `
      thoughtram helps people to get a deep understanding of
      different technologies through trainings and code reviews.
      Our next public training is the Angular 2 Master Class
      in Düsseldorf, Germany. Join us and learn Angular 2 the right way!
    `,
  },
  {
    imgSrc: '/data/deals/dotjs.png',
    organization: 'dotJS',
    tagline: 'The largest JavaScript conference in Europe',
    link: 'http://jsair.io/dotjs-discount',
    deal: 'Use code JSAIR for 20% off your ticket',
    expires: '2016-12-05',
    description: `
      dotJS is the largest JavaScript conference in Europe. Its 5th edition
      will happen on December 5th in Paris at the Théâtre Mogador. A lot of
      amazing speakers will be announced soon. Meanwhile you can check the
      dotJS 2015 talks [here](http://www.thedotpost.com/conference/dotjs-2015).
    `
  },
], i => i.organization.toLowerCase())
