export default {
  title: `Reactive Programming in JavaScript`,
  guests: [
    {
      name: 'André Staltz',
      twitter: 'andrestaltz',
      links: [
        `Someone mentioned [the Epic Monadic Promises thread](https://github.com/promises-aplus/promises-spec/issues/94)`,
      ],
      tips: [
      ],
      picks: [
        `[CycleConf](http://cycleconf.com) and follow the hashtag #cycleconf next week`,
        `[most](https://github.com/cujojs/most/)`,
      ],
    },
    {
      name: 'Ben Lesh',
      twitter: 'BenLesh',
      links: [
        `[Paul Taylor](https://github.com/trxcllnt) on github`,
      ],
      tips: [
        `[Check out the specs on RxJS](https://github.com/ReactiveX/rxjs/tree/master/src/operator)`,
        `[Check out the docs on how to write marble tests](https://github.com/ReactiveX/rxjs/blob/master/doc/writing-marble-tests.md)`,
      ],
      picks: [
        `Go to the restaurant that Dan Abramov is at. (Redux Foodtruck?)`,
      ],
    },
    {
      name: 'Matthew Podwysocki',
      twitter: 'mattpodwysocki',
      links: [
        `[Gleb Bahmutov](https://glebbahmutov.com/)`,
        `[rxvision](https://github.com/jaredly/rxvision)`,
      ],
      tips: [
      ],
      picks: [
        `React Native on Windows Phone`,
        `Node on mobile for P2P interaction`,
        `[Interactive Extensions for JavaScript](https://github.com/Reactive-Extensions/IxJS)`,
      ],
    },
  ],
  description: `
    Object oriented programming, functional programming, reactive programming, reactive functional programming. There are so many different ways to think about the system you're building and different design patterns to follow. Join us as we talk about reactive programming in JavaScript.
  `,
  hangoutId: 'cbu3fh4too4a6iot5psgo9cl4d4',
  youTubeId: 'RFvwLifhxDg',
  podbeanId: 'yn6zw-5e65e8',
  shortUrl: 'http://jsair.io/reactive',
  past: true,
  host: {
    tips: [
      `If you’re feeling overwhelmed, make a Todo list and focus on one task at a time.`,
    ],
    picks: [
      `[aphrodite](https://github.com/Khan/aphrodite) - It's inline styles, but they work!`,
      `[autocomplete-emojis](https://atom.io/packages/autocomplete-emojis) Atom package`,
      `[Stuff](https://github.com/kentcdodds/ama/issues/107) that I use for recording egghead.io lessons`,
      `Adam. He’s great <3`,
    ],
  },
  panelists: [
    {
      twitter: 'dan_abramov',
      picks: [
        `[MobX](https://github.com/mobxjs/mobx)`,
        `[Optimizing Redux TodoMVC with an optimal state structure](https://github.com/mweststrate/redux-todomvc/pulls?q=is%3Apr+is%3Aclosed)`,
      ],
    },
    {
      twitter: 'drboolean',
      links: [
        `[https://egghead.io/lessons/rxjs-reactive-programming-what-is-rxjs](egghead rxjs series)`,
        `[http://highlandjs.org/](highland.js lazy streams)`,
        `[https://github.com/cujojs/most](most.js reactive stream lib)`,
      ],
      tips: [
        `Favor laziness since laziness can lead to better performance & extendability`,
        `Try to compose single expressions which data flows through and, if you struggle, don’t “cheat”, but rather look for stream method alternatives - they are there. It will simplify the whole codebase.`,
        `Normalization helps composability. I tend to wrap all my utilities in the same type of stream so that my application code works like legos. Wrapping is a pain, but those utilities tend not to change so it’s a one time thing.`,
      ],
      picks: [
        `[lambdaconf tweetstorm](https://twitter.com/jo_liss/status/719487771967152132)`,
        `[People vs OJ](http://www.fxnetworks.com/shows/the-people-v-oj-simpson-american-crime-story/episodes)`,
      ],
    },
    {
      twitter: 'getify',
      links: [
        `[RxMarbles.com](http://rxmarbles.com/)`,
        `[asynquence](http://github.com/getify/asynquence), specifically [asynquence reactive sequences](https://github.com/getify/asynquence/tree/master/contrib#react-plugin)`,
      ],
      picks: [
        `[A Tale Of Three Lists](https://github.com/getify/a-tale-of-three-lists)`,
      ],
    },
    {
      twitter: 'pamasaur',
      links: [
        `[RxMarbles](http://rxmarbles.com/)`,
      ],
      picks: [
        `[FantasyLand](https://github.com/fantasyland/fantasy-land)`,
      ],
    },
  ],
}
