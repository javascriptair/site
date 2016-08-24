export default {
  title: `Electron Apps`,
  guests: [
    {
      name: 'Jessica Lord',
      twitter: 'jllord',
      links: [
        `[Electron API Demos](https://github.com/electron/electron-api-demos)`,
        `[Electron Apps](http://electron.atom.io/apps/)`,
        `[Electron Quick Start App](https://github.com/electron/electron-quick-start)`,
        `[Devtron](https://github.com/electron/devtron)`,
        `[Electron Packager](https://github.com/electron-userland/electron-packager)`,
      ],
      tips: [
        `[Electron Quick Start App](https://github.com/electron/electron-quick-start)`,
        `Make a [menubar app](https://github.com/maxogden/menubar)`,
        `Check out the [nativize.css](https://github.com/electron/electron-api-demos/blob/master/assets/css/nativize.css) file in Electron API Demos app`,
        `Electron community [tools and meetups](http://electron.atom.io/community)`,
      ],
      picks: [
        `Hammock Camping! `,
        `[Mojibar](https://github.com/muan/mojibar)`,
      ],
    },
    {
      name: 'Evan Morikawa',
      twitter: 'e0m',
      links: [
        `[Atom](https://github.com/atom/atom)`,
        `[VSCode](https://github.com/Microsoft/vscode)`,
      ],
      tips: [
        `Reading Open source`,
      ],
      picks: [
        `[Observables](https://github.com/Reactive-Extensions/RxJS)`,
        `[Atom slack channel](http://atom-slack.herokuapp.com/)`,
        `[Moonwalking With Einstein](https://amzn.com/0143120530)`,
      ],
    },
  ],
  description: `
    Electron is becoming more and more of a relevant and popular way of building multi-platform desktop apps with web technologies. Let's get a dive into this awesome tech and see how we can use it to enhance our own experience and our user's experience on the desktop.
  `,
  youTubeId: 'y4S5eiWMYsI',
  podbeanId: 'wabfm-60c69f',
  shortUrl: 'http://jsair.io/electron',
  host: {
    links: [
      `[My Atom Plugins](https://github.com/kentcdodds/ama/issues/113)`,
    ],
    tips: [
      `Teach to Learn. I learned ASTs by preparing and giving [this talk](https://github.com/kentcdodds/talks#a-beginners-guide-to-asts). And read [this blogpost](https://medium.com/@anirudh.modi2/why-teaching-is-the-best-way-to-learn-9c350d2a4b33) by [Anirudh Modi](https://twitter.com/modi_modi3).`,
    ],
    picks: [
      `[Start With Why](http://smile.amazon.com/dp/1591846447)`,
      `[What Code Comments can Teach us About Scaling a Codebase](https://medium.com/@kentcdodds/what-code-comments-can-teach-us-about-scaling-a-codebase-90bbfad8d70d)`,
    ],
  },
  panelists: [
    {
      twitter: 'tylermcginnis33',
      tips: [
        `[Find a hobby- Skaters of the web](https://plus.google.com/communities/112250265277452415082)`,
      ],
      picks: [
        `[How to learn technical things](http://jamison.dance/07-04-2016/how-to-learn-technical-things/)`,
      ],
    },
  ],
  transcript: `
    KENT: We're live with JavaScript Air. Hello everyone, my name is Kent C. Dodds and I am your host for this JavaScript broadcast podcast called JavaScript Air. And today we're going to be talking about Electron apps. This is episode number 30, our 31st episode. We start at zero, of course. I'm really excited to be chatting with some subject matter experts about Electron and building desktop apps with web technologies. Super cool stuff.

    Before I get into it though, I'd like to give a shout out to the sponsors that make it possible. So Egghead.io is the show's premier platform sponsor and they have a huge library of bite-sized web development training videos. Check them out for content on JavaScript Angular, React, Node and much, much more.

    Frontend Masters is a recorded expert-led workshop with courses on Advanced JavaScript, Asynchronous and Functional JS as well as lots of other great courses on frontend topics. Check them out at FrontendMasters.com.

    TrackJS reports bugs in your JavaScript before customers notice them and with their telemetry timeline you'll have the context to fix them. Check them out and start tracking JavaScript errors today at TrackJS.com.

    SparkPost is email delivery built for developers. Build something awesome with their NodeJS library or SMTP relay and start sending 100,000 emails free with SparkPost at SparkPost.com/jsair.

    WebStorm is a powerful JavaScript IDE. It makes developers more productive with superintelligent coding assistance for JavaScript, Node, Angular, and React and integration with lots of different tools. Learn more at JetBrains.com/webstorm.

    Sweet! So as a reminder, this is a live show and so if you're watching live then go to Twitter and if you have any questions use the hashtag #JSAirQuestion and we'll answer your questions at the end of the show. And this is a weekly show, and so we do have a show next week called Automated Accessibility Testing with aXe-core and we have Wilco Fiers, I think is how you say his name, Darren Barrell and Marcy Sutton on next week's show. I'm really looking forward to that so check it out same time same place next week. As always, follow us on Twitter, Facebook and Google Plus to keep up with the latest.

    Okay, so that's all the announcements. Let's go ahead and introduce who we're talking with. So for our panel today, we have Tyler McGinnis.

    TYLER: Hey, what's up everyone?

    KENT: And I am your host, Kent C. Dodds. And for our esteemed guests, we have Evan Morikawa.

    EVAN: Yep, good morning.

    KENT: Yeah, I didn't ask you if I pronounced your name right, so was that alright?

    EVAN: Yep, that's right. Evan Morikawa, that was pretty good.

    KENT: Okay, awesome. And Jessica Lord.

    JESSICA: Hello!

    KENT: Awesome, so we're so happy to have you both on the show. So Evan why don't we go ahead and start with you? Can you give us an intro to who you are, where you work, and why you're interested in Electron?

    EVAN: Yeah, I work at a company called Nylas in San Francisco. We've been using Electron to build an open-source email client called N1. So it is an Outlook replacement but designed to be very extensible which is part of the reason why we're here--

    KENT: Oh no, did Evan freeze for everybody? Evan?

    EVAN: Oh hello. (audio warbling) Sorry about that.

    KENT: You said, "this is part of why we're here..." and then you, like, stopped.

    EVAN: Sorry about that. Yeah, the fact to make this email client open source, to make it something you build plugins on top of, use all day long is a big reason why we're on Electron.

    KENT: Very cool, awesome. And Jessica.

    JESSICA: Great, I am on the Electron team. I'm an engineer working from Portland for GitHub on the Electron team.

    KENT: Cool, yeah, so definitely a subject matter expert working on the team itself. So, awesome, let's go ahead and I think it's always good to get a baseline understanding of what it is that we're talking about so we're all, first off we all make sure that we're all talking about the same thing (laughs) but also that people listening have some context around what we're talking about if they're not familiar. So I think a great question to get our conversation going is what is Electron? I'm not talking about the "atoms" am I? (laughs)

    JESSICA: No, so Electron is an open-source library that was developed by GitHub that allows you to build a desktop app with HTML, CSS, and JavaScript. So typically, you would have to build an app for each platform, for each operating system in that native language, but what Electron allows you to do is to write it once with web languages and ship it to Mac and Linux and Windows.

    KENT: So this may be a sideways question a little bit but that "write once, run anywhere" thing was like the big mantra of Java, right? So maybe could you talk a little bit about why you feel like Electron or how you feel like Electron fits into this picture and maybe how it's succeeded so far?

    JESSICA: Yeah, so to that "write once, run everywhere," I think the additional thing that Electron's really trying to solve is not necessarily like pick any one language and have it run anywhere, but the idea was to build it with the most ubiquitous languages so that the apps you build are hackable, so that more people can create apps so building apps with HTML and JavaScript might be a bit more approachable than building apps with Java. Yeah, so really the idea is to be hackable and approachable.

    EVAN: Yeah, I'd also say that Electron is very much focused on the desktop. There is no Electron iOS. So certainly the type of platform that you're on is much more consistent. And they've gone through great efforts to make sure that you have a single, easy-to-use notification API which uses native Mac notifications or native Windows notifications. That being said, there are still distinct differences between the operating systems that you should be aware of as well. For example, like Windows users love right-clicking things and Mac users never do.(laughs)  In addition to just the sheer UI of it as well, you don't have to make it look like a Windows app or like a Mac app but going that extra step to customize it to the platform, we found definitely helps people really feel like they're using a first-class application on their computers.

    TYLER: So there is a way to specifically target a specific platform?

    EVAN: Yeah.

    TYLER: Oh that's very cool. What is the, I have like zero experience with Electron, so what's the I know with like React Native you basically have like a .ios file. Is that kind of the same with Electron?

    EVAN: We actually just use plain old Nodes, process.platfor, which gives you the platform that you're on.

    TYLER: Very cool.

    KENT: So with, you brought up something kind of interesting, in this idea of shipping to all platforms, you need to not forget that you're shipping to all users as well. And so people who are used to the way that apps work on Windows, when some of that differs in some ways with Mac, can you talk about some of the challenges there?

    JESSICA: Yeah, so you really do need to, I mean if you care to create that nice experience on each platform you do need to be mindful of the differences between the platforms, so like the way the UI looks but also even is it going to be called Settings or is it going to be called Preferences? And that varies from operating system. And so because you control the menu, you control how that feels. So you could create an app that used totally different terminology than anyone's ever seen. It could be completely unique or if you are a person who uses a Mac and develops on a Mac you may end up, if you don't think and consider those things, you may end up shipping an app to Linux and Windows that's got all of this verbiage used in the Mac world that's going to be unfamiliar to Windows users.

    So it does take knowing a bit about each platform. And so there are APIs in Electron that only exist for certain platforms as well because not everything is the same, like every platform can open a file and save a file, but Macs have the dark and light toolbar, and that is different than on Windows. And so it may be important for your app to know on Mac what setting the system is on in terms of dark or light menu bars but you may have to do something different or maybe many more options, many more ways on Windows that the user has customized their theme and stuff. And so you do need to think about the different environments that your app is going out into.

    EVAN: Yeah and but then again that being said, there are definitely those differences but we've found that you can get a surprising large amount of traction with some fairly, at the end of the day, minor changes. So for example, on Mac all of our buttons are three-pixel, rounded corners and like a half-pixel drop shadow border, so like it looks nice in Retina and stuff like that. But really that's just, at the end of the day, two CSS variables and suddenly when you change it to a zero pixel like square corners and a two pixel border, you suddenly have a Windows 10 button. So like, or things like the dock icon on Mac is round and the Windows dock icon is square but let me tell you the minute we changed the dock icon from the round Mac one to the square one, all of a sudden Windows users thought they were getting like a really, like if it fit it tiled in their Windows 10 dock so much nicer. So that's certainly on the easier side. Then again we had this long debate about preferences. Preferences and settings are pretty different. Mac people expect a pop out window, they expect big icons on tabs, and Windows they slide in from the side, they're very like nested in. So finding this middle ground there, because that was a lot of different components to build was slightly more challenging.

    TYLER: As far as like the implementation of that have you found that to be difficult? Like specifically you talked about the menu bar, the slider or whatever, is that difficult to have, essentially like two different code files or whatever for two different platforms or is it not as difficult as it sounds?

    EVAN: It depends on where, like for example, a lot of these style things we just use all the benefits of CSS. It's actually just a body class change. So you get all the cascade into this and there are a couple separate styles for each but not a ton, usually. We do tend to avoid, like, when designing the app like this preferences thing, we had to pick this middle ground just to not maintain two completely separate components.

    KENT: Cool, so with the deploying to multiple platforms, I'm just making sure my assumption is correct, so you can deploy to Mac and Windows and Linux? Is that correct? What versions of Windows does Electron support?

    JESSICA: Not seven. (laughs) Definitely eight and 10, I don't know if Evan knows more of the numbers.

    EVAN: Yep, no that's all we test with as well. And then we have a pretty big user base amongst Linux users, so we know it works on the major Linux platforms as well and then Mac two versions back. So the support is pretty good for most of the user base, you know.

    KENT: Cool, and when I'm building something with Electron, so based off of our conversation, obviously, Electron doesn't give you just like a, it doesn't automatically give you the window and everything, you'd have to kind of create the whole UI, so are you creating the toolbar at the top and the buttons as well, like all of that? How much does Electron give you out of the box?

    EVAN: It actually, it varies so you get the basic browser window does have sort of your native toolbar there. You get basic window controls, you get like things you can put in the toolbar and docks and places like that too. But it also gives you the power to not use any of that if you don't want to. We actually tried to, like our little Mac stoplights are currently CSS and HTML just so we could move where they were a little bit more. In hindsight, I would say that doing that, using the native Electron things it drops down to a lot of the native operating system pieces as well, which is really useful for like the right click menus are native operating system right click menus. Like tooltip hover over pieces are native operating system things like that. So using as much as what the operating gives you is certainly helpful for the styling things, but you have a surprisingly large amount of control over each and every individual window you have.

    KENT: So with that, like with your current solution of using CSS for that, do you have to call into APIs when they click the close button and you have to call into APIs when they minimize or when they full screen?

    EVAN: In the case of these, yes. That's actually another, they add on, the Electron window controls are actually very nice for that. It is just that, it's just window.close. So you have a lot of capacity to do that. And it makes a distinction about like when you, when there are a lot of windows that you close but are actually just hidden, so we use very heavily a lot of applications that, like for example on Mac when you close the email client, like the main page, we just hide the window because you expect like the native case is still the app is still running, which is true for a lot of Mac apps but on Windows, when you click that X, it actually tries to quit it. But at the end of the day it is just one, it's one if-statement, it's two different APIs that are one liners.

    KENT: Okay, cool.

    TYLER: So I actually have, one of my buddies slacked me a question that he wanted to ask you guys so I'll try my best to summarize it real quick. So basically at his work, they built an Electron app that is basically just Chromium that points to our app because that was way easier, in his words, the Electron app will update every time we deploy our web app and didn't have it set up auto updates. So the question is, what are the benefits of actually compiling your web app into a desktop app versus just using Electron as a Chrome container that points to your web app?

    EVAN: Yeah, so yes, the easiest by far hello world for Electron, because at the end of the day it points to an index.html file, right? Like all of these apps launch like a regular webpage. So the easiest is you can take your existing webpage and just put it inside of a web frame and you get a dock icon. Okay, that is like the base-level piece to do. But we found that a lot of pulling all of this together gives you a ton of really nice advantages you couldn't get with just a basic webpage. So for example, I know in the case of our email client, we sync gigabytes of mail data locally although we actually store it in a local SQLite database. And when we built the app we compiled that SQLite against the Electron headers and then against each individual platform. But that means you can call you can run a database query from a React component.

    And that's what we do is we use the observable library, RXJS library and we can basically hook up a database query directly to a set of React components. So we can use the database as like a big store, which is a pretty cool pattern that you can do now that you can sort of compile any of these arbitrary extensions on top of what we have. I mean in addition, things like your API access token we can use the native Mac keychain to store that but once again through a compiled Node module as well, which is a nice feature, a nice way to be able to kind of store those credentials. So once you start using native extensions, once you start using a lot of heavy file system access like the plugin model wouldn't really be as easy or possible without that, then you really start to have something very distinct from what you can do in just a plain web environment.

    KENT: I guess it just really kind of depends on use cases. And like my mind is racing trying to like accessing a database from React, it's like what? Like with your React app you're not even using server-side rendering, you're just like it just is Node, is that?

    EVAN: Yes.

    KENT: That's wild!

    EVAN: Yeah, on this one of the coolest features in my opinion about Electron just on a day-to-day level, right, like you can open up the console and have document.body, right, you get your standard DOM, but from like your kernel web console you could also type FS equals--

    KENT: Oh, Evan dropped out again. What he was going to say is FS equals Require FS.

    EVAN: Yeah you can just start spawning processes from your Chrome Inspector panel if you wanted to.

    KENT: Yeah, it's pretty wild. Like you can have, in the same file, you can be manipulating the DOM and manipulating the file system. That's nuts.

    JESSICA: Yeah, so like to that point we have an Electron API demo app, so shout out to that and I'll put the link to that but it's an Electron app demoing the Electron API. And it's got tons of reusable code in it. And so all of the code snippets are the actual code running the app like in the HTML file, we just FS Read that JavaScript file and then add it to the DOM.

    EVAN: (laughs)

    JESSICA: And maintaining the app, it just exists once. If you update the real code that's running the app, then all of your code snippets are also updated.

    KENT: (laughs) That's so awesome!

    EVAN: Yeah, it's actually made me a really spoiled JavaScript developer because if you see anything on any blog anywhere, be it for any cool thing you can do with Node, like latest Node because it's running Node six like anything you can do with latest Chromium because it's like Chromium 50, it actually just works, to a large extent, regardless of what platform that you're on. That's actually one of the amazing features under the scenes that you all have been able to pull off is this merger of these two event loops and these two complete systems into one seamless context, which is a really nice thing to have as opposed to sort of like multi-context type of thing that like the work I tried to do earlier.

    JESSICA: Yeah so like what Evan was saying, you have the near latest Chrome and Node. We're on Chrome 51 now, but Chrome 52 is in the dugout. (laughs) It's getting ready to be added. So CSS variables exist in Chrome, so you could just use CSS variables. Over 90% of ES6 is already in V8 so you don't need Babel, like you can just write ES6. There's nothing else you need to do.

    EVAN: We actually finally we just dropped off you can set these, there's now this Babel Electron preset but you can use everything, you can just start typing ES6 in a console. All of our code no longer runs through Babel so when you inspect it, when you look at it, it is that plain ES6 which is really nice.

    KENT: So all you're missing is the ES6 modules and the two features that just came out in ES2016.

    EVAN: Yeah, I mean we still use it for the static class binding syntax.

    KENT: Right, yeah.

    EVAN: ...compile the modules. But pretty much everything else is as native which is also nice because not only whenever Chromium update ships, like the V8 Team has gone through great effort to make those native calls--

    KENT: Oh no, Evan keeps dropping out. Evan I'm afraid you keep freezing for a second.

    EVAN: Oh no, I'm sorry about that.

    KENT: It's okay.

    EVAN: The only thing I was saying is that the V8 Team goes to a lot of effort to make these functions run quickly in their native syntax. You get that all kind of for free.

    KENT: Yeah that does sound like a pretty wonderful place to be. (laughs) So I do want to get into the details of how things actually work. Like we already talked about how you're merging these two event loops from two totally separate platforms into one. So, Jessica, can you talk a little bit about how Electron accomplishes what it's doing?

    JESSICA: Yeah, so when we talk about how in Electron you are using Chrome, what Electron actually includes is just a subset of Chromium. So Chromium is the open source version of Google Chrome. And instead of requiring all of it, Electron requires just the part of Chrome that knows how to render a webpage. That makes Electron smaller file size-wise, it's easier for us to update, there's less things to check and patch every time Chrome updates. So there's just the library in Chrome that knows how to render a webpage and then Chrome uses V8 which is also what Node uses. And so in the Electron context, this Chromium library and Node are sharing a single V8 instance. And so it's the V8 that Chrome has. So sometimes Electron patches Node because to make Node work with that version of V8 but the idea is there's a single V8 and then Node and Chrome are sharing that and it creates a single runtime where Node exists everywhere.

    KENT: Interesting. It seems like some pretty complicated engineering. How do you, so are you working off of a fork of Node and you just keep it updated or?

    JESSICA: Yeah.

    KENT: Okay. Interesting. Yeah, that's, yeah.

    JESSICA: And some things flow upstream back to Node as well from that fork.

    EVAN: Yeah, I remember you guys had an interesting post about, wow this is way back, this is Node 12, it was only possible through this adding this multi-context execution piece into Node, so there was a huge contribution back to Node 12 to enable it was pretty much this huge change that changed out all this global environment stuff, so you could run these multiple contexts in sort of one runtime. It was a pretty impressive engineering feat in my opinion. (laughs)

    KENT: Yeah, that's very cool. Man, that's really interesting. I can't even imagine. So what's a lot of the code in Electron? Is lots of it like C code binding these things together, lots of it JavaScript? What's that like?

    JESSICA: Yeah, it's mostly C++ and then there's a JavaScript API.

    KENT: Yeah, interesting. Boy, I'm glad that you're writing that because I couldn't do it.

    JESSICA: Well I'm not writing the C++. (laughs)

    EVAN: Actually this is a time to give a huge shoutout to ZCBenz, and you can talk more about him but as far as I'm concerned he is the code god of Electron and actually one of the original Node web kit authors, correct?

    JESSICA: Yes, yeah. So Cheng is on our team ZCBenz on GitHub and he is the primary developer on Electron Four and has been since the very early days. So Electron originated way back when because GitHub wanted to build Atom, its text editor and wanted Atom to be hackable to the core, to be made up of these ubiquitous components like HTML, CSS, and JavaScript. And so early on, many moons ago, (laughs) a few years ago when the team was starting, they tried out different approaches, I mean they tried out all kinds of different ways to make this happen and they tried Chromium embedded framework and NWJS but nothing provided that context that they really wanted. But through, NWJS they met Cheng and they shared ideas of this future world that could exist.

    And so then Cheng started working with GitHub to build what is now Electron. It was originally called Atom Shell because it really just was a piece of Atom and it's just been it was open source with Atom two years ago. And you know, the team's focus was still on Atom and then slowly Electron started growing and growing and it got to the point where it needed its own name and its own team and so really the last year, for the last year it's been called Electron and that's been the biggest growth in it and we've seen so many contributions also come from other teams working on it. So originally, it was really shaped to suit Atom, right? We built it to build Atom but now so many other teams are building all kinds of other apps on Electron, not just text editors. And so they're contributing a lot of stuff upstream and new APIs into Electron that wouldn't have occurred if we were only ever focusing on Atom.

    KENT: Yeah, that's awesome. So I'm a little bit curious about GitHub's role in this and lasting, I guess, interest. And so Electron was originally created for Atom. Is GitHub using Electron for anything else? And then also, why does GitHub care to even have an editor in the first place? How does this help the business of GitHub?

    JESSICA: Well, just let me put on my marketing hat. (laughs)

    KENT: (laughs) Yeah, sorry.

    JESSICA: Well, so Atom itself was a dream of Chris Wanstrath. So way back when, he actually had this dream when he was starting GitHub and had to shelve it because he had to make GitHub. And so it was a dream of our CEO's and so once GitHub got settled enough that they could pick it back up, that's why they started working on Atom again. But as long as Atom exists it needs Electron and GitHub loves open source and it loves that developers are, it's awesome because GitHub is a place where developers can build or put their code but then Electron and Atom are the place where you can actually build your app, build your first app completely in your text editor and build any kind of app with Electron.

    KENT: I think that's cool. I just had this crazy idea when you were saying that like turning GitHub's online editor into sharing a bunch of code with Atom and just making it be Atom in the browser. Like, what, mind blown. That would be super cool. And like that'd be awesome if I could have all my plugins in there and stuff. I'm a heavy Atom user, so mind's racing now. (laughs) So actually, Evan so you actually when you started Nylas you forked Atom, is that right, to get started?

    EVAN: That is correct actually. At the time we like, we want to do for email effectively what Atom is doing for code editing. So day one of the email client was forking Atom and turning off all of the plugins and making our own called Email friend list and hooking it up to this rest to API we'd been building for the previous year--

    KENT: (laughs) There he goes again.

    EVAN: Yeah but at the time Atom was excuse me, sorry about this. This was right after Atom was announced. This was, it was still Atom Shell then as well. And over time it's very much like started to grow and change but we definitely owe a lot to the original ideas that were in that code editor.

    KENT: Yeah, I think like the whole idea of a pluggable email client or a pluggable editor and that it's pluggable with something as approachable as JavaScript, just gives you such a leg up. So actually I'm kind of curious about the plugin system of both Nylas and Atom. How does that work? Do I just like hook into some sort of API and then I can start manipulating the DOM in whatever crazy way I want to? How do I build a plugin for these systems?

    EVAN: Yeah in our case, so the entry point for I think both plugin systems are fairly similar, right you just have some single point where you start activating your code and it starts running. In our case, we have all of our plugins register their components to say like, "I would like to put a component somewhere in the sidebar." So you do not like jQuery yourself onto the DOM and then at runtime we say like, "Okay, so who all wants to be in this sidebar section?" And then we just render the components because they're all wrapped in a React component. They're actually double-wrapped so we can catch all of the errors that might come up though them and kill them as necessary. But at the end of the day, what it means is that we found that it's a pretty nice controlled way especially built on React to sort of say where all of the places are that can be added or extended on top of this as well. Yeah, and then it's effectively storing all of these components as data. It makes it pretty easy to reason about what's going to show up at any given point because you can just look at the data stores that are down there.

    KENT: Interesting. Jessica, did you have any additional comments about the Atom side of things?

    JESSICA: No, I mean I don't know the Atom plugin system as well, actually. I mean I did work on a few but you can pretty much put stuff wherever you want (laughs) and register and publish it with APM which is like a fork of MPM and create your packages.

    KENT: Cool, and there are tons of really great ones.

    JESSICA: Yeah.

    KENT: I'll actually put a link to my favorites in the show notes because I've got a couple that I'm loving. One of these days I'll write my own. It's just a matter of time. (laughs)Tyler did you have something you wanted to say?

    TYLER: Yeah, so I'm kind of like the economics of startups really intrigues me and like utilizing software to save money and whatnot. So with that I kind of have a few questions wrapped into one. One, what companies, besides you, Evan, obviously, are using like Electron for their main app? I've heard rumors that Slack is, I don't know if that's true. Two, are there any performance issues with that slash what are some of the most common complaints that you hear when you're developing Electron? Sorry for like literally like four questions but I've been saving them up.

    EVAN: So Slack definitely is and I definitely want to make a shout out to Paul Betts who is a Slack engineer, who has done unbelievable amounts of effort to make Electron work extremely well on Windows. So the Windows Slack app today is all Electron. The other team I also want to give a shout out to is the Visual Studio Code team. Microsoft has also partially invested a large amount into making Electron work well in Windows. And Visual Studio Code is also a pretty impressive piece of software too. There are also quite a few other companies. I know Wagon makes a very cool SQL editor. Their entire company's currently built around that. There's a cool company called Speak that does instant, almost walkie-talkie style chat. They really push what you can do. They have this app that has these little bubbles come out from the side of your screen. It's really impressive that it's built in they have this crazy transparent system window that they're using. It's pretty impressive that it's built in web technology at all, all built on top of Web RTC plus a bunch of other things and it works really well.

    JESSICA: Yeah, WordPress has made a desktop app with Electron. WhatsApp is I guess using Electron now for their desktop app. (laughs)

    EVAN: What?

    JESSICA: A lot of places. So we have, if you go to electron.atom.io/apps we are trying to keep a list of things there. Obviously people are free to develop an Electron app and never tell anybody that it's an Electron app but some people do want to share that they're building on Electron. And so anyone can make a pull request and add their app to that page. And so that's some of the way that we find out actually who is building in Electron. You can also right click, show contents and start digging around and look for some telltale Electron signs to learn that the app you're using is built on Electron.

    KENT: Oh my gosh! I'm looking at this right now. This is a huge list. A lot of, there are a ton of apps.

    EVAN: I mean Facebook's Nuclide is too. I mean Docker and Kitematic. There's a lot of pretty big companies that have very recently put a lot into it. It's a very present ecosystem.

    JESSICA: Brave Browser!

    EVAN: Oh, yep.

    KENT: Yeah, that's a big deal. And I just found a Google Play Music thing. Google Play Music hasn't been working for me so I'm super looking forward to trying that out. (laughs) Oh yeah this is awesome. Franz or Franz, that's a fantastic app. I'm just looking through this. There was one other that I saw that was interesting. Oh yeah, Postman, people use Postman. Discord, yeah. This is awesome, very cool.

    EVAN: Yeah, this list is just growing every day, as far as I can tell. (laughs)

    KENT: That's awesome. So I wanted to ask a little bit about how does one learn how to develop apps for Electron? What's the getting started learning experience like for building apps up with Electron?

    JESSICA: So my pro tip for that is we have a thing called the Electron Quick Start App and it is a barebones Electron app. And Electron just needs a main a JavaScript file to tell it to run and a packaged .json that says what that JavaScript file is and then a webpage, an HTML file. And so once you have those three components, you can make an Electron app start. So this Electron Quick Start app has those barebones things in it and you can fork it, clone it, run it and you'd get an empty Electron window, an empty app window that says "hello world" and it's got the example there of how you can actually run Node in your HTML. And that's a great place to just start because if you know HTML and you know JavaScript then you can just take that and then just start editing those files. Add an h1 to the HTML file.

    And I know places have started their app and I've started apps that way where it's almost just like if you think of the most minimal HTML boilerplate. Just starting with the Quick Start app and then you just start adding your stuff to it. And then using the API Demos App for ideas, for pro snippets, for really seeing some of these things that Electron can do, how to communicate between, Electron has two processes. You have your main process which is the life cycle of the app and it does all of the heavy lifting in terms of the native elements, like opening the dialogues and things like that and then you have your renderer process which is all of your Windows. And so talking between those and that kind of thing, you can learn more about that in the API Demos App.

    EVAN: I also want to say that that Electron Quick Start App, I actually push any people that I meet who are new to programming in general like just new to JavaScript there first because you have none of the crap you need to worry about. There's no check all build step, there's no like this browser's weird problem, there's no like what's the server what's a client, it just works. You just type JavaScript and not need to worry about all of the extra complexities that like the WebStack has to just learn to code in general. So I would actually recommend it as a learning environment, let alone as an Electron starter.

    KENT: It looks super simple too, I'm just looking at it now and there's like a handful of files and like you said in the index.html there's a script tag and in that script tag, there's a require. (laughs) Like, oh my gosh, this is so cool! I don't want to build for the browser anymore.

    EVAN: Yeah, now when a brand new person's like no, no, no you need to do this like I need you to require JS thing, so here's this, okay, you want to learn how to code? Here's an H1 tag, here's webpack. (laughs) Yeah, it's a much nicer ease into coding in general to get started with.

    JESSICA: Yeah and if you just want to turn all of your favorite websites into their own desktop app, like you can just start with the Quick Start and replace index.html with like www.github.com and then you have a GitHub desktop app.

    KENT: That's sweet, that's cool and then you could start layering a bunch of stuff on top of that like manipulating stuff, that'd be interesting. Hmm, something to think about. So another thing, so we talked about how easy it is to get started. I'm interested in how well this scales to a bigger app and what the developer experience is like developing an app. With the browser it's just super easy, you make a change and then you go to the browser and hit refresh. With Node you're like, "Okay, run this thing, it's broken so you make changes, you run it again or you have Nodemon or something running a watch. What's the experience like with Electron?

    EVAN: Actually it's pretty much the same. Make a change, hit refresh and the whole piece boots up again. Occasionally if you run something, if you want to make a change to that backend process we just control c, restart and that will pull you up quickly. I will say for having the Chrome debugger tools, developer experience at the end of the day is like hats off to the Chrome dev team because there are a lot of really nice pieces in that that web developers take for granted but like someone coming from like traditional desktop development experiences it is night and day different.

    Actually the Chrome dev tools, that whole developer experience that this community puts effort into is in my opinion one of the reasons why Electron as a development platform, especially for its desktop, is such a big deal. Having an experience as good and like the paint cycles and the rendering speeds and everything that the Chrome dev tools give you is something that you really just don't have in any other desktop building experience, at least to that quality, which does make building very complex apps much, much, much easier to do because of the types of tooling that we have. I like it a lot. (laughs)

    KENT: Are you using any hot module reloading with your React stuff or anything like that?

    EVAN: We are not, actually. We really should. I don't think there's any reason why all of these systems shouldn't work I think we just haven't dropped them in yet.

    KENT: Yeah, well it requires having something like Browser Fire webpack.

    EVAN: We just got React dev tools. (laughs)

    KENT: Yeah, actually that's interesting. So browser extensions and things, can you put those into Electron?

    EVAN: Only recently.

    JESSICA: (laughs) You can go ahead.

    EVAN: No actually, I was actually deferring to you. I don't know the details of how that happened.

    JESSICA: Oh, so extensions like the extensions you have in your top bar, no. That's a part of Chrome that's not included in Electron. A bunch of stuff just fell out of the closet behind me.

    KENT: That's kind of spooky. (laughs)

    JESSICA: (laughs) Yeah, it is. But so like Evan said, you have Chrome dev tools is there and just recently, we've added more Chrome.apis so that more dev tools extensions so we're talking dev tools extensions and not just Chrome extensions here. So Chrome extensions don't work, that's a piece that's outside the scope of what Electron includes, but dev tools extensions work. We're slowly implementing more APIs, and so basically, enough APIs have been implemented for the React dev tools, Redux dev tools, there's like three or four dev tools extensions that are now working because the APIs have been implemented. And we're currently adding support for the accessibility, Chrome accessibility audit. It's actually going to be a part of Devtron which is a dev tools extension that GitHub has made for Electron that audits your Electron app. And so the Chrome accessibility audit is going to be added as a part of that.

    KENT: Oh yeah, let's make sure we get a link in the show notes for that. Awesome. So I think we do have a couple of questions on Twitter so I think we'll move into there. Is there anything else last minute that you all would like to mention?

    EVAN: Actually I wanted to just to be fair to all sides, Tyler earlier asked like some of the common complaints or issues that come up with Electron. And I definitely wanted to give him a fair chance to hear some of the potential downsides, right? I would say one of the most common ones is just the fact that in order to get started, we have to ship all of Chrome and parts of Node as well. So there is a certain amount of getting started size. And if the app really does nothing but a single teeny-tiny toolbar thing that really could be 10K in native code, you may not necessarily need all of Electron. But then again the minute the app becomes complex, the dev tools, the APIs, this whole environment is definitely a huge deal.

    The other thing I'd say that we have fought with a little bit is just like memory consumption, RAM consumption. Every window that you open is a full blown Chrome tab effectively, right? We all know what happens when you have 100 tabs open in Chrome and you watch your live system process go on. And that has been, we need to be careful to not open like 30 Composer windows at once because the memory footprint gets pretty big. That being said, once again we get a lot of things for free. I don't remember from which version to which version, but one day, Chrome shipped an update that came with Electron and it cut our memory usage by like in half. (laughs)

    KENT: Wow.

    EVAN: With one optimization they made way deep down in there. So yes it is an issue for Electron apps but only because it's also something that the Chromium team works on too. And that's definitely something that they optimize for, a lot which you do sort of, once again get for free because that.

    TYLER: Cool, thanks for answering that.

    JESSICA: Yeah, and I would say also a common thing people will talk about, startup time because that's, if you are making a ton of requests and right like all of you're using tons of Node models that require tons of other Node modules, you can simplify that by putting all of them in one JavaScript file and that kind of thing, but I feel like that's a common thing people have hit where they feel like it's starting slow because they're making a lot of requests.

    EVAN: Yeah, although another one people bring up that I would like to debunk a little bit is speed. If you talk to any long-time C++ desktop app builder they're like, wait, you're gonna build it in JavaScript? What are you doing? But at the end of the day, when it comes to speed and users, right, like if your application is moving at 60 frames per second, it is fast enough, right? At the end of the day, that's what speed means to people. But there are an enormous number of techniques you can do in the web community to do that. And once again by coming back to Chrome dev tools, really good debugging tools to see where these janks are coming from. Like jank busting as a thing on the web is an increasingly rich source of techniques. And all of which apply plus extra fun things you can do with Electron. Like we actually can offload work to a background window to just pull things off the main render thread. So we have all the techniques of the web plus some, which at the end of the day, means you can get something that runs at 60 frames per second which is what people think of when they think of speed. So I definitely think performance for nearly all types of applications is definitely attainable with Electron using sort of the same techniques that you would do for any other web application.

    KENT: Oh yeah, I think that's awesome and you don't even have to break out into a web worker. But you can, right? Like you have access to those kind of APIs like web worker, service worker, all of that, right?

    EVAN: We have not personally used web or service workers, but we do actually launch a separate window in the background which acts exactly like a web worker, with the added benefit that it has a renderer process attached to it which web and service workers do not. That's useful just for like, we actually put a debug console, it's a little developer console where all of our API requests get json-ified and stuff like that too. Having a render process turns out a big deal for service workers. One of the major reasons, so there've been a lot of experiments to offload React rendering, like a lot of the React processes onto web workers, but if you look at the issues, there are still like it requires renderers to test text width issues so it's very difficult to do without a renderer process but Electron you have one, so great.

    KENT: Yeah, very cool. Boy, if only we could just convince everybody to install our apps. Now that's going back a couple years. (laughs) Cool, I think it caters to a really, to specific use cases and it's really awesome. Cool, so let's go ahead and we'll move into our Twitter questions. We do have two from Amit and the first question is, "Any suggestion on packaging and deployment?" I think he's a Linux developer working on a Linux machine targeting Linux and Windows.

    JESSICA: There is a library called Electron Packager and that one, I think, is the most commonly used one. And it's definitely the one that I have used and we've used on the Electron team. You can package all of your apps from that. You can add it into your npm scripts so that you just type npm run pack Linux and it will build the Linux version for you. And I believe you should be able to build Linux from any platform. You can also build the Windows package from Mac. You need a couple of dependencies. There's one called Wind, and then another one but it's in the readme but you can build your Windows version from your Mac, and you can definitely build the Linux version from your Mac too.

    EVAN: And we actually use Travis and AppVeyor on continuous integration to build every time we push to master, AppVeyor builds Windows. Travis has Mac builds so we use Travis Mac. And we also build for Linux on just standard Travis and it works.

    KENT: Oh, that's really interesting. And then can you automatically deploy that to somewhere, or?

    EVAN: Yeah and those automatically get pushed to S3 and we serve it off of there.

    KENT: That's so cool, man! Yeah, that's awesome. I love that. I love automating stuff. That's awesome. (laughs) Cool, so another question from Amit, "Any way to handle node modules dependencies in reducing package size?"

    JESSICA: So not out of the box with Electron. Well, okay, so not out of the box with Electron but there's some things you can do like if you only need something for developing, if you --save_dev and save it as a dev dependency, then when you're using Electron Packager you can use the prune option and prune will not include anything that's in your dev dependencies. So that way, only put the modules that you really need in dependencies, put everything else in dev dependencies and that won't get shipped with your app. Atom has a ton of stuff going on. And so because it's got all of its modules and then all of the things that you're requiring and all of the plugins that you have and so there's just a huge pile of Node modules. So Atom actually does manually on its own a de-duping step where it actually is looking for compatible versions. And so that is something you could do if you hit that cliff but I think that you can do a lot just by putting stuff in your dev dependencies and pruning it out of your package.

    KENT: I think another tip is like packages often will include files that aren't really relevant to what you're requiring. Like for example let's just say that there was somebody who accidentally included like a 9MB gif in an npm package and it definitely wasn't me (laughs) but as soon as I found out, it was gone. But that kind of thing can happen by accident. People can include all of their test files and all kinds of stuff. And so another thing that you can do to just get rid of all of the stuff you're not actually using is you could bundle with Webpack. And I have never built an Electron app but I would expect that would totally work and you'd probably shave a lot of stuff because then you don't have even the package jsons for all of the modules and everything. Another thing that would add a whole bunch of complexity, but if it's important to you, then it might be valuable. Sweet.

    EVAN: Yeah, anything you can do with Node will work here.

    KENT: Yeah, I love that. Alright, sweet. So let's go ahead and let's jump into our tips and picks. So we'll start out with Tyler and then I will go and then we'll have our guests.

    TYLER: Cool. So if you've been following David East on Twitter for the last 32 days he's an engineer at Firebase. He's been skateboarding every day. And by about day 25, I was super stoked that he was so persistent. And I like to skateboard, I'm just really bad at it and so Max Stoiber this developer from Austria, he created a Google Plus group basically for skateboarders of the web and there's just like a few of us in there. My tip is basically, do something. Basically find a hobby that's not sitting in front of your computer. Because I've only been doing it for about a week but it's been, not really rejuvenating but it's been cool to just get outside, which is something I don't really do often, sadly. And I don't think really many of us do that. So that's my tip.

    My pick is a blog post by my good friend Jamison Dance, just about the title is How to Learn Technical Things. And Jamison has done really well in his career at learning new things. He's big into Elm now, he was big into React. But he lays out some really good tips for learning which I think is really good thing to learn about, just because we're all kind of always learning. So that's it.

    KENT: Cool, I'm looking at this Google Plus community and it says Skaters of the Web, you can join.

    TYLER: Yes, you a skater. That'll count. I know you rollerblade.

    KENT: (laughs) Yeah, I'm just looking at skateboarders, I don't know. As long as I feel welcome there. I've got friends there.

    TYLER: I think we're a very welcoming community of like 10 members, so you're good.

    KENT: Alright, joined. You now have one more.

    TYLER: Perfect.

    KENT: Cool, so I've got one tip and it is teach to learn. So this morning I gave a talk about ASTs. I've given that talk a couple of times. And the feedback that I've gotten is it's been really helpful. The trick is that I've never actually created a Babel plugin or an ESLint plugin and when I first proposed the talk to the first conference I gave it to, I didn't know very much about ASTs. They're Abstract Syntax Trees, it's like this thing that sounds scary but it really isn't that bad. And so you can kind of force yourself to learn something by saying like, "I know it's possible for me to learn this thing, I just haven't made up the time." And so you make a commitments and then you'll find the time. And then I also have, as part of this, a link to a blog post by Anirudh Modi I think I'm saying his name right and it's Why Teaching is the Best Way to Learn and it kind of talks about this concept and it's great.

    My picks, first pick Start with Why. This is a book that I actually got from the JavaScript Jabber podcast. Chuck picked this book and so I just got it on Audible. I've been listening to it, it's really, really interesting. Kind of changing the way that I present information to people to make it make more sense and inspire people to look into what I'm talking about. Then last, I have a blog post that I just put out called What Code Comments Can Teach Us About Scaling a Codebase. And I actually created this blog post because I wanted to try out some of the things that I was learning from this book Start With Why. And so in there, you can give me feedback, how well do I start with why in that blog post? Cool, so that is my stuff. Jessica, why don't we have you go next? (silence) Jessica's muted. (laughs)

    JESSICA: Okay.

    TYLER: You'd almost made it the whole episode without doing that.

    JESSICA: Yeah. (laughs)

    TYLER: It was too close.

    JESSICA: So in my tips, I'm just reiterating, Electron Quick Start is the way to start all the things. Make a menu bar app. I haven't finished writing that URL but a cool bite sized product to get started with Electron is to just make a menu bar app. You can make one that just tells you time zones or the weather, anything that uses some simple easy to use API. I mean you can do this straight up with Electron yourself or there's already a module that makes it even easier which is at GitHub.com/maxogden/menubara. And so that just make it super easy to create an Electron menu bar app. And then my next tip is to check out the nativize.css file in Electron demo apps. And shout out to Nylas because they've done a huge amount of breaking down the walls and figuring these things out. But when you are building native apps with HTML and CSS there are actually things in CSS that you need to do that you would never do on a website (laughs). And so the nativize.css is the new Normalize in Electron apps. And so check that out to learn some tips on that. Actually then I'll actually add a link to Nylas' talks on designing native experiences with HTML and CSS.

    Then my picks are hammock camping because it's on my mind because I did that for the first time over the holiday weekend and it was awesome. And then to check out GitHub.com/muan/mojibar which is an Electron minibar app that makes finding the right emoji super easy. You install it, you should put it so that it loads as soon as your computer boots up because you need it all the time. It'll give you the raw emoji and the little colon symbol version of it if you want. And it's all based on keywords so you don't, the big benefit is that you don't have to remember the official name of the emoji, you just type your feeling and then you find the ones that relate.

    EVAN: And they're distributing through Brew Cask? That's cool.

    JESSICA: Oh wait, Mojibar?

    EVAN: Yeah.

    JESSICA: Oh, okay. It's by Muan who's a GitHubber and she's amazing. Muan Cho.

    EVAN: Cool.

    KENT: Awesome, yeah I'm looking at that right now too. I'm getting distracted. Evan what do you have for us?

    EVAN: Yeah, so I guess starting with my tips, one of the things that really helped us especially in the beginning is just reading through a lot of open source code, which I think is a pretty common tip in general in this community but especially because Electron, a lot of the patterns are still getting figured out. There are no standards yet. Luckily, there are a lot of Electron projects that are open source, from Atom to Visual Studio Code to I mean this is sort of what's going in the links section as well. But you'll see there's a lot of different patterns people can use with this as we sort of all simultaneously try to figure out what's going on.

    Some picks, one I have, one pattern we've been really that's been working really well especially for these types of big apps are using like observables through RXJS, which is anything that has continuous stream of events like in our case a database or like crazy mouse move events or things like that. Observables work really, really well. In addition, even side by side, with something like Redux. So it's not like a one all thing. That's been a hugely nice pattern. It's simplified a lot of things in our app too. The other thing I would recommend is the Electron Slack channel is really good. There are a ton of people there, so it's a little hard to keep constant track of, but that also means that questions do tend to get answered there by sort of the general community. The final thing I'll leave you with is something unrelated to programming. A book I'm reading recently is Moonwalking with Einstein which is super, super interesting. It's a book about this reporter who goes in and attempts to compete in memory sports challenges. It's about using cool mnemonic techniques to memorize anything from grocery lists to thousands of random playing cards in order. It's pretty cool. (laughs)

    KENT: Interesting, cool.

    EVAN: It's just a fun book.

    KENT: I like that, awesome. Cool, so we'll just wrap things up here. I just have a couple closing announcements. First off, shout out to our sponsors. Trading Technologies, they're hiring and building for what's next. And ReactJS Program is an awesome way to master the ReactJS ecosystem. And Sentry is cross-platform, crash reporting so check them out.

    Also check out the jsair.io/suggest to give us suggestions on guests and suggestions. I believe that this show was a suggestion from that. And then jsair.io/feedback is a great place to give us feedback on this episode or episodes in general or the entire show and jsair.io/email is where you can sign up for our newsletter that gives highlights from the show and general information about the show. Remember next week, we are having a show on accessibility, so that's going to be awesome. Same time, same place. With that, I think we're all up. Thanks everyone for coming, this was a blast and a half. And we'll see you around!

    EVAN: Thank you!

    JESSICA: Thanks! Bye!

    TYLER: See you guys.

    KENT: Bye!
  `,
}
