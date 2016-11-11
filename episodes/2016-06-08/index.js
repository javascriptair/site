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
        `[Midwest Dev Chat Slack](http://www.midwestdevchat.com)`,
        `[webpack-closure-compiler](https://github.com/roman01la/webpack-closure-compiler) awesome alternative to using UglifyJSPlugin. +1 For Typescript Users with \`Tscikle\`. `,
        `[Webpack starter](https://github.com/AngularClass/angular2-webpack-starter) for those users of Angular, this is a nice full featured repo/boilerplate. Once you understand webpack, this repository is a must clone. `,
      ],
    },
  ],
  description: `
    [webpack](http://webpack.github.io/) is an amazing bundler for frontend assets. For many people it has completely changed the game for their build pipeline, entirely replacing other build tools and task runners like grunt and gulp. Join us with the webpack creator and core contributors as we talk with the webpack team about this impressive piece of tech.
  `,
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
  transcript: `
    KENT: And we're live with JavaScript Air! Hello, everyone! I'm so excited for today's show because we're talking about one of my very favorite technologies called webpack. I love webpack so much and I'm so excited to have some really top of the line subject matter experts with us today. So before I introduce all of our guests and our panel, I'm just gonna go ahead and give a shout out to the sponsors that make this show possible.

    So we'll start out with Egghead.io. They're our premier sponsor and they have a huge library of bite-sized web development training videos. Check them out for content on JavaScript, Angular, React, Node and webpack. And guess what, I have a webpack cookbook coming up soon, and I'm super excited about it. It's all webpack 2. So stay tuned to check that out later.

    And then Front End Masters is a recorded expert-lead workshop with courses on Advanced JavaScript, Asynchronous and Functional JavaScript, as well as lots of other great courses on front end topics, including webpack in August. I'm gonna be out there doing a workshop, so check that out also.

    And then TrackJS reports bugs in your JavaScript before your customers notice them. And with their telemetry timeline, you'll have the context to actually fix them. Check them out and start tracking JavaScript errors today at trackjs.com.

    And SparkPost is email delivery built for developers. Build something awesome with their NodeJS library or SMTP relay. Start sending 100,000 emails free with SparkPost at sparkpost.com/jsair.

    And WebStorm. WebStorm is a powerful JavaScript IDE. It makes developers more productive with its super intelligent code assistance for JavaScript, Node, Angular and React, and integration with lots of different tools. Learn more at jetbrains.com/webstorm.

    Sweet. As a reminder to our people watching live, you can ask questions of our panel and our guests on Twitter with the hashtag #jsAirQuestion, and we will answer those questions during or at the end of the show. And general announcements, this is a weekly show but we don't have next week's show nailed down, and so I'm like 99% positive it will not be cancelled. I'll definitely be here, so don't worry about that. It will be awesome, I promise. And then, as always, follow us on Twitter, Facebook, and Google+ to keep up with the latest. And yeah, that's it for our announcements.

    So let's go ahead and get started. For our panel today, we have Pam Selle.

    PAM: Hi!

    KENT: And I am your host, Kent C. Dodds. And for our guests, super, super excited. I'm gonna probably ruin lots of these names, but we're gonna give it a shot. So Juho Vuspa- oh man, Vepsalainen? (laughs)

    JUHO: Well, close enough.

    PAM: Aw.

    KENT: (Laughs) I even got it like really solid right before the show. And Johannes Ewald.

    JOHANNES: Hi.

    KENT: And Sean Larkin.

    SEAN: Hey.

    KENT: I should probably say Sean T. Larkin because that's what it is here on the site, you know. (laughs). And Tobias Koppers.

    TOBIAS: Hi.

    KENT: And for those not familiar with webpack, Tobias is the reason that we're all here. He created webpack. And yeah, so we're super excited to have him and the rest of the main contributors here as well. So before we get into our subject, I think it'd be great to get an intro to each one of you. So Juho, man I'm pretty sure I'm pronouncing your name wrong, (laughs) but could you go first? And just give us like a couple second introduction to yourself and maybe pronounce your name correctly for us?

    JUHO: Yeah, so it's Juho Vepsalainen, anyway. So I started this crazy project sort of like about a year ago. So I started writing a book about webpack, and then I ended up writing about React too. And so then I had to write two books. And the best thing of course is that most of the content is for free, so basically, I'm doing my best to kind of develop content around webpack and React at once.

    KENT: Very cool. Thank you for that. Johannes?

    JOHANNES: Hi, I'm Johannes, JavaScript developer. I also do lots of open source and a webpack contributor. I founded a company with my friends, and we do a lot of client work. And also teaching at a local university, and we also do the NodeSchool in Munich.

    KENT: Very cool, teaching is near and dear to my heart. So, awesome. Sean?

    SEAN: Hey guys, I am a UX developer at Mutual of Omaha in Lincoln, Nebraska reppin' Silicon Prairie. I am unofficially the Angular ambassador to webpack. (laughs) And I've been working on it for about six or seven months. I love what it does. I love what it's brought to the table for everybody. And can't wait to see what's in the future. I'm also on the Angular CLI core team.

    KENT: Very cool. Thank you. And Tobias?

    TOBIAS: Yes, I'm Tobias Koppers. And I'm a core contributor for webpack since 2011. And yes, in my work I don't do very much JavaScript related, only a few things. And so it's a bit funny that I do webpack as my hobby, so it's cool. (laughs)

    KENT: Wow, that's amazing that like you have built this thing, like tons and tons of JavaScript developers use and you actually don't do a whole lot of JavaScript on your day job.

    TOBIAS: Yes. (laughs)

    KENT: But it's fun. (laughs) Cool, I think to kick off our conversation, let's go ahead and just get a baseline of what webpack is. So maybe, Tobias, I think you'd probably be the good one to answer that. What is webpack?

    TOBIAS: Ooh, difficult question. Yeah, it started as a JavaScript bundle, but today it's a bit more. It's a more than a bundle. So you can put anything front end related or yeah, let's say front end related stuff, and (mumbles) with the dependency tree and get some assets out this in webpack. And yeah, that's what it does, I think.

    KENT: Anybody else have like anything else they'd like to say about what webpack is? (laughs)

    JOHANNES: I think it translates... or the main concept is that everything is a module, not only JavaScript, also CSS and HTML. So as long as you have some syntax where you can reference other stuff, then it's a module. And I think webpack was the first or is probably the only tool that emphasizes this concept. (laughs)

    KENT: Yeah, I think it adds a lot of simplicity when you can just think of everything as modules.

    JUHO: Yeah, I actually see webpack as a graph manipulation tool. So you take a dependency graph and turn it into something else. So that's what it does. So it takes something really complicated and turns it something else. So it's a powerful (mumbles) tool.

    KENT: Yeah, I like how when I started using webpack it was like all the implicitness of my dependencies is now totally gone because I can make every dependency totally explicit. And like even CSS and HTML, like everything could be explicitly related and tracked. And that opened a whole new world of possibilities and an easier maintainability story for me.

    JOHANNES: Yeah. I think that's really important that you have explicit dependencies when you're doing some... So when you're doing PHP for example, or any other templating language you always have some global space where some variables are around. You don't know if they are included or not. And when you import stuff explicitly, you know that everything that is in the file you have, and not anything else. And I think that is cool. Yeah, and you have to do it when you want to us webpack, so.

    SEAN: Not only that, webpack made it really easy for people to wanna bring features like ES6 and other pre-processors with a lot of ease to the current browser. Webpack is a module bundler first, but it emulates a module loader. What's so huge about that is that not only is it trying to point towards the efficiency of being able to only download one or two scripts, but it also uses a module loading style. Correct me if I'm wrong, Tobias, but I mean the way that if you look inside of the generated content is that it's preforming webpack requires. And so it kind of brings to the table a lot of really great design patterns that we're gonna use in the future like module loading.

    KENT: Cool. So I'd like to get an idea of where webpack came from, like, why did we need webpack? Tobias why did you get started creating this module bundler?

    TOBIAS: Yes, that was because I needed... I want to have code splitting, and I've worked with at GWT before, the Java to JavaScript translator too and there was a cool feature also named code splitting. And no other bundler had it at this time, and so I initially started a pull request to (mumbles) web make from (mumbles) or so. And it's developed as their own project and yeah, it's got a few attractions by Instagram, and so it's got popular. And yeah, that's come from. (laughs)

    SEAN: It's interesting to know that we use, some of our teams, use Google Web Toolkit also, or we call it GWT, and we kind of joke because it's a little bit of an older tool and it's kind of a pain to use, but the fact that webpack, what it is today, is inspired by such a pain tool is really cool and kind of ironic to us.

    TOBIAS: But the one feature is cool! (laughs)

    PAM: Yeah, well I don't know though. Sean, I kind of wanna ask you about that, 'cause I mean in terms of kind of knowing a little bit of the reputation of Google Web Toolkit, it also is like fairly ubiquitous as kind of that thing of as much as you don't like it, things become ubiquitous for a reason. Usually because, I don't know, maybe they're useful. (laughs) So take it like building off of something that was maybe you didn't like it, but it was actually useful and it's been inspired by that to something now something that people actually like is really cool.

    SEAN: Exactly. I mean it's like the biggest irony ever. And we always joke about it in the office.

    KENT: Cool. So I'm just like totally floored by the power of webpack. I remember when I started using webpack, I was just like, "I feel like there's nothing that this tool cannot do." And it was just like every single time I had a question, like, "Can I do this with webpack?" The answer was always yes. It was just a matter of like, "how do I do that?" So I'm just really curious, what was like the design going into this that made this tool so powerful and flexible? What other things kind of inspired the API, or like it's just so amazing to me that you can do so much with 100 or 200 lines of JavaScript objects.

    TOBIAS: Yeah. Webpack's config is a bit of a declarative style. And I think it's what makes it powerful. And there are many hooks for plugins, so you can hook into the complete process. And if you can't do something, you can write a plugin to it and that's I think what makes it powerful. Yeah, use case are often common and some people may already written a plugin for it. So yeah, it's not... it's a more kind of plugin system, webpack. The core, everything is a plugin, so it's very modular and I think that's what makes it powerful.

    KENT: So is there anything that webpack can't do? Like on that thread of like...

    PAM: Can it build a spaceship?

    (laughter)

    KENT: Right, yeah. Are we shipping webpack to space yet? (laughs) Just for me it was always like, "Oh, I need to do this..." I just remember, so back in the day I was doing a lot of Angular, and I wanted to have this really crazy interesting structure in my folder structure. I wanted to be able to... I had a folder that I wanted to be able to require something, and have it actually look up two directories up above and start the required resolution like two directories up instead. It was this crazy weird thing that I would not recommend doing. But I was shocked when I asked you, Tobias, this was like a year ago, I was like, "I want to do this weird thing." And you're like, "Yeah, you probably wouldn't want to do that but this is how you'd do it in like three lines of plugin." And it was just like shocking to me. So what are some cases where webpack doesn't really solve problems? Like, where are some areas where webpack kind of falls over?

    TOBIAS: Yeah, it's a bit of the HTML handling. It's a bit... it's not so cool. So you always have to start with a (mumbles) JavaScript file. And you can't start with a CSS file, you can't start with an HTML file, and so that's a bit of a limitation. But there are other cool plugins (mumbles) the HTML but it's not so integrated, the HTML support for webpack. You can create bundle modules and insert HTML into the bundle, but you can't turn it around. So it's bit of a limitation, I think. And the CSS handling, it's not so cool with the text plugins. I don't like it very much.

    JOHANNES: Yeah, I think that's currently one problem with the design or the internal API, that for every loader has two parts, the source code built in AST, and through the transformation and the next loader has to do that as well. So for instance, when you compile SASS, then you, using the outer prefixer, then the PostCSS will again parse the CSS and apply the outer prefixing. And then the CSS loader, which uses PostCSS as a parser too, parses the CSS again. So, I think it would be better to pass ASTs around instead of source code. So yeah.

    PAM: So I wanna just back up to make sure we didn't lose listeners there. That AST is Abstract Syntax Tree. And it's a structure, you know, if I get this wrong, please definitely help me out, but it's a way of understanding the structure of the program. So you're suggesting that... 'cause this is building this structure that's understanding the program over and over again, and if we pass it around instead of rewriting it, or recalculating it, that do you think it would be faster? Just speed-wise?

    JOHANNES: Yeah. I would think so. I think the parsing makes a lot of performance... I'm not sure if Tobias (laughs) says this too, but I think it will be faster. But I'm not sure, I'm not sure if that's the responsibility of webpack. Maybe there is a boundary where you should use PostCSS plugins and, yeah. I don't know if...

    KENT: Actually, that's really interesting to me. I think this would totally be possible with the current webpack API. Like you would simply have, your first loader parses it into an AST, and passes that on to the next loader that consumes an AST, modifies it, and then passes that on to another loader. And then finally, the last loader generates the code. And so it would totally be possible with the current loader implementation. I'd really love to see somebody implement that. It'd be really interesting. There's a lot to do.

    TOBIAS: It has been implemented for PostCSS. Not in the current PostCSS, but somebody has written a loader which does exactly this, just pass it and transverse (mumbles) the AST. I can look it up.

    KENT: Cool, yeah, that'd be awesome to get that in the show notes.

    PAM: Yeah.

    SEAN: Yeah, as long as it handles like loaders that emit new files into the AST, that's legit.

    PAM: Yeah, I think that would be the key thing too, you know, in terms of like why isn't it that way already, is like well these things are probably updating the AST, so they should return a new AST that passes to the next loader.

    KENT: Yeah, exactly.

    JOHANNES: I think one problem is also that ASTs may be different depending on the actual truth. But I think there's an effort currently to make the ASTs more--

    PAM: Universal?

    JOHANNES: Yeah, universal.

    PAM: Like, standard?

    JOHANNES: Yeah.

    KENT: Yeah, very cool. So one other thing that I hear a lot as somebody who does a lot of webpack teaching and training, people often complain about the documentation. And webpack, being such a huge project, there's a lot to document. What are some things that people can do to help with the documentation process? Like, maybe somebody could explain how, like, the documentation's actually pretty simple to update, and we just kind of need people to help. So what are some areas where people can help, and how can they get involved in that?

    JOHANNES: (laughs) I think the first thing is to correct spelling issues and typos and improve the language, because Tobias is not a native speaker. So I think native speakers could improve the docs. And I think it's really easy because you just have to click the edit button. It doesn't take much time, so you can do that in probably 10 minutes. So I think that's an easy starting point.

    KENT: And if, correct me if I'm wrong, but it's actually just the documentation's driven off of a wiki, right? It's not like a repo-well, I guess technically a wiki is a repo, but like it's not really all this complex. You can do it all in your browser. You just need a GitHub account, and you can comment directly to it, right?

    JOHANNES: Yeah.

    KENT: So it's pretty easy. Next person I hear complaining about documentation, I'm just gonna be like, "Well, there's an edit button right there."

    JOHANNES: Yeah, I think it's the easiest way to edit the documentation. I've never seen another website that's so easy to edit. (laughs)

    KENT: Yeah, so I think that's something that we should all learn is to give back once we learn. Like I can understand that it can be frustrating when people are getting started and stuff, they like better documentation. I should probably give back some of the things that I've learned about some of these different APIs and contribute back to the documentation, maybe I'll do that. So, cool, yeah. Actually, on that note of learning webpack, what are some of the best ways for people to get started like learning webpack? Often actually, I should back up, often people will migrate to webpack. And I know that some people have pet projects where they start on webpack just to learn how it works, but lots of the time, you have a giant project that's using RequireJS or Browserify or something and you want to migrate it to webpack. So what are some good resources for people to learn how to do something like that?

    JOHANNES: I think there are guides on the website, when you're coming from RequireJS for instance. But I think the main thing is that you should not try to achieve everything at the beginning. And there are so many questions on Stack Overflow asking, "How can I get HMR working?" And I think HMR is nice, but it's it should not be the first goal. You should start very basic and--

    PAM: What is HMR in this case?

    JOHANNES: Hot Module Replacement. So you don't have to reload the browser. And it can be really tricky because there have to be some parts, so you need a web socket connection. I think it's rather complicated, and people get frustrated very fast, very soon. But I think they should start just to migrate to webpack and then add these features. I think this is pretty easy, because webpack understands AMD out of the box, so maybe you only have to translate the RequireJS mappings you've done.

    JUHO: This is actually something I've tried to do with my book effort. So basically what I did was to kind of split it up into smaller bits you can understand. So you have something about HMR, something about loaders and so. So we get these small pieces. Once you understand the pieces, you understand them all better. So I think you have to kind of have a different tolerance of understanding in webpack because its alien. What I mean is that when you find webpack, it looks completely different than the old tools. So you have to pick up the concepts that webpack uses. And once you understand how loaders work, how plugins work and how the (mumbles) works, then it gets a lot easier to help.

    PAM: Yeah, I think that is a really good point, that it's definitely-- I'm glad we talked about the conceptual stuff right at the beginning, because I think when people are trying to understand webpack, it's part of the frustration of being a beginner at something that you know, you get on a skateboard and you're like, "Okay, how do I like flip upside down?" But like you really should not do that on day one. It's a really, really bad idea, for skateboarding at least. Luckily you probably won't injure yourself using webpack. (laughs) But I think that's, like HMR to use the acronym, but Hot Module Reloading is definitely like one of the really cool things, and I know people want to get to it quickly, but if you don't understand what's going on, then you're gonna have a hard time.

    SEAN: I think the best way, when I was learning webpack, was that I think I started off with, I think it was a React Webpack cookbook by Christian Alfoni, I think? But he starts off step by step, from like the simplest webpack configuration. Literally, entry and output, simple.

    JUHO: Yeah, just to compliment that, that's actually what I'm doing right now. So I do the cookbook, and I (mumbles). So we have the original cookbook, but it's kind of a (mumbles) format. So it has kind of grown a lot since we did it like about a year ago or so.

    SEAN: Well that's awesome. I love that.

    JUHO: Yeah.

    KENT: So I think it would be valuable-- Pam, you mentioned that it was good we started with some of the fundamental concepts, but I think we could probably do a little bit better job. So there are two like main concepts that I think people really need to grasp, other than obviously like the entry which is like the main method of your application, right? And then the output, where the bundle's gonna go. But yeah, two main concepts that I think are really important for people to understand are loaders and plugins. Can we talk about loaders and plugins? We'll start with loaders. What's the purpose of a loader?

    JOHANNES: A loader is basically a function that gets an input and returns an output. And I think most loaders should return it asynchronous. That's the way to do now. It's not-- you can return anything, but they have to be chained in the right order. So it works a little bit like piping values.

    KENT: So like in a practical use case, this would be something like transpiling JavaScript. And so you'd have a Babel loader where in goes your source code, and out goes the transpiled JavaScript. Or another really good example is CSS or you're pre-processing with LESS for example, that would go through the LESS loader, and then it goes through the CSS loader which actually, if I understand the CSS loader correctly, it actually just takes the CSS and makes it a string module, and then that goes into the style loader which is responsible for actually injecting that into the DOM. And so each one of these things plays a specific role and just pipes it through the next loader. This is on the module level, right? This isn't like the whole bundle. Loaders are dealing with just modules, is that all right?

    JOHANNES: Yeah, and I think the main benefit is that they all translate into a JavaScript module somewhere. So the CSS loader turns string into a JavaScript module, a module that just returns a string, and by that, you can replace all the references to other images or fonts with usual Require statements. So webpack itself does not understand CSS or any other language, it just recognizes these Require statements. And yeah so somewhere in the chain, you'd have to create a JavaScript module, a CommonJS module.

    KENT: Cool. Sean, did you have something you wanted to add?

    SEAN: I was just gonna say, like you guys talked about a lot of good examples that maybe do more complex stuff, but a loader in webpack simply just takes a file and it returns a new version of that file, just edited. That's all a loader is in its simplest form. I think sometimes, like let's say if you just wanted to add like a comment or something on every single one of your files with a certain extension, you can do that just by writing a custom loader.

    KENT: I actually, it's interesting that you say that. Before I started transpiling with 6to5 or Babel, I wrote a loader to automatically add (mumbles) to the top of all my modules. And I with that I'd just like started using 6to5 'cause that was a total waste of time. But yeah, it was actually really easy to do. And there are some things you can do with caching and different things to make it more perfromant and stuff. But yeah, like basically you have a file that exports, like it's a module that exports a function, and then you tell webpack to use that as your loader. It's like, yeah that's basically all it is. So writing loaders are no longer scary for people. Great, so let's talk about plugins then. What's the purpose of a plugin?

    JOHANNES: Tobias, you should answer that or Juho. (laughs)

    JUHO: Yeah, I mean HTML webpack plugin is the best example because the problem is that you get some output out of webpack, but of course it's useful if you get it with HTML too. So HTML webpack plugin, it hooks into that webpack lifecycle or it (mumbles) everything is done. And we have this and that asset. And what it does it generates an HTML, and it writes the script text and everything for you. So that's like one good example of what you can do with a plugin.

    KENT: So maybe, Tobias, you can talk more on like an architectural level. What's the purpose of plugins? Like when would I need a plugin? What do plugins normally deal with? What do they have available to them?

    TOBIAS: Yeah, plugins deal with everything that loader doesn't. (laughs) And if you want to hook into the whole compilation process after or before, or if you want to do a transformation of a module or multiple modules, but if you want to change the chunking, change where modules in the chunk tree or something like this, you'd need to use a plugin. So everything related to the compilation process is the job of plugins.

    SEAN: I would say sometimes loaders allow you to work with compilations, which are like the compiler's finished result from the loader, in layman's terms. So it gives you access to the entire lifecycle hooks of the compiler and not only the compiler but the compilation itself, or even lower level things. It's a complete API to what webpack does in terms of compiling. And not only that, but it's all built into the source code as well. Like, half of the libraries are plugins themselves that implement the exact same, I guess you could say, parent class called tapable that Tobias created.

    KENT: Okay, cool. We mentioned Hot Module Reloading, and it's a feature that like, this is one of those features that demos really well and people get really excited about even if it's not entirely practical for everyone's use case, it's still like, "Oh wow, that's awesome!" So I think people would be interested to hear about hot module reloading and a little bit of how that works and what role that plays in the developer workflow. Does anybody wanna talk about HMR?

    TOBIAS: Yeah, I'll talk about it. So HMR is like an opt-in feature of webpack where modules can define how they want to behave if there's a new version of the module. So it's opt-in, so if you don't touch anything of HMR, nothing happens. But if you enable it and webpack can write a dif between your old bundle and your new bundle, and it generates assets folders (mumbles) module update from .js. And the hot module runtime then loads or creates the manifest which chunks change, and then it downloads the chunks, the dif of the chunks where if it's changed, and then looks into the module tree, it's a runtime module tree, how this update can be (mumbles). And if a module has accepted itself, it's just replaced, and if it's not accepted itself, so the update or the change bubbles up the runtime module tree. And finally, some module needs to accept it and there's the handler which is called. And then the whole tree, which is affected by this update, is replaced and injected at the place where the accept handler is called. So that's basically this whole thing.

    The cool thing is it integrates very nicely with (mumbles), so even the dif of the hot module placement, it's code-splitted, so it's, you get a dif for every chunk and only need to download-- if you haven't accessed the part of the application where the update happened, you don't have to download the hot update, the chunks for this part. So it's very cool.

    JOHANNES: I think when you want to update a module, you have to be sure that there weren't side effects. So for instance, replacing styles is very easy because styles have no side effects. You can remove the style node from the DOM tree and add the new style node and the other part of the application is not affected by this change. But if you have any side effects like adding event listeners or other stuff, then it will not work so easy because you have to remove these side effects when you want to replace the code. That's why, for instance, functional programming is a really great fit because you program little functions that don't have side effects and you can easily replace these functions.

    JUHO: Yeah. Actually, it's very easy to implement HMR into place for Redux, so a couple of lines of codes, it works. So you got to replace (mumbles). And actually, a couple things it will ask for an (mumbles) for (mumbles). (mumbles) is something with (mumbles). I mean you can implement the interface but of course it's very, very hard if you have side effects. It's not practical but for simple systems like this, of course it works.

    KENT: Yeah, 'cause like the alternative being pretty much your entire, like the top-level module needs to reload everything and then you lose all state and everything is gone. It's just like refreshing the browser at that point. And I think this is one of the things that motivated Dan to create Redux, because he thought, "Okay, I need to be able to do hot module reloading, but I don't want my state to go away. And so I need to separate my state and my UI, so I can update each one of these individually and get hot module reloading on those." Just kind of an interesting concept all together that we could talk at length for, I think. But I think it would be good to move on to another feature of webpack, and that is actually Juan asked this on Twitter, he wanted to know about tree shaking. And so tree-shaking is like, I think it's started to become a buzzword, but it really isn't kind of an interesting feature. Does anybody wanna start the chat about tree shaking?

    PAM: So this is, tree-shaking is, dead code elimination, right? 'Cause I had to look this up, 'cause you can also call it "dead code elimination."

    JUHO: My understanding is that we have ES6 (mumbles). ES6 (mumbles), it's possible to analyze statically. So you can take a look at the files and tell that, "All right, we are using all of these parts. And based on that information, we can tell that we are not using this and that, so you can eliminate." So you shake the tree and (mumbles) you don't actually use and that's it. I mean, it's based on the fact that we can pick up the code and what parts we're using and what parts we are not using.

    KENT: Yeah, so from my understanding, basically and like in investigating webpack 2, because webpack 2 actually has this functionality built in, and I think the first major bundler that I saw that popularized tree-shaking was Roll Up. It was a really interesting concept. I'm not sure whether they created the idea or not, but--

    PAM: So, well that's actually, I mean, and I hope that this isn't, I don't know, it's only thing is like maybe no one has this familiarity, and this question will die, but it sounds like what the Google Closure Compiler has been doing. And so is this a big deal? Because this is becoming part of the ES6 module standard that it's almost becoming, like instead of having a compiler do all the work, it's actually the language itself allows you to do this. I think that that, do you all think that's what the big deal is? 'Cause that sounds to me like that's what the big deal is.

    JOHANNES: Yeah, I think that code elimination is not so effective because it can only remove the code that you're truly certain does not run. And in JavaScript because the language is so dynamic, you can't be certain that a specific part is not executed. But with ES2015 modules, you can analyze that by reading the source code. And they remove this, for instance, CommonJS modules are very dynamic by nature, and you can't know if a specific export is used or not. But with ES2015 modules, you can know. So I think this feature is only possible because of the specification.

    SEAN: Yeah, on top of that the Google Closure Compiler can do dead code elimination, but it requires that you use advanced mode. And to do that, it needs JS doc annotations to help provide that information such as like, let's say its dependencies, I think it can even do typing. Like, for example, right now, TypeScript is working on a (mumbles) which kind of automatically creates all of this documentation as it transpiles back so that it can use Google Closure Compiler in the same way.

    KENT: Very interesting. I think we should probably make the distinction between dead code elimination and tree-shaking, though, because they are two different things. So Tobias, you can correct me if I'm wrong, but here's my understanding of how things work in webpack 2. So webpack 2 now understands the ES6 module specification and so your imports and exports and things. And because it has a whole knowledge of your entire dependency tree, it can track all the dependencies, all the imports, all the exports, and know which of the exports are not being used. And so all that it does is like when it transpiles all of your import statements, because obviously those will not run in the browser, webpack resolves those, but when it transpiles those, it will exclude any exports from that transpilation process that are not being used elsewhere. So the code all still lives inside of that module, but like the actual export piece does not. And so, that way if that code is being used within that module it's still in use, and so uglyfication isn't gonna come through and dead code eliminate it. I'm kind of getting ahead of myself.

    Anyway, once that's all done, like, even in development mode if you're not minifying your stuff, like you probably shouldn't be doing that in development mode, you're still gonna be loading all that code. You're not like eliminating any code in development. It's when UglifyJS comes in and checks for references that that code is eliminated using dead code elimination, 'cause it'll see, "Okay, so not only is this, like this code is defined this function's defined, but it's not being used anywhere in this file so I can remove it." So they're totally separate processes, and they know nothing about each other. It's just the fact that webpack sets things up, so that it's not being used anymore in the transpiled code and then UglifyJS is like,  "Oh this isn't being used. I can get rid of it." Is that correct?

    TOBIAS: Yes, that's correct. It's like webpack-- tree shaking makes and translates unused modules into dead code.

    KENT: Yeah, that's a really better way to say that. (laughs)

    PAM: That was really good. And then also I wanted to say kind of like. It's obvious to think of, but like it's tree shaking because you're shaking the abstract syntax tree, and like nodes that aren't tied to any other nodes get shaken out. So, if that helps people conceptualize it.

    JUHO: Yeah, I can give you a simple example of dead code elimination. So suppose we have like if statement, that if (mumbles) is false. So it's clear it's going to false. So of course Uglify can tell that, "all right, let's drop this if." And there's actually a technique that you can use with webpack is to have (mumbles) plugin, and you can set the environment. So let's say we have like sort of statements, active (mumbles) active development. So you can do this just by using the fact that we can replace the contents within if statements, so then we know what to eliminate.

    KENT: And yeah, like libraries like React use this all the time, they have process.env or node_env, or whatever, and like leverage this dead code elimination. And I do this all the time. It's really, really useful. So I feel like there was something else I wanted to say about tree-shaking, but we are actually coming pretty close on our time. We do have another question on Twitter that I'd like to get to, and the question is about webpack 2, "what kind of speed improvements will we see from webpack 2?" Ed Moore wants to know.

    TOBIAS: Currently there isn't much speed improvement. I think it's smaller improvements, but nothing architecturally better. But I had the idea to cache the chunk tree, but that's not implemented yet. So if you have many, many modules, it's a bit problematic because you cache a lot of the size, you cache the modules but we still have built up the module tree, built up the chunk tree, and translate the module tree into the chunk tree and optimize the trunk tree. And this part could be cached, but it's currently not. So it's a point for webpack 2 which should be implemented in the future.

    KENT: Yeah, actually I kind of wanted to ask about that. So speaking specifically about webpack 2, what are some of the other things that we can look forward to in webpack 2? I think we should probably link to the gist that you created.

    TOBIAS: Yes, I added it to my links in the doc. But so we're solving configuration change and so we're solving plugin system change a lot, so it's much more flexible. And yes it (mumbles) to ES6 modules. And I plan to force, or to (mumbles) every loader output to emit ECMAScript 6 code, so ECMAScript 6 modules so we can leverage tree-shaking for all the loader generated stuff, except in CSS, you can theoretically, you can tree-shake CSS. And yeah you need to-- its allowed to emit a JavaScript module, and if the JavaScript module use ECMAScript 6 (mumbles) modules, you can tree shake it. And we need a little (mumbles) for this, so we can remove the unused CSS rules from the document. But that's something in the pipeline. So, but I think many loaders can benefit from the tree-shaking if they emit ES6 modules. So that's a point-- okay. (laughs)

    KENT: So, did you mention also the API to code splitting also changed? And so now you--

    TOBIAS: Yeah, it's ECMAScript 6 "system.import" syntax. But it's nearly identical to the ES empty require. It's a little different. You can dynamic (mumbles) in the ECMAScript in the system port translate it into many chunks, so it's easier to create-- split your, if you have many roots in the application, you can use a dynamic system.import, and it will automatically translate to many chunks. So it's a bit better.

    KENT: And it's crazy easy to use. I have a lesson coming up on it, and you won't believe it. And the other cool thing, if I recall correctly, is now you can add a handler for when there's a failure to load a module, which is pretty handy.

    TOBIAS: Yeah. That was a requested feature (mumbles) but the spec for (mumbles) is no handler for catching the exception, but the promise IPA's much easier to make sense with.

    KENT: Is this feature the reason why the webpack runtime now requires a promise polyfill?

    TOBIAS: Yeah. (laughs)

    KENT: So, if I'm not using code splitting, do I need to polyfill promise it still?

    TOBIAS: No, I don't think so.

    KENT: Oh, that's good to know, good to know.

    TOBIAS: It's easier to use code splitting. (laughs)

    KENT: Yeah, it's so easy to do, right? It's mind blowing how easy it is actually. But no that's good to know. I got to go update the lesson real quick. (laughs) Just add that little note. Cool. So we've just got a couple minutes left, and I wanted to ask two quick questions, one of them is, where do you need help? And how can people get involved in helping the project?

    TOBIAS: Yeah, the best idea is to start with writing unloaders. This part of the (mumbles) loader, level, it's easy, and it's a good way to start. And the documentation, of course. (laughs) And I think, yeah, you can do pull request to core, but it's pretty difficult. And since it's a bit big, but it's good tested. So if your test passed, there's a good chance that the pull request is correct.

    KENT: Cool.

    SEAN: On top of that, you can contribute examples or adding tests to the test library will help Tobias and others make sure that we're covering all the bases or edge cases that people wanna use webpack for. So if anything, you've come up with a crazy set up that you know works, and you maybe wanna insure its success in the future for changes, consider adding it as a test or putting a pull request in for a test and explaining why. And that's something that will really be beneficial to us.

    KENT: Yeah, that's a great tip. I think any library could and should do that same thing. And they would all appreciate it, I'm sure.

    JUHO: Let me just mention one thing, I mean, webpack let's say is not the easiest tool to use, so we have this library or tool that's webpack validator. So it's awesome because it validates your configuration, so if you make a mistake, it will let you know. And we have these rules, let's say good practice or best practices kind of, for certain things. So again it's tool work, knowing about maybe you can even contribute to it, because it sits on top of webpack and makes it easier to use. So I recommend that tool.

    KENT: Yeah, that's definitely one of my picks. Webpack Validator is awesome, and Sean just added in the chat, it's like webpack lint. But what's cool about it is it's not just static analysis because webpack configs are like runtime-generated, and so yeah, it's a run time linter. Cool. My last question-- oh no, we just lost Tobias! Oh, sad! Well my last question probably isn't gonna apply anymore. Oh there he is, he's back! Tobias are you still with us?

    TOBIAS: I closed the tab! (laughs)

    JOHANNES: He wanted to escape.

    KENT: He's like, "No, I'm not gonna answer this last question!" (laughs) Tobias, I did have one other question. So I'm just so impressed by, like, the amount of engineering that has gone into this webpack tool and how much time you spend on webpack and the community around it. And so I wanna ask, how do you find the time to work on webpack? I feel like there are a lot of people who listen to the show who are really interested in contributing to open source and working on stuff on their free time, and I feel like you could give us like some good pro tips about that.

    TOBIAS: About finding time for open source? Yes, it's if you do an hour a day, it's often enough. So every two days, I invest one hour toward the issues, and it's mostly enough to clean up the basic parts. And sometimes there's a time slot if it's a weekend, and for a bigger feature, but it's difficult. (laughs) It's best to have your company found your project, or give you time to work on open source projects.

    SEAN: Does your company know that you're the webpack founder? Do they know about webpack? (laughs) I'm just curious.

    TOBIAS: Yeah.

    KENT: Do we have tips from any of the other guests or panel? I feel like this is a good opportunity. We all have open source experience here.

    JOHANNES: To be honest, I'm currently I'm a bit frustrated (laughs) because I have some open source projects, and when they get popular it's cool, but I used to have a lot of time to create new projects but now I have a lot of issues and pull requests. And when there are pull requests, there were other people who invested time for it, so I feel the urge to review that and give feedback. And I would like to have some productivity tips too. (laughs) I think somewhere when your project becomes popular, you have to invest into the process of getting new contributors because when the project is big enough you can't handle that all for yourself, especially not in your free time.

    KENT: Yeah I think it's, I'm just going on top of that, it's really valuable to start early getting contributors to the project. And be really open to people contributing. And if somebody files an issue, you don't have to fix it right away, you can show them how to fix it. Even if it takes twice as long, or four times as long to get that person to contribute, instead of you just doing it, you'll wind up with a contributor that's really helpful.

    So we are out of time, and we yeah just have our tips and picks and announcements to go through. So we'll just jump into those now, unless there is something else that somebody wants to mention before we jump into that. Is there any like last minute things people wanna talk about?

    PAM: You can roll it into the tips and picks.

    KENT: Okay, let's roll in. So we'll start out with Pam, why don't you go first?

    PAM: Sure, so my tip for the week is just rehashing what I said earlier, that especially, like this was very true for me with learning about webpack, being frustrated that I couldn't like do cool tricks right away, or you know, just being overwhelmed by a completely different paradigm. But having to take a step back and learn about why it does that, the basics. And so the tip is, as hard as it is to focus on the basics, sometimes they're necessary to get to the cool stuff.

    And then for my pick, I'm gonna pick and article or a post from Axel Rauschmayer on webpack and tree-shaking. It's nice and concise. So if you found that part of the show interesting, you'll probably like the post.

    KENT: Awesome, I'll go ahead and go next, and then we'll let our guests go ahead. So for me my first tip is definitely self-serving. My tip is for you to follow me or Egghead.io to know when my webpack cookbook course comes out. It's all gonna be webpack 2, and there's a ton of stuff. And all of the guests actually have given me invaluable feedback on this course, so it's gonna be solid. I'm really excited about it. And then also I'm doing a Frontend Masters workshop in August and so follow Frontend Masters to know when to register for that. And then I have this link to a video called, Migrating an App to ES6 with webpack. This is a workshop that I did last year at MidwestJS, where like you can follow along and migrate an application using webpack. So if that's something you want to do, this could hopefully be helpful.

    And then my last tip is try to find Babel plugins to do stuff you need before you use webpack features because Babel is more ubiquitous and inter-ops with more tools. And so like, as awesome as webpack is, it's just so much easier to use other tools if you're using more Babel features. One example I can think of off the top of my head is aliases. So webpack supports this really cool concept of aliases, you can say require this thing and then you can just say, "whenever I say require this thing, I'm actually saying require this other thing." And then you can, there's a Babel plugin that can do the same thing and it basically translates your require statement into what it should be for that alias. And it's actually super, super nice. I'll add a link to that Babel plugin. But yeah, doing this makes it easier to interop with other tools.

    And then I've two picks. My fist is a new podcast that I just started, as if I don't have enough podcasts already, but it's called React30. It's a new 30-minute podcast by me, Ryan Florence, and Michael Jackson. And our tagline is, "We will waste no more than 30 minutes of your time." And so check that out, we just recorded our first episode. And if you're diligent, you can find it on YouTube. But yeah, we're waiting on iTunes right now, so it should come out pretty soon. And then webpack validator, we talked about that earlier, but it's like totally invaluable. I recommend you use it. Okay great, let's go with Johannes.

    JOHANNES: Oh, you got me. (laughs) I wasn't prepared for that. Okay, one tip I have that you should not abstract your webpack config or any config. I think it's very valuable to have one file, and you have the overview of all the keys. So I've seen projects where people try to abstract and reuse config parts, but personally I think it's better to copy and paste them because then you see all the config stuff in one file.

    And the other tip is that, learning a completely different programming language upgrades your programmer brain. And generally, I've learned a little bit of Haskell and I can recommend the... I think the most popular tutorial about Haskell is LearnYouAHaskell.com. It's so nicely written. And before this tutorial I didn't get the syntax, and after that it was really nice. And I think especially when you want to learn functional programming, I think Haskell is tough, but a good start.(laughs)

    My pick is, yeah, I'm using this Z shell script, it's called Z.sh. And it's so good to jump between folders, so it memorizes the recent folders you've been, and you only have to type three letters and hit enter and you're back in that folder. So I can recommend that.

    KENT: Cool, thanks. Juho?

    JUHO: That's right, I was thinking of something. Yeah so tips. There is always something new to learn. So it's like you cannot go without learning anything. I guess based on that, I will say it's worth it to kind of spend time on learning to learn. You have to kind of figure out the best place for you to learn. It might be videos, books, or doing things or explaining things, but you have to find those ways. It's like the core skill of learning for you, it's the learning skill at least, the way I see it. I think it's important to spend time on fundamentals. You have to understand what's behind the systems because if you understand that it's going to be easier to move around. So if something new comes around, you can pick it up because you understand why it works.

    About picks, I have two picks, WebpackBin.com. It's basically environment on the web that has webpack set up, so you can just start coding React or something and it just works. And there's another pick, it's a tool called autojump. So autojump, it works in terminal. And it's basically a tool that learns your usage. So if you have to go to directories and so on, so you can say "j" and something and it just jumps there. So you have to use it to work, but it saves tons of time. So that's good for me.

    KENT: Cool. Thanks. And Sean?

    SEAN: All right, so my links are You Don't Know JS. It's an incredible resource. I think it's on GitHub also by Getify or Kyle Simpson. It has probably some of the most complete understanding of ES6 and JavaScript in general. So if you're wanting to learn JavaScript more or just trying to understand some of these new patterns that are being used, it's a great resource.

    Also, "I was wrong about TypeScript and here's why." It's a great article. Kind of apologetic about the benefits of using one of these type supersets that are floating around the JavaScript world these days. For me, take a look at it, and kind of weigh it over. I think just like Johannes said, is that learning new languages, whether they're similar or not, are gonna help you understand contextually how to apply engineering principals across the board. So take a look at TypeScript.

    And then also it'll be posted as my Google Doc slide for Angular plus webpack. And it's really just about webpack's core fundamentals, which we talked about, so loaders, plugins, entry and output, how they work together and kind of gives somebody the ability to understand the fundamentals for once. What's cool about open source is that there are a whole bunch of people out there that make these great boiler plates, and people use them, but they don't know how it works. So they may use webpack, but they don't understand it. And so my slides are trying to accomplish that is that you can walk away understanding the core principals and then be able to pack away anything, and use anything with webpack and make it work.

    And then my tips are, when you're struggling on a problem just take two steps back and ask, "What am I trying to accomplish? Is this the best avenue? And if it's not, what else can we try?" I think so many times, you know, myself as well, as we were repetitively trying to fix this one solution and sometimes just getting up and walking away and taking a step back and just kind of understanding what's going on really is refreshing.

    And then a second one that I always recommend to people, and when you're troubleshooting something and you don't understand or you can't find an answer, look in the source code. You're gonna find all sorts of hidden gems and awesome features that you never knew existed, like webpack has Electron and Atom targets, that's in the source code, you can find it. There's all sorts of crazy awesome things that you can learn just by looking at the source code before asking somebody for help. I like to say, there's nothing wrong with ever asking somebody, but troubleshoot first and ask last. And somewhere in the middle you should put "reading the source code."

    And then I think my picks were Midwest Dev Chat. So, you know, I'm in Lincoln, Nebraska. I don't know about the rest of the technologists around here but if anybody out there is looking for a great community to look for help or connections, especially in the Midwest, you don't have to but you can go to www.midwestdevchat.com and join our slack group.

    And then the webpack Closure Compiler, so instead of using UglifyJS, you can always use Closure Compiler to remove some of that dead code, and so that's been really useful. And then Angular class has an Angular 2 webpack starter, so you should take a look at their organization, especially Angular developers, if you understand the principals and wanna take it to the next level, there's a lot of great design patterns using webpack that are very useful.

    KENT: Cool, thanks. That was a lot. (laughs)

    SEAN: Sorry. (laughs)

    KENT: It's all right, a lot of really good resources. And now, Tobias.

    TOBIAS: Yeah, my links are the webpack 2, and a link to RollupJS, which makes the tree-shaking popular. And my tips are try to use explicit dependencies. Don't use globals, don't use the provided plugin for stupid stuff. And try to use code splitting because it's just cool.

    And the tip is, you can try webpack 2. It's pretty stable, if you don't mind small little bugs. But if you like a fixed version, it should be stable enough to compile you ECMAScript 6 modules. And I have a slides repo at my GitHub account. It's some cool tips about advanced webpack tips about stuff, like, everything. And I have a cool gist about caching in webpack. It's linked here. And if you want to know everything about webpack, you can look at the configuration documentation page. It has everything, every configuration. And it's a good idea to just skim over it or read something and you'll find cool stuff there.

    And my advice is to don't use boiler plates from other people, but to read them to find good ideas and how they do stuff. But don't try to start with boiler plates. It's too easy and you just don't understand the concepts and don't learn how webpack works. And so it's better to read them, but build your own boiler plate.

    Also a cool link with webpack examples folder in the webpack repo. There are many examples for special cases about code splitting or (mumbles) chunk, or something like that. Also I can advise to, if you have a pretty big application, you could or you should use targeted builds. You can do multiple builds and target the builds for use, for example only include the language you're targeted for. And so it's a great bundle to the users. And a cool tool for building targeted builds and to build multiple rapid configurations in parallel is parallel webpack plugin, which just uses, it processes to build multiple configurations in parallel. So it's cool.

    And my picks are the analyze tool of the webpack. You can put your stats file into it, and it gives you hints and visualizes your module tree and the chunk tree. And it's cool to find weak spots in your dependency graph. And because I also want to advise to pick another language, is Rust. It's cool and interesting concept. And you can read the documentation, it's pretty fun. It's pretty cool. So that was everything.

    KENT: Awesome, yeah that was lots of really good tips and picks. Those will be on the website. This might take me a while. (laughs) No, they should be on the website in like 24 hours, hopefully, so whenever I can get to it.

    So I'm gonna wrap us up. Thanks everyone so much for coming. This was a really interesting conversation about webpack, one of my favorite technologies. I wanna give a shout out to our silver sponsor, Trading Technologies. They are hiring, so check them out. If you or your company is interested in sponsoring, then check out the website, there is a link there to sponsor. And even if you're an individual who wants to sponsor, we have this appreciation level sponsorship that's like really cheap and stuff. People have done it, and we appreciate you.

    And then if you have suggestions for the show, for topics or guests or both, go to suggest.javascriptair.com and that will take you to a form. And then feedback.javascriptair.com will take you to another form where you can give us feedback on this show or past shows that we've had, or the entire show in general. We really appreciate that feedback. And then we do have an email newsletter that goes out after the show, normally the day after. Go to jsair.io/email and you can get show notes and highlights from the show directly in your inbox.

    And then, as always, remember we are a weekly show. I'm not sure what next week's show is going to be quite yet, it's not nailed down, but it will be great. Check us out next week, same time same place. And follow us on Google+, Facebook, and Twitter to keep up with the latest. And with that I think we can say goodbye. So, thanks everyone, this was great!
  `,
}
