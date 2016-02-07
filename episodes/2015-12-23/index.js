/* eslint max-len:0 no-trailing-spaces:0 */
export default {
  title: 'Babel, the JavaScript Compiler',
  hangoutId: 'coi555uqlhl7vsdspafjj05k4dc',
  guests: [
    {
      name: 'Henry Zhu',
      twitter: '_henryzhu',
      links: [
        `[JSCS](https://github.com/jscs-dev/node-jscs)`,
        `[Sebastian’s JSConf Talk](https://www.youtube.com/watch?v=rKuNbEwoQfQ)`,
      ],
      picks: [
        `[AST Explorer](http://astexplorer.net/)`,
        `[babel-eslint](https://github.com/babel/babel-eslint)`,
      ],
    },
    {
      name: 'Logan Smyth',
      twitter: 'loganfsmyth',
      tips: [
        `Join us on the [Babel Slack](https://slack.babeljs.io/)`,
      ],
    },
    {
      name: 'Amjad Masad',
      twitter: 'amasad',
      links: [
        `[Meteor Fibers](https://meteorhacks.com/fibers-eventloop-and-meteor)`,
      ],
      tips: [
        `Use interface-like design and dependency injection for testing`,
        `Promises / async functions`,
      ],
      picks: [
        `[Antifragile by Nassim Nicholas Taleb](http://www.amazon.com/dp/1400067820/)`,
        `[Emacs](https://www.gnu.org/software/emacs/)`,
        `[repl.it](https://repl.it)`,
      ],
    },
    {
      name: 'Sebastian McKenzie',
      twitter: 'sebmck',
      picks: [
        `[Sainsbury's Chocolate Flavoured British 1% Fat Milk](https://www.sainsburys.co.uk/shop/gb/groceries/sainsburys-fresh-chocolate-flavoured-milk-1l)`,
      ],
    },
  ],
  past: true,
  description: `
    Tons of people use Babel. With the release of Babel 6,
    it is now a language platform as well as a transpiler.
    Join us as we talk about the ecosystem of Babel plugins,
    ASTs, and all of the neat stuff that you can do with this
    amazing tool with some of the core contributors to the project.
  `,
  youTubeId: '1w_W5cd8qRE',
  podbeanId: 'ec6u9-5b3066',
  host: {
    links: [
      `[Why is Babel a Monorepo?](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)`,
      `[The Babel Plugin Handbook](https://github.com/thejameskyle/babel-plugin-handbook)`,
    ],
    tips: [
      `Create dev tools for your work project.`,
      `Look into [babel loose mode](http://www.2ality.com/2015/12/babel6-loose-mode.html)`,
    ],
    picks: [
      `[Misunderstanding ES6 Modules, Upgrading Babel, tears, and a solution](https://medium.com/@kentcdodds/misunderstanding-es6-modules-upgrading-babel-tears-and-a-solution-ad2d5ab93ce0#.h01yzretx)`,
      `[Clearing up the Babel 6 Ecosystem](https://medium.com/@jcse/clearing-up-the-babel-6-ecosystem-c7678a314bf3#.ntennmo73)`,
      `[Google Music](https://music.google.com)`,
    ],
  },
  panelists: [
    {
      twitter: 'dan_abramov',
      picks: [
        `[Tree-shaking with webpack 2 and Babel 6](http://www.2ality.com/2015/12/webpack-tree-shaking.html)`,
      ],
    },
    {
      twitter: 'getify',
      picks: [
        `[Matt Mullenweg to WordPress Community: “Learn JavaScript, Deeply”. Here are some resources for doing that.](http://wesbos.com/learn-javascript)`,
        `[Reddit Thread](https://www.reddit.com/r/ProgrammerHumor/comments/3xyaos/well_f_you_too_kyle_simpson/)`,
      ],
    },
    {
      twitter: 'pamasaur',
      tips: [
        `Take some time to reflect on the past year/2015, [Jessica Paoli recently published hers](http://jes.sica.me/post/135727838328/2015-year-in-review).`,
      ],
      picks: [
        `[Advent of code](http://adventofcode.com/)`,
      ],
    },
  ],
  transcript: `
    KENT: Hello and we're live with JavaScript Air. My name is Kent C. Dodds, and I'm your host. And today, we're going to be talking about Babel, the JavaScript compiler-transpiler thing. And so before we get started into our show and before I introduce everybody, I'm just going to give a quick shout-out to our sponsors. 

    Egghead.io is our premier sponsor, and they have a huge library of bite-sized web development training videos, like, five minute videos. You can check them out for content on JavaScript, Node, Angular, and React, and all kinds of stuff. Then there's Frontend Masters, they're also a training site. And they're a recorded expert-lead workshop with courses on Advanced JavaScript, Asynchronous and Functional JavaScript, as well as lots of other awesome courses about frontend topics. I recommend you check them out; you'll have a lot to learn there. TrackJS reports bugs in your JavaScript before your customers notice them. And with their telement... I can't ever say this word properly, telemetry (laughs) timeline, you'll have the context  to actually fix the bugs that it reports to you. So check them out and start tracking your JavaScript errors today, at TrackJS.com. 

    Awesome. And so for anybody who's watching live, you can tweet with the hashtag, #jsAirQuestion and then you can... at the end of the show we'll answer any questions that you have, with that hashtag. And if you just want to tweet about the show in general, the hashtag is #JavaScriptAir. And remember we're a weekly show, and so next week, we're going to have a show called Functional and Immutable Design Patterns in JavaScript. And we'll have Dan Abramov and Brian Lonsdorf to talk about functional programming in JavaScript, it's gonna be sweet! And as always, follow us on Twitter, Google Plus, and Facebook to keep up to date with the latest and the greatest. Awesome. So let's go ahead and introduce everybody. We have Kyle Simpson. And Pam Sell... 

    PAM: (waves) "Selle."

    KENT: "Selle?" Oh, my goodness. Is that right? 

    PAM: You've said it right before, Kent. It's okay. (laughs) 

    KENT: Oh, my goodness. I am so sorry. Well, it is "Selle," (laughs) wow. Okay. And I'm your host, Kent C. Dodds. And then we have a couple awesome guests for us today, Henry Zhu. 

    HENRY: Hey there. 

    KENT: And Amjad Masad. 

    AMJAD: Hey!

    KENT: And Logan Smyth. 

    LOGAN: Hi. 

    KENT: And that's "Smyth" with a "y," if you're curious. Which I think is actually kind of cool. So let's go ahead and get to know our guests a little bit really quick. Henry, do you want to give us an intro to yourself? 

    HENRY: Yeah, sure, I'm Henry. I'm "hzhu" on GitHub. I work at Behance, which is part of Adobe, doing JavaScript. I got started in open source about a year ago. Started contributing to JSCS, which is a style checker, similar to JSLint and ESLint. Learned a lot about AST's and that's what sort of lead me to work on Babel. So, yeah. 

    KENT: Cool, thank you for your work. Amjad, can you introduce yourself for us? 

    AMJAD: Yeah, I work at Facebook. I work on the JavaScript infrastructure team. And we maintain the core tools and things pertaining to the JavaScript language. So I work a lot in Babel and I ended up also contributing to that. And yeah, that's it. 

    KENT: Cool. Thanks. And Logan? 

    LOGAN: Yeah, so I work at a company called Inkling, and we have a cloud publishing platform for companies to basically make documents and distribute them to specific groups of people. Beyond that, I've been working on Babel, kind of in my free time, since about February of last year. And I kind of got into it when we were transitioning some of our own code bases to Webpack. I remember talking to you, Kent, way back on the webpack GitHub room. And then I kinda transitioned in there to kind of helping out doing support for Babel. 

    KENT: Cool. Yeah, that's exactly how I got into it too, way back in January, when it was still six to five. (laughs) So also, if you're not watching and you're listening, just know that Logan has the Christmas spirit alive in his home. I like the Christmas tree there. 

    LOGAN: (laughs)

    KENT: So sweet, let's just as a good kickoff question for our conversation today, let's give a quick intro to what Babel is and kind of a history about the Babel transpiler. Anybody wanna take that? 

    LOGAN: I guess I can. I don't know. (laughs) So let's see, yeah, Babel is an application for basically taking any kind of input JavaScript source code and transforming it, running some subset of transformations on it. And it comes with kind of a substandard set to convert, for instance, ECMAScript 6 code into ECMAScript 5 or ECMAScript 3, to support older browsers and still allow you to use kind of more advanced functionality in the web today. 

    And history-wise, I guess it started about a year ago. And Sebastian started it and kind of took off pretty much immediately. And then the rest of us have come on slowly over that time. So Sebastian came on and then we have James Kyle. And the rest of us have kind of joined on since then. 

    AMJAD: I think about it as a compiler tool chain. If you're familiar with kind of LLVM or any of the other compiler tool chains, they, you know, ship with a bunch of tools that help you to build the compiler. So I think that's what Babel is, it's basically like a Lego; there's like building blocks of different packages that you can use to string together your favorite type of JavaScript that you wanna build. And that also means that you can build tools on top of it. There hasn't been examples of that, but I think we're gonna start seeing more examples of that. In addition to the compilers, I think you'd be able to build a linter, or you'd be able... well, Babel sort of backs, currently, ESLint through Babel ESLint. But you would be able to build all sort of tools that you wanna be able to parse the code, and do some kind of logic on the code. 

    KENT: So I'm kind of curious; so people who don't know the history of Babel or the recent history, Babel recently moved from transpiler-only, from like esnext to the current version of JavaScript, or the ECMAScript standard. They moved from that to more a general tooling platform. So, can you talk about how and why that decision was made to kind of distance itself... well, not distance itself, but like change from just being a transpiler to a JavaScript tooling platform? 

    HENRY: Yeah, actually... oh you can go. 

    AMJAD: No, go ahead, go ahead. 

    HENRY: I guess that decision was like kind of... it's been a while actually, it was like February. So we, I think, a lot of times, the tools that we use rely on a parser and if we're going to have to re-implement everything in ES6, then you have to wait on all those tools to get updated. And so if Babel becomes more of like a platform that other people can use, then anytime Babel gets updated, other tools can just use that instead of re-implementing some new features, stuff like that

    AMJAD: Yeah, I think that's mainly it. I think there are a few other reasons. I think talking to Sebastian, he mentioned also that he kind of got tired of bumping the major version every few months. Because you had to do a breaking change because of the language. And if you're a transpiler, you kind of have to do that any time the spec change, anytime you wanna add a new feature. But if you wanna build a platform, then you'll be able to maintain these packages separately and you don't have to kind of like, do these major version bumps every couple months. And yeah, I think what Henry mentioned with regards to the tooling is a great point. I think a lot of people in the community found great value in using Babel not just as a transpiler, but as a parser, as an (mumbles) visitor. And all these kind of things then naturally kind of evolved to this thing that is more of a tool chain, than just a transpiler. 

    KYLE: I actually have a question on that particular point. So I think there's been some confusion, in the wake of the Babel 6 release, about what the strategy or the intended strategy, I guess -- best practice, maybe is the best way to say it -- for working with features that are not yet fully standardized, oftentimes, referred to as the "stage zero" or maybe "stage one." And I think that strategy shifted a bit with the release of Babel 6. But I've seen some people have some confusion around that, so you can speak specifically to what changes were made there and what we're supposed to be doing with respect to non-standard features? 

    LOGAN: Let's see, do you wanna clarify what you mean by, like, how to use them? Or what you mean by that exactly? 

    KYLE: Yeah, so specifically, I think some of the confusion has been around if I implement a stage zero, sorry... using a stage zero feature in my application in a particular way and then the spec changes and that feature changes. But the platform now allows me to continue to use the old implementation of that feature basically forever. There's no like requirement that... to stay up to date with the rest of the stuff, there's no requirement that I update that thing. Which I think some, perhaps, at least my worry, is that that will tempt people into basically getting locked into an old version of a feature and staying there perhaps forever. So I'm just curious about how that plays. 

    AMJAD: So I think more recently, we've been more careful and kind of merging things that are stage zero or are even pre-stage zero's. I think there was a really cool plugin strictly for the Python operator. And it's like, part of me want that and would want to play with that but I think you mentioned that the move to Babel 6 and kind of like trying to build a stable platform, we have to say no to a lot of these things. It's unfortunate that Sebastian is not with us to kind of like give the official stance of Babel on this, because I can't really speak entirely to that. But my understanding is that we want people to upgrade whenever there's a change in the spec. We'll upgrade the compiler and we'll encourage people to upgrade. The way we've handled that at Facebook (and we're kind of trying to also teach the community about that), is using Codemods. And when you have the ability to Codemod code, you'll be able to aggressively adopt features, but whenever these features change, you'll be able to Codemod these tools. And so... 

    KYLE: For the benefit of our audience, can you explain for everyone what a Codemod is? 

    AMJAD: Yeah, sure. So Codemod is given an AST pattern, you want to transform it to another AST pattern. So it's kind of like when you use Babel to transform ES6 to ES5. But in this case, it doesn't have to be compiling to a lower level of a language. It's more like from one language... from one syntax or one language feature, to another. So a good example is... or you can do it in reverse even. A good example is if you have... 

    SEBASTIAN: What's up? 

    AMJAD: Oh hey, (laughs) if you have... 

    KENT: Oh snap! (laughs) 

    HENRY: Surprise. (laughs)

    SEBASTIAN: (laughs)

    KENT: For our audience not watching and listening, Sebastian just joined us. 

    KYLE: We invoked him and he came out of the ether world. 

    (laughter)

    SEBASTIAN: I have no idea (mumbles) especially in a Livestream. I think it's like delayed a lot. 

    KENT: Well welcome to the show Sebastian. (laughs) Amjad, you were talking... did you wanna finish your thought? 

    AMJAD: Yeah, so Codemods. So for example, if you have anonymous functions and you wanna be consistent across the codebase, you can transform anonymous functions to arrow functions, in some cases. So this is an example of a codemod. So, we try to... whenever we adopt a feature. So we adapted classes really early on and we ended up using an early version of the spec. When the time came to upgrade to Babel, we had to do a lot of codemods in order to upgrade our class syntax to the new class spec. 

    KYLE: So just for a further point of clarification here, a codemod, if I understand you correctly, is a one-time transformation done to the code to pull it from one version of the spec, say to an updated version. It's not the same thing as the Babel transpilation, which is kind of an ongoing thing. This is a one time "move you from the old to the new," sort of thing, is that correct? 

    AMJAD: Yeah that's a great way to put it. 

    HENRY: And it's like automated rather than you manually doing everything one by one. 

    LOGAN: And it's much easier than doing like a find-replace in your codebase or trying to set in a bunch files or something. Which is pretty much impossible, more complicated stuff. 

    KENT: I totally just spent like two hours doing a find and replace yesterday. I totally should've written a codemod. Sometimes it feels like it would be easier, but I just need to do it. 

    AMJAD: Well, we can put in the show notes but there's a tool that we built internally by my coworker Felix, it's called js code shift. And it's a really nice tool. It gives you like a jQuery-like API for managing ASTs, which I think is pretty sweet. 

    KENT: Cool! 

    KYLE: So the idea then (just to circle us back to what my line of questioning was about and Sebastian you probably have some thoughts on this too), my line of question was basically, why or what is it that we're supposed to be doing with the new Babel 6 release that might be different than how we use to manage working with a feature that maybe isn't fully standardized yet and might change? And should we be locking ourselves into older versions of it or updating? And Amjad suggested that codemods are a way to keep yourself up to date. But I'm still kind of curious, since the platform doesn't require you to do so, what do you think in terms of whether or not people will or if they'll stay stuck on an older version, for example? 

    SEBASTIAN: What answer do you want specifically? Like list a specific example? 

    KYLE: Well there have been several changes to some of the stage zero features, so I'm not calling one out in particular, but I know that stage zero features do tend to evolve over time. 

    DAN: Like decorators. 

    KYLE: What's that? 

    DAN: Like decorators.

    KYLE: Yeah. So basically I'm just suggesting if that has happened now or if it happens in the future, what is the way that normal developers (ones that you know aren't in all the IRC chats and things), how do they know what they're supposed to be doing and being encouraged to upgrade? 

    SEBASTIAN: So is this like about, what's the incentive to upgrade to a new proposal, if you can just continue using... 

    KYLE: Yes. 

    LOGAN: I guess it's what is the official position if Babel had to introduce like a breaking change essentially, right? 

    SEBASTIAN: So right now, like plugins, everything in Babel kind of operates in one version (mumbles), so any breaking changes would have to kind of be, either everything would have to be bumped or would have to introduced having separate plugins or new versions, like independently, relative to the major version. So I guess like in the future, if that were ever an issue, like if there was a breaking change to one of the transforms, we could just bump the major for that particular plugin. Or we can just like introduce a completely new plugin. I guess that I don't see it as like a bad thing. Like a breaking change to a feature and you're like using the old version of it, then like there's no immediate problem for that, besides just potentially being annoying in the future to deal with. But I guess that's kind of like when you're adapting extremely early stuff that has little chance of like actually becoming standardized, or will never become standardized, and that's kind of like a risk that you're taking on. So I guess it's not like something that will sneak up on you, it's kind of a thing that will probably happen and you kinda have to be aware of that. 

    KYLE: So I guess where I was headed with this question was actually the bigger one, which is, do you view the platform as something that can... I mean it definitely can, but should it be enabling developers to basically do their own experiments completely outside of TC39, come up with their own invented syntaxes, for example, build plug-in's for them and perhaps start to fragment out... I mean if a community built themselves around a whole new syntax and that wasn't on any standard's track and wasn't going to be, is there splintering concerns there? Should the platform do anything to help shepherd that back to the standard? Or are we totally agnostic of that? 

    SEBASTIAN: Babel has not and will not implement anything that isn't on the standard's track. Like, yeah, that's more or less like you can't arbitrarily add new syntax. I guess there is one exception where there's plugins for JSX and Flow. They aren't enabled by default, like at all, so you have to be really explicitly opting into those. And those are something that... them not being standard is like a forefront of them projects; it's kind of like why that syntax exists. That's why it's not being actively proposed. So I think it's fairly safe to use those since they're kind of a different development cycle outside of the actual language. But you can't, like, somebody if you wanted to add some syntax to Babel, you would actually have to add it to the core parser, you can't like, there's no support for parser plugins, so I don't think yeah. So being fearful of somebody adding some new syntax and it suddenly become popular, that's like technically not possible currently. 

    AMJAD: I think also Kyle's question is like maybe they use Babel to build their own syntax and they have their own in-house syntax. And I think we're pretty agnostic about that. I think we provided tools for people to do that. I mean, you never know where the next innovation in JavaScript is going to come from. I think everybody in the community know like... a lot of the people in the community really like JSX. And it kind of evolved off from Facebook experience. So we're not gonna be elitist about this and say we're the only one. Or even TC39 is the only one that will come up with all the (mumbles). But you know, it's a really high bar. And if you want to go and innovate in this thing, you may end up in your own corner of the world. And like you will not have a lot of support of people. 

    One thing that comes to mind, I think like the Meteor community, like they implemented Fibers for example. And that was an interesting experimentation. But I think now they're coming around, they're going to like change things to async (mumbles) and generators, although I'm not entirely sure. But that's an example of a company or project that took a different route but then they route it back. You know there are failures and there are successes in this domain, but I think we're pretty agnostic about that. 

    KYLE: So my point I think actually could be made with a thought experiment around JSX. So, as you say, a lot of people are super excited about JSX and it is definitely growing in support, it got an early boost by being added to Babel, back in, I forget... I guess it was version five. But it got an early boost with that; that certainly helped things a lot, I would say. But if Babel, as it exists today, with your mindset of "we don't add non-standard stuff or if we do, the bar is super high," if that had been true before JSX was invented, could someone really have actually used the Babel platform to do that? And if that's a yes or no question, I think there's tradeoffs on either sides. So that's really where I'm getting at is how do we balance staying on a standard track while allowing people to experiment? 

    SEBASTIAN: As in how we allow people to experiment the language itself? 

    KYLE: Yeah, I mean with my thought experiment around JSX; could JSX be invented today and built on the Babel platform, would it have still been able to gain the momentum that it needed given that you're saying there's, "really this high bar, which is that we don't allow compiler plugins, so you can't actually invent whole new syntax." 

    SEBASTIAN: Yeah, so... 

    AMJAD: Yeah, go head, no go head. 

    SEBASTIAN: So JSX was... I'm not sure if this is what you specifically said, but JSX support was basically in a previous Facebook compiler called JS Transform. So basically, (and JS Transform has been around for years) and so that's kind of like saying that JSX was like coupled to Babel, I think it's kind of a bit disingenuous since it was... at the point when Babel or (mumbles) React actually added JSX, JS Transform was like predominantly what the React community actually used to compile JSX, now it's Babel. But yeah, I guess like it is harder for people to experiment and innovate on their own things. 

    But it just comes to like the reason that parser plugins actually haven't been added to Babel isn't really like a philosophical question or a question of ideology; it's more about like, technically, how does that work? Having pluggable parsers like actually kind of like a fairly large field research. People, like, write their PhD's on how like GU architects having a pluggable parser. Since it isn't like a trivial thing, there's ways that you can kind of simply do that, but there's a whole lot of hidden gotcha's. So the barrier to actually doing that is purely technical. So if anybody has any suggestions on how to do that, then... 

    AMJAD: Yeah I will also add that the... you mentioned in your question that JSX got a boost from being in Babel. I think it's more the other way around. I think Babel got a boost because it was the official compiler for React. And the fact that it was in Babel did not get the community to adapt it. The option was already happening before it was... before Babel was a thing, actually. 

    KENT: So, I actually have a kind of a technical question about this. When there are proposals like the pipe operator, for example, that's like totally a new syntax. How do you get that added to the Babel parser? Like how do you make it a plugin to, you know, to make Babel be able to parse that and actually use that new functionality? How does that happen? 

    LOGAN: So at the moment that's not something that you can directly achieve with Babel, I guess. Like, adding flexibility to the parser isn't really something that we support. And so like to actually do that and experiment with that, you have to essentially make a clone of the Babel repo entirely yourself and then essentially, have a local development environment with Babel that you've changed to support that functionality. And that's essentially what happened with the pipe operator that someone was working on. 

    KENT: I see, so if it's new... 'cause lots of plugins basically just move things around or they'll like add some code here or whatever. So if it's something that's new, syntax wise, then it needs to... there's a change in the parser that needs to happen for that to be enabled, is that right? 

    LOGAN: Yeah, essentially. And that's part of what Sebastian said around it just being a very difficult thing to get right. And I think in Babel 5, you could kind of screw around with the parser a little bit, but it just... you know it's not an API that you'd wanna make public, 'cause like then you'd have to support it and actually make it work well, and you know, yeah. (laughs)

    KYLE: I guess I would just observe that, you, as a team, managing the project, do actually have to navigate that because there's always going to be new syntax proposed. So managing that internally must be difficult. And probably, if you were able to achieve what Sebastian said, this really difficult thing of a pluggable parser, that would probably make your lives easier, as well as others who would like to experiment as well. 

    KENT: Good luck guys. (laughs) 

    LOGAN: (laughs) No problem. 

    KENT: So I actually had a question about managing this project. So if anybody's been to the Babel repo on GitHub, you'll see it is what has been turned as a mono repo. So there's like tons of the Babel plugins, like the official Babel plugins, live in the Babel repo. And I wanted to ask about like what was the reasoning behind that decision, having multiple npm modules in a single repo? As well as also moving to Phabricator rather than GitHub issues. What kind of drove that? 'Cause I think we have some listeners who would be interested to know how other projects are managed. 

    LOGAN: I guess for me it's kind of an interesting... as far as the mono repo goes, it's really useful 'cause it offers people one place to go look, which I think can be like a really nice benefit. Babel has so many sub modules that it could be, I would think, really hard for people to know where to look and know where to begin when approaching the codebase. So I would hope that having a single location for that will help a lot. I think it also just helps us keep everything kind of centralized and not split across tons and tons of GitHub projects, yeah. 

    SEBASTIAN: Yeah, that was kind of like the major reason. I guess Babel 6 kind of like took things to a whole new level in terms of like modularity, having things in all separate modules. And having those across a whole bunch of repos is like really... it's like difficult for the development environment, difficult to test and difficult to iterate upon. I've heard this from like some of the contributors to Browserify, they have Browserfiy like split up into a whole bunch of different repos. It's kind of difficult to make one change, you have to like npm link everything and run the tests individually and you have to make sure that everything's set up correctly. Whereas in, if you're just having everything in the same repo, it's got the exact same kind of like test runner for everything. It makes integration tests much easier. 

    And also yeah, it didn't mean to have like one build system, one way of linting. If somebody has an issue or a pull request, they just send it and they can update all different modules. Otherwise, like synchronizing kind of pull requests across different repos isn't really like a first class thing. With GitHub, you can kind of, like merge them all at the same time. And then you have to make sure that when you publish them, they've all got the exact same versions and they're allowed certain functionality. And then you just like go down this massive rabbit hole where, like, this problem kind of exists even when you have just kind of like a handful of modules. Like we extrapolated out to things like 130 modules or something. It's a really, really big issue. Since if you want to contribute, you kind of have to clone everything, you're not quite sure... potentially, you might be working on something and then realize, "Oh, hey it actually is in this module." And you have to go clone that and then you have to like build it and then you have to test it, and then you have to make sure it's linked properly to the module that you're previously testing. So there's like a whole lot of advantages having the mono repo. 

    LOGAN: Yeah. And there's 120 modules. 

    SEBASTIAN: Close enough. (laughs)

    KENT: That is so amazing! Holy cow, I knew it was a big project, but it's much bigger than I expected, like how many... I guess I could just look, but how many contributors do you have? Like do you have a ton of contributors who are building this thing? 'Cause that's got to be like a ton of code. How does the management of that piece work? 

    AMJAD: Until very recently, I think it was mostly Sebastian. And we just... At least for me, I recently started seriously contributing to the project. I think it was also Sebastian, sorry and Kyle. And sorry, Dan and Kyle. And until recently, it was also harder for contributors to jump in and kind of start contributing because you know, everything was in  Sebastian's mind. But I think we have more documentation now, the tools are really easy to use. Because it's a mono repo, there's some challenges to how to manage that project. But it's more streamlined how to, you know, change a plugin and how to publish a release and things like that. 

    LOGAN: I would also say that part of that was that if there were bugs, until reasonably recently, Sebastian would have them fixed before you had time to read the bug, so. (laughs)

    KENT: Well thanks for all your work, Sebastian. (laughs) That's awesome. It's really amazing. So I wanted to ask a little bit. I should've looked at the stats before, but I imagine there are still a lot of people using Babel 5, because the upgrade path to Babel 6 is not entirely straight forward, especially if you're relying on things that Babel 5 let you do, and Babel 6 fixed. I have something in particular in mind. So maybe you can take a quick second to talk about some of the differences in how things used to work and how they work now, and maybe some of the reasons behind some of those changes. We've kind of touched on that a little bit, but more specifically, what are the differences between 5 and 6? 

    HENRY: I guess for one thing, in Babel 5, stage two was on by default and in Babel 6 none of the plugins are on, so you have to opt in to everything. But we also made the equivalent of some of the options like stage zero by making presets. So you know, we have the ES 2015 preset and you can include the stage two preset to make it similar to what it was before. 

    LOGAN: Yeah, I think our documentation could still use some work for helping people transition from 5 to 6 as well. There's still a lot of people that we get, you know, in our support channels, just asking kind of relatively straight forward questions where it's just our documentation isn't quite up to par to help guide people. 

    AMJAD: I like how we went full circle. Like the project started as 5 to 6. And now you know, we want people to upgrade from 5 to 6. (laughs)

    KYLE: I have a question, since there's a lull here. So, the movement of Babel to Babel 6, and the change to the custom configuration, I'm curious if that had any movement towards, or if you have anything else working on the notion... it's bantered about in various discussions, but basically, "conditional transpilation," the idea of not transpiling everything all the time, but having some sort of way to more intelligently know whether a transpilation needs to happen, maybe based upon an environment or something. Curious if you could speak more to that? 

    SEBASTIAN: So is this about like, if a browser supports classes and not compiling classes? 

    KYLE: Yep, that sort of thing. 

    SEBASTIAN: Um, yeah I guess there's like nothing stopping you from doing that now. This is kind of related to the previous question, like, kind of the differences between Babel 5 and 6. So in Babel 6, everything is optional. Previously, in Babel 5, there was kind of like this weird notion where there was stuff enabled by default and then you could disable that depending... there's like seven different ways you could change whether transforms actually ran. There's the blacklist, so you could blacklist the default enabled transforms from running. There was the whitelist, and then there was optional. So there was optional transforms that could be ran. And then we had a stage option, so you could like... or transforms that (mumbles) certain stage and being able, so it's kind of like a spaghetti way you couldn't quite tell. Wasn't always obvious what was actually being ran, what kind of transforms were being ran. 

    So in Babel 6, everything is very explicit. You have to specify exactly like what you want. We've added presets or kind of like groups of plugins. So you don't have to be... for like the general purposes. And so I guess yes if you really wanted... like I don't think there's any specific in Babel that could be added to better facilitate custom kind of compilations; certain browsers support certain things. There are some kind of potential issues with doing that though. You have like... you would have just so many different browser bundles that you would be delivering in the client. So it'd be kind of an inconsistent environment. 

    We kind of already have this, say if you're relying on like certain semantics that Babel might not compile correctly, then the native version might not behave as you expect. So you've got like inconsistent environments across like different browsers which makes debugging like a really big pain. One thing I kinda see why you would essentially wanna... the one thing that makes that... like the environment more... I think it justifies making that everything in the environments more complicated would be if there was specific features that, just the performance was much better in the native equivalent, and it'll probably most likely get to that point. Where like everything that's in ES 2015 will be either the same speed or much faster than the transpiler equivalent, cause browsers will optimize them better. But I'm not sure if there's... Do you have any specific things or suggestions that would make it easier to do that in Babel? 

    KYLE: There was a discussion thread that I saw at one point a while back, about an idea that I thought was being driven by the Babel team, which is why I brought it up to ask, so maybe it's not being driven. But there was an idea, at one point, that there would be a way to sort of list in your transpilation command the various browsers or versions or user agent strings that you care to support, and it would sort of automatically know what it needed to transpile or not, or something of that nature. So I hadn't heard anything in a while about that and I was curious if the Babel 6 had laid foundational work for that or if that was not actually an active thing. 

    SEBASTIAN: Yeah, so that's kinda going in the opposite direction from that. So that was, yeah that was an open issue where it was kind of being discussed about how we could possibly make that work. So it was, yeah, you specify the browser you want in the kind of like the intersection of that was supported and excluded that. That worked when Babel had like an opinion on how it was actually going to compile your code. Now that like the core of Babel... Like babel-core is actually extremely thin, so it doesn't actually (mumbles) on any plugins. So we could potentially like make something like that in the core of Babel that just used core Babel plugins. But I'm not quite sure if that's... 

    LOGAN: I'd say in Babel 6, because we have this kind of preset mechanism that allows you to specify sets of plugins to be enabled all at once, you can certainly have a preset that would take options for specifying a list of browsers or certain Node versions. And like take those options and then list a set of plugins based on those options. I think at this point that's potentially just a really hard list to maintain. And I don't think that that's necessarily something we'd want to maintain in the core Babel repo. But it could certainly be something that would live in the community as like a separate project. 

    DAN: I actually have a question about this. Do presets currently allow options? 

    LOGAN: So at the moment, presets can pass options to plugins but at the moment, presets don't have options. But we do have an issue open about that, trying to decide if there's a good way to approach that. And so it's not exactly possible at this moment but you can still probably get it to work. 

    DAN: I also wanted to ask Sebastian, he's probably sick of this question but I'm wondering how do you feel about moving to Phabricator? What issues you had with GitHub issues and were they solved by the move to Phabricator? 

    SEBASTIAN: So I haven't actually... So basically, Babel kind of grew to the point where there was like a whole lot of issues coming in. That they had like lots of them per day. And so GitHub, I don't feel as if it has the facilities like to handle, like really large projects, at least easily. There's just like really small features like the ability to merge issues, or even like making users when they create an issue, like specify certain things, so like being able to have custom fields. There was just... It got to the point where basically in the Babel repo, we wouldn't allow questions or support. This is kind of like to keep everything clean, would say go to Stack Overflow. There's usually better Google search visibility when you post stuff to Stack Overflow and so forth. 

    And there was like a really big message in the ReadMe. The ReadMe was like three lines. Nobody read the ReadMe. But it said, please everyone, (in bold), do not like post questions or support queries. Even in contributing.dm and like a really big heading, that I think may still be there. Like at the top, like, "Please do not post questions." But still people would post their stuff. 'Cause GitHub kind of encourages this, just like fire and forget mechanism, which it makes it really easy to report stuff, but also makes it really hard for the contributors of that project to kind of like manage everything. Especially when you're having like constant issues coming in and especially when there's like limited amount of people to kind of like support all these issues that are just flowing in. 

    And so, yeah I guess it kind of makes it sound like it was too easy to report issues, which is kind of the case. There's been a lot of complaints where Phabricator makes it more difficult to report issues. I'm not quite sure if that's valid since you don't even need like a GitHub account to report a Babel issue now. Like, you just login and there's literally like a button that says, "Report A Bug." And then you can like specify, like you're required to specify more information than you would've before. It's very explicit about what the issue tracker is actually for. Maybe like some of the others can speak as to what their experiences have been with it or whether like what behavior it encourages or discourages. 

    AMJAD: Yeah, I've seen previously, like there would be a roundtrip a couple of times, someone would report an issue and then we'd ask them, "What version of Babel are you using?" And then they'll reply, and then we'll ask them, "What plugins or presets are you using?" And then they'll reply. And then, "Oh, what is the input code?" And then you'd have this issue like a few days has passed and like you really haven't done anything about it. Whereas with Phabricator, you know, you can add fields that say, that asks the user, you know, "What version of Babel are you using? What is the input code? What is the expected output?" And things like that. So instantly when you report an issue, we have enough context to kind of go dig in and try to solve that bug for you. 

    LOGAN: Yeah I think just having even a small amount of friction encourages people, though not necessarily to not file bugs, but to take the time to potentially do some searching and see. So like, I would say on GitHub, we had also just a tremendous number of duplicates, where people would be... Where they're not necessarily asking a question 'cause they think something is a bug and then it's not, but you know, because they just wanted to ask a question, they didn't necessarily stop to take the time to like do a search or see if there have been previous issues around that. 

    So you know, we'd get to the point where if someone is confused about arrow functions or the behavior of this. You know,  I think we got to the point where we probably had 15 or 20 bugs around that, and Sebastian would always post like a list of 30 other duplicates. Like 'cause every time, we'd just go find the previous one and copy paste everything. And Phabricator has just actual merging functionality; so if there's a duplicate, we can actually just merge it in. And that is nice. It's also means that if we're merging things like if something is a bug and there's duplicates, then we can merge them together and that automatically moves subscriber lists for those bugs together into one. And it just kind of helps everyone keep staying together in one place. 

    AMJAD: It's almost like a full feature book tracker. (laughs)

    DAN: By the way, I have a tip for people looking at us right now, which is that if you find an old Babel issue link that's linked to GitHub, and I didn't know that, is that the ID's of the issues are all preserved. So you can just copy paste the ID of the issue at Phabricator BabelJS IO/t and paste that ID and you're going to see the same issue migrated from the top. 

    AMJAD: Mm-hm. 

    LOGAN: Yeah I think it's unfortunate that we lost those connections when we transitioned and I wish that there was a better way that GitHub had allowed us to do that, I guess. Those kind of issues are available or they're not, and there's very little else in between you can do. Even being able to leave the issue queue there but lock it or something like that would have been great, but yeah. 

    KENT: So we're kind of coming down on time with our show. And there are a couple other things that I wanted to ask and if Kyle or Pam or Dan, if you have any other questions, try to make sure we those in right now. But I think one thing that people will be interested in hearing about is what's the future plan for Babel? Is it going to continue to be like just for JavaScript tooling or like transpilation? Or is it going to replace stuff like ESLint? Is it going to add typing? That kind of stuff. What's the future there? 

    AMJAD: I think the move to Babel 6 was explicitly to let the community do that kind of work. I think what we've seen from our usage of Babel at Facebook is that... I think kind of mirrors also what the community has gone through, what we went through is that we have different teams using different parsers, different JavaScript tooling and we kind of wanted to streamline all that and use the same thing. And the benefits there are obvious; one thing is that when you add a new language feature, all the other tools will get it for free. And you'll be able to work on the codebase without errors, like syntax error, async, unexplainable keyword. Something like that when you add a feature like async functions, automatically all the tooling will continue to work with that feature. 

    And you know, we had different people writing different transforms, different plugins, different tools. And eventually, when we've made everything into Babel, even if you wrote this one off-script, it will continue to work forever. And that's the kind of thing that we want. One of our major frustrations with ESLint was like... and Esprima, was how slow they were moving. Every time we added a new feature, we have to go to the bug tracker and open an issue and then talk with the contributors. And we also had to fork Esprima because it was very, very slow moving. I think now they picked up pace again but for a while, it was really moving slowly. 

    And so right now, Babel is gonna give you all the tools and libraries that you need to build whatever tool that will act on AST's. So example, scope tracking. I remember everyone at Facebook who was writing tools had to do their own scope tracking; had to like lock AST, look at every variable, and then go and like count every variable that referenced that variable. So, you know, that's wasteful. And Babel kind, for example, does that for you and does a bunch of other stuff for you. So if you wanna write a linter, if you're not satisfied with the tools out there, you can just easily npm install Babel core and start writing the linter of your dreams right now. And you know, we have a few projects internally that we're working on, on top of Babel, and hopefully we will be able to release them. But I would assume, like, in the future, to see more things happening in the ecosystem and the community rather than Babel core itself. 

    KENT: Thank you. So I think we're going to jump to Twitter questions, unless one of our panelists or any of you guests have other things that you wanna talk about before we wrap up. 

    DAN: I wanted to ask if there are any plans for performance improvements in terms of some futuristic stuff. Like, I don't know, transpiling just the parts that change inside the parallel or something like that. Is it possible? 

    AMJAD: I don't think the bottleneck is the generation right now. I think a lot of the bottleneck used to be in the passes, the plugin pass in Babel 5. Every plugin is its own pass and that kind of like makes it really, really slow. In Babel 6, plugins are automatically merged. Actually, everything, presets and plugins are automatically merged. We're thinking about potentially making presets their own passes because that's been causing some issues. But I think if you switch from Babel 5 to Babel 6, you'll see, you know, a big performance boost. I don't know, do we have anything planned Sebastian for any more performance boosts? 

    SEBASTIAN: Probably. I don't know, nothing in particular stands out in terms of like what we can optimize next. But I guess like we obviously care about performance and if we can make it faster then we'll try. 

    LOGAN: I know that there were a few performance improvements that we landed in Babel 5, that were just general. They weren't necessarily large architectural changes, but were just kind of optimizations so I'm sure there's still stuff like that left in Babel 6 that we can do as well. 

    AMJAD: Yeah I think it's already impressive where we're at now. I remember when we were switching from JS Transform, which is purely like a string-based compiler, basically you lock AST and push to a string (laughs) which is very janky. 

    And you know, there was like a lot of skepticism around, can you actually get a compiler architecture to work as fast as this string-based approach? So our compiler architecture basically is a parser, transformer and then generator. This is the usual architecture that compilers go for. And the skepticism was like can it be as fast as the string-based one? And we actually were able to hit a milestone that we were as fast as the string-based one. So maybe we're even faster at this point. 

    KENT: So I think we should probably jump to Twitter because we're really coming down on our time and we do have a couple of questions here that I think we should look into. Sebastian actually asked the first one, "Why would I use Babel over TypeScript?" And actually, maybe that was a troll question, but I actually am really interested in your thoughts. I've been really hesitant to use TypeScript, probably irrationally, but I really like Babel and I like the ecosystem. I like the idea of these plugins and how open it is. So does anybody have thoughts on why they would prefer to use Babel over TypeScript? 

    AMJAD: I personally use TypeScript. 

    KENT: Sweet.

    (laughter)

    KENT: I'm sorry, I don't mean to like hit on TypeScript. I think TypeScript is very cool. 

    AMJAD: Yeah. I don't think it's an entirely fair comparison. I know that the TypeScript's project has been moving to kind of like... to be a part of the future of JavaScript, as opposed to I think initially it was more of its own thing, which is cool. 

    SEBASTIAN: Yeah I think that there's different approaches that each project has kinda taken. I guess they're not like... like the projects aren't really synonymous. I've heard like "Babel versus TypeScript," that's not necessarily the case. 

    PAM: I mean, is there a case where you would use Babel and TypeScript, ever? Or is that a false equivalency? 

    SEBASTIAN: Yeah so like TypeScript is basically like two things: it's a type checker and it's a compiler. So you can just use the type checker functionality in TypeScript and just use the compiler. There's like various, maybe you wanna use specific Babel plugins or maybe Babel just has better integration to your like a compiler tool chain. There's kind of like various reasons and there's actually some people who are, like, doing that today. Like there is actually reasons why you might want to use Babel's compiler instead of TypeScript's. Like TypeScript is kind of very conservative in how it compiles the output. It takes like a few shortcuts in it's like compilation output, so it doesn't retain the semantics of like ES 2015 as much as Babel could. There's definitely like advantages between the two. 

    KYLE: Could or would you have support in Babel for the same type annotations that TypeScript does? 

    SEBASTIAN: Yeah so Flow and TypeScript's the syntax that they have... There's like a pretty large intersection where... yeah, Flow and TypeScript syntax is basically exactly the same. So you can kind of get almost all the way there. There's currently not really support, 'cause there's no like large demand to add support for TypeScript syntax, like all led into Babel. Potentially like if there was... 'cause kind of like the people who want all the TypeScript syntax will be using TypeScript. So there's like, yeah, there's not that much incentive to that. 

    KENT: Cool. Makes sense, maybe one day I'll use TypeScript or Flow, but for now I think I'll just stick to my unsafe coding. (laughs) There were a couple other questions, but I think most of them were pretty much answered. One question though that we have is, Julian Goux, he said, "I tried to switch to V6 twice, but I still have issues with "async" (V5 works.) Do you think that V6 was released too early?" Or maybe this is just like a specific problem that this user is having? 

    SEBASTIAN: Um, probably both. Like it was released too early. And yeah, it's probably a specific issue. So if you actually have like a specific problem, then you can jump in Slack, or like yeah, post to Stack Overflow. I know there's a few people, like few Babel contributors, that regularly kind of like check Stack Overflow and answer questions there. So yeah, Babel 6 was kind of fairly rushed out or it was kind of the like the bare minimum required to get it out. In hindsight, that was obviously like fairly not good idea. Kind of got to a point where, I just got like super burnt out with working at Babel. Since I was kind of like working Babel 6 basically independently. 

    And I was like working on it for so long. And like having the support... the Babel community kind of like got to me, and so I kind of just wanted to like push out the notes like, there have it. I don't really wanna worry about it anymore. Since I didn't really wanna have like this thing lingering. Kind of like incomplete and like in a year or two, having other people piece it together. So I wanted to get to the point where, yeah I can just push it out there. Yeah so in hindsight, definitely would have done stuff differently. Thankfully I think it's like maturing and getting stable very quickly. Babel 6 probably should've been like a release candidate, but yeah. 

    AMJAD: Yeah I think going forward, we're trying to encourage contribution. I think in the past, I think James Kyle have tweeted and tried to help people to get started with the contributing to Babel. Certainly things are getting much better on that front and will continue to do so. So like hopefully Sebastian won't be the only one working on it and getting burnt out. And at least for now, we kind of have that support of the people on the podcast. 

    LOGAN: There are certainly still bugs but I think it's stabilizing pretty quickly. And I think that, for me especially, I've focused on making sure that the ES6 functionality is as stable as possible before necessarily moving on to the more experimental stuff, just for the sake of users not having troubles early on. 

    KENT: Awesome. So I think we're done with our time, let's go ahead and jump into the tips and picks. So, yeah, I think I'll just go ahead and go first and then we'll go with the panelists and the guests. So Sebastian I know you could kind of jumped on here last minute. If you don't have any tips and picks that's totally fine. But for my tips and picks, I'm just going to say I'm wrapping up my current job and I'm gonna be working for PayPal in a week. And I'm super excited. But one of my Christmas presents to my current coworkers is I built dev tools for our app. And so in development, it checks whether, you know... actually it's not just development, it's like in production as well, you can turn these dev tools on. And it will popup this little thing at the bottom and you can like turn on different feature toggles and do all sorts of different things, like change the language and a bunch of different things. 

    And so that's just a tip: create dev tools for your app. I wish that I'd done this six months ago so I could actually enjoy it. So maybe I'll do that in my next job. And also look into boost mode with Babel. Just look into it and it may be a good thing for you, it may not. And then for my picks, I just published a blog post, sort of about my experience upgrading to Babel 6. It's misunderstanding, ES6 modules, upgrading Babel, tears, and dissolution. So Logan kind of helped me with that actually a little bit, so shout-out to Logan. And then clearing up the Babel 6 ecosystem is a blog post that I recommend that you check out. This helped me understand what Babel is all about these days. And then, finally, Google Music. Actually I listen to Pandora most of the time, but I started listening to Google Music. It's actually pretty good. So check that out. Kyle do you have any tips or picks for us? 

    KYLE: The first pick that I have is a really smart guy named Wes Bos. Many of you probably listening have heard of him. He's got a fantastic write-up called Learn JavaScript. And in particular, he calls out a video on that site that I encourage all of you to go and watch. It's basically about this shift that WordPress had recently moving their admin backend to Node. And it was a call to say, "Hey everybody it's time to more deeply learn JavaScript." And those that know me and listen to me at all know that resonates very closely to my heart. So totally recommend reading that post. He's got links to a bunch of great resources, but also it was a really good video, sort of a call to arms of the value of learning it more deeply. 

    The next pick that I would have sort of humorously, there's a Reddit thread that went out today. So those that follow Reddit or have been looking on Twitter, there was a marketing email about my book series and it ruffled some feathers. And there was a Reddit thread called, "Well, F You Too Kyle Simpson." So go pile in, it's in Programmer Humor, so it's all in good fun. But a lot of people seem to have taken it a bit more seriously. Seem to be a bit offended by the title of my book series, the "You Don't Know JavaScript" books. But on that last note, I said last week that the ES6 and Beyond book had finally got to print. And literally an hour before coming on the air, this copy of the book actually arrived. It is physically in print. It actually exists now, not just in digital world. So it's out and the series is finally done. So there you go. 

    LOGAN: Congrats! 

    KENT: Awesome. Cool. Pam, do you have any tips or picks for us? 

    PAM: Yeah, that's awesome, Kyle. Actually, I did get that email on one of my email accounts that Kyle sends and says I don't know JavaScript. So I'm not surprised that a thread came of that, that's pretty funny. So my tip that is we're getting towards the last week of the year, so a few friends of mine have been... people are starting to put together their year in review things and so I might encourage everyone to think about what they done this year. And it's a good time to do that. And then also in the spirit of the holiday this week, my pick is you still have a few days to do some of it. And then maybe this is will stay up after the Christmas holiday, but Advent of Code is a nice little project with projects each day of sort of an advent calendar, and it's really to the days leading up to Christmas. So it gives you some things to do, so you can practice writing some simple problems just for fun. So, especially if you have some downtime, it might be fun to check out. 

    KENT: Great. Dan, what do you have? 

    DAN: Yeah, my pick today is a blog post by... I hope I get his surname correct, Axel Rauschmayer, so his blog is on 2ality.com. This is a blog post about using Webpack 2 which is currently in beta, together with Babel 6, to get what some call dead code elimination, simple tree shaking. And some people say that it's silly to compare them or whatever. But anyway, it's a post about how to use ES6 imports and exports to kind of get rid of the parser of the libraries that you don't use. And of course it only works when they are originally in ES6, but this is something... a nice post to take a look to and to take into account. So check it out. 

    KENT: Cool. Alright, so let's go to our guests. Amjad, you wanna give us a start? 

    SEBASTIAN: Yeah, sure. So let's see. Okay, so picks, recently, I read this... Actually let me start with Emacs. About a year ago, I decided to... I've been like using all sorts of editors and never been satisfied with any one of them. And I tried to use something that is not your typical GUI editor. So I started with Vim and kind of like spent two months struggling and really unproductive but then moved to Emacs. And I think I really like the Emacs experience. Now I feel like I'm really a lot more productive than I used to be with a GUI editor. So I would say kind of like take the time to learn a 60-year old editor like Emacs or Vim. 

    And the other one is a book by Nassim Nicholas Taleb, it's called Antifragile. I think it's one of those books that kind of like changed my thinking about the world ad I really recommend it for people. I first heard of it in an internal talk by John Carmike and he was talking about ideas and how he gets ideas and how he tests them. And he chooses concepts that some things benefit from stress, from shock, and from randomness. And he talked about the process of coming up with ideas as something that like that. So I definitely recommend checking out this book. 

    And finally, a project that I had, for a few years now, but more recently, I picked up the work on it, it's called repl.it. And I kinda want to plug it because I recently added Node.JS so you can like... It's basically a repl and browser. So you can execute code in your browser and you can share the code, you can save it. And we originally used Traceur for ES2015 and ironically, we still do that. But I just had the thought to change it to Babel. So check it out, repl.it. 

    KENT: Cool. Yeah, I was just looking at it, it looks pretty cool. Sebastian, do you have any tips or picks for us? 

    SEBASTIAN: I don't have anything, but I'm going to give a shout-out to Sainsbury's chocolate flavored British 1% fat milk. Pick it up from your local Sainsbury's today for only one pound. 

    KENT: Oh man, that, yeah that's good, see you there. Thanks for that, that'll definitely go on the website for sure. (laughs) Logan, what do you have for us? 

    LOGAN: I don't think I have a ton in the way of tips or picks, but I would say that, you know, if you're interested in just chatting about ES6 or JavaScript or have any questions, please make sure to come hang out with us on Slack. There's tons of people that just hang out and chat about JavaScript and ask questions about Babel and everything. So yeah it's a fun little community. 

    KENT: We'll add a link to that in the show notes so people can get to Slack. And awesome, Henry what do you have? 

    HENRY: My pick is AST Explorer by Felix Kling. It's a really cool website you can use and helps you visualize code that you can paste in to learn more about ASTs. It also has a lot of awesome features like being able to live develop Babel plugins. So yeah, shout-out for that. 

    KENT: Cool, alright. I think that's it, so we'll wrap things up. Thanks everybody for coming to the show. Especially Sebastian for jumping in last minute. That was kind of a fun little surprise. Just to close things up, if you have any suggestions for shows or guests that you'd like to see on the show, go to suggest.javascriptjabber... "JavaScript Jabber" gosh... That's an awesome podcast you should check out. (laughs) It's suggest.javascriptair.com. And then if you have any feedback for us on this episode or the show in general, go to feedback.javascriptair.com. And then remember next week's episode is with Dan Abramov and Brian Lonsdorf about Functional And Immutable Design Patterns in JavaScript. Should be a very interesting episode. And then, as always, follow us on Twitter and Google+ and Facebook for the latest. Thanks everybody! Really appreciate you coming on and we'll see everybody next week. Bye!
  `,
}
