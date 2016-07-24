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
  transcript: `
    KENT: I totally forgot, ahh! We're live and I forgot to tweet a picture. Thanks, Pam. I messed up. We were running a little bit late. So yeah, we're live though. This is JavaScript Air, your JavaScript Broadcast Podcast, all about JavaScript and the web platform. And unfortunately, there's no tweet picture this time. I'm sorry. But there is--

    PAM: But this is a normal tweet in--

    KENT: Yeah, we'll do another tweet later. But yeah this is a show and it's great (laughs). So we're actually this is a show I'm really excited about. It's called Publishing JavaScript packages. And yeah, I feel like we have some really good guests with different perspectives and experience doing this and so I think it's gonna be a great show.

    Before we get into it though, I'd like to start out by thanking our sponsors and giving them special shout out. So Egghead.io is the show's premier sponsor and they have a huge library of bite-sized web development training videos. Check them out for content on JavaScript, Angular, React, Node and more. And Egghead.io also hosts the free Redux courses from Dan Abramov. Find them at Egghead.io/Redux. There are two of them and they're fantastic.

    And then Front End Masters is a recorded expert-led workshop with courses on Advanced JavaScript, Asynchronous and functional JS as well as lots of other great courses on front-end topics. And if you want to learn about open source, come to my workshop next month. Or if you want to learn about Webpack, I also have a workshop next month, so check that out.

    TrackJS reports bugs in your JavaScript before customers notice them. And with our telemetry timeline, you'll have the context to actually fix them. Check them out and start tracking JavaScript errors today at TrackJS.com.

    And WebStorm is a powerful JavaScript IDE. It makes developers more productive with its super intelligent code assistance for JavaScript, Node.js, Angular and React and integration with lots of different tools. Learn more at JetBrains.com/webstorm.

    And finally, Trading Technologies is looking for passionate and innovative full-stack JavaScript developers who want to work on cutting-edge solutions in a collaborative and challenging environment. Go help them build the top choice platform for derivative traders.

    Alright, great so because this is a live show we can chat with you, our viewers, so if you go to Twitter and with the hashtag #jsAirQuestion you ask a question then we'll answer those at the end. It will be awesome. And because this is a weekly show, we are going to have another broadcast next week at the same time and it's getting Started with Web Audio. So I think that will be an interesting show I have very limited experience with web audio. And so yeah, I'll learn something hopefully you will too.

    Okay great let's go ahead and introduce who we have on the show today. So first for our panel, we have Pam Selle.

    PAM: Hey!

    KENT: And I am your host, Kent C. Dodds. And for our guests, we have Henry Zhu.

    HENRY: Hey, everybody!

    KENT: And Stephan Bonneman.

    STEPHAN: Hi everyone.

    KENT: And I mispronounced that that's Stephan and did I say your last name right?

    STEPHAN: That would be Bonneman.

    KENT: Bonneman, okay awesome. James Kyle is going to join us shortly, hopefully. There was a little bit of a scheduling mix-up. I wish I could say that's the first time that's ever happened, so yeah. Hopefully he joins us later. And then John David Dalton.

    JOHN: Hello, and Dagne. Hi!

    KENT: (laughs) Bring your dog to work day or are you working from home?

    JOHN: Oh, I'm just bringing her in today.

    KENT: Cool, cool, awesome so yeah so let's our topic today is about publishing JavaScript packages, but I think it would be useful for us all to get to know each other a little bit. So Henry why don't we start out with you could you just give us an intro to who you are and like things that you like?

    HENRY: So, I'm Henry. I work at Behance. I like open source (laughs). So like I maintain Babel and work on other various projects. And I don't know I've been playing PokÇmon Go (laughs).

    KENT: (laughs) Nice awesome, and Stephan?

    STEPHAN: Hi, my name is Stephan. I am working at the Swiss company Living Docs. I am running the service Greenkeeper.io. And I think why I am, yeah thank you for the cheers. The reason why I'm on this show is because I've written a tool called Semantic Release which helps with publishing modules. And one apology up front, I like messed up the timing so I'm in an airport lounge and I hope it's not too loud or anything. I will hope this works out.

    KENT: Sounding good so far. John?

    JOHN: Hi, so I'm John David Dalton. I am the lead dev on Lodash. Lodash is super modular and so I've had to come up with ways to deal with lots of opinions on modules and module formats and all of that stuff so, yeah.

    KENT: Sweet! Alright, so let's go ahead and jump into it a little bit so publishing a package on npm should just be as easy as npm publish, right? So why do we need to have like special tooling around publishing a package on npm? (silence) Maybe it is that easy and we can just say, "Okay, goodbye everybody!" (laughs).

    JOHN: So for me it's when you start dealing with hundreds of modules where it becomes a problem. And then you need something like lerna or I built my own script to deal with this because Lodash's is a monolithic library that's been broken into modules. And so I have 400 now modules to deal with. So trying to manage them individually, 400 is super time consuming. Even with scripts, it's still time consuming. So there's really no way to do it without that or else it would have to be like my full time job and that's not the case. So I have a script where I check to see if only comments have changed then I don't do a version bump I just change the code in line. If dependencies change, then I do I think that is a patch, a minor bump. And then if code changes but no dependencies change, then it's a patch release. And I have a script that automates that and will also call out specific dependencies that don't change very often like the isArray, and isNumber, I don't expect those to change a lot so I have special logic in there for lists of that to help me manage that. I know there's other ways to do that but for me, I'm actually trying to move away from that and to just go to the single package that is modular. So then that would be the single source instead of having 400 different packages.

    KENT: Cool, interesting! I think I want to dive a little bit more into the way that you like manage Lodash and deploying those or publishing those packages, but Stephan, do you want to talk about like Semantic Release and how you solved this problem?

    STEPHAN: Yes, sure. So first, I want to describe the problem why npm publish isn't enough so as John already said. One part of the problem is living in a small modules world we are just so so many and they have a lot of repetitive steps. And it's not just about like we npm publish once a week or once a day, it's about doing it over and over again for multiple packages. Some of us have more than 100, so it's getting really, really, tedious to get all these steps done in the correct way over and over again. But the second part for me is like data release is not just uploading new code or like tagging this commit and then that's a release. For me, that is not a complete release because we (mumbles) there, what has changed. We have a change log, upload that would same location where the users can find it. And so it's more than just making the code available and that's why there are more steps involved. And oftentimes people just leave them off because they are annoying to do and but (unintelligible) or having a defined system. Easier to have something even if it's not perfect there is something and people know where to look so it makes it way easier to publish but also to consume packages.

    KENT: Yeah and I know that like earlier on, when I just had a handful of like maybe one or two packages that I would work on regularly even that, like there are 10 steps at least every single time you want to push some new change. And that's like fraught with human error and I made mistakes all the time, broke tons of (mumbles) and had to like deprecate versions and just takes a lot of work. And so yeah even with just a couple of packages, it's really useful to kind of automate that process a little bit. So do you want to talk about the Semantic Release and how that automates the process?

    STEPHAN: Yeah sure, so Semantic Release is building on commit message conventions which means you annotate the semantically annotate the source code or rather the changes you do to a source code by the time you do that. And so this is taking from the angular project, I think it's like grown into many more projects now and it's like pretty common commit message style that I can link up. And so I really liked how Angular managed their change logs. And I saw that like these how they are tagging their commits is almost directly mapping to semantic versioning or the types of different versions. So if you have a commit message that includes a new feature then that hints towards a new feature version or if you have a fix and nothing else then that's a fix version. Or if you have a commit message that documents the breaking change, then you can like you can't just simply reuse that information. But it also goes the other way, if you make the publishing dependent on this information it forces you to write this information down because otherwise you can no longer publish packages.

    And that was like my idea of on the one side making it easier, making the publishing process way less tedious but also making it force you or everyone to use these best practices to document what you have done to write breaking change annotations and stuff like that. So then, whenever you get this code onto the master branch, for example, the CI will run and look at all the commits that happened since the last time you published. And if there is for example a new fix, it will just publish that automatically use that information to generate a change log. And you don't have to you don't even decide that there's a publish happening, it's just happening on its own.

    KENT: Yeah, and I can say for me I was really skeptical with Semantic Release. Even actually, I should think to the conversation I had with Stephan about Semantic Release when I was trying to decide whether I should use it, I was really skeptical but once I started using it just like, "Oh! This is so nice." Like even packages that I don't really maintain much or use myself or anything, I can still continue to maintain them and publish them because it's all happening automatically for me. So yeah, it's really magical I recommend people check it out. And actually, why don't we have Henry why don't you explain how you've kind of solved this problem so that unique as well?

    HENRY: Alright so the project that we use is called lerna and actually, was just like what John said it's just a bunch of scripts that Sebastian made with Babel. 'Cause every time we had to do a release you had to do all this manual steps, and then later when you know we had more maintainers. And I joined to help out it was confusing 'cause I didn't know what to do so what he did was just automate a lot of those steps. And eventually we realized you know this could be generalized so that other projects could use it too. So I know, James, who's not on the show right now, but he did a lot of work to re-write a lot of the logic 'cause it was literally just one file and now like somehow it became its own project. And we didn't really even market it at all and other people are using it too 'cause a lot of people want to use a (unintelligible). And so in Babel 5, Babel was just a single package and I guess a lot of you know that in Babel 6, everything was modularized. And so what it means is that Babel git repo is a set of npm packages and they all have in their own folders. And so lerna what it does it just help you to automate all the git commands the npm commands that you (unintelligible), so yeah.

    KENT: Yeah, I think like that solution kind of caters to a different type of problem, right, when you have a lot of packages that need to be published together. It sounds like Lodash might be able to benefit from this kind of approach. Have you thought about doing that, John?

    JOHN: Yeah, I've looked into it and it's something that I could do. And it's so similar to what I'm already doing. So Lodash is a mono repo in one of its branches, so if you go to the Lodash repo and you go to the npm packages branch, you'll see all the npm packages for the modularized builds. And so, I have my own script that does it. And it's not great, it's super hacky. My whole build step is super hacky. I'm hoping to get rid of it in version five. It's based on regexes because that's great. So yeah, it's something I've cobbled together over the last four years and I'm ready to get rid of it. So yeah, when I saw lerna come out and I saw that it's maturing and getting better documentation and more features like I'm seriously looking at that for going on in the future. If I continue to use the mono repo. I'm still on the fence about that just because it's a lot easier for me to just punt and say, "Use the one package 'cause it's got all the modules in it already." But yeah no that's great, lerna's fantastic.

    KENT: So what about like I think it could be useful to talk a little bit about like how you know what version to bump when you're publishing a package. So whether you're using any like any project or no project at all to do your publishing, we should probably mention there's also (unintelligible) has a package called NP, I think that's short for node publish or npm publish but it like it also kind of automates this as well.

    JOHN: It also guards against the npm publish issues. So if you publish a lot of packages you'll know that npm has had some problems with node versions and corrupting your publish packages. I believe they've got patches and released fixes now but for a time, if you were on node six you'd likely publish a package without a readme or without an index.js, which is not great, and so I'd have to do a lot of things like make sure I nvm to node four before doing a publish. I'm so superstitious, that I never straight publish from a package. I always npm pack first, inspect the package and then publish from within the package just to make sure that I'm not accidentally including things that I shouldn't be and doing it that way.

    KENT: On that note, I accidentally published like a nine megabyte GIF in one of my packages so like that totally can happen (laughs).

    JOHN: I accidentally published my uncompressed-- so I npm pack and I accidentally published a version of Lodash that had the package folder inside of it, so it was doubling the package size because it was the package within the package. No one caught it though like I can't believe it it was that way for like two weeks. But it's fixed now, so yeah.

    KENT: Yeah, well once we automate things with our tools we kind of tend to forget it and not think about it. You know, I've seen some cases where people will be using a bundler and find that, "Oh, I've got two versions of jQuery in here." (laughs) So yeah there's a danger to automating stuff for sure. So I wanted to talk about semver though. Could we chat about like why does semver matter? What do, oh, Stephan did you have something else you wanted to actually touch on before?

    STEPHAN: Yeah just to complete that because John mentioned these problems with npm 6 and I'm 100 percent sure but I think they are fixed and like when they were still there and npm edited one as well. So when you publish from npm six, I think I'm not sure if it just errored out or it had a warning but npm added that as well.

    KENT: Yeah that's been fixed, if you publish with 6.3 then you should be good. Hooray!

    JOHN: Yeah, that was awesome.

    KENT: Pam did you have something else?

    PAM: Yeah, so I just had a quick question 'cause it's hard to keep track of all these different packages you all are talking about. So you were about to talk about semver which I'm guessing is semantic versioning. Is this the same thing as semantic release, which is a repository under the semantic release organization?

    KENT: Yeah, good question.

    PAM: So yes or no? (laughs)

    KENT: Thanks for bringing us back to like making sure everybody knows what we're talking about. So yeah, so I wanted to talk about semver which does stand for, or is short for semantic versioning and so it's a specification--

    PAM: So it's like it's a, yeah so it's a spec not necessarily like a tool.

    KENT: Exactly, yeah and then semantic release utilizes that spec, as well as your commit messages and that kind of thing to automate your releases. And that's the thing Stephan was talking about. So yeah, who does anybody want to talk about semver and how those three numbers in our versioning work?

    JOHN: I can! Sure, so a lot of people-- I'll just get into it. Here's how I think semver is for me breaking changes are a major version bump, new features are a minor version bump, and bug fixes are a patch version bump. And I stick to that. There's always room for interpretation there on like what's a bug fix versus what's a breaking change. And I use like best judgment for that. I try to keep major version bumps to once a year for Lodash itself just because there's a lot of like packages that depend on it and then upgrading and then all of that stuff. So I try to keep that as minimal as possible. But yeah that's how I see it is if you're going to introduce a breaking change, save it for a major bump, any kind of new feature just minor and then bug fixes are patch.

    KENT: Yeah and so just to bring it back even further, in your version for your npm modules, the version consists of three numbers separated by dots. So that first number is the major, the middle number is minor and the number furthest on the right side (laughs) is the patch. And actually, npm takes this into consideration when resolving like the versions that you've listed in your package.json. And so you can say, "I want to take this version and any minor versions higher than this," that you can use the caret." Or "I want to use this version and any patch versions higher than this," and that's the tilde. And then you can go like crazy and just put a star in there and that's like probably a bad idea but (laughs) don't do that.

    JOHN: Don't do the star, no.

    KENT: (laughs) Yeah. So, James, just joined us. Hi, James! You look like you're outside.

    JAMES: Yeah I'm here at the Facebook campus.

    KENT: Beauty. So actually, let's go ahead and give James an opportunity to introduce himself. There was a little bit of a timing issues, so apologize for that. James, do you want to just give yourself a quick introduction?

    JAMES: Yeah, sure. So I am working at Facebook. And I do a lot of open source stuff. I'm one of the like sort of core contributors to Babel as well as lerna now. I've been watching a little bit, so I can sort of tune right back into this conversation hopefully.

    KENT: Cool, thanks for joining. So we were just talking about semver. Did anybody else want to like touch on semver at all or like any other comments about semantic versioning?

    JOHN: I have comments. So semantic versioning, if you're in the npm ecosystem, is the way to handle your releases. It's so handy to be able to just use the caret and then your users can forget about it. Like if you have a bug fix or new features, they don't have to worry usually about that breaking their stuff, which is super nice. You can get into issues where there's unintended bugs that are introduced and things like that but generally it's fantastic. I mean, I've even leveraged the caret and tilde in the individual modularized packages for Lodash. So I have internal packages, like they begin with like an underscore prefix, and some of the external packages depend on them but I don't want internal packages to be held to the same standard as external. So I would like to introduced breaking changes to internal methods more often than external. And so I can say internal packages use the tilde in my build process for versioning these and external ones use the caret. And so that allows me to have a little bit more freedom in changing my internal methods. So yeah if you're ever in a competition with another library and you want a selling feature, say, "Hey, I follow semantic versioning." That helped me so much like whenever I was going against the other guys. It turned out you know if they end up breaking on minor patches and you don't then you're gonna just get all those users. So it's a good thing to follow. It helps (laughs).

    KENT: Cool. Stephan, did you have something else in addition?

    STEPHAN: Yeah, so one thing I wanted to add is like semantic versioning is one spec or one way to do this. And I think it's the dominant one in the node world and npm (unintelligible) it's using (unintelligible) for its version numbers. But there was or is a lot of conflict here because especially with the major version numbers that are used for breaking changes, a lot of people associate that with big change, which they reserve for exciting new stuff or marketing or whatever. So like, like web 2.0 or HTTP 2 it's like it's a new major version so it's a thing we've been building from the ground up and it's like something to be excited about and to write blog posts about. And so there's a little bit of conflict because people either expect something exciting from major versions when it's just a breaking change or people want to reserve their major versions for something they can celebrate or market or something. So there's a little bit of a conflict there, even though I'm strongly on the side of semver and using that for communication of breaking changes.

    JOHN: Cool I would agree with that too. I think that some libraries can build up their major version bump, and you just need to get used to saying like, "Hey, a 2.0 is gonna come a 3.0, a four, a five, a six," and to not put so much pressure on the major version bump. I've seen libraries come and go, waiting for their 2.0 release. So it's just something to schedule, put it on your roadmap say, "Hey, these changes are gonna come. Let's move to a major version bump and then just keep it going." If you put too much pressure for that major version bump, then yeah, you can drag it out but with semver, you just got to get used to doing like lots of major releases over time.

    JAMES: One of the things that worked really well in the early days of Babel it was the sort of instant versioning that we did. When we had changes, we published them immediately rather than waiting too. And this meant high response times for bug fixes, new features, we weren't afraid to make breaking changes early on, which led us to having like a lot of flexibility and sort of setting expectations to our users. And then as it stabilized over time, we were able to sort of slow down on that. And once we were where we wanted to be, it was a lot more stable rather than holding on to changes forever, like you mentioned.

    KENT: Cool. And yeah, so actually I kind of am curious a little bit about Babel because Babel is kind of a unique situation because like the stage two preset for example, when a feature gets or maybe a better example would be like the stage zero preset, so like some of the stage zero features are parser-specific like they need special logic in the parser to be able to parse these new features. And then if something gets dropped from the spec, then you have to drop it from the stage zero preset and maybe even the parser. So how do you manage that kind of a breaking change where it's not entirely in your control and you're just kind of like whatever the spec is is what this stage represents?

    JAMES: Yeah so semver is a really good guideline on sort of individual projects but the trouble with them is that they do not communicate everything that there is to communicate. It doesn't say sort of ecosystem-like things like, "This is only gonna work with this version of node," and can't communicate stuff like, "it's this version of JavaScripts" or things like that. So we have this like problem space of almost needing to invent our own package manager in order to support all these things at the same time. And it's messy for something as complicated as Babel, but for the majority of projects it works quite well. But yeah, there are certainly some shortcomings of semver and that is one of the big ones.

    KENT: Interesting. Cool. So if I want to if I was just getting into this and I wanted to start learning or like maybe I've got a library out there I'm just running npm publish myself, where would you all recommend that I go to look at automating some of this process? Or should I even put in the effort to automate that? Like, why would I want to automate it and how would I go about doing that?

    HENRY: I feel like what you should do is just write down the actual commands that you've been running, and then over time, you'll realize like, "Oh, I'd have to do a build step every time or I have to change log every time." And over time, you'll end up with you know the list of commands that you run into every time and then you can just write your own script for it. I mean maybe eventually, you could look at a project like lerna which just generalizes everything but I think there's no reason to go out of your way if it's already working for you.

    KENT: Anyone else have perspective?

    JOHN: I'm guilty of not doing enough automation. I still manually like I use my text editor for it. Every time I do a version bump on most of my packages, I ctrl+f for the package for the version number and replace and stuff like that. I've seen that cause some problems when maintainers take a leave of absence and you have secondary contributors trying to do a release. There's lots of things that aren't there so it makes me think like you know if I ever want to take a break, I've got to start to automate this stuff to make it easier for people to publish, yeah, totally.

    HENRY: I mentioned that before but that's exactly what happened with Babel. In order for me or anyone else to make a release we had to learn all the stuff. And so Sebastian ended up making the script, so all I had to do was just run one command to publish everything.

    STEPHAN: So I think (unintelligible) if it's not the first time you're publishing but if you're repeatedly publishing and you're like having lots of repeated steps, but also you're not fully aware of what steps you should be taking or maybe shouldn't taking, it's a good idea to look into what's actually happening when you publish a package. And John previously mentioned npm pack. That's something I'd recommend. So when you publish an npm package locally it packs up a tarball and then that's uploaded to the to the npm registry. So it's interesting to understand what is ending up in this tarball, why is it ending up there and what steps should I take? Because for example is the common thing that people don't do is like running npm prune, which is a command to just removes all the dependencies that are in your node modules folder but not in your package (unintelligible). And that's something that can lead to very ugly bugs because like locally, when you run your build and stuff like that it's all working. And so if you kind of have an understanding of what is happening under the hood, so what is ending up in this tarball and how is my module then going to be rebuilt on the consumer's machine, then you understand the steps that you have to take and then you like it becomes pretty apparent that you want to automate them because there are so, so many and so many mistakes and subtle things that you don't immediately notice but only notice when it's too late, so yeah.

    KENT: Actually on the note of npm prune, and like just in general optimizing the package that you have, what are some of the optimizations that I could make? Like, you know if I just say, "Okay, just publish everything." I don't even think about it, I could be publishing like a nine megabyte GIF or something you know that really doesn't matter or my tests or you know a bunch of stuff that doesn't necessarily need to go in the registry. And what that results in is when people install my package they have to download all of that stuff and it makes it even like take even longer. So what are some of the tips and tricks that you would give people, like what are some actual things that they can do to reduce their package size?

    STEPHAN: So usually, like, just by default, npm pack will pick up files just like git would do, so if you have them in the files in the git ignore, they don't end up in the tarball in the end. And then on top of that, there is the npm ignore file where if that's present you can like override your own npm ignore of things you don't want to have in the package. But the thing that's counter intuitive here is that like usually the things you want to have in source control are the opposite of what you want to be published. So if you (unintelligible), the source code should be in the repository and the build artifacts should be in the package, so the default isn't really working out very well. So what I am using now is in the package station there you can add files array and then you can simply whitelist the things you want to have in your package. And I think that's a very good exercise to explicitly add things, you shouldn't be thinking about what to remove but what is like it's perfect once you cannot remove anything anymore. So that's how you should address that.

    KENT: And as like a pro tip on that, by default, it will always include the readme and the license and the package JSON. So normally, for me, that files array is just dist and that like it just does the dist directory. It works out great. Is there anything else that you all have ideas of how to optimize your packages?

    JOHN: So I use the files array if it's a small package, but for things like the Lodash package which is a collection of hundreds of modules, I don't do that. I use the npm ignore for that and then I examine the package with npm pack just to make sure. Just because like 500 entries in there would be kind of gross. I don't know. I haven't tried it in a while. The files, the files array doesn't allow you to use like a grep or sorry a glob syntax right?

    KENT: I think it does. I'm pretty sure it does. But that would be something to test out.

    STEPHAN: And it's also allowing you to use entire folders, so you don't have to look, like it's called files but it's files and folders.

    JOHN: Oh, okay. Maybe I'll try that then 'cause I do have just specific folders of stuff, so cool.

    KENT: Yeah, something to think about. Another thing is and actually the NYC project, it's like instrumentation for code coverage. And actually with their release of 7.0, they're like the de facto now Istanbul and NYC have like merged now which is pretty cool. Yeah, news flash. So, NYC they were having trouble because like they have a bunch of dependencies. And so they were having trouble with when people would download their package it would take forever installing all this other dependencies.

    And so another thing that you can do is use the bundle dependencies, or bundled dependencies. It's like they're the exact same thing. And what that will do is like normally when you publish your package it will ignore everything in the node modules and then when somebody installs it, it will install your dependencies. But if you list it, if you list a particular module in your bundle dependencies, then that will actually get published as well. So you run npm pack and your package will actually have a node modules directory with all the modules needed for that bundle dependency.

    So what's cool about that is when somebody goes to install, npm will say, "Oh, this package is in the bundle dependencies. I don't need to resolve that version. I'll just take the node modules directory that's already part of this package in the registry." And so there are some tradeoffs with that because now somebody couldn't like upgrade a version of that transitive dependency but like, for a package like left pad for example if everybody had been using bundle dependency for left pad, then nobody would have had a problem because left pad would have been actually included in the package itself. It doesn't need to actually resolve to the registry. So that's another thing to look at and think about the tradeoffs. I actually have a video on YouTube where I explain how this works and so I'll post a link to that in the show notes.

    Any other thoughts or ideas about optimizing your package that you publish? (Silence) Okay, sweet. So another question that I have is when would somebody start thinking about using one of the methods that you all have? Let's start with lerna. Like when would I start to think, "Maybe I should start using lerna."

    JAMES: Okay, thought Henry was going to go there. So lerna is not necessarily meant for people who are publishing a single package at a time. It's meant for these sort of monolithic projects like Lodash or Babel or Meteor or Ember or Angular or all these different things. You end up wanting to put things in separate packages but lerna takes this idea of a mono repo so that you can have, you can centralize your version control while having those sort of like independent like micromodules that npm loves so much. And this way, lerna can automate the process for you but it's also meant to be extensible and scriptable, so people have built things that like semantic release for lerna. And I know John does a lot of stuff in terms of his own, the way he versions things in terms of introspecting the actual code that has been written. And lerna is meant to be this sort of scriptable, sort of platform so that it's not just like, "this is exactly how you do something," and ends up sort of rigid in that way but it allows you to specify a lot of different things and sort of use its internal tools to like build other things. And we're just looking to do more and more of that, so yeah.

    KENT: Cool. And what about semantic release? At what point would I start to think, "Okay, maybe I should start using semantic release for this." Is it something where like my project has to get big enough I have to release it enough, or like when does semantic release make sense?

    STEPHAN: So I think it's the opposite because lerna is something that pretty huge projects use that are modularized internally and semantic release is something that once you are familiar with it and agree with its ideas, it's something that you can use for something really, really small because it's not about one big project that's broken down into multiple modules, it's about having multiple modules that you write in your everyday life or whatever. And then having a way to publish them like they don't have to be connected, it's about having one safe way of publishing all of your modules without much overhead, without having to be logged into the right npm account or whatever. It's just this one way where you can publish packages. And you can set it up with a simple CLI, so it's one command in the beginning and then it's set up for you and you don't have to touch it anymore. So you can use it for something as small as like one function, as soon as you decide to have it in an npm package.

    KENT: And I'll just mention that I actually do have it on modules that are like one function. Semantic release has been awesome for that. And actually, I was gonna put this in my tips but I have a generator for my open source modules and it totally includes semantic release. And so like instantly, all of my modules have semantic release added to it and I don't have to think about releasing things anymore I just kind of, I just think about making changes to code and then everything else happens automatically for me. Thank you for semantic release (laughs).

    STEPHAN: Yeah, I'm glad you like it so I want to add something to it because when you have all these modules, you probably have written them once but you're not it's not in active development for them all of the time. So this is also pretty handy because you can just go into a pull request and once you merge it the new version's out, you don't have to do anything with that. But GitHub introduced a lot of new features for pull requests, so in the pull request interface, you can now squash and merge, so you can rewrite the commit message and there you can protect your master branch, so you like have control over when these releases happen. And so as I said, these small modules that you've written once and then maybe there comes a pull request in and as soon as you, you like it, you do just the merge to pull request and then the new version is out and you don't have to touch it or anything so it's set and forget for like all these small modules.

    KENT: Cool. John, we didn't give you a chance to touch on this with like basically from my perspective, it sounds like your solution is much more like specific to your needs. Would you say that like that's a good solution for like, for other people or would you recommend that they try to use one of these like pre-packaged solutions?

    JOHN: So mine was just unique because it came up over time as I started adding more and more modules. Like I said earlier, I'm actually trying to get rid of my way of doing it because it's a lot of overhead and it's starting to defeat the purpose. I'm also starting to lean towards less mono repo and more bundle package, so one package that has a lot of modules in it, because I'm a utility library like that's what I'm into, right? So whereas Babel has lots of plugins and things like that, Lodash has a collection of utilities. And so I'm leaning more towards just having one package and modules because it integrates into things like the Babel plugin for cherry picking individual methods, which is a Babel plugin Lodash. And it integrates into Lodash web pack plugin which dynamically rewires the module paths for smaller builds. So I'm finding I actually get more benefit from one package and it's also easier to manage because it's just one package versus 400 of them. So that's where I'm actually leaning is to just do the one. It's tricky right now though 'cause like npm uses the individual packages for it, so I'm gonna have to work through like showing people that there's actually it's actually more beneficial to use the single package than it is to use the individual ones. You get smaller builds out of it too, which is great. And it's maintained more frequently. I do releases to the primary Lodash package more frequently than I have to do for the 400 other ones.

    STEPHAN: And I think it's also way easier to duplicate the one Lodash module rather than having all the individual ones. Especially if they are two ways and you have dependencies that use the individual ones and you use the global Lodash package and it's hard to re-duplicate. And if everyone would just use the one Lodash, you could de-duplicate it and then pick the individual modules from there. So I agree with that.

    JOHN: Yeah, the individual modules are nice though because in situations where you want to mix like a Lodash 4.0 method with a Lodash 3.0 or with a underscore code base, you can just pull in that one. But just overall, it's so much easier just to work with the one package, 'cause they could always include that one package and then cherry pick in the one module. Now it wouldn't work with the two Lodash versions together, right, but that's the one case where it wouldn't work but everywhere else it's pretty flexible. So yeah, I'm starting to lean that way.

    JAMES: Yeah I actually ran into this exact thing previously. Having individual packages does actually make it easier to incrementally migrate major versions of Lodash. At my previous job, we were stuck on I believe it was Lodash two or three because of I think the extend function like had changed very slightly and it broke something when we tried to upgrade. And if we were to have those individual things, we could have been able to track down exactly which things broke and which things didn't. And we would have found that much sooner I think and not been blocked by it because we had to like go down through like eight levels of dependencies to upgrade like some random one that was using Lodash two or three. And it was just a mess. And meanwhile, the only other option was either including two versions of Lodash or just pinning a really old version (laughs) of Lodash, which both options suck so (laughs).

    JOHN: I'm noticing that devs are interesting when it comes or users are interesting when it comes to modules and packages. If you have a package and it has too many dependencies, devs will say, "It's gross. It's too modular. I don't like it." But being modular at that level gives you a lot of benefits because there's less code duplication. So it's this weird hang-up where if you have a single package but it's got pushing three dependencies, four dependencies, if any more than two dependencies and devs start to turn away from the package. So what I've had to do is in line a lot of the dependencies for the individual modularized packages, which is gross but it actually increased adoption 'cause devs were like oh it's just this one package with very little dependencies, but in reality I'm in-lining a ton of the dependencies for it. And I really don't wanna do that anymore either. So I think that with the transition from four to five, there'll be less breaking changes and it's more about being just modular first instead of monolithic first. So I think from that standpoint, there should be less of the need to use the individual package to supplement breaking changes for an older version or to bypass breaking changes.

    STEPHAN: Yeah and I want to add another thing which is download speed, because if you always have to install the huge Lodash package, it would be intuitive to think that that makes things slower. But that way, it's way easier for npm to cache it, so you always having this one Lodash thing in your cache folder and it's just copied over you're not downloading anything. And the thing that's really costing you the time is all the (unintelligible) for all these individual Lodash sub modules. So actually, this is going to speed up installs and not making them slower.

    JAMES: I sort of have to disagree 'cause I think a lot of this tends to get a bit exaggerated in how much it actually impacts people because one, npm's cache really doesn't ever even get touched. People it just sort of ignores it unless you pass an explicit flag and like only look it up from the sort of offline version. And packages like Lodash that would sort of be broken down to this level tends to, it's small enough that I've never seen an actual issue with it, and you're saving like milliseconds at best. So that sort of tradeoff, I would never really even consider it.

    STEPHAN: It's touching the cache though like it's still talking to the registry but you'll never download the tarball for the same version twice. So like because there could be one reason why I'd split it up because I don't want to download this huge tarball but this is only going to happen once for the individual versions of Lodash.

    JAMES: Yeah but that doesn't behave any differently if you have one package or 30. Once it's there it's there and--

    STEPHAN: (unintelligible) impacting anyone. Yeah but the likelihood is higher that you already have installed Lodash once before and you save all these round trips because it's just Lodash not Lodash unique Lodash for each whatever, but yeah.

    KENT: I actually like having my npm install take a long time because that gives me more time to play like foosball or get on Twitter or like (laughs) just kidding. So we're actually we're coming down on our time here a little bit. I wanted to talk about one other thing and we have one question on Twitter. And that thing is npm scripts. And so what are some of the pro tips that you can give about whether you use npm scripts at all or what kind of tools that you use to script these (mumbles). (Silence) You don't use scripts (laughs) just kidding.

    JOHN: I like npm scripts. I mean like, I don't know what to really say about them. They're super handy. They treat your dependencies like they're installed globally, which is nice for executing things like using Babel to build things or using Mocha or whatever. There's some advanced things too where it can take variables into the command line as well. And I've only used that like once or twice but that's super handy. I've started to use build scripts a lot or sorry just scripts in general a lot, in Lodash and its related packages. Super handy. I would say jump into it, use them.

    KENT: Specifically, I was kind of thinking there's a npm script that historically has been a little controversial and that's the pre-publish script. So there's a really long issue on npm that's entitled something like pre-publish inexplicably runs on install. And when I saw that issue the first time, my thought or the way I interpreted it was that like when other people install your package, it runs your pre-publish script. Which like generally you would have that run the build and whatever. Turns out that's not actually what happens. And so I have a video where I explain exactly how the pre-publish script works because I like told a ton of people never to use pre-publish scripts because of that reason. Turns out it's a fantastic script to use. And so yeah, you can definitely use. It's pretty helpful. Like before you run or before you publish something you want to make sure you run the test and you run linting and you run the build. And using these npm scripts with these hooks can be really useful, like you have a build script and then you also have a pre-build script that will delete the original dist directory or something like that. So I would recommend people to check out npm scripts and how they could be leveraged for publishing packages.

    So any last thoughts before we get into our Twitter questions? (Silence) Okay sweet, so we have Kyle Jackson Robstock who asks, "Would it be best to start with lerna if a collection will become quite large or to just start with semantic release when starting small?"

    JAMES: Yeah so I think that lerna is great if you do plan on having that sort of gradual growth. If you're not, then I would say it's probably just overhead for you. Lerna goes a little bit further than just publishing. It can help with stuff like bootstrapping your repository, so when you're developing like a ton of different modules and that have interdependencies, you have this issue of like having different versions inside of each node modules folder, and so lerna also solves the issues of like development and this whole workflow by sort of linking together the packages to pretend that you're working on one like normal version all together. And this sort of helps build before you're even starting to publish stuff. So yeah going back to the original question, if you plan on wanting to publish a bunch of different modules or even just a handful of them, it can be useful. But I wouldn't introduce it just for the sake of introducing it. That's never a good thing to do with any tool (laughs).

    KENT: (laughs) Good point, pro tip (laughs).

    STEPHAN: I think that lerna is something that got developed for very big projects. And I think if you grow really, really big you have very specific problems and I think lerna isn't something I would use if I don't feel the problems and if I don't have something that I really want to solve. It's not something I just use for because I want to use it, which is a bit different than with semantic release.

    KENT: I almost feel like that's in a similar vein to something like GraphQL and Relay. Those are cater a lot better to really, really big problems. Although like it's fun tech so you know, whatever (laughs). Cool. So let's go ahead and we'll get into our tips and picks section. So I'll go ahead and we'll have Pam go first and then I'll go and then we'll give our guests a chance. And I think this might be a little bit of a surprise for James, so we'll let James go last (laughs). So yeah, Pam why don't you go ahead?

    PAM: Sure so my tip for the week is not so much a tip, but I kind of fell into an internet hole trying to figure out what the NYC and istanbul/nyc stands for. As far as I can tell I think most, a bunch of you all are smiling but so that won't come across in audio, but you find out, let me know. I'm interested to know. So my pick for the week though is something I think is really cool, LamCI is a serverless, continuous integration tool. So it's pretty neat. So if you (unintelligible) a build server but you don't want to run a build server, you can use LamCI to run your continuous integration on AWS lambda. So it's really neat. It's all JavaScript, so it's awesome. Definitely check it out.

    KENT: Very cool. So for me, I have one tip and that is automate things. So I have a link to a blog post that I wrote where the premise is saving time isn't the only reason for automation. And in the case of like publishing packages and stuff, I've definitely saved a ton of time by automating things. But yeah there's a lot more reasons for automating things, so I recommend you automate stuff. And then for my picks I pick ngrok, if you haven't heard of ngrok. It's secure tunnels to localhost. It is fantastic. A really, really great tool. I recommend that you use it. You probably have use cases for it. And then I am also going to pick my Egghead.io course, How to Write a JavaScript Library. I think I've picked it before but I think that it's really helpful if you're, whether you're just getting into writing open source or if you've been doing it for a long time, there are things in there that hopefully you can learn from. So, great. And I do talk about actually publishing like in the course I publish a package and it's yeah, so good stuff. Alright, John why don't we have you go next?

    JOHN: Alright cool, so my first tip is reduce barriers for contributions. So that means that if you have code style checking and things like that and linting maybe make it an optional fail, just so you're not bombarding a new contributor with tons of nitpicks, right? It's easy to merge and cleanup after than it is to sit there and berate them with like, "a semicolon here, a space here, yada, yada, yada." So I find it's easier to get happy contributors by being a little loose on the guidelines to a lot of them. Like I publish the same contributing text as everyone else that says, "Hey, use this style checker," and you know I have all the builds the scripts in there to do it but if they don't I'm a little lenient on that and allow them to go ahead and merge the commit.

    The second tip is volunteer. If you see a project that is lagging behind and not releasing as regularly as you'd like or maybe they've gone, the repo has gone cold. Usually just pinging the author and saying, "Hey, I'd like to pick it up and help out," you'll be surprised. I mean I've done that to a couple of projects and brought them back from being neglected. So I would say go for that. And you don't have to, by doing that you don't have to take on the role alone, you can then start to prime other contributors to become core as well. So I've, I'm repo-sitting is.js at the moment and so while the maintainer is away, I'm there closing issues, merging pull requests, getting it ready to do a version bump but I'm also finding new contributors that would like to become core, so I can then step out and then the project is then continued to be maintained and updated.

    The pick for today is ESLint-plugin-import. So this is an ESLint plugin that will help lint your ES6 modules and they are just now adding unambiguous grammar support, yay! So unambiguous grammar is part of the node proposal for handling ES module imports. It basically states that your ES module must have at least an import or export declaration. And so this linting role will help validate that. It's my baby step into getting it included into ESLint, the parent linting project but we'll start off with a plugin first. And so there, that's the one. t's called again ESLint-plugin-import. So check that out.

    KENT: I love that plugin. It has saved my bacon a lot. It's awesome. Stephan, why don't you go next?

    STEPHAN: Yeah, sure, so for the tips as Kent you mentioned life hacks and automating publishing works every time. I have one life tip, if you are able to, always bring your skateboard to the airport because that's a huge time saver. And for the picks, I wanted to pick npm pack and npm prune. We talked about them before so I'm just repeating it these are very, very handy commands. And another thing I'm picking is the npm changes feed. So the npm registry is for traditionally was a CouchDB instance. And yeah sorry, just it didn't show up and so it was just a CouchDB or a couchapp. And the changes feed is still available which is skindeep.npmjs.com. And using just standard CouchDB tools you can just get information about packages in real time and you can build really cool things with it.

    And third thing is shrinkwrap. I just wanted to give you the tip like I've experimented with that in the past that if you publish a package and you have a shrinkwrap file present the publish or rather the install is going to respect the shrinkwrap, so I am experimenting with like only generating not having the shrinkwrap file in the repository but generating it on publish so that when users install the package you are really, really, really want to have certain versions of, you can just use the shrinkwrap to have the exact same dependency tree as at the time when you were publishing. I think that's it, yep.

    KENT: Interesting. Hmm, I'll have to think about that for a little bit. Oh sorry, John, did you have a comment?

    JOHN: I was gonna say, if you shrinkwrap, I think it means it bypasses the cache too. There's other packages available that does something similar to shrinkwrap but bypasses that. I'll have to dig it up and we'll put it in the links below, cool.

    KENT: Sweet. Yeah, that would be cool. Okay, go ahead Henry?

    HENRY: So my tip is that if you ever have like a question about like the code of a project or something like that, it could be that someone just needs to make a PR for it and the contacts on the (unintelligible) Dan Abramov he posted it on Twitter why the Babel output for imports had two variable declarations in it. And later, we looked into it and it's like yeah it didn't have to be. So it's just that no one really thought of in-lining certain things. So a lot of times you know if you have a suggestion, you know you should bring it up and maybe either ask someone else to do it or make a PR for it. And then yeah, and I made the PR so hopefully that goes in soon (laughs).

    And then my picks, there's a project called Lebab, which is the opposite of Babel so if anyone's looking forward to using ES6 and they want to use Babel but they want to like hand translate their ES5 to ES6, they can use this project called Lebab, which is literally just Babel backwards. And the project used to be called Five to Six. And then my last pick, so I made a Chrome extension a while ago that what it lets you do is when you go to a PR or an issue and you want to know how many issues or PR's that a collaborator has made before you can know that. So if someone's coming to your project for the first time it will tell you at the top of their name. "It will say like, "Oh, this is their first PR to this project." So then you'll know like, "Oh, I can like help them out," or you know their experience and stuff like that.

    KENT: Yeah, I love that extension it's awesome. And I also love Lebab. It's a fantastic project. It's really impressive, Cool. Now, James.

    JAMES: Yeah, my tip is go home, stop working. Take a vacation. Don't work on the weekends. JavaScript is cool but the other side of your pillow is cooler. So yeah, I wasn't always there and more people should be there. So yeah. My what's the other term that we use, picks? My pick for the week is flowtype.org. If you go to flow is a static type checker for JavaScript. It's great at incrementally migrating your system to having types and if you've ever had the problem of "undefined is not a function," then this is for you and you can use it with a couple different IDEs and make the experience much nicer. It's sort of what I've been working on during what Facebook calls boot camp. Yeah, check it out. It's great.

    KENT: Awesome. Great. Thanks. This has been a great show. Let's wrap up with a couple closing announcements. So yeah, just like to give a shout out to our sponsors, ReactJS Program is a master the ReactJS ecosystem with Tyler McGinnis. And Sentry is cross-platform crash reporting, so check them out. Thank you silver sponsors. If you have suggestions for the show, for guests or topics or both, go to JSAir.io/suggest. If you have feedback for this show or any of the other shows or the show in general, then go to JSAir.io/feedback. And if you want to jump on our weekly newsletter that gives highlights about the show and other interesting things, then go to JSAir.io/email. And then as always, we are a weekly show, so check us out next week on getting started with web audio. Should be stellar. And with that, I think we'll just say goodbye. So thank you so much for our guests coming. Really appreciate it. And we'll see you all later!
  `,
}
