/* eslint max-len:0 */
import {panelists} from '../../resources/panelists'
import {cloneDeep} from 'lodash'
const guests = cloneDeep(panelists)


const guestLinksTipsAndPicks = [
  {
    twitter: 'dan_abramov',
    links: [
      `[React Hot Loader](http://gaearon.github.io/react-hot-loader/)`,
    ],
    picks: [
      `[devtool](https://github.com/Jam3/devtool)`,
      `[React.js pure render performance anti-pattern](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.a6h48jrtg)`,
      `[Fullstack React](https://twitter.com/fullstackreact)`,
      `[Code Cartoons - Relay](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-1-3ec1a127bca5)`,
      `[Redux 2 in the works](https://www.reddit.com/r/reactjs/comments/418spy/redux_2_in_the_works_with_dan_and_contra/)`,
    ],
  },
  {
    twitter: 'drboolean',
    links: [
      `[Hardy Jones on lenses + virtual dom](http://joneshf.github.io/programming/2015/12/19/Lenses-and-Virtual-DOM-Support-Open-Closed.html)`,
      `[Lamda Conf vids](https://www.youtube.com/watch?v=JxC1ExlLjgw&list=PLE7tQUdRKcybh21_zOg8_y4f2oMKDHpUS)`,
    ],
    picks: [
      `[Jeff Bridges: The sleeping tapes](http://www.dreamingwithjeff.com)`,
      `[Don Hertzfeldt: World of Tomorrow](https://vimeo.com/ondemand/worldoftomorrow)`,
    ],
  },
  {
    twitter: 'getify',
    links: [
      `[You Don’t Know JS book series](http://youdontknowjs.com)`,
      `[MakerSquare](http://makersquare.com)`,
      `[Frontend Masters](http://frontendmasters.com)`,
      `[ForwardJS Workshops](http://forwardjs.com/workshops)`,
      `[ForwardJS free webinar: “Blocking Across The Wire”](https://attendee.gotowebinar.com/register/7996879282595345666) Tue Jan 25, 12pm CST`,
      `[FluentConf Workshops](http://conferences.oreilly.com/fluent/javascript-html-us/public/schedule/detail/47782)`,
      `[asynquence](http://github.com/getify/asynquence)`,
      `[A Tale Of Three Lists](http://github.com/getify/a-tale-of-three-lists) The “TodoMVC” of async programming`,
    ],
    tips: [
      `Pair program with a friend on a couch.`,
    ],
    picks: [
      `[RTC Everywhere](https://github.com/contra/rtc-everywhere) P2P cross-platform`,
      `[ChakraCore in Node.js](https://blogs.windows.com/msedgedev/2016/01/19/nodejs-chakracore-mainline/)`,
      `[Brave Browser](https://brave.com/) by [@BrendanEich](http://twitter.com/brendaneich)`,
    ],
  },
  {
    twitter: 'kwuchu',
    links: [
      `[IBM Chef Watson](https://www.ibmchefwatson.com/)`,
    ],
    picks: [
      `[Ember-CLI 101](https://leanpub.com/ember-cli-101) - Really good book for getting started with learning Ember!`,
    ],
  },
  {
    twitter: 'linclark',
    links: [
      `[A cartoon guide to Facebook’s Relay, part 1](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-1-3ec1a127bca5#.ak19gbh26)`,
    ],
    tips: [
      `Learn keyboard commands for your favorite web apps like Gmail. Flash cards can be really helpful for this. [Brainscape](https://www.brainscape.com/) has a few different decks.`,
    ],
    picks: [
      `[Dvorak keyboard training](http://learn.dvorak.nl/)`,
    ],
  },
  {
    twitter: 'mzabriskie',
    links: [
      `[@zabriskiesbeard](https://twitter.com/zabriskiesbeard)`,
    ],
    tips: [
      `[First Timers Only](https://github.com/search?utf8=%E2%9C%93&q=language%3AJavaScript+state%3Aopen+label%3Afirst-timers-only)`,
    ],
    picks: [
      `[Learning React Native](http://shop.oreilly.com/product/0636920041511.do)`,
    ],
  },
  {
    twitter: 'pamasaur',
    links: [
      `[Choosing a JavaScript Framework](http://bleedingedgepress.com/our-books/choosing-javascript-framework/)`,
      `[When the computing](http://thewebivore.com/when-computing-hurts/)`,
    ],
    picks: [
      `[Pixel Art to CSS](http://pixelart-to-css-react.herokuapp.com/)`,
    ],
  },
  {
    twitter: 'tylermcginnis33',
    picks: [
      `[Headspace](http://headspace.com)`,
      `[Front End Newsletter](http://frontendnewsletter.com)`,
      `[React.run](http://www.react.run/)`,
    ],
  },
]

guestLinksTipsAndPicks.forEach(info => {
  const guestIndex = guests.findIndex(g => g.twitter === info.twitter)
  guests[guestIndex] = {...guests[guestIndex], ...info}
})

export default {
  title: `Introducing the JavaScript Air Panel`,
  guests,
  description: `
    We have some solid developers on the JavaScript Air panel working on some amazing things. This is your chance to get to know them!
  `,
  hangoutId: 'ciduop5sck7su6n8f99nnctigt0',
  youTubeId: 'gxI5m_raAWg',
  podbeanId: 'mu5vn-5bebfd',
  past: true,
  host: {
    links: [
      `[My Talks and Workshops](http://talks.kcd.im)`,
      `[My Egghead lessons](https://egghead.io/instructors/kentcdodds)`,
      `[My Blog](http://blog.kcd.im)`,
      `[My AMA](http://ama.kcd.im) and my answer to [what's your favorite/most-effective learning method?](https://github.com/kentcdodds/ama/issues/41)`,
      `[First Timers Only](https://medium.com/@kentcdodds/first-timers-only-78281ea47455) - My original blogpost about the concept`,
    ],
    tips: [
      `Take chances, make mistakes, and get messy! -Miss Frizzle, Magic School Bus`,
    ],
    picks: [
      `[Babel Service](https://github.com/bahmutov/babel-service) by [Gleb Bahmutov](https://twitter.com/bahmutov)`,
      `[The Magic School Bus](http://www.scholastic.com/magicschoolbus/) (warning! Video auto-plays)`,
    ],
  },
}


