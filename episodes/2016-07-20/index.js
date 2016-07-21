export default {
  title: `Publishing JavaScript Packages`,
  guests: [
    {
      name: 'John-David Dalton',
      twitter: 'jdalton',
      links: [
        `[Lerna](https://www.npmjs.com/package/lerna)`,
        `[babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash)`,
        `[lodash-webpack-plugin](https://github.com/lodash/lodash-webpack-plugin)`,
        `[ES6 Module Interoperability](https://github.com/nodejs/node-eps/blob/master/002-es6-modules.md#51-determining-if-source-is-an-es-module)`,
        `[Shrinkpack](https://github.com/JamieMason/shrinkpack)`,
      ],
      tips: [
        `Reduce barriers for contributions`,
        `If a repo is lagging in activity jump in as a contributor`,
      ],
      picks: [
        `[eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import/tree/v2)`,
      ],
    },
    {
      name: 'Stephan Bönnemann',
      twitter: 'boennemann',
      links: [
        `[Semantic Release](https://github.com/semantic-release/semantic-release)`,
        `[npm prune](https://docs.npmjs.com/cli/prune)`,
        `[npm pack](https://docs.npmjs.com/cli/pack)`,
        `[package.json files](https://docs.npmjs.com/files/package.json#files)`,
      ],
      tips: [
        `Always bring your skateboard to the airport`,
      ],
      picks: [
        `[npm CouchDB changes feed](https://skimdb.npmjs.com/)`,
        `shrinkwrap on publish`,
      ],
    },
    {
      name: 'James Kyle',
      twitter: 'thejameskyle',
      links: [
      ],
      tips: [
        `Go home, stop working, take a vacation, don't work on the weekends.`,
      ],
      picks: [
        `[FlowType.org](https://flowtype.org/)`,
      ],
    },
    {
      name: 'Henry Zhu',
      twitter: 'left_pad',
      links: [
        `[Thoughts on setting up a monorepo for cycle.js](http://staltz.com/setting-up-a-javascript-monorepo.html)`,
        `[Why is Babel a monorepo?](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)`,
        `[Prosemirror monorepo disucssion](https://discuss.prosemirror.net/t/rfc-splitting-the-library-into-packages/330)`,
        `[package.json files property](https://docs.npmjs.com/files/package.json#files), [.npmignore](https://docs.npmjs.com/misc/developers#keeping-files-out-of-your-package)`,
      ],
      tips: [
        `Questions can become PRs for a project - if something seems weird/could be improved, it was probably overlooked. ([for example](https://twitter.com/dan_abramov/status/755104686471049218))`,
      ],
      picks: [
        `[Lebab: the opposite of babel](https://github.com/mohebifar/lebab)`,
        `[View # of Issues/PRs for a contributors](https://github.com/hzoo/contributors-on-github)`,
      ],
    },
  ],
  description: `
    Doing open source involves a lot more than just coding up the tool/library. We're going to talk about the challenge of activly publishing an open source package on npm and some of the tools that have been developed to automate this process. Our guests have each developed some amazing tools, so you're in for a really interesting show!
  `,
  hangoutId: 'ch2o1c4siukllgb5kuiip7gd514',
  youTubeId: 'aK0-SrdHriw',
  podbeanId: '4anuw-6123a2',
  shortUrl: 'http://jsair.io/publishing',
  host: {
    links: [
      `[np](https://www.npmjs.com/package/np)`,
      `[nyc](https://github.com/istanbuljs/nyc)`,
      `[How to use bundledDependencies](https://youtu.be/qOGRUfdSiaM)`,
      `[generator-kcd-oss](https://github.com/kentcdodds/generator-kcd-oss)`,
    ],
    tips: [
      `[Automate things](http://kcd.im/automation)`,
    ],
    picks: [
      `[ngrok](https://ngrok.com/) Secure tunnels to localhost`,
      `[How to Write a JavaScript Library](https://kcd.im/write-oss) Free Egghead.io course`,
    ],
  },
  panelists: [
    {
      twitter: 'pamasaur',
      tips: [
        `If you figure out why istanbul/nyc is called nyc, let me know`,
      ],
      picks: [
        `[LambCI](https://github.com/lambci/lambci)`,
      ],
    },
  ],
}
