export default {
  title: `Reactive Programming in JavaScript`,
  guests: [
    {
      name: 'André Staltz',
      twitter: 'andrestaltz',
      links: [
        `Someone mentioned [the Epic Monadic Promises thread](https://github.com/promises-aplus/promises-spec/issues/94)`,
      ],
      tips: [
      ],
      picks: [
        `[CycleConf](http://cycleconf.com) and follow the hashtag #cycleconf next week`,
        `[most](https://github.com/cujojs/most/)`,
      ],
    },
    {
      name: 'Ben Lesh',
      twitter: 'BenLesh',
      links: [
        `[Paul Taylor](https://github.com/trxcllnt) on github`,
      ],
      tips: [
        `[Check out the specs on RxJS](https://github.com/ReactiveX/rxjs/tree/master/src/operator)`,
        `[Check out the docs on how to write marble tests](https://github.com/ReactiveX/rxjs/blob/master/doc/writing-marble-tests.md)`,
      ],
      picks: [
        `Go to the restaurant that Dan Abramov is at. (Redux Foodtruck?)`,
      ],
    },
    {
      name: 'Matthew Podwysocki',
      twitter: 'mattpodwysocki',
      links: [
        `[Gleb Bahmutov](https://glebbahmutov.com/)`,
        `[rxvision](https://github.com/jaredly/rxvision)`,
      ],
      tips: [
      ],
      picks: [
        `[React Native on the Universal Windows Platform](https://blogs.windows.com/buildingapps/2016/04/13/react-native-on-the-universal-windows-platform/)`,
        `[thali project](http://thaliproject.org/) Node on mobile for P2P interaction`,
        `[Interactive Extensions for JavaScript](https://github.com/Reactive-Extensions/IxJS)`,
      ],
    },
  ],
  description: `
    Object oriented programming, functional programming, reactive programming, reactive functional programming. There are so many different ways to think about the system you're building and different design patterns to follow. Join us as we talk about reactive programming in JavaScript.
  `,
  hangoutId: 'cbu3fh4too4a6iot5psgo9cl4d4',
  youTubeId: 'RFvwLifhxDg',
  podbeanId: 'yn6zw-5e65e8',
  shortUrl: 'http://jsair.io/reactive',
  host: {
    tips: [
      `If you’re feeling overwhelmed, make a Todo list and focus on one task at a time.`,
    ],
    picks: [
      `[aphrodite](https://github.com/Khan/aphrodite) - It's inline styles, but they work!`,
      `[autocomplete-emojis](https://atom.io/packages/autocomplete-emojis) Atom package`,
      `[Stuff](https://github.com/kentcdodds/ama/issues/107) that I use for recording egghead.io lessons`,
      `Adam. He’s great <3`,
    ],
  },
  panelists: [
    {
      twitter: 'dan_abramov',
      picks: [
        `[MobX](https://github.com/mobxjs/mobx)`,
        `[Optimizing Redux TodoMVC with an optimal state structure](https://github.com/mweststrate/redux-todomvc/pulls?q=is%3Apr+is%3Aclosed)`,
      ],
    },
    {
      twitter: 'drboolean',
      links: [
        `[https://egghead.io/lessons/rxjs-reactive-programming-what-is-rxjs](egghead rxjs series)`,
        `[http://highlandjs.org/](highland.js lazy streams)`,
        `[https://github.com/cujojs/most](most.js reactive stream lib)`,
      ],
      tips: [
        `Favor laziness since laziness can lead to better performance & extendability`,
        `Try to compose single expressions which data flows through and, if you struggle, don’t “cheat”, but rather look for stream method alternatives - they are there. It will simplify the whole codebase.`,
        `Normalization helps composability. I tend to wrap all my utilities in the same type of stream so that my application code works like legos. Wrapping is a pain, but those utilities tend not to change so it’s a one time thing.`,
      ],
      picks: [
        `[lambdaconf tweetstorm](https://twitter.com/jo_liss/status/719487771967152132)`,
        `[People vs OJ](http://www.fxnetworks.com/shows/the-people-v-oj-simpson-american-crime-story/episodes)`,
      ],
    },
    {
      twitter: 'getify',
      links: [
        `[RxMarbles.com](http://rxmarbles.com/)`,
        `[asynquence](http://github.com/getify/asynquence), specifically [asynquence reactive sequences](https://github.com/getify/asynquence/tree/master/contrib#react-plugin)`,
      ],
      picks: [
        `[A Tale Of Three Lists](https://github.com/getify/a-tale-of-three-lists)`,
      ],
    },
    {
      twitter: 'pamasaur',
      links: [
        `[RxMarbles](http://rxmarbles.com/)`,
      ],
      picks: [
        `[FantasyLand](https://github.com/fantasyland/fantasy-land)`,
      ],
    },
  ],
  transcript: `
    KENT: Hello, world! Hi there, this is my son Adam, for those of you who can see. I had a little bit of a family emergency and he wants the microphone, but we're gonna see if we can get this to work anyway. I recorded an Egghead.io lesson about Git rebase once, holding my son Adam. So yeah. We can do this. (laughs) So today, we're gonna be talking about reactive programming in JavaScript. We have some experts on the subject here with us today we're really excited about. But before get into that, I wanna, just, give a shout out to our sponsors.

    So, Egghead.io is the show's premier sponsor, and they have a huge library on bite-size development training videos. You can check them out for content on JavaScript, Angular, React, Node, and all kinds of things. Then Frontend Masters is an expert-led workshop , recorded workshop, that has courses on Advanced JavaScript, Asynchronous and Functional JS, as well as lots of other great courses on Frontend topics.

    And TrackJS reports bugs in your JavaScript before customers even notice them. And with their telemetry timeline, you'll have the context you need to actually fix the bugs. So check them out and start tracking JavaScript errors today at Trackjs.com.

    And Wallaby.js is an intelligent and super fast test runner for JavaScript that continuously runs your test as you make changes, it records code coverage right in your text editor, and immediately, like, as you're changing the code, it's very cool. Check them out at wallabyjs.com.

    And CodeCov is code coverage done right. Reduce technical debt and visualize test performance with faster code review. CodeCov is highly integrated with GitHub, and provides browser extensions that are totally awesome. Learn more at codecov.io.

    Awesome, so just a couple quick announcements before we get into our show, if you have questions for our guests during the show, you can tweet the hashtag #jsAirQuestion, and we'll try to get to those. And then, as always, follow us on Twitter, Google Plus, and Facebook to keep up with the latest. Remember, also, that this is a weekly show, and so next week, we are... I should've looked at this, I totally forgot to double check. We have a show next week, and it will be at the same time and same place. And if you check out JavaScript Air, you'll see, it is the Internet of Things with JavaScript. And we're gonna have some awesome guests there, so check us out next week.

    Alright, I think that's it, so let's go ahead and get into our introductions. So, we'll start out first with our panelists, we have Brian Lonsdorf.

    BRIAN: What's up?

    KENT: And Dan Abramov.

    DAN: Hey there, hey there.

    KENT: Kyle Simpson.

    KYLE: Hello!

    KENT: And Pam Selle.

    PAM: Hi!

    KENT: And, again, I'm your host, Kent C Dodds. And then we have our awesome guests, AndrÇ Staltz.

    ANDRE: Hello folks, that's me.

    KENT:  And Ben Lesh.

    BEN: Hey everybody.

    KENT: And Matthew Podwysocki.

    MATTHEW: Privyet.

    KENT: Did I say your name correctly? I practiced.

    MATTHEW: Eh, close enough. (laughs)

    KENT: (laughs) okay, you can correct me here in a second. So why don't we get a quick introduction to each of our guests before we get into our subject. So AndrÇ, why don't you give us a second, introduce yourself.

    ANDRE: So, I basically, hm... I'm, like, a JavaScript programmer for a while, and I first learned reactive programming through RxJava, so I have also done Android programming. So that's how I got introduced to Rx, and then I started applying that to RxJS. And been an addict to that since, well, probably two years, and I wrote this introduction to reactive programming. It's kind of this gist blog. And that's basically, like, in a nutshell.

    KENT: Cool, thanks, Ben?

    BEN: Let's see. My introduction to reactive programming was here at Netflix, I'm a senior UI engineer at Netflix on the edge developer experience team. And I'm also the project lead for RxJS 5.

    KENT: Sweet, and we were just joined by another panelist, really quick, Iheanyi Ekechukwu, could you, I think I said your name right. (laughs) You can correct me if I'm wrong. (laughs) Alright, so, Matt, why don't we get an intro to you?

    MATTHEW: So, I'm Matt. Let's see, I've been working on reactive extensions in some form or fashion since about 2009, culminating in working on the reactive extensions for .NET and then reporting it over to JavaScript, about 2010. And then we open sourced everything, thankfully, in 2012. And pretty much have been on point looking at reactive paradigms, pretty much since the beginning, working on both the observable side of things as well as the async enumerable or async iterable side of things. So pretty much, for the past seven years, this has been kind of my life, along with IOT related things, as well as others.

    KENT: Cool, IOT. Maybe we should've had you on our show for next week.

    MATTHEW: Yeah, so I, I actually gave a presentation last week on Tali, which is the peer to peer mesh networking that you can put on your phones, which basically runs node on iOS and Android to do peer networking.

    KENT: Very cool. Awesome. So, thank you all for introducing yourselves. Matt, as part of your intro, you mentioned something about a paradigm, and I think that's a good way to kick off your discussion, we're talking about reactive programming, which is a programming paradigm. I'm gonna go try and put my son to bed, but if you guys could start out (laughs) chatting about what a reactive, or what a programming paradigm is, and what is, like, how reactive programming fits into that.

    MATTHEW: Okay. Well, I mean, I'll start off, as, to me, a paradigm is a way of thinking and a way of describing a certain set of features, as it were. To me, that boils down to a paradigm. So, you know, you can think of interactive, or imperative as a paradigm. You can think of object oriented programming as a paradigm. You can think of reactive programming as a paradigm. That to me, just kind of sets its practices, its rules, it's basically a whole framing for discussion around a particular topic. And what that means down to reactive programming is, you know, kind of fuzzy as it were, because, you know, reactive simply to me means reacting to a band sourced or particular stimulus of some sort. And certainly, we've been doing that since the very beginning of JavaScript, so you know, since we could do, listen to an event, and so we could create those wacky mouse trails back in the DHTML days.

    But something there was fundamentally missing in terms of a way of describing things and a way of composing things that we just didn't have before, that led us to where we are today. Because, you know, just listening to events isn't quite enough, I think, to fully describe what reactive is, because I think it boils down to a few other things, such as reacting to users, you know, that you're giving them incremental input, or incremental output, as it were. You're reacting to load in some form or fashion, you know, whether it's debouncing, whether it's throttling, some sort of back pressure, you're dealing with some sort of load. And reacting to failure, how exactly if, for example, you're listening to a stream of events and suddenly you get disconnected from your data source, what exactly happens? Is there a retry scenario, is there a reconnect scenario, is there a give up, and those kinds of scenarios as well that fall into what reactive programming is.

    PAM: Let me help you there. That's a lot. (laughs)

    MATTHEW: Yeah, it is.

    PAM: I kind of, you know what I, so if we were to give it as, like, a short version and/or what I more so wanna ask is to ask the rest of the people on the show, is there somewhere where you disagree with Matthew's characterization?

    ANDRE: I basically started agreeing with you because you started saying that it's a way of programming or a style of programming. It's actually quite curious, well, you've been working a lot with Eric Meyer. Eric once told me that it's not a paradigm, well, referring to Rx, that it's not a paradigm, that he thinks of it as...

    PAM: Rx as a library or...

    ANDRE: Yeah.

    PAM: Okay, so that Rx the library is not a paradigm. (laughs)

    ANDRE: Well, that's what Eric Meyer says, but I would call it a paradigm, you know. But I'm just curious, do you know or do you remember, Matt, why did he say it's not a paradigm?

    MATTHEW: He was more interested in saying it was kind of a language or the main, specific language for how we describe reactive programming. You know, it's something that we saw was platform independent, that we could easily apply to JavaScript, to .NET, C++, to Python, to Ruby, et cetera. That it was kind of agnostic language, as it were. For, yeah.

    ANDRE: Language across languages.

    MATTHEW: Yeah. Exactly.

    ANDRE: Yeah.

    MATTHEW: Which could boil down to a paradigm (mumbles).

    BEN: When I think of a paradigm, I think of something that kind of takes over your application development, like it's something that is everywhere. And I think some people do use reactive programming in that way, but it's certainly not, you don't have to, like you can mix and match reactive programming and imperative programming -- for better or worse, but.

    ANDRE: Yeah, you can definitely do that. But still, like, if you take the description of what you just said was a paradigm, like, and compare that with a framework, you know, framework takes over your whole application and how to build stuff, it's basically what the framework dictates, isn't it? So, like, I don't know, it's really. I don't know.

    PAM: The language part of it gets really complicated, yeah.

    BEN: It's fuzzy.

    BRIAN: I think that it guides composability, like if you're gonna be functional the whole time, it'll help you compose, if you're gonna be object oriented the whole time, it'll help you plug everything together. So, it's kind of a subset of programming that helps you compose.

    MATTHEW: Yep. Yeah, that's pretty much it. I mean, there's nothing that we ever described when we created it, that we're like, this never was intended to become your entire paradigm, you could use it where you need it, you could decide to use your whole application for whatever you need. But what it was really designed for, at least for us, initially, internally, was more along the lines of bridging to everything. So bridging to events, bridging to your particular library, bridging to events, to async, to whatever. So it was building bridges for people to onboard themselves onto more of a reactive programming, but it was never-

    ANDRE: That's probably why Eric Meyer called it, like, an API...

    MATTHEW: Yep.

    ANDRE: Because it's able to phase between stuff.

    MATTHEW: Yeah, it's a bridge layer, it's an API, it's everything, yep.

    ANDRE: Yeah.

    KYLE: I'd like to posit something and see whether the guests would agree with this or not. But if I were to try to characterize what is and is not a paradigm here, to me, the paradigm is slightly bigger than just reactive, because reactive is kind of one quadrant of that four quadrant thing. And I think maybe we could try to describe paradigm as understanding those four quadrants, and what they mean to asynchronous programming. And reactive, then, is one part of that overall paradigm of understanding the difference between single versus multiple and push versus pull, that's the axes that are at play in that quadrant, so.

    BEN: Actually, I agree, I agree with that.

    ANDRE: We're starting to go to the topic of what is reactive programming. And I, well, I do understand the definition of you know, the quadrant there, the observable fits there but I do think that reactive programming is much more wider than that. And it includes stuff like spreadsheets, spreadsheets are really reactive, they've always been. And how can we have a definition that encompasses that as well, you know.

    BEN: Right, and you've got reactive programming in the form of, like, Ember's computed properties, for example, which are, they notify down that something has changed, but they don't actually process all the changes until you pull, so it just pushes a notification, then you have to pull to actually map values and compute properties and that sort of thing. But that's still, I mean, that's still reactive programming, it's just a different flavor of it.

    MATTHEW: Sure. And when you look at the quadrant, what you're really looking at is kind of, you know, that promise being of single value async, and then observable being the other aspect of a push-based notification for multiple values. What you could also put in there, you know, things like async generators, you could put in async iterators, whatever it is. But, for that particular thing there, at least, it's push versus pull, single and... single and multiple in that particular way that we usually talk about it. But if we talk about it strictly async and sync, then we've gotta add in an async iterable and everything else.

    KYLE: I just wanted to clarify what Matt was just saying, so, are you suggesting that reactive programming is more than just what most people think of, which is the observable, that it includes these other sorts of patterns as well? And if so, can you explain, maybe, just a very high level, what the differences are? Because some of us may have an intuition, a little bit of an intuition about what an observable is, but async generators, for example, might be much more foreign.

    MATTHEW: Yeah, to give you an idea of what reactive programming is, and you know, it goes back to that whole thing of being a language to describe dealing with users, dealing with load, dealing with... you know, failure, et cetera. But when you boil it down to something else, if you're boiling it down just to the observable interface, then, that's, you know, pretty much what you have there is a way for you, you can describe a consumer and a producer -- the consumer being the observer and the producer being the observable. And then you have this contract in between them, which is this subscription, as it were, and that subscription then you can use to compose for the run down the chain. Now, async generators, you know, are a totally different thing, in terms of how you can, you know, next whenever you want to kind of thing. Or yield, rather, whenever you want to. Which is a fairly open paradigm as to how you would do it, because, you know, there are plenty of libraries out there using async generators, you know, co being one of them, god knows how many others. I'm sure asynquence, your stuff, does it as well. So what we try to do is just kind of break it down as to improving the existing subject observer pattern, and adapting it there for a single way of describing events, asynchronous data, et cetera.

    BEN: So, I would say that, in my mind, reactive programming is, really, any sort of event-driven programming in which an event triggers an update to something and that update can be processed in individual steps. So, if you can, if you can compose a bunch of individual steps and then have some event trigger to actually execute those individual steps, say, with Ember, which is completely different than observables, then that is more reactive programming. I think you could get into doing reactive programming similar, in a similar fashion with, like, CSP, but that's so imperative that the steps kind of get munched together. And so I would say that's a little bit less reactive. It's still very event-driven, however, but, I think the two biggest pieces are that, the composable steps, and having an event kick off executing those composable steps.

    ANDRE: Yeah, I'm thinkIng more on the lines that, what Ben just said, but, like, I'd like to abstract it a bit more and I also see callbacks, like, traditional callback API as reactive. And that kind of, that's because it's the opposite of having remote changes. And it, it's basically like if you have a class or a file A that's changing B, so like, it may, remotely, set something in B, right? So then that's like typical imperative style, but if you have the opposite, where B is just registering that I'm interested in something that happens in A, and I will change myself, so B changes itself, then I call that reactive because then A is sort of unaware that it needs to set something in B, but it just broadcasts that, "Hey, here's something that anyone can do with it's an event or something." And you could do that with events and callbacks.

    KYLE: So by that definition, Pub/Sub, the old school key word, that would be reactive programming.

    ANDRE: In my opinion, yes.

    BRIAN: Well that, that brings up a question: if everything is, like, all these things are reactive, you have, like, observables and generators and 20 different flavors of async, is there any good, real life, like, subset that you feel will make your application more simple? Like, I know how generators can send stuff back and forth and you might need that power, but streams kind of just give this simple data flow through your app, and, I would just, my question is in real world examples, is there a strict subset that you would suggest to stick to?

    BEN: I mean, I think that, say, observables and Rx could cover 95% of use cases, CSP and transducers could cover 95% of use cases. But it's really, I mean, I think it goes down to what you're more comfortable with. I know I've had conversations with Kyle, and Kyle's more comfortable with the more, the slightly more imperative style, like the generators and the async await and that sort of thing, is that correct, Kyle? Than say, like, observables where, there's very much, like, domain-specific language to observables that you have to learn. So you're like, you're learning JavaScript and then you also have to learn what a flat map is, and, you know, what a switch is, and all these other, like, keywords, essentially, that you're adding in, so... I mean, what's best-

    PAM: And I actually, I wanna argue with you about that for a second. (laughs)

    BEN: Okay, good.

    PAM: So, because, I don't think those are observable things, I think those are list operations.

    ANDRE: Yeah, there's a light, functional collection API.

    MATTHEW: Well, it's a monadic operation, yes, we're-

    ANDRE: Oh, there we go.

    (laughter)

    PAM: How many minutes are we in before the word monad was used?

    (laughter)

    PAM: No, but it's, 'cause actually, I might wanna steal this to talk about this idea, but in terms of the, like, if everything gets reacted, is everything reactive? And actually, at the beginning, when Matt was talking about, well, we do reactive things because we add event listeners, but like, you know, if you just add a click handler, is that reactive programming? And I think most people would say no. Kyle, you have thoughts?

    KYLE: So I... Just to kind of circle back a little bit to what Ben was just asking or clarifying. So a lot of people that follow my thoughts on the subject know that I sort of try to preach a middle of the road perspective on mixing different parts of these paradigms or patterns or whatever we call them together. The part that bothers me about the Rx or the reactive API, I think that's what we settled on calling it, it's an API. The part that bothers me about it is that it really swings the pendulum very far, similar to things like jQuery, for example, where every single method in a method chain implies a loop that's happening, to repeat the thing over and over again. So it is asserted that that is very declarative because if I call flat map, I know it's gonna do that every single time a new value comes through. I like the idea that those methods exist. So I don't have a problem with the fact that there's a common operation called flat map and we can have a vocabulary to describe that particular operation separate from other operations.

    The part that bothers me a little bit is when we swing so far to that side that looking at a piece of code, it's not terribly obvious unless I think about implementation, that there's actually a loop happening inside of each one. I've seen that same confusion play out for more than a decade now with jQuery, and that's the same concern that I have, where we're kind of bringing a whole new school of people, or a whole new generation of people into this reactive programming world. I don't want people to not think about what's actually happening. So if you were to take the operations out of the chaining API, it's the chaining API that I have a concern with, not the operations.

    BEN: I don't, I mean I wouldn't say that, like, flat map and Rxs is looping...

    ANDRE: Yeah, I wouldn't say it's looping either.

    PAM: Well, I think, Kyle let me take a guess at what you're saying is that because you create an observable and so every time something new is pushed into the stream, that operation then happens on that. So in that way it is loopy. Is that what you're getting at?

    KYLE: Yeah, I didn't mean a literal while loop in something.

    PAM: Right, right.

    ANDRE: Okay.

    PAM: But like, that you're, you have implied that future work will be done, and that might not necessarily be clear from the way it's written.

    ANDRE: Yeah. Well-

    KYLE: And certain types of operations are more than just a one to one transformation. There are certain types of operations that are stateful, like for example, distinct and things like that. Again, those operations are useful, but it's not clear to me when I put a method in the middle of a chain that it's obvious that there are more things than just that function got called again. That's the part that kinda worries me about understandable.

    ANDRE: Well, in my opinion, it's creating, like, a pipeline of stuff, you know, it's creating, like, if you actually think of pipes, you have this type of pipe, and that type of pipe, and you know, when something comes in, an event, literally comes in, then it's gonna be processed in a different way. And that is really dataflow without a space between data and flow, there's actually a term like that.

    PAM: Yeah.

    ANDRE: And it's useful, you know, it's like, you get like an actual... So, when you read that chain that you don't like, you know, you get to see the pipeline of how does this event come in and how does it come out, you know and how do these processing steps go. And each of these processing steps is just a single line of code. In my opinion, that's, like, genius.

    KYLE: So my analog to this is, if we step out of the multi value world back into the single value world, still async, there is a comparison that can be made between a promise chain, where we have all of the steps declared as callbacks to then methods in a chain, versus that same chain unwound into the async await/generator yield pattern, where the statements are synchronous. My argument is that those two are isomorphic of each other, in that they are both equally declarative. One of them has the overhead of understanding method calls and translating error handling into an asynchronous paradigm and one of them has the benefit of keeping it in a synchronous paradigm. But I would maintain that both of those are equally declarative in that you can clearly see the steps and that flow that you're talking about.

    ANDRE: Yeah!

    KYLE: We should take that mindset and apply it to observables as a chain, versus what is the equivalent of that, it's that thing that I'm searching for, the equivalent declarative set that doesn't rely upon the chain, that's really my question.

    ANDRE: Yeah, I totally get what you're saying when it comes to promises and async await, like, that's really clear. And I think I agree with you, I don't like the then, like, stuff, it's kind of complicated. But, when it comes to things like observables, I don't actually know how would you do a flat map in a async await style that would be... sort of clear what you're doing there, you know, like, does anyone have any idea?

    BEN: Yeah, I don't know how you'd be able to accomplish the same thing there either. I think that one thing that we're kind of skipping over about, whenever he was talking about, say, distinct, or you know, buffer, these other operators that you'd find in RxJS, one important distinction that you have when you've got these chained operators is that each... anything that's actually doing anything with state, that state is managed and contained within that one operation. Like, it's not, it's basically impossible to spread that state across multiple operations unless you're closing over some external state. Where when you're dealing with, you know, your async awaits, or your generators, it's very easy, actually, to transfer state from one step to the next even though those things are happening asynchronously, because it's all kind of in one function body.

    And there's other weird things that come with that too, like if you put a generator on a class, for example, or call it just right, this context gets carried throughout the lifetime of that generator and if, you know, this happens to have some huge array of things on it, then it could result in some sort of weird memory leak. So it's, it's one of those things, like, I tweeted the other day, like, if you think that you found the perfect async paradigm, you're probably dead wrong. (laughs) Like, there's no way there's, there's definitely foot-guns and bugbears about every single async type I can think of. And, you know, I think Kyle is onto something about where some of the, you know, I think some of the confusion lies around RxJS is, like, "here's the stateless thing, here's the stateless thing, oh this one here has some state." But, it's important to remember that if there is state in operation, it's contained in that operation and it doesn't leak out. So...

    ANDRE: And also, you know, if a state that's managed for you and you don't need to worry about it, it's basically invisible state that, you know, it's harmless, you don't need to care about it, it's just working for you instead of you working for it, you know?

    KYLE: Yeah, I'm gonna totally disagree with that.

    ANDRE: Okay.

    KYLE: You don't get to not think about it and understand what you're doing. My take is that it's dangerous to simply drop in a method because I saw it working on Stack Overflow and the end result gave me what I think I want and I'm not understanding how it works, so. You don't have to write your own Rx, but I do think having an intuition of each of those operators

    ANDRE: Yeah, so-

    KYLE: Which, you know, things like RxMarbles.com is a great way to get there, but.

    ANDRE: Yeah.

    KYLE: You should have an intuition about each of those operators and what they do.

    ANDRE: Yeah, so flat map is actually map and flatten. There you go, you know. I don't think with that description we need to go into how does it actually work with the state and the variables inside, you know, it's really flat. I mean, map, and then flatten. So, what you're doing is, like, you're mapping to something higher order, then you get this weird, crazy tree, and then you just flatten that. So, that's flat map. I mean.

    BRIAN: I think that you know, the argument that you wouldn't want to use something if you don't have a solid understanding of what it's doing, I mean, that could be made for people that don't quite understand async await, that could be made for people that don't quite understand like, filter, map, and reduce on arrays, or lodash, or any number of things, so. I think that, I mean, I really do view, like, I think that there's a lot of operators in Rx, and you're right, people shouldn't just be like, "Oh, that worked on Stack Overflow, I'm gonna use it." They should understand it, but, I mean, there's, again, it's a whole domain-specific language around managing asynchrony in chains, and I think that it's important to understand the pieces of those language before you use them, like you say, but there's a learning curve to it. And that's, I mean, that's the downside, really.

    BRIAN: I just wanted to throw in there that I think people find it difficult to build these chains up, much like, it's a lot like writing sql. You mentioned spreadsheets earlier, it's like a set theory based kind of like, composable API that gives you a lot of abstraction or implementation underneath, so you shouldn't really care about the implementation underneath, but it's difficult. So do you have any... this is my last question, I'll wait for other people, but does anybody have guidance for people struggling to write these long, pipeline-based chain expressions? Because it's easier for them to just drop out and manipulate a value, or something like that?

    ANDRE: As, like, a quick guideline, I could say that you should write down what you have as an input, and write down what you want as an output. And, you know, usually what you have as an input is something like, you know, clicks, or responses, and those things happen over time, so they're an observable, and then you need, you know that you need to have, like, a stream of let's say, you know, a text that's evolving over time, so that's a stream of strings, and then you know, "okay, I need to get from here to there." That's like, your basic, that helps you to know a lot, what you need to do. And then you need to discover the intermediate steps between that. Then you get a pipeline.

    MATTHEW: You're absolutely right, and, you know, it's kind of like going back to the old UML flow diagrams or, you know, as we came up with these Marble diagrams, this way of describing our, what we take from our input and how we expect our output to look in some form or fashion. And what we also kind of encourage people to do is treat things like these operations, each as a Lego block unto itself. Now this Lego block that you could take and you could, you know, continue to build onto it or you can use it to feed as input to others. If you treat it as, you know, small, reusable components, that's great. If you're worried about, you know, 14, 15 operations in a row, you know, just composing that. It gets a lot trickier when you think about doing it that way. That's why I like, like I said, I like to white board, and I kinda like to, you know, to draw out what is my input and what is my expected output, and what kind of Lego blocks do I need in order to... in order to move it along.

    PAM: One thing, so was that the first mention of Marbles in the show?

    ANDRE: Yeah, it was. Or maybe the second.

    PAM: So, just to clarify, because if it wasn't mentioned, I was totally gonna steal it as my pick for the show, but AndrÇ made this awesome project, RxMarbles, that has some visuals to help people understand all these, you know, methods that are used in the Rx libraries and, you know, other libraries like Rx, so it's RxMarbles.com.

    BEN: AndrÇ actually carried that idea over to Rx 5 integration tests, too. I got to implement it, which I'm excited about, 'cause it was fun to implement, but.

    ANDRE: Yeah, you did it first. I wanted to do it, but you did it.

    BEN: I stole it. (laughs) But yeah, basically you can go and you can look at unit tests for various operators and get a fairly solid idea, visually, of what those operators are doing, so. It's pretty cool.

    ANDRE: Yeah, and, yeah. So, for who doesn't know, like Ben and I, we maintain RxJS version 5 and Matt maintains RxJS version 4.

    BEN: Matt is the creator of RxJS-

    ANDRE: Yes, he's, he's like, super special.

    MATTHEW: (laughs) Well, you know, it's more along the lines of, you know, people are, "Oh my god, there's a split." Not really, I mean, when you get down to it, the language is still relatively the same. And I don't see myself as a maintainer of x or y version, I'm more along the lines of, say, that I've been involved in the very beginning. I intended to stay involved, but right now, obviously, we have a lot of people that are using 4 and continue to wanna use 4 for its semantics that are different. And not every operator is there yet for 5, so what do we have to do, well, we have to continue to maintain what we have as the legacy so that I don't see us going away anytime in the relative near future, but I would certainly nudge people more towards 5 in the future. But there are certain things, certain experiments that we did that'll probably not go forward, you know, whether the back pressure things that we did were right or wrong, whether people want that or not, it's any number of those kinds of things. And I've got a number of experiments that I'm still doing in terms of state management and so forth to make it look and feel and act like a much more a natural part of react than it is right now. So I've got, you know, a ton of things going there, as well as working on, helping on the observable spec, and helping on async iterator, which I think is a nice dual to observable in a way that, you know, the last thing you'd wanna do is read a file contents and have it all shoved at you at full speed, the idea that you can pull incrementally, asynchronously, is a very big deal.

    KYLE: So, I wanted to, I think we'd be remiss as a show if we didn't, we're kinda doing it backwards, but we should give, I think, a very simple, conceptual, almost metaphorical foundation for what an observable is, since that really is kind of the meat of reactive programming, wrapping your brain around it. So it's not only an API with methods and operators which we kind of describe, and thinking about that as a pipe in plumbing where, you know, the different elbow joints in the pipe are these different operators, that's one way of thinking about it. I'm also, it's very common to be described as a spreadsheet, and I think AndrÇ kinda briefly mentioned that earlier, so I'd like somebody to-

    ANDRE: Yeah.

    KYLE: So I think we need to do that. I personally wrap all of this up, and I know this is gonna sound silly, but I wrap all of this up like the Willy Wonka candy machine, if anybody remembers from Willy Wonka, where like, a whole bunch of stuff happens, so one things comes in, a whole bunch of stuff happens, and on the other side something comes out.

    ANDRE: Yeah.

    KYLE: That's kind of what I think of it, a very high level, but we should explain these lower level conceptuals.

    BEN: You should really update the Wikipedia article for monad with that exact explanation.

    BRIAN: (laughs)

    ANDRE: So let me explain this spreadsheet thing. When I said that, you know, there's A and B and stuff, in imperative programming and the classical type, you know, if A is a module or a file that changes B, then A has inside itself that definition saying, "I will change B." Now if you look at spreadsheets, if you have a formula B1, I mean, if I have a cell with, cell B1 with a formula, and you have cell A1, then the formula is defined in B1, and it says, you know, let's say B1 equals A1 times 10. So the definition of that dependency happens in cell B1, while A1, if you look at it, you just see a number there, and you're like, "So what?" It doesn't look like, you know, this is changing anything else. So that's why spreadsheets, you know, when A changes, B will change automatically, but that dependency was defined in B. So B is sort of owning that dependency of how is change propagated, whereas with imperative programming, you would have to define when this cell A changes, they have to go and change B as well, and B would be like passively waiting there, you know?

    KYLE: Is it fair to say, then, that one of the characteristics of this reactive paradigm or way of thinking or whatever we call it is that it's a declarative way of separating producer from consumer, and deciding the consumer is this set of steps and the producer is this set of steps and the relationship between them is like the relationship between those two cells.

    ANDRE: Yeah, so the relationship is defined in the consumer, you could say. The relationship of change, especially.

    BEN: Right, right. Yeah, it decouples the producers from the consumers, in a way. So if you were to look at, like, if you were to see some imperative code that was to say, you just found a random line of code and it was like, var C = A + B, you could assume that A and B were updated at some point above there because some event was triggered and A and B had to be updated- either A or B had to be updated. If you were to have an observable of A and an observable of B, you could then create C by having, like, a scan over those things and adding them together. And the interesting part about that is, now you no longer, like, C no longer cares what updated A or B, it's been decoupled from that. It only cares that it has a stream of A and a stream of B. So, in that regard, reactive programming is kind of isolating each one of those steps. So at any point, you could go and say, "Well, my stream of A is now coming from a web socket," or, "It's coming from mouse movements," and you can just change it out up above.

    MATTHEW: Yeah, I mean if you go back to the original subject-observer pattern, it's not much different than, say, the DOM level 3 events where you have out of EventListener, remove EventListener. The problem is is that the producer suddenly has to know about all of its, all of its observers, which definitely is not the case with observables in the way that we've done it. And so much so that they're nicely decoupled and so forth, that kind of, that contract between the two is that subscription that we have that kind of ties them together. That's really one of the key differentiations that we came up with.

    ANDRE: Yeah, so, I was kind of excited as well to explain observable, it's always this exciting thing. But anyway, it's kind of like... a problem is that people think that subscribe is like add EventListener, and it's really not, because as Matt just said, you know, it doesn't have a list of observers. So subscribe is more like invoke or call, where basically you give a set of three callbacks, next, error, and complete, and you say, "Hey, give me a bunch of values happening over time and deliver them on these three callbacks." And then the subscription represents that executioning happening over time. So if you say again, subscribe, then you're basically saying, "Hey, give me more values, again, on those three callbacks." So, it's like, that's how people get, you know, confused a lot with cold and hot. It starts with knowing that subscribe is basically an invoke, it's not like an add EventListener.

    BEN: So one of the ways I've been explaining observables to people so people don't get confused about, you know, hot or cold or whether or not there's a list of observers underneath. An observable is really nothing more than a function that takes an observer and then returns some cancellation semantic. So anything that could happen inside the body of a function that you gave an observer to could happen in an observable. So maybe it is, you know, subscribing to a subject inside that does keep a list of observers, or... I mean, basically the idea is you call a function with an observer and then you tie that observer in some way to some producer and push values out through that observer.

    MATTHEW: I would describe it, instead of cancellation, I would describe it more as the, the creation and teardown semantics, you know, the creation. If we were to liken it to the add EventListener, the creation would be the add EventListener, the observing would be that handler, and then the teardown semantics would be the remove EventListener. So kind of, you have the whole life cycle, you have this, the creation, the observing, and the unsubscription, as it were.

    BEN: Right, right. But the subscribe behaves like a function, 'cause it-

    MATTHEW: It does, yes.

    ANDRE: Yeah, I mean the most raw version of an observable would be, basically a callback that can be called multiple times. But you have some kind of cancellation mechanism there, if you wanna cancel that thing, kind of.

    MATTHEW: Yeah.

    ANDRE: Did that just make it worse, or? (laughs)

    MATTHEW: No, no, I mean, cancellation is fine, to say it that way, but I'm more along the lines of, say, build up and tear down kind of thing, because cancellation is such a red herring, that means so many things to different people. You know, the "kill it with fire" versus "I don't care about this result anymore."

    ANDRE: Yeah

    MATTHEW: So that's why I say tear down is a lot more semantically pleasing, at least.

    ANDRE: Yeah, or start and stop.

    MATTHEW: Yep, start and stop, yep.

    KENT: Cool, wow, I'm going to have to listen to this another two or three times to really have everything sink in, I think. (laughs) But the conversation's been really awesome. We do have several questions on Twitter that I'd like to get to, but is there anything else in particular before we get into questions and tips and picks that anybody else wants to really quickly talk about?

    MATTHEW: Oh, by the way, we just open sourced our contribution of bringing React Native to Windows, so yay!

    KENT: Wow. Congratulations, Microsoft. Very cool.

    MATTHEW: Thank you, thank you.

    KENT: We should put that in the links for the show notes. Cool, let's get into the Q&A from Twitter. So I won't be able to get all of these, sorry, but I'll get most of them. I'm going to say your name wrong, again. It's Jereon Engels. Yeah, that's probably wrong. I keep saying it wrong. "I know about Cycle.js to use RP on the front-end, but what about back-end? What good tools exist? Anything Express-like for this kind of environment?"

    ANDRE: I'll defer that one to Ben.

    BEN: (laughs) To me? (laughs) I believe I've seen Rx Express implemented. I would, I'd go look under Paul Taylor's GitHub profile, he's probably got something under there. I have to say that, you know, at Netflix, most of what we do with reactive programming in the back-end is generally, RxJava related. I think that there is some RxJS in some of our node services but I don't think that there's anything where what I assume the asker's asking for, like, you know, "Give me a stream of requests and I'll filter that out myself." I'm sure it exists, it would not be hard to roll your own, but I don't know of any offhand that are very popular.

    MATTHEW: I would definitely look at anything on npm that's directly linked to Rx that way. I mean there are a ton of things like there's Rx router, there's Rx middle where I've seen so many of these. Gleb Bahmutov actually has a pretty good blog post about bringing the, bringing the Rx to the server. Because what you're dealing with is you're dealing with rate limiting, you're dealing with all of these things that I talked about earlier, which is, you know, reacting to load, reacting to failure, et cetera. He covers perfectly in that blog post. And so there're a number of other things like, people have Redis, and other database wrappers as well. So basically you can treat all other inputs and outputs as observables. And one that's out there that actually has their, their queries are observable. So they literally say observable with some string, and suddenly, that becomes kind of a two-way listener for going back and forth in terms of data updates and so forth. There are just so, so many ways that you can use node and Rx together.

    KENT: Awesome. So, like I said, we're not gonna get to all of these, but I think we'll get one more Twitter question from Vincent O, and he says, "One of the pain points of Rx and reactive programming is debugging. Do you see better debugging tools arriving?" And he also says, "P.S. Go Cycle.js."

    MATTHEW: (laughs)

    BEN: Better debugging tools, there is, I bring this up every time someone mentions it...

    ANDRE: Yeah. Please build that. Please.

    BEN: Yeah, I know. There's a backburner project on my team here at Netflix which meant for debugging RxJava. However, the structures are so similar that the idea is it actually logs out what's happening inside of your observable chain, and then we're gonna try to visualize that, and provide that in some sort of way where you can click on it and go to specific lines of code, or, just something so it crosses the async boundaries and still links those things together. So, I know that there's plans for one, but I can't tell you when it's gonna get done.

    MATTHEW: We certainly have the long stack trace support and that wave four and the fact that you could basically then cut out all of the Rx specific code and then go back to where in userland it happened to have gone wrong. There's also been, like, Rx Visualization or Rx, I think it's called Rx Visualization...

    ANDRE: Yeah, there's one thing.

    MATTHEW: ...where you paste in some code and it'll literally, on the fly, just create a marble diagram for exactly what it's trying to do. So all of those kinds of things, in addition to adding due and things like that, due to be able to basically, you know, intercept at each individual point, I think it was very useful. You know, can we easily collapse a stack? Probably. And we'll get there.

    KENT: Cool.

    BEN: So, maybe it'll be a matter of taking that constantly punted Rx debugger project, like, the notes from Netflix and actually, like, pushing it to open source and hoping for contribution. So, that might push it through a little faster.

    ANDRE: Yeah. Should do that.

    MATTHEW: Yeah, especially as Angular 2 comes out there, you know, that's probably going to be one of the number on features that people are gonna want.

    KENT: Very cool. Alright. I'm sad that we didn't get to the rest of these questions, so if you all could go to Twitter, and just look at the hashtag #jsAirQuestion, that would be great. Especially Ken Wheeler's, I think his is really important. (laughs)

    BEN: You know, I am sad that Dan Ambramov didn't ask me the difference between RxJS and Redux.

    (laughter)

    BEN: Like, every public appearance I've ever made, like, somebody asked me that question.

    (laughter)

    MATTHEW: Scam! Scam!

    BEN: One, just so everyone knows, one has way less water fowl, that's the difference.

    MATTHEW: Womp womp.

    BEN: Someone's got less ducks.

    KENT: (laughs) Okay. Great! (laughs) So let's go ahead and we'll get to our tips and picks. I did a poll recently, and asked if people wanna keep having us do the tips and picks. And overwhelmingly, people love tips and picks, so this is great. We'll go ahead and start with the panelists, then I'll go, and then we'll have our guests go. So Brian, why don't we have you go first?

    BRIAN: Sure, let me just look at them. (laughs) So real quick, like, I linked to the Egghead series on RxJS, there's a bunch of stuff there. I also linked to Highland and Most, two libraries that you might wanna check out if you're doing streams. And then I said, check out the- favor the laziness if you can, try not to cheat while you're building up expressions, these are my tips. And normalization helps composability, so try not to mix all the different types of reactive things together, 'cause you won't be able to compose them very well. And I just also linked to a tweetstorm that was about LambdaConf. 'Cause oh my gosh, that is a massive failure and not at functional programmers are racist, just throwing that out there! Alright, movin' on.

    KENT: Thanks for calling that out. Alright, Dan, why don't we have you go next?

    DAN: So, I have two links today, two picks. The first pick is a library called MobX. So this is actually kind of relevant to today's topic because it's a reactive library, but not reactive in a sense of, like, observables, but reactive in the sense of spreadsheet, like, computative properties. It can be used as a data layer for React or other apps. And it's, like, crazy fast, because it knows exactly what you depend on, so if you have some straight, your component depends on it, if you have, like, a giant read and only one item changes, it's going to rerender just that item. So it's really cool, and some people like it more than Redux because it, you don't have to think as much about structure and you'll see it in an optimal way. So MobX is my pick.

    And my second pick is just a link with pull requests I sent to, as part of comparison between MobX and Redux performance. So in Redux, it really matters how you structure your state to get optimal performance. And I'm linking to some pull requests that show how normalization, separating the IDs from entities in your state can give you much better performance, like, 10 time improvements. So, check it out.

    KENT: Oh, yeah. I'll probably check that out, sweet. Kyle?

    KYLE: So, to piggyback off of a very quick mention Ben threw in earlier, some people that follow me know that I have a library called asynquence, and I have a reduction... conceptual adaptation of reactive programming in my library and it's called reactive sequences. So if anybody's looking for another perspective on it, or way to play around with it, you can check that out.

    And then, it was kind of mentioned, and I wish we'd talked more about, like, the learning side of it, because there's a ton of new stuff we just threw at our listeners and the learning part is really difficult. There's several great resources that've already been mentioned like the RxMarbles and so forth. But I would just throw out a mention of another resource that I put out, so it's, and that's not the first time I've even mentioned it on this podcast before, but kind of like to do MVC compares coding patterns for a to do app, I created a little application to create a comparison, side by side comparison of coding for some asynchronous tasks. And that is called A Tale of Three Lists. That's up on a GitHub repo. And I implemented the code seven different times using seven different variations from callbacks all the way through reactive and even CSP and stuff like that. So, I would love to have more contributions with other people chiming in and either improving, or whatever, but I think it's a place where you can kinda start looking at a code base and understanding the relative pros and cons of promises versus observables versus other things, so.

    MATTHEW: How do you feel about cancellation? (laughs)

    KYLE: Oh, come on, that's its own podcast altogether. (laughs)

    ANDRE: Let's cancel that question. (laughs)

    KENT: Well, that's the fun-

    BEN: I think we should get people drinking before that podcast too, just so they really tell ya.

    KENT: (laughs) That's the fun part of having this be a live show, is we can't cancel that comment, so. (laughs) Cool, Pam, you're next. Am I the only one who can't hear Pam?

    ANDRE: I can't hear her.

    KENT: Sad! I'll go next and then we'll try again, Pam. So for my tip, if you're feeling overwhelmed, make a to do list and focus on one task at a time. That's a valuable skill. I also pick my son, Adam, because he's great. (laughs) And he's causing some trouble for me now.

    Aphrodite is this open source library thats mantra is "It's inline styles, but they work!" And it's really good. Autocomplete-emojis, this is a package for Atom that is awesome. And I have a link to some stuff that I used for my Egghead.io lessons, recording those, so. Check those out. Pam, can we hear you know?

    PAM: I don't know, can you?

    MATTHEW: Yes, yes we can.

    PAM: Cool. Okay, so, I'm picking something that we mentioned, we alluded to in the podcast, but we, I don't think we explained it, and so I'm picking FantasyLand as my pick since, if you don't see the video, there's a facepalm going on, I think? (laughs) But I actually found it really useful. If you are interested in these things, like monoids and monads and stuff like that and you want, like, somewhere where it explains it, this is a place for that. And the story behind FantasyLand is funny is because Brian McKenna is the owner of this, and it was... he said, "I wanna do this kinda algebraic datatypes in JavaScript." And someone said, "You're living in a fantasy land, Brian." And so he wrote FantasyLand. And so that is how FantasyLand exists. And I think it's a really good resource for learning those algebraic datatypes.

    BEN: Yeah. The thread that started it is pretty good.

    ANDRE: Yeah, it's epic.

    PAM: Oh, if you know where it is on the internet, I don't think I've actually seen that.

    MATTHEW: It's in the promises, it was on part of the promises specification.

    PAM: If anyone digs it up, definitely drop it in the links.

    MATTHEW: Yeah.

    KYLE: I'm pretty sure it's in the Promises/A+ repo.

    MATTHEW: Yeah, it was complaining about (mumbles) are not monadic, so.

    KENT: Yikes, I'll stay away from the conver- no, just kidding. No, I'm sure it's very interesting. (laughs) Cool, AndrÇ, why don't we have you go next?

    ANDRE: Okay, I have two links or picks, and one of them is CycleConf.com. Next week we're gonna have the first, well, it's not really like, conference scale, it's more like a meet up, but... So I would recommend that people follow the hashtag, #CycleConf, that we're gonna use, because I'm gonna release this surprise. And Ben is the only one that knows the surprise, but it's a, it's a surprise that would be highly relevant for this podcast. And, I don't know, let's see, but I'm quite excited about the surprise.
    Then the second link, I would like to mention Most, which is a library called monadic streams. It's like, not many people know about it, but it has an API that looks like RxJS. It's kind of like, you know, an alternative to RxJS, and it has, like, ridiculous performance. I mean, I don't understand, really, like, if Rx 4... runs, like, at one speed, then Rx 5 runs at five speed, Most runs at 300 speed so it's worth taking a look. That's my part, yeah.

    KENT: Wow. Very cool. Ben?

    BEN: Brian Cavalier, the guy that writes most, is a really good guy, too. So, I would recommend, if people are interested in learning more about RxJS 5 in particular, it's a good idea to go look at those unit tests, like I was mentioning earlier. They're in the repository under the specs folder. It's also a good idea to go read the docs on how to write unit tests, because it explains a little bit of, you know, kind of what you're looking at with those marble diagrams. But once you get it down, it becomes very visually apparent what each operator should be doing in each scenario. So it's, it's pretty exhaustive too. There's more than 2200 tests, so there's a lot to look at and see how things behave. So that's a big thing.

    Also, I wanted to point out that Dan Abramov is, clearly, I just wanna shout out, like, you wanna go to whatever restaurant he's in, 'cause it's very reasonably priced. (laughs) If you look behind him, it's like 2.50 for anything.

    DAN: That's British pounds.

    PAM: So that's, like, 18 dollars. (laughs) You know, approximately.

    BEN: Don't ruin my dreams. I was hoping there was like a Redux food truck somewhere.

    (laughter)

    KENT: Nice. I'm still gonna put that as one of your picks. (laughs) Alright, and Matthew, you are our last one.

    MATTHEW: Alright, so obviously, we did the, the react 3 WP, yay. As well as we released the F8 App along with that, so you know, it's still got a ways to go in terms of the COI work and so forth. Other stuff, like I said probably earlier- (mumbles) talk to your friends over iOS and Android, and no cell phone or... No cell phone or Wi-Fi access needed.

    Lastly, IxJS as we're finally getting of the ground, again, the interactive extensions for JavaScript, which is more along the lines of doing what Lodash does, but also... but also adding async iterable, which is a upcoming standard. And I'm trying to, to work on that as well, to see how we can work on additional async paradigms.

    KENT: Cool, thank you for that. Awesome. And apologies for the weird audio stuff. Okay, so let's just wrap up the show really quick. So, before. Yeah, just wanna give a shout out to our silver sponsors, O'Reilly Fluent Conf, Auth0, Trading Technologies, and SparkPost. Check them all out. You can get links to them on our website JavaScriptAir.com.

    Also, we sent our first newsletter this last Monday, and the newsletter is show notes as well as a couple behind the scenes things. So, like, highlights from the show. So, go to jsAir.io/email, and you can sign up for our email, or our weekly newsletter about the show notes. If you have suggestions for us about the show, go to suggest.JavaScriptAir.com. And if you have feedback... and that's suggestions, like, on guests and topics that we should cover in the future. If you have feedback about the show, suggestions in that vein, then go to feedback.JavaScriptAir.com.

    And then remember next week, our show is Internet of Things with JavaScript, same time, same place. And as always, check us out on Twitter, Facebook, and Google Plus to keep up with the latest. And with that, I just wanna say thank you, everyone, for coming. I feel like this was a great show, good introduction to people, and a little bit of a deep dive, too, so, thank you! See ya!
  `,
}
