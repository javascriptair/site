/* eslint max-len:0 */

export default {
  title: `JavaScript Debugging`,
  hangoutId: 'c36b25girvo89474lqo92loikic',
  guests: [
    {
      name: 'Alex Liu',
      twitter: 'stinkydofu',
      tips: [
        `Always think about Errors and error handling as part of the design and spec from day one`,
        `Understand the abstractions you use, especially when it comes to Errors`,
      ],
      picks: [
        `[VError](https://github.com/davepacheco/node-verror)`,
        `[bunyan](https://www.npmjs.com/package/bunyan)`,
        `[restify-errors](https://github.com/restify/errors)`,
        `Overheard - VS Code debugger is great`,
      ],
    },
    {
      name: 'Todd Gardner',
      twitter: 'toddhgardner',
      links: [
        `[TrackJS for debugging non-chrome platforms](https://trackjs.com/)`,
        `[Charles Web Debugging Proxy](https://www.charlesproxy.com/)`,
        `[Fiddler Proxy](http://www.telerik.com/fiddler)`,
      ],
      tips: [
      ],
      picks: [
        `[JavaScript Error Monitoring](https://trackjs.com/)`,
        `[JavaScript Forensics Talk](https://vimeo.com/133137606)`,
        `[Amazing Conference in Oslo](http://ndcoslo.com/)`,
        `[Afterparty conference](http://pubconf.io/)`,
        `Author: Ken Follett. Pillars of the Earth and a World Without End`,
        `[Conference Satire](http://notepadconf.com/)`,
      ],
    },
    {
      name: 'Yunong Xiao',
      twitter: 'yunongx',
      links: [
        `[mdb v8, Node post mortem debugger](https://github.com/joyent/mdb_v8)`,
        `[Debugging Node.js in Prod](https://www.youtube.com/watch?v=O1YP8QP9gLA)`,
        `[Flamegraphs](http://www.brendangregg.com/flamegraphs.html)`,
        `[Flamegraphs with Node](http://yunong.io/2015/11/23/generating-node-js-flame-graphs/)`,
        `[Restify, Observable Rest Framework](http://restify.com)`,
        `[Debugging Node](https://github.com/node-inspector/node-inspector)`,
      ],
      tips: [
        `[Use the Scientific Method](https://en.wikipedia.org/wiki/Scientific_method)`,
        `[Error Types and JSON Parse](https://github.com/groundwater/nodejs-symposiums/blob/master/2016-02-26-Errors/Round2/error-types-and-json-parse/README.md)`,
        `[Error Handling in Node.js](https://www.joyent.com/developers/node/design/errors)`,
        `[JSON Logging Lib](https://github.com/trentm/node-bunyan)`,
        `[Observable Async lib](https://github.com/davepacheco/node-vasync)`,
      ],
      picks: [
        `[Bojack Horseman](http://bojackhorseman.com/)`,
        `[ReactiveSocket](https://github.com/ReactiveSocket/reactivesocket-js)`,
        `[Wish You Were Here](https://en.wikipedia.org/wiki/Wish_You_Were_Here_(Pink_Floyd_album))`,
      ],
    },
  ],
  description: `
  JavaScript has a pretty interesting debugging story.
  The developer tools of your browser of choice and the
  various tools and IDEs for debugging Node or mobile
  development make for a really interesting topic.
  `,
  podbeanId: '',
  youTubeId: 'qlV-eNI5OsA',
  shortUrl: 'http://jsair.io/debugging',
  past: true,
  host: {
    links: [
      `[Async checkbox in Chrome DevTools](https://developer.chrome.com/devtools/docs/javascript-debugging#call-stack-panel)`,
      `[Managing Memore Garbage Collection in NodeJS](https://egghead.io/lessons/node-js-managing-memory-and-garbage-collection-in-node-js) - Egghead.io lesson`,
    ],
    tips: [
      `Teach to learn. Force yourself to teach.`,
    ],
    picks: [
      `[What’s new in Webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7)`,
      `[Debugging JavaScript](https://developer.chrome.com/devtools/docs/javascript-debugging) (Chrome DevTools)`,
    ],
  },
  panelists: [
    {
      twitter: 'drboolean',
      links: [
        `[Elm’s debugger](http://debug.elm-lang.org/)`,
        `[Free Monad graph](https://github.com/puffnfresh/free-graphs)`,
      ],
      tips: [
        `Algebraic data structures like Either, Task, and Maybe ensure we handle all errors. The errors are pushed to the caller where it’s easy to see.`,
        `In node, you can overwrite Obj.prototype.inspect to display a custom string when console.log-ing.`,
        `Learn to use debugger; in the browser.`,
      ],
      picks: [
        `[Bodil Stokke Generators](https://www.youtube.com/watch?v=SPgPhKLE1wg)`,
        `[Profunctor Lenses](https://github.com/ramda/ramda-lens/pull/2)`,
      ],
    },
    {
      twitter: 'getify',
      tips: [
        `Chrome CPU Throttling`,
        `OSS your code early. Don’t wait until “it’s good enough for others”, because then you’ve waited too long. OSS is about collaboration and improvement, not promotion of already-finished code.`,
        `Start with libraries and frameworks as you rapidly develop/evolve/explore a project. But as it matures, try to build time in for refactoring to reduce/remove those pieces. You don’t need them permanently. The best code is the code that’s exactly what’s needed, no more, no less.`,
      ],
      picks: [
        `[About the new ‘createImageBitmap(..)’ API](https://aerotwist.com/blog/the-hack-is-back/) and also ‘requestIdleCallback(..)’`,
        `[Chris & Getify Make A Game (part 1)](https://www.youtube.com/watch?v=Py4RDANTLfk) tutorial on simple <canvas> game making with me and [@chriscoyier](http://twitter.com/chriscoyier)`,
        `[Cloud Sweeper](http://github.com/getify/cloud-sweeper) my first <canvas> casual web game, OSS code released`,
      ],
    },
  ],
}


