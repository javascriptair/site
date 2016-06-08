export default {
  title: `webpack: JavaScript bundler`,
  guests: [
    {
      name: 'Johannes Ewald',
      twitter: 'jhnnns',
      links: [
        `[LearnYouAHaskell.com](http://learnyouahaskell.com/) – Good resource for learning functional concepts with Haskell.`,
        `[html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) – Almost always a good idea when you’re also bundling CSS with webpack.`,
        `[ProvidePlugin](http://webpack.github.io/docs/list-of-plugins.html#provideplugin) – Solves many problems introduced by legacy scripts and implicit globals`,
        `[Healthy Open Source](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951) – A walkthrough of the Node.js Foundation’s base contribution policy`,
      ],
      tips: [
        `Do not abstract/split your (webpack) configs. Copy&Paste can be a good thing.`,
        `Learning a completely different programming language (like Haskell) “upgrades” your programmer brain :)`,
      ],
      picks: [
        `[Z.sh](https://github.com/rupa/z) - jump around`,
        `Watch [Kent's](https://twitter.com/kentcdodds) [videos about webpack](http://kcd.im/egghead-webpack) (more coming soon), they are awesome! I did learn some cool stuff :)`,
      ],
    },
    {
      name: 'Juho Vepsäläinen',
      twitter: 'bebraw',
      links: [
        `[webpack-merge](https://www.npmjs.com/package/webpack-merge) - My merge tool to keep configuration simple (sharing common config!)`,
        `[webpack-validator](https://www.npmjs.org/package/webpack-validator) - Validation of webpack configuration against a schema + checks against good practices.`,
        `[SurviveJS Webpack book](http://survivejs.com/webpack/introduction/) - Free book on the topic.`,
      ],
      tips: [
        `There is always something new to learn (esp. In frontend).`,
        `Fundamentals > specifics.`,
      ],
      picks: [
        `[WebpackBin](http://www.webpackbin.com/)`,
        `[autojump](https://github.com/wting/autojump) - a faster way to navigate your filesystem`,
      ],
    },
    {
      name: 'Tobias Koppers',
      imgSrc: '/episodes/2016-06-08/sokra.png',
      link: 'https://github.com/sokra',
      links: [
        `[webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7)`,
        `[RollupJS](http://rollupjs.org/)`,
      ],
      tips: [
        `Explicit dependencies`,
        `Try Code Splitting`,
        `Try webpack 2`,
        `[Tips in these slides](https://github.com/sokra/slides)`,
        `[webpack & caching](https://gist.github.com/sokra/ff1b0290282bfa2c037bdb6dcca1a7aa)`,
        `[Everything about webpack](http://webpack.github.io/docs/configuration.html)`,
        `Don’t use boilerplates, but read them`,
        `[webpack examples](https://github.com/webpack/webpack/tree/master/examples)`,
        `Targeted Builds`,
        `[helper for building targeted build](https://www.npmjs.com/package/parallel-webpack)`,
      ],
      picks: [
        `[Analyse Tool](http://webpack.github.io/analyse/)`,
        `[Rust](https://www.rust-lang.org/)`,
      ],
    },
    {
      name: 'Sean T. Larkin',
      twitter: 'thelarkinn',
      links: [
        `[You Don’t Know JS](https://github.com/getify/You-Dont-Know-JS) An incredible resource by @getify for learning ES6 and Javascript. (Kyle Simpson)`,
        `[I was wrong about TypeScript and here’s why](https://www.triplet.fi/blog/i-was-wrong-about-typescript-here-is-why/) a great read on the immediate and incredible benefits of Typescript. `,
        `[Google Doc](https://docs.google.com/presentation/d/10mIapWjv1pyUQaMv6G8MCdoe9OK2Ey8zz-CLkHuFdRI/e) - Shameless self-promote, but really great intro to webpack.`,
        `[React Webpack Cookbook (now SurviveJS)](https://github.com/christianalfoni/react-webpack-cookbook)`,
      ],
      tips: [
        `When you are struggling on a problem, take two steps back and ask “What am I trying to accomplish. Is this the best avenue for the results.” `,
        `Read the source code!!! Source code is the one true documentation. If you are ever curious about how something works, or what additional features there are, pop in the source code and start reading. Webpack’s source code has lots of hidden and cool features.`,
      ],
      picks: [
        `[Midwest Dev Chat Slack](www.midwestdevchat.com)`,
        `[webpack-closure-compiler](https://github.com/roman01la/webpack-closure-compiler) awesome alternative to using UglifyJSPlugin. +1 For Typescript Users with \`Tscikle\`. `,
        `[Webpack starter](https://github.com/AngularClass/angular2-webpack-starter) for those users of Angular, this is a nice full featured repo/boilerplate. Once you understand webpack, this repository is a must clone. `,
      ],
    },
  ],
  description: `
    [webpack](http://webpack.github.io/) is an amazing bundler for frontend assets. For many people it has completely changed the game for their build pipeline, entirely replacing other build tools and task runners like grunt and gulp. Join us with the webpack creator and core contributors as we talk with the webpack team about this impressive piece of tech.
  `,
  hangoutId: 'c31tk63au5fg1l4m7gq1f9sm63g',
  youTubeId: 'admLV6V2eDg',
  podbeanId: 'i3prd-5fff14',
  shortUrl: 'http://jsair.io/webpack',
  host: {
    links: [
      `[babel-plugin-module-alias](https://github.com/tleunen/babel-plugin-module-alias)`,
      `[Generators, Boilerplates, and Starter Kits](https://www.briefs.fm/3-minutes-with-kent/25)`,
    ],
    tips: [
      `Follow [me](https://twitter.com/kentcdodds) and [egghead.io](https://twitter.com/eggheadio) to know when my webpack cookbook course comes out. And follow [Frontend Masters](https://twitter.com/frontendmasters) to know when to register for my webpack workshop!`,
      `[Migrating an App to ES6 with webpack](https://youtu.be/a96r7Tjf0Ps) workshop (video)`,
      `Try to find babel plugins to do stuff you need before you use webpack features because babel is more ubiquitous and interops with more tools.`,
    ],
    picks: [
      `[React30](https://react30.com/) - a new 30 minute podcast by [me](https://twitter.com/kentcdodds), [Ryan Florence](https://twitter.com/ryanflorence), and [Michael Jackson](https://twitter.com/mjackson)`,
      `[webpack-validator](https://github.com/js-dxtools/webpack-validator) - validator your webpack config to avoid headaches`,
    ],
  },
  panelists: [
    {
      twitter: 'pamasaur',
      links: [
      ],
      tips: [
        `As hard as it is to focus on the basics, sometimes they’re super necessary to getting to the fun stuff!`,
      ],
      picks: [
        `[Tree-shaking with webpack 2 and Babel 6](http://www.2ality.com/2015/12/webpack-tree-shaking.html)`,
      ],
    },
  ],
}
