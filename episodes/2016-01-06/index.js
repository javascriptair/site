/* eslint max-len:0 no-trailing-spaces:0 */
export default {
  title: 'Unit Testing JavaScript',
  hangoutId: 'cd2pvrr2mghpv56o12rnlo6i488',
  guests: [
    {
      name: 'Christian Johansen',
      twitter: 'cjno',
      tips: [
        `Learn about Functional Programming`,
        `Learn about loose coupling`,
      ],
      picks: [
        `[Simple made easy](http://www.infoq.com/presentations/Simple-Made-Easy)`,
        `[Off to be the wizard](http://www.audible.com/pd/Sci-Fi-Fantasy/Off-to-Be-the-Wizard-Audiobook/B00IIS32NI)`,
      ],
    },
    {
      name: 'Joe Eames',
      twitter: 'josepheames',
      tips: [
        'Learn to TDD and do it for a year',
      ],
      picks: [
        `[Lambda conf](http://lambdaconf.us/)`,
        `[Sherlock](http://www.imdb.com/title/tt1475582/)`,
        `[Soundtrack to Star Wars Episode 7](http://www.amazon.com/gp/product/B014V6JIQK?tag=gm-search-20)`,
        `[Kent C. Dodds](https://twitter.com/kentcdodds)`,
      ],
    },
    {
      name: 'Ward Bell',
      twitter: 'wardbell',
      tips: [
        `Avoid seeing Star Wars`,
        `Think of tests as a feature`,
      ],
      picks: [
        `[Thinking fast and slow](http://amzn.com/0374533555)`,
      ],
    },
  ],
  description: `
    Testing in JavaScript comes with its own set of challenges.
    But in recent years, tools and patterns have been developed
    to make writing unit tests and tracking coverage much simpler
    than ever before. Join us as we talk with Ward Bell,
    Joe Eames, and Christian Johansen about unit testing JavaScript.
  `,
  youTubeId: 'tfkUN8Jr9zY',
  podbeanId: 'yr8s4-5b8aee',
  host: {
    links: [
    ],
    tips: [
      `Test your code`,
      `Try out [AVA](http://npm.im/ava)`,
    ],
    picks: [
      `[Predictable Sherlock Holmes - Studio C](https://www.youtube.com/watch?v=hwJUuN3JUPE)`,
      `[Libraries.io](https://libraries.io/)`,
      `[JS Remote Conf](https://allremoteconfs.com/js-2016)`,
    ],
  },
  panelists: [
    {
      twitter: 'getify',
      tips: [
        `When building a complex thing with parts that are unknown, focus first on mini prototypes of each of those unknowns.`,
        `Mentoring / coaching is essential to learning. Self-driven learning is good but only goes part of the way.`,
      ],
      picks: [
        `[Fun Fun Function - Streams](https://www.youtube.com/watch?v=UD2dZw9iHCc) by [@mpjme](https://twitter.com/mpjme)`,
        `[Simplicity Matters](https://youtu.be/rI8tNMsozo0)`,
      ],
    },
    {
      twitter: 'drboolean',
      tips: [
        `Use as many pure functions as possible. Easier to test.`,
        `Test at the highest level possible to get coverage and flexibility on implementation`,
      ],
      picks: [
        `[jsverify](http://jsverify.github.io/)`,
        `[Eric Elliot’s blog posts in general](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d#.azdssvmzn)`,
        `[Constraints Liberate, Liberties Constrain — Runar Bjarnason](https://www.youtube.com/watch?v=GqmsQeSzMdw)`,
      ],
    },
    {
      twitter: 'tylermcginnis33',
      tips: [
        `console.time & console.timeEnd`,
      ],
      picks: [
        `[Egghead Redux Series Notes]( https://gist.github.com/diegoconcha/8918294bb9df69876b22)`,
        `[The Revolution of Pure Views] (https://medium.com/@puppybits/the-revolution-of-pure-views-aed339db7da4#.ku57c7wxr)`,
      ],
    },
  ],
  transcript: `
    KENT: And we're live with JavaScript Air. Hello, everyone! We are going to be talking about Unit Testing in JavaScript today. We have a couple testing experts that we're excited to chat with. 

    Before we get into our show, I wanted to just make a couple of announcements. First of all, our sponsors, we have a premiere sponsor, and that's Egghead.io, and they have a huge library of bite-sized videos about web development and JavaScript in general. So check them out for content on Node, and React, and Angular, and a ton of other awesome things. We also have Frontend Masters as a sponsor, and they're also a training website. It's a recorded, expert-led workshop with courses on advanced JavaScript, Asynchronous and Functional JavaScript as well as a lot of other great courses on frontend topics. And then TrackJS is our final sponsor, and they report bugs in our JavaScript before customers even notice them and with their telemetry timeline, you'll have the context that you need to actually fix them. So check them out and start tracking your JavaScript errors today at trackjs.com. 

    Awesome. So let me go ahead and introduce... oh, before I introduce the guests, I need to remember, if you're watching live, you can tweet the hashtag #jsAirQuestion, and you can ask questions to our guests and panelists, and we'll answer those at the end of the show. So, also next week, we do have a show. This is a weekly podcast, so next week we're going to be talking with James Long and Jordan Santell about Firefox Developer Tools, React, and Redux. So that should be a pretty splendid show. That's at the same time, same place, next week. So, yeah, let's go ahead and introduce everybody. For our panelists, we have Brian Lonsdorf.

    BRIAN: What's up?

    KENT: And Bryan's on a train, hopefully he can stay on. And then we have Kyle Simpson.

    KYLE: Hello.

    KENT: And Tyler McGinnis.

    TYLER: What's up?

    KENT: And I'm your host, Kent C. Dodds. And for our guests today we have Joe Eames.

    JOE: Hey, everybody.

    KENT: And Ward Bell.

    WARD: Hello, folks!

    KENT: And hopefully we get Christian Johansson, or Johansen, to join in partially through the show, because he has some good things to say as well. But let's go ahead and give our guests a second to introduce themselves. Joe, why don't you go first?

    JOE: All right, I'm Joe Eames, I spend my time authoring courses for PluralSight and organizing conferences, like, the big one that most people will probably recognize is ngConf. I have a background in frontend for the last, I don't know, seven, eight years, almost exclusively. Before that, I was a Microsoft developer. And I also am way into Star Wars. That's the most important thing. (laughs)

    KENT: Nice. Right after Twitter, right? No, just kidding. (laughs) Cool, and Ward?

    WARD: Well, I'm Ward Bell, I'm President of IdeaBlade, which is now, these days, primarily a consulting company to... we consult with people who are building web-based apps. We are also the makers of BreezeJS, which is an open-source software for managing data on the client side. And, yeah, I'm a main frame, not anymore, I used to be a main frame developer.

    JOE: Really?

    WARD: Way back in the day. Oh yeah!

    JOE: Wow.

    WARD: IBM 360, baby.

    JOE: I didn't know that.

    WARD: Oh yeah. (laughs) We didn't test jack in those days, and we were proud of it. (laughs) And I think this should be a short show because nobody does testing anyway, so I think we're done here. But, it actually does play a role in my life, because as an open source developer, we have an awful lot of tests for our product, our Breeze open source product. And I got it into my head that people could learn about the product through tests, so we, all of our documentation is paired with tests that we hope people would look at to better understand how the product works. So one of my claims is that I think that testing is, reading people's tests is a great way to find out how something works, better, often, than reading the documentation itself. I'm also currently working with the Angular 2 team on helping develop their documentation, and tests play a very big role in ensuring that the code that you read in the documentation actually works. So, that might be something we could tap into. Anyway, that's kind of where I come at testing.

    KENT: Great, thanks. That's good background, cool. So I think that just to kind of get us into the conversation, a good conversation starter is what is testing and why do we test?

    JOE: Go for it, Ward.

    WARD: Go for it! Go for it, why do we, alright, so. We're talking automated testing here, we're not talking about, like, oh, if I run it and if it didn't blow up, that's a test. (laughs)

    KENT: Well, you could talk about the merits of both. I think, kind of the weaknesses of manual testing can lead us into a good discussion of why unit testing is valuable.

    WARD: Well, okay. So, well if you've ever written something and published it and the only way you know it worked was 'cause in the last five seconds, you decided that maybe you ought to run it and it seemed to work, and then it didn't, and everybody got on your case and yeah, then you start to think that maybe a little automation here would be a good idea. So, there are two, there's actually, from my perspective, there's kind of a spectrum of tests, but the the two sort of basic choices are you can either do end to end testing, in which you try and automate the behavior of somebody interacting with the application, it actually fires up the application and tries to, like a monkey starts playing with the keys and doing what a user should do. And if it all comes out, great, then you passed -- and that's end-to-end testing. 

    And then there's what many of us like to do, which is called, it's usually called unit testing, which is automated tests of the parts and pieces of your application. And those, you know, you're not trying to test the whole thing, you're just trying to pull out the piece that you're working on or focused on and write on, maybe tests against that. And so we'll just call that unit testing, even though there's a wide variety of things involved in that. So that's, that's what it is for me. What is it for you, Joe?

    JOE: I think that's a great answer. You know, testings cover such a wide thing. Obviously, manual testing has its place. If you're building a huge app, there's probably a good reason to employ manual testers that spend time going through and exercising the application. Because automated testing is only as good as you can anticipate. Even if you have 100% coverage of your code, that doesn't assure that your code always works in every scenario. And neither does manual testing. In reality, it's just a process of eliminating bugs from the set, you'll never get down to zero, but you can always keep cutting it down, right? So manual testing has its place, automated testing, of course, has its place, and is very popular, simply because of the cost effectiveness of it over manual testing and the speed of it, being another big, huge advantage.

    WARD: Yeah, we didn't quite talk about the why, though, Joe, like what, what do we get from testing?

    JOE: Well, I mean, man, there are so many benefits to testing, and it really depends on what kind of testing that you're doing, too. But just testing in general, obviously the assurance that your code is working correctly is your number one benefit, right? We want correct products going out. Documentation... so that includes manual testing. But when it comes to automated testing, then there's documentation of what the code is supposed to do, so that's another big benefit. On-ramping for new developers, if somebody new comes on, the ability for them to go in and read the existing tests as a sort of specification as to what the application should be doing is yet again another big benefit of testing. 

    Comfort, the ability to make changes and know that you're not gonna tweak this over here and break something else over here, again, another huge benefit of testing. And then if you get into TDD, then there's quite a few other benefits that come along as well with that such as being able to think more clearly about what you're doing. And this is actually a little bit of a benefit of existing testing as well, and that is being able to limit what you're thinking about. If you have tests that fix every other part of your application, you're working on one part, and you only have to think about that one part, and you don't have to think about the rest of the application, so that's really nice. By far, the limiting factor in building code is what you can hold in your head, right?

    WARD: Yeah. Yeah I think that you touched on a couple of things that I find important. I mean, I think we all do guarding against regression, when you refactor, you can refactor your code with confidence. But you, you also hit there on one that I don't think is quite emphasized enough, which is the role that testing plays in helping us design good code. When I find that I've written something that's hard to test, it's usually 'cause I haven't designed it very well. It seems have strayed from its purpose, trying to do too much. And so, you know, I'm careful not to bend my code so that can, to do the test, 'cause really, I'm trying to deliver value, right? I'm not trying to deliver a test to the end user, to my stakeholder. But nonetheless, there's something about designing for tests that ends up making my code better. And I don't have the proof, but it sure feels that way to me and I wonder if the rest of our panel has had that same kind of experience.

    BRIAN: Actually, Ward, I was gonna ask you, I've found a lot of luck in actually coming up with APIs by writing them in the tests themselves. Do you do that before you actually write the code?

    WARD: In my dream world, that's what I do. I mean, I know that that would really be a great thing to do. But I'm not very good at doing the right things in the right order, so let me say a qualified yes. You know, if I write my API and then I write my test against it, I often realize that my API isn't what it should be. So it plays a very important role in API design. I just wish I did everything in the right order.

    JOE: How often do you test for...

    BRIAN: I just want to say that's really comforting for a lot of people to hear that, I think. (laughs) So, anyway.

    JOE: How often do you test first, Ward?

    WARD: Yeah, I would say maybe 10% of the time. But then, you know, I don't put my clothes on in the right order either. So, you know. (laughs)

    JOE: Really?

    KENT: (laughs) Nice.

    WARD: (laughs) So, you know, when I find my underwear on my head, it's time to go back, and... (laughs) you would never get me into a rant against TDD. I admire it. I admire the people who have the discipline to do it. But I started with mainframes, like I said, where we didn't test anything, so I'm a little late to the party, and it's hard to make the dog change his tricks, but I do respect it and I do find that the role... I'm a "test soon" developer, and the sooner I get those tests in there, the better things are gonna be.

    JOE: (laughs)

    KENT: I find that it's easier to do TDD when I'm writing a library than when I'm, like, actually writing an application. I'm not quite sure why that is. But it seems to me to be a little easier to do TDD with a library, maybe it's because the API is smaller or I'm not dealing with the browser as much or something. But any time that I do, I feel so confident in what I'm doing, it just, it's really, really nice to have those tests in place first so I can come up with the API that I want first.

    JOE: It's a lot easier to test first, APIs and libraries versus apps -- certainly easier.

    WARD: I can say this, though, where we are more disciplined, which is that when we find a bug, we write a test, and then we fix the bug. We never find a bug, fix the bug, and maybe get around to writing the test. So we use tests as a way to sort of build up a store of regression proofing and that, that works out. That works out for us.

    JOE: So I got a story for you, Ward, and the rest of the panel. It's 2005, I'm an ASP.Net developer, right? And I buy Kent Beck's book, the seminal work on test-driven development. Go through, read it, and teach myself how to TDD. And I, since then, I have never, really ever looked back; I've always been a fan of TDD. Now, that being said, I'm not Uncle Bob, right? So he's, he's actually said this exact quote. (laughs) He says, "You have to believe that if the space shuttle's gonna crash in the next ten seconds, that it's faster for you to write a test first and then write the code to fix it than it is to just write the code." He's actually said that. So I, I find him to be a little... 

    BRIAN: (mumbles)

    JOE: What's that?

    BRIAN: Yeah, I was a follower of him for a while before I realized he was a little insane. Well, the whole, his whole closure thing is a little nuts too, but.

    JOE: He's pretty dogmatic, but I think there's a point to it. I will say, the man is brilliant, and he's one of the best speakers I've ever seen in my life. And he gives, he talks a ton about things that aren't testing, it's just, when it comes to testing, he's fairly dogmatic. But I do think there's a point. And I've had a lot of discussions with people about this when it comes to TDD, right. I believe in TDD. Again, with some reservations. 

    I think TDD is like democracy. I think it's the best system out there for designing software, or it's the worst system out there for designing software, except for all the others. It's the best thing that we know about. That doesn't mean that there aren't better ways to build software; it's just, I feel like it's the best thing that we know about. And I've had conversations with people where I've said, "I find it's better to teach people that you should TDD a hundred percent of the time, TDD a hundred percent of your code, and then after you've done that for a while, a year, couple years, then you start learning when to back off." Because the problem is (and I've seen this a ton, 'cause I've been at a lot of companies where I've done my darndest to improve test coverage and implement testing when there was none) if you always say "Alright, we're gonna test when the code is either super critical or very difficult, or when it's the right kind of code," then you never test, or you never TDD, right? Either one -- whether it's TDD, whether it's testing first or just testing, whatever goal it is -- if you just say that you're just gonna do it when it's the right time, then you'd never do it because when people start out, they don't know when the right time is and they're always too busy getting things done, so they just don't do it. So I feel like it's always better to start off overusing it, and then learn when to back off, learn when to not do it. 

    And I think that things are changing a little bit. With functional programming, we're seeing some things with a lack of state that may cause a lack of need for some of these things, but TDD is great just for, I call it an algorithm triangulation, right? Like, I'm building something, and I don't necessarily know the exact correct algorithm, but I know if given these inputs, this are what the outputs should be. And a great example of that is a way to score a bowling game, right? An algorithm to score a bowling game is not a trivial thing, but you can zero in on it by saying, "Well, I know what it'd be like if I rolled all gutter balls. And I know what it'd be like if I rolled all strikes." And then you write tests around that, and then you slowly zero in, or triangulate in on the algorithm. So I think that's always a great use for TDD.

    WARD: Yeah, I agree with that, Joe. The 10% of the time I do TDD is when I'm unsure of the algorithm, or of the solution to the problem, and I wanna kind of close in on it. It's harder to get myself motivated to do TDD around a to-do app, or something where I'm just taking the values and popping 'em through. That stuff, it's hard to get excited about it 'cause you feel like you've done that a million times. Doesn't mean you shouldn't do it, but I just can't get excited about it. But when I really don't feel like I don't know what I'm doing, I don't know what that API should be, I don't know how it should interact, I don't even know what the darn thing is actually gonna do, that's when TDD starts to be really attractive to me, right.

    JOE: Right. I think that knowing when not to test is kind of the mark of experience and wisdom when it comes to testing. And that's something you don't achieve until you've done it for a while, and tested in places where maybe you didn't need to, but I think that's the mark of experience. And a person shouldn't start out by saying, "Alright, I've never tested before, but I'm gonna pick these points to test here, because these, to me, seem like the right point." I don't think you really have enough experience there. You should do it too much, and then learn to back off.

    TYLER: Yeah, that kind of brings me to my question, Joe, is there ever any, like, use to it that you find most of the time that you shouldn't be testing? Or like, why don't people test more? Because it's one of those things where it's, it's usually an obvious benefit, and we've talked about the benefits so far, but yet, we still have a lot of developers out there who kind of don't do. What do you think are some of the reasons for that?

    JOE: Well, you asked two questions. Do you want me to focus on the second one, the "why don't people test?"

    TYLER: Sure.

    JOE: 'Kay, so, I think that one's pretty obvious, it's inertia, structural, you know, organizational inertia. Ward, you've been a consultant for yourself for a long time, right?

    WARD: We've consulted with it, we've seen a lot, a lot of, a lot of clients.

    JOE: You spend a lot of time at clients' and seen them testing and not testing, probably, mostly not testing, right?

    WARD: It's really, it's very hard to find a client who actually has tests. It's not hard to find clients who say that they want them. These days, everybody knows to nod their head and say, "Oh yeah, we really want testing." But usually, they haven't figured out how to get the stakeholders to invest in it. They haven't really figured out that testing is a feature. It's as much a feature as any, you know, as any screen that they're putting up. So they can't get the budget to do it. And when they're, when somebody says we got to have it on Tuesday, the first thing they throw overboard is the tests.

    JOE: Testing is the, testing is the retirement account of the technical world, right? Everybody agrees they should have one, and everybody know it would be better for 'em if they did, and they, they just don't wanna sacrifice right now to get it done. 

    BRIAN: (laughs)

    WARD: Which means that we should be, you know, and yet there's a fair amount of successful software out there that isn't tested. So we should be as much as we are proponents of it and we see benefits in it, we should be wary of pounding the drum too much, because, obviously, stuff gets done that isn't tested. I think that it would be better if it was, but you know, I'd lose a lot of clients if I said, "I'm not working for you unless you pay for tests." As a matter of fact, I'd lost almost all of my clients. So guess what? I do what they want me to do, and don't we all?

    KYLE: I have a question. And let me set up some context here. I think it's fair to say that among the people on this cast together, I might be the more skeptic around testing. I'm not a big proponent. I don't speak a lot about it. That doesn't mean that I hate it entirely, but I have some misgivings about it, and I would like to ask this question,

    WARD: Can we take this guy off the show?

    (laughter)

    TYLER: We really like him. We wanna keep him.

    WARD: Aw, alright, go ahead.

    KYLE: So I'm curious, what mindset do you feel helps you navigate the tension between, if you are unable to write the code correctly the first time, therefore, there's gonna be some bugs that need to be caught by tests; what makes you think you can write the tests correctly the first time? And a corollary to that question is how many times have you found, honestly, that when there was a test failure, the problem was with your code or the problem was with your test?

    WARD: Great question. Great question!

    JOE: Great question.

    WARD: Joe?

    JOE: Well, let's see. The second question, I think, is an interesting one, but also because, in some cases, it's a little bit of a sort of misleading or asking the wrong thing. Like, specifically if you test first, right? I test first so that I don't have failures in my code. My code doesn't break my tests, my tests guide my code. So my tests almost never break, unless I'm refactoring my code. If I go in and I change something, then I get a bunch of broken tests, because I am changing my code, and the algorithm needs to change. So I think it was also very interesting what you said, you said, "If you can't write the code correctly the first time, what's the value of or why do you think you can test to write the code correctly?" And I think the word "if" is very important there, because I've worked with hundreds and hundreds of developers, and I have yet to meet a developer who writes perfect code, right? Everybody writes bugs, we all write bugs. 

    So, it's not a matter of can you write the code correctly or not the first time, we all write incorrect code. That's all that we do, is we only write incorrect code, right? Sometimes it's more or less correct, based on the skill of the developer and the difficulty and complexity of the problem, but we all write incorrect code, we all write bugs, we all write less performant algorithms, we all write situations that are gonna crop up in some strange production scenario that we didn't anticipate. Whatever it is, we all write imperfect. So the question isn't so much "you weren't correct in the beginning, why do you think you're gonna be correct now?" For me, it's a matter of, I can be more correct with tests than I can without. And so I've said this to a few people: I've never said somebody with tests is somebody without; I've always said you with tests is better than you without tests.

    KYLE: So let me drill in on that for just a moment, then. Are you suggesting, perhaps, that if you get two cracks at the code, you're more likely to get it right? In other words, that writing the code the first time and/or writing the tests, you can get two different shots at it, and what's gonna shake out is a correct solution one way or the other?

    JOE: That's definitely a partially, a part of the value of them. I mean one of the other things about, especially test first, is you are thinking about your code from the standpoint of the consumer of your code, which is only gonna be another code module, right? Most likely, unless you're writing, like a... well I guess even in that case, it's still another code module. If I'm writing a piece of code, the test acts the same way as whatever module is going to use the module I'm describing or I'm currently writing right now. So I'm already thinking from the standpoint of somebody who's going to consume it. 

    So that means, if I'm thinking from that standpoint, I'm going to be more likely to write that code such that it's easier to use for the client. It's more effective for the client. There's, maybe fewer interactions, maybe I don't, instead of having to call five different methods to get something done I only have to call one or two. Maybe instead of having to pass in eight parameters, I pass in an object pass or whatever it is, I'm thinking about it from the consumer's standpoint because I'm writing the code that consumes the class first, or the object, or the function, whatever it is I'm testing. I'm writing that code first, then I go and I write the actual code itself. So I think, from the beginning, from the standpoint... so it's a matter of just thought process and therefore, how you design the code is different if you test it first.

    WARD: I think that's a really good point, Joe, because usually when we have a piece of something we're supposed to build, our initial thought is, "Let's make it work. How do I make it do what it was set out to do?" And we can get really, pretty wrapped up in making it do that job and forget that somebody is gonna ask it to do that job. And when you have to write the test for it, you do flip into consumer mode. And you, also, as a consumer, you really start... you know, when I'm first trying to get the darn thing written, I'm thinking about the happy path and the way, you know, I'm interested in doing the thing exactly as was laid out for me, and I don't think about the things that can go wrong. But when I flip around and I start thinking about consuming it, I start saying, well, you know, let's say it has to go get a list of food; what if there are no foos? What if the thing that's gonna give it the foos gives it something other than foos. What if there's exactly one foo? You start thinking about it in terms of all the things that are actually gonna happen in the real world. That's what writing the tests causes you to do. And it's in that way that it improves the quality of the code that you would otherwise write. 

    So I don't think it's so much that I didn't know what to do when I was trying, you know, your initial position was well, you know, if I don't know what I'm doing... no, let's suppose I really do know what I'm doing, let's suppose I really do know what I want that component to do. My tendency without tests is to just make it do what was in my head at that time. Once I bring the test mentality to bear, I start thinking about how's somebody gonna use it? What happens if it gets something that it shouldn't get? And all that kind of stuff. And that's what makes it more robust and makes for a better consumer experience. Now you asked a second question, which is, do I find when things go wrong that it's a problem with the thing I'm testing or is it a problem with my tests. And there, let's be honest, a very high percentage of the time, I wrote the test wrong. So, it's like any code, right? That could be wrong too. And if I think the testing is a feature, then that's code I intend to make, make good, make part of the code base and that means I'm writing more code. No question.

    BRIAN: But that doesn't mean you wrote it wrong, it just means you've locked down that it's doing the wrong thing. Like, it's doing what it's doing and we can prove that it's doing what it's doing, not that it's right or wrong, I think.

    WARD: Well, no. I mean, I could make a test that just fails because I wrote the test wrong. Just like any line of code, I can write it wrong. So I think the question was, how much time am I gonna spend fixing my tests instead of producing the product, the end product, was that your question, Kyle?

    KYLE: Yeah, sort of. But I think there's a third, potentially, a third option here. Which is not that I wrote the test wrong or not that I wrote the code wrong, but I find probably better than 90% of the time, I am not in the luxurious position you articulated Ward, of assuming that I did it right. Actually, most of the time, when I start to write a piece of code, I only have a vague sense of confidence and it turns out that I really didn't understand all the problems. And so I fumble my way through it. And so, I think the third option here is that you correctly write a test that gets you the wrong outcome. In other words, I have seen many times that I have a test fail -- or sometimes, even a test pass -- and then I look at that, and I say I need to check, and say, "wait a minute, that's not what I wanted anyway." So I have extreme confidence that I got it to do the thing that I didn't actually want it to do and I didn't know beforehand that my thinking was wrong. So I guess what I'm trying to articulate with these questions is how much can we really be confident that when we start out, that our thinking about the problem is actually on track?

    WARD: Well actually, the scenario you just said, isn't that a way in which the tests prove their worth? Because it revealed to you, when you wrote the test, you thought you knew what it was supposed to do, so you wrote a test that way. Then you looked at the test and you said, "Holy smokes! Yeah, the test is right but I'm not getting the good result here." Wow, that's a tremendous insight. That's an insight into the thing that you were trying to write.

    KYLE: Well, I think that perhaps, at least, I can only speak for myself, but the more likely scenario is that what happens is that I write the code "correctly," or at least I write the code what I think is correct. Then I write a test and the test fails, and then I come back and realize what I was expecting of that code was wrong. So my test is actually the thing that was wrong. And the code is actually, more likely, correct. 

    WARD: But won't you find that that's revealing in itself? Because when you wrote the test and you got the test wrong, that is to say, you tested for something that you know, didn't make sense, or you were expecting another outcome. Didn't that reveal something to you? I find that revealing... I mean, that sounds almost like an attack. And I didn't mean it that way. To me, when I find those kinds of disconnects, there's an a-ha moment. And there aren't enough a-ha moments in my code writing. Well, there are plenty. But, I mean, I value those, because whenever I have that disconnect between my attempt to test something and the thing itself, I suddenly have discovered something I didn't know that was important that'll make the code better. I know this sounds soft and fuzzy, but it seems to work out that way.

    KYLE: I think you make a really good point. And I wanna come out in support of the point you just made, that the process of coding is a process of learning, that I am continually learning. I guess where my skepticism might've started out is to wonder whether or not the process of testing is an effective and efficient way to do that learning as opposed to, say, I was doing the same thing, but without the tests, so I had maybe half the code overhead to be worried about. I think that many times, my misunderstandings of the outcome will shake out as well. So where my skepticism comes is whether tests are the best way to get there, not that they don't get us there, and I certainly agree with your premise that getting there and the journey there is important, we need to learn as we go. 

    JOE: Well, and you also got to remember something and that is, as you're writing code, if you have tests in place, then you have assurance that pieces of functionality are doing what they're doing. As you begin to learn and discover, "Oh, this piece didn't quite work. Is it supposed to work this way? It's supposed to work this way?" And you change it to work that way, whether you have a test that you'd already written, you'd have to change the test as well. There's the fact that you know that all the other pieces... that you know, if the code has to do five, six different things, right? 

    Again, going back to a bowling algorithm, it's got to work when I roll all gutter balls, it's got to, when it's all gutter balls, it's a score of zero; when it's all strikes, it's a score of 300, right? And I've got some funny... I wrote the algorithm and I realized, "Ah, crap! I got it wrong. It doesn't work in this scenario and I fixed that." The zero and the 300 still pass and I know that I didn't break those things, right? Or, maybe my algorithm that has, handles spares, and can calculate spares correctly. I know that that's not broken; I didn't break that, right? So, I zeroed in on another problem, but while not messing up the other pieces. And I think that any developer with a reasonable amount of experience is going to understand that one of the worst situations to be in is that code that you're just afraid to touch.

    WARD: Yeah, see that's where I think we need to go, 'cause the whole guarding against regressions, the ability to refactor comfortably is so important. And my goodness, in JavaScript, where you don't have a whole lotta help, it really makes a lot of sense. It's so easy to break something by changing what you're passing in to... I mean you got no protections at all, right? You know, TypeScript, if you're writing in TypeScript, which I vote for, you have some during design time. But if you don't, it is so risky to change something if you don't have tests there to find out what the downstream consequences are. And so guarding against regressions has been so huge over the years for us, that the tests have more than paid for themselves in our ability to rapidly and confidently improve our code, refactor over time, bring in new possibilities, all of that is made possible by our battery of tests.

    KENT: So, I think I need to move us a little bit more into the direction of more nuts and bolts, 'cause I think some people will be really interested in like, how do you test, what do you test, that kind of thing. But there was one thing that I wanted to bring up, and that was just, in my perspective, that I think part of the value of tests is, if you don't write unit tests, you're gonna do manual tests, obviously, like, you do that even if you do write unit tests. The nice thing about unit tests is that it codifies your manual tests so that you don't have to run... or you don't have to run through the manual testing every time you come to that code. And so I think that's another one of that use, but. Anyway, I would like to take a brief pause and introduce Christian Johansen, who we had some time zone problems here. Christian, you wanna introduce yourself for a second?

    CHRISTIAN: Sure. Yeah, hi! I'm Christian. Sorry for just entering in 40 minutes late, I thought we were starting in 20 minutes. (laughs) So yeah, I, yeah. I guess most people know me for writing the Sinon.JS stubbing thing that people use for testing JavaScript . I also wrote a book on Test-Driven Development with JavaScript a few years back. Actually, it's quite a few years back now, so it's getting really old. Yeah, and I work as a consultant doing all kinds of programming, mostly JavaScript-related, but I enjoy all kinds of programming. And I'm really into functional programming these days and I try to apply as much of that as I can to JavaScript. And that also, of course, helps with testing, 'cause testing purer stuff is easier to test than state (mumbles), basically, so that's my, yeah. That's me.

    JOE: Christian, where are you located at?

    CHRISTIAN: I'm in Norway.

    JOE: Norway, okay.

    KENT: So it's a little bit early.

    JOE: Yeah.

    CHRISTIAN: What? Excuse me?

    WARD: So Sinon.JS is your thing?

    CHRISTIAN: Yes, I wrote it initially while writing the book. I guess I started in 2009 or something (laughs) it's a long time ago.

    WARD: Big fan of Sinon.

    JOE: In my opinion, that's probably the largest contribution to testing in the JavaScript world that has ever been made.

    CHRISTIAN: Thanks. 

    WARD: So for people out there who don't know about Sinon, you know run, don't walk, go look it up.

    JOE: Yeah. Yeah, I mean, it stood the test of time. I personally can only name one other mocking library and that's the built-in Jasmine mocks, which are just a very, very poor, pale comparison. He just did such a great job, nobody else has really needed to come out there and do anything else about it, so.

    CHRISTIAN: I think that, actually, they recently just released a new one. I honestly have to say I didn't quite understand the rationale behind it, but I haven't looked at it a lot. And I also just wanted to say that, it is, of course, not just me. There's over a hundred contributors to the project now. And the things that have been added now, in the last couple years, have not primarily been from me but I did the initial stab at it, anyway.

    BRIAN: Alright. Maybe we can talk about mocks versus dependency injection for a second?

    CHRISTIAN: Sure.

    WARD: I don't see them as an opposition; I see them playing well together but I'm interested in how anybody else sees it.

    CHRISTIAN: I can give my opinion on the matter. I actually think that mocks, most of the time, is not such a great idea, and I...

    KYLE: Wait, can we try to be more specific? I think we should be more specific on defining what those are as we give the opinions on them.

    CHRISTIAN: So, the way they're defined in the Sinon library is the way that (mumbles) described them. So there's three basic concepts: there's a spy, which, in the JavaScript world is basically a function that you pass along into your code and then it records information of how it's being used, I mean, the time it's being called, and stuff like that; and then there's stubs and mocks, which are two different ways of faking out functionality. So you can have an object, and you can replace one of its methods with a fake version which then cuts off the original implementation and allows you to take a look at how it's being used. And mocks is basically a different take on the second concept.

    WARD: It kind of includes the task right in with it, the expectation in with it.

    CHRISTIAN: Yeah, you also add the assertions basically on to the fake implementation. And I think that...

    JOE: Yeah, from that standpoint, I don't like mocks either.

    CHRISTIAN: No. (laughs) But that's my take on it....

    KYLE: What about the dependency injection?

    CHRISTIAN: Excuse me?

    KYLE: Sorry, the dependency injection. That was the one that we were comparing.

    CHRISTIAN: Yeah, so dependency injection is basically just passing arguments to stuff. That's the simple version of it. Let's say you have two things that need to work together. So, either you can have the first thing implicitly just grab the other thing and call some methods on it, or you can use dependency injection, where the first thing needs to take the other thing as an argument, so you have to pass it explicitly into it. So there's...

    JOE: Is that implicit? I think it's important to define that that implicit grabbing is usually one of two ways when we're talking in JavaScript, right? It's either you're just grabbing it because it's globally available to you, it's already available in scope or you instantiate it yourself and create it yourself.

    CHRISTIAN: Yeah, basically. One of those two. And when you're either using something global or instantiating another object and calling methods on it and you wanna test that interaction, you have to use some kind of mocks or stubs because you have to go into the global thing and replace whatever functions are being called, so that you can make sure it's being used the correct way. But with dependency injection, you instead just pass an object into another function. And then in a test scenario, you can simply pass in another object which could be a stub or whatever, really, and you can assert that things are happening the way you expect. And you don't have to switch out anything, you don't have to fake out anything, you can just pass in something, you can take a look at when it comes back on the other end. If that makes sense.

    WARD: So I see them as compatible techniques, particularly as we get into something that would be called integration testing. I guess we should probably take a second to make that differentiation. A pure unit test in my view is one that tests something and it either, the thing that you're testing either has no dependencies at all, or you fake all of the dependencies. Whereas an integration testing means that you want to see how a number of closely related and some collaborative components work together and therefore, you need somewhat the real thing, some element of the real thing in order for the thing you want to test to work. 

    And when you're using integration tests where you have the thing that you want to really test, and then you have all these other supporting parts that are theoretically injected, then you made need, you're gonna use dependency injection to be able to test all of them working together. And when you do that, now you're going to have to decide at what point one of the collaborative parts has to be faked out. 
    And so I see that you're still allowing the dependency injection apparatus to bring in those related parts when you're doing an integration test, but, and you're also, at the same time, using spies and stubs to mock out, to fake out, some parts of the dependency chain. And that's why I see them -- dependency injection and stubs, spies, mocking, faking, whatever -- I see these as techniques that work well together. I don't see them in opposition. So that's why I missed the whole question about why is it one thing or another, 'cause I see them working together. What did I miss in that question?

    BRIAN: Oh you, you didn't at all. I think usually when I wrote something without tests in mind, I would end up stubbing and mocking everything because everything's just tangled. And with the dependency injection mindset, you're right, you can pass the mocks, so whatever. So there's really, there's not, that's like a false dichotomy. But that's something I wanted to bring up since you wrote Sinon, Christian.

    KYLE: So it's, dependency injection would be more characteristic of the design of the code itself, and less characteristic of the testing strategy?

    WARD: Exactly.

    KYLE: It's just a different way of getting the test to occur, right?

    WARD: And, before we leave the topic, we could be really, more concrete. I think we waved our hands in the air, so, let's suppose that I'm trying to test a visual component and it injects a data service and the data service itself needs something that's supposed to go out to the server, and get more values, and blabbity blabbit. And I wanna see these things all interact well together, and so I kind of want, I want the normal behavior of the application, the way it assembles that component, injects services and so forth, to work. But at the last possible second, I wanna replace how, how it gets the data 'cause I wanna have fake data or I want, actually, I wanna see how the component behaves when the data service can't get to the server. I don't wanna have the real server there. So I'm relying on dependency injection to assemble all these parts together, and I'm relying on the faking (that I might get from Sinon) to be able to replace critical functionality like whether, you know, the part where it would have gone to the database, I wanna switch it around, I wanna go into the server, I wanna switch that around, and put my fake in right there. That's how these things work together.

    KYLE: I have a quick question to throw out there, mostly just 'cause I don't get the chance to talk to testing experts very often and I'm just curious your perspective on something. So, let me give you a quick scenario. Years back, I worked on the Developer Tools team at Firefox, and we were building the UI of the developer tools that people interact with. And there was a bug that I was trying to fix and it had to do with the ability to zoom in a web page. Our developer tools weren't correctly rendering when a page had been zoomed in. And there, it turns out, in the research of that, that there's one property exposed, I don't remember what it's called, but there's basically one property that exposes what the zoom ratio of the document is. And our developer tools weren't using that to do the proper drawing. So, the fix for the bug was super simple, just multiply every coordinate by that zoom ratio, and bam, everything draws correctly. But, because they take, Firefox as most places, they take correctness of code pretty seriously, they wanted me to write a test. 

    So I started trying to figure out how am I going to test that we do this correctly in the future? And there were a number of layers of problems with constructing such a test; the first problem is being able to introspect upon things that have been drawn out into the painting layer of the browser, that's difficult. But besides that problem, the other problem that I came across which is really the heart of my question here, is that it turns out that there was literally one source of truth for what the zoom ratio was and it was that property. And so when I started trying to write a test to test whether or not it had been changed, what it boiled down to is I was testing... I was rewriting the code in the test. I was basically saying, "Did I implement the same code twice?" Kind of like testing does one equal one. And that was my first big scale frustration with that problem is when there isn't an independent thing to test against, it's difficult to have any confidence in your test at all. It turns out I've seen that over and over and over throughout the rest of my career. So I'm curious, how do you handle that situation when what it boils down to in a unit test is that there's only one source of truth, so there's nothing independent to test against?

    JOE: Well that's a real, that's a real loaded question. (laughs)

    WARD: Okay, so, so there was some way to reveal the experience that was unsatisfactory. It sounds like the only way that you could reveal it was when you ran it in the browser itself, is that, is that a fair summary? 

    KYLE: (nods)

    WARD: And you didn't really have good hooks to be able to fake the DOM experience short of running the real thing, is that fair to say?

    KYLE: Yeah, because the zooming of the browser, of course, it has to be exposed at an application layer for accessibility tool reasons, and all those things. So from our perspective inside of the code, we could only just ask, "Is it zoomed?" But we had no control over that.

    WARD: Alright, so this is a perfect place for an end to end test in which you really, you don't have a lot of choices, easy choices or good choices there, writing an end to end test where you're actually simulating the interaction of a user with the browser and you're actually firing up the real browser, running against the real application or test application. That's what you got to do. And so there's a very important role to play for end to end testing in your bag of tricks. I try not to use... end to end testing comes with its own frictions, so I don't try and do exclusively end to end tests, but the scenario you described is like the poster child for end to end testing.

    JOE: Yeah, I would also put in there that this is also another poster child for mocking. And that is, what you're talking about, the zoom level, is something like, in the real browser, you didn't have control over it, right, it was this external thing, it's, you might as well, you really could consider that to be just like a database. And when it comes to the database, you don't write a test that assures that when I tell the database to write, you know, a property into a row, you don't wanna then have to, "now I'm gonna read you out and see if you did that," right? You shouldn't be testing that; the database manufacturer should be testing that. So what you want to do is put this boundary over that. 

    So in this case, zoom should have had a boundary put around it. There should've been some encapsulating class or object or function that was put around it. And then in any code that utilizes the zoom, you would inject, ideally, that wrapper, and then in your tests, that wrapper just gets mocked with something. And so that way, you can control it in your tests, you can say, "What happens if I'm at zoom you know 10%, or if I'm at 50%, or if I'm at 150%?" Does the code write itself correctly? But there's this boundary from your code as to, again, if you can introspect the resulting DOM, that's great, then you can test that. But if you can't introspect it, then you just look at what the code inside of it is and how does that change based on the zoom level, and then you write tests around that. But if you can't adequately introspect and ask, "Hey, it was supposed to be... I thought it was 30 pixels but because of the zoom level, it should have been 60 pixels." If you can't ask that question, then you can't write an automated test for it.

    KYLE: That sounds like a perfect advertisement for dependency injection if I've ever heard one.
    JOE: (laughs)

    WARD: Well, it also gets to one of the questions that I think came up from Twitter, which was, "What's the balance between end to end testing and unit testing?" Was that one of the questions, Kent?

    KENT: I think that's a good one.

    WARD: 'Cause what Joe was describing is, okay, Kyle, you had an algorithm for scaling. You didn't know what was gonna invoke that, but you wrote an algorithm that was for scaling. How confident are you that your scaling algorithm works, assuming that it gets called with the right thing? Perfect opportunity for unit tests, you can really stress that thing out, you can put wacky values in it, so that you could... 'cause you, you know, your initial attack at it might say, well, you know, you just multiply x times y, but what happens with the boundaries, when the input is wildly wrong? So you could put dampening effects, and you could test all that stuff. 

    And getting all the conditions right to stress your calculation in an end to end test would be hard. Alright, so this is a great way to just beat the heck out of your algorithm for responding. But it doesn't tell you at all whether that thing is actually going to respond -- which was what you were afraid of. That's where the end to end test comes in and says, "Okay, I feel pretty confident this algorithm's gonna work. I have no idea at all if it's gonna get called in the right time at the right place with the right values." That's when the end to end test comes in to give you confidence about that.

    JOE: Right, and there's, end to end testing tools if you can't introspect, there's end to end testing tools that take a photo, right, and then compares it against a known value. It takes a JPEG image, then you crop the piece out that you really care about, compares it against its own value and tells you, "Hey, did the resulting image actually match what we expected it to be?" And so you could do a few happy pass that way.

    KENT: So I think that we're really running out of time, but I think we can kind of sum this up...

    JOE: No! We have another hour's worth of content!

    WARD: I have so much to say! Particularly about that other question!

    KENT: I know. I just tweeted a poll to ask people if they want to have another one of these shows. I think we're gonna get a resounding yes. But I think that we could probably sum up the conversation by saying unit testing will not solve all problems, and there are some cases where you need to come up with other methods for testing your application. So, let's go ahead and move into some of these questions.

    JOE: I'd like to put a different summary on that.

    KENT: Okay, yeah.

    JOE: Coding is hard. 

    WARD: Boom (laughs) 

    KENT: Awesome. (laughs) Cool, so Alex Booker has a couple of actually, really solid questions and I don't think we'll be able to get to all of them. And lots of other people had really good questions too, but, one of the first questions that I think we didn't really get to touch on... and, sorry, because we have so many questions, we have so little time, I'm going to, like, trim this down to 60 seconds on each one of these questions or less. So, his first question is, "How do you define 'unit' in a unit test?"

    JOE: However you want to. Generally, it's a class. Often times, it's a function in JavaScript. But I would say, generally, it's a class or an object, when we're talking specifically in JavaScript. Generally, it's a class or an object. And most of the time, you only test, depends on how the class or the object is written. Sometimes, a single method is kind of independent of other methods, and sometimes a method exercises other methods, so you really are a true unit. In the other cases, I'm exercising one method, so it's more like exercising a function.

    WARD: The point of it is that when you write unit tests, you're trying to take the thing that you're gonna test in isolation from everything else -- you're taking it out of its context and creating an artificial context to probe it.

    CHRISTIAN: Yeah, I'd say function. (laughs) Generally, it should be one piece of cohesive functionality. Like, I'm testing this one behavior, that's what I define as a unit and whatever, like, concrete thing that is depends on your coding style. So for you it's a class, for me it's a function. I think we agree on, like the systematic contents, though.

    KENT: Yeah. Ultimately, technically, it's all just functions anyway, right? (laughs)

    WARD: It's all just objects in JavaScript, right?

    KENT: Yeah. That's right. That's true. Cool. I think that was a solid answer. So the next question is, "What are the characteristics of a good unit test?"

    JOE: It's simple. A good unit test is extremely simple, it's easy to read. It probably follows the AAA system, which is Arrange, Act, and then Assert. And I, in my tests, like to have a little bit of visual separation between the three pieces. And none of those three pieces should have more than, ideally, no more than three lines of code. That doesn't mean that a good test can't have more than that, but that's my guideline. So first, you set things up, and maybe things were set up already, so you don't have to have any code there, then you make some change, and then you test that the change is different. So a good test reads like a little story: I set something up, I change it, I test it.

    CHRISTIAN: I'd like to add that if someone who didn't write the test can understand what it's doing, then it's a good test. So if you have a basic understanding of the domain in which you're coding, then someone who didn't write the test should be able to understand it. 

    JOE: That's also the hallmark of good code.

    CHRISTIAN: Yeah, sure. This is especially a big problem with tests, I think, that people, like, when you're writing the tests, you start off with good intentions and you just get all clogged up in this mess, and you keep writing tests that are somehow exercising your code, but the result is really hard to understand and requires a lot of knowledge about the implementation, perhaps, or has basing more knowledge than you actually intended it to do. I think that the best measure of whether a test is a good test or not is if someone else can understand it fairly quickly.

    JOE: Also, a good test should have no branching or looping.

    CHRISTIAN: Of course. (laughs) Branching and looping in tests, that's like unless you're doing something very, very special, that's the hallmark of a horrible test.

    JOE: Yes. (laughs)

    KENT: Yeah, you're gonna have to start testing your tests when you do stuff like that. 

    JOE: (laughs) 

    WARD: Yeah. Generally, it should have one expectation in it -- one assertion per test.

    KENT: Yeah.

    WARD: These are the little, I mean, Christian laid out the big thing, like, somebody should be able to read it. But what makes something readable? It has a clear statement about what the test is about, you know, in the... I'll say in English, but whatever the native language is, and it does what it says it does, it tests what it says it tests... I can't tell you how many times I read a test and it says it's testing one thing and it's actually testing something completely different. And that really starts to happen when people pile a lot of assertions inside a test, so, don't do that. Keep it tiny.

    KENT: Yeah, so one other note that I would add onto that is this is why functional programming is just so handy, because when you're doing things where you depend on some extra state, you have a lot of setup before you can actually make any of your assertions or even make any of the changes you're gonna make... and so if you're just testing a function that is a pure function, you don't have any set up at all, you just make your call, and then you do your assertions on the output. It's much easier that way.

    JOE: Although you might be doing some setup in whatever the parameters that get passed in, you might have to create them correctly. You might do a little bit of setup there, but, absolutely.

    KENT: Very true.

    JOE: Another thing you should never do is never make an assertion before you take your action and then after you take your action. Never assert in two places. You should only assert once, but it's okay if you have to maybe use a couple of assertions to test one thing in the assertion section, but never assert in two places.

    KENT: Right. Yup. Okay. Cool. So, "100% code coverage. Is it overrated? What percent code coverage do you strive for, if any?"

    JOE: Like the TDD thing I was talking about earlier, I always tell people: we strive for 100%, because then we'll hit 80-ish percent, which I think is a good number, but if you say 80%, you're gonna hit 40%.

    KENT: Yeah. I think that it could be dangerous to go for 100% all the time.

    CHRISTIAN: I honestly don't even measure.

    WARD: I'm with you, Christian, I honestly don't. 

    KENT: How shameful. I'm just kidding. (laughs)

    WARD: Yeah, shoot me.

    CHRISTIAN: Right, like, I'd want for as much as possible of the hard stuff to be tested, but I think that putting a number on it is... I don't think that really respects the cost of maintaining the tests.

    WARD: And it gets in the way of the readability that we were just talking about. A test is supposed to service.

    CHRISTIAN: Yeah.

    WARD: And if I'm testing whether the properties are there, or testing something useless, it's just croft in the way of my seeing what is important. So the test coverage you should have is the tests that are important.

    KENT: I think what's even more important than code coverage is data coverage. And I think Gleb Bahmutov has actually been working on a tool that will give you reporting of data coverage, so, like, what type of data does this function take and how does it respond to that. I think that's even more important than, like, these lines we run. Like, that doesn't tell you the full story. But, I think code coverage is also useful because you know for a fact that that line can be run, but, yeah.

    WARD: But you know what code coverage doesn't tell you is it doesn't tell you about all the things that go wrong. Code coverage tools don't tell you what happens when bad values come along. They just tell you that you know, it ground over the values that you had. It takes, like... you got to think, you got to think about how things can go wrong, are sure to go wrong, and you got to make sure you subject your important, your critical code to bad things.

    CHRISTIAN: On a related note, code coverage does not tell you what combination of paths through your code are being run. So you might run all the lines once, but there might be a million combinations of going through those lines, which, where 80% of them, they end up in something bad. And 100% coverage will not tell you whether or not you did that.

    WARD: Right. You got to think.

    KENT: Yeah, that's a good point. All good points. Okay, so, aw, man. We don't have time for these other questions. If you're interested, go to the #jsAirQuestion hashtag on Twitter, and feel free to answer questions there. That would be nice.. So, for the last couple of minutes, we're gonna dive into our tips and picks and other announcements. So, let's go ahead and we'll let the guests go last, and we'll start out with Tyler.

    TYLER: Cool, so just two picks. Diego Concha, he watched Dan Abramov's Egghead series, and he wrote a bunch of notes about it, it's actually really good. So if you're somewhere where you can't actually stream the videos, go ahead and check out his notes; they basically sum up the series really well. And the next article is a The Revolution of Pure Views. We talked about pure views a little bit, how they're really beneficial for testing, and this article kind of walks through the importance of them, and kind of the tools that are using them now, things like that. So those are my two picks. The tips I have is console.time and console.timeEnd. I tweeted about it yesterday and a lot of people don't know about it. It basically allows you to very easily see how long it takes to function execute. And that's it.

    KENT: Cool, thanks. Kyle?

    KYLE: Alright, two tips. First, just as a general suggestion, not specifically for every case, but I often find when I'm building a complex thing and some or many of parts are kind of unknown, either fully or partially unknown to me, I like to focus first on creating little mini prototypes for each one of those unknowns. And I like to tell people, I call that moving it from the known-unknowns into the known-knowns (if you're familiar with that whole quadrant theory, about how we know things.) So, I like to create the little mini prototypes for each little piece. And that lets me have a confidence that I know when it comes time to get back to that and the bigger complex thing, I kind of already have dealt with the problem. I've managed some risk, and that sort of thing. So you can kind of look at that as sort of creating a test around the thing, but I sort of think of it as mini-prototyping. 

    The other tip I would give you is, and this goes not just for development, but really for everything, the mentoring and coaching is essential to learning. Self-driven learning, I know we get a lot of focus on that, and a lot of people sing its praises, I certainly do as well. Self-driven learning is great. But it really only goes part of the way, and we do need to have coaches and mentors help us get the rest of the way along. So I definitely recommend that. I see that, actually, I'm, I like to play ping pong, but I've been self-taught my whole life, and I'm starting to get some actual coaching, private lesson sorts of things in ping pong to understand the game better. (laughs) I know how silly that may sound, but to try to understand the game better and it's amazing how different that is than the abilities that I have from self-driven learning. 

    Last thing I will say is a pick, there is a video series on YouTube, comes out once a week by Mattias Johansson, I'm a huge fan, the series is called Fun Fun Function. And his most recent one, actually, was really fantastic, it was about streams, about reactive programming, those that listen to me know that I talk a lot about async these days, so, I thought that was a fantastic episode. But really, the whole series, there's like dozens and dozens of videos there, check out Fun Fun Function.

    KENT: Thank you. So, unfortunately, Brian had to jump off, so I'll go ahead and read his tips and picks really quick. So first he said, "Use as many pure functions as possible, it's easier to test." That was one tip, and another tip is, "Test at the highest level possible to get coverage and flexibility on implementation." And then, for his picks, he picks jsverify, I'm not sure what that is, but I'm sure it's awesome. He also picks Eric Elliot's blog posts in general. He likes them, but the one in particular, I think it's What Every Unit Test Needs, which I can pick as well, it's an interesting blog post. And then his last pick is Constraints Liberate, Liberties Constrain, by Runar (some last name I can't pronounce) but, it's a talk, I think, on YouTube. Sso you'll see those on the website, hopefully today. 

    KENT: So, for my tips and picks, my first tip is test your code. My second tip (laughs) is try out AVA. AVA is a testing library framework that was developed that improves asynchronous testing story. It's a lot to testing things that are asynchronous. And also, it will render tests in parallel, so when you have multiple files, it'll run both of those files in parallel, which is pretty sweet. Should get your tests running lickety-split. And then for my picks, I have one, I guess, group that I follow on YouTube, is Studio C. I love Studio C. They have a short sketch called Predictable Sherlock Holmes. So if you're into Sherlock Holmes, check this out. And then I also pick Libraries.io. It's a great place to identify libraries, and it's better than just looking at the stars on GitHub or Googling, so it's really handy. And then also, I pick JS Remote Conf. I will be speaking, I think that's next week, or maybe the week after, but I'll be speaking there, and it should be a lot of fun. We'll have fun with ASTs, so could be good. Alright, Joe! What do you have for us? 

    JOE: Alright, so for tips, my one tip is going to be learn to TDD and do it for a year. That's my tip. So, I think that that's a good thing for everybody to do; it's like learning functional programming, or learning a type-

    WARD: Eating broccoli, it's good. It's good for you.

    JOE: You should do it for a year, it'll open up your eyes and give you-

    WARD: Nothing but broccoli for a year. 

    JOE: (laughs) Yes. For picks, I wanna pick Lambda conf, which is a functional conference happening in Boulder, Colorado of all places. I didn't even know that Boulder, Colorado had people that show up there for any reason other than to get gas, but. (laughs) Sorry, I'm not bagging on Boulder, Colorado on purpose, it's a great place and it's gonna have and awesome conference there. So I'm really excited about Lambda Conf, that's lambdaconf.us. I saw the new Sherlock movie slash episode last night. Speaking of Sherlock, Kent, I really liked that, so I wanna pick that as well. And I also want to pick the soundtrack to the episode, to Star Wars Episode 7. This is especially for you, Ward. The soundtrack is awesome programming music, it's just...

    WARD: If I cover my eyes, you can't see me, right? (laughs)

    JOE: You should correlate (mumbles), it's fantastic symphonic music. It's great music, and it's perfect music for coding. So those are my picks. Oh, one more thing I wanna pick is Kent Dodds. He's a good friend of mine and he rocks, so, that's my last pick.

    KENT: That was very nice of you. Alright, Ward, what do you have for us?

    WARD: Alright, my first pick is to avoid seeing Star Wars if you can. 

    JOE: (laughs) 

    WARD: It was a waste of money and time, for me. Anyway, and I say that for you, Joe. The substantive pick is, think of tests as a feature. When you sit down with your stakeholders, in order to get the... be able to have the budget and time to test, you have to be able to demonstrate that the tests are going to make a serious difference in the outcome of the product. And so you have to weave it in there as a feature just like every other feature that the stakeholders ask you for. Good luck with that, but I think that's the attitude you have to bring to it. And I'm a big fan of this book, let's see if it comes in, here. It's by a Nobel Prize winner, and it doesn't, oh well, it's the Thinking, Fast and Slow by Daniel Kahneman. It's an old book, but it's a fascinating book. He won a Nobel Prize for challenging rational... the rational man perspective that drove economics for a long time. And really, what it is is an investigation of how people really do make decisions. Real human beings, not artificial human beings, functional programming type human beings who fit the equation. So I'd recommend that to you. Very funny as well. You wouldn't expect that from an economics book, but it's very funny.

    KENT: Cool, thanks. And, Christian?

    CHRISTIAN: Alright, so for my tip, it would be to learn about functional programming and learn about loose coupling -- those two things will solve your testing aches. I think that, yeah. (laughs)

    WARD: Big claim, big claim!

    CHRISTIAN: Yeah. (laughs) But, at least learn about loose coupling, it will make testing a lot easier. And then for my pick, I pick a talk by Rich Hickey, who wrote the Clojure language, which is called Simple Made Easy, which is probably the best TED Talk I ever saw. So it's, technology-agnostic, but he talks about simplicity versus making things easy for ourselves. And he talks about complexity, and it's really, really interesting. Everybody should see that. It should be like a license to write code, to see that talk. And then, off-topic, I'll try to do the camera thing, can you see this? This is a book called Off to Be the Wizard. I recently checked out on Audible and it's a great, fun read and the guy who reads it on Audible does an amazing job. So that's, if you want a fun, geeky, fantasy, sci-fi, weird kind of book, check it out.

    KYLE: Just one quick note on that Simple Made Easy, (I'm a huge fan of that as well, I think it ought to be required listening) there's an updated, updated version. The next version of that talk that came out a year or two later is called Simplicity Matters. So either one of the two or both, Simple Made Easy and Simplicity Matters, they're really fantastic.

    CHRISTIAN: Yep. In general, most of his talks are very, very good.

    KENT: Cool, alright. So we have gone over. This is so far the longest show that we've had on JavaScript Air, so congratulations. Maybe we'll bring you all back on to continue our discussion.

    WARD: It's either that or never having us again. 

    (laughter)

    KENT: So I'll wrap this up with a couple closing announcements. So, again, next week's show is going to be awesome. We're going to be talking about Firefox DevTools, React, and Redux, so, more specifically, how Firefox DevTools have been built with React and Redux. We're going to be joined by James Long and Jordan Santell and there also Lin Clark is on that team as well. And so, should be a super awesome show. And, as always, follow us on Twitter, Google+, and Facebook to keep up with the latest. And if you have any feedback for us, please, we love feedback, so feedback.javascriptair.com or if you don't like typing, feedback.jsair.io. And then also suggest.javascriptair.com to suggest shows for us. And with that, I think we're all done. So, thanks everybody for coming out, and we'll see you all next week. Bye!
  `,
}

