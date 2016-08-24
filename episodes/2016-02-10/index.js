/* eslint max-len:0 */

export default {
  title: `JavaScript Forward: ES6 and ES7`,
  time: '11:20',
  timezone: 'PT',
  guests: [
    {
      name: 'Allen Wirfs-Brock',
      twitter: 'awbjs',
    },
    {
      name: 'Kassandra Perch',
      twitter: 'nodebotanist',
    },
  ],
  description: `
    Join us for this show live at [ForwardJS](http://forwardjs.com) where we'll chat with Allen Wirfs-Brock,
    project editor of the ES2015 specification about the future of the JavaScript spec.
  `,
  youTubeId: '57MmZtd03ks',
  podbeanId: 'sqmnj-5ca6ed',
  shortUrl: 'http://jsair.io/forward',
  host: {},
  panelists: [
    {twitter: 'drboolean'},
    {twitter: 'getify'},
    {twitter: 'tylermcginnis33'},
  ],
  transcript: `
    KENT: Hello, everyone! My name is Kent C. Dodds. And I guess I could say we're live with JavaScript Air. (laughs) So for those of you who are not familiar in the audience, JavaScript Air is a live broadcast podcast, all about JavaScript and the web platform. And we just started in December, so we've got a handful of shows on javascriptair.com. And this show will be available, hopefully, within the next week when I can get the audio off of it. But just a quick shout out to our sponsors, we have Egghead.io is our premier sponsor. They have bite-size videos and they're amazing, awesome. FrontEnd Masters is also a training website. Check them out. We're also sponsored by TrackJS, error tracking. They're fantastic. And Codecov is a code coverage platform that's awesome. And WallabyJS, they do live code coverage. As you're typing your code, it runs your code, like, it's amazing. Go check them out.

    Okay, so I should probably go ahead and introduce our panel. I don't have my regular Google Doc in front of me, so I'm kind of nervous but luckily I've got this. (laughs) We've got Kassandra Perch, Tyler McGinnis, Allen Wirfs-Brock, Brian Lonsdorf and Kyle Simpson. Brian, Kyle and Tyler are our regular panelists on the show. I'm your host, Kent C. Dodds. Allen and Kassandra have graciously accepted the invitation to join our conversation. Kassandra, like, five minutes ago. (laughter) So, thank you, Kassandra.

    So I think a good kickoff for our show is actually to get an introduction to our guests because they're not on the show every week. And so why don't we get an intro to you, Kassandra? Give us like sixty seconds of who you are what you do.

    KASSANDRA: Sure! So I am a Developer Evangelist at Auth0 during the day. I like to talk about user and identity management. And then when I'm not doing that, I'm building NodeBots and supporting the NodeBots community, and absolutely gushing about everything I love about NodeBots. So that's pretty much what I do. (laughs)

    KENT: Awesome. And totally loved your talk this morning. Anybody watching at home, go watch that talk. It was very, very good. Also, you just had a show with JavaScript Jabber about Auth0, right?

    KASSANDRA: I did. I did. It was really good.

    KENT: Cool. I was listening to it this morning. So JavaScript Jabber is a great podcast. Not our podcast but listen to both. (laughs) So Allen, could you give us an intro?

    ALLEN: Sure! So I guess my main claim to fame for this room was that I was the Project Editor for the development of the ECMAScript 2015 ES6 specification. And I was actually Project Editor for also ES5 and ES5.1. And what that means in the world of JavaScript standards development is for ES6 is I essentially wrote most of the standards. I didn't necessarily make all the decisions of what needed to be written down, but it was my job to actually figure out most of the actual specification material. Before that, I've done lots of things over a long career. I'm a dynamic language guy. I was really heavily involved in the early emergence of object-oriented programming technology and the Smalltalk programming language and building high-performance virtual machines and lots of other things. And that's kind of what ultimately led me to JavaScript.

    KENT: Cool. Thank you! You have a very interesting background (laughs). So before we get into asking questions, I'll just give a little bit of the format of this. For about twenty minutes, we're going to be just chatting amongst ourselves, probably generally about ES6, ES2015 and 2016. And then for the last ten minutes or so, we're going to be taking questions from the audience. And the way that we do this on the JavaScript Air show is through Twitter. And so at the last little bit, I'll pull out my phone, so don't think I'm being rude, and I'll be watching the #jsAirQuestion hashtag. So that's #jsAirQuestion. So if you have a question during the show that you'd like to ask, just go ahead and tweet to that hashtag and I'll bring up as many as we can in the time that we have. So, great. I think a good starter question for our panel is is it "ES7" or "ES2016"?

    ALLEN: It's ES2016.

    KENT: Can you explain a little bit about the reasoning behind that?

    ALLEN: Sure. You know, so first of all, historically, there has been a kind of confusion about these numbers and numbers getting bound too early to particular things. In particular, there was a whole effort to develop ES4, which has never happened. Then we kind of had to skip that number, which sent shock through the world of standards people because that's actually a document revision number, yet there was no revision four. And so after the long, long effort to develop what we all knew as ES6, in TC39, we really wanted to move towards smaller, more incremental releases on a yearly basis and stuff. And doing that, we just foresaw that having a string of kind of meaningless integer numbers, you know, once we went through four or five or six of those was going to be kind of meaningless. And so we just decided to bite the bullet and say, "Okay, we're gonna start identifying the standard revisions by the year they were released." In the long run, the feeling is most people don't need to talk about those numbers. It's really just JavaScript. That's really all you need to say is JavaScript, you know, the current JavaScript standard and--

    KENT: I'm so sorry to derail it really quick. If you're moving your head, and that's ok to move your head, just make sure you move your mic with you.

    ALLEN: Oh, sure!

    KENT: Okay. That's really interesting. So I think this is really big for the JavaScript community that we're going to be having yearly releases. Can you talk a little bit about the process for getting features into JavaScript?

    ALLEN: Yeah. So TC39 is the standards committee that is responsible for developing JavaScript. And it's made up of members who represent companies and stuff. And it's that group of organizations and the people who represent them who actually make the decision of what is going to go into the revisions of the JavaScript standard. And during the development for ES2015, ES6, that was a pretty ad hoc process. People would write proposals and over sort of a long period of years, actually those proposals would evolve and consensus would be built. And then dozens and dozens of these went into making the final standard.

    To have a more incremental process, what we're doing now as we actually have identified stage of developments that go from a number of (mumbles) stages or older, stage four or stage zero is what we call a straw man which is sort of a wacky idea. And it progresses from a wacky idea to "yes, the committee thinks there's a problem here that's worth working on." That's stage one. Stage two is, "Here's the shape of the solution that we think we're going to follow." The stage three is, "Here is actually a specification of what we think we're gonna do. And we'd like people to try this in browsers and stuff." To stage four where, "Yeah, this is locked down. It's complete and it's going to be in the next edition of the standard."

    So how long it takes a particular feature to go through that process depends on the size of what we're talking about. If it's a very small change, like the exponentiation operator, it can go through those phases quite quickly over a matter months. If it's a large or complex set of features like async functions, it can take years. It's likely to take years. But that's basically the process. And then when the yearly releases come out, it's basically about this time of the year, we look and see, "Well, what's at stage four?" Those are the things that go into the next official version of the standard, which it will be released in June.

    TYLER: So you've mentioned that stage zero is kind of the... you used the term "wacky" ideas.

    ALLEN: Well, they may not be wacky but they're just, you know, we call them straw man. "Wouldn't it be interesting to do x?"

    TYLER: Yeah, absolutely. So, with tools like Babel, now, all of a sudden those stage zero ideas are starting to get more adoption in actual production code bases. What's your opinion? Is that a good thing because you kind of get it tested before it actually goes in the spec or is that a bad thing because all of a sudden, we have entire communities around stage zero features?

    ALLEN: Well, it's risky. I think as an app developer, if you're going to be using Babel in that way and using experimental features, you really need to be aware of this staging process and where they are. If you really become dependent upon a stage zero feature, you're really taking a lot of risk. I mean that that may never go anywhere. It may be that the actual implementation, the actual details of it changes in a way that's totally incompatible with what you've done. So you really have to weigh the risks there against the benefit. I mean how badly do you need that?

    KYLE: So you're talking about these stages of features and I think one of the ones most people probably are kind of anxious about is the async await, which I think it's current status is at stage three, is that correct?

    ALLEN: Mh-hm.

    KYLE: So it almost made it into what we are going to know as ES2016., but it didn't quite make it. So let's just say that it comes out a week after... it makes it to stage four after you've put the official stamp on ES2016. So it will eventually, eleven and a half months later, make it into a spec. How do we talk about that thing, for that potentially eleven and a half months? Do we start saying, "Well this is ES2017 because it's already stage four." How do we talk about these features?

    ALLEN: Async functions. I mean that's the name of the feature. If something is at stage four, that means on the TC39 GitHub site, there will be a complete specification for that feature. And "stage four" means that specification is essentially frozen. It's not been fully integrated into the, you know, the thick document that defines the entire language. But the intent is that it's not going to change from that stage four specification. Also to be at stage four means that it hasn't been implemented in browsers. I mean, there has to be at least some browsers out there that's already implemented the feature. So, you know, it's there. And so I just try to talk about the feature by whatever the name of the feature is.

    KYLE: But to push on that a little bit, features are never finished, right? They are always subject to... so a great example is what we know of as classes that landed in ES2015, ES6, there's already several proposals that look like they're likely to land at some point in the future, that augment that syntax, changing some of its semantics, things like that. So there does seem to be a need in the discussion of features to say, "Well, I'm talking about the ES6 class versus the ES2018 version of class." And I assume that the same may be true of other features like async await. There may be things that land in that initial spec and things that are, at the same time, being worked on for a potentially later spec.

    ALLEN: Well, sure.  I mean, take something that's even, in some ways, more pervasive, let's say regular expressions. Ah, there is certainly room for evolution of regular expressions (mumbles) additional features. But most people, most of the time, don't need to make that distinction. If you really need to make that distinction, make it. Say, I'm talking about this proposed extension in the classes or I'm talking about these easy extension to regular expressions or what have you. Or put it another way, how do you address this problem... how do you talk about emerging HTML features? What is unique about this issue to JavaScript?

    KYLE: The fact that basically, when HTML5 came out, they said, "That's it. There's no more after HTML5." So, it's all its all HTML5 even though it came years after.

    ALLEN: Well, but it's still continually evolving.

    BRIAN: Maybe CSS is a better example, but it makes sense. I did have a quick question if I could interject. Do you feel okay with that last answer? (laughs)

    KYLE: Yeah.

    BRIAN: I was just wondering if you have any focus on a particular paradigm or way of programming in JavaScript. Like is there a guiding light for adding features like I see we added classes but then I also see a proposal for a flat map. Are we looking at something like Scala in the future?

    ALLEN: So JavaScript, just the way I would characterize it, is a multi-paradigm dynamic programming language, dynamically-typed programming language. And I think at least from the perspective of TC39, that's what we intend to maintain it as. And so when we look at all the paradigms, programming paradigms that are in use and look at how well they're being served by the language. And if there are deficiencies in the language or some improvements and improve an object-based approach, we would look at augmenting language there. If there are deficiencies from a functional approach, we'll look at what those deficiencies are, and try to fill them. But maintaining this idea that it's a multi-paradigm language and one of the characteristics of a multi-paradigm language is that features that support differing paradigms still have to fit together and create a coherent whole or a coherent design. So we have to look not just in terms of a functional style but we have to look at well, how will these functional features fit in when people are using more object-oriented features and stuff?

    KENT: So Kassandra, I actually had a question for you. I'm interested in your perspective on the progression of the language. And in your talk, you talked about a tool that you use to take a JSON object and convert it into C code. What was the name of that tool again?

    KASSANDRA: BabelBot.

    KENT: BabelBox?

    KASSANDRA: Bot.

    KENT: Oh, BabelBot. When I first saw that, I was like, "Well, that's kind of an inconvenient naming, kind of confusing because we have Babel." But then what it actually does it kind of does something similar to what Babel does. But what's your take on the new specification? What does that mean for the NodeBots community? Like, do you see in the NodeBots community, are they using the latest version of the language with Babel or anything like that?

    KASSANDRA: So that's kind of... we're just now getting to that. So basically, Node serial port had some issues when Node moved to 4 and adopted a lot of these new features. So we just now, I think in December, got Johnny Five and node serial port working consistently with Node 4. So we're starting to see more and more of these features coming to NodeBots. And from a global perspective, what I've found is a lot of the features that are new to JavaScript make it a little easier to teach, especially for users that are coming from different languages. Because of that multi paradigm outset of JavaScript, if you're looking at someone who's never coded before, you can teach them one way. But if you're looking at someone who's come from a background where they used to program fifteen years ago, but they're just now getting back into coding, you can also kind of (mumbles) that.  And so because NodeBots has such a core in education, these new features are really starting to help us out in creating better curriculum in teaching people faster and teaching people code that they can easily translate from NodeBots into a career in web development.

    KENT: Cool. Tyler, what's your take on that? Being kind of in education, in general. Have you seen ES6 and the future specification being easier to teach?

    TYLER: So it's tricky because I think it is, but then you have this problem of beginners getting into the field and they go, "I don't know if I should learn like ES5," or I've seen that question a lot like, "Do I learn ES5 or do I learn ES6?" And even though I think ES6 has done a great job as far as like making it easier to come from different programming languages, it is tricky and it's kind of a natural thing that happens to beginners, because now they have like two choices. And an obvious answer is like, "Well, just learn JavaScript." You can start with ES5 like the same thing almost, like as you were mentioning earlier. But I think because we do put such a distinct point between "this is ES5 and this is ES6, and now this is ES Whatever," that makes it a little a little frustrating for beginners. But we can't just kind of stop the whole progression of the language for beginners, so.

    KENT: I think the challenge is that browser support different things. And so just today I had somebody asked me, "What's the browser support for Array.prototype.sum?" Because you really, unless you look into the documentation, you don't know, "What am I ok to use? What do I need to polyfill?" Kyle, what do you think about this subject?

    KYLE: Yeah, I definitely think that there are lots of differences between the browsers. And rather than being scared of those differences, I think we should actually embrace that idea. I'm glad that Chrome tries out a feature first and Edge is working on a different feature and Firefox is working on a different feature. I think that helps. And the way we normalize that of course is through the use of tools. So some people who have sort of asserted the idea that transpilation tools are a kind of like a temporary thing and a stopgap and will eventually go away.

    My perspective from the outside, I'm not on the committee, my perspective on the outside, JavaScript's gonna keep going and there's always going to be a gap between what they just came up with and what I can use for supporting, you know, customers. So there's always going to be a need for that tooling gap. Now with respect to teaching, I always think we're gonna have to take a new feature and teach it in the context of how we did that thing in the version before. And that's how like all I've approached with the ES6 is to say, "I'm not just going to teach destructuring or I'm not just going to teach you this feature of ES6, I'm going to show you how we did that thing before and why this new declarative approach makes the code more understandable, more readable, more teachable."

    KENT: But at some point, we're going to pretty much do, destructuring might not be a perfect example, but destructuring will be just like such a ubiquitous part of the language, that all browsers will support, anything that your shipping or any environment you're shipping to will support this feature. So in that circumstance, years down the road, do you still plan to teach in that method or will you just kind of teach it just like you teach other property accessors?

    KYLE: I think consistent with the way I teach everything that I teach about JavaScript, I don't just want you to use a feature as the sugar that's presented and not understand what its doing. So destructuring is actually a perfect example because there is a set of primitive operations that all of this syntax sugar maps to. And that's not just an implementation detail, that's an understanding detail. It helps me to get a better mental model of what all of these new curly braces in different places that I've never seen before, why are they there? Why is there an equals there? I need to understand what the fundamental operation to emulate that would be. And right now, that's a bridge between my current understanding of JavaScript and the new stuff. But five years from now, I'm still am going to want you understand what destructuring is doing, so you know why it's important.

    KASSANDRA: That reminds me of Ashley Williams' talks from JSConf in May of last year, about the abstractions and the teaching abstractions. He's right, like, it'll always be an abstraction no matter how integral or how day today it is a part of the language, we'll still have to teach why that abstraction works and what that abstraction does. Because if you present an abstraction to a student without explaining it, eventually, it's going to go down a bad path of they're either not going to understand it correctly because they don't know how it works or something like that. So yeah, I definitely back up Kyle's point; we're gonna have to teach it like an abstraction because it's still what it is, no matter what.

    BRIAN: I was going to ask if you feel that you need to know exactly what's happening under the hood a lot more when you're working in robotics, then so as more sugar gets presented, the further you get away from like memory management and things that you kind of want to have control over. Is that a thing?

    KASSANDRA: That's a great question. So to give some preface to this, I have exactly zero formal electrical engineering training. I knew zero C until I started doing... like a year into NodeBots when I started wanting to build things that required some C. So I mean, yes and no. You start to learn how the things work as you build up to them, but like it's certainly not a prerequisite for getting into robotics. You don't need to already know C to get into robotics. But you will pick up some C and some memory management while you're doing it. But it's not nearly as hard as people seem to think, so (laughs).

    KYLE: That's a good thing to have a layer of competency, wherever you're at, you have some competency understanding of the stuff in the layer below, so that you're making proper decisions.

    TYLER: I think even on a broader term, I've found that beginners or new to JavaScript, it's really helpful to talk kind of about the history of JavaScript and how we got here. I don't think we do that enough in teaching. Because in my experience is when we talked about like, "Hey, we just had like pure DOM manipulation." And then like MooTools came and jQuery came. That's super refreshing because what the newcomer is seeing is they're seeing how we've kind of adapted and we've started to fix these problems rather than just jumping into like the virtual DOM. And they don't really know how we got there and they just take that for like (mumbles). I think if you are starting out or you're teaching someone starting out, it's really, really helpful to kind of just start at the beginning like, 1995. And whether it takes a while to get to where we are, I think them seeing the history of how we got here, and the problems we solved getting here is really, really helpful.

    ALLEN: So I wonder, so one perspective I take on JavaScript is it's just yet another programming language. And if you're teaching somebody C or C++ or Python or whatever, I mean would you go through that same thing? Would you try to go back to the early stages of those languages? Or in particular, we could do that with a beginner or should you spend that time really focusing on kind of the fundamental concepts and--

    TYLER: So for your cs3, that's exactly what they do. I don't have cs3 so I don't know, but I think that there's at least some merit in that. And I don't know. I mean the difference between like JavaScript and even like C, there's a lot more history with C, I think. So I think it works with JavaScript. I'm not educated enough with-

    KYLE: The other complicating factor there of course is that JavaScript has to interact with all these other things that actually aren't JavaScript, like the DOM and the other web platform features. A lot of people think of that stuff as JavaScript and don't understand the history of that stuff. So you may not necessarily need to go back and look at what ES1 said about JavaScript before we had try catch, for example, but understanding the context that JavaScript is interacting with those other things, I think, is useful. And maybe there isn't as much of an analog in the C world because it seems like you kind of do most everything all in one, you're maybe not as interacting with DOM from your C program like we have to do in our JavaScript programs.

    KASSANDRA: Taking it back to Kyle's point about having a basic competency, from a career perspective, knowing the history of a programming language can be very important to its future. For instance, when I was teaching Node two years ago, I had to teach the rift between io.js and node.js because we didn't know who was going to come out on top. We didn't know what set of features was going to take over. So like knowing the history of a programming language can affect you as a developer because you'll know a little bit more about where that language is going, feature-wise, popularity-wise. You can kind of see what's going on in the horizon. And it can really affect how what you want to learn how you want to do things in that language.

    ALLEN: Yeah, I mean. I totally agree that knowing that programming languages, knowing the history of programming languages is really important. Probably the most important thing you can do, if you want to have a long career in software world is understand many programming languages and stuff, because over time, they're going to change. No matter what it looks like the today, ten years, twenty years from now, it's going to be different. So absolutely, you need to do that. But I'm not sure whether it comes exactly at the beginner's stage or it's more downstream a bit. Once you've mastered a programming language, now you need to start looking at other programming languages and history and stuff.

    TYLER: That's where I think we're painting with a very broad brush because for example, someone who's like an entrepreneur doesn't really care that Brendan Eich made the language, right? They just want to build something. They just want to like make money. For someone who's planning on getting into a career as a software engineer, I think that's its more critical to them.

    KENT: Yeah, sorry. Just to kind of continue on that point, Dave Smith wrote a recent article that was all about the importance of learning to learn. And I think that's something that we kind of overlook. We just think, "Okay, I'm an Angular developer and so I'm just gonna like build Angular for the rest of my life." And that is not advisable. So learn JavaScript, but then don't forget to just learn to learn. And JavaScript is an amazing language. I love programming in it, but I'm not going to be doing it till the day I die. I'm almost positive of that.

    BRIAN: You'll be programming in Haskell soon.

    KENT: That's exactly what I'm planning on, actually.

    KYLE: No, JavaScript is going to kill me, so I actually will be--

    (laughter)

    KENT: Thank you for that. (laughs)

    ALLEN: So I wanted to throw out here kind of my perspective on where JavaScript fits in the world for the long-term and kind of why I decided it was important to get involved with JavaScript. I think JavaScript's position in computing for the next thirty to forty years is comparable to the position C had for the last thirty years. It is sort of the canonical language that defines... that is central to an era of computing. And that there will be variations and dialects, there's C and then there's C++, you can say Java is very end of that. But at its core, if you think about what it took to develop personal computing technology, PC technology, C was the programming language that was at the foundation for that. And I think the things we're going to be doing for the next thirty or forty years, it's JavaScript is going to be at the foundation of that. There will be many other languages. JavaScript is going to evolve incredibly. There may well be dialects of it and stuff, but you know it really is the central language going forward here.

    KASSANDRA: And you can see that in the hardware world. Basically, I haven't seen a hardware platform come out that that had a ton of traction the didn't have a seat at the table for JavaScript developers, either via a dedicated JS SDK or supporting a third-party JavaScript SDK or even making JavaScript one of their core tenets. So especially definitely in the hardware and IoT space, JavaScript's at the seat of the table. And so I think that kind of reinforces that.

    KENT: I'm afraid I'm gonna have to cut it short. We've got about four minutes or so and we do have a couple questions on Twitter. This has been actually a really awesome conversation. I wasn't planning on talking about education so much, and I'm glad that we did because I think that's really important in our community. So here we have a couple of questions from Crowd Source Labs, "Doesn't it take longer than a year for browsers to come up to a new standard? How will they ever keep up?"

    ALLEN: Well, the releases we're doing are much, much smaller, right? It will take a good browser probably about two or three weeks to implement the new features better-

    KYLE: There are two in ECMAScript 2016, exponentiation operator-

    ALLEN: Yeah, that's the whole point is to not have these huge baskets of interdependent features that take forever to implement.

    KENT: Yeah. And I think that's a common misconception just because ES6 was so big, that many people think that each year, it's just gonna be like this huge evolution of the language. Which would be really dangerous for the language, in my opinion. And so yeah and it's actually kind of touches on to Thomas Bernie's question, "Briefly, which ES2016 feature is the most exciting to each panelist?" And there are literally two features in ES2016 and so-

    (laughter)

    KASSANDRA: He probably meant ES6.

    KYLE: Fight me over the exponentiation operator, man!

    KENT: (laughs) Yeah, I need that. I'm all over-

    TYLER: Yeah, Kyle actually has a new course on that coming up.

    KASSANDRA: Yeah.

    KENT: No, but let's talk really quickly. And like Thomas said, briefly, about each one of our favorite ES6 or ES Next feature, I guess we could say. So for me, I think probably my favorite is, oh man, destructuring. I love to destructuring. I think it's awesome. It makes things really expressive declarative.

    KASSANDRA: As someone who has to deal with third-party data on a regular basis, where I just have to move one property to the other, I really love the arrow syntax.

    TYLER: I really like classes. That was a joke.

    (laughter)

    So this is going to sound--

    KENT: I thought we were going to avoid classes--

    TYLER: We had to mention classes once in there.

    KENT: Yeah. (laughs)

    TYLER: So this is really easy one but I don't know why i like it so much better, the template strings. I don't know because I'm just like not that smart and it just made sense, but I really like it.

    ALLEN: So in the long run, I think the modular design is going to have the most impact and influence over anything that's in ES2016.

    BRIAN: Nice. I like fat arrows. I'm a lambda kind of person. (laughs)

    KYLE: So for current features, I would say other than the destructuring, I would say generators because you know, to borrow a mathematical term, sort of squaring the circle, thing the generators allow is a synchronous looking asynchronous programming. And that is something that we really just didn't have a paradigm for. The state machine equivalent to that was just so bad that nobody ever did it. And I think that was leading the way into async await and other patterns that are coming likely beyond that. I think that was one of the biggest paradigm shifts that we got was getting that sort of feature and understanding how, with promises, that will change asynchronous programming.

    KENT: Cool. That's definitely one thing that I haven't actually used yet, so I need to get on that train. Kyle said so, so. (laughs) Okay, so we have two more questions and one more minute. So this is from Tom (mumbles), who I think is in the audience. Hi, Tom! There he is. He says, "When teaching a beginner ES6, do you think arrow functions glaze over understanding context? How do you handle that? I think the answer is yes, but how do you handle it?

    TYLER: So I think I think you shouldn't mention arrow functions before you teach context. I think that's the answer, in fifteen seconds.

    KYLE: I don't teach arrow functions-

    TYLER: Or just don't. Don't teach it. (laughs)

    KYLE: I don't each arrow functions because I don't think that they are actually useful for getting rid of the function key word, the way most people seem to think. There's one particular use case, which is giving you a lexical environment for the "this" keyword or the arguments object. I did an analysis of my own code and that touched about 2% of the code that I've ever written. So on the whole scope of things, it doesn't seem compelling to me.

    KASSANDRA: I'm a fan of them, but I agree you teach context long before you teach arrow functions. If you would teach a beginner arrow functions at all.

    KENT: Yeah. I feel the same way. The utility for arrow functions for me is not the lexical this, which probably should be, but it's more the ability to have one liners, and I just love that.

    BRIAN: Well, I want to jump in there and say, from a functional perspective, you're striving to write a single expression without... that's going to always return something. And if I use fat arrows, I know I'm doing it correctly. If I have the curly braces and have to do return and all those stuff, I guess you know, functional... the word function will make you have to write return and gives you a lot more freedom to not write a single expression.

    KENT: Yeah, cool. So we are just a second over or two, so you can feel free to leave but I'm gonna ask this last question, so.

    (laughter)

    So this was Ramana Venkata, who's actually one of my developers in code mod world, but he says, "Many people seems to be unhappy with Promises swallowing errors. Is there way a to make this situation better?"

    KYLE: They've already made, and by "they" I mean the web platforms, the browser platform and the node platform, have already mostly solved this by adding... there was aspect for unhandled rejection. So it's kind of like the new school way of window dot on air. It's a way to catch something if you forgot to put on your catch, you know, method on your promise chain or something like that. I would say chaining of promises is absolutely the least important part of promises, so I don't get all that worried about it because I'm gonna be using, like I said, the async await or the generator form, the synchronous syntax, the try's and catches, so I'm not all that concerned about it. And I think if you get too obsessed about creating these long promise chains, then you have to worry a lot more about that problem, where these other patterns kind of solve that for you.

    KENT: And that's a perfect answer. So that's our show. I want to give a shout out to our Silver Sponsor, O'Reilly Fluent Conf. They're going to happen in three, four weeks. And we do have a discount code on our deals page, if you go to our JavaScriptAir.com/deals. And we have several other deals on there that are totally legit. And if you have suggestions for the show, go to suggest.javascriptair.com. There's a Google form you can fill out. If you have feedback, feedback.JavaScriptAir.com. We totally appreciate your feedback. And with that, I just would like to thank Kassandra and Allen for joining us on the show. And thank you all for joining us as well. Thank you!
  `,
}
