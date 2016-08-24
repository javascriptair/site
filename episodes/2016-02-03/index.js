export default {
  title: `JavaScript Debugging`,
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
  podbeanId: 'gpe8z-5c5ad2',
  youTubeId: 'qlV-eNI5OsA',
  shortUrl: 'http://jsair.io/debugging',
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
  transcript: `
    KENT: And we're live with Java Script Air. Hello everyone. My name is Kent C. Dodds and I'm your host for Java Script Air in this live broadcast podcast all about JavaScript and the web platform. Today, we are going to be talking about JavaScript debugging. And we have a couple experts on the subject here with us, both on the node side and the client side. So it should be a spectacular episode.

    Before we get into it, I have a couple of announcements. First off, I just want to give a shout out to our sponsors. Egghead.io is our premier sponsor, and they have a huge library of bite-sized videos about web development, Node and React and all kind of awesome JavaScript related things. So check them out at Egghead.io. Then we have Frontend Masters. They're an expert-lead recorded workshop with courses on advanced JavaScript, Asynchronous and Functional JS, as well as lots of other great courses on Frontend topics. And TrackJS is a special sponsor today. They report bugs in your JavaScript before customers notice them. And with their telemetry timeline, you'll have the context you need to actually fix the bugs. Check them out, and start tracking JavaScript errors today at TrackJS.com. And WallabyJS. Wallaby is an intelligent, super-fast test runner for JavaScript that continuously runs your test. It reports code coverage and other results directly in your code editor, immediately as you change your code. Check them out at wallabyjs.com. And CodeCov, CodeCov is coverage done right. Reduce technical debt by visualizing test performance and faster code review. Code Cove is highly integrated with GitHub and provides browser extensions. Learn more at codecov.io.

    So we're really excited about these sponsors. Because they're allowing us to do some really cool things with the show, like transcriptions. So you'll notice on the website, we're starting to get transcriptions on the episodes, which should make consuming these shows a little bit easier. So, really excited about that. Great.

    So, other general announcements, next week we are having a special show (this is the first time for this show), we're doing a live broadcast from a conference. So ForwardJS, the Forward Web Technology Summit is going on next week. And several of the panelists and I will be there and we'll do a live show at the conference. So join us next week. It's a special time, it's going to be 12PM Pacific Time, not 12PM Central Time. So it'll be a couple hours later, but it will be on the same day.

    So let's go ahead and introduce everybody. For our panelists today, we have Brian Lonsdorf.

    BRIAN: Hi, how's it going?

    KENT: And Getify.

    KYLE: Yo!

    KENT: AKA Kyle Simpson. I don't know what he wants me to call him. So I'll just call him both.

    KYLE: Getify's good. Getify is good.

    KENT: Getify, alright, sweet. And then for our guests, we have Alex Liu.

    ALEX: Hey, how's it going?

    KENT: I'm not sure if I pronounced your name correctly, I didn't ask you before. Is that right?

    ALEX: No, you got it right, perfect.

    KENT: Awesome. And Yunong Xiao, aw shoot... I totally forgot how to pronounce your last name.  (laughs)

    YUNONG: No, that was good. Hey, everybody, I'm Yunong.

    KENT: Awesome, and Todd Gardner.

    TODD: Hey, everybody. Why didn't you ask if you pronounced my name right?

    KENT: Did I pronounce your name right? (laughs) Alright, there be trolls on this show. (laughs) So let's give our guests a chance to introduce themselves before we get into our subject. So Alex, do you want to go first? Just tell us about where you work, what you do, that kind of thing.

    ALEX: Sure, so I'm Alex. And I'm currently at Netflix. I spent most of my life kind of in the front end and recently, in the past couple of years, I've kind of moved exclusively over to node land. So building a lot of tooling and micro-services, and other services that Netflix products may depend on internally. So it's been a wild and crazy road so far, but also really fun.

    KENT: Thanks, Alex. And Todd, why don't you go next?

    TODD: I'm Todd, I'm a web developer. And I'm the President and Co-Founder of TrackJS JavaScript Error Monitoring.

    KENT: Sponsoring the show, thanks man.

    TODD: You bet, you're doing great work.

    KENT: Thank you! Alright. And Yunong?

    YUNONG: Hey, I'm Yunong. I'm at Netflix as well with Alex. We're working sort of on the same team. My career has really been in the infrastructure space, so previously, I was at AWS and at Joyent working on infrastructures of servers and cloud computing things. It's just been a lot of fun. And presently at Netflix, we're building a sort of Platform as a Service style platform on top of an open Docker, so it's a lot of fun. And that's kind of what I do.

    KENT: Awesome, great. So I think a good kicker off question for our JavaScript debugging show today is why do we need to learn about debugging? Can't I just write my code and pull it up in the browser, and if it works, it works, right? So I'm good to go. So why is that not really a good solution for debugging JavaScript?

    TODD: So I have never been, I guess, a superhero developer to the level that I can write code and it works the first time -- beyond a couple of hours of work. Eventually, I will make a silly mistake, or I will not understand an API, or I will not understand what my customer wants, or any number of reasons. So, this isn't a problem specific to JavaScript anyway. Every language will have bugs in every system you interact with. And so debugging is one of these skills that transcend all languages. And it really moves, like if you can understand the basic tenets of how do you isolate and reduce bugs out of your system, you can be effective in lots of different languages and lots of different environments.

    JavaScript has its own sub set of problems within that, so I focus mainly on the client side. A lot of debugging in client side JavaScript is in dealing out with differences in the environments that we're working with, because we're delivering our application to run in so many different configurations that all have very subtle differences. Is it running on OS 10 or Windows? Is it Chrome or Firefox or IE or Safari or Android browser, Opera or Brave? or any of these other things. All have their little things that are weird, they all treat their API just subtly different. And so dealing with those kinds of complexities, and on top of the normal just building system complexities, and so it's inevitable that we're going to have bugs.

    YUNONG: Yeah I would say that's a great answer. I just wanted to follow up with that, which is that in addition to just silly typing mistakes and syntax, sometimes there are classes of problems which are not immediately obvious, which is like the code compiles and it runs and it seems to do the right thing most of the time... but, so this is a special prevalence server where you may have classes of errors that only manifest themselves under certain conditions, right? Maybe on that scale, or there's a particular set of inputs to the system. And that's where it's especially important to be able to capture state and debug that when the error happens because especially, say, here at Netflix, we have millions of subscribers all using the servers and maybe only 1% of the subscribers have the same problem or even 0.01%, but that's still a lot of clients and a lot of issues. And that's definitely not the mainline path that's having the issue. And so it's really important to be able to debug your system end to end, and be able to sort of capture state when errors occur to try to figure out what happened. So you can think of that as kind of as if you want, a flat box or a flat recorder to be able to capture state while your service is running to then be able to pinpoint and debug, and it won't cause an issue such as you don't hit that issue again.

    KENT: Cool, so Todd, one of the things that you mentioned was that it takes a certain set of skills to debug JavaScript, can we talk about some of the skills that are necessary for debugging JavaScript code?

    TODD: Well I think, what I was saying earlier is that first, debugging, regardless of the language, is a skill set that people acquire over time. And generally, the more bugs you write the better you get at debugging. So there is a huge benefit to writing a lot of bugs. Debugging, in any language, I feel like the first and sometimes the most challenging step is isolation. And so it's figuring out how do you isolate the part of the code that's going wrong. Because as we build large, complex systems, data could be shifting around, we could have a couple of different state machines interacting. We could have a couple of different moving parts in any system or scale. And so how do we find what part of the system failed?

    And to do that, I think you really need to understand both the environment you're playing in and what are the flows that happen through that and then the system that you're building. And what are some good points in your code, in your application that you can attach to? That you can either set in break points or you could spit out information or you could just start hijacking into certain parts of your system to narrow down what part of the system is going wrong. And so in JavaScript, because it's asynchronous and because we have a lot of different potential entry points that our code could start in, understanding what are the major entry points into a client side system that would be appropriate to hook into. So, understanding that call back mechanism, understanding how does something resolve and where does the data flow through the system, I think those are more JavaScript specific skills to understand the asynchronous nature of the applications that we're working with.

    KYLE: I had a question. Actually I'm going to have a bunch but this is my first question. So can you describe for the audience, what is the difference in strategy between... there's kind of two main approaches I've seen in debugging: one is debugging while something is happening, that's more of the break point style of debugging, like, stop something, pause something, I want to see immediately right now. Kind of like around at my current scope, that sort of thing. The other style of debugging is to record a bunch of stuff and then look at it later. And then that harkens back to that whole notion of console.log. Well, if I had a console.log on every single line of my program, I could see the entire flow and just look at a nice history. And while it is painful to create those console.log statements, it's actually sometimes easier to find a bug if you go that way than it is to sort of debug while something's happening.

    For example, (I'll talk about this later) I've been working on a game recently and the real time nature of playing the game, if there's some bug like right in the middle of game play, it's incredibly difficult to have that stop in a break point because then you lose all the context of my interactions, like, what I was clicking and what the screen was doing at that exact moment. So, can you talk about broadly, the strategy differences, how we know when is the best approach, is one always better than the other, that sort of thing.

    YUNONG: Well I think so, there's the two approaches that you mentioned. The first one which is really around real time debugging, attaching debuggers, pausing the process. That's really useful when you're in a software development cycle, like you're already on code, you're testing it, and if something's broken you can attach a debugger. In production, that's generally not possible. You can't, in my earlier days, I tried to do that in production. And you pause the entire process that's serving hundreds of customers and you pause production nodes. And the thing you mentioned within a game, there's going to be a lot of players that's hitting the servers or someone that's playing the game, if you were to pause the process, it literally pauses the entire world, right?

    So, to speak to the latter, I think logs are definitely really great. There's obviously this big debate around lots of places where it's not possible to log out every state object that's within a process. That's what we'd like to do is be able to say, "Track state across the entire process for the lifetime of it," but generally speaking, that's a lot of data that you have to capture and then all your hardware and operating system is doing at that point is seriously scrubbing the logs and writing the disc.

    So one of the techniques that we've been using (and again, I think that the operating system provides really great facility) is be able to capture the application state by capturing the contents of its memory. So generally, this is in the form of like a core dump. For example, you can, generally speaking, on any operating system capture a core dump while the process is running, and that will pause that process for some small amount of time, say, two to five seconds, but quickly dump the contents of its memory to disc. And then the process will continue to run until you see how the bug or something is broken, you can restart the process but you can take this core dump which is really again like your flight data recorder, right? It has all the information about the process, all of the state object, and variables, and then inspect that offline somewhere else.

    And so we found that to be really helpful when there's errors or bugs in our code. So generally speaking, for production services, that's a much better approach, because you're not impacting customers. And so we find that to be really, really useful. And there's some great tools in JavaScript that lets you do that, some of the tools like upload a VA heap which has all of your state variables. There's server sectionals like MDB V8, let's you do that for node. And so generally, we've found that to be really, really useful in terms of trying to debug an issue in production, in real time.

    KENT: Go ahead, Todd.

    TODD: I just wanted to add another facet to that, because that's absolutely right on. But even just in the dev cycle, I've personally used both of the approaches, you know, both the break point stopping interactions or actions, and logging out. Because even at dev time, I have been known to write some really, really terrible race conditions in my code over the years. And when I'm trying to debug this complex set of timing interactions, when I attach break points to the code, I can make the bug go away simply by attaching break points. So it becomes very hard to troubleshoot what is going on when the active debugging itself was manipulating with the times. And so, to debug those sort of issues, I found it much more helpful to do the reporting style approach of just dumping out state changes and timing interactions and saying, "hey, this callback started, this callback completed," and investigating it afterwards. So that I can see how those subtle timing things are actually changing when the system really routes.

    YUNONG: That's absolutely true and I think that's a great approach for when you have timing issues. I think another really, something to consider, is there's all kinds of dynamic tracing frameworks that let you at real time, at run time, let me just say manageably, inspect and trace events within your source, your process. So like DTrace is a good example, that's or something like Perf Event on Linux, or any of those real time tracing frameworks lets you... you can either set break points within your code but they're not exercised until you start the tracing framework. And that doesn't really interrupt your code, it just bumps up state. So think of it like, "I can dynamically enable logging statements within my code only when I want them, but those are good tools to use in real time to be able to get information, without having to pause your process."

    KENT: Yeah, I was going to ask a question about that, actually. So something that I've done, at least for client side is I have logging solution that just abstracts console.log and well, the console in general. Then I litter my code base with this abstraction. Then in production, if I need to debug something, it just flips the switch to turn this on, so that I can get all that information dumped out. And so there's really no performance hit when some of those things have calculations or whatever. So would that be another kind of approach that would be helpful for debugging production applications?

    YUNONG: Yeah I think absolutely if you want, you can dynamically change basically your logging level or the verbosity of your logging. That's definitely something really useful. We've also often thought of about, there's lots of platforms that don't have dynamic tracing frameworks, right? And this is kind of dangerous but something that we thought of which is you can build like an API or a repl into your process, that lets your dynamically set those switches. Of course, now you have, say, a bug in your logging statement itself, where it goes "undefined is not a function" then you might accidentally break one of your process that way, but it's definitely a way of changing the verbosity of your logging when you're in process.

    TODD: I agree Kent, on the client side too. Having the ability to capture those logs is incredibly important. The service that I built does that itself as well, where we capture all of the logs about how the system is running for these exact debugging purposes. So understanding how the users are interacting and how your system is working in real production environments is really important to actually debug an issue at the other side.

    YUNONG: Yeah I think something, a lot of, sort of large installation of companies do is they have a logging firm that's employed on the client and then that streams data back to the servers, and then later on, you can sort of look through that data aggregated and sort of map that back to say maybe CS calls, someone might call in and say, "Hey, I have a bad interaction," and we can get the customer ID and look that up in the stream (mumbles). So that stuff can be very helpful.

    KENT: What other tools... oh, sorry Alex, go ahead.

    ALEX: Yes, I was just going to kind of add sort of a different perspective to this, which is that everything that we're talking about here is completely and totally valid and really useful. I think an interesting twist to this is kind of my own experience from having moved from kind of a purified environment into running say like a service and having to debug their services is the kind of I think importance of the mindset and kind of how that has to shift a little bit in terms of debugging your programs and getting visibility into what they're doing. Because I think as you now sort of vitally mentioned, turns out that you can't just like go and just cut your service and put your debugger in there and stop taking traffic.

    And so I think a lot of the growing pains that we're seeing from having JavaScript developers from frontend to the new front end back end is sort of this skill and maybe sort of this (and obviously this can be learned and groomed over time), but like thinking critically about your code paths and where you should be doing logging. And so, often times, it's maybe even something as simple as saying, "Hey, I've got this function that like might be doing something complicated. I should probably log certain parts throughout this process that I've started to process or ended some process. And that way, you want to be able to get sort of that holistic view from step one to all the way to step n of, "Hey, here's all the things that have happened from when I started this process," and that way it's much easier to say go back and sort of see an audit of everything that's happened since you began that request. And yeah, that's something that we recently found to be super helpful.

    YUNONG: I had one last thing, sorry, which is that sort of correctional metrics, that should be the thing that you think about when you are initially building the service of the client that you're thinking about and not something that you sort of strap on at the end. If you begin your process with, "Which of the metrics do I need to collect?" Cause often, while you're debugging, you often leave those bugging metrics out anyway. So if you need them during your debugging process and development process, then you probably need them in your production, so it's always good to think about these things before you start actually coding them to try to figure out, what are these metrics that I need, what are these states that I need to log out beforehand?

    BRIAN: I had a question actually about sort of like that. When you're in production, there are these differences, right? If something works on your machine, it might be your database that's different, it could be the hardware it's running on and environment variables and things like that. Do you have any tips or a list of things that you go through in your head when you're trying to debug something that works on your local but not somewhere else?

    YUNONG: Yeah, I think the most important thing is well, one thing to keep track of is that, obviously, you're trying to make sure that you're replicating the same environment. And so that's often, maybe you're running a different kernel version or a different V8 version or different version of node or something that's critical in node is maybe my build isn't even the same, my package on JNode hasn't changed but because somewhere all my packages have changed between the point on my laptop and then out on the cloud. And so, I think what's really important is making sure that you're using the same set of binaries and code on your laptop  that you're running in the cloud. And I think tools like docker really help with this because you're able to snapshot a particular build as a docker image and you know that will never change. And so then it's much easier to isolate, focus and well, maybe the only thing that is different is the kernel version of Linux or (mumbles) or something like that, right? And so you really think it's about trying to isolate everything, like what Todd was talking about earlier. You really want to be able to isolate each and every little part of your components and be able to record state back from all those.

    So I'd say your process is you make a request and it's failing, you need to make sure you have enough metrics around which part of that really complicated distributed system that you're using, right? Is it the client? Is it the server? Is it the database? Is it the load balancer that's sitting between the client and the server? Is it the region that I'm in? So, if you have insight into those metrics, then it's a lot easier to figure out where in that chain things are broken. So that's sort of my recommendation. As I said, I think it's just generally really hard to debug. It's much easier to write code than it is to debug it because to debug something, you actually have to be able to understand everything about the system that you're debugging, because there's lots of classes of errors that don't come from the code you're writing but maybe from a misapplication of the particular API or system call or something like that. So you have to be really... try to understand all the sub-systems that you're using.

    TODD: So one of the thing that can really help with debugging large complex systems is having, thinking about points where you can inject yourself in at different phases at execution, and know how to work with it. So for example, if you have a client side app, a node web side service and a database on the back end, can you hook in at different places and guarantee if there's some problem in the system, you don't even know where to start. Well, alright, let's start looking at how is the client communicating with the service and let's compare before the code break and after the code break. Is it sending the same payload? Is it sending the same headers? Is it making the same request?

    And if it is, then you can say, "Well, nothing really changed here, so let's look at the other side." So now do the same thing. You put a separation between your web service and the data store and you need to make sure is it making the same calls? Is it asking the same query? Did something change with it? And just using those strategies to first isolate what part of your architecture is experiencing the problem and then even within that architecture, build hook points where you're like, "Did we make the correct decision about what this request means? Did we produce the right output state? Did we format the correct query?" Understanding where are the places in your architecture, in your system, you can attach these hook points easily to quickly isolate where in the system you're having problems can really help make debugging less of a chore, if you build your systems in such way to facilitate these sort of patterns.

    KYLE: So, maybe a little bit of a push back on that, because so far, it seems like the perspective being advocated for is smarter developer, smarter debugging. And I kind of call BS on that because I feel like we're putting too much on the developer to already understand their problems and not enough on expecting the tool to figure it out and help me. So, I will say, contextually, I think people probably think of me as knowing a decent amount about JavaScript, but I think I am really terrible, honestly, at debugging. I feel like I'm in 2006 in terms of my skill set around debugging. And I opened up the developer tools and I look at the profiling tab and I look at the watches and stuff like that, and I know what that stuff is but really effectively using it has not been a skill, even over 17 years of development, not a skill that I feel like has just automatically come. So I've sort of tried to refine my skill at developing better so maybe I have a little less bugs.

    But what I would really like, is a tool, for example, I'm playing along in an application or doing something. If I do something wrong, I want to be able to point at my screen, touch my screen, and say, "that was a bug," and have the system start telling me some contextual information about that exact moment, and maybe the stuff that happened in the leading seconds right up to it and guide me to where the problem is instead of me having to know, "Gee, I know exactly what kind of code was running then," and go find all the places for the break points and stuff like that. Because, honestly, I think that's one of the reasons that we spend so much time debugging, is because I don't think the tools are anywhere near what they ought to be to help us identify. So, just wanted to see if anybody had thoughts on that.

    YUNONG: That's a good point. I think what Todd and I, and Todd correct me if I'm wrong but, we're really advocating for is being able to get observability into the various processes inside your stack, right? So generally, my approach to bugging is if something is broken, I don't know what it is but I'm not getting an expected output or result from my system -- whether that's my client, or my service, or my database, or anything in between. But before you can sort of make any assumptions or guesses about the problem, you need to be able to get data first, right to be able to sort of... because if you don't have the data, then you're just guessing. And if you guess, then you generally... it's like closing your eyes and throwing a dart at a dart board. You're probably not going to hit the thing that you want.

    And so, I think step number one is making sure that you have access to all the metrics and state data, or as much as possible, that relates that particular interaction that you've had with the system. And once you have that data, then I think, to your point, Kyle, about better tooling, I think once you've got that data then it should be then possible to have tooling that helps you collate that data, aggregate it, refine it to give you as much contacts about that interaction that you've had, as possible, closely relates to the (mumbles) that you've seen. So think, maybe the steps are really generating the data, make sure that your application, when you're developing is generating data that you want hooked into some sort of system that lets a tool then be able to inspect that data and give you correct information about that (mumbles) that you're seeing.

    KYLE: So I think the developer tools are pretty good at what you just said but they assume that somebody already has a sufficient level of expertise on how to use that tool. I look at the Chrome Developer Tools for example, and I'm like, "Oh my god if I had a PhD in this stuff, I'm sure I could rule the world with the type of the information I have here." But in all of my attempts to read tutorials and certainly all of my brute force attempts to do my own code debugging, I feel like I am literally barely scratching the surface when I use these tools. So I don't think it's actually that the tools need to be more powerful, I think it's that the tools need to be less powerful and more dumbed down. More like, "Hey, you told us that the problem just happened. Here's the last thousand functions that got called. Here's what their inputs and outputs were." And let you sort of sift through that information, instead of me having to have the foreknowledge, to have the profiler on and then even to know what the hell to do with that information.

    TODD: So, I believe that, I've definitely been in that situation where I'm trying to debug something and I'm just getting too much information and I don't even know where to begin. But what I think is a better approach to debugging is that debugging starts when you first start writing code into the system. Debugging isn't just a thing when you run into a problem. So the tooling gets better if I can actually attach it to my system in such a way that I can get good information from it. Because if you built your system without any places to listen, then Chrome and these other great tools for listening to your application, they just dump tons and tons of data and it doesn't mean anything because you haven't built your system in a way that certain parts of it mean something. So let me throw an example... So, sorry I just lost my example. (laughs)

    YUNONG: So here's a good example from us, which is...

    TODD: (laughs) Thanks for the save!

    YUNONG: Sometimes we'll get a customer service call that's like, "Hey, I (inaudible) and it blew up." And obviously, you can imagine the number of backhand micro services that we've got and database and all the data that we have, gigabytes or terabytes of logs and logging data that pulls through the system. The key is to be able to find and correlate that context with all this data that you have. And we've built systems where I can take a Request ID, from a particular customer's event and then be able to then trace through the entire system of logs and get only context information about that particular request. And because that Request ID is unique, then it gives us this... you know like, if someone just presented me with all the databases that contains data over all of the user events, just like Kyle, I think I would be overwhelmed and think, "This is ridiculous." But the key is to be able to tooling on top that let you differentiate and group state around specifics in certain context. In our case, that's a Request ID. So tools like that I think are really helpful.

    KENT: And I think, in general, this is just a really hard problem and tools are still getting better, easier. You know, just think back even console logs in Internet Explorer 8 were not easy. (laughs) So I think that things are definitely getting better. The time is flying by, and I want to get into something that's a little more practical for people... well, all this has been practical, but very applicable for everybody watching or listening, and that is I want to ask for the tools that you use to debug regularly, and some of your favorite features from those tools.

    So for example, I am a huge fan of the Chrome DevTools. And obviously, like break points are something that I use all the time but there's also this little check box in the DevTools that you can check that says "async" and so it'll give you the call stack even if things are being executed asynchronously. So you can step back in the call stack and you can look at the order of things that are happening, even in an asynchronous scenario. So that's one of my favorite features of the Chrome DevTools. So why don't we talk about some of the different tools we use to debug our code? I'm actually personally really interested to hear some of the tools used to debug node because that's something I know very little about. So let's take it away.

    YUNONG: Sure, I can talk a little bit about the node side. Node is different because when it runs on the server, you generally have one to one tenants on it. And you can't really use the Chrome DevTools, really, I mean, there's the node debugger and there's the Chrome front end for it and that generally works pretty well. For sort of like the software development life cycle, I made some changes I wanted to see where the errors come from, I wanted to set up field break points. So that's generally sort of what everyone uses no matter... if you're in Java, you'd use the Java debugger, and likewise. But I think in production, what we found really handy, is something I described earlier on the podcast which is around, I have a problem with my process, I don't really know what, I just know that, "Hey, I got a 500..." or maybe let's talk about something that everybody really has a problem with which is memory leaks. "I have a node process that is leaking memory, how do I go about debugging this?"

    So generally what we do is there's this really great tooling called MDB V8 which is a post-mortem debugger. So what that does is it lets you take a core dump, whether you generate sort of a Lumos operating system or Linux, you go into this debugger and be able to inspect every single JavaScript object, closure, function, and all the V8 native objects interactively in a debugger. And that's really helpful because you're literally taking a snapshot of your node process at any given point in time without really interrupting the process too much. The process can continue to run. And then you can load this mdb and using the plug in called MDB V8, it translates all the V8 objects... it lets you see all the JavaScript objects in native JavaScript, so I can print out all the functions, see all the objects.

    And so for memory leaks, this is really helpful because I can list all the objects and see which objects are leaking because it's sort of aggregates them for me. I mean we can find objects based on their properties, I get access to the current stack, the stack of the process when the core dump was generated. I'm able to walk through all the stack frames and gets state information about all the function (mumbles) on the stack So basically, everything that you can think of that you wanted to know about your node process, as long as you've got the core dump, you can see it with MDB V8. And that's really, really helpful on the server side especially when you're in prod and you can't really attach a debugger because that means pausing the process, or you want to sort of... my process has a weird behavior and I want to capture that state, that's a tool that's really, really helpful.

    ALEX: I just wanted to add a quick corollary to that which is this came up in conversation recently with me and Josh Clulow over at Joyent, and there was this interesting idea about how we could potentially carry that concept of you're having a core dump over to the browser as well. So effectively, today, there's this big problem where if you have errors or exceptions are thrown in your browser, they kind of just disappear right? They live on your user's machine, but there's no way for you to know about them unless you build this whole pipeline to be able to pipe all this information back up to your own internal services, where you can then inspect them at a later point in time. What I would really love to see (and obviously, this is something we'll need to work with the browser vendors for) is to have this kind of first class support of being able to say, "Hey, when an exception has been thrown and it's not handled and something gets dumped to console error or what have you, that we could sort of capture this state and maybe do a "a mini core dump" of the state of your browser JavaScript and then be able to send that back up," right? Because I think that's a big problem today is that all your stuff just disappears, and it's hard to reproduce and what were the specific things in that scenario that caused this issue. So it's really hard. I would really love to see how we can make this happen for the front end.

    TODD: I agree, I think that's awesome when that happens on the front end, which is why we built TrackJS which does all that. (laughs)

    KENT: Bravo!

    (laughter)

    TODD: So, I was going to talk about the client side because Chrome DevTools, I agree, is awesome. And so many people have shifted to it from all the other tools over the past couple of years. And the async stack trace that Kent brought up is amazing. And it does provide you a ton of really great tools. But the harder problem I feel in client side debugging is too many times, we write to Chrome, and then our stuff doesn't work when people hit it with other browsers. And so we become really familiar with the Chrome DevTools and then, there's a subtle Firefox bug and now we have to figure out not that the Firefox DevTools are bad, it's just that there's a different ideology that they took as they built them out. So you don't understand how they work. And the same thing with Edge. And the same thing with Safari. And then, even scarier, what if you have to debug an IE 9 problem? So now you have to push back and try to do that.
    And so this was actually one of the core reasons why we actually built TrackJS, which was this client side monitoring tool, so that we could capture this really good debug information about what were the console messages, what was the user clicking on, what was the contents of Ajax calls that happened beforehand, and be able to apply these to browsers that we were kind of scared to work with their DevTools on. So, mobile is a great example. Or IE 8, IE 9, those sort of things. So I think in a lot of cases, you can use production monitoring tools like TrackJS to do dev time debugging in these environments that you're like a little bit less comfortable in the in-browser debugging tools that already exists. I think that's a really powerful use case.

    KENT: I think also as a pro tip, TrackJS is very cool. I have used it. But in addition, I think it's really important for us to spend a little time familiarizing ourselves with the DevTools for the environments that we're building products for. I think that's our responsibility as web developers. So, what are some of the other features of different tools people at home listening could jump on their laptop and play around with that you all use regularly?

    ALEX: One of the things that I've been a huge fan of, we were talking about logging earlier and logging all your context. There is a module called VError that we use extensively in node land. And basically what that does is allow you to create chained errors. So, you know, typically you might call some API then you get an error in the callback, and what we can do is like use the error to create a new error using that existing error that was passed back to us. So what we can do is start to effectively build a really long rich and contextual history of all the code paths that some error is traveling through. So it's really, really nice because then once it gets back up to something, you might often say, you have a bunch of callbacks or bunch of promises or just like returning errors up that chain. And then once it finally gets to an error handle, you can say, "Oh, I got an error object. Let me just log it."

    And bunyan, which is the stream logger we use as well, knows how to work with these errors. And so once you log it, you actually get this sort of awesome stack trace which is maybe you know, five, ten whatever end errors deep that actually have stack traces and have messages. So without even having to like, (mumbles) your code base or look through the actual code itself, you can actually see right there in the logs, like, "Here are all the code paths that we traveled through that caused this 500 Error page to get served." And so that I think has been really, really valuable for us.

    TODD: One of the most valuable debugging tools that I use on the client side and it has nothing to do with the JavaScript itself, but just a good proxy. So Fiddler on Windows or Charles on OSX, just to be able to see the actual data exchanges happening with the server I'm interacting with. Not the filtered ones, not the recreated ones that the browser thinks it should have made that it wasn't caching, the actual thing that went over the wire as it was formatted. It's one of the first things I install on any new dev build. Yeah.

    KENT: Cool, I think we actually do need to start wrapping up the show. It's gone by fast but, we have a lot of questions on Twitter, so hopefully we can get through these really quick and then get to our tips and picks and wrap up the show. For the first question we'll address here, it's from Mark Lozano, and he asks... and yeah, I wish that Lin were here because she would be able to answer this a little bit better maybe, but he asked, "Has Firefox DevTools caught up or moved past Chrome dev debugging tools? And is CDT working on those gaps?" I'm not sure what CDT is, if anybody else knows?

    KYLE: Chrome Developer Tools.

    KENT: Oh, (laughs) that make sense. 140 characters. So does anybody know about Firefox DevTools?

    TODD: I only have personal, like biased personal opinion, and I don't know if that's what was being asked.

    KENT: (Laughs) If you listen to our show a couple of weeks ago, we know that they are at least using modern technologies in the DevTools which is, whatever. (laughs) That's great. But I have heard that their (mumbles) are improving.

    KYLE: I think what was said earlier is important to re-highlight, that they do actually have, in some respects, different philosophies about what a developer, what context mentally a developer comes to a problem with. So, I obviously, as I said in that other episode, I have four year old knowledge of that team, but I know back then, that the goal of the team was to build tools that were solving things that developers couldn't really solve with developer tools in other browsers. So their goal at the time at least was not to be featured, comparative, exactly the same as Chrome tools, but rather to fill in other sorts of gaps and use cases, that all kinds of interesting things. I know for example Firefox Developer Tools has an actual like command line environment, where you can use command line commands to script what's happening in the browser to actually control the developer tools, go through debugging programmatically step by step, stuff like that. So those are things that aren't in Chrome. And they're very different, and they have a different philosophy than Firefox. So I do recommend that all developers have a really good working knowledge, better than I have, of both Chrome and Firefox. And shout out to Edge, they have fantastic tools too. So don't just look at Chrome.

    KENT: So the next question, I'm sorry to our questioners, we're not going to be able to get to all of these so I'm skipping some. I apologize. But the next question is from Nick, and the question is, "Has any new types of issues been introduced with ES 2015 to be considered in the debugging process?" So one example that I can think of is like, arrow functions, like might make things a little more difficult to debug if you don't understand the semantics of that feature.

    TODD: I don't know.

    YUNONG: Yeah, so I think in particular arrow functions... how to politely put this, it lets you really easily declare anonymous functions. And that's really great, like it's syntactic sugar and it makes everyone's lives easier. But when you're trying to debug say on a server or anywhere else where you captured all the state and you want to look through your functions, they show up as anonymous and they look all the same. And that makes it incredibly hard to debug because then you can't just disambiguate between all your anonymous functions. So, I would say I use them sparingly, probably don't use them at all if you're in the server, in node land, because at some point, you'll have a bug or an issue and you want to be able to debug it. And if you can't see the names of these functions that you declared, you won't have any context or any state into what caused the issue. So that's one of the biggest things in ES2015 that... it's one of those gotchas that it's really nice, but at the same time, be judicious when you use it and think about the context you'll be getting when that code gets executed.

    BRIAN: I've noticed that if you're using Babel to compile your code and you assign an anonymous function to a variable, it'll actually name the function what you assigned the variable to, just kind of interesting.

    YUNONG: Oh, I didn't know about that.

    BRIAN: But it's Babel though, it's not actually...

    YUNONG: Yeah, if they're unknown and (mumbles) you're using arrow functions, they're just anonymous and then you're pretty much (unintelligible).

    KYLE: So let me jump in here and just clarify, for those listening, on that specific thing. I happen to know why Babel is doing that because ES6, ES 2015 actually does have a feature called function name inference, which is a set of heuristic rules for how the JavaScript engine is supposed to guess what name you want for an otherwise anonymous function. And it doesn't cover all cases. So for example, if you're passing it in as a callback to another function, there's no inference being made. But if you're assigning it to a property or to a variable name, it infers that you want to name it the same thing. So that's why you're seeing Babel put that name in there is because they're emulating the ES 2015 name inferencing. So, in all fairness, yes, anonymous functions are bad for debugging and arrow functions lead to that, but ES 2015 does have a built-in correction for at least some of those cases.

    KENT: Nice, nice. Just those callbacks. I actually just had a wild idea of a Babel plug in that would, if you couldn't infer the name of the function, just put the line number as the name of the function, like, "function at line number" whatever. (laughs) It's wild ideas. Okay, so next question from Vick. It says, "I want to start debugging my node applications today. What tools can I use? Is there an up-to-date guide out there?" I think we've talked about some tools but we haven't specifically called out any guides. Maybe we can link to some guides. Does anybody have anything to say about that?

    YUNONG: Yeah, so for the core dump, sort of post-mortem debugging that Todd talked about earlier, I linked I put that in the show notes. So there's well documentation by the author, Dave Pacheco who walks you through how to generate a core dump, how to use mdb_v8, how to look at the objects. It's also about the post mortem stuff and all that is very, very well documented. And also, I've given a couple talks around how you debug things with mdb_v8, so feel free to look those up. So that's for MDB. I think in terms of general debugging in node, there's tons of documentation out there on how to start up node in debug mode and attach a debugger. Though we probably should have that on nodejs.org or something just really help users, that might be a pull request that the community can send. The documentations should be readily available.

    KENT: If you could add that to our show notes, that would be great. That way, people can find it later, thanks.

    ALEX: I was just going to add, as far as debuggers go, I know that node inspector, well there's the ever popular console log and console warns but node inspector itself has been sort of resurrected from beyond the graveyard and so I know that's back in play. But from our team, from at least some of the folks working on our website, Visual Studio has apparently been the go-to debugger these days. So this is VS code which is actually the new editor that Microsoft produced. Apparently, the debugger there is fantastic. I've heard lots of great things about it. Though I haven't actually used it myself yet.

    KENT: Great. I feel so bad. I really don't think that we can get to these questions in time. So if any of you want to check out the hashtag #jsAirQuestion and just answer those on Twitter later, that would be awesome. But we're going to wrap things up. So Brian Lonsdorf, I think you need to go first on your tips and picks, since you have a hard stop.

    BRIAN: Right on. Really just in general, I think patterns like Redux and event streaming and premonads and things that sends labeled actions might lead to a much easier... to debug app eventually. We've done this in the past where we have a database of events and that's like our audit, and you can recreate the state of the app at any given time. So these front end architecture ideas are pretty interesting to me. So I linked to a few, I guess, the (mumbles) architecture kind of takes the idea of a central store and events, so there's this time-traveling debugger that they have that you can check out. And then premonads approach to interpreting your AST instead of running it, you can generate a graph. Brian McKenna made that. And then I just had some tips on working with pure data structures because they force you to handle errors, as well as push all your errors up to the calling code which is really interesting and nice. I think that's all I want to talk about.

    KENT: Thanks, Getify you can go next.

    KYLE: Okay, several quick things. Since we've been talking about developer tools, one of my new favorite ones that I just discovered in the last week or two working on this game is Chrome has a super experimental thing but I've already found it majorly useful. They have CPU throttling, so it literally synthetically slows down the CPU available to your JavaScript, so you can start to see how that's affect things like the frame rate, and your JavaScript execution on slower devices. That was an amazing find, so check it out. CPU throttling, you have to like enable all these experimental things, but it's cool to use once you get it.

    A couple of non-coding but code related quick tips, I would say always open source your code early. Don't wait until it's good enough for others, because then you've waited too long. Open source is about collaboration improvement, not really about promotion of already finished code. A second tip is to start with libraries in framework as you rapidly develop and evolve and explore a project. But as it matures, I employ you to try to build in time for factoring to reduce and remove those pieces. You don't need them permanently. The best code is the code that's exactly what's needed, no more, no less.

    Couple of quick picks, an article just came out today, on a new tool experimental web platform called 'createImageBitmap(..)', so aerotwist has a blog posted about that. And he also mentions the 'requestIdleCallback(..)'. Both of those are pretty cool for handling images off thread. Another two tips are very self-serving, or picks that are very self-serving. I put out a tutorial with Chris Coyier of CSS Tricks called Chris and Getify Make a Game. And we put out part one of that. The tutorial video is out. It's like 90 minutes long, where we start on the first steps of barebones canvas game. And secondly, I open sourced the code for this game that I keep talking about. The game is called Cloud Sweeper, and I put that code out yesterday. So people are welcome to come take a look at that. If anybody wants to help, that would be awesome. So that's it for me.

    KENT: Cool, it's a fun game. So, we just got a nice tour of the Netflix office, so if anyone wants to watch while Kyle is doing his picks, Alex and Yunong both had to move rooms I think. (laughs)

    YUNONG: Yeah, we got ejected from the conference room.

    KENT: (laughs) Nice. Okay, I'll go ahead and go next and then we'll let our guests go last. So for me just a tip, I think the pinnacle way to learn is by teaching and so put yourself in situations where you have to teach. So, I just committed to give a training workshop at work next week on a subject that I know a little bit about but I want to know more about, so I'm forcing myself to learn it so that I can teach it. I think that's a really good strategy for learning things. I also have two picks, What's new in Webpack 2, there's a link to a secret gist. I hope Sokra is okay with that. (laughs) But it's gotten a lot of popularity on Twitter and stuff. And then debugging JavaScript, this is a link to the Chrome DevTools, some of the features in the DevTools. So recommend you check that out. Why don't we go with Alex next? I think you're muted, Alex.

    ALEX: There we go. I know how to use technology. So yeah, as far as links go, really just a couple of things I've talked about, like creating those rich errors, so we've got VError and Restify errors, which is actually what we use in our REST framework, and that's built on top of VError. Let's you create custom instructors for your error types. And then those work the same way as VError ones that let you sort of chain those errors. So, totally great. You can use them with Bunyan for logging. So as far as tips goes, I think this is tightly tied with some of the great discussion we had around debugging today, which is really, as you're building your applications, to think critically about errors and your error handling paths. I think too often, you know, we get really, really excited and passionate, we're, "Okay, let's (mumbles) this great thing and happy paths are good," and then we go and try to shove in the error handling later and that typically ends up leading to a lot of bugs. And yeah, I think that's kind of my top tip of the day.

    KENT: Great, Todd why don't you go next?

    TODD: Awesome. So I got a couple of picks. First off, there's this thing I wrote, helped write, it's called TrackJS, which generates the whole stack or core dumps from client site browsers. And I've said it like three times today, but you should really go check it out because it's awesome. Second, I spend a lot of time thinking about debugging, so I did a talk earlier or last year on JavaScript Forensics, where I kind of walked through a sample application and did live debugging of this silly application I built and showed you some common error cases and how to use tools to find and fix those problems. So I'll put a link in the picks on where to find that.

    I gave that talk at a conference called NDC Oslo, which is an amazing conference and I'm just going to give them a shout out. I'm probably going to be back at NDC Oslo and help them run their after party, which we call Pub Conf. And Pub Conf is we basically rent out a bar, we get a bunch of really cool speakers to do ignite-style talks and the whole thing is just generally free. So, if you fancy that sort of thing, and want to come to Oslo in June, where the sun never goes down, you totally should because it's awesome. Then finally, a non-tech related pick at all is I've really been enjoying the work of Ken Follett lately. He wrote a couple of books, a really long time ago, that I finally got around to reading called Pillars of the Earth and a World Without End, which is kind of this historical fiction stuff. Real places and events, but fictional characters. It's really good. That's all I got.

    KENT: Cool. I was hoping you were going to pick NotepadConf.

    TODD: NotepadConf was a funny joke last year but I think it might be dead. (laughs)

    KENT: That's disappointing.

    TODD: But maybe we should drop a link to Notepad Conf because the website for NotepadConf is still hilarious.

    KENT: Yup, absolutely. Thank you. (laughs) Alright, Yunong?

    YUNONG: Yeah, sure. So I dropped a couple of links into how you debug node in production. I gave a talk on how to do that. Links to the documentation around all the tools that we use. I guess the number one tip that I would give when it comes to debugging is really just apply the scientific method. You'd be surprised at sort of how many problems you're able to solve by just applying that method, which is just like get data, form a hypothesis. Does your hypothesis fit the data? If it doesn't, repeat the process. So that's one of the tips I would give. Use frameworks that give you observability into your app, that's another big tip. It doesn't matter what you use. I put some links to Bunyan and V Async which the former is a JSON streaming logging library and the latter is a Observable Async library for JavaScript.

    And some picks, something not related is Bojack Horseman, excellent show, my favorite show on Netflix. I think we've got a free trial somewhere, so check that out. And something that we're actually working on, which is ReactiveSocket, which is a bi-directional reactive framing protocol that you can use to play backcrusher, and that's really critical to our new data access architecture we're actively looking at at Netflix. But the ReactiveSocket is open source. We're actively working on it. In particular, a colleague of mine Michael and I are working on the JavaScript documentation. So check that out.

    KENT: Okay, great. So that's our show. Let me just give a couple of closing announcements here and we'll say goodbye. So if you have suggestions for the show, for guests or for future topics (this show is actually a result of a suggestion), just go to suggest.javascriptair.com. And also, if you have a feedback for the show, we would love to hear your feedback so go to feedback.javascriptair.com.

    And this is new: we're pretty excited about this, go to javascriptair.com/deals and there are some discounts for conferences. And we'll continue to put different discounts that are exclusive to our listeners and viewers. So yeah, javascriptair.com/deals. And then also, I'm starting to collect e-mail addresses for a mailing list I'm going to do after the show is done and everything is up on iTunes and everything. I'll send an e-mail with the show notes and links to the show, so you can get those right in your inbox. So go to jsair.io/email to sign up for that, or you can get the link on javascriptair.com.

    And again, next week is Forward - Web Technology Summit and we're going to be a couple hours later. We'll be live at the conference talking with some awesome people about what they're doing at the conference and different JavaScript related topics. So check that out next week. And with that, I think we're good to go. So, thanks everybody for coming. Really appreciate the conversation. And we'll see you all next week. Goodbye!
  `,
}
