export default {
  title: `Progressive Web Apps`,
  guests: [
    {
      name: 'Henrik Joreteg',
      twitter: 'HenrikJoreteg',
      links: [
        `[Introducing Pokedex.org: a progressive webapp for Pokémon fans](http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org)`,
        `[Mozilla's SW Cookbook](https://serviceworke.rs)`,
        `[sw-toolbox](https://github.com/GoogleChrome/sw-toolbox) (so much good stuff here)`,
        `[Background Sync](https://developers.google.com/web/updates/2015/12/background-sync)`,
      ],
      tips: [
        `Sometimes it's just easier to disable registering SW in development. Just helps when you're trying to build/fix other parts of the site.`,
        `It's very important to test your update process when deploying new versions of apps with SW. It's possible to “brick” a web app since if you successfully register a SW, then push an update that has a JS error that prevents your SW registration code from running. Pushing a new version won't fix it because it won't register the new SW and keeps serving the broken code from the previous SW. `,
        `It's early to say this, but I think GraphQL will eventually replace REST as dominant http API approach for applications.`,
      ],
      picks: [
        `I <3 [reselect](https://github.com/reactjs/reselect) for [Redux](https://github.com/reactjs/redux) apps`,
      ],
    },
    {
      name: 'Ada Rose Edwards',
      twitter: 'lady_ada_king',
      links: [
        `[Caching best practices & max-age gotchas](https://jakearchibald.com/2016/caching-best-practices/) by [Jake Archibald](https://twitter.com/jaffathecake)`,
        `[My stupidest webapp](https://ada.is/starsword)`,
        `[The FT’s webapp](https://app.ft.com)`,
      ],
      tips: [
        `If you do 'network first' routes in the service worker, fallback set a timeout to wait for the response and if it fails respond with cached or fallback content. This keeps the app responsive when the device is "online" but no data is going anywhere this stops infinite loading spinners when connected to captive portals, or have low phone signal. I do 2-5s timeout usually.`,
      ],
      picks: [
        `[sw-toolbox](https://github.com/GoogleChrome/sw-toolbox)`,
        `[sw-precache](https://github.com/GoogleChrome/sw-precache)`,
        `[lighthouse](https://github.com/GoogleChrome/lighthouse)`,
      ],
    },
    {
      name: 'Nolan Lawson',
      twitter: 'nolanlawson',
      links: [
        `[Jake's article on appcache](http://alistapart.com/article/application-cache-is-a-douchebag)`,
        `[Infographic on service worker](https://github.com/delapuente/service-workers-101/)`,
        `[Paul Lewis on CORS](https://aerotwist.com/blog/cors-for-concern/)`,
        `[Ionic and PWAs](http://blog.ionic.io/what-is-a-progressive-web-app/)`,
        `[Differences between PWAs and AppCache apps](https://gist.github.com/nolanlawson/1326b4af986f5ac0ee9ae24630229fa8)`,
        `[On URLs in Progressive Web Apps](http://www.brucelawson.co.uk/2016/on-urls-in-progressive-web-apps/) by [Bruce Lawson](https://twitter.com/brucel)`,
        `[The importance of URLs](https://www.kryogenix.org/days/2016/05/24/the-importance-of-urls/) by [Stuart Langridge](https://twitter.com/sil)`,
        `[Regressive Web Apps](https://adactio.com/journal/10708) by [Jeremy Keith](https://twitter.com/adactio)`,
        `[Progressive Web Apps and the future of the Web (video)](https://www.youtube.com/watch?v=YxQUxCsNomM) by [Bruce Lawson](https://twitter.com/brucel)`,
      ],
      tips: [
        `Chrome Canary now has an “Application” tab showing PWA and storage information`,
        `Chrome Canary has a “clear all storage” button (so handy!)`,
        `[sw-precache](https://github.com/GoogleChrome/sw-precache) and [sw-toolbox](https://github.com/GoogleChrome/sw-toolbox) are awesome, see [web-starter-kit](https://github.com/google/web-starter-kit) for a full working app that uses them`,
      ],
      picks: [
        `[Hoop Dreams (1994 documentary)](http://www.imdb.com/title/tt0110057/)`,
      ],
    },
    {
      name: 'Ben Kelly',
      twitter: 'wanderview',
      links: [
        `[CORS for Concern](https://aerotwist.com/blog/cors-for-concern/) by [Paul Lewis](https://twitter.com/aerotwist)`,
        `[Infographic on Service Worker](https://github.com/delapuente/service-workers-101/)`,
      ],
      tips: [
        `Make sure you use waitUntil() for any async operations outside of respondWith(). Many examples will try to do things like cache resources after resolving the respondWith() promise without calling waitUntil(). The browser can kill the worker before these async operations complete. You may not see this in development, though, because the browser sometimes keeps the worker alive with devtools open.`,
      ],
      picks: [
        `[Sound Slice](https://www.soundslice.com/)`,
      ],
    },
  ],
  description: `
    A [Progressive Web App](https://developers.google.com/web/progressive-web-apps?hl=en) "uses modern web capabilities to deliver an app-like user experience. They evolve from pages in browser tabs to immersive, top-level apps, leveraging the web's low friction." The JavaScript Air website uses some of these techniques and technologies. Let's learn about this awesome stuff!
  `,
  hangoutId: 'cujm1df0s1715nfd2urvgkoacp8',
  youTubeId: 'JTVbjircIHA',
  podbeanId: 'd4tth-5f9f32',
  shortUrl: 'http://jsair.io/pwa',
  host: {
    links: [
      `[JavaScriptAir.com](https://javascriptair.com) is a progressive web app!`,
    ],
    tips: [
      `Avoid nesting your tests: [Nested Unit Tests: An Anti-Pattern](https://www.briefs.fm/3-minutes-with-kent/27)`,
    ],
    picks: [
      `[vaadin Progressive Web App Competition](https://vaadin.com/pwa-competition)`,
    ],
  },
  transcript: `
    KENT: And we're live at JavaScript Air! Hello, everyone. We are super excited to be talking about progressive web apps today, in this JavaScript broadcast podcast, JavaScript Air, that we love so much. 

    Before we get started, I'd like to give a shout out to our sponsors, that make this possible. We have Egghead.io, the show's premier sponsor. They have a huge library of bite-sized web development training videos. Check them out for content on JavaScript, Angular, React, Node, TypeScript, all kinds of awesome stuff. And upcoming really soon, a deep dive on Webpack that I'm working on right now. Really excited about it. And I'm using Webpack too, which is the bomb.

    Then, Frontend Masters is also sponsoring. It's a recorded, expert-led workshop with courses on advanced JavaScript, Asynchronous and Functional JS, as well as lots of other great courses on frontend topics. And incidentally, I'm also doing a workshop for Frontend Masters in August. And one of my workshops will be Webpack deep dive. So, if that's your jam, check that out.

    Then TrackJS reports bugs in your JavaScript before customers notice them, and with their telemetry timeline, you'll have the context to actually fix them. Check them out, and start tracking JavaScript errors today at trackjs.com.

    And SparkPost is email delivery built for developers. Build something awesome with their Node.js library, or SMTP Relay. Start sending 100,000 emails free with SparkPost at sparkpost.com/jsair.

    And finally, WebStorm. WebStorm is a powerful JavaScript IDE. It makes developers more productive with its super intelligent code assistants for JavaScript, Node, Angular, and React, and integration with lots of other different tools. Learn more at jetbrains.com/webstorm.

    Great, that's our sponsors. Let me just mention, again, that this is a live show, and so we have the benefit of interacting with you, the live viewers. So if you're interested in asking any questions of our guests about this topic, Progressive Web Apps, you can tweet the hashtag #jsAirQuestion, and ask your questions there. And they will be answered.

    And then next week, our show is actually sort of in flux right now, it was going to be Webpack. We pushed that back a week. And we're probably going to be doing something about beginning, the beginners in the JavaScript community. So, should be an awesome show. I think it's valuable for us to care about people who are new in the community, and in the industry. So check that out next week, it'll be the same time. And then follow us on Twitter, Facebook and Google+ to keep up with the latest.

    Let's get to know people who are on the show. So like I said, I'm Kent C. Dodds, your host, and then we have a couple subject matter experts in the area of progressive web apps. And so yeah, first, Henrik Joreteg.

    HENRIK: Hi.

    KENT: I'm pretty sure that I'm pronounce your last name wrong.

    HENRIK: No, you got it, it's good.

    KENT: (laughs) Okay, I didn't ask, I didn't practice the name. So hopefully, this works out. We also have Ada Rose Edwards.

    ADA: Hi.

    KENT: And Nolan Lawson.

    NOLAN: Hello.

    KENT: And Ben Kelly.

    BEN: Hello.

    KENT: Awesome, so, let's give each one of our guests an opportunity to introduce themselves before we get into our topic. So we'll start with Henrik.

    HENRIK: Hey, uh, yeah, so, I'm an independent JavaScript developer, right now doing some contract work for a Fortune 500, building some frontend stuff that might be related to the show. And yeah, I think the web needs to be doing what we're doing here with progressive web apps. And I'm really excited to see this, like, come to be. So, that's me. (chuckles)

    KENT: Awesome, Ada.

    ADA: Hi, I'm from the Financial Times, from FT Labs, their like research department. I'm a full stack JavaScript developer. And yeah, I've been talking about progressive web apps for a while now, and I've been working on web apps since I joined the Financial Times before service workers were a thing. So, a long time. So yeah, that's that.

    KENT: Awesome, I just wanna say thank you, Financial Times, for Polyfill.io, it's a fantastic service. And actually, it was picked on the show by Misko Hevery a couple episodes ago, so, yeah, Polyfill had been on the show before. It's super cool. All right, Nolan.

    NOLAN: Hi, I'm Nolan Lawson. I'm a freelance web and mobile developer. And I do a lot of stuff. I'm one of the maintainers of a JavaScript library called CouchDB, open source JavaScript database. You may know me from a silly PokÇmon app that I wrote, that is a progressive web app, so I guess that makes me an expert on the subject. And I'm happy to be here.

    KENT: And we're happy to have ya. Ben?

    BEN: Hi, my name's Ben Kelly, I work for Mozilla. I'm on the DOM team, mainly working on service workers for the last two years or so. Kind of have the, I don't know, misfortune of being a C++ developer, so, I find myself often having to take an opinion on web stuff, even though I don't, I'm not a practitioner day to day. So, fully aware that I have a lot to learn there, but, try to help where I can. So, hopefully I can offer something here. (laughs)

    KENT: Well, we appreciate your work on Service Worker and I think that will be a major topic in our show. And maybe a little bit controversial. (laughs) We'll find out. So, cool, yeah, I think, to just get started with our show, it's always good to get kind of a baseline for everybody's understanding, make sure we're all talking about the same thing. So, could I get somebody to give us a, like a one or two-minute definition of progressive web app? Anybody can take that.

    ADA: Sure, I will, if no one else will. A progressive web app is a website that's so good, you wanted to install it to your home screen. Usually has offline support.

    HENRIK: (laughs) That's awesome.

    ADA: It can do push notifications, it's got to be responsive. Yeah, you could add it to your home screen, which is, yeah, one of the main things always you get with an app. And, it's gonna be progressive, as in, so that, it'll still work in IE7, it's just a website, but if you're on... in a recent browser, you can also install it to your home screen. Does that kind of encompass most things?

    KENT: Yeah, I was actually, so, I might have a misconception here, but, is it possible... I thought that it was only possible to actually install, like, and have an actual icon on the home screen on Android devices with Chrome. Is that not true? You can do that with like Apple and Safari?

    ADA: Ah yes, you have to--

    HENRIK: Yeah, go ahead.

    ADA: I was gonna say, Apple's done it for years.

    HENRIK: Yeah, that's how they first started. (laughs)

    KENT: Yeah, obviously I'm not a subject matter expert on this. (laughs)

    NOLAN: Yeah, I think that's why Ada was very careful to not mention any particular technologies in her definition of a service work, or of a, (laughs) there it is right there.

    (laughter)

    KENT: Nice.

    NOLAN: ...progressive web app. Because it's true, there's lots of different ways that you can make one.

    KENT: Cool, actually Nolan, maybe this would be a good opportunity for you to talk about being duped a little bit by a certain progressive web app.

    NOLAN: Yeah, I guess I can tell that story now, I might as well. Yeah, so I was so excited, you know, I just got off the plane, I'm in New York, flying from Seattle. And I was so excited, 'cause I was excited to come on the show, and to talk about my recent experience with a lovely progressive web app that I had from Alaskan Airlines, which allowed me to look up my boarding pass, and it worked totally offline. I could save it to my home screen, it had a splash screen when it launched, it didn't have a URL bar. And I said to myself, "This is a beautiful progressive web app. A perfect, shining example of what a progressive web app, can be used for," right? Like a boarding pass, like, I don't have to take a screenshot of this thing, I don't have to worry that I'm gonna lose it when I'm standing in line fumbling for my phone, right? But it turns out that I opened it up in the Chrome Inspector, the dev tools, and actually, it was using Application Cache, or AppCache, and touch icons, and another special tag, mobile-web-app-capable, is that right? Which was a novelty, that was a new one for me. And those technologies have actually been around for several years, so, they predate the term "progressive web app," even.

    KENT: So I think, just like Ada, you know, carefully avoided any specific technologies in her definition, I think, you know, even though Alaska Airlines wasn't actually, you know, a "progressive web app" in the terms of modern technologies, it still, like, provided that kind of an experience. And I think that's kind of what we're talking about when we talk about progressive web apps. Even though their technologies are maybe a little bit nicer these days, or advanced in some ways, it doesn't have to use those technologies to be a progressive web app.

    NOLAN: Yeah, absolutely.

    ADA: I agree with that part.

    NOLAN: I agree, yeah, the whole progressive aspect is, as Ada said, that progressively... it progresses from site to app, basically.

    KENT: Cool, so, let's talk about some of the more, like, modern technologies that are used to accomplish this. So, what are, or maybe, let's... sorry, let's dive a little bit deeper into the definition of progressive web app. What are the minimal things that are required, I guess, for you to consider an application progressive?

    HENRIK: Well, I can give you kind of what the Google Chrome definition of that is, which is that you have an app manifest which is a JSON format for describing metadata about your application. You register a service worker, and your site runs on HTTPS. In addition, from what I understand, they're going to add additional kind of requirements, in that, it should serve something offline when you, so without network, it should still be rendering something. So that's kind of the modern, the definition in terms of that's what will make the add to home screen UI appear. That's part of the native browser UI for, you know, any browsers that fully support progressive web apps.

    ADA: I would say the minimum required functionality, again, I'm gonna avoid some tech, not, for something to be considered a web app, but this is below what is required to actually bring up a prompt. I'd say it needs to be responsibly designed, so it works well on mobile and desktop, otherwise we'll just have another generation of mdot sites. And it's got to, yeah, it's got to have some kind of content when you're offline, and it's got to work well across touch platforms and mouse or pointer environments. And that's kind of like my minimum, what I would expect.

    KENT: Go ahead, Nolan.

    NOLAN: Yes, I think that that's an interesting point you brought up. You just mentioned the prompt, and I think maybe the panelists here, we all know what the prompt is, but maybe we should explain it for the audience what she means by the prompt. Okay, so this is kind of, this goes back to the question of "what is the definition of a progressive web app?" And as it turns out, we don't have any representatives of Chrome here, but the Chrome team does have a very specific definition of what a progressive web app is in terms of whether or not they will show this magical prompt to you. And what this prompt is, is basically, it's like a little toast that shows up at the bottom of the screen, and when you go to a website, that qualifies as a progressive web app in their definition. And it says, "Do you want to add this site to your home screen?" Which, and actually, that's in Chrome right now, it's in Opera, both for Android, and then, Ben, correct me if I'm wrong, I believe that's in Fennec, it's in Firefox, rendering nightly now, right?

    BEN: Actually, I'm not sure, we're working on our manifest support. but it's not to my knowledge, shipping yet in any of our branches. The whole issue with the prompt, it's basically a browser-specific heuristic that has no standards around it. Like, there is no standard for progressive web app. It's like the underlying technologies are standardized, but this concept is not. And, so, should we standardize this heuristic or not, I guess is an open question, it kind of ties browsers' hands if we do that, but. Anyway, long answer to a short question, so.  (laughs)

    NOLAN: No, that's a good answer, yeah. Sorry, go ahead.

    ADA: I'll say something, so, some of the heuristics for it aren't, they aren't matched across browsers. They're down to what the browser thinks a progressive web app should be. And those views don't necessarily align. But I think that's actually kind of a good thing that progressive web apps themselves aren't a spec, they're just a way of building something.

    BEN: Well, so this might be, this kind of gets inta, sometimes I get confused by the term "progressive web app," 'cause in my mind, I hear "progressive" and I think, "This site works progressively, gets more features depending on what platform it's on. If it's on a site with Service Worker, maybe it works offline, if it's on browser, sorry, on a browser with Service Worker. If it's on a browser without Service Worker, maybe it doesn't work offline, but it sort of progressively enhances across feature sets." But, that's actually not the definition. I guess progressive web app is more, as you, over time, use it, it progressively gets more app like.

    And so, there are a number of progressive web apps that are sort of, "I only work on Chrome," you know. Even though, (laughs) mainly 'cause they haven't been, for various reasons, like, if you don't have the exact set of features that are in this definition for the heuristic. And internally, I'm like, "That doesn't feel progressive to me." But, I think that's the problem is, there's this one browser definition that's being sort of defined very firmly. They're the first ones with implementations that... I'm not complaining about that, but I think it'd be great if we could come to a cross-browser solution so things work progressively across the platforms as, instead of tying it to, you know, the new largest market share browser, sorry. Kind of rambling there.

    HENRIK: No, I think it's interesting. But I tend to think that we should be, actually, holding the bar pretty darn high for that prompt. Because I think the web has a reliability problem, in general. You know, Apple, you know, kind of originally said to everybody, "Hey developers, if you're gonna build for iOS, you should, you know, add this web app capable tag, and then we'll, you know, we'll make a way for you to add an icon." But the problem was, the web wasn't ready for that, in terms of capabilities. And so everyone knew that it was just a bookmark, right? No one thought that they were installing an app. But as a result, you know, you push that bookmark, and you don't know whether it's gonna open or not. And I think that's exactly the problem here, is we don't have a way to, like, have people fully depend on the experience of the web. And then when I add something to my home screen, like I want that thing to friggin' work, as if it's a native app, whether or not, you know... I explained this to somebody who wasn't, you know, overly technical, and then, the thought of adding something to their home screen was not appealing to them because they were like, "That's where I've got all my, like, pure native apps that I know are gonna work, like, why would I want to add a bookmark to that?"

    And I think, you know, it's just kind of, I think it's important that this is, for the first time, something that the web can do to actually be a fully, like, native feeling, you know, OS treats it as a first class citizen type thing. And I think, if we don't hold the bar to that, to the "add to home screen" thing, I think we lose a lot. Because we have no other mechanism of controlling, you know, kind of quality of these things, other than, you know, so what every app registers a service worker, and tries to get you to install it to the home screen, like what, that doesn't gain you anything, you know. I think it's really important that, in addition to having Service Worker and stuff, that it actually, you know, runs some tests to make sure that this thing will open when it's offline, et cetera. I feel like that's an important detail on all this, that we risk diluting the value of the whole thing by not holding that bar a little higher.

    ADA: So, you were just saying that the, that it's only recently we can now do fully offline apps, and...

    HENRIK: Unless I misspoke. (laughs)

    ADA: Yeah, I'd slightly disagree there.

    HENRIK: But please, please clarify. (laughter)

    ADA: Because the, again, I'm kind of shilling for my company here, but the Financial Times started, has been using a progressive web app as it's, like, main distribution of digital content on mobile via a progressive web app since 2012. And this was before service workers, and the AppCache manifest. But we weren't just shipping for iOS, we were also deploying this to Android via a wrapper, and Firefox OS, and RIP, and, Blackberry and Windows. So it's definitely something that's not, not a new thing to do. And I think... 'cause it does have some history behind it, I think it's a pretty safe technology to go into. And I'm worried, because only recently entered into the limelight, that a lot of companies are going to be concerned that it's new, that it's new, and untested, when it's actually a quite robust technology. Well, it's a robust delivery mechanism, even if the technology has changed over the past few years.

    HENRIK: So really, the fact that you can build reliable web apps is not new is what you're saying. I mean, which part of it is robust, is what I'm asking. That's what you're getting at, right?

    ADA: Yeah, like, it works. You can deliver content through it, it drives revenue, it's a good technology.

    HENRIK: Absolutely. What about the offline aspect of that? How important is that to all of it?

    ADA: For us, well, for us as a news delivery company, like we, I couldn't think of the correct term there, offline was pretty important for us. But so we used AppCache at the time to gain offline support. Unfortunately, AppCache does encourage some very bad habits with regards to mindling URLs, in order to maintain the single page web app, ex, like, kind of experience. Which has been resolved if you can use a service worker. And although a service worker will eject an AppCache, if you have both, you can't really, if you have AppCache, you have to contort yourself into this horrible way of developing, which you don't need to do with a service worker. So definitely, I would say if you're gonna build an app now, build a service worker app, don't use AppCache. But there are tools out there which will allow you to convert an AppCache based website into a service worker one... such as oh, I think it's like, sw-AppCache or something. From the service worker tools, which Google'd been putting out there. So I don't really know where that went, but yeah. There were some words.

    HENRIK: (laughs)

    NOLAN: Yeah, so to Ada's point, just to let the audience in on some of the details of this stuff. So App Cache has been around since, what, 2007-2009 in broad browser support, and basically allows you to define a declarative manifest of all the files that you wanna cache, and it just caches them. And it's very coarse, and it's very difficult to work with. And there's an A List article from Jake Archibald about this API that I cannot repeat on air, because I've seen it violates the code of conduct, just the title itself. But, we can provide a link afterwards. But it basically sums it up. It's really difficult to work with. I've struggled with AppCache many times. We used it for the CouchDB website, I remember. And we thought, "Okay, you know, we make an offline database for JavaScript, we know how stuff works. We can figure this out." But if you go back, we had like, I think there's like seven issues that we ended up opening on ourselves over the course of weeks and weeks as we realized that we had messed this up so badly. I mean, migrating from HTTP to HTTPS, we almost put it in a situation where the site was locked down forever and someone visited the site twice, they would never ever see new content again unless they like, blew away their browser history. So it can be, it's definitely full of foot guns, whereas Service Worker is a lot more flexible, and allows you to basically build your own AppCache, which is really nice.

    But on top of that, Ada's totally right. There's been ways to add things to the home screen since 2009-ish like touch icons. Yeah, touch icons are what'll allow you to add shortcuts to the home screen in both iOS and Android. I mean, we've had IndexedDB since 2009, WebSQL since 2007, local storage since about the same time. But I think, what's genuinely new with progressive web apps, and I think one of the core reasons that everyone is really excited about them now is this prompt, I mean that is the one thing that is really genuinely new, and genuinely very interesting. And especially, when you show it to your boss, it's a very good way to convince them that, "Hey, maybe a progressive web app is the kind of thing we should invest in because it's the browser promoting your app for you, on its behalf, which is kind of amazing."

    KENT: I just wanted to touch on that, and the foot gun, and stuff that you're talking about. I actually did put an app into a situation with AppCache, where nobody could ever get updates again. (laughs) Luckily, it was just like a little toy project, so, it wasn't that big of a deal, but I realized, "Oh, like you really got to be careful with this technology," 'cause you can, like, you know, you do something like that to the Financial Times, and you're in, like, you're in a big bad situation.

    ADA: We had hacks upon hacks upon hacks to minimize the amount of content that actually touches AppCache. But we had like a tiny bootstrap, which just get us going, and everything else is pulled out of IndexedDB and local storage. Just because, yeah, if you broke AppCache, we would break the FT on our biggest platform.

    HENRIK: I would also raise that you can, in fact, do the exact same thing with Service Worker. I have done this in development, (laughter) but fortunately not on anything of significance. But basically, if you push some bad JavaScript that breaks before you register the new service worker, you can put yourself in the exact same position, 'cause it will keep serving from the old service worker, and doesn't know that there's a new one. And since it's cache first, you're back in that spot. So it is worth at least kind of being aware that you can do this. (laughs)

    NOLAN: Hey, that can actually have benefits. I remember there was a talk from substack where he kind of evangelized these things. He called them "hyperboot apps."

    HENRIK: I saw that. (laughs)

    NOLAN: The idea of an app that can be forever locked down, and so it's like, 100% secure, because you know the person visits the site, that is exactly the same version of the site that it will be forever. (laughs) So, if that's what you want, you can do that.

    HENRIK: As long as you don't care about, you know, pushing updates, ever, I guess it's a good thing. (laughs)

    ADA: Well, the nice thing with the service worker, though, is that the browser will check for updates to your service worker JavaScript file, and if it detects a byte difference, it will pull down and update the new service worker.

    HENRIK: Yes.

    ADA: So if you wanted to-

    HENRIK: But if you didn't ever, one of my point is, if the JavaScript breaks before it even tries to register the new one, in my experience, that check doesn't happen.

    BEN: It should. That's a bug if it doesn't.

    HENRIK: Okay, all right. I will make sure that that's been fixed then. (laughs)

    BEN: There was a bug in Firefox until 46.01 that had that issue, but we pushed a hot, or a patch release to fix that.

    HENRIK: Okay. So I have, what's the heuristic then for determining what, I mean, should it check the service worker any time it's online, to try to see?

    BEN: It's whenever the browser attempts to fire an event at the service worker, it will... if it's a navigation, like you're navigating to the window and it's a navigation fetch event, it will try to go to the network and hit the service worker. It may hit your HTTP cache, but if it's been over 24 hours, it will bypass the HTTP cache and go out to your server.

    HENRIK: Maybe it's the 24 hour thing that got me. So it would a maybe resolved itself in 24 hours. Regardless, I wouldn't wanna break a site for 24 hours, if it has any amount of traffic. (laughs)

    BEN: I think a common tip is to always, is just in general put cache control headers on your service worker script, so that you can always update as soon as possible, even if--

    HENRIK: I'm gonna hafta look again to see what I was doing, 'cause something definitely went weird there, but.

    BEN: I opened a spec issue like, maybe we should just do this, if this is our recommendation, just always just bypass cache, but, that, currently it's not the spec. I'm sorry, Ada?

    ADA: So there is actually a very interesting post by Jake Archibald, about how, what you should do with your cache for, to make updating easy with service workers. I'll find it and drop a link, here, I can do that somewhere. Essentially, put the hash in the filename, and do unset some cache headers, which I'd forgotten. Yeah, it's very good, very useful, worth looking up. I'll go find it.

    KENT: Cool, thanks. So, I think, we're getting a lotta questions on Twitter, so we'll probably only chat for another 10 minutes. But if anybody watching live does have questions, keep asking questions on Twitter. I'll make sure to give us enough time to answer. So I wanted to actually ask, what does a progressive web app mean for the desktop? We talk a lot about mobile, and that cool toast that pops up, you know, saying, hey, or the prompt, "would you like to install this on your screen?" like, that's not really a thing for desktop, right? There's no, you know like, "Add this to your home screen," right, or is that coming?

    HENRIK: That is coming, at least at Chrome. There is a Add To Shelf, they call it, and you can turn that on as a flag right now.

    ADA: Ah yes, so it's actually on, yeah, it's on Linux, too. You can go Add to Home Screen. And I was gonna share my screen, but there is... a lot of people can actually see it. But you could go, all right, yeah.

    KENT: Well, you can show it, and if somebody wants to see it who's listening, they can check out. We're at around minute 30, so.

    ADA: Yeah, so, go More tools, Add to desktop. It's on Linux. And yeah, it appears in your, your bar, and you get a web app. It works quite nicely.

    KENT: Very cool. Thanks for the quick demo.

    BEN: I wish I could say whether or not Firefox was working on that, but I'm kind of disconnected from the product UX side. So I'm not familiar with our plans are. I think we had something like that in the past, but it was like a different mechanism, so I'm not sure where we stand, currently.

    ADA: I'm not actually sure what the status is in Chrome either, actually, because I've heard some stuff about it being removed. But, it's always been present. And this is a pretty recent version of Chrome in my browser, so, I'm hoping it's either coming back, or maybe it just hasn't been removed yet, but.

    NOLAN: Last I heard from the Chrome team, I'll maybe end up speaking, is that they're working on harmonizing their treatment of progressive web apps and Chrome apps, which I think is kind of the similar story with Firefox and Firefox OS. Like, Firefox OS apps are similar, but not exactly the same as progressive web apps. And so, they kind of need to be harmonized. But I actually tried, for what it's worth, I tried the Chrome thing behind, I think it's behind a flag, it was really nice. I could type into Spotlight on Mac, and actually get top suggestions for a progressive web app. It had its own icon and everything, was quite neat.

    HENRIK: Yeah, I think until this stuff, we didn't really have that much of a standard around how to go about any of this stuff, which is why we had Chrome apps, and why we had Firefox OS apps. And I think now, it just kind of makes sense to start unifying all these things under the same set of technologies, and then let the platform kind of pick exactly how to implement that for their users. But to me, like, now that this is, you know, getting some attention and becoming more and more standardized, I think it's inevitable that, you know, this is the way to do this kind of thing, and then hopefully, everything will support it eventually.

    KENT: So I take that you're suggesting we just use the platform, right? Just kidding, that was (laughs) we can talk about that later.

    (laughter)

    KENT: Well, that had to come in. So I do wanna get actually a little bit more technical before we go through our Twitter questions. Because we have Ben here, especially, I'd really like to talk about Service Worker, that technology. Maybe, Ben, you can give us an overview of how that technology works, and what role it plays in progressive web apps.

    BEN: Okay. I just, reminds me of the, there's an infographic, a tall infographic that was going around recently about this. Let me see if I can summarize this. Essentially, a service worker is like a web worker. In the past, web workers were associated with a window, a document to open them. A service worker's unique in that it can run without any window open. And this lets us, provide a way to run JavaScript for a variety of different use cases. The main one is when a network request happens. You get a fetch of it, and you can decide to create your own response, you can go to the network, you can go to a storage system like the Cache API, or IndexedDB, and get a result. And, it really lets you provide your, build your own AppCache functionality, or something completely different. Like on The Guardian, I believe, like they provide a crossword puzzle if you're offline, instead of going to the site that you were trying to see.

    However, it also lets us provide other, a place to fire other events, where you may not have a window. Like, a push event comes in but the window's not open. In the past, there was no way to run any JavaScript without the window open, as a security mechanism. So now we have a way to do that. And in the future, you know, background sync, I don't think there's anything spec'd yet, but you know, some sort of geo fencing, geolocation type API. Obviously, some security or privacy concerns around that. But that's sort of the goal, right, is provide a background process or a thread that can run JavaScript, and allow the site to build its own logic and functionality that used to be solely the domain of the browser, so that we can expose these primitives to sites.

    HENRIK: Yeah, right now it's limited to those two use cases, right? The push notification support, and the Chrome has implemented background sync, as well. Those are really the only two offline, or it's sort of, everything's closed events that are gonna occur for your service worker, right? Eventually, I would hope you would be able to do sensors and other things, you know, obviously with user permission, but, those are the only two I'm aware of right now.

    BEN: Right.

    ADA: Something which is quite fun for generating content is with the new Canvas API, you could dynamically generate the push notification icons, which I think is pretty neat.

    HENRIK: That's awesome.

    KENT: Wow, for those artists in the room, I am not one, but, you can use that Canvas API and make some pretty amazing things. (laughs) Cool. So I think that's all for, so Service Worker is one of the technologies that help us build PWAs, or Progressive Web Apps. Nolan, I know you wanted to talk about the web app manifest as well, that's another critical piece of this.

    NOLAN: Yeah sure, I'm happy to quickly go over that. So if you've built Firefox OS apps before, it's gonna look very, like, suspiciously familiar. Basically, it's a JSON file where you define a name for the application, you can define a short name as well, so that it has a different name when it's on the home screen versus when it's open. You can define icons in various sizes. You can define a theme color and a background color for when it shows a splash screen when it starts up, because maybe you want to, you know, kind of give the impression of loading a little bit quicker, so kind of psychologically, it's nice that you already have that, whatever background color your app is gonna start to show, kind of in that splash screen. And then it also lets you define whether you want to launch with or without the URL bar, so whether you kind of want the browser Chrome around it, or around the app, or if you want it to kind of launch in standalone mode.

    HENRIK: Orientation as well, right, portrait versus landscape?

    NOLAN: Yes, yes, that's true. And, oh wait, you can also define a custom start HTML page, which is really nice, because then you can say, like you can put like a query parameter in there, and that's how you know that it's starting from standalone mode, starting from the home screen, versus starting at, from the browser.

    KENT: Cool. So, I, we're really running down on our time, and we have lots of questions to ask. So I'm just gonna stop us on the web app manifest. It's cool, and it's really easy. So I wanted to get into a couple examples, and then I wanted to talk about some use cases that, like, that are really hard to accomplish with the technology we have. And maybe, you know, some things that are coming that will simplify those use cases a little bit. So first, some examples, I'll just give a quick example, javascriptair.com is a progressive web app. It actually, the service worker I think is broken right now. But you can go to javascriptair.com, turn your phone on airplane mode, and refresh, and you'll still get javascriptair.com. Everything looks great. But if you go to one of the episode pages, I think the CSS is broken or something like that. But, so if anybody here wants to help me fix that, that'd be great. It's open source, so. (laughs) But what are some other really cool examples like that you've seen of progressive web apps?

    HENRIK: Think Flipkart, Flipkart was one of the first ones to do a big one, I think, in terms of, like, a broad audience. They have quite a few customers, they're a very large retailer from India. So they have a very awesome example of a progressive web app.

    BEN: I feel compelled just to mention, I think what they built was great, and I'm glad to see them back on the web. Just going back to my previous statement, I don't think it's useful to have user agent checks, though, just because you don't have an exact set of features.

    HENRIK: I agree.

    BEN: So, I just, I wanna give 'em praise, but I don't want people to duplicate the user agent checking.

    HENRIK: They also, ah yeah, they're at least now doing iOS as well, which is good, which they weren't doing initially. But yeah, I was a little disappointed by that, too.

    KENT: Do you wanna talk about that a little bit? I think there's a little bit of background that we could use there.

    BEN: They, from what I understand, they used to have a website, then they went to pure native. And they came back to the web with this progressive web app. However, it was specifically targeted at a particular version of mobile Chrome. Like even if you opened Chrome on a tablet, it didn't show. You'd get shunted off to the Play Store, and that's just where I have some cognitive dissonance, hearing this is a great progressive web app, but if I open it in Firefox for Android, I get the Play Store without, you know, so. I know they're working on it, I know they have a business decision to make. I know that they're, I'm not their target customer. It's just, I would like to see the power of the web right, is reach, and so, allowing your site to work even if it's not 100% the ideal feature set you want across multiple browsers, I think is the best thing. But, I think there's studies that show, that gives you better conversion than a interstitial to the Play Store, or any store. And also, I think it's better for the web in general.

    NOLAN: Yeah, I wanna just really quickly echo Ben's concerns, 'cause I think I also saw Twitter's mobile site, which is a great mobile site, but I believe they kind of made the same choice, if I recall. I think they finally went back on, and you can actually access mobile.twitter.com from Firefox now. But for a time, they were doing user agent checking.

    BEN: That, yes, and there was like they had, they actually had a specific issue with their HTTP2 server... HTTP2 server stack, or sorry, client stack interacted poorly with their server. That was fixed, so it was a temporary situation. And it was more that, you know, it was completely broken for something that they were working to fix. I understand that sort of thing, but it's been. Flipkart, I think we, the CSS would work just fine in Firefox, you know, I think.

    HENRIK: Yeah. I think, you know, to some degree though, like, I'm fairly tolerant of that when they first launch. You know, I mean I understand they have, you know, as long as they iterate towards that, like, I feel like it's kind of okay. Because it was better than what they had, which was nothing, you know, like full on door slam. So I guess I can give them, I don't know, I give them a little bit of grace and leeway there in that I don't, you know, giving it a little bit of time, knowing what it's like to work in these large corporations, sometimes getting approval from various, you know, organizations and getting it through QA, or whatever might be challenging. They might have to make some, some cuts to kind of get it to go.

    NOLAN: Yeah, and I think in terms of health of the web, too, to add on to that, like, one of the progressive aspects of building progressive web apps, I think, like I hear a lot from people when I mention this. "Oh, but does it work in Edge? Oh, but does it work in iOS?" And that's kind of the point, is that it doesn't work in those things, because the idea is you build this app that gracefully falls back to just a normal website, perfectly fine website. And then you give those other browsers who have not implemented it yet, you give them incentive, right, to match that experience that people can get on other browsers. Like, if you just do a user agent check and you only give that experience to Chrome, then what motivation do the Edge team, or WebKit team have to actually work on it? Like, no, you're absolutely right. For the overall future health of the web, this is like one of those good web citizenship things we should be doing, I believe.

    HENRIK: Absolutely.

    KENT: I definitely agree, though, like, you should still give users an awesome experience. Like, you know, that I think that goes without saying. But I said it anyway. (laughs)

    HENRIK: Cool, so what are some of the use cases that are common for progressive web apps? Or, not, maybe not common because they're hard? So, what are some use cases that you can't really accomplish that you'd really think you'd want to with progressive web apps?

    BEN: So, one of the main ones that I'm aware of, actually, is podcast player, ironically, being on podcast, in that traditionally, podcast players, you know, the media tends to be on some CDN in order to reduce, you know, bandwidth costs. However, because it's been mainly native apps in the past, those are just served over HTTP without CORS, CORS headers. In order for Service Worker and websites to use it effectively, if you access these without CORS you get a, you know, a change in the UX that says this site's using mixed content. And that makes your site look dangerous. So there's this sort of industry, you know, chicken and the egg problem, where we need, we would like to get podcasts to serve CORS headers on all their media content, but they have no incentive to until there's web players. And so, it's like how do you bootstrap this problem without sacrificing the protection, the security that the web brings?

    ADA: So that the Fetch API, should I think will allow you to fetch with and be able to pull down a request without having the cross origin resource and stuff. So, if you, but you obviously can't do any, you can't mangle it with JavaScript or anything like that, but you can cache it. And I think that might work in a, inside an audio tag, 'cause I remember I've been doing 360 video viewing in a web app recently, and I was having some issues with the Range header, but like, it was working with CORS and stuff like that.

    BEN: Yeah, I think you can get, you get the media content out, but from what Paul, like Paul Lewis wrote a blog post about this, and what he, at least the experience on some browsers is you get a change in the user, like, there's like a lock icon that says "this is secure." You get something that says this is mixed content, you know, warning. And because you have a, when you're using a service worker, you're on a HTTPS site and you're going to a no CORS site, I think some browsers basically make a warning out of that.

    ADA: And because it's HTTP as well, that's--

    BEN: Yeah, that was the other thing.

    ADA: That was the issue, sorry, I was not, I was focusing on that.

    BEN: Yeah, I think I might been confused, but yeah, maybe it's more of an HTP versus HTPS issue there.

    NOLAN: Yeah, you can put it in an audio tag, that's fine, but you couldn't do something like, say, save it to IndexedDB, which is, unfortunate because that's kind of one of the, like, fundamental things you'd wanna do with a podcast app, is be able to download your podcasts and then play them offline. If you can't do that, it's kind of like, what's the point?

    ADA: You can put them in the Cache API.

    HENRIK: I've done that with images and stuff that are not HTTPS.

    BEN: You can put them in the Cache API, but because they're opaque responses, you have no idea if they're actually there or not. You could have just cached a 501. Which is suboptimal, I mean. (laughs) Site thinks it's there, but, try to listen to it and nothing happens.

    KENT: Yeah that, it seems like this is, like, there's opportunity for improvement on this particular use case of the podcasts. Which makes me sad, because I'd love to have my podcast just be like full on web app, but. You know, what do you do? Is there anything else that the current tools... oh sorry, Ada did you have something else?

    ADA: Yeah, I was gonna say there's one more use case which I have seen, or two more use cases which I've seen brought up for the speaking people at conference setup, why they're not building a progressive web app. One is payments. They won't do payments through native, but for various reasons. And I think hopefully that should be sorted soon with the web app payments API. And the other thing I've seen mentioned is not as granular control over the camera, for people wanting to do camera apps. So yeah, and that one, there is, the API's kind of flat yet, so yeah. Those were just a couple.

    KENT: Yeah, so the web has a little ways to go yet, I think, to like be able to compete fully with native experiences on many use cases. Somebody on Twitter just asked, maybe we should explain a little bit about the Cache API. Does anybody wanna talk about the Cache API? What like, what role that plays in progressive web apps?

    NOLAN: I'm happy to take that up, as kind of one of the browser storage people. So, the web has many, many ways of storing data. We had cookies, and then we had local storage, and then we had Web SQL, and then we had IndexedDB. Now, for better or for worse, it's service workers and associated specs, we are blessed with the new one, which is the Cache API, which is actually available, it's actually available both in the main thread and in Service Worker. You can find it as window.caches, I believe, on the (mumbles). But basically, it's... no, I joke, but it's actually really nice, because it's optimized for caching requests. So it integrates really nicely with the Fetch API, like it's kind of part of that whole like family of standards that Ben can talk about. But basically, what it allows you to do is it allows you to just cache HTTP requests and cache exactly what the headers were, what the response was. Yeah, it's a fundamental part of doing Service Worker stuff. If you're not using cache within the service worker, you're probably not using Service Worker to its fullest potential.

    HENRIK: The other thing of interest, potentially, is you can very easily write a little wrapper around it, to just use it like a local storage, like promise based alternative. (laughs) Which I may or may not have done.

    (laughter)

    KENT: Let's get a link to that.

    HENRIK: I don't have a GitHub project on that yet, 'cause I'm not sure it's a good idea, so. (laughs)

    ADA: I actually saw something really interesting with that, for using, using, I feel this is using Fetch rather than the Cache API, but you could, if you have that stored in the cache, you can access it as local storage of work as well, in asynchronously decoding JSON. So although it's like a little bit slower from making the decode try to get a result, like it doesn't block the main thread, which is fantastic if you're decoding 50 megabytes of JSON or something. Not that you should ever be decoding 50 megabytes of JSON.

    KENT: (laughs)

    BEN: I remember reading about that blog post, and that might be something you'd wanna test in different browsers, because, it does have an async step to it. However, once it's all loaded into memory, it really does need the JavaScript global that's on the main thread. So, it probably is still a fairly large blocking step with that, unfortunately. But, that's one of those, it's hard to perform that off the main thread, because you need to create JavaScript objects. But yes, web workers, yeah, we'll see. It's complicated though, it's one of those things where the API makes you think it's doing something more magical than it might be.

    HENRIK: There's an awful lot of complicated things we can do these days with web workers and service workers combined. It's kind of interesting to cache your web worker code with Service Worker. It's just one of these moments when you're like, "okay, this is getting' pretty deep." (laughs) But, it totally works and you can build amazing apps. So you should definitely read Nolan's kind of breakdown of what he did for Pokedex. I'd added that as one of my links, 'cause he didn't, so I figured I'd kind of toot his horn for him, 'cause I think it's awesome. I also gave a talk similar in content at dotJS in Paris. That's online too, if you wanna find that.

    KENT: Very cool, yeah, let's add that one to the links too. Cool, yeah, we should probably jump into our questions on Twitter, (laughs) 'cause we've got plenty of 'em. So, unless there was anything else that anyone desperately wanted to make sure we bring up? (silence) Okay, cool. So, our first question is from just, actually, the very first question is from my good friend Mike Hardington, and he asks, "When do you think we'll be able to just say "web apps" instead of "progressive web apps?" When will be able to just call them web apps?"

    HENRIK: I hope this happens sooner than later. Dion Almaer said something about this. I tweeted something similar the other day, and he said, "you know, we used to call it color TV to delineate what a color TV is versus a regular TV. These days, obviously, it's just a TV, right?" And I think until now, we've lacked enough definition I think, around this, to really be able to make that delineation. I realize this is like a very, I don't know, complicated topic, a lot of people have strong opinions on this, but I feel like what we should work towards is the user's perception of what an app is, which is, can they install it, I can run it in my home screen. And I think that make sense to, like, have that be a web app, and have everything else be a website. But that's just me.

    KENT: Cool, all right so Jeff Whelpley asks, "Do you think that PWAs will reach a point where some big consumer-based companies won't need native apps?"

    ADA: (agrees)

    HENRIK: Yes. (laughs)

    KENT: (laughs) Easy question to answer, yes, one day we will reach that point. Cool, Jeff Whelpley also asks, here comes the use the platform reference, so, "What was the big deal with the post-Google I/O discussion about Use the Platform?" Anybody wants to take that? (silence) Nobody wants to take that. (laughs) Yeah, I think the platform is really awesome. Abstractions are important, okay. Yuri is asking, when PWA, or so, we have progressive web apps, and we also have hybrid, we have native. Where is the clear line between all of these?

    ADA: I've seen some companies start to move in a progressive, this is from speaking to people rather than actually seeing it myself, and they say they're moving in a progressive web app direction, by first turning all of their wrapped content and improving it so that it's a decent app when wrapped. And then, they're slowly planning to basically remove the wrapper, and make it available to get straight via the web. Wanna say, I've no longer any native components.

    KENT: So it sounds like it's a progression, like you can start, if you have a native app, you can like slowly move to a hybrid, and then progressive?

    NOLAN: Yeah, I'm, when Mike Hartington was just on, he does Ionic, right? Ionic recently added progressive web apps as a build target. So for them, it's just another build target, right? You can build your app in HTML, CSS and JavaScript, and then you can build for iOS, build for Android, in a wrapper, each one, or build for the web, as a progressive web app. I don't know if that's actually shipped yet, but they did declare that they were gonna support that at some point.

    KENT: Cool. So Juan is asking, I lost it, "What do you think is holding people back from writing PWAs most? Lack of education, resilience on frameworks... or a reliance on frameworks?" What's holding PWAs back? Or, people writing them?

    HENRIK: The lack of a bunch of big shift examples.

    ADA: Like, I've been asking around here, and so for some people, it is features such as web payments not being widely supported. Some people, it's... they want to get the offline support on iOS without relying on AppCache. And for some people, it's just momentum, and others, they're like, "Yeah, we're doing it," but it's gonna take time. But there definitely does seem to be a movement in that direction, 'cause it definitely gives you significant benefits with regards to click through rate, and actually getting people, like, "installing" your app.

    HENRIK: Of potential interest too, there is a Phone gap/Cordova plugin for basically implementing Service Worker, so, if you could potentially write your progressive web app, ship it like that for platforms that support it, and then on iOS, take the exact app and just wrap it with that, very minimal wrapper in that case to get the missing features. I don't know how good it is, I haven't used it myself, but it does exist.

    KENT: Yeah, that's actually really interesting. Let's get that in the links. We've got a lotta links today. (laughs) This is really great. Okay great, so next question, from Larry King, "My experience, users resist mobile browsers. They just think apps. We need more than performance to win them over. Thoughts?" And then Yuri jumps on top of that, and also adds another point, "What I often hear is on searchability, like, we want people to be able to find the app in the App Store." So what are your thoughts on those things, like users' resistance to use, like, mobile browsers, and they just kind of wanna use apps, and then the searchability aspect, as well?

    ADA: So if you're not in the top 0.1% of apps in the App Store, you're not getting visibility via the App Store. Users are going to be coming to you via the web, either via social media, or via just looking for your website, and you expose it via your website. And it's gonna, yeah, it's definitely worth it to, via the App Store isn't, unless you're Angry Birds, you're not getting anything from the App Store.

    HENRIK: I definitely wanna agree with that. In addition, I think, right now, I think we have a little bit of an issue with users in that, I think Add to Home Screen just isn't strong enough. I've heard people react to that saying, "Why would I wanna do that?" As I mentioned before, we need the verbiage to change to "Install This App," because that's how users perceive these things. I understand there's political challenges with that, with platforms that may not want that language, but I'm of the opinion until we get that point, we're not gonna get quite the traction that we want outta this, because it's just too weak.

    BEN: I'd love to see, like, web search engines, though, maybe add a flag or something that says this conform, this site happens to have a manifest. You know, like something that says, this is an appy link, and if you click here, it's something that you can install. And, maybe allow people to search for those. On the other hand, I hear a lot of people saying that they want a curated list, however, we have URLs, anyone can make a curated list. I think that's sort of the power of the web is now that they're addressable through a URL, we don't have to necessarily have a store as the gatekeeper.

    ADA: I remember there was a couple of 'em who was but someone mentioned it earlier, that perhaps the browser's heuristics should determine whether, to determine whether the app actually gives you content whilst it is offline. And I think rather than actually relying on the browser to do that, perhaps that's the kind of thing which big search engines, beginning with G, could use as part of their SEO heuristics. I know that usually gets stuff going quite well.

    HENRIK: I did. I may or may not have tweeted at Matt Cutts about that at one point. I definitely think they should do it.

    KENT: And they've got a lot of power, and I think they need to be really responsible, and considerate about that power. But yeah, very interesting stuff. Cool. So that is our questions from Twitter. I think we should rush into our tips and picks. And due to limited time, I'm just, we'll quickly go through these and then we can wrap up the show, so. I'll go ahead and go first, and then we'll go through our guests.

    So my tip of the week is, avoid nesting your tests. So if you use something like Mocha or Jasmine, you have these describe blocks, so you can nest those describe blocks. I say, have a single describe block. Don't nest those, and avoid beforeEach. I have a little podcast, like a three minute podcast that I recorded this morning about it, and you can see that in the links.

    For my pick, I was asked to pick this, and it looks really interesting, vaadin. I'm not sure if that's how you pronounce it, but vaadin progressive web app competition. Looks really interesting, you build a progressive web app, and you win stuff, and it's fun, so check that out. Nolan Lawson, why don't you go next?

    NOLAN: Okay, so for my tips, I basically got two tips from What's New in Chrome. So Chrome Canary how has an application tab if you build a progressive web app, which breaks down everything you'd wanna know. So you can debug, know what the icons are, how it launches, and then it also contains storage. And then my favorite feature is absolutely gonna revolutionize my own personal workflow, is that there's now a single button where you can just blow away all of the offline data for a website, which is amazing, I've been using browser extensions for that, it's been awful. Now there's actually something built in. Just blow it all away, and start fresh.

    KENT: Sweet, did you wanna mention your pick?

    NOLAN: Oh yeah, that's right, yeah. So I have one pick, a non-programming thing which is this documentary I saw recently. It's really, really good. It's a famous one, I guess maybe I was the last person on the planet not to see it. It's called Hoop Dreams. It's a 1994 documentary about inner city kids in Chicago who, it's kind of, it's kind of heartbreaking, but also really inspiring, 'cause basically, they're really passionate about basketball, and they sort of see basketball as being like their ticket out of poverty. But it's really, really worth watching. Very good documentary.

    KENT: Cool. Thanks for sharing. Henrik, let's hear your tips and picks.

    HENRIK: Let's see, yeah, a few different things here. I just randomly, I really, really like GraphQL. I think that we're gonna see some really interesting things happening with GraphQL over the next few years, just because it's a nice clean spec. A really amazing way to query for application data, which we're all doing now. And REST doesn't quite fit that pattern anymore.

    Also, a random other thing, I'm a huge fan of this library called reselect that I've been using a lot recently for Redux applications, for just kind of grabbing, basically being able to ask intelligent questions of your application state. Three other things in there. Specifically, so one link I'll point out is just the service, the sw-toolbox is a great set of tools that the Chrome team has released. That is a script that you can kind of import into your service worker that gives you, like, nice higher level abstractions for some of these things. 'Cause, writing raw service workers can be a bit intimidating at first. So, that's a good place to start if you're a little bit gun shy.

    KENT: I know that my service worker for javascriptair.com is copy paste. (laughs)

    HENRIK: But that said, I think it is worth learning, and to kind of battling through it. But, there's a lot of power in that toolbox.

    KENT: Very cool, yeah, I should probably give a shout out to you, Jake Archibald. I copied his example, so. And it works, most of the time. (laughs)

    NOLAN: I did it too. (laughs)

    KENT: (laughs) nice. Cool yeah, I think abstractions are valuable. And it'd be really nice to get a good one for, like, common use cases for service workers.

    HENRIK: Related to Webpack, also a real quick method that's out there. Using build tools like Webpack that are aware of all your assets are really useful for generating service workers.

    KENT: Sweet, yeah, and actually, just random other thing that has the word "worker" in it, Webpack actually can, I think they have a, a deploy or a packager for web worker. So you like, your target can be Web Worker, which is kind of like, what? So okay, cool. Yeah, Ben, we'll have you go next.

    BEN: Sure, I think the main tip I would, I had is that, I'd really, when you're writing your service worker, I'd really focus on if you're doing any asynchronous work outside of like your respondWith, and make sure it's in a waitUntil. I see lots of code examples on the web in guides and articles, and in people's applications where they are not doing a waitUntil. And the browser can just kill your worker while you're doing that. In testing, you often won't see that happen, because for example on Chrome, when you have the dev tools open, it will not kill your worker. It keeps it open so it can debug it. So this is a thing where like it can work perfectly in your development, and then die in the world, in like a heisenbug sort of situation, so. I would, like if you're, I would double check your service workers about that.

    And then I was thinking about, I'm not very good at picking things, but, I was thinking about this. I do think there's a really cool progressive web app called Sound Slice. I really think it's a great site that uses like Web Audio, Canvas. I think the music notation is Canvas, but it'll show you the web note, like the music notation and play it for you live. And it, I believe it works offline, they have a service worker.

    HENRIK: It does. It's made by Adrian Holovaty, the Django guy. Fantastic.

    BEN: It's really impressive. And as someone who's tried to learn how to play guitar before, I was like, this, this is awesome. And yeah, check it out. I'll put the link in. Oh, it's already there.

    KENT: I added it, actually, that's been picked before. I think Igor Minar picked it a couple weeks ago. So yeah, very cool. Ada?

    ADA: Cool. So I'd like to put in another, like, reference to sw-toolbox, 'cause now, like after writing a service worker myself a few times, just, there are a lot of edge cases and stuff you don't expect. So sw-toolbox took out a lot of the stress on that. And there's sw-precache. Again, this is in the Google Chrome GitHub repo, for generating pre-caches for your static websites. And finally, lighthouse, again, come out of the Google Chrome team. Very cool tool, it's not on the... it's a Chrome extension, which is still very early on. So is a little like, it's, you have to build it yourself and add it to your browser by the Add Extension, but it will look at your web app manifest and your app, and will determine whether it's, will give you a list of stuff to check off for being a good progressive web app. It's very, very good. So that's my three things.

    KENT: Cool. Thank you thank you. So, I'll just wrap things up for the show. So thanks all of you for coming on the show. This has been really interesting. Lots and lots of resources. I recommend you check out the links after the show. So yeah, let me just wrap up with a couple closing announcements. So Trading Technologies is our silver sponsor. They are hiring, check them out. Suggest.javascriptair.com is a place you can go that will take you to a form, where you can suggest shows for us. So, yeah, we've done several shows that were suggestions from people, and just like you, and so we appreciate those suggestions. We have a long backlog, though, so just be aware of that. But yeah, you can suggest guests or topics, or both. And then feedback.javascriptair.com is a place you can go where you can submit feedback about this show, or the show in general, or a previous episode. We really value your feedback. And then jsair.io/email will take you to our newsletter, where you can see previous weekly newsletters, as well as sign up for the newsletter to get an email in your inbox the day after the show every week, that gives highlights from the show, and the links, and tips and picks, and stuff.

    Yeah, and that's pretty much it. Next week, we're going to be talking about like, beginners in the JavaScript community, and so stay tuned for that. I, unfortunately, will not be hosting that show, but I believe Getify will lead us on that, and it'll be awesome. I will be out of town. So yeah, check us out next week, and as always, follow us on Twitter, Facebook and Google+ to keep up with the latest. And that's our show! So thanks again everyone for showing up, and we'll see you all next week. Bye.
  `,
}
