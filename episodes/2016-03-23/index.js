export default {
  title: `AVA: Futuristic test runner <span style="font-weight:normal">🚀</span>`,
  guests: [
    {
      name: 'James Talmage',
      twitter: 'jamestalmage',
      links: [
        `[Sindre’s AMA on small module philosophy](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328)`,
      ],
      tips: [
        `Small modules: [generator-nm](https://github.com/sindresorhus/generator-nm) (a minimalist Yeoman generator)`,
      ],
      picks: [
        `Check out [XO](https://github.com/sindresorhus/xo) (zero config linter)`,
        `[thetruesize.com](http://thetruesize.com/) - if you like maps.`,
        `Bob Sutton - [Strong Opinions Weekly Held](http://bobsutton.typepad.com/my_weblog/2006/07/strong_opinions.html)`,
      ],
    },
    {
      name: 'Mark Wubben',
      twitter: 'novemberborn',
      links: [
        `http://node.green/`,
      ],
      tips: [
        `Publish smaller packages using the "files" option, test with "npm pack" and that tar command you always forget`,
      ],
      picks: [
        `Node v6 soon!`,
      ],
    },
    {
      name: 'Vadim Demedes',
      twitter: 'vdemedes',
      tips: [
        `Don’t over-complicate and always look for a simpler solution instead.`,
      ],
      picks: [
        `All [essays](http://rauchg.com/essays/) by Guillermo Rauch`,
        `[Give it five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes) by Jason Fried`,
      ],
    },
  ],
  description: `
    [AVA](http://npm.im/ava) is a relatively new testing framework for JavaScript that promises some really unique and exciting benefits over some of the existing testing frameworks.
  `,
  youTubeId: 'YRvrPkXBwdo',
  podbeanId: 'fzvtc-5ddf13',
  shortUrl: 'http://jsair.io/ava',
  host: {
    links: [
      `[Healthy Open Source](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)`,
      `[How to Contribute to an Open Source Library on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)`,
    ],
    tips: [
      `Use [bundledDependencies](https://docs.npmjs.com/files/package.json#bundleddependencies) see [my screencast on it](https://youtu.be/qOGRUfdSiaM)`,
    ],
    picks: [
      `[ghooks](https://www.npmjs.com/package/ghooks) + [opt-cli](https://npmjs.com/package/opt-cli) = ♥️`,
      `[Hubot](https://hubot.github.com/)`,
    ],
  },
  transcript: `
    KENT: Hello, world! This is the beginning of JavaScript Air episode, what episode is this? 15. We're base zero, so this is our 16th, or not base zero, but index zero, our 16th episode. We're going to be talking about AVA, Futuristic Test Runner. It's a really sweet test runner that is in active development right now for test runner for JavaScript. It's awesome. I use it, I love it, and we have some of the core team members to chat about that today. So, before I get into that too much though, just want to give a couple of announcements.

    First, a shout-out to our amazing sponsors. Egghead.io is the show's premier sponsor, and they have a huge library of bite-sized web development training videos that is growing every day. I have the privilege of being an instructor and so I can see all the lessons that are upcoming and let me tell you, they have some cool things in store. So, check them out for content on JavaScript, Angular, React, Node, and so much more.

    Then Frontend Masters is a recorded, expert-led workshop with courses on advanced JavaScript, asynchronous and functional JS, as well as lots of other great courses on frontend topics. And come August, I'm actually giving two workshops for Frontend Masters, one about webpack and another about open source, and so look forward to that. I'm looking forward to it anyway.

    And then for TrackJS, they report bugs in your JavaScript before customers notice them. And with their telemetry timeline, you'll have the context to actually fix them. Check them out and start tracking JavaScript errors today at trackjs.com.

    And our next sponsor is Wallaby.js. Wallaby.js is an intelligent and super-fast test runner for JavaScript that continuously runs your tests. (Kind of relevant to our conversation today.) It reports code coverage and other results directly in your code editor, immediately as you change your code. Check them out at wallabyjs.com.

    And finally, Codecov. Codecov is code coverage done right. Reduce technical debt by visualizing test performance and faster code review. Codecov is highly integrated with GitHub and provides browser extensions. Learn more at Codecov.io.

    Yes, we love testing here at JavaScript Air, obviously. Last week's show was about testing too. There's just this theme about testing that, I don't know. So, great. Next announcement, just make sure that if you're watching the show live, that if you have any questions, go ahead and ask them with the hashtag #jsAirQuestion on Twitter.

    And then yeah, for our general announcements, our show next week is going to be about VueJS, or VueJS, I'm not sure how to say that. But it's a framework and our... Evan you, the author of the framework, will be on there to join us. And we're actually doing, I'm trying to get a bunch of different frameworks on the show right around the same time, so we can just kind of explore the different options and philosophies and methodologies of these different frameworks. And so Vue is our first one and then we'll also have Angular the following week and then we'll hopefully have Ember upcoming soon as well. And React will be coming up soon also, hopefully. So should be kind of fun.

    But today we are talking about Ava. So let me just introduce everybody. Unfortunately, I have no panelists to join me today, so that is sad. But hopefully we can still have a great conversation with the AVA team. So let me introduce them to you. James Talmage. Say hi, James.

    JAMES: Hello, how are you?

    KENT: (laughs) And Mark Wubben.

    MARK: Yeah.

    KENT: And Vadim Demedes.

    VADIM: Hey, everyone.

    KENT: All right, sweet. So, let's go ahead and get an intro to each one of you before we get into our conversation about AVA. So why don't we start out with you, James?

    JAMES: Yeah. I'm James. I live in a suburb of Detroit, Michigan, and I run my own little construction company up here and I write code in my spare time and joined the AVA team back in, I wanna say November of last year. November, December, something like that? And that was really right before it kind of took off and went crazy and started getting a lot of attention. It's been a fun ride.

    KENT: Very cool, awesome. Mark.

    MARK: Hey. I'm based in London and I do lots of JavaScript. I'm wearing Love JavaScript T-shirt here if you can see it. So I've been doing some open source project the past couple months after I left my sort of steady job to do some new challenges. And then I've been in the AVA team for about four weeks, so it's exciting to be here.

    KENT: Cool, thank you. And Vadim.

    VADIM: So, hello everyone again. My name is Vadim, I'm from Ukraine. And I've been part of AVA team since September. And just like every one of you, I'm a JavaScript and can say I'm an enthusiast, I'm an addict, especially to NodeJS. And I love posting gifs with Leonardo DiCaprio on (mumbles)

    JAMES: (laughs)

    KENT: Fantastic, I feel like that's a very important role that you play in the AVA community support so that's good.

    VADIM: Yeah, It brings a lot of great culture.

    KENT: Yeah. (laughs) Very good, awesome. Okay, so let's go ahead and start talking about AVA. So before we get into the conversation that we've kind of outlined here in our Google doc here, I think it would be valuable to talk first about what AVA is, what pains is it trying to solve. So whoever feels like they can take that.

    JAMES: Man, I mean, it is a, there's a bunch of different things. I mean, I think one of the first goals we approached was being fast through concurrency. And we achieved concurrency in a couple of ways. First of all, every test file you have is split into its own process, so you have multiple processes running at once. And then within each file, unless you mark the test as otherwise, each test gets launched at once. So if you have asynchronous tests that are doing any type of IO or have a timeout or anything like that. Those are all running concurrently at once. And so I think that was one of the initial goals of it, was to make it fast. And then Babel support got added and a number of other things. I mean, maybe somebody else wants to talk about Babel 'cause I think it's a pretty key... the Babel integration's a pretty key feature of what we do.

    VADIM: Yeah, indeed. I can also add that one of the goals, one of the also initial goals for AVA framework was to actually be more of like a friend to a developer because it feels like, I've seen a lot of tweets and people saying that AVA feels like an intelligent software and just, it's really... I'm and all of the team members feel really good about that. And we also weigh all decisions to actually not just throw in there in the error stack and just let the developer figure out what happened, but more like what to do next, why it happened. We'll try to be as helpful as possible in each area.

    KENT: I think that that's primarily accomplished through the power-assert module. Can you talk about that for a second?

    VADIM: Oh, yeah. Power-assert, that's, I think, one of our killer features which I don't think no one else in test frameworks has. So, yeah. (laughs) I don't know, James may need--

    JAMES: You almost kind of have to go onto either the power-assert's, into the power-assert's documentation or our documentation and see a layout. Someone maybe wants to do a screen share of what the power-assert printout looks like. Basically it takes, if you had a... If you had an object and you were accessing two or three members deep, it creates a really interesting view when you have a failed assertion of the different members. It kind of lays them out in a graph so you can kind of see where your assertion went wrong easily right in the terminal. You kind of have to see it to understand why it's cool.

    VADIM: Yeah, definitely.

    KENT: Yeah, I think that, so in other testing and assertion libraries that I've used, they allow you to provide a message with the assertion. And AVA does this as well. And I used to, I was really close to the point of saying, okay, I'm going to lint, that you always have a message in here because, you know, seeing a failure that says like, "one does not equal two" is not very helpful to me. And so it's a lot easier to see somebody say, "the length of items in the list should've been two," or something like that. But with AVA, using this power-assert module for all of your assertions, when you say like t.true, you know, this triple equals this or whatever, the AVA power-assert error output will actually say this is what the values were at the time, like the actual object itself--

    JAMES: Right, so it will say like, if you're doing a social thing, let's say, friends.length = 3, right? Like if you added three friends and then expected the length of the friends array to be three, you would see in the terminal, friends dot length equals three without having to type any of that.

    KENT: Exactly, yeah.

    JAMES: In the linter that we're building, we actually have a prefer power-assert rule, where if you enable that, you actually throw out the whole assertion, AVA assertion API, and just use t dot ok and entirely use power-assert to get truthy values back. So that you can just say... that you're no longer memorizing an AP... and that's actually like, I wanna say one of the taglines of power-assert, is like stop memorizing an assertion API. Just create expressions that return a truthy value or not and they'll show it to your right on the screen as part of your failure message without you having to type in a message at all. It's pretty amazing.

    VADIM: Yeah, we have to give huge, huge credit to power-assert creator because it really brings a lot of value to AVA.

    KENT: Very cool, yeah. I don't wanna get too far down that hole. There are more things to talk about there, but let's talk more about some of the other benefits of AVA over some other testing frameworks that people might be familiar with.

    JAMES: Well, I think Babel's a really big one. We talked about it briefly before. We have built-in Babel translation for your test files right now -- not your sources, but that's coming. And oh, one of the big things that it gives you is the ability to use async await functions, which is a... if you're not familiar, you use promises and return those from functions, and you can actually just use an await statement. Instead of a callback, you get the result or rejection of the promise, is either behaves like a, if the promise rejects, it behaves like a thrown error, just in synchronous code. And with AVA's async nature, running everything concurrently, it can create some really compact tests. I'd recommend going to the AVA documentation and hawking down the async await examples in the documentation to see how it takes what can be a little bit of callback hell as they call it and really flattens it all out and makes it really easy to read and understand.

    VADIM: Yeah, and we have a super cool watch mode thanks to Mark. Mark, what do you say (laughs) about it?

    MARK: (laughs) I think as we try and build these features, it's easy to follow what different test runner did before, but because we're building something new with newer JavaScript features that are not even standardized yet, we have a chance to rethink some of those things. So for instance, in the watcher, okay you can rerun all the tests when you change a file, but you can start making that smarter. So if you change a test file, we'll only rerun that test file. If you change the source file, we'll run all the test files. But we can then also track the dependencies of your tests, so which source that it required from disk. Then if we detect a change to that source file, we know exactly which test file we have to rerun. So then you can just leave it open in the window and develop away and the test will rerun whenever you make a change and it will only do those step if it, say, has to retest.

    KENT: Yeah, I recently started using this feature 'cause I finally was able to upgrade to the latest version of AVA. Hooray, thank you! And it's amazing. We're working on adding more tests to our application, so we've got about 120 tests. And so, you know, starting it out, it ran all of those tests, and then I went and updated a utilities file that's used by several other units in the code and it reran 30 tests. And it's like, whoa, that is, to me that was super cool because as our test suite grows, it's gonna take a little bit longer. And so it's really nice to get much faster feedback, you know, and just see this stuff that's relevant to the things that I changed. So very cool feature. Yeah, I think that's a differentiator. I think Wallaby.js actually does something similar. I remember seeing in the issues, when you were working on this, he was like, "This is not an easy problem to solve." So it's amazing that you were able to do that Kudos to you.

    JAMES: Right, I mean, I think we have a little bit of an easier time because I think Wallaby does it in the... You know uses... is browser based too, if I'm not mistaken. And I think that makes it a little bit harder. With Node, you can hook right into require statements. Makes it a little bit easier. I mean, it still is pretty, Mark did some pretty amazing work.

    KENT: Cool. So what else about AVA? I think there are probably a couple more features about AVA that you wanted to call out.

    JAMES: Yeah. Kind of a consequence of splitting up into multiple test files and running each of them in their own process is isolation. If you have a poorly-designed API that uses some global state that can mess things up between test runs or poorly-designed tests that rely on global state between test runs, you're going to, that's suddenly going to become apparent with AVA because A, your test order execution's not guaranteed due to its async nature, and each test file is running concurrently. Again, based on contention, tests may not all run at the same time. So if you don't design a good API and a good test suite that doesn't maintain global state, and isn't running a clean test each time, that's going to surface a lot sooner than it would with any other test runner. And so, you almost are getting like... for example, if you were running tests against a mock server, right? Like if you were gonna spin up a server and write some tests against it, all your tests are gonna be hitting that server at the same time. And so, if you don't create like... you can't rely on global state. And it's also going to be getting hit from multiple angles at the same time from your test. And so it's going to surface the sort of thing that would normally be hidden in your test code when you're running a set of serial, one-at-a-time tests, and then go to deploy, into production, and it's getting hit, obviously by multiple users at once.

    KENT: I actually found that out the hard way when trying to do some stuff with console.log. And at first, it seems like, "Well, this is dumb. (laughs) You know, "this is annoying." But after playing around with it for a little bit, it's the same kind of thing of tying your hands to free your mind. It makes a lot easier to think about your tests. And you just, when your tests are limited in this fashion, like, you're kind of forced to write your applications a little bit better as well. So I would agree that's also a good feature of the framework.

    MARK: The other thing that's nice about the isolation is you can sort of mess with the process. You can start spying on Node's default libraries because whenever your tests are done, that process just goes away, so you haven't interfered with any other tests.

    KENT: Oh, that's interesting. I hadn't actually thought about that. So you can spy on it and then you don't have to clean up after yourself, is that what you're saying?

    VADIM: Yeah.

    MARK: Right.

    KENT: Very cool. I hadn't thought about that. I'm gonna have to make some updates. (laughs)

    JAMES: And actually, one feature that we're kind of discussing and we're kind of back burning for a while, is actually taking it further optionally, and forking for every individual test even within a test file. And one advantage to that would be with polyfills. So if you were going to install a polyfill and run some assertions before the installation and then after the installation, your polyfill, by its very nature, is gonna modify the global state, right? And so then you've got to write code to undo that, which isn't really that clean of a test because then you're manually... there's potential for error there introduced. Whereas if you're getting a new clean fork each time, it's pristine environment guaranteed.

    Obviously, that would slow some things down 'cause there's overhead to forking that many processes. So that would never be our default option, but it's something we've discussed for that specific type of purpose. Like I had a test, a series of tests that I know I wanna have mess with global state, so give me a clean state for every single one of these tests. And you can accomplish that right now by splitting into one file per test if you wanted to, but that's not a super convenient way to do things. So, that's under discussion. It's pretty low priority right now, but a cool idea for the future.

    KENT: Cool, yeah. So, while we're talking about priorities and things, I think that one thing that lots of people are kind of waiting for or would be interested to hear about is browser support. So you mentioned earlier that AVA doesn't currently support the browser. Is there any word on that ever becoming a feature? Is that a priority at all for AVA to eventually support running in the browser?

    JAMES: Yeah.

    VADIM: Absolutely, yeah. (laughs) Browser support is definitely on the roadmap because we really do understand that it should be present in the first stable release, in the 1.0 release. And there is some work before that happens. First, we need to abstract the way we spun new tests because we currently rely, as James said, on forking, on creating new processes. So then that has to be abstracted away so that we can easily replace it with something else on browser. And basically, there is a lot of also refactoring work involved in that transition, that browser support before that happens, but it's definitely coming soon.

    JAMES: Yeah and like, I mean, a couple things. First, I think we're actually gonna be in pretty good shape because we are already forking the ability for a parent process and a child process to communicate, that API, the... I can't remember it. It's CPI, cross process, I can't remember what it's called.

    MARK: IPC.

    JAMES: IPC, interprocess communication. Correct, thank you, Mark. That API looks remarkably similar to Socket.io, right? So I think we're gonna actually have, we're not gonna have to refactor messaging as much as we might have otherwise if we had a different structure. But really, in our discussions we were like, yes, browser support would be really nice. But at the same time, that's going to add just a whole ton of overhead to the team. Because as soon as you introduce browsers, you introduce a whole ton of problems, right? 'Cause there's a million different flavors and you got to support 'em all and, you know, you're hunting down issues on boxes that run on a different operating system. You know, everybody who does frontend development knows how painful it is to support the myriad of browsers out there and the different types of issues that can arise. And so that's why we back burned it, because we wanted to to focus on getting the test runner right first. And now, as we're kind of getting pretty close to being feature complete, we've had discussions that it's, we're pretty close to getting ready to focus on browsers.

    KENT: Cool, I actually think that's a pretty good segue into the next thing I wanted to talk about and that is growing a project like AVA. I think that you all have made a pretty good call to say, like, "that's definitely something that we're going to do, but we're not going to work on it now because that would just slow down development on everything else. Let's get everything else done first and then we can deal with the browser stuff." 'Cause now like, anybody who is able to work around having it run in the browser, you know, like me, I have a React application and we just use JS DOM and it works fine for us. But yeah, so I can enjoy AVA while it gets all feature complete, and then you can work on browser, and then I can enjoy that new feature. So what are some of the other things that you've done to help the AVA project grow and mature to where it is now?

    VADIM: Interesting question.

    JAMES: I mean, really, Sindre would be the best guy to answer this. Unfortunately, he's not on the call. Sindre's got a pretty far reach in terms of, you know, the people who follow him and contribute to his stuff. But I think he's also got a pretty unique gift in his ability to like, you know, empower a community to contribute to stuff. Because we've just seen an explosion of projects around AVA that Sindre's kickstarted by opening up the repo and then just empowering people to take over and run with the project. Like, you know, our linter. This, I think Jeff (mumbles) is his name, he's basically running that. He's basically running that. We've got Sublime plugins that people are running, plugins for Atom, you know. These are projects that I've, many of them I've never even opened up and looked at the source code, and yet there's people contributing. And he's, kind of just by being sort of open handed with, you know, his baby here, he's really grown our team pretty large, pretty quick, and we're getting a lot done really fast. And it's pretty cool to see the excitement. We've got, how many languages are we translated into now?

    VADIM: I believe four or five.

    JAMES: Yeah and Forrest, he's French, he's running the whole show for us. Really, he's doing an amazing job of reviewing. Even in the languages he doesn't speak, he goes through and checks the link on every single translated document. They may keep the link to an English-speaking Wikipedia page. He says, shouldn't this be in German, or Chinese, or link to the German version, you know? He just does an amazing job of maintaining that. And there's a whole bunch of people who are contributing to AVA that aren't part of the AVA core team, but are doing amazing things to forward it, make it better. So thank you to everybody who's doing that.

    VADIM: Yeah, definitely. Huge thanks.

    KENT: So I think that the takeaway for anybody who's listening or watching that would be like wanting to encourage people to contribute to their project, what would you say are some of the protips or takeaways from the AVA project that people could implement in their own projects to encourage contribution?

    VADIM: Well, I remember one good thing that Sindre recommended or advised to me. It was like, that's actually how he grown the team to like four of us, and the advice was: don't be scared of letting people contribute and give them like direct access to the repository, to the, like everything. Because that's something I thought should not be possible before. And I just see, like the case with me, I contributed at the beginning three or four pull requests, and he just pinged me and, "Hey, do you want to be in the team? Do you want to be more involved?" And I was like excited and hell yeah. And that's how it happened with each of us. So I guess that's one tip, to give people freedom, to ask them actually to contribute. Don't be afraid to ask people to contribute and say, "Hey, do you want to pull request? Do you want to do a pull request for your suggestion?" So that's something.

    JAMES: Yeah, I think it's kind of a little like human nature. You know, we're all invested in AVA and there's this kind of like, "I don't wanna give up control." But Sindre has a pretty amazing attitude of like, "I'm gonna release that to people and just trust them to do a good job." And when he does that, when you do that with somebody... somebody wrote a blog post, I'll hunt it down and put it in the links. His basic response was if I get one or two good contributions from a person, I make them a contributor on my repo. And he talked about how he now has people writing for repositories that he owns and gets credit for every day, that he's doing little of the work on. I'll hunt that down, put it in the link, it was pretty interesting to read. It was a long time ago, so hopefully I can find it, but, you know.

    And I think too, it's, one of the key things he said is that, when I came on the team, he said, I think what he said is, "The only rule is be nice to everybody." Meaning be respectful to somebody who comes in with an idea that you think is bad or PR that you think is not of the greatest quality or you know, kind of shepherd them through getting that PR to an acceptable state instead of just hitting reject, you know? Because that builds excitement around the team. We had a guy who came to, you know, started contributing back, I think in November, December, right around the same time I joined the team. And it was right, you know, one of the first PRs I responded to after having that conversation. Kind of came in and it was... I think I had like, you know, I had to 12 different iterations, or 12 different pretty lengthy comments on what he should fix, and how he should change it, and get him to the point where it kind of fit AVA's style and where we were going and you know.

    And then the next PR, he said to me something, we had to be rebased, and he said, "Oh, what's rebase?" And then, you know, and then the next question was, "I can do a PR from a different branch to master, right?" And so, to me, at that point, I was getting a little frustrated. Like, "okay, this is taking forever." And well, fast forward to now, this guy's our fifth or sixth highest contributor, is now producing quality work for us weekly without much direction at all. Evangelizes on every Hacker News feed, and is excited about AVA and telling everybody about it, is contributing to some of these other side projects. And you look and from Decem... I just yesterday went and looked at his GitHub profile and before December, he had a contribution once a month, once every two weeks. He's on an 80-day run of open source contributions.

    VADIM: Yeah, he jumps on whatever issue coming up--

    JAMES: Yeah.

    VADIM: Very likely.

    JAMES: We all know who we're talking about.

    VADIM: We all know who particular. We just find a good for beginner or a help wanted label and we know that like one day later or maybe less, there is a pull request for it and just, just awesome.

    JAMES: Yup, and I think, you know, for me, what that really taught me was, first of all, I jumped to an early conclusion that he didn't know what he was doing. I was totally wrong. He didn't know GitHub and he didn't understand open source, but he's a great developer, right? And so, I think that's a big lesson to take away is all software engineers have a tendency to do that, right? You deal with people, a lot of people, all day long, you know, on the business side or if you do tech support or whatever, you deal with people who don't understand what you're talking about, but there are plenty of people who do. And you shouldn't make that assumption early. You should give people a chance. I think that's been really, really cool part of the team. I mean, that's pretty amazing to me even. I mean, look at my history. Like I said, I run a construction company and do this on the side and Sindre gave me a chance and didn't, he asked me what I did for a living like four days after I joined the team. You know, that's just kind of the magic of GitHub too, is that you can just be accepted based on your skills and not necessarily on who you are or what your background is, you know? So that's been really cool to watch.

    KENT: Very cool. So, I actually, just to comment on some of the things that you said, which I think was super awesome. So I think that that story is a really good example of the value of being beginner-friendly and having a repository that is welcome and open to contributors who are new to contributing. So, this is a self-plug here, but this is something that I really deeply care about. And so there's a series on egghead.io called How To Contribute To An Open Source Project On Github that I like to reference people to and it talks about stuff like rebase and it talks about changing commit messages and different things like that. And it starts really basic, like "this is how you create a GitHub account, and this is how you file an issue," and whatever. I think that by creating more resources like that and pointing people to those free and useful resources, that we can make our projects more inviting to beginners and just make the whole experience better.

    And then to also touch on what you talked about with Sindre being really open to giving commit access, Michael Richards recently posted a blog post called Healthy Open Source. And he's on the Node.js Foundation and this blog post was basically how the Node project manages their committer pipeline. It's an amazing blog post and I'll link to it, but basically they do very much the same thing. Anybody who lands a nontrivial commit into the project gets commit access to Node. Like that's, you know, this is not a small project. And it's been incredibly helpful to them. And I've started doing this, and I've noticed the exact same things. So anybody watching who's got open source projects that you're looking for more contributors to, be a little bit more open and helpful to people. And ultimately, like you said, be nice and you'll get more contributors.

    But I think that's probably all the time that we have to talk about that 'cause time is going quickly. So we did actually get a question on Twitter that I think is applicable to kind of where I wanna take the discussion next and that's from Alex Booker, "What is something AVA doesn't do well?" So bringing the conversation back to actually the AVA testing framework, what are some things, some areas, where AVA's not very awesome and areas where it could be improved?

    JAMES: I mean, there's a myriad of them, right? I mean, obviously, we've discussed browser support. And, but we're just kind of recently running into an issue with, especially I think the React community, where they like to generate lots and lots of separate test files. And we've got people with 30, 40 different test files and I think most of us write modules that, you know, small modules that might have half a dozen or a dozen. And they're running into issues on Travis because we're forking all these processes without any kind of throttling or restriction on concurrency and it's blowing up on 'em. So pretty major problem for them. And so, you know, there's still some rough edges to be figured out.

    Because we don't transpile everything, you still need to load Babel in every thread if you're transpiling your sources. And Babel takes a long time to load. It wasn't really designed to be, you know, this wasn't in mind when they designed it, forking a dozen different short-lived processes which you're killing off and relaunching over and over again. So, for our tests, we actually don't load Babel to transpile the test in that test process. We do it in the main process, save that off to disk, and then the sub process loads that up off the disk. So the next step is via static analysis and some other tricks. Do that for everything that you might want transpiled, you know, transpiled in the main thread and prevent Babel from having to be loading all those threads so it's faster. It's fast in certain situations now, but you can make it slower than some of the alternatives if you've got the wrong setup.

    KENT: Cool, I think that the problems that you're seeing are people are starting to use this in applications not just smaller modules and so in giant, big applications, you do wind up with a lot of test files. I think right now, my project has probably 15 test files. But I'm sure that we're like, we have really bad coverage right now and we're working on improving it. By the end of it, I'm sure we'll have 100 test files or something like that. I hope that all of those things are resolved before we get there. (laughs) Cool. Anything else that really needs to be worked on? Alex Booker actually asked another question that is relevant to this as well, and his question is, "What innovative features can we look forward to in the future?" So that, I think, is kind of tied to this question as well. Any answers there?

    VADIM: We've dumped so many ideas and so many stuff and features already that it's hard to surprise people one more time, (laughs) like with all of that, what we have currently built in. Well, the innovative process what I wouldn't call that, but what James said about transpiling both the sources and test, I think that would be a major win for users and developers because currently we have a lot of frustration with that. And yeah, basically improvements in the watcher area. I think watcher hasn't been as advertised as all of the other features, but it definitely deserves a lot of attention with all of its intelligent features and tracking dependencies. So yeah. Maybe James or Mark can add some.

    MARK: I think we're pretty good at keeping an eye out on the things that can make developer experience better. James just suggested the other day having a failure test, like a test that you know is going to fail. So then if somebody has a bug report, they can, even if they don't know how to fix issue, they can contribute a failing test, which you can merge without it breaking your CI. It's those kinds of features that we'll always keep an eye out for and want to add because it makes AVA more fun to use and just more useful.

    JAMES: Yeah, that's what I was gonna bring up, the failing test. And you know, still showing reds, still print it out, but don't cause a nonzero exit code so that your tests don't pass, but you have the printout there that there's still something wrong, that bug is still logged. And then Mark even suggested like, what if we added an optional ability to reference the GitHub issue like, you know. I think that's a pretty cool idea too. And then once you pass it, it actually will fail, and you have to convert it to, you know, mark it as a nonfailing test and say, now it's part of the test suite. You know, the bug is fixed.

    VADIM: Yeah, we've got a lot of nice, small things in store in the future.

    KENT: Great.

    JAMES: I think some speed improvements, I think we've got some ideas on those. Like right now in watch mode, we wait till we see a change and then we fire up all these child processes and start sending 'em tests. I think it'd be cool to warm up those processes ahead of time, knowing that, hey, we're gonna get some tests eventually. And you know, load up whatever dependencies we know we can load ahead of time. And then when it comes time to run the tests, shaving just a few hundred more milliseconds off response time when you're doing TDD.

    KENT: Yeah, definitely TDD and like, that's kind of the use case for watch mode, right? And so, I have noticed that once I save a file, it does take just a second for something to actually happen. Looking forward to that. I notice like, mostly for me, when I'm using AVA, actually running the tests is crazy fast. Like when I'm looking at the output, it's like, "Holy cow, this is going lightning fast." But getting started is the slow piece and I think that's that transpilation stuff first and warming up those child processes. So looking forward to improvements there. So I think we're coming down on our time and there are a couple of things that I wanted to make sure that we cover before we wrap up. As this is, you know, Sindre's brain child, another thing that Sindre is really known for is having really small modules. And just yesterday, we had this huge debacle over a module that's 11 lines long, it pads a string with zeroes or pads a string on the left, it's called padleft, and it was unpublished and broke the internet, sort of. (laughs) And so, people are just thinking like, it's confirming lots of people's fears about small modules and saying like, "You see? "This is why we shouldn't use small modules." I think that it'd be great... I wish that Sindre had come on, but maybe you all can talk a little bit because AVA is really constructed of a lot of small modules, so maybe if you all have an opinion on this, I think it'd be great to hear what you have to say.

    VADIM: Yeah, I think reusable modules is a really cool idea and as for that module, unpublished module, I don't think that it's a great... it's a good sense to actually judge the whole technique by one failed case. It's like saying that you shouldn't drive a car because you might get a puncture one day. It's like, nobody's protected from that, so you shouldn't avoid using small reusable modules because someone unpublished something. And it's definitely a good feeling to know that, okay, I'm building this up, I need this, this, this, and this. It's like Lego block, just put one over the other and you got good picture in the end. So, another great advantage of small modules is that they're all independently testable. They all have greater coverage as a consequence from that. They are individual. They're not dependent on something else. And yeah, there's a lot of good opinions, both good and bad, but generally good. And I think we, in AVA project, seen that this is actually a good thing.

    JAMES: Right, there's a blog post by Sindre on his GitHub AMA about small modules. He gives great answers, somebody asked him about it. He used that Lego block reference that Vadim said. I think the debacle yesterday is kind of the exact opposite of what, you know, the way some people are spinning it. We had an 11-line module disappear from npm, and it broke a lot of things. But it was a matter of hours till it was fixed because A, it was an open source module, so somebody's able to just republish it, no problem. And again, what failed, what disappeared, was 11 lines of code. If you relied only on large modules and that happened to you, suddenly you've put all your eggs in one basket and you could be in... you'd be hurting a lot more than having to rewrite yourself the ability to pad a string on the left side, you know? Yeah, anybody can do it really quickly, but that's the advantage of small modules is that somebody's already done it and you don't have to think through all the little corner cases. I think the benefits far outweigh the risks. And the notion that yesterday was a big debacle is kind of funny to me because it seemed like, it was resolved before I even knew about it. I found out about it all after the fact, like it didn't affect my life at all. Like it failed one AVA build. We've got way more issues with just app (mumbles) being flaky than npm failing us and small module design failing us.

    MARK: It's surprisingly hard to write code. So, if you can pull in a module that somebody else wrote or maybe a lot of people have used and looked at and improved, that's always preferable over writing some utility yourself, trying to test it. That will distract from your pull request, from the feature you're trying to introduce. It's more overhead for somebody to understand yours. Normally you see, array union dependency, like you have an idea what it means. You can quick look at the docs, like okay, cool. I know what it does, I don't have to worry about it.

    JAMES: Yeah, and I think when you allow yourself to put this stuff that could be a separate module in your core codebase, and live there with your project, you are just really tempting yourself to break encapsulation, right? It's almost guaranteed to happen over time, that your array union code is going to have... you're gonna say, "You know what? In this case, I need it to do this one unique thing for AVA. Hey, I'm gonna slip that in there." And now suddenly it's something else entirely from what you originally designed it for and you're just asking for trouble by doing that. Keeping good encapsulation, forcing yourself to write documentation that's going to be published on npm for your little tiny module, makes you design a better API. It makes you think about how that little chunk of code should work a little bit better.

    I would say the most important things, like if somebody was really interested in that, read Sindre's response, I'll put it in the links, and also set yourself up with tooling that allows you to make small modules fast, quickly. And by that, I mean Yeoman. Use a generator. Sindre's got one called generator-nm that is basically really bare bones and that's kind of the idea with a small module, don't have a lot of dependencies. I think their dependencies are XO and AVA, which is a linter in the testing framework. And just get going. But you know, you wanna automate that task. And so, you wanna be able to quickly, when you recognize a bit of code that could be pulled out, put in its own module, being able to make that happen in a matter of five to 15 minutes, as opposed to spending hours doing that. And it takes some practice, right? Like learning that tooling, but if you do it, you're gonna be way better off.

    KENT: Cool. So, I think we are really coming close on time. And there are more things to talk about, about AVA specifically that I think that we didn't really touch on. And so, if there is anything else that you all wanted to make sure we bring up, now is the time. Is there anything else that you think we should really cover about AVA?

    VADIM: Well, just a big thumbs up to all the contributors. It just, it feels amazing participating in the AVA project every day and waking up to hundred notifications each day, (laughs) so yeah, it probably wouldn't happen without all of these super cool guys.

    JAMES: Indeed, indeed. Big thank you to everybody who's helping. And even, come file issues in the repo. That's a big help to us too, to figure out what's wrong.

    KENT: So one thing that I, since we do have a second, I think it would be valuable to talk about the API to AVA a little bit and design decisions, specifically the AVA mantra. Maybe somebody can talk about the mantra of AVA.

    JAMES: I think it's kind of like a little sub mantra we have, I don't know that it's, you know... it drives a lot of our design decisions, but that's it. I think it's stolen from Python. There should be only one way to do things, if at all possible. So you see that in a lot of our decisions, like you even brought one up about renaming a couple of the assertion methods and aliasing instead of renaming. And that's kind of against our mantra, right? There should be one way to do a truthy assertion and right now that's okay and versus truthy, the name of the method. And we're not gonna alias it, but you know, we'd rather deprecate and rename. And the reasons, the main reason behind that really is that when you have a long list of aliases or you have 10 different ways to attack the problem that have no functional alternate benefit, right? Like it's fine if you need to have multiple ways to do things to accomplish what you need to do, but if there is a way that works and it's not overly painful, then there's no reason to alias a method just because that's somebody's preference.

    Because what it does is it creates, A, if you go into an AVA project right now, and you know AVA, you know everybody's assertion methods, right? It's not just that, like I talked about the issue that tap has a lot of aliases, like six or seven for every method it seems like. And it's happened to me before where somebody else uses a different method name than the one I'm used to and tap also has the ability to add custom assertions and I'm like, "I think that might be just an alias for a built-in assertion, or maybe that's a custom assertion. I don't know, better go check the docs," right? Or I got to hunt through your codebase. And if you maintain a minimal API, yes, people may not love the names you chose, but having more than one way to do it just creates overhead. It just creates, in the developer's mind, in the user's mind, there's one more thing they've got to learn. And yes, we definitely could maybe improve what some things are named so they're a little bit more intuitive, and we're debating that in an issue right now, but I think it's way better to keep it focused, like keep it easy to wrap your head around. It's complicated enough as it is.

    VADIM: Yeah, basically we just have to say no sometimes but in a nice way, so (laughs), so yeah.

    KENT: Yeah, you said no to my PR in a nice way and, (laughs) so that was good. And I'm cool with that. Okay, I think we're gonna move into our tips and picks. We answered all the questions on Twitter, so we can skip right into tips and picks. I'll go ahead and go first and then I'll let each of you go. So first my tip is related to this, you know, npm unpublished debacle yesterday. My tip is to bundle your dependencies. And so if you're using 11 lines of code, it's probably okay to just include to that 11 lines of code in your project, as like a bundled dependency. And so this is a feature that's supported by npm. You just, in your package.json provide an array of dependencies you want bundled into your project and those will be installed. Or part of what you publish. And so you'll still have a Node modules directory and when you publish, it will publish your Node modules directory with those installed dependencies, which is actually kind of fancy and cool. There are some, obviously, some downsides to that as far as getting patch updates to those dependencies and things like that, but for 11 lines of code, it's probably okay to do that. And so I actually created a screencast to demonstrate. Well, I created the screencast while I was trying out the feature to see if it would actually work and it did and so I published the screencast to YouTube. So I've got a link to that.

    And then for my picks, I have ghooks + opt-cli. So ghooks is a module that I actually help maintain that installs Git hooks when it's installed so that when, you know, you're working on a project with a team of people, you want share Git hooks like pre-commit hooks or pre-push hooks or whatever, it will allow you to configure what should run when somebody pushes code or something like that, so you can run linting and stuff. However, this adds a barrier to open source projects, so if you wanna make it easy for people to contribute to your project, it's not very friendly to people who are just getting started to not even be able to commit any code because you've got a linter and they don't understand this thing. So, somebody created opt-cli that allows you to opt in or opt out of certain scripts. And so you just say, opt in this thing and then execute this script. And so you have these Git-ignored, or yeah, these Git-ignored files that say which things you're opting in and out of and then you can opt in to these Git hooks. So anyway, I actually have a pull request on Lodash right now to add this. And I think it's probably been merged by now. So yeah, cool stuff.

    Finally, Hubot is a GitHub-bot-creating library or thing written in CoffeeScript, so you can use it in your Node projects. But basically it allows you to have, like, I'm pretty sure most of the GitHub bots out there use Hubot to automate stuff on pull requests, make sure CLAs are signed, or make sure that linting is passing or whatever. So check out Hubot. Those are my tips and picks. Why don't we go with James next?

    JAMES: Okay, so my first pick would be to spend some time learning about small modules. I'd go read Sindre's AMA. I'll provide a link there. And then I'd check out generator-nm or some other Yeoman generator to automate your creation of your modules, like, managing package.json is not what we all are interested in doing, right? So you use something else to do it for you.

    For my picks, the first few are a little self-serving. XO, it's another project that we work on. It's a zero-config linter. Again, it kind of falls in that same mantra of "there should only be one way to do things." It's a linter that comes with a series of defaults, kind of like if you're familiar with JavaScript standard, it's got some extra features beyond that. Go check that out. TheTrueSize.com is a project I was lucky enough to work on with a buddy, so if you like maps check it out. Even if you don't, it's kind of mind-blowing. Got a lot of... we get a lot of feedback from geography students that they think it's really cool. Geography teachers, rather. And then, essay I love by Bob Sutton, Strong Opinions Weekly Held. I think it's a great short, like couple paragraph, reads. But I think it's a great thing to keep in mind.

    KENT: Cool, thanks. Vadim, why don't we have you go next?

    VADIM: Yeah, so I have one short tip. Basically, not even JavaScript-specific tip just a general tip, which is don't overcomplicate and always look for simple solution instead. So, it basically means just get off the ground quickly. Deliver, ship, and you will always find time to make it big, hard, complex, whatever. So just get started and iterate.

    And as for my picks, I picked an article by Jason Fried, which is called Give it Five Minutes, which is basically what we talked about today, about patience, about giving people a chance, and evaluating their ideas before rejecting them impulsively. So I think that's very helpful article for both open source projects and well, just generally in life, so yeah. That's my pick.

    KENT: Cool, thanks. Mark.

    MARK: On the subject of small modules, one thing you can do when you publish your small module is if you use the files option in a package.json, you can list just the files that you need to publish. So that way you can avoid publishing your tests and just another kinds of assets you might have for your repo. So then they're actually smaller packages. You can use npm pack, which generates a tarball on your machine, and then through whatever the tar command is, you can list all the files, just to make sure that you have included everything you needed to include.

    So that's my tip. My pick is that next month, Node v6 is gonna come out, which has a lot more awesome JavaScript features. And if you go to node.green, that shows you the compatibility table with Node v6 in there, and it's like almost all green so that's gonna be pretty sweet.

    KENT: Wow, I'm looking at it right now and it looks legit. Cool, looking forward to that. All right, so with that, I'll just go ahead and give our closing announcements really quick. So, first to shout-out to our silver sponsors: O'Reilly Fluent Conf, Auth0, and Trading Technologies. Thank them, if you get the chance, for their awesome stuff that they provide to us. And then check out suggest.javascriptair.com. If you have suggestions for the show, guests and topics. And then go to feedback.javascriptair.com to submit feedback about this show or any other show or the entire show in general. Really appreciate your feedback. And then remember that our show is weekly and so we have another show next week on VueJS or VueJS, with Evan You. Probably better figure out how to pronounce that before the show. And then, as always, follow us on Twitter, Facebook, and Google+ to keep up with the latest and greatest from JavaScript Air. So with that, I'll just say thank you to our guests. Thank you!

    VADIM: Thanks. Thanks for having us.

    KENT: We'll see you all next week, bye.

    JAMES: Bye.

    VADIM: See you.
  `,
}
