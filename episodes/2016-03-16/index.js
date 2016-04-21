export default {
  title: `End to End Testing`,
  guests: [
    {
      name: 'Julie Ralph',
      twitter: 'somejulie',
      links: [
      ],
      tips: [
        `[Protractor Styleguide](https://github.com/CarmenPopoviciu/protractor-styleguide)`,
      ],
      picks: [
        `GitHub is on a roll with new features - [emoji support](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments), [better reviews](https://github.com/blog/2123-more-code-review-tools)`,
      ],
    },
  ],
  description: `
    End-to-End testing is among the various forms of testing that is critical for the development and quality assurance of your applications. Join us with a subject matter expert to chat about this important part of application development
  `,
  hangoutId: 'c7h4gafbmpo00gc5llo6v737g3o',
  youTubeId: 'yoPIsrhaNGU',
  podbeanId: '67rvv-5d98e5',
  shortUrl: 'http://jsair.io/e2e',
  host: {
    links: [
      `[aXeCore](https://github.com/dequelabs/axe-core) - [Marcy Sutton](https://twitter.com/marcysutton) [tweeted](https://twitter.com/marcysutton/status/710153834874544128) this during the show.`,
    ],
    tips: [
      `Use all forms of testing`,
    ],
    picks: [
      `[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)`,
      `[Ghost Inspector](https://ghostinspector.com/)`,
    ],
  },
  panelists: [
    {
      twitter: 'drboolean',
      tips: [
        `If you use karma + mocha. Set the mocha timeout to 20+ seconds, wrap your assertion in a setTimeout and you’ll have time to inspect the screen and click around (if you’re not using a headless browser)`,
      ],
      picks: [
        `[Amazing Scope tool from Shape Security](http://shift-ast.org/scope.html)`,
        `[Parser Combinator library from Bodil Stokke](https://github.com/bodil/eulalie)`,
      ],
    },
    {
      twitter: 'getify',
      tips: [
        `Use [TrueCaller app](http://truecaller.com) for your phone to cut down on spam calls`,
        `Reserve your npm username as a package name -- they are separate!`,
      ],
      picks: [
        `[kentcdodds npm package](https://www.npmjs.com/package/kentcdodds)`,
        `[getify npm package](https://www.npmjs.com/package/getify): hint this is NOT mine :*(`,
        `[Hactar](https://github.com/Hactar-js/hactar) the tool that builds every other tool for you.`,
      ],
    },
    {
      twitter: 'pamasaur',
      picks: [
        `[peach-register](https://www.npmjs.com/package/peach-register) to register your name on Peach without downloading the app`,
        `Reading in general, but in particular: [All the Light We Cannot See](http://smile.amazon.com/gp/product/B00DPM7TIG/)`,
      ],
    },
  ],
  transcript: `
    KENT: Hello, world! We're live with JavaScript Air. Hello. So today we're gonna be talking about end to end testing, really looking forward to that. We have Julie Ralph on to chat about that.

    But before we get into introductions and everything, I just want to give a shout out to our amazing sponsors. First our premier sponsor is Egghead.io. They're just super-duper awesome. And they have a huge library of bite sized videos all about web development and so check them out for content on JavaScript, Angular, React, Node, and they've got Elm and CSS and a bunch of really cool stuff. So check them out.

    Front End Masters is a recorded expert-lead workshop with courses on advanced JavaScript, asynchronous and functional JavaScript, as well as lots of other great courses on front end topics. So check them out. And then TrackJS reports bugs in your JavaScript before customers notice them. And with their telemetry timeline, you'll have the context to actually fix them. Check them out and start tracking JavaScript errors today at TrackJS.com.

    And then Wallaby JS is an intelligent and super-fast test runner for JavaScript that continuously runs your test. It reports code coverage and other results directly in your code editor, immediately, as you change your code. Check them out at Wallabyjs.com

    And Codecov, is code coverage done right. Reduce depth by visualizing test performance and faster code review. Codecov is highly integrated with GitHub and provides browser extensions. Check them out at codecov.io. And actually, just set up a new project, an open source project this morning and used Codecov and it was totally seamless. They integrate really well with Travis CI. So, yeah totally love them.

    And one other thing about the sponsors is if you go to jsair.io/the sponsor name like Egghead.io and Front End Masters whatever, then that will take you to them. So if you're looking for a quick way to get to these people. That's a good way to do it.

    So another thing, this is a live show and so we're happy to accept your questions on Twitter. So yeah feel free to ask your questions with the Twitter #JsAirQuestion. And then next week, we have a show, this is a weekly show after all and the show is AVA Futuristic Test Runner. And AVA is a new-ish testing framework that I'm actually totally falling in love with every day for its minimalism. But it's like amazing power and super-fast performance. So we'll be joined next week on the 23rd with the AVA team. So we've kind of got a testing theme going on right now, that I think is really awesome. So then finally, as always, follow us on Twitter and Google+ and Facebook to keep up with the latest.

    So, great with that, that's three minutes. This is starting to get a little bit long. Let me know if that's getting to long I'll figure out if I can do something about that. (laughs) Cool so let's go ahead and introduce everybody that we have on the show. So first for our panelists, we have Brian Lonsdorf.

    BRIAN: Hello.

    KENT: And Getify.

    KYLE: Hi, everyone!

    KENT: With his brand new microphone. And Pam Selle.

    PAM: Hello.

    KENT: Awesome. And I'm your host, Kent C. Dodds and for our guest, we have Julie Ralph. Hello, Julie.

    JULIE: Hi everybody.

    KENT: Would you like to give us a quick introduction to yourself, Julie?

    JULIE: Sure, so I'm a software engineer at Google. I work in the Seattle office. And for the past few years, I've been working with the Angular team on testing frameworks for Angular. Originally focusing on end-to-end testing. I'm the primary author of Protractor. If you use that which is an end-to-end testing tool, it's created specifically for Angular applications.

    KENT: Sweet. Thank you for your work! I've used Protractor myself and it's really, really great. So I think we definitely wanna talk about Protractor because it's an amazing tool. But let's talk a little bit about end to end testing before we get too far into that. So what is end to end testing?

    JULIE: Sure so I think that there's a little bit of confusion around what how we name different types of tests and everybody does it a little bit differently. So I think everyone's pretty clear on unit tests being a sort of one test per file, really low-level test per piece of code. And then above that, there's a whole bunch of different names that you could call "tests." (laughs) So I think of end to end testing as a test for an entire system or application that you have set up.

    And in the context of front end, which is what we're usually talking about, 'cause we're here on JavaScript Air, that usually means testing an entire website and kind of trying to do it as a user would. So I think of it as a replacement for having someone going though and clicking through your site. Running a manual test script for example. Sometimes this is also called functional testing or kind of related to user acceptance testing. And I think those all kind of mean similar things. Integration testing is also used.

    KENT: Cool. I think that actually having all these different names for these different types of testing can get rather confusing. I just gave a talk at Ignite Fluent about all the different types of testing and obviously, not all of them 'cause there are millions of them but, it can get super overwhelming. And so, maybe you could talk about, what's the value of... maybe answer the question, "Could I just get away with only doing end to end testing? Or is it valuable to do a mix of the different forms of testing?"

    JULIE: Yeah, sure. So I think there's tradeoffs and it's gonna depend on exactly what your product needs. But the general advice is, you should have more unit tests than end to end tests. The bulk of your testing for the logic of your code should happen in unit tests and so that's because unit tests run a lot faster in general. They're smaller. We have a lot of good frameworks that will run unit tests. For example, things like Karma that'll run tests on save, they're usually well-integrated with CI environments so you can have those run very easily. And it's easier to debug a unit test; it's easier to run one in isolation. So bulk of logic should generally be tested with unit tests.

    The reason that you need tests larger than unit tests, in any form, is because we're really bad at understanding software and how it works together, right? So if you have a whole bunch of different components that all have really good unit tests and you throw them together, that doesn't necessarily mean that your entire application is gonna work at all. I'm sure everyone who's developed for any amount of time has had a lot of trouble integrating different pieces and making sure that they work together. And you'll have a site that breaks because of some authentication issue that doesn't work 'cause every piece is working together. So the value for end to end test that I see is making sure that the major work flows, work with everything together. So unit tests whenever possible, end to end tests for making sure that everything does stick together.

    And then you can have lots of different sizes of tests beyond just unit and the whole thing. And these are sort of various integration test levels. So for example, if you have a web server and your front end and a couple of different back ends, you could test with a mock web server in just a front end, and whether that makes sense or not really depends on your project and what you're worried about and what you're trying to guard against when you're doing tests. Every additional layer of testing that you introduce introduces complexity into your project. It's something that your developers have to understand how to run, have to understand how to debug; you have to get useful information out of it into your continuous integration probably in some way. So there's definitely a tradeoff whenever you add a new type of test. And whenever you add new tests there's a trade off at that end time. So depends on the project.

    KYLE: How do you define what a "unit" is?

    JULIE: I think a good heuristic is a file (laughs) which is a little bit big but also you know if your files too big, then you should probably be splitting up your file or your unit's too big. I think a simple way of looking at things can be a unit is a function and you should have kind of one test per function. But I think that's a little bit of a dangerous way of putting things 'cause then you get developers thinking, "Oh, I've written my one test for my function we're done." When what you really wanna test is every behavior that your class has. So I think of a unit as a file, a class kind of.

    KYLE: Well, yeah. I think all the things you said about the value of unit testing and these different levels of testing is really valuable. I think it's really important for people to understand what the different forms of testing... what tradeoffs you're making by doing different forms of testing and then account for those tradeoffs with other forms of testing. And I think that end to end testing is kind of like... it covers all the... like, ultimately everything that you really need to make sure that is working and integrating really well together. But that comes with a huge amount of tradeoffs, you know they're fragile, they take a long time to run and these different things. So just appreciate your comments on that.

    PAM: Yeah. I think it's one thing about end to end testing or integration tests or what we choose to call them for now, especially if you're touching other services, they do seem to get really brittle. So what do you think that, like what are some of the things people can do to guard against that?

    JULIE: Yeah, I think brittle tests and flaky tests are a huge problem with end to end. So you mentioned external services, we try to never have tests touch external services. So if we have to use an external service for some reason, we will mock that out in all levels of tests, basically. Because it's just too much of a chance that something's gonna fall over and you'll never be able to trust your tests. For a lot of projects, I think it makes sense to have a test suite that only tests only tests your front end against a mocked out database or some sort of level of, "I'm just testing my front end and at some simple back end code that I don't think is gonna fall over." There's various frameworks for this that try to do things like recording RPC calls and replaying them so your only back end is just a really simple server that's replaying that it's seen before.

    PAM: Can you remind me what you mean by RPC call?

    JULIE: So it would listen to HTTP traffic, for example.

    PAM: Okay. And what does RPC stand for?

    JULIE: What does RPC stand for? Uhh...

    PAM: Oh, I didn't mean to quiz you.

    (cross talk)

    KYLE: "Remote Procedure Call."

    PAM: It is Remote Procedure Call, okay.

    JULIE: Thank you. (laughs)

    PAM: Okay, just checking. (mumbles) we throw acronyms, I like to get them defined.

    JULIE: That's great, that's one of those ones that I just like, the acronym means something in my brain, not actually words.

    PAM: Okay, so you were saying. (laughs)

    JULIE: So there's basically lots of way of reducing the parts that could fall over because you're testing smaller things. I think another things is, if your tests are flaky, maybe your app has some flakiness, right? There is some level of bad end to end test help, can be a signal that maybe your test has some or that your code in general has some flakiness or too many dependencies or too many moving parts. And we frequently see things like if a team is having a lot of trouble writing end to end tests, they have a lot of trouble setting up a developer environment for their application. So, some of this you can't fix at the test level, you have to go in and look at your app and say, "Does it need to depend on this? Is it a problem that all of our developers are pointing to the same one test database and putting their junk in there and we're getting race conditions 'cause we're running tests all against the same database?" So larger projects (mumbles) can have a big impact.

    KYLE: So an inverse of the question that I asked earlier: how do you define an "end"? And I don't mean that to be as facetious as it may sound. I'm actually curious about where we draw these lines because what you were just saying was you know, while we take these "external things" for some definition of external, stuff that's not ours and we draw a line there and say we're not actually testing that stuff, but then the obvious question becomes, "Well, how do you test the fact that that might fall over?" So you probably do want some tests where that thing intentionally fails or is unavailable in some way.

    So where exactly do we draw the lines? Do you hint, is it just you know what most people probably conceive like it's just Selenium or one of those test runners? Or is it for example, something that's been on my mind a lot lately is the attention that doesn't seem to be given enough to notions of accessibility more than just things like, "Can I use a screen reader?" But like, are you actually saying that we wouldn't... where would we draw the line with respect to how the entire user is experiencing it? And then we bring it multiple devices into the question, so now I'm experiencing it very differently on a phone than on a computer. So where do we draw those lines and what are your suggestions?

    JULIE: Absolutely. So here's a couple questions in there (laughs), so one was sort of, what do you do when you do have external services? So let's say, I connect to the Twitter API and I don't know if Twitter API goes down a lot, but let's assume that sometimes it does or something. So in my ideal world, everyone who exported some sort of service like that, would also have a little reliable mock version that you could run locally that they would maintain and that you could test your API against. I know that's not gonna happen (laughs) obviously in every case in the real world.

    PAM: Have you seen anyone with examples of that? 'Cause that does seem like an interesting thing for people who provide third party API's to provide a... well, provide a third party API, I guess you would call it a third party mock.

    JULIE: Yeah you know it's something that we try to do internally at Google. I don't know of any good open source examples, but maybe someone could chime in if they do know about that and I'll so some searching afterwards to see. Because that would be great to have examples of that.

    PAM: Yeah, I think it's a really neat idea.

    JULIE: And so I think teams often end up writing their own for that, right? If you have a service that's really important to your project, you would write some sort of mock that has the same API but is very reliable and you would run your tests against them. You also asked about this sort of, the accessibility and what the user end looks like. So again, I think we're mostly talking about front ends here, we're mostly talking about web development. So the obvious and for us, is what a user actually sees on their device.

    And you mentioned Selenium, and I think we should probably give a quick definition of what that is for everybody. So there's a project called Selenium, also called WebDriver. Historically, they were two different projects and they've now merged... in my mind they mean the same thing now. So Selenium, WebDriver same terminology. And the goal of Selenium is to give a way for you to write tests that interact with the browser as a user would. So Selenium defines an API where you can click on an element, get the text of an element, navigate around different webpages, things that a user would do in a browser. And there are implementations of this for various browsers; so there's an implementation for Chrome, that's called the Chrome driver, implementation for Firefox which is the Firefox driver, etcetera. And the implementations, to varying degrees, attempt to do things as a user would. So it'll send a native event instead of just emulating a JavaScript event. If you wanna do a click, for example.

    So Protractor is written on top of WebDriver. Most end to end tests, I think it's fair to say, that the test webpages use some version of Selenium WebDriver at this point. So that's one of our ends, is the emulated user using WebDriver. And I think because we can start up browsers in different configurations, we can do interesting things with testing, like, "Will it work on mobile?" "Will it work on a small screen?" There's more that we can do in terms of accessibility and we've been thinking about this for a while with Protractor. Can we have like an abstract notion instead of saying specifically, "Click on this button," like, interact with this button so we can run it in one mode that would be assume you just click on it and another mode that would be "tab until this element is focused and then press enter or do something else," that would be another way of navigating to that. Nothing on that yet bit it is something that we would look to explore at some point.

    BRIAN: I had some luck at work testing React components with their tests (mumbles) simulate on you know, tabbing and enter and stuff like that. And we actually have a pretty good accessibility test suite built around that. so I think that would be great for, you know, I love the idea of abstracting an interaction 'cause we have duplicate tests everywhere because of this. But I had a quick question for you though. Mainly, you know I think the big argument against end to end testing is one, it's too slow and we say it's brittle yeah, but I think the bigger problem is it's about as reliable as you opening up your browser and clicking through at the same speed every time and like you know computers just hang and stuff right. So it's hard to, I get false positives all the time, like Travis'll be like, "Oh, you have to rebuild this one, for some reason." So I just wondered what you do to offset those two issues: speed and reliability, because I find those, the combination discourages this kind of testing even though it's the strongest.

    JULIE: Absolutely. So for the speed problem, continuous integration kind of helps with this a lot that I don't know anyone who tries to run end to end tests like on site (laughs) for example, 'cause that would just be ridiculously slow. But if you have a five minute test suite that runs whenever you send a pull request for example. I think that's pretty reasonable time frame for everybody. So if we can have this done automatically at reasonable times, I think that helps us solve the issue. That said, I have seen you know, three hour test suites and that's pretty much unacceptable at any point.(laughs) I think a lot of those come from trying to test way too much business logic in your end to end tests. I think if your test suite is unacceptably long, that's generally a sign that a lot of that is testing logic that you should be testing in unit tests. Because webpages are slow but three hours is ridiculous for hitting for all of your, you know just major work flows and pages.

    Another thing that can be done , that I think there's not really great support for right now in Travis at least I don't that exactly every CI environment out there, but we don't have to run end to end tests if documentation changes right? So if your pull request doesn't touch kind of dangerous things, we could be smarter about saying, "Okay, we have a ten-minute test suite that's a little while. We only wanna run it every four hours or something, and if it breaks we'll go back and bisect whatever happened in the past four hours and try to find something there. If it passes fine, whatever. We don't have run everything at every single commit necessarily." So end to end tests would be good for that too. You can also say, we have a suite that we only run before we release. And if it catches something, some poor engineer has to go and you know debug for a while, but at least we feel solid about that release.

    So I think different models of when you actually run them can be useful as well. So for tests sometimes being brittle or flaky, you can do reruns that's exacerbates the time problem but often fixes the test problem so say, run it three times, if it passed any of those times, we'll call it good. We try to avoid that just because it takes a lot of time and it is susceptible to things just getting increasingly flaky if they're allowed to become that way so it just kind of gets worse. So one of the things that we try to do with programs like Protractor is make sure we're addressing causes of flakiness at the point where they actually come up. But it's hard 'cause sometimes browsers just fall over.

    PAM: I think it's interesting that you bring up the time question with end to end tests 'cause that's definitely something I've heard before with people and end to end tests and complaints thereof. But also something that I see people do, that I'm curious what your comments are or your ideas about, are that I've seen people take manual scripts and then translate them into their automated test suite. And I feel like that might be one of the ways that a lot of length comes. What do you think about when someone is switching from a manual, a mostly manual testing, testing paradigm to bringing more automated end to end testing into their workflow? And how they can maybe not, I'll sound bias here, but maybe not repeat the exact same thing?

    JULIE: Yeah that's a hard question because I think, I think the way that our industry in general is moving is towards more automated stuff and avoiding ever having a manual test flow that your devs have to run through before every release. So in general,, I'm like, yay! I want more automated stuff. I don't want people to have to be going and clicking through test scripts. I wonder if--

    PAM: It's also really confusing to me that they're called "scripts" it's taking me a long time to figure out that test engineers often are people who click on buttons. They're jobs are super valuable but it's really confusing that it's called a script and it's not run by a computer.

    JULIE: And maybe we should clarify that for everyone. That often just means like a doc that's like, click on this page, click on this button like it's a bullet point.

    PAM: And test script is a list of tasks of you know, "open this URL, click on this button..." and dadadada and sometimes done by off shore teams or things like that. So it's not even engineers running through it. And then they report you know, they report a failure when something fails the test script.

    JULIE: So I think that a lot of those scripts may be too restrictive, right? Like if you're translating those to automation and they still take a long time, maybe it would be good to go look at that script and say, "Do we need to be testing these five different inputs for this box, or is that a test case that's covered already in our (mumbles)."

    PAM: I like the way you put it about thinking about when you're exercising your application or when you're testing your business logic and that these things are probably not the same.

    JULIE: Yeah. And I think a good question to ask is, "What am I worried about catching with this test?"

    PAM: Mh-hm.

    JULIE: And humans are obviously pretty bad at saying, "Oh, this could never break," (laughs) I know I've definitely said that and it broke, but there are some things that you can think of like, "No, this would be caught in my unit test if that were a problem. I only need to go through this form with one set of input not 50 because the others are tested somewhere else."

    KYLE: So with respect to... I'm still in my mind trying to kind of push on the boundaries of where these things are and how we effectively do it. So in my mind I'm starting to wonder, of course there are lots of tools out there for bench marking performance, for example. But I'm curious about, from an end to end testing perspective, what you think is effective and or maybe out of scope for testing. And I don't just mean the simple stuff like how fast your page loads but I mean more along the lines of the mindsets on offline first development. Like for example, flaky internet. So you're saying, you've been talking so far about trying to tests to remove those sorts of problems.

    I'm sort of going the opposite direction and saying testing assuming that that is going to happen that people's connectivity is gonna be flaky. And It's been said that the only thing worse than no connectivity is flaky connectivity  from the user experience perspective. So I don't know currently whether tools support this. But do you think that's within scope of the things that we should be end to end testing are intentionally spiking the CPU to 100% or intentionally killing the network connection down to a super slow speed or dropping packets or other sorts of things like that. 'Cause I know there's plenty of separate tools to do that but as part of end to end testing, do you think we should be doing that?

    JULIE: Yeah, I think that's a good idea. I think in my mind that's kind of similar to, I have one test that I would like to run on desktop and mobile and it should behave kind of the same way. That's so much saying I have a test that I should run on high internet speed and on a simulated super flaky speed. And if your app should perform in decently the same way, I think that's a totally reasonable test to run. Just thinking about bench marking and performance, WebDriver itself introduces a lot of latency and this is one of the reasons that things are slow. Because it's sending HTTP calls for every command that it does. So you know whenever you're checking an element text or looking to see if an element exists, there's some latency there due to a call. So it's a pretty poor framework for doing really low level timing stuff and overall that's gonna introduce latency for how your entire test suite is. So generally, I don't like doing precise timing bench marks with WebDriver. That said, the Angular team uses WebDriver in conjunction with some just browser-based tests it just uses WebDriver, like go in, click the button and then they run very precise bench marks within the browser and report them back and that works great. So but actually using every WebDriver call not great for a bench mark.

    KYLE: I was just gonna follow on to that and say that the last question on that same line of thinking is what about multiple users in context, where the user behavior of somebody else affects my behavior? So I'm thinking things like the interactivity in Google Docs or online gaming or things like that, where you could just sort of pretend to simulate it but simulating another person's behavior like a person that's trying to be a jerk and they keep deleting every key that you type into a Google Doc for example. It's not something we would think of but is that an end that we should be testing and what are ways that we can do that?

    JULIE: Yeah. So in Protractor's test suite, we actually have a test case for a really simple chat app that we made where we open up two different instances of WebDriver and actually have 200 different browsers talking to the same back end application. I think that's great. I don't think a lot of teams do that in practice just because it's a little bit more work to set up. But yeah, we have an example, I can add a link to that in the notes.

    KENT: Cool yeah it sounds like there's a lot of work yet to be done to cover some of the types of testing that Kyle's talking about. But I think that those kinds of testing would be really valuable for some applications in particular. So yeah, lots of room for anybody who's listening who wants to participate in this movement of end to end testing. Lots of contributions I'm sure we could use. So we actually got a question from Twitter that I think is really applicable right now. So if anybody else watching has questions its #JsAirQuestion hashtag on Twitter. This is actually from a previous guest, Ilya Volodi and his question is, "A lot of wrappers around Selenium. Protractor, CasperJS, Nightwatch, WebDriver.io, Intern, etcetera," and he's asking for recommendations. And so I think this would be a good segue into Protractor. But if you could just mention the others if you're familiar with those that'd be awesome too.

    JULIE: Sure. I'm kind of bias here because I'm the primary author of Protractor so I think you should use that. (laughs) So in general, we talked about WebDriver Selenium from the browser perspective, then obviously you have to write a test for it. And at the end of the day, every test that's a WebDriver test is just some sort of wrappers around sending a series of HTTP calls that are part of the WebDriver protocol. And there's a whole lot of different libraries and bindings for doing this. Most Selenium tests I think are written in Java currently. In the world. That's sort of the primary back end language for a lot of these web servers, it's been around the longest and it's the best supported. But we don't want front end developers, who are writing test to have to switch over to writing Java for their end to end tests, because I don't think that makes sense for them. (laughs) So that's why, for example, Protractor is written in JavaScript and run using NodeJS.

    So an important thing to realize in general is that your test code, for end to end tests that are using WebDriver, is not run in the same JavaScript environment as the browser. This is something that confuses people a lot and it's not related to question but I just wanted to talk about it. (laughs) Because it's super, super important to understand that this is a node program; it is not your actual observer.

    But back to the various wrappers. I think that there's a lot of difficulties with making something asynchronous easy to read. And this is one of the big problems that we struggle with a lot in Protractor. And other wrappers like WebDriver have different ways of solving this. I'm not familiar with exactly all of the ones that were listed but the main problem is we're sending HTTP calls for every request. Everything that you do to interact with a page is an asynchronous call in some way. So you could deal with this by having a huge chain of call backs in your test. You could deal with this by having a huge chain of promises. The way that Protractor does, which is built on top of the official Selenium WebDriver JavaScript bindings, is it kind of simulates a test that looks synchronous by storing commands on a queue which is called the control flow and then popping them off. This works pretty well as long as you're not trying to do a lot of test logic and then you have to understand that these things that look synchronous are actually not synchronous. I think that's fine for most tests because you really shouldn't be doing a lot of complex logic in your tests in general. So it's a challenge I think, different frameworks deal with it different ways. I think you should write tests in whatever you like and feel comfortable in.

    The other big thing about Protractor is that it's specialized for Angular applications. So we take advantage of the fact that of a site isn't Angular, we know a whole lot about the webpage. And we've written into Angular helpers that'll tell us for example when rendering is done and time outs are done and HTTP requests are done and so we can ask Angular when that's finished and help reduce flakiness. A lot of flakiness in web tests comes from like, you'll click a button which'll start some process and then you look for a div to appear and that div hasn't appeared yet because the button click is still being processed in some way. And so you can solve this by doing things like waiting for a couple seconds which is not a great solution. You can pull and see if the button exists which is what a lot of frameworks end up doing. But Protractor can, instead of doing all that say, "Hey, Angular just let me know when everything's done." And so that helps reduce flakiness a lot. So if you're using Angular, I would highly recommend using Protractor.

    BRIAN: I should chime in and say, too, that Casper is highly specialized to just like Phantom or Slimer and we had to actually undo all our Casper tests to actually work with Sauce Labs or Browser Stack or something that needs to hook into Selenium which is, was depressing but you know, something Protractor probably also help alleviate with the (mumbles).

    KYLE: So because the word "async" was mentioned it's kind of like a bat signal in the sky I have to swoop in and talk about this for just a moment. I think the pain points that you're suggesting around creating readable tests are incredibly important. I've had personal experience specifically with that. As a matter of fact the first time I really saw the pain point of testing was the pain point around asynchronous testing. And this is going on probably more than five years ago now but I was working in the developer tools team at Firefox as I've shared before and every single thing you do from drawing a button to putting a border around the pop up frame and everything else, every single step is asynchronous. Most of them don't have events to let you know they're done, so you literally you're just doing timeout after timeout after timeouts and know that everything that you drew, drew in the right order and that the shadows on top of everything else and that sort of craziness. And the tests are significantly more complex than the code to do the work. And they are almost impenetrable to read which means they're not useful. If a test isn't useful... I mean if a test isn't readable, it's not useful 'cause it'll get replaced at some point or it won't do its job.

    But those pain points are exactly the same as for actual developer code. So the solutions that we use or that I advocate for using in developer code are exactly the same pain points and solutions I'd advocate in testing. And I had a coworker at the time tell me, you know, we're working in Firefox so they had early versions of stuff long before it landed in the spec and he said, "Oh, you should just use a generator for your tests." And I was like, "What?" And I learned about it and I realized way back then that creating synchronous looking asynchronous code is the way to create more readable code. It worked well, super well for the test and I've been a fan of that ever since. So generators, the newer async functions that most people read about, those are ways to approximate synchronous looking code that, under the covers, can be asynchronous if it needs to. It's not that the logic doesn't get handled, but it's that the part that you're reading is directly related to the flow control logic and not to the implementation details. So I would just advocate that for all code. It's especially true in tests.

    JULIE: Absolutely. We're really excited about async in 08 coming in to JavaScript eventually. And we have done some experimentation with generators as you mentioned, the underlying WebDriver, JavaScript bindings have some support for that, that we would like to service sooner rather than later, so ask me in a while. (laughs)

    KENT: Well, I think that we're, well we actually do still have a little bit more time. If there was anything you wanted to go into a little further. I did have one question, or actually two questions that are kind of a little bit more broad. Actually, no, this one's a little but more specific. So some people advocate for having the engineers who are writing the code to write the test as well. I personally think that's a really good approach, but other companies have QA teams and especially with respect to end to end testing where it kind of covers the entire application, it's not like one single, or one team's code that's being tested it's actually several team's code being tested. What are your thoughts on this? On like the idea of engineers being the one writing the tests or having QA teams write end to end tests?

    JULIE: I would love to hear everyone's thoughts on this because I think, there's a lot going on right now. Companies are kind of changing their thinking about this a bit. So the way that we do this at Google, which I like in general, is there's a job title which is a software engineer in tools and infrastructure, that's what I am. And our job is to set up frameworks, help with tooling for engineering productivity, in general. So a lot of software engineers in tools and infrastructure would be embedded on one team and they would do things like help set up their unit testing, code health, release and end to end test frameworks. But, engineers write their own end to end tests. So they have someone who knows the framework really well, who can help set up examples, they have you know mailing lists that they can go to with help. But at the end of the day, the developers are responsible for writing their own tests. And I think that that's a really good model.

    BRIAN: Are there tools that can record that stuff? Like I can just click, click, click, click and it knows that I did that and now that's a test case?

    JULIE: You know there's been a lot of people who have done tools like that. I have yet to see one that's really well polished and has stuck around for a couple of years. (laughs) Someone should do that but there's a lot of difficulty with it. And there's been too many problems with all cases that keep it from really being the main way that people write tests.

    BRIAN: I think it's like the same problem with a fitness test, like DSL, Cucumber kind of like, "I'm a business guy writing this thing and that's just gonna work out if I use then right language." And it never seems to work out. And like you said putting the power to test the behavior in the developer's hands is a smart move because the developer, whoever they are will know exactly what code they've written and how this will cover that rather than...

    JULIE: Yeah, a problem that you often get with things that try to record clicks and stuff is they don't know when they're being too specific. And so, it'll be really brittle because if you're button moves (laughs) it'll all freak out. When a developer knows, you're supposed to click the button that has this ID and that will be pretty constant and pretty stable. So yeah, I think developers should write their own tests. If a test is a general test for the whole tool you know, the tech lead or whoever's in charge of the whole tool should understand that and be able to write that test.

    KENT: So just really quickly going back to the tools that you know kind of generate tests just you click around it creates a test. There are a couple tools and I'll actually pick one at the end but I think that those tools have a good place for like really, really simple work flows. And I actually used one for the JavaScript Air website just to make sure that, 'cause it's automatically deployed anytime something gets into master it goes out and so right after that builds it automatically runs this really, really simple test. Like I can click on an episode and the episode title is the same. Just super simple and it's actually really valuable to have that. Because I don't have a million hours and so being able to make something really simple like that I think is valuable.

    And there's another tool that I'm not going to pick but it's called Functionize, that I just learned about at Fluent Conf. it's kind of interesting and it basically, turns that your users are doing into tests. And so it records your user's actions and then you can take your users actions and obviously you can filter out password stuff and that sorts of data but it'll take those actions and you can turn those actions into tests. I've tried to make this, or test this out but it hasn't really been working out so well, that's why I'm not actually picking it but I think it's just an interesting idea.

    JULIE: That's cool. I should also mention really quickly for Protractor, we have an amazing contributor and fellow Googler named Andres who has written a thing called Elementor, which is not quite a click and replay but instead it'll let you interactively test out commands for finding elements. And it will make suggestions from a Chrome extension for how you might find an element in your test based on where you click in the app. And it's super useful. So it's kind of a middle ground that will help you write the tests without actually trying to do it all itself.

    PAM: On the topic of developers writing their own test. I think we kind of have, it sounds like a little bit of a consensus that we're kind of all on that side of engineers should write the test for the code they write. But I do think that something that's interesting. So then the question becomes for me, well why, what situations do we get in in which that is not what happens and why? Like Brian kind of mentioned there's kind of the perception of some tools make testing look so easy that it becomes not a developer's job. But I think it's also really interesting just kind of a topic comment, the team that you work on that you have people, one of the ways you can encourage engineers to write their own test is having dedicated people to make it easy for them to write tests. I think that's a really interesting idea. I don't know if anyone wanted to talk about that.

    JULIE: I think a good question is also, writing tests is easier than debugging tests, right? So who's gonna debug the test is a good thing to think about.

    BRIAN: I should say as a developer I have a really hard time writing tests that I know are gonna be outside of the scope of the stuff that I've actually handled, and somebody else doing that is gonna help a lot more than me being like, "No, it works fine." (laughs)

    JULIE: And for end to end tests it's... so we talked about developers writing their own tests, and for end to end tests, that usually means the front end devs are writing tests for features that they'd use. But of course, that touches the back end. (laughs) Right so there's also, the team has to figure out how that collaboration works. And maybe that means that the back end team also understands how to debug the tests, so if they do something that breaks it they can fix it instead of the front end engineer having to walk over and bother somebody. Or maybe that means that you are mocking more things out in your front end tests.

    KENT: I think that's just kind of the curse of being a front end developer is that if something's broken you're the first one that anybody comes to. And I really don't know a way around that. I just think that's just the way that it is because you know it could be something in the front end or it could be some way that we're integrating with the back end wrong but we're the ones who can find out whether we're sending the right data or whatever it is. Honestly, I don't like it. Sometimes I just really hate that I have to be the one to look at these problems especially if I have a really flaky back end. But I can't see a way around that.

    KYLE: So the comment that I would like to make is actually a pretty good segue from this. So what's interesting, and this is a known problem and I don't think it will ever be solved but what's interesting is that engineers testing or engineers writing tests are simultaneously the best people to write the test and the worst people to write the tests. We're the best because we can think logically about the corner cases that might not occur to other people but we're also the worst because we make assumptions and have biases that give us blind spots to stuff that other people don't have blind spots to. Which is why there's a whole class of testing that you could refer to as randomized testing or chaos testing, and that was one of my last question is going to lie is so there's tools for example quick check which isn't really a JavaScript related tool but it's kind of magical. And I know Brian, as a functional programmer, loves it. It's kind of magical, it starts out by doing randomized testing to find a failure case. But the real magic is that is uses mathematical properties to reduce to a minimal reproducible test case for that bug. It's kind of like mind blowing to see it happen. But I'm just, even if we didn't talk about that second magical part, I'm kind of curious about the first part. Are there tools to help create chaos in our tests where it's not designed to follow a very carefully prescribed script but rather, to do stupid stuff that nobody would ever think of doing like clicking on two buttons at exactly the same moment or anything weird like that. Like our other tools for that because that will find, that absolutely will find bugs that we never thought of testing.

    JULIE: Yeah I definitely know teams that have used that. I don't actually know if those tools were open source or not, (laughs) so I can check on that and add links if they are. But there are definitely, I've heard monkey testing uses a phrase for this a lot. But basically just interacts with elements until you get a 500 error (laughs) and then replace what you did to make that happen. So yeah, definitely.

    BRIAN: You know what I think is really interesting, you touched on in the beginning is that if you have all these different test cases and you treat them like properties, like whenever the browser's in screen reader mode, I expect this. Whenever the latency is this much, I expect that and it basically can fuzz the known environment, you know, quirks and then you know assert properties hold during those. So it's an interesting place to go I think.

    KENT: Sweet. I think that this has been a really awesome show. We've covered more than just end to end testing and I think that's a good thing. So hopefully this is, this has been helpful to the people watching and listening later. So if there's nothing else, I think we should probably start thinking about wrapping up. We might have time for one more quick question I wanted to ask that would be a little bit more practical for people watching, and that is, if you had just a couple of pro tips about writing end to end tests and things that you should do and think about when writing end to end tests, what would some of those pro tips be?

    JULIE: I think the first thing would be to carefully pick your tests, which I think we've covered a couple times here but pick big work flows that the user would go though, user stories, might be a good way to say that, that you don't want to ever break; things that'll be fairly stable and would be really bad if it broke. Try to keep your end to end tests to a limited number that will run decently quickly, and make sure that you think about the potential sources of flakes. So if you're using Angular use a program like Protractor that can help with that. If you're not, make sure you have intelligent ways of waiting for you page to be ready, waiting for elements to appear, etcetera. Only use something like sleep for five seconds as a last resort, if there's no better way of figuring that out. And make sure that you do everything you can to make sure that your tests are debuggable. So whether that's having video or a screen shot, WebDriver has good screenshotting capabilities. Making sure you're that you're exposing logs from your back end, your front end, making sure that those are searchable and that your engineers know when the test breaks, how they can go about figuring out where something actually went wrong. Because I think one of the most frustrating things that gives end to end tests a bad rep is Travis failed and all they see is it timed out on the end to end test and then they have to go find 50 people to yell at before someone understands how to actually debug it.

    KENT: Or they'll just rerun it again and like maybe it'll work and then it does and then you've got a flaky test in there somewhere and you have no idea where it is.

    BRIAN: I have a quick simple pro tip: if you're like a lot of people and you're using Karma and Mocha, you know with the Chrome extension or Phantom or something, I put on Chrome and then I set the mocha timeout to like 20 seconds and I make it sleep so I can actually watch the browser be launched and it just sit there and wait for the timeout. So I can actually see what's on the screen, what's actually happening, open up the console. It's a really good way to just debug if you're writing a test.

    KENT: Sweet thanks. So we don't have any other questions on Twitter, so we'll just go right into out tips and picks. And we'll let Julie go last and so yeah let's go with Brian first. What do you have for us Brian?

    BRIAN: Let's see. I guess that one tip was the one I just gave I'll write it down but yeah set your mocha timeout really high and make it pause for a bit to check it out. And I just wanted to shout out to Shape Security's tools, they're amazing. You should really check out the suite, the shift suite they've provided. We've been using Bodil Stokke's library to Parser Combinatory library to parse SASS at work and it's been extremely effective and crazy easy to use and made really beautiful code as opposed to Regex and other things. So those are my picks those are really great.

    KENT: Cool. Thank you. Let's see. Getify, why don't we have you go next.

    KYLE: All right. So one tip that totally non dev related just for a moment but because I'm loving this. I have an app on my phone called TrueCaller, I tweeted about this earlier this morning and a bunch of people like chimed in on it but, it just pops up and tells me not just who the person is but whether or not that person has been reported as spam before by other users of the app. And this to me is a killer feature that I don't know why we haven't had for like a dozen years. I love this thing and could not use a phone anymore without it. Especially in this political season where there's all kinds of ridiculous spam calls going out. So I love the TrueCaller app. I couldn't use my phone without it.

    My other tip is gonna sound a little bit of a joke but it's kind of halfway joke halfway true. Go right now and reserve whatever your npm user name is as a package name, also on npm just so that somebody else doesn't do it. I just found out today that those are separate. I thought your username was kind of already kind of reserved and they're not. And that flows into my first pick, which is we need to get this trending on npm, Kent C. Dodds has a Kent C. Dodds package on npm. It's the most amazing piece of code written and we should all go...

    (laughter)

    and add this dependency to all of our programs so that we can that thing trending on npm. As a side note, well I discovered all of this because there is a Getify npm package which is, unfortunately, sad face not mine. And it's been creating some confusion for people who think that it is and it isn't. So don't let that happen to you. Go get your user name as a package thing.

    Okay, so in all seriousness, one actually serious pick is a tool called, I guess it's pronounced Hactar, Hacktor or something like that. I have not used the tool but I read through the documentation, read through some of the tests and I was impressed. So I'm not one that actually likes to use a lot of tool sets, I kind of try to have as few tools in my build process as possible. So it seems maybe strange that I would pick a tool which actually adds lots of them to your script, but what I like about Hactar is that it does it for you. It automatically figures out that you just written some code in a file that needs dabble and it just gets it and puts it in for you. So you're not actually being hampered by that process. It's kind of a tool that tries to make itself invisible is their self-description. I think that's a really interesting way of making not just a tool but a smarter tool and that's what I advocate a lot for so. Big ups to Hactar hopefully we maybe see more cool stuff like that.

    KENT: Very cool. Yeah thanks for sharing that. And actually the Kent C. Dodds package was inspired by the Getify package. I think he tweeted about it or somebody tweeted about it and I was like, "Oh, my gosh! I need to make sure that I grab mine real quick." So yeah, (laughs) I've got real big aspirations for 2.0, I'm just saying. (laughs) Awesome. Pam, why don't we have you go next.

    PAM: I'm sorry that that happened to you, Kyle. That actually reminds me of... I'll drop a link for it, but when, Peach the social network came out, I don't know if I've mentioned this on the show but there is a package that allows you to reserve your peach username 'cause they came out for iOS first, which now I want this to happen every time an iOS thing comes out and it doesn't come to Android so I can go squat on my name. So that, I just I'm kind of upset that this is like a thing that we always have to be on top of, like just in case the social network ever matters. (laughs) You know or like someone ever tries to impersonate you on the internet, you need to go and get your name.

    But besides you know, the terrifying topic of other people impersonating you on the internet, my pick is reading. Reading specifically non-technical things, I think kind of taking a little bit of a break from diving into super technical things and just have been reading a lot of interesting books. And probably the best one I've read recently is the Pulitzer Prize winning so other people think it's good too, All the Light We Cannot See. So it's really fantastic. So I recommend reading that. But of course I also recently read Amanda Palmer's book. So my pick this week is take a break and read some good books.

    KENT: Great pick. I'll go next and then we'll go with Julie. First my tip is to investigate and use all forms of testing in the way that they are needed. I think there's a time and a place for end to end testing and fuzz testing or chaos testing or monkey testing or whatever. And there's a place for unit testing. And like Julie said, you should probably have a lot more unit tests that you have end to end tests. And integration testing as well. And that's that is different, although the line between those two can be fuzzy sometimes.

    So anyway for my picks, How to Contribute to an Open Source Project on GitHub. I actually can't believe I haven't picked this yet because I was super excited when it first got released. But it's a series that I created, it's totally free. So if you want to get involved contributing to open source and you just don't know how or you don't know what project to contribute to or whatever, then check out that series. I go through everything as basic as setting up a GitHub account and setting up your Git that's installed on your machine, all the way up to creating a PR and squashing commits into a single commit like a whole bunch of stuff. So yeah, that series has done a lot of good for a lot of people and I'm excited about that.

    And then also I'm picking Ghost Inspector. That's the tool that I use every time Travis deploys JavaScriptAir.com it will verify that you can click on an episode and it will take you to the episodes page. So it's really, really simple. I could probably write some more tests but it's kind of like just a sanity check to make sure that stuff didn't totally get (mumbles). So it's nice to have. And it is totally free for my use case so it's great. Okay, Julie.

    JULIE: So first tip is for Protractor. Andres and Carmen have written a style guide which is finally on our website. So go check that out. I think it has good tips for end to end testing in general like reducing test logic and specifically for Protractor. So that's really great. I would love to see people reading that.

    And then my picks is GitHub's kind of been on fire, with their blog lately, so I'm very excited about emoji reactions to issues because no one likes getting emails that say "+1" (laughs) and they just drown stuff out. So I'm really happy that that's finally here. And they also just introduced a bunch of new tools for doing reviews of pull requests that let you look at pull requests by command. It works really well for our work flows, so I'm excited about those. And in line with what Kent was talking about they also, the I think one of the latest posts was how to close issues for maintainers of GitHub repositories, which is something that I try to be good about meaning you know if something isn't in scope just close things; don't let them linger. I think this is important for anyone who owns or maintains a repository to think about. So GitHub's doing some awesome stuff. I'm excited.

    KENT: Cool. Awesome. All right, so with that, we're gonna wrap the show up. So let me just give a quick shout out to our silver sponsors O'Rilley Fluent Conf, Auth0 and Trading Technologies, (woohoo! New silver sponsor.) So they will be on the website shortly and in the show notes so you can find links to each one of these sponsors and learn more about them.

    And then as always, we appreciate your suggestions for shows and topics so go to sugget.javascriptair.com. And then feedback is really appreciated so feedback.javascriptair.com. That takes you to a form and I get notified whenever you submit feedback. So definitely I am listening. And then make sure to tune in next week, same time same place, we're going to be talking about the AVA Test Runner. And yeah, we'll be with the AVA team. This is a super awesome unit test runner that I totally love for JavaScript. And then follow us on Twitter, Facebook and Google Plus to keep up with the latest. And with that, I think we can say goodbye.

    Oh wait, wait! One other thing. So I just had a meeting with Jen Turner yesterday and she's going to be helping us with our newsletter and so if you would like to be on that newsletter, go to jsair.io/email and you can fill out a Google form. So we'll have something more official later when the newsletter is actually going but the newsletters basically going to be show notes, links, picks and tip. It'll probably come out a couple days after the show. And so yeah, it's just a great way to keep up with the show. I'm hoping to build a community around this show of people who have similar interests and can talk about the topics that we have. So yeah just trying to serve the community here. So anyway, that's it. So thanks everybody for coming and we'll see you all next week. Goodbye!

    KYLE: Bye!

    KENT: That was great.
  `,
}
