/* eslint max-len:0 no-trailing-spaces:0 */

export default {
  title: `Chakra, Microsoft's Open Source JavaScript Engine`,
  guests: [
    {
      name: 'Gaurav Seth',
      twitter: 'gauravseth',
      tips: [
        `We’re new to open source, but we’d love to hear your feedback ([ChakraCore](https://github.com/Microsoft/ChakraCore))!`,
      ],
    },
    {
      name: 'Steve Lucco',
      imgSrc: '/episodes/2016-01-27/steveluc.png',
      link: 'https://www.linkedin.com/in/steve-lucco-b5084958',
      tips: [
        `Use the web programming model for as much as we can`,
      ],
      picks: [
        `[Electron](http://electron.atom.io/)`,
      ],
    },
    {
      name: 'Ed Maurer',
      imgSrc: '/episodes/2016-01-27/edmaurer.png',
      link: 'https://www.linkedin.com/in/ed-maurer-6ab4a6',
      tips: [
        `Check out [TypeScript](http://www.typescriptlang.org/)`,
      ],
      picks: [
        `[Julia Holter](http://www.juliashammasholter.com/) album - [Have You in my Wilderness](http://www.amazon.com/Have-You-In-My-Wilderness/dp/B011DHCNTE)`,
      ],
    },
  ],
  description: `
    Microsoft has been making some pretty awesome
    moves in the world of open source recently.
    At JSConf in early December, it was announced that
    Chakra, Microsoft's JavaScript Engine
    that powers the Microsoft Edge browser
    (with better support for ES6 than babel or Chrome),
    will be open sourced. Join us as we talk about
    Chakra with some of the subject matter experts!
    `,
  podbeanId: 'wgctq-5c219b',
  youTubeId: '0WdFvLSEX8c',
  shortUrl: 'http://jsair.io/chakra',
  host: {
    links: [
      `[Wallaby.js Sublime Plugin](http://jsair.io/wallabyjs-sublime)`,
      `[What open source project should I contribute to?](https://medium.com/@kentcdodds/what-open-source-project-should-i-contribute-to-7d50ecfe1cb4)`,
    ],
    tips: [
      `Get involved open source`,
    ],
    picks: [
      `[How to become a better hacker](https://glebbahmutov.com/blog/better-hacker/) by [Gleb Bahmutov](https://twitter.com/bahmutov)`,
    ],
  },
  panelists: [
    {
      twitter: 'drboolean',
      picks: [
        `[Redux Saga](https://github.com/yelouafi/redux-saga)`,
        `[Simon Richardson’s Free Monad implementation](https://github.com/fantasyland/fantasy-frees)`,
        `[Brian McKenna on fantasyland](https://vimeo.com/98096838)`,
      ],
    },
    {
      twitter: 'getify',
      picks: [
        `[v8 gets ES6!](http://v8project.blogspot.com/2016/01/v8-release-49.html)`,
        `[Developer Fallacies](http://www.heydonworks.com/article/developer-fallacies) by [@heydonworks](http://twitter.com/heydonworks)`,
        `[Ember-CLI-Mirage](http://www.ember-cli-mirage.com/)`,
      ],
    },
    {
      twitter: 'linclark',
      links: [
        `[Code Cartoons series on Relay](https://code-cartoons.com/)`,
      ],
      picks: [
        `[React’s diff algorithm](http://calendar.perfplanet.com/2013/diff/)`,
      ],
    },
    {
      twitter: 'pamasaur',
      picks: [
        `[Higgs JavaScript VM](https://github.com/higgsjs/Higgs)`,
      ],
    },
  ],
  transcript: `
    KENT: And we're live with JavaScript Air. Hello everyone, my name is Kent C. Dodds and I am your host for this live broadcast podcast, all about JavaScript. We're going to be talking about Chakra, Microsoft's open source JavaScript engine. We're really excited about the cool things that Microsoft has been doing of late in the open-source world, and excited to talk with some subject matter experts about ChakraCore.

    So before we get into the show too far, I'd like to give a special shout out to our sponsors. Egghead.io is the show's premier sponsor, and they have a huge library of bite-size web development training videos. Check them out for content on JavaScript, Angular, React, Node, and a ton of other stuff -- Typescript included. Our guests will appreciate that. Frontend Masters is also a sponsor, and they're a recorded expert-led workshop with courses on Advanced JavaScript, Asynchronous and Functional JS, as well as a lot of other great courses on frontend topics. TrackJS reports bugs in your JavaScript before your customers even notice them, and with their telemetry timeline, you'll have the context you need to actually fix them. Check them out and start tracking JavaScript errors today at TrackJS.com And Wallaby.js actually has an exciting announcement. They just released the beta version of their Sublime Text plugin. What is Wallaby, you ask? Well it is an intelligent and superfast test runner for JavaScript that continuously runs your tests. It reports code coverage and other results directly to your code editor, immediately, as you change your code. Very, very cool. Check them out at Wallabyjs.com. And Codecov. Codecov is coverage done right. Reduce technical debt by visualizing test performance and faster code review. Codecov is highly integrated with GitHub and provides browser extensions. Learn more at Codecov.io. And that is our sponsors, we're grateful for them. They are allowing us to do some pretty cool things with this podcasts for our listeners.

    And so, some other announcements: remember that this is a live show, and so if you are watching live and have any questions for our guests or the panelists, or questions in general about the topic, then you can tweet with the hashtag #jsAirQuestion and get your questions answered at the end of the show. And then our podcast is a weekly one. And so next week, our show is going to be JavaScript debugging with Alex Liu, Todd Gardner, and Yunong Xiao. I'm not sure if I pronounced any of those names right but that's... they can correct me next week. (laughs) And as always, follow us on Twitter and Facebook and Google+ to keep up with latest and greatest from JavaScript Air.

    Okay, so let's go ahead and introduce everybody who's here. So for our panelists, we have Brian Lonsdorf. He's muted.

    BRIAN: Hi! Now I'm unmuted.

    KENT: And we have Kyle Simpson.

    KYLE: Hello, everyone.

    KENT: And Lin Clark.

    LIN: Hey there.

    KENT: And for our guests. Oh, I didn't even practice these names, I hope I get your name right. It's Gaurav Seth?

    GAURAV: Hi there.

    KENT: Is that right?

    GAURAV: That's almost right, Kent.

    (laughter)

    KENT: Almost right. Alright, and Steve Lucco?

    STEVE: Hi.

    KENT: And Ed Maurer.

    ED: Yeah. Ed Maurer, howdy.

    KENT: Maurer, okay. Yeah, I should've practiced ahead of time. I have a history of getting names incorrect, (laughs) so it's nothing personal. Okay cool, so let's get an introduction through our guests before we get into the core, no pun intended. Actually, there was a pun intended, totally intended, of our subject today. So, yeah, Gaurav, if you could introduce yourself, give us a brief background on your history.

    GAURAV: Yeah. So I've been with, you know, I'm a lead program manager on the Chakra and the types of team here at Microsoft. I've been with Microsoft for about, about 14 years now, mostly working with compilers, developer tools. And I've been in the web space for like almost the last 10 years now. Love the web, love JavaScript, love everything that we do.

    KENT: Awesome. Steve, why don't you go next?

    STEVE: Okay. I wrote some of the original code of Chakra. I'm the architect of the engine, and I've been functioning as sort of trying to help Microsoft get really passionate and committed to the web development space and to open-source around that. And so I've been working on that for a number of years.

    KENT: Cool, thanks for your efforts, that's awesome. And Ed, what can you tell us about yourself?

    ED: I've been working in developer tools here at Microsoft for 11 years, (mumbles) times. Spent a lot of time working on the C# compiler a whole lot of time, probably 8 - 9 years, something like that. And then before that, I worked with Microsoft in the video game business, so I have a whole other separate career that's very different from my developer tools one.

    KENT: Cool, I think we're actually going to change the subject of this podcast and talk about your video game history?

    (laughter)

    Just kidding. Tthat would be an interesting topic though. (laughs) So, I think a really great intro question to get our conversation started is let's say that I'm totally new to the whole idea of Chakra and I've never heard of it before. Can you give us a basic idea of what is ChakraCore?

    STEVE: Well, it's an implementation of JavaScript, I guess is the easiest way to say it. The focus of it is to be extremely good at compliance with the standard, and to be extremely fast. And then beyond those goals are the goals of scalability on the server side and easy interrupt with native code.

    ED: Yeah, so if you're, if you're just a I guess if you're just hearing about ChakraCore for the first time and wondering what it is and why it's relevant to you, maybe as an app owner, it would be interesting to think about adding scriptability to your app, right? That's one thing that people have thought about when they think about ChakraCore and its utility. Maybe they want to have you know, JavaScript-based scripting extensibility point to their app, and one of the ways they can do that is host ChakraCore themselves and expose their object model to JavaScript. That's the way I, coming from the game world, that's the way I almost always go on about Chakra, at least in you know, as it pertains to just the ordinary person on the street, right, who owns an app, because we certainly used to think about doing that in video game land.

    STEVE: Right. Mostly done with Lua, right?

    ED: It was commonly done with Lua, yes, but I think it would be great to have it as a JavaScript.

    STEVE: JavaScript is so fast these days and so well supported by libraries that it would have substantial attractiveness relative to Lua that way.

    GAURAV: Right, I think the only other thing I would add you know, what Steve and Ed said, what they just said is, you know, there's no real difference between Chakra and ChakraCore in its own ways. It's the same key ports of the JavaScript virtual machine or the JavaScript engine, which, you know, Chakra has been the engine that's been powering Internet Explorer, that's been powering Microsoft Edge ever since Edge got launched. And the only key difference is that ChakraCore has the exact same capabilities as Chakra, except for two things: one, it does not have bindings to the underlying operating, the underlying Windows Operating System and the Edge browser, which are very scenario specific; and the other thing that ChakraCore does not have is ChakraCore actually is going to be supporting more than set of diagnostic API's, which we hope to make both intra-operable, which would be made intra-operable across other virtual machines or other JavaScript engines and other tools of that type. If that makes sense.

    KYLE: I have a question on the technical side. So my first experience with a JavaScript engine was pre-node 2009, 2010, and I'd heard of this thing called V8, and it was this engine that you could like write some C++ around. So at the time there was like really almost no documentation for, and I don't even know if there is today, but there was definitely no documentation about how to do that other than kind of some example stuff that it shipped with. But I wanted to build a server-side JavaScript thing before there was a node and I started doing that with V8. So if I wanted to do something like that today, how would I get started with trying to create an embedding environment or a host, you know, set of host bindings around ChakraCore? Would it be similar with C++ or is there a different approach to it?

    ED: Well we have a flat C posting from API that's, that we document, it's been documented in Chakra, it exists there in ChakraCore. And so it's essentially, you're in the business of going and writing a new netci that makes, that binds to these things and figures out how to, uses that API to expose whatever object model you had in mind to your JavaScript.

    GAURAV: Another thing I would add is yes, it's class C so you do have the flexibility, you know, whatever you want to use, you know, C++ on the top of it, or there's also like from manage site like from C# side, we have another shim layer which kind of can fall into those class C APIs. The thing I would say in terms of documentation and getting started right, to embed ChakraCore in your projects is go get the repo and for ChakraCore, you know, we have a bunch of information there including a lot of documentation, embedding guide, link to samples, where I think we are we have or we will shortly be publishing sample as to like how do you start embedding from a C# app, there's a C++ sample as well.

    KYLE: So it sounds like there is an option of going down the route of what would be more traditionally seen as like Windows application development in the sort of .NET-ish world, but there's an option of going at ChakraCore just like straight out from the gnc you know, the C compilers sort of thing, is that what you're saying?

    STEVE: That's right. When you were experimenting with V8, were you using C++ or C?

    KYLE: Yeah, well they basically only had a C++ set of bindings, so yeah, it was just C compiler.

    STEVE: ...comparison between what it looks like to bind to Chakra versus V8?

    KYLE: Um, we don't have to get into too much of the details. But I just wanted to get my head around am I... if I wanted to work with ChakraCore, am I sort of getting into you have to understand Windows development, or is this more of a just straight up C, C++ kind of a thing?

    STEVE: It's more of a straight up C, C++ thing. And one of the key differences with V8, you need to learn about their memory management ideas. Like they have sort of a smart finder that you'd have to use in order to get it with the garbage collector, but the Chakra garbage collector is conservative, so it'll actually walk your stack. So as long as you only store pointers to JavaScript objects on your stack or in data structures that you allocated using the Chakra garbage collector, you don't have to do any smartpointer discipline in order to work with it. So the code is a lot smaller because of that. It's a lot more straightforward to work with.

    PAM: Have you already covered if, do you need... I was reading that you need a Windows machine in order to build ChakraCore. Is that true?

    GAURAV: So, that is correct. So today, you know, and we just open-sourced, we were primarily working on... Chakra was mostly Windows-only. And today, you need a Windows machine to build it. But one of the things that we are very actively working on is taking ChakraCore cross platform, and that's one of the top-most things on our priority list. And we're actively working with it. I think we're starting with a port to Linux, which our team was already working on, starting with I think the win tool is what we will be targeting. So as we start expanding, you know, this thing will not be a Windows-only thing. We definitely envision taking ChakraCore to a lot more platforms.

    STEVE: The Linux is built with clang, so it'd be entirely independent of the Windows tool chain.

    KENT: Did you have a question, Kyle?

    KYLE: Yeah, I was just going to ask, so there was a story awhile back about the move from Internet Explorer to Microsoft Edge browser. And I know one of the big moves there was to remove a bunch of Microsoft-specific stuff that had been added into the environment. So as it stands today, is ChakraCore completely and entirely just ECMAScript? Or are there additional things in there that are part of the Microsoft world that are still being pulled out? Where does that stand?

    GAURAV: No, it is completely and fully just pure ECMAScript at this point in time. So one of the things we did during the Windows 10 timeframe was we did this biforcation of, you know, kind of Chakra or like in the entire platform you can think about, and it is a part of that. What we did was, you know, there was this new Chakra thing that was born for supporting the evergreen browsers and we removed all of the old, you know, "Microsoft" so-to-speak things, from Chakra. And, just as an example, its active-x objects, right? ChakraCore or Chakra do not support this active motion of Active-X object now. So all of that is only supported for IE11 and the older versions, but in the Edge version of Chakra that we started shipping, we removed that. And ChakraCore actually builds out of that all-new core like we talk about, so it does not have anything that is non-standard, except of course, there might be bugs, which one cannot say that there will be no bug, but if there is, we will love to hear that from any of the users and we would work to make sure that those things go away.

    KENT: So, since you brought it up, I'm curious about Internet Explorer and I sort of have two basic questions about it: first, what was the driving factor in deciding to rewrite the engine from scratch? And second, what is the future of Internet Explorer?

    STEVE: Well, so first of all, we can't really speak for the Internet Explorer team, so in terms of policy questions, we'll let you have a show with them. But I would say Microsoft as a whole is moving toward supporting the web platform in its standards form and trying to be as compliant as possible. And so in order to really do that, you can't just do it from a policy level, you have to do it from a code level. You actually have to separate yourself from the old code and make sure that you have a model that actually is compliant with everything in the set of web standards. And so, I think the effort of building Edge is largely to get enough of a new code base so that you can know that you are implementing the standards correctly.

    GAURAV: Also one of the questions is about why did we start with Chakra? That's a great one for you.

    STEVE: You mean why was that the first effort even long before Edge?

    KENT: Yeah.

    STEVE: Well, it's because we wanted to prove that you could do this. And at that time, MSHTML, the code base that you're talking about for Internet Explorer, it's a much bigger code base than just the JavaScript engine was. The JavaScript engine's about a tenth the size of the browser code base. So we were trying to prove you could be standards compliant... and in fact, Chakra wins a lot of these comparisons now in term of how compliant are we with ES 6 or ECMAScript Test 262 and other benchmark sites saying how compliant you are because we were trying to show, yes, if you put enough effort in, you can build a new code base that is compliant with the standard. And that it took a while for the Internet Explorer team to, with that much larger code base, to make that same leap.

    KYLE: I had another question, sorry I'm dominating all these questions, but I'm super curious, so. Last week's episode I actually was the one that brought up the announcement that you all had made the official pull request for inclusion into node. And I'm super excited about that, but I would love for you to speak a little bit about where you see the differentiating factors between Chakra and V8 and maybe even Spider Monkey, if you could speak to it. But what makes Chakra different and what makes it compelling as an option for building something like node, for example?

    ED: Well one thing that I think about on that topic for ChakraCore is that it's got an interpreter. And so for some scenarios, being able to build perhaps node, minus the JIT code base and operating the JavaScript just with the interpreter, might make it easier to take such a code base and target new instruction sets, right? Because building up a JIT, for example, against some instruction set that you've never seen before is a costly endeavor...

    KYLE: Can I stop you right there and ask you to actually explain that to the audience a little bit more? I think I know where you're going, but can you explain what you mean by JIT and why that would matter to the instruction set?

    ED: So, the execution pipeline for JavaScript is essentially one where we, the engine takes in a script file and parses it and this is your compiler kind of 101 stuff, parses it, essentially makes meaning of all of the identifiers that exist in the program text. And then in Chakra, we take that, those definitions and turn the representation into a byte code that can be interpreted. Right, so it's a switch statement about each byte code operation goes and executes something. And so your source will sit there and execute. And in the meantime, we're doing things like gathering profile information, understanding the flow of types through the various code paths and understand which functions are called more frequently than others. And based on this data, we have heuristics to make decisions about when we should turn around and take the next stage of making your code faster by compiling it actually to machine code and not interpreting it. So on a function by function basis and actually even lower than a function, we can go and decide this function is being called a whole lot and we know a good deal about it and we can go and now turn it into machine code. And that's what the JIT, the responsibility of the JIT is, the just-in-time compilation.

    KYLE: So to summarize here if I understand, for the audience's sake, to summarize what you're saying is that one of the strengths you feel about ChakraCore is that you can have the option of running this addition JITing stuff, which target specific knowledge about the platform and the instruction set, but you have the option of not doing that, which means that it's easier to get into other environments, is that correct?

    ED: Yeah, the part about not doing it is the one that I was trying to make, yeah.

    STEVE: And one of the things is memory constraints, small memory would favor the interpreter say over generating a bunch of machine code. So if you had a sensor device or something and you wanted to put JavaScript down in it, having a fast interpreter is a useful tool. And I should say V8 is now developing an interpreter as the Munich team that contributes a lot of code to V8 is doing that. And more generally, we should say we love V8 and we think V8 is a very good implementation. And we're really good friends with Lars who was one of the people who started the V8 team. So our goal is not to be like against V8, but we do think that even if they were exactly the same and you could do exactly the same things with them, which is not true, it would be good for the community to have two complete implementations out there. Because once you can compare two, then you can think about what direction you want to take a JavaScript engine. And by seeing the similarities and the differences, you can learn a lot more about what possibilities there are for the implementation. So just having two, or with the things from Mozilla, even more open-source implementations out there is a good thing.

    I think that another is if you look at the way the TypeScript's open source project has interacted with the community, the Chakra team is planning to interact with the community in a similar way, so taking a lot of pull requests, having a very active issues list where we really take the community seriously and take their input seriously in terms of the direction that the engine will go. I think there are some differentiations there in how we plan to be an open source project. So one of the things we're hoping to do is give the community a lot more input than, for example, they have had in the direction of V8. And you can see the proof of that in how we handled the TypeScript experience.

    GAURAV: Right, I think I would add two more points to this in terms of like the images that are framed. So number one is, I think each engine is like great across a set of scenarios like, you know, it's individual piece of core. It's great for some scenarios, it's great for some platform. And each JavaScript engine that is out there today, that's something unique and you know, it's catering towards a different set of needs, like, even though everything works in a web browser. So what having a multiple engine brings is like it gives the developers the option to see which platform it's targeting and what advantages can that bring for that platform. So they do have that and they can utilize it. I think associated with that, each VM also has like a bunch of tooling that is already available. When I say tooling it's like hey, what visual, like what IDEs do you use, what editors do you use? So that is also kind of attached to each VM and that becomes like a developer choice like, "Hey, I can use these tools or these tools and I can get my work done." So that I think is a very big advantage of having multiple pairs.

    STEVE: Like time travel.

    GAURAV: Yes, that's true. Like I mean the JavaScript engine maker can keep waiting and advancing the state of the art there in working with their partners, the ecosystem (mumbles). The next thing that I would really say is that even if you think about standardization of features to the core of the web browser, like JavaScript features TC39, we said there would be mostly be debate about features, we think about what innovation that we have to bring. But a lot of that thinking is only coming from the perspective of the depth, right, because that's when most of the JavaScript engines combine. Today, with only one player being there, you know in node, which is the V8 team, like yes, they will be big, probably would be presenting node, but for all the other players, we are not as concentrated because you know, not everybody is watching that. So getting more players involved also would definitely, I think, help in the overall evolution of the language if not only focusing on the client on the web, but even thinking through these, some of these server scenarios.

    KENT: Cool, I...

    BRIAN: So, can I ask a quick question? You mentioned about memory constrained environments and I've heard things about IoT being a really interesting application for Chakra and I was curious about if you feel that's a good target. And also, I wanted to ask about some of the security features you put into the engine.

    GAURAV: Sure, I can take the IoT one. So I think one of the things, so the reason we started working on node and we brought ChakraCore to work with node was essentially because we wanted to power the Windows IoT platform that was coming up. That was our starting point, that's where we were like there's a gap that exists. Now in Chakra, as we've talked about, you know, Chakra has this capability that you can really not have the engine input, just have the interpreter which is, you know, a much tiny piece, must easier to port, you know, you can put it in a much more memory constrained environment and it will run on those devices. So that's where the whole IoT thing started. With our coding efforts around IoT, it's not that we have not specifically carved down and said like hey, it has be (inaudible) and reconstrained, but it's one of the things we ought to be looking at, which will probably be coming after the whole cross platform thing because I think the first thing we need to nail is like going to more platforms beyond Windows. And once that happens, we will actually start looking at okay, now how do we start constraining the size of memory that is needed to effectively run JavaScript on the tiniest of devices possible. You know, it's just one step at a time.

    ED: I think, we'd love to hear what people want to do with it, so what scenarios they want to take it to and then help see if that is applicable, if ChakraCore is applicable there if we could, you know, maybe make it so.

    KENT: So just to verify my assumption then, the reason that you would take out the JIT compiler is just so that it saves on memory because the JIT compiler like takes a lot of memory. And on these memory constrained devices that's a problem. And so am I right in assuming that that makes the tradeoff performance for size of memory? Is that kind of the tradeoff you're making there?

    STEVE: That's correct. And so the Chakra interpreter has been... we started with an interpreter back in late 2008, 2009 when we started because we thought it would be the best way to make fast page loads and that's been proven out, like it's proven that most of the code on most page loads runs in the interpreter because that's the fastest path to getting the page fully loaded. And so we've had, you know, about six years of experience making that interpreter small and fast and so we think that that would be a good thing to benefit IoT environments because we've had that amount of time to tune the thing.

    KENT: Sweet! Cool. So I also was kind of curious, you talked about this a little bit but I know that there's a pull request out on node right now to make node work with Chakra and I wonder if you have any updates on the status of that or like what does that mean for the node community?

    GAURAV: I think the only thing that I would say to that is I think we are starting  the process of having a good conversation with the CDC members and the TSC members. I think there has been a lot of, I mean, it's been a great discussion in certain ways because I think when we see and we talk to the CDC members there are some good questions that are being raised. And I think it's great for them to be given so much thought to how to evolve node, so it's going to be great for the community. I think we don't have anything concrete to say as of now as to (garbled audio), but we are really looking forward to working with them. And I think they are in the process of kind of setting up a couple of meetings to make sure that, you know, we set up those communication bridges. Because I think initially what would be the key is setting up those communication bridges and making sure that we all can work together to help them in whatever ways we can.

    KYLE: On that topic, I was actually pretty curious about, so I'm a big fan as I said a few minutes ago of the idea that we're going get more choice here, but every decision like that does come with some particular or potential downsides. So right now we have four or five, six years' worth of node that's only been on one JavaScript engine. And with the exception of the community fork, iojs fork, it's been reliable that you kind of knew if you wrote some code and you knew which node you were targeting, it was pretty reliable that it was going to... your code was going to work in a particular way. So you knew what features were there and what features were not for example.
    So one of the, I think, the concerns that is going to have to get hashed out by the community is this question of what happens when there are two or three or more JavaScript engines in the node world, which sort of moots one of the big advantages that people have liked about node which is I get away from that whole like cross browsers thing. Well , now, I'm sort of like going back to that, I'm having to wonder if the person is running node with Chakra versus node with V8. Is this particular feature present or not or more nuanced? Is this feature optimized or not, for example. So I'm curious your perspective on the tradeoff that may happen here if we move in that direction, now it's going to be much more complicated to figure out how to write reliably performant and operative code in node.

    STEVE: So, I think it's important to know that doing an analogy between the browser situation and the JavaScript engine situation will be misleading. The browser situation is like far, far, far worse in terms of the standards, non-compliance we've had. If you look at, for example, the test 262 side or if you look at the various matrices that are out there that compare features, Spider Monkey and even the things from Apple and everything are much more compatible with each other than browsers are by far. So you're not looking at anywhere near the compatibility issues. It would mean more things like how many forward looking features are present or not present. Like Chakra has certain things like proxies that are not implemented in V8 yet or they're coming or they're now just coming out now. So, it's more a question of how cutting edge do you want to be. And so what we imagine is that people will play with features that are in one script engine, but are not yet in the other script engine. But that they won't actually deploy until all the script engines are at a certain level and you can just count on it. Because the compatibility matrix issue with JavaScript engines is much better than with browsers.

    KYLE: I can certainly appreciate that. I mean you're absolutely right, it's at least over a magnitude difference in the variances that are observable between them. And the nice part about JavaScript engines is there's one clear standard, it's pretty obvious what you need to make happen and we're certainly long removed from days when JavaScript had a lot of variances, so that's good. But I guess I would push back a little bit and say, one of the advantages that has grown the node ecosystem so fast is that it has promoted the idea that you can simply write a module, distribute it on npm and not worry too much about it. And what we're seeing now is there's more and more of this shift to saying, "Well, I guess we're just going to have to run everything through a tool chain, through a set of transpilers, transformations because we can't really predict the environments. So let's boil it down to the lowest common denominator."

    So I guess where my concern is is that we're going to say at the expense of... for the benefit to be able to have multiple choices -- which is good -- we're going to have the expense that writing code that can run in all of those different node environments is going to get a lot more complex very quickly. We're going to have to shift even a tiny little library that you ship on npm, you're going to have to ship it with a set of instructions or bindings or whatever that says, well, this thing has to be run through Babel with these particular configurations, so that it transpiles all the way back to some subset of the JavaScript features. So the good news is that a lot of engines are approaching 100%. They're in the 90s on ES6, but JavaScript is not slowing down. We got a whole slew of stuff that's coming in ES 2016. And relatively little of that has been implemented yet, so there's still a lot of variance.

    GAURAV: So and no, you bring a great point, but you know, the thing... (unintelligible) like even with a single engine, right, like you know people think of ES6 as a big feature set that is landing and that there are these differences, but then JavaScript does not stop at ES6 or ES 2015. You know, going ahead, it would be an evolution like we are in this phase where we will be redefining the standard every year now going ahead. So there will be new features coming every year, you know, it's the concept of evergreen browser, evergreen JavaScript and it just keeps evolving. So even if you just have like, this not a problem only with two engines. Like it's a problem that would exist like even with a single engine because you keep adding up, right? Over a period of time. And you have to figure out a solution even if you just have one engine. Yes it would be a little bit more constrained, but I think having two engines in this conversation is kind of in a way helping or helping folks form an opinion about long term, what would they really want to do.

    Because you said it very well; it's not slowing down at any point in time and even if you are with a coded engine like, you know, you went with V8, there was many abstractions that were created right? I mean people created that because so many VMs respectively just cannot say, "Okay, I'm locked down with this thing, right?" And then as things evolve as developers, we'll have to see what is the... or the community, we'll have to work with the community to see what is the best way to evolve that? Should there be a shim layer, in such a way that one, it provides you the least compact breaks, you know, when you go to move things or need dependencies. And two, it should still remain performant for those scenarios because performance is also a key. So I think we look forward to working with the folks from V8, folks from other JavaScript engines, folks from the node community and node foundation to discuss some of these things and start ironing them out over the next few months.

    KYLE: I'll yield to my other panels in just a moment but just to follow up and say I 100% agree with you that performance is a major issue because that's what everybody talks about with node. The transpilation story in the browser, there's things that are slowing down a little bit... not so big of a deal, but if you take even a slight half of a percent for performance off of code that's designed to run hundreds of millions of times, people get a little bit antsy. So I think there is a little bit of concern around that and I'm glad to hear that smart people like yourselves are thinking closely about it, so that's good. Thank you.

    ED: You're giving us a lot of credit.

    GAURAV: Yeah. (laughs)

    STEVE: The model we believe in to be clear is compilation down to JavaScript in advance, not at load time. Like the compilation at load time is convenient when you're developing in order to figure out what you're doing, but we believe in the TypeScript model where you end up generating high performance at idiomatic native JavaScript code and then running that over and over, so that there isn't performance overhead in the translation step.

    PAM: Yeah with that point I think the thing I might even be interested in getting other panelists to chime in on, reacting to Kyle's original question to, and your responses there, that it seems a topic in the JavaScript ecosystem today is kind of are we growing the, I almost would call it like a middleware chain set, like tool set. Like where it's like, there's the code that you write and then the thing that it runs on and then there's lots of stuff in between now. Or that seems to be the perception. And I just wanted to see if any other panelists wanted to... that's a popular topic to kind of hash out. And that, thanks for coming on to the show, but at some point, does the layer that you all are working on become a little "less important" to the people writing way up here?

    ED: Well, I think that there are a bunch of different concerns there, right? There's developer productivity, right? So I think, what I think you're talking about is the tool chain that one has to deal with in order to write JavaScript and or some language that's going to compile to JavaScript. And then, now our execution engine and that gulf there is a tool chain that's I guess it's very opinionated and many people have different perspectives on what they want to see in there. And to some degree, yes, that's a space of developer productivity. And then there's another space, which, I think, we're concerned principally in, although developer productivity is not... we're not ignoring this, but this run time performance, right? Deployment time performance and that's one of the things that we focus on keenly and that's, that's still going to remain important to whatever the developer... all the developer community need ultimately is that performance. So I wouldn't say that it's, there's clearly a relation between what you're writing up here and then where we sit in the stack. And, indeed, there are concerns about the editing pipeline too, but I think people are going to continue to be very focused on performance of that ultimate end thing and that's what we're all about.

    STEVE: Was that your question?

    ED: Yeah, did I answer your question?

    STEVE: I was just wondering like were you asking are engines irrelevant at this point because we're all going to have a much higher level view of what's going on or...

    PAM: I mean yes, a little bit of a chaos question, but I'm just trying to get the other panelists to talk a little more too. But I know Brian had a point, maybe his will stick better.

    BRIAN: (laughs) No, I just have a quick question about do you have any thoughts on formalizing which engine could run with a code? So maybe a flag or some kind of npm line for the module system. Perhaps there's a way to actually tell that this code can work with your engine only. Have you thought any about that or...

    ED: I wouldn't say that we've got to that sorts of details. At this point really it seems like mostly around the conversations are directed around node community, you know, deciding it all, whether or not multiple VMs is good for them. And then, once we cross that bridge and should they believe that it is indeed a good thing, then we can start talking about how to actually go and execute on such a thing.

    BRIAN: Well I guess the reason I bring it up is I've seen stuff in the Scala community where they actually in a package manager justify what compile version and things like that. And I think it at least helps the community a little bit more saying like, "Oh, I'm using specific stuff and if anybody is going to partner with npm with someone..." (laughs)

    ED: It's certainly a reasonable suggestion to think about and being explicit about your dependencies is always a nice thing to do. So it makes some sense.

    KYLE: Okay, I have another question for you. And I hope this doesn't seem at all like I'm picking on you, but since I have you here. Watching the evolution of the ES6 support grow in the various browsers, including in Chakra, I have been frustrated that it doesn't seem that there has been much of an obvious plan as to when things are going to happen and why things are happening in certain orders. And I know that from people... I actually know people on the Chakra team, so I know that some of that or a lot of that is probably driven just by various internal priorities of the company. But I have one particular question that I'd like you to weigh in on, do you feel like it could have been more effective or maybe I should just say for the future, would it be more effective for the JavaScript engines to focus on implementing the features which are not transpilable? Or, rather, if they're transpiled, they are in the slower versions of them? Would it be more effective to focus on those developments first, rather than on the things that are already easily transpilable? For example, proxies or the things like that that we've just not been able to use for a while because they didn't get any attention from the engines early on and there was no way to transpile them?

    GAURAV: There's, you know Kyle, great question. The thing I would say is there's actually a lot of things that go into figuring out what you need implemented first, what should, versus what should come after that. The one thing that is going to definitely change going ahead, right, is starting ES 2016 the one thing that before even ratifying some things in respect, you need to have a couple of implementations available for a given feature. So that's going to be up to the developers because as features are getting ratified, you are seeing implementations. And once the implementations are available, even other JavaScript engines would make sure that it (unintelligible) as we can. Because in the end, the goal for all of us is to make sure that developers don't go through that pain and they get that most interoperable set.

    Now, coming to your second question like, should we only target things that can be made available natively and you know, you cannot actually write a JavaScript (unintelligible) with that. I would say that we cannot make a general statement like that because, at times, there might be cases where you can use the JavaScript sugar to create something, but it might not be as perfromant. And, looking at the back in the days when were people are using that, you really need to get that performance. And to get that performance, you need it to be natively implemented in the JavaScript engine. And that's why I kind of started saying it's not really a clear black and white here, there are like a bunch of other things that go into it.

    And one of the last things I would add like you said that there were questions about why certain features were being done a particular way or what was the ordering. I think one thing that we have tried to change over the last year or so, year and a half starting with Edge, we've been publishing a road map for what the features are getting implemented and coming online at status.(unintelligible) it's not IE, but we do have a platform priority and a road map that is published at the Edge status site. And with ChakraCore going open-sourced, we have actually taken it to the next step that all of our road map is now actually are at our GitHub repo, so get ahead and print it out and check out our road map. If you have question, et cetera, we'll be happy to answer it, like if you are looking at specific things over others.

    ED: Yeah or if people have feedback. Say, "Hey, we have a good reason for why we want this to..."

    GAURAV: To come first, I mean that's...

    ED: Because we can hear that stuff, you know?

    GAURAV: Totally. It's a two-way communication.

    KYLE: Yeah, so I agree. I think it's been fantastic that you had the user voice site where people could vote on stuff. There's one particular feature that has irked me for a while as you could probably imagine. And it's proper tail calls and the reason for that is that that is an optimization that's a gateway to certain types of programming that are not practical in JavaScript. But there's a logical cart before the horse thing; if you wait for people to clamor for it very loudly, they're not going to clamor for it if they can't actually do it. So it's one those features that's not being implemented, it's really practically transpilable. And until it's present in an engine, nobody can actually unlock the benefits of it. We can talk about it theoretically or not. I don't mean to get too much into the rabbit hole on that, but I think there are things like that that have, the community has wondered why can't get some of this stuff. But overall, I'm very thankful for the progress we've made, it's awesome to see this attention happening.

    STEVE: So for a thing like that for the tail calls, if you look at the TypeScript open source project, which has been open sourced for a number of years now, you'll see that there's a whole bunch of issues on the issues list that are just discussions of priorities in the road map. And so we anticipate that the same thing will happen with Chakra where you can, right now, go to the ChakraCore site and you can create an issue and you can start a discussion of whether we should accelerate proper tail calls versus other things. And if it's anything like the TypeScript experience, there will be very good, high quality discussion of those sorts of things by the community. And in TypeScript, we've changed a lot of priorities based on these types of discussions. Because the community is smarter than any one team can be, right? By interacting with a broad community of people, you do get a lot of insights that you couldn't otherwise get.

    GAURAV: Totally.

    KENT: Great, I think I'm afraid we're going to have to start wrapping things up. So this has been a great discussion, thank you so much for coming on. We do have one question on Twitter and if anybody is watching live and would like to ask more questions, just tweet the #jsAirQuestion and your question will be heard. So Alex Booker is just an awesome person, but he asks, "What is the origin of the code name Chakra?"

    (laughter)

    STEVE: It wasn't the original code name of the project; the original code name of the project was Eze which is a little town in France that I, I went to on my honeymoon and really liked,

    (laughter)

    But what happened was Jim Allchin and Soma, Soma is the head of Dev Div but he's, until recently now he's a venture capitalist. And Jim Allchin was the head of Windows, but he has left for other pastures as well. They made that code name up together because they were like, "We need a really great code name for this project to compete with things like Spider Monkey." And so it was made up by like two Microsoft Executives jamming in a room together.

    KENT: So I was hoping you were going to say it had something to do with Naruto. If you don't get the reference, that's okay. (Laughs) Cool, okay so that's our Twitter question. So let's jump into our tips and picks and we'll let our guests go last. And again if you don't have any, that's fine, you can skip. So Brian, why don't you go first?

    BRIAN: So I just have a few small things this week. So the Redux Saga, it's been talked about the last couple weeks, but I thought give a link to that. That's kind of following the same Redux model, which is very interesting to generate your instruction set and interpret it and reduce it later which is kind of like building a compiler on a compiler, which is kind of a premonad approach to things. It's not exactly premonad but the same idea and that's getting really popular in the whole community. So a link to premonad library in JavaScript. And also just kind of already talked about the parentheses aspect that is around monads in the first place. So that's it.

    KENT: Cool. Thanks. Kyle?

    KYLE: Okay, a couple of quick picks. This is timely, so I'm thankful that Chakra has so much great support for ES6 and has really led the way. And I'm also thankful that today, it was announced that the V8 release 49 came out and they basically are catching up to Chakra in terms of ES6 support. They're in the 90s now too. So that's a huge deal. There's a ton of ES6 features that land with that one release. So hopefully that'll filter it's way not only to browsers, but also node. As well, so ES6 is looking really good in a lot of those environments. So that's exciting. Another one is a blog post that wasn't written today, it was written a while back, but I just discovered today, it's fantastic. It's called Developer Fallacies and I had quite a bit of a Twitter rant earlier and this was one of the topics that featured in that. But developer fallacies by Haydon Works. I recommend every single listener to go and read through that blog post.
    And lastly, this is going to sound strange since a lot of people know that I'm not a huge proponent of frameworks, but I'm actually going to recommend this as my final pick. I saw a friend of mine, sat down and taught me some Ember stuff and he was using a thing called Mirage, specifically Ember-CLI-Mirage which is a tool for test mocking. And it's not just for test mocking, but also for actually development mocking. He was using it to mock out API responses while he was doing development. I thought it was very cool, I'm certain there are tons of great ones out there, but I just wanted to give that one a shout out.

    KENT: Great. Lin?

    LIN: Okay. I only have one pick this week because this has been kind of a busy week for me, but I just finished up my Code Cartoon series on relay, which means that I'm starting a new one. (laughs) I'm starting a new set of code cartoons which are going to be about components and about the virtual DOM. And so since I've started that research, there was one article that I came across that I thought was really good if you're interested in learning more about the virtual DOM and React's diff algorithm. Christopher Chedeau actually wrote up a really good post that I hadn't seen before. It's been around for a while, but I hadn't seen it before and I thought some of the listeners might not either.

    KENT: Cool. Looking forward to that new installment. (laughs) Pam, I didn't mention Pam at the beginning of the show because she showed up a little bit later, so hi Pam.

    PAM: Yeah, I realize that it's that's it's probably going to be confusing to the audio people that I just kind of appeared. But yeah, hi, so in our theme well since we had our guest on Chakra today, I'm going to pick a JavaScript compiler call Higgs. And I especially like them as an open-source project because they're also very friendly to beginners. So in case you listen to the show and you feel like you understood like half of it in terms of talking about some low-level engine stuff, when that happened I recommend checking out Higgs to see how JavaScript compiler might work. And they are friendly to contributions, so check them out.

    KENT: Great. Thank you. I love friendly to new contributors repositories, that's good stuff. Okay, so my first or my tip for today is get involved in open-source. There are so many benefits in doing that. And if you need help I'll actually leave a link for my answer to the question, "What project should I contribute to?" And then my pick is, "How to become a better hacker" by Gleb Bahmutov. And if you've watched my picks and my links, you'll know that I'm definitely a Gleb fan boy. He is an amazing engineer with really, really great advice and this is a great blog post about just becoming better as an engineer. So yeah, check that out. Okay, so let's go to our guests, so why don't we start out with Ed, do you have any tips or picks for us?

    ED: My tip is that you should go check out TypeScript. If you're interested in developing large scale JavaScript, TypeScript brings mixed types to the equation and with that comes a lot of additional means to structure your program beyond what's just available in plain old JavaScript. And it just compiles down to JavaScript, so it's something we like. And I do have a, what is it, a pick? Yeah, I have a pick, I listened to an awesome record last night by a woman named Julia Holter called Have You in my Wilderness, so that's what I recommend.

    KENT: Awesome, we'll have a link to that in the show notes. Why don't we go with Gaurav next.

    GAURAV: Yeah I think for me, Ed covered the main tip, that we all probably thought of or like we were thinking of saying, so I'm going to say something different. I think in terms of the tip, I would like if you are definitely new to open source, we would love to hear your feedback, don't hesitate to get to us. We would love to engage with you, be it on Chakra, be it on TypeScript. I think on the TypeScript site they've been doing it for a while, but get in touch. We would love to get that community feedback and be responsive. We would love to set up those communication channels, don't hesitate in reaching out. That would be my tip.

    STEVE: Okay, so my tip is this thing called Electron which used to be called the Atom Shell, which is it's sort of an alternative to node web kit so it's a way to take node and to write some JavaScript and get a GUI app out of it that using HTML model for GUI but on your desktop. And that's part of a broader tip which is let's unite and keep using the web programming model for as much as we can because it's our best chance to reduce the chaos, that I think Pam was referring to, right? Like if you could, the more places where we can apply web programming, the better. So IoT is a great example of what we've talked about and desktop programming is another great example where this thing Electron will let you build your GUI app basically as a node thing that uses web for the way you do your UI.

    KENT: Plus one! Yay, we love the web! (laughs) Cool. Alright I think we're about ready to wrap up. So let's, yeah I'll just go with a couple closing announcements. So again next week, we're going to be talking with a couple awesome people about JavaScript debugging, so tune in same time same place next week. If you have any suggestions for us on the show, we're totally open to it, just go to suggest.javascriptair.com and that will take you to Google Form, the responses are coming in quite a bit so I apologize if we can't get to your show suggestion right away. But really good suggestions so far and we're happy to take more. If you have feedback for this show or the show in general, please go to feedback.javascriptair.com and fill out that form and we implement feedback. So appreciate any feedback that you have. As always, follow us on Twitter, Google+, and Facebook to keep up with the latest from JavaScript Air. And with that, I think we can say so long. So thank you very much guests for coming on the show. Thanks panelists for showing up and we'll see you all next week. Bye!

    (EVERYONE): Bye!
  `,
}
