/* eslint max-len:0 no-trailing-spaces:0 */

export default {
  title: `Functional and Immutable Design Patterns in JavaScript`,
  guests: [
    {
      name: 'Dan Abramov',
      twitter: 'dan_abramov',
      imgSrc: '/resources/panelists/dan_abramov.png',
      picks: [
        `[A General Theory of Reactivity](https://github.com/kriskowal/gtor)`,
        `[The Future of JavaScript MVC Frameworks](http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs/)`,
        `[Programming in the 21st Century] (http://prog21.dadgum.com/archives.html)`,
        `[Redux Saga](https://github.com/yelouafi/redux-saga)`,
      ],
    },
    {
      name: 'Brian Lonsdorf',
      twitter: 'drboolean',
      imgSrc: '/resources/panelists/drboolean.png',
      links: [
        `[A Modern Architecture for FP](http://degoes.net/articles/modern-fp/)`,
        `[Crazy FP words tweet](https://twitter.com/drboolean/status/682059953708773377)`,
      ],
      tips: [
        `Watch [Dan's](https://twitter.com/dan_abramov) [Redux videos](https://egghead.io/series/getting-started-with-redux)`,
        `Experiment with [ramda](http://ramdajs.com), [immutable.js](https://facebook.github.io/immutable-js/), and the Maybe Functor`,
        `If you want to read the white papers, checkout [The Haskell Road to Logic, Maths and Programming](http://www.amazon.com/Haskell-Programming-Second-Edition-Computing/dp/0954300696)`,
      ],
      picks: [
        `[ForwardJS](http://forwardjs.com/) Feb 10th @Regency Ballroom SF`,
      ],
    },
  ],
  description: `
    Functional programming has been greatly facilitated with ES6.
    We're going to talk about the how and why of functional
    programming and immutable design patterns in JavaScript.
  `,
  hangoutId: 'c6gcf8f0nirc5t83homjb5trquc',
  youTubeId: '82M9fKe7hiw',
  podbeanId: 'eu658-5b510e',
  shortUrl: 'http://jsair.io/functional',
  host: {
    tips: ['Try a standing desk'],
    picks: [
      `[Lowes](http://www.lowes.com/)`,
      `[The ES2016 Pipe Operator](https://github.com/mindeavor/es-pipeline-operator)`,
      `[Learn JavaScript Arrays in Depth](https://egghead.io/playlists/learn-javascript-arrays-in-depth-dbe40331)`,
    ],
  },
  panelists: [
    {
      twitter: 'getify',
      tips: [
        `[Rediscover devtools in Firefox, you’ll be pleasantly surprised ](http://www.smashingmagazine.com/2015/12/revisiting-firefox-devtools/) -- specifically WebIDE/Valence and CSS Transforms Previewer`,
      ],
      picks: [
        `[JavaScript Allongé (book)](https://leanpub.com/javascriptallongesix) by [@raganwald](http://twitter.com/raganwald)`,
        `Kris Jenkins’ blog posts on FP: [Part 1] (http://blog.jenkster.com/2015/12/what-is-functional-programming.html), [Part 2] (http://blog.jenkster.com/2015/12/which-programming-languages-are-functional.html)`,
        `[The FP side of async programming](https://medium.com/@yelouafi/from-callback-to-future-functor-monad-6c86d9c16cb5)`,
        `[Concurrency’s future on the web](https://medium.com/@cramforce/2016-will-be-the-year-of-concurrency-on-the-web-c39b1e99b30f)`,
      ],
    },
    {
      twitter: 'linclark',
      tips: [
        `When running git checkout, using '-' as the argument (git checkout -) takes you back to the branch you were last on`,
        `[hub](https://github.com/github/hub) makes it easier to work with github on the command line. [Tab completion](https://github.com/github/hub#shell-tab-completion) is especially helpful`,
        `[fetch all PRs](https://gist.github.com/piscisaureus/3342247) if you do a lot of PR reviews, this can be really helpful. It downloads all new PRs as branches whenever you fetch`,
      ],
      picks: [
        `[Jessica Kerr - Functional Principles In React](https://www.youtube.com/watch?v=1uRC3hmKQnM)`,
      ],
    },
    {
      twitter: 'tylermcginnis33',
      picks: [
        `[Starters and Maintainers](http://jlongster.com/Starters-and-Maintainers)`,
        `[Classroom Coding with Prof. Frisby](https://www.youtube.com/watch?v=h_tkIpwbsxY&list=PLK_hdtAJ4KqX0JOs_KMAmUNTNMRYhWEaC)`,
      ],
    },
  ],
  transcript: `
    KENT: And we're live with JavaScript Air. We're excited to be talking about functional and immutable design patterns in JavaScript today. Before we go too far into the show, I'm gonna just make a couple of regular announcements. So, remember this podcast wouldn't be possible without our awesome sponsors, so, our premier sponsor is Egghead.io and they have a huge library of bite-sized web development training videos. Check them out for content on JavaScript, Angular, React, Node, and more. And just as a shout out to Merrick Christensen for getting his first lesson out today. He's awesome. So go check out his lesson.

    Frontend Masters is also a sponsor and they are a recorded, expert-led workshop with courses on advanced JavaScript, asynchronous and functional js, as well as lots of other great courses on front-end topics. So if you're interested in the subjects today, maybe you can check out Frontend Masters to learn more about functional JavaScript. And then Track JS reports bugs in your JavaScript before customers even notice them. And with their telemetry timeline, you'll have the context you need to actually fix the bugs. So check them out and start tracking your JavaScript errors today, at TrackJS.com com.

    Cool. A	nd then, as always, this is a weekly podcast and so we have another show next week, and I'm really excited about this one. It's Unit Testing JavaScript. And we'll have Christian Johansen and Joe Eames and Ward Bell talking about unit testing JavaScript, which I think will be totally legit. And then, as always, follow us on Twitter and Google Plus and Facebook to keep up with the latest and greatest from JavaScript Air. Okay. Cool. So let me quickly introduce everybody who is with us today. So for our panelists, we have Kyle Simpson and Tyler McGinnis.

    TYLER: What's up?

    KENT: And Lin Clark should be joining us shortly. Technical difficulties there. And then we actually, our guests today are also panelists but they our guests. So introducing them as guests, Brian Lonsdorf.

    BRIAN: Hey.  (laughs)

    KENT: And Dan Abramov.

    DAN: Hey.

    KENT: So, because you are our guests, let's go ahead and give you two a second to introduce yourselves and maybe talk about your background in functional programming. Why don't we start out with Brian?

    BRIAN: Sure.  Looks like Lin's here now too, if you wanna say hi.

    LIN: Hey, sorry about that. My headphones weren't working, so I couldn't hear y'all, but glad to be on now.

    BRIAN: You got the tool thing on there too, cool.

    LIN: Nice.

    BRIAN: Yeah. (laughs) Welcome to (mumbles) or whatever. So, yeah, me, I am a normal dude, I guess, I did learn some functional programming from a normal-person perspective, I guess (laughs) and so people seem to talk to me about things in layman's terms, and it works out. I guess that's how I'm gonna describe myself.  (laughs)

    KENT: So by "normal dude," you mean you're not like a... you don't have a doctorate in computer science and you're not just like, not that they're not normal, but is that what you mean? (laughs)

    BRIAN: I'm as normal as it gets, yeah. I don't know much, like, you know, I've been learning some linear logic and set theory and things throughout the years, so I could read the white papers. And it's fun to kinda share my adventures and talk to people about these things. And I also make little stop-motion videos, 'cause, why not? (laughs)

    KENT: Yeah, I wanna talk to you about those later. (laughs) Cool. So Dan, let's get an intro from you.

    DAN: Yeah, so I'm not really that deep into functional programming, although people sometimes associate me with it somehow but it's not exactly true. I think my first exposure to functional programming was when I was writing in C# and somebody had told me about Nimaru, which is like a really weird language named after a wizard from a book. And it was a language that introduced me to some functional idioms and I read about functional way of programming the mutations with all that kind of the destructive stuff. But I still was writing imperative code and later, I started writing some JavaScript. And again, I started looking at functional programming concepts. And sometimes I found a good use for them in my projects and projects I'm working on. And so I'm not really well-versed in functional languages but I have an idea about them. (laughs)

    KENT: I think lots of people associate you with functional programming because of Redux and bringing Elm Architecture to JavaScript. And so we're excited to chat a little bit about that in this episode as well, I think. So we're not just talking about functional programming today though, we're also talking about immutability and those two are sort of related with one another. But before we get too far into how they're related, I think it would be useful for our listeners and viewers to get kind of an overview of what functional programming is. So, would one of you, maybe Brian, could you give us a definition of functional programming?

    BRIAN: Uh, sure. (laughs) It's like a trick question, right? Cause everybody's like, "Well, what's functional? It means you're using Monads and type, so that means you're able to use macros." There's all sorts of different definitions, but my favorite one is just being able to program with pure functions, so you know you can have a reliable output or input every time. And we say functional programming coming from the mathematical function perspective of a set of relations or just input to output, sets of pairs. So that's pretty much my definition. Anybody else want to throw stuff in?

    TYLER: Can you define "pure functions" for us?

    BRIAN: A pure function? Oh yeah, it's just a function with no side effects. For every input, it will always give you the same output so you could give it whatever input you want and you always get the same result without any observable effect.

    KYLE: Just to chime in real quick, for any listeners that are kind of like lost or wondering about this stuff, actually, today there was a fantastic couple of blog posts going around (and it's gonna be in my pics later.) I don't know if we'll talk about this as well, but Chris Jenkins has a couple of really great blog posts that break that down very simply.

    BRIAN: Yeah, that's great. And I read a little bit of it and just the examples of addition and multiplication or string to upper, things like that. You know, those functions, you don't have to be scared to run or test, or, you know, it gives you an intuition pretty quick.

    KENT: So maybe you can talk about some of the benefits of programming in a functional way, the functional programming paradigm? Why would I really care to write pure functions and write my applications in a functional way?

    DAN: So I think my favorite benefit is really a practical one, is that they are so easy to test. Like, if you write pure functions, it is safe to run them in the test code many times. You're not making some requests that you can't control. So, it's just calculations; you can give them the inputs, you can assert their outputs. And it's just amazing for cases when you have complicated logic and you need to really test this logic through.

    So I remember the first time I actually went full functional programming, when the product that needed it was when I was working on a parallax-like animation on a complex landed page, that had a lot of different parts that depended on the scroll. And so the first attempt to write the code was imperative, like I watched the scroll event, I would move the DOM and up and down. And it didn't quite work correctly. And I would bump into weird edge cases where I would scroll too fast and some element would get in the wrong position and I don't know why this happens.

    So I applied functional programming in a way that I extracted the calculation logic so that I have this function that achieved the current scroll position and returned the positions of all elements on the page. And this allowed me to test it without actually running it in the DOM. And I got the right logic. So for me, this is the main benefit of functional programming is that it's very easy to test.

    LIN: I think that it being so easy to test is a side effect of it being easy to reason about. Which, even independent of tests, I think is a benefit in and of itself. But of course, once you can actually test it it's great to have those tests in place.

    DAN: Yeah, yeah.

    KENT: Yeah, that's great. So I forgot to mention at the beginning of the show, if you are watching live and you have a question, go to Twitter and with the hashtag #jsAirQuestion, go ahead and ask your question and we'll answer those at the end of the show. So, sorry to take us away from this for just a second.

    BRIAN: it's good. (laughs) I did wanna throw in one thing in that last question about why. And for me, my ultimate goal in life is to get rid of Selenium. I never want to have to write a Selenium test ever again. (laughs) And using pure functions and functional programming to separate the concerns of side effects from calculation, it allows you to really write these elegant programs that you could reason about and you don't need to go launch a browser and click through things. And I think it's going to eventually unlock the key to a much better programming style where we can get around these long integration tests. I actually put a link in the show notes from a blog post that talks a little bit about that.

    DAN: By the way, have you noticed that people started really rejecting this easy-to-reason-about thing as a buzz word? Because everybody keeps saying that and people are like, "I don't know what you mean." (laughs)

    LIN: Yeah. (laughs) And I think that it's hard to explain it until you've actually gone through it and experienced, you know, what it means to not have to keep state in your head. And once you've actually gone through and had that experience, I think that the buzz word actually starts to make sense. I don't know, that might just be my experience. Do you feel that too, Dan?

    DAN: Yeah, I think maybe one of the reasons it happens is also with this, there are different, you can take functional programming to different extremes, right?

    LIN: Right.

    DAN: You can just apply it a little bit or you can apply it fully. And there is this saying that functional programming, 80% of functional programming doesn't work, like you need to go 100%. Some people say that. And so they market the people who use it a little, saying that, "Hey, it's too hard to reason about." So there's fragmentation in the community about that.

    LIN: Mh-hm.

    KYLE: I would say I have been working on trying to understand the principles of functional programming for a really, really long time. I've read every blog posts and book and gone to every conference talk. And in all of that exposure, the terminology has never sunk in for me. I think the concepts have sunk in, but I have never been able to wrap my brain around those. So I think there are some, at least some people, for whom the terminology can be a blocker and I don't think we should propagate a culture that says, "If you don't understand the terminology, you're not part of the club." I think the concepts are the most important thing, which is why I like Brian's take on things because he basically tries to break it down to something that you could get the terminology around or you could leave the terminology aside and still benefit from it.

    TYLER: I actually think that's the biggest benefit of what Dan and Brian has done is with Dan, with Redux, he's taken functional programming and kinda brought it to the masses. And with Brian, with all his YouTube videos and things like that, kinda like you mentioned, Kyle, it's refreshing to not have to worry about what a Monad is, but just worry about immutability and things that actually are practical to me.

    BRIAN: Yeah, oh, there's a big problem in the, well, it's not really a problem, but divide. And you know, people talk about the names of like, "Oh, why don't we just call it a mappable? You know, you have a functor and what is a functor, and that scares people." And then there's, you know, "mappable makes instant sense; I have a map function...." Am I breaking up? It feels like everything stopped?

    KENT: You're totally good.

    BRIAN: I'm good? Okay. Well anyway, the only thing I think that's tricky about it is I wanna say mappable and say it has a map function, but any object with a map function is a functor or a mappable, right? But when you use the word "functor," you're talking about laws and properties that must hold an intuition about it. So I know just like, addition is associative, I can apply that to any monoid, or, you know, things like that. So it's like, when you throw the scary word out there, you're like, "What's a Monoid? Ahhh!" But when you say, "Oh, something with a concat method." You know, it becomes much more friendly and people are happier about it, but it also gets diluted a little bit to where people might be making instances that have a concat method, but aren't necessarily going to hold those properties and laws.

    KENT: Yeah, you pretty much just freaked me out there for a second.

    BRIAN: (laughs)

    KENT: I think this is very true. And I wonder if maybe there's something that we can do, or something to be done about like the confusing terminology and just how things are so different from what we're used to as imperative programmers and non-functional programming style. So what are some things that somebody new to this space can do to kind of get in to functional programming in an easier way?

    BRIAN: I was gonna say, "watch Dan's Redux videos." (laughs) Those are great. I don't really know what else. (laughs)

    DAN: I think it might be a good idea to check out Rx Library, which is reactive extensions for JavaScript. I think we're probably going to talk about it a bit later, but the point is that it's kind of, if you heard about promises, it's kind of like promises but for values, for multiple values arriving over time. And the reason I'm talking about this together with functional programming it that Rx embraces functional programming. It lets you create strings of data, like clicks of user or data requests coming up or something like that and it lets you use functional idioms like map, filter, merging, stuff like that, to operate on these strings. And I think it's a great way to try to integrate functional programming because Rx can be used to solve many real world tasks. And it also wants you, kind of getting used to it. And you can apply it pretty much everywhere. So I didn't use much functional programming in simple synchronous code, but I really got into it when I started writing asynchronous code and Rx helped me with that.

    BRIAN: Kyle has a lot of, what he calls functional light stuff that really helps, it's in the same vein, like using that filter and immutability, from what I understand. Kyle probably knows more about this.

    KYLE: Since you bring it up and since one of our show sponsors is Frontend Masters, I do have a programming course. It was taped earlier this fall and should be out, I think, in maybe February or something. But I have a course called Functional Light Programming. It tries to take the same perspective as you're hearing from our guests today, of building up the concepts and staying away too much from the terminology. So I cover all the things like pure functions and immutability from a very, very simple perspective. So it's like the 50,000 foot view of it. But that is my take, is that those concepts have improved my code even though I've never -- and probably never will -- have the justification to hold the functional programmers membership card, 'cause I don't really consider myself that. But I think my code can benefit from understanding why a pure function is useful or understanding why treating a value as immutable. Whether it's immutable or not, treating it as immutable improves the code. So I think that's true.

    But that brings me to a point I wanted to kind of push back on a little bit, Brian, I'm curious. You said that there could be a problem if somebody takes one of the concepts and misses out on some of the other concepts.  and you're trying to reason about something. Do you think that it is important for a piece of code to basically have a label on it that says, you know, like a big neon sign that says, "Hey, functional programmers, all of functional programming is alive and well in this program so you don't have to think about it. " Is that where the value comes? It's almost like a shared lexicon, if you will. Or is the value more in those base concepts?

    BRIAN: Well, I think the reason people get so passionate about this is because there's a way to, if you're working within this small framework, we'll call it, like this mathematical framework, where you're saying, "I'm not gonna go outside and do unprincipled things. I'm gonna try my best to stay within these constraints," everything ends up being a LEGO, everything composes with each other. And otherwise, you might have some LEGOs here, some Silly Putty there, some Lincoln Logs there, and you need adapters, and, you know, everything was pure but then something kinda poisoned the well, right? And it kind of blows away the composability of it all. So when I know I'm not in a composable world, sprinkling in some stuff, and it doesn't really matter at that point, like I can program how I like and it can still have benefits. But when I am in a pure world, it's very much like anything will kind of taint the purity of it if you're not very careful about following these laws and properties, and saying like, "Oh hey look, if I have a map followed by a map, I can just fuse those into one map." And someone's like, "Oh, well, my map doesn't actually work like that." (laughs) You know what I mean? So it's hard to reason about. Really, it's all built on generic composable interfaces with properties that hold. And if those properties hold, you end up with your beautiful LEGO world, right?

    KYLE: So it's like 100% is great, or like 20% is great, but anywhere in the middle is kind of dangerous because it pretends too much and trips you up, is that what you're getting at?

    BRIAN: Um, yeah, I guess I'm getting at if you want the guarantee... for instance, if you have, if everything's returning a future, which is, it's like a promise that doesn't run until you kind of pull the trigger, so it'll build up the computation, you can map over it. Instead of calling "then," you call "map," it works exactly the same way. And you can just go ahead and work with futures all day long. And at the end, you call fork and it all runs. But if somebody cheated throughout here, and actually ran it in the middle of something, or, let's say, they mixed futures with a promise that's not actually going to be pure and hold its value, then all of a sudden, when you think things are going to happen, they're not. Or your properties of fusing these things into one computation or one action that doesn't actually hold. So like you said, it's 100% if you really want to get those benefits, and anything less is still great. But it's good to know, or else you're gonna be tripped up. (laughs)

    DAN: Yeah, I think I have common issue in Redux. We added this tip to troubleshooting and people started hitting less. But people sometimes created issues like, "I'm returning the new state but it doesn't redraw, so what's happening?" And when they post the code samples, I see that they have some deep mutation or they don't realize they mutated something because it's not exactly obvious. You need to train your eye in JavaScript to recognize mutations, to recognize when they're doing something bad. And Redux is used that you're not mutating the state, so in comparison by reference, if it thinks, "Oh, nothing changed. I'm not going to re-render that." But, on the other hand, because there is always a punishment for doing mutations, because if you don't see your redraw, people catch that pretty quickly. But if there is no immediate way to tell if something's going wrong, it's really problematic in mixed functional, non-functional code.

    TYLER: Yeah, that kinda brings me to my next question, Dan, is we've kinda seen this shift towards functional programming on the Frontend side of things. So the first question is, do you think that trend will continue and will kind of get more strict about functional programming with Frontend stuff? And then the second question I had, that I think I'm now spacing what it was, Oh, now I remember. So, we've kind of built tools around JavaScript to make it more functional, and JavaScript can do functional things, but it's not necessarily, inherently built into the language. So do you see the future of functional programming on the Frontend side of things being more of Elm or something that's specifically built for it? Or do you think we'll continue to build tools around JavaScript to make it more functional?

    DAN: To be honest, I have no idea. (laughs) Because I see there is a trend of people saying that, "JavaScript is never going to be fully functional, so just forget about JavaScript, go learn Elm and never come back." And that's one view point. But there is also another view point which is that you're a giant corporation that has hundreds of developers and they come and go, and you can't afford to adopt a somewhat experimental language because there isn't enough talent to work in it. And if you need people to be able to jump into code base and to make changes to the code that they don't own, they need to figure it out, you don't want to teach them about Monads or, I don't know about side effects executing somewhere in another land or something like that.

    So I think, at least for JavaScript, what I hope will happen is that we'll have more syntax affordances for functional programming and have more syntax affordances for the immutable state and immutable data structures because that's like the biggest pain point for me right now in terms of working with immutability in JavaScript. Because there are libraries like immutable JS, but then if you print it to your console, if you print an immutable value to console, you're going to end up with gibberish. So the tools don't understand that we need to go through JS. And if you have tools that react, dev tools that display the componentry, they are also not aware of the immutable values, so they don't display them correctly. Then there's a problem, you can set a field on the immutable structure without realizing you took out the set method and get the new version.

    So that's all kind of minor annoyances that contribute to large friction that if you're not disciplined enough, it's harder to do this. And the only reason I think Redux succeeded right now is that ES6 adds erase private data. And I know this is silly, but erase private preference and ES7 object spread, object each preference in which a lot of people already use because it's just so useful. They changed the feature. And, you know, JavaScript is a language with a lot syntax. And some people complain about it, but in that syntax helps beginners adopt less fragile ways of writing code which I think is good. So if JavaScript gets first class support for immutable values, I would be thrilled. That would be enough for me. And if I ever decide to write totally immutable code, okay, I'll just reach there, I don't know, whatever. But it needs to stay beginner-friendly and not full of terminology.

    KENT: I actually, I had a question on that terminology, since you brought it up. Is there a danger in ignoring the terms of functional programming? Or should we just kind of say, "Oh, the terms are for computer science experts, theoretical stuff. Let's talk about more practical things." Is there any danger in ignoring these terms?

    DAN: I'm not really sure. I think it depends on how deep you want to go. Because many people who tweet and blog, they want to go deep because they care about building the stuff, building the abstractions, right? But there are also people who don't really care about building abstractions, they want to build products and they don't want to go deep into the terminology. And I think we ought to make it accessible to them too. It's not really a fault if you don't want to learn this world of functional programming. So of course, it's not going to be all the way, but if we can make at least part of this accessible, I think it's a good start. And, for people who want to dive, they can dive.

    KYLE: I would chime in similarly that I think functional programming is an incredibly sharp, double-edged sword with all of this amazing power that it seems like pretty much all of us sort of universally agree, there's a lot of amazing power here. But it is very sharp to the touch when someone shows up and the first set of results that they get in Google or the first book that somebody hands them starts throwing terminology like Monads and functors and endofunctors. I mean it sounds more like the Star Wars universe to me than JavaScript programming.

    And JavaScript has actually had the opposite path; it has had this path where there was this incredibly low barrier to entry to get into JavaScript. And here, we have this other thing that we're trying to bolt on top, which doesn't work the same way. You don't ease yourself into functional programming, at least under most particular paths. Crockford has a great quote on this topic. And I don't often quote Crockford, so you know it must be good.

    BRIAN: (laughs)

    KYLE: He has a great quote on this topic, he says, "As soon as you learn functional programming, you stop being able to teach it." And I don't know whether that's entirely true or not, but at least for my own part that's one of the reasons why I have held back from getting too steeped in it. Because I don't wanna get to the point where I can't think in anything other than the terminology, because I think that will make it harder to bring people on board to it. So I do think there is almost a danger in getting too much into the terminology early on, is because we basically create almost an elitism; either you get it, because your brain is wired that way, or you don't and you pretty much should just go back to your kiddie framework and let the real programmers figure out the terminology.

    BRIAN: It's so elitist in that regard. I think what I've tried to do with my examples throughout the last couple years was any time someone tried to teach something, I would hear crazy words and no examples and implementation detail -- and that was it. They were like, "Oh, here's a comonad, you can do this," but there's no actual use case and you're like, "What?" And so by providing use cases you can kinda see what this thing is, and, you know, of course there is the danger of, you know, diluting the meta information that comes along with the term. But I think I found myself, I tweeted it yesterday, that I found myself writing the sentence that the... it was like an interesting example of a contravariant monoidal functor is a transducer, (laughs), I was like, that's just...

    But at the same time, somebody says, "Oh, it's contravariant. I can map over the inputand it's monoidal; I can concat it together and it's a transducer, so that's gonna be able to transform as it reduces." And all these things are so loaded and it's a terse statement, but I've expressed so much in so little, not to mention the properties that hold contravariant functors and monoids and things like that. As well as, you know, being able to say, "Oh, well if I have two monoids, I can put them together and form a ring and now we can get the X and Y axis to like, you know, do some crazy algorithm, that I don't know how to write. I can just provide two monoids." It's the same as, we're just talking about interfaces, but they're scary and it's elitist and it's kinda ridiculous. So how do you preserve the meta information and the properties without scaring everybody to death?

    DAN: Sorry, I just wanted to say that one problem here is that JavaScript is not really, I mean, it has types but they're not static, right? And people coming from statically-typed language, or strongly-typed (I always mistake these terms), anyway, people coming from languages where you have types when you declare a variable, they grok a function of programming much faster because if it doesn't fit right, it won't compatible. But in JavaScript, you can run anything, and so you're going to run into weird run time errors if you give the wrong inputs with the wrong types.

    BRIAN: Yeah, I should mention that, to Tyler's question. I'm a big, big, big fan of Elm and Pure script and Haskell and all these languages that give you a compiler help, and give you these types, with, you know, all these extra, you know, for all x and high-order kinds and things like that, or higher ranks. So the point is that doing this in JavaScript is a great way to learn and could actually have some really secret benefits, like, if we could figure out how to use free monads we can express full programs and send them across the wire to run on the server or on other people's computers or on web workers. It's just basically a pure DSL that composes and then you interpret it wherever and whenever. So these things are so powerful that it's really interesting in JavaScript. But, you know, like you said, a typed language is gonna be so much better to write monads in 'cause you need it sometimes, otherwise you're passing in type help to the actual functions, and traversable has that problem.

    KYLE: Is it true to characterize the reason why a functional programmer typically likes types... is it true to characterize that is because the types are part of the constraints that keep you on the functional programming way? Because to our point of our current discussion, there is a debate, I don't know where everybody stands on it, but there's a debate as to whether or not you need a language that is functional to be a functional program, or whether you can write functionally in a non-functional language? I think there's no question, JavaScript is not the same as something like Haskell, because it doesn't require you to stay within these constraints. But do you feel like we have to have those types to keep us in those constraints to really be doing programming functionally? Or is it... couldn't discipline be a substitute?

    BRIAN: Um, do you want to go, Dan? (laughs)

    DAN: Yeah, I just wanted to say that I really like the Flow approach, the gradual type. And it's up to you how much you want to opt into that, and you always have the escape hatches. And I think escape hatches is something that functional programming community doesn't like. And this is the elitist part, where you don't want to provide a way for beginners to opt out of that for a second, because then you're just not sure how to fit this small concern into the global string things, right? And so, yeah, I like that you can, with flow, you decide, you get to decide, where you want to opt into that and if you really want you can opt out for part of the code.

    KENT: So we've talked about functional programming, but the show is also a little bit about immutability, and I think they're related. Can we talk a little bit about how immutability can help us in our programs?

    (silence)

    ...or it can't, evidently, so, yeah, forget about immutability. It's just, yeah, it's done (laughing) just kidding. No, I think if you've paid attention at all to blog posts and the things that are going on in the React community and even Angular 2 now, you've heard all this stuff like, "Oh, immutability's awesome because you can do like a strict equality check on the objects rather than a deep equality check to check that." And then there's always the question, "Oh, well, isn't it crazy memory terribleness to make copies of objects every single time?" I think there's enough content out there that covers most of those cases. So, is there anything in functional programming and immutability, or, sorry, if we don't program functionally or, sorry.... Let me start all over. If we don't program with immutability, do we still get all the benefits from functional programming, or is it just a whole lot better to combine the two? How are they really related?

    BRIAN: I'm back, by the way.

    KYLE: Before the guests actually give the right answer, I will just throw out, (laughs) I'm a fan of treating things as immutable even if they aren't immutable. And I think that would frame my particular perspective. I don't think we actually need to have something immutable to gain the value from the concept of immutability.

    BRIAN: My computer restarted and I wanted to say something about programming, Kyle's last question, 'cause it's a really important one. But let me just let Dan talk about immutability 'cause he's better at that than I am. (laughs)

    DAN: Okay, so the question is, do we have to enforce it? I mean, you can't really... the way I understand functional programming, and I might be wrong, but the way I understand it is that you use Pure functions, and if you use Pure functions, you can mutate things, right? So they always go together for me. And it doesn't mean that you have to use immutable data structures. So I see a lot of confusion about this from the beginners because they see a library called Immutable JS and they assume that, "Oh, okay, if I want to go immutable, I gotta use that." But the reality is that you don't have to use it, it just enforces certain constraints. But you can also promise to be good and not mutate things and just use regular objects and arrays in JavaScript, and this is where additional syntax helps. But other than that, I mean, there's also a saying, "If a function mutates... if an immutable function mutates something inside of it, but it's just... its implementation to fail, does it really matter?" And I think that in this case it doesn't matter. If the API is immutable, it's fine for the parts inside it to be mutable if you want these additional bits of performance, but just keep the API immutable so that the consumers are not overloaded with this kind of mutations because they are hard to think about.

    KYLE: On that topic, I am curious what you would say, because I've always seen one of the primary benefits of a library like Immutable.js is that it gives us the capability without the performance hit. And I think we shouldn't underestimate the potential problems of creating a chain of, you know, say 10 different map and filter, and reduce calls in one big chain, where at every single step, an entirely new array is created and the previous one is potentially garbage collected. There's value in things like transducers, where you try to combine those steps and not loop over them, but it's not just a CPU cost, it is a memory cost. And I've always seen that a library like Immutable.js, it's like growing up into functional programming when you realize, "Okay, I have the theory of FP is that I just make a new array whenever I do a map call." But in practice, that's terrible. I don't wanna create a whole new array. So what I actually need is to make a new thing that's only the delta, and "Oh, okay, that's gonna be really hard, so that's why I need a library to figure that part out for me." So I'm curious what your perspective is on that, do you think that the performance is something that we should think about as programmers?

    DAN: Yeah, totally, but I think it really depends on the product and it really depends on the formats you want because if it's a product for native and if you're changing stuff very quickly, of course you want to minimize the memory usage and you want to minimize the (mumbles), but if it's a website that displays a feed that doesn't change all the time and you can hit "load more" and it displays 20 more items, like I'm not sure that there's a lot of data mutations going on right now. So that's really, are you willing to trade the need for developers on a team to understand the immutable APIs? So you need to learn another API, you need to be capable to use it, you need to take the heat of the tooling, the lack of proper tooling support. Are you willing to trade that for great performance and for constraints? And some people are, in big products, in complex products. But if you're just a beginner learning to create your first website, I don't think you need to think about that. So it's an optimization. And I think before choosing and jumping to conclusions, you need to build a simple stress test for the kind of usage you expect for a product, and measure, does it have a performance problem? And if it does, then it should be using mutable.

    BRIAN: That's something, I was gonna jump in just really quick and say, yeah, there is purely functional data structures, there's ways to handle this, and it only needs to be written once, really. It's not, like you said, being built in the language, learning more adaption, especially where concurrency is concerned. And you know, I just read an article the other day about web workers being the new, in 2016 web workers. We'll see, you know, but as we get to the parallel future and we share things and we mutate things, we're gonna be able to, it's gonna be so much nicer to not have to worry about random mutation side effects, shared memory, all of these things that declarative functional programming immutability give you. If we all agree and we all move towards it, we don't have to worry so much about, nobody's written the most efficient tree yet, you know, somebody will. (laughs)

    KYLE: I sort of, I know this may seem a little bit too reductionist, but I sort of liken the idea, I'm talking at a very base level here, because most people that do functional programming or dabble with it in JavaScript, they see it with respect to things like map and filter and reduce (and maybe for each, even though that's not really functional.) So those three, the map, reduce and filter is what most people call functional programming in JavaScript. And I liken that to a similar thing that we went through as a community about seven or eight years ago, maybe a little longer than that, when jQuery and other frameworks introduced this fluent style of programming where you just simply call a method and then chain another method off it, and chain another method off of it. And the fluent style of programming is incredibly attractive but actually, it leads to a really bad performance profile, which is one of the reasons -- not the only, but one of the reasons -- why jQuery, even though it became very popular, it's hated by most people that really take the true application performance to heart. And instead of having five methods chained together, you prefer one method that did everything all at once, for example.

    And I think the same is true in functional programming, and what I'm coming to is to say, I don't necessarily think that we need a library like Immutable.js to also be savvy of these things. So for example, if I have a chain that has four map calls in a row, I'm performing four separate transformations and four separate loops over the array, over the list every time, then there's another thing in functional programming, another concept, which I know has lots of terminology that I don't understand, but there's a concept of simply composing those transformation functions together and doing one map with that composed thing. And we don't need a library to do that, I don't think. I think we can just explain, or I think we should explain to people, that there is something to be said for not doing extra work just because it looks prettier in our code.

    KENT: So, as awesome as this has been, I think we need to wrap up, 'cause we do have several questions on Twitter. So maybe we should turn this into a three hour show, but, I don't know. (laughs) So, I think it would be valuable to sum up our discussion a little bit. So for the immutability aspect, I think that we can probably mostly agree that for the most part, it's just simpler to think about your applications not enforcing immutability, just promising, like, I swear on my honor, I will not, you know, I will do immutability, but not actually enforce it with the library. But if you're really concerned about performance in your app, then bringing in something like Immutable.js or some of these other immutability libraries, could bring you a great, huge performance boost.

    And then on the functional side of things, we've kind of determined that it's awesome to do 100% functional programming. And in the web, that's like, that's actually extremely difficult to do because you have to have something that's mutating the DOM, and that's, you know. We didn't even really get to talk about mutability at the edges of your program, but for the most part, trying to keep the logic of your application functional. And then if you can't quite do that for one reason or another, even having some of your application functional is good. But you don't want to give the impression that something is functional when it's actually not, 'cause that can be dangerous. So I think that kind of sums up lots of the things that we talked about. Is there anything else that anyone would like to add?

    BRIAN: I just wanted to throw in earlier, my computer just like randomly restarted, (laughs) to the question about, "Is doing functional programming natural or right in JavaScript, like, 100%?" And I think, right now, if you experiment with Ramda, you know, the fancy (mumbles) and all these things, you'll see a lot of benefits and you'll get addicted. So there's something to it, but you should... I've primarily used it to hone my skills and become better at Haskell or Elm, or, I guess, I haven't really done that much Elm, but Pure Script. So that kind of stuff, it's amazing to do this every single day at work and not have to work in Pure script where they won't let me do that. (laughs) Or practice at night and some weekends. And there's a lot of benefits there and a lot of joy there that you will discover -- whether it's right or wrong. (laughs)

    KENT: Cool, thanks. Okay, cool, so let's go ahead and get into our Twitter questions, we do have several here. So the first one is from Connor Elsey, I think, and it says, "Great talk so far, but what are some of these properties..." oh, shoot, I forgot, I was gonna ask for context on this question. Um, I don't know, do either...

    BRIAN: I know what you're talking about. (laughs)

    KENT: Thank you.

    BRIAN: (laughs) I was talking about how using the term, whatever, if I say contravariant functor, someone's gonna say, like, "What are you talking about, get away from me," and bring out the mace, you know. But if you're open to hearing that word and knowing it's not such a scary word, you just need to, it's just a loaded word, it comes with a set of properties just like multiplication distributes over addition, you can have these little code snippets that you know hold true for everything. So, the best example would really just be look at the Fantasy Land spec on GitHub, and it'll just show you properties that hold for each interface like if you say the iterator protocol holds this property that it must hit every single element, that's all we were saying. Like, if you wrote an iterator that skips some elements, don't call it an iterator. (laughs) You know, so...

    KENT: Okay, cool, thanks for having the context, you just pulled that out of Connor's brain. (laughs) So Ignacio Chavez, yeah, I just apologize if I say your name wrong. "What is the reality of SPAS with FP and Lisp. Since FP means no side effects, I don't see people doing web dev."

    BRIAN: I made a cute video about like, FP and Lisp and Scala and Purity and this and that, at some point just like, you know, when you're talking about... it's hard to say FP and Lisp, for me, in the same sentence, 'cause I'm always coming from a Haskell-y perspective. But maybe somebody else can talk about this. Anybody know?

    KENT: I know nothing about this stuff, so, good luck Ignacio. (laughs) Sorry. Okay, Vincent O. asks, "Have any of you guys managed to have a play with Cycle JS, a JS FPU framework built on top of RxJS?"

    DAN: I think I ran the most basic example, although that was a long time ago. But I just had another look at the source examples in the releases, and wait for it to, like, wait for my eyes to get accustomed to the symmetry, actually being able to read this because I understand conceptually, it's not hard. I wrote some Rx code before, and Rx is pretty good but it's a bit more noisy on my eyes. So what I'm really hoping to happen is something AndrÇ Staltz actually, the author of Cycle.js he wrote about it in his latest blog post, is that the RxJS we write is going to have some kind of special API that can be used to build developer tools for Rx that can track all the observables, and how they relate to each other. And it's also possible to do this via static analysis, because you have variable declarations, you have guarantees that they are going to depend one on another, they all have some side effects in between, and so you can build a graph of all the observables in your app. And I think if these tools become mainstream, if we can see the relationships between observables begin to gain much bigger adaption, and Cycle is the more sensible framework I saw that uses Rx, so, yep.

    KENT: Cool, yeah, I've seen the talks and I'm blown away, but it's still way over my head, I think, right now.

    BRIAN: Can I interject? The last question about the side effects, it just kinda made sense to me. You can have side effects in functional programming, (laughs) very much so. In fact, Lisp doesn't enforce that, Scala doesn't enforce, you can just go and do whatever you want, whenever you want. But pure functional programming, different idea, you wanna push all your effects to the call leads, an inversion of control thing. So instead of actually running a function that does some kind of effects, you just basically propagate it all the way up to the controller or whatever you want to call it, the thing that's going to be the last possible line of code and everything else is purely in your model.

    DAN: Yeah, I think this is the biggest, like, if you want to you can get started with functional programming in JavaScript but you're not sure how, just start by pushing your side effects to the edge of your application. For example, this is what React does with view rendering, right? Because you describe your DOM declaratively, and then you push those side effects to React, which has a single file, like React DOM operations, or something like that, with five methods that does all the DOM mutations, but they don't happen anywhere else. And you're going to get really far if you just follow this principle, that you separate the computations from the mutations, and to keep mutations in the smallest slice of your application possible.

    KYLE: My totally lay person non-FP perspective on this is, yes, non-pure operations are virtually required to have any kind of non-trivial application, but it seems like a functional programmer's answer to impurity is, you can write as many impure functions as you want as long as you wrap all those up in a pure function. So it's kind of like, it's not really turtles all the way down. It's not really Pure all the way down, it only has to be Pure at the highest level of abstraction that you expect people to interact with. And everything else inside, I think you're kind of free to do whatever you want. I don't know if that's true, but that's my outside perspective. (laughs)

    BRIAN: Well, I mean, if you consider like a Promise or like we we're saying before, like you're treating a value as if it's there even though it's not. And as you map over it, that value gets passed into your function and you can actually work with it, right? And the IO abstraction, it's a similar idea. It's not asynchronous but you just, you have a value you're working with that's not actually there yet. And what that gives you is the ability to put it into data structures, it allows you to pass that IO all the way around your program, do all sorts of things, and then at the last possible second you can choose to run it or not.

    But it also can do things like earlier, Kyle, you mentioned jQuery's chaining. You know, you can take an IO and another IO action and as you chain those, you can actually fuse into one object, you don't need to keep making copies because of certain laws and properties, we can automate this. Computers don't understand intuition or common sense; they understand very strict properties. So you could say, "I can chain 100 times and instead of returning a new copy, I'll just return this, because it doesn't really matter outside of this world." And by the time we get to the point where we actually want to run the side effects, we could have done optimizations, we could have gotten rid of things, we could have fused things. And you kind of do maybe one DOM reflow in the case of React instead of 30 throughout your application as you're changing things.

    KENT: Wow, so much just made sense to me. Thank you. (laughs) Cool. Alright, so our next question is from Bradley Mick, and he asks, "Are the implicit/non-enforced FP contracts worth hidden tribal knowledge? My history is implicit contracts hurt maintenance." And that would be my history as well.

    BRIAN: Yeah, I think, you know, I think we're talking a fine line between, we must have types or dynamic programming is fine. If you trust, you understand what's going on in the types and you understand the knowledge and people are expressing it, whether that's naming conventions or comments or whatever, where we can't guarantee it without strong types, so, you know, you're in JavaScript, deal with it. (laughs)

    KYLE: I would invoke the comment, the maxim which is not unique to me, "You have to know the rules first before it's okay to break them." So I think once you know them it's okay to break them.

    KENT: I need a T-shirt with that on there, as well as, "Separate your computations from your mutations," (laughs) I love that. Cool. So Charlie Koster asks, "If you allow devs to do stupid things, they will. That's one of the advantages of Elm in regards to FP." So that wasn't really a question, (laughs) but I'm gonna read these ahead of time. But does anybody have any comments about that?

    BRIAN: That's another types versus no types, dynamic versus strong, whatever. You know, I like them both and so I can be like, "Hahaha, you're all silly." Like how Kyle says, "You gotta know the rules to break 'em." If you're in a dynamic language, you know there's types there, and you know you can cheat if you want. But if you're disciplined you can do it.

    KENT: Cool, I think we have a couple more questions, but I don't think that we have the time. There was one other question that I thought most of our listeners and viewers would be interested in knowing about and that is, "Where does the community usually talk? IRC? Dischord? Where is a good place to discuss online?"

    (laughter)

    BRIAN: I know there's a functional programming in JavaScript Google group someone created. There's a bunch of IRC stuff. I've been on an IRC one at some point. People talk about, I have that mostly adequate guide, people talk on the threads on the (mumbles) book. So that's fun.

    DAN: I just use Twitter, I don't use anything else.

    KENT: Yeah, I think the danger or the worry is that you go to a hard-core functional programming community and you're just gonna get nailed for not knowing what a monad is, or whatever. And we kinda talked about that a little bit earlier. So, Twitter's pretty friendly, (laughs) sometimes. So, cool. Let's go ahead and jump into our tips and picks, unless there's anything else somebody wants to bring up that they thought of last minute. Okay, cool. So yeah, we'll go ahead and start with Getify. What do you have for us, Kyle?

    KYLE: So I wanted to just highlight a couple of really, I have several things so I'll go very, very quickly. There's a fantastic book out there by, his Twitter handle's raganwald, JavaScript AllongÇ. It takes a really unique take on this whole functional programming thing. It definitely is true to the principles, but you don't feel reading that book like you do in a typical academic book, so that's a really good one to check out. My tips would be, and I know Lin will love this, I would say, definitely it's time to rediscover the developer tools in Firefox. And I think you'll be pleasantly surprised, there's some amazing stuff there. Specifically, there was an article that Smashing Magazine just released, talking about that and the links will be in the show notes. But I was particularly blown away reading about WebIDE and Valence, as well as the CSS Transforms previewer, those were two that jumped out at me. I hadn't seen that before, thought those were pretty great.

    My picks, I mentioned at the beginning of the show, there's the two-part blog post that literally came out today by Chris Jenkins. The first part is, "What is Functional Programming?" The second part is, "Which Programming Languages are Functional?" Really, actually, the first part of the blog post is absolutely essential. If you've listened to this and you're at all interested in this functional programming topic, go read that blog post. I thought it was great. Since we brought up asynchronous programming a bit, I do have a pick for an article I read a while back, maybe six months back. But it really tries to derive the functional, underlying principles of asynchronous programming from a functional perspective. From callback to future, functor, monad. It's a long article and there's a lot to read, but I found that to be really fantastic, especially since I spend a lot of time thinking about asynchronous programming, so it was cool to see the ties between those two.

    And finally, I will bring up, it was mentioned in passing on the... I think Brian mentioned it, but I'll also pick the article, concurrency's future on the web, it's called, "2016 Will Be the Year of Concurrency on the Web." @cramforce on Twitter wrote that, it's an interesting article. I'm not sure I entirely agree with it. But I am a big fan of concurrency, so I'm absolutely cheering that that will in some way, shape, or form, end up being the future, so. Go check those out.

    KENT: Thanks Kyle. Lin, can you give us yours?

    LIN: Sure, so my tips this week are some Git tricks that I picked up years after starting with Git, and all the sudden I was using them all the time. So these are just two. And if any viewers or any other panelists have any that they want to share, I'd love to hear more, 'cause I love those little tricks that speed you up just that little bit. So one of them is if you do "git checkout - " it will flip you back to the branch that you were just on. So if you're switching between branches, that can be really handy. And another one, of course, there's Hub. If you're not familiar with Hub, check out Hub. That's a really good way to do things with GitHub, specifically. And another GitHub specific thing is you can actually set up your GitHub config to fetch any PRs that have, on a particular repo, whenever you do a fetch, each of those PRs will come down as a branch, too. So that's really good if you have to do reviews. On projects where I've been doing most of the reviews, that's been super helpful.

    And my picks this week are, so we we're talking about functional programming and I mentioned about being easy to reason about. I found a really helpful talk that really helps you understand what people mean, or at least what some people mean when they talk about functional programming being easy to reason about, was Jessica Kerr's talk at React Rally, where she looked at the functional principles that you have in React. So this isn't getting into monads or anything like that. She uses some really interesting analogies, like the idea of tentacles coming in from side effects coming in to your brain as you're working on a particular part of the code. So if you want to get a really quick, easy introduction into that idea, it's kind of like what Dan's talking about, where you separate your computations from your mutations. You know, how that actually makes it easier to reason about code, check that out. And that's it for me.

    KENT: Cool, thanks. Tyler?

    TYLER: Alright, so I just have two picks. James Long, he works in Brazil, he probably works with the U.N.

    LIN: Yes, he does.

    TYLER: He wrote a really good blog post called, " Starters and Maintainers." It's basically him speaking from the heart. He has a lot of open source projects and they're really fun to start, and sometimes they get really hard to maintain, so he kinda just walks through his struggle with doing that. And I think it really highlights the emotional, I don't know the exact word, but sometimes it's tough being an open source author, and he really nails that argument really well, so check that out. And my last pick is, "Classroom Coding with Professor Frisbee," it's one of my favorite things on the internet, if you haven't seen it.

    BRIAN: Thank you, thank you.

    TYLER: It's fantastic. Just go watch it. I think there's three episodes right now, Brian, is that right?

    BRIAN: Yeah, I gotta get making some for Egghead now, so, I might take a break. (laughs)

    TYLER: Basically it is a very fun way to learn about functional programming topics, so definitely check that out.

    KENT: Awesome. Okay, so for me, I just am about to start, well I guess I've technically started full time at PayPal, and I'm working from home. And my wife, for Christmas, got me, she made me a standing desk, and it's amazing. My wife is a boss. So try out a standing desk. Standing desks are awesome. You just feel like you have so much more energy. And I realize not everybody can do it, but it's really nice. And you can have a chair and whatever, and sit down every now and then, but it's really nice to be able to stand during the day.

    And my picks, I pick Lowe's, because Lowe's is responsible for the wood that created the standing desk. And I also pick the ES2016's Pipe Operator, there's a specification for it. It's kind of interesting and it's related to our functional programming that we talked about. And then "Learn JavaScript Arrays in Depth," this is a playlist on Egghead.io that talks about reduce and map and a bunch of other JavaScript array methods that you should be familiar with when you're doing functional programming in JavaScript. So that's me. Brian, why don't you go next?

    BRIAN: Sure, so, I (laughs) secrets out of my crazy word link. Oh yeah, so John Degoes, he wrote a great article on modern FP architecture. It's really like, Pure script or Haskell-y so it's not so JavaScript-y, but for me, it's one of those ways that we're gonna be able to write Pure UI code that could work on any framework or whatever, and just basically write high-level descriptive DSLs that actually compose. He talks about free monads and free applicatives. He gives a really good idea of what they are and how useful they are and where we should be going as a the functional community, but it's not necessarily JavaScript 'cause it's kinda uncharted waters. And there's no really good way to do syntax, which is pretty much how you use them. So we need some creativity there, but I think it's really important ideas. So there's that link. And then, see what else I added here. Oh, my tips. So yeah, I watched Dan's Redux videos. Those are so good and they just get you so excited to write in a functional way. And that in combination with Ramda JS or Immutable JS and other things like that, you could really set up an environment where you feel like you're in a whole new language and it's just so much fun. There's that.

    And I just wanted to give one more tip: if you're trying to learn functional programming and you're past the beginner stage and you're in the intermediate stage and you see all these crazy words and you wanna read the White Papers, but you're seeing math syntax and Greek letters, and scary stuff like that, a really helpful book for me was the Haskell programming, or, it was like "The Haskell Road to Maths and Logics," or logics and maths, I don't even know how to say it. I'm just gonna look at the link. "The Haskell Road to Logic, Maths and Programming." And it's an incredible book that kinda goes through just linear logic, some set theory, and some category theory, and kinda shows you, from beginning to end, how all the stuff is related so you can kind grok this Curry-Howard isomorphism stuff, and really read these White Papers without being afraid. So I loved that book. From being someone who just sucked at math in high school and didn't get through it in so much college (laughs) and just like, so there's that.

    And then finally my pick is ForwardJS, February 10th, we're gonna have a functional panel. So, you know, Evan Czaplicki from Elm is gonna be there, and Phil Freeman from PureScript is gonna be there. We're gonna have a full, and the author of Immutable.js, or an open-source maintainer at least. So we'll have some cool functional stuff there. Okay, that's it. (laughs)

    KENT: Tons of resources, man. The tips and tricks on this show are stellar. Dan, what do you have?

    DAN: Sorry, muted. So my first pick, it's a document that you can read, it's called, "A General Theory of Reactivity." It's a GitHub repo, but it's just a very long readme by Kris Kowal, who was the author the Q promise library, which is not as popular anymore, but it was one of the pioneering promise libraries before promise back emerged. So it compares different async functions like iterator, which is synchronous and observables, which are asynchronous and promises. And it really, if you were confused about these terms it's a really good way to just sit and read through all of it. He does a great job explaining these and how they relate to each other.

    So my second pick is going to be an article from a few years ago, two years to be precise. It's called, "The Future of JavaScript MVC Frameworks." It was written by David Nolen, the author of Om, and this was one of the articles that sparked my interest in React. And his predictions came true, in a way, because two years ago, like keeping (mumbles) straight in a single immutable object, it seemed like a crazy idea to most JavaScript developers. But today, with access fairly popular, and it's exactly what it advises. So it's a great way to look back three years ago and see how much we progressed during this time.

    My third pick is a whole blog, it's called, "Programming in the 21st Century." And it's my favorite blog. So the link is through the archives. I read all of it, and I suggest you do the same. If you have a sleepless night or a lot of time, just go through all articles, because it's amazing. It talks a bit about functional programming and a lot of different things. The entries are fairly short and there's a lot of condensed code there. And there's a lot of empathy and friendliness, it's not elitist, so it's a great blog. I suggest you read it.

    And finally, one project that caught my eye recently, if you use Redux, you might want to check it out, it's called, "Redux Saga," which is an alternative way to write side effects for Redux, like you want to fetch data, usually you do this with async middleware like Redux Thunk. But Redux Saga is alternative way to do that that promises to be more composable, promises to be easier to test because it's based on generators and it's declarative, so you can test things in isolation. And it seems really great for complex flows like when you have a registration flow, when you need to tell the user to do this, do this, so you have a script of actions that need to happen in a synchronous way, it's a great way to orchestrate those without jumping to use observables if you don't want to learn them yet. So these are my picks.

    KENT: Alright, awesome. Okay, so that's our show. Just some closing announcements here really quick. Go to suggest dot JavaScriptAir.com to suggest episodes for us, topics and guests. And maybe we'll have some awesome, well, hopefully we have awesome stuff in the future. (laughs) Maybe some of those will be your suggestions. And then also, we love your feedback, so go to feedback.JavaScriptAir.com and submit some feedback to us, and we do take that to heart. And then, again, next week is unit testing in JavaScript show, that we're super excited about, same time, same place. And follow us on Twitter, Google Plus and Facebook to keep up with the latest. So thanks, everybody, and we'll catch you on the Twitters. See you next week.

    LIN: See ya!
  `,
}
