export default {
  title: `Typed Functional Programming in JavaScript`,
  guests: [
    {
      name: 'Alfonso García-Caro',
      twitter: 'alfonsogcnunez',
      picks: [
        `[Fable](http://fsprojects.github.io/Fable/)`,
        `[F# for fun and profit](http://fsharpforfunandprofit.com/) - Learning F# and FP`,
        `[Ionide](http://ionide.io/) - F# plugin for Atom and Visual Studio Code`,
      ],
    },
    {
      name: 'Richard Feldman',
      twitter: 'rtfeldman',
      links: [
        `[How to use Elm at Work](http://elm-lang.org/blog/how-to-use-elm-at-work)`,
        `[NoRedInk](https://www.noredink.com/jobs)`,
      ],
      tips: [
        `Don’t wait for a rewrite! Introduce a new language incrementally. Build a small thing that works. Get that small thing in production. Then expand.`,
      ],
      picks: [
        `[Elm in Action](https://manning.com/books/elm-in-action)`,
        `[Frontend Masters 2-day Elm Workshop](https://frontendmasters.com/workshops/elm/)`,
        `[6 months of Elm in Production](https://www.youtube.com/watch?v=R2FtMbb-nLs)`,
        `[Building a Live-Validated Signup Form in Elm](http://tech.noredink.com/post/129641182738/building-a-live-validated-signup-form-in-elm)`,
      ],
    },
    {
      name: 'Phil Freeman',
      twitter: 'paf31',
      links: [
        `[PureScript project website](http://purescript.org)`,
      ],
      picks: [
        `[Pux library](https://github.com/alexmingoia/purescript-pux)`,
      ],
    },
    {
      name: 'Jordan Walke',
      twitter: 'jordwalke',
      links: [
        `[Flow](https://flowtype.org/)`,
        `<a href="https://en.wikipedia.org/wiki/ML_(programming_language)" alt="ML wikipedia page">ML</a>`,
      ],
      picks: [
        `[Vim-mode-plus](https://github.com/t9md/atom-vim-mode-plus): Atom plugin recreating Vim’s editing paradigm`,
        `[Real World OCaml](https://realworldocaml.org/): Great technical book, free online version`,
      ],
    },
  ],
  description: `
    "Tie your hands to free your mind" is a mantra you hear that applies really well to the constraints that you put on yourself by embracing statically typed languages and functional programming. We're going to hear from various people about their respective visions of typed FP in JS.
  `,
  youTubeId: 'mwdXBFtRl0o',
  podbeanId: 'e2iiw-6180fa',
  shortUrl: 'http://jsair.io/typed-fp',
  host: {
    picks: [
      `[React30](https://react30.com/) episode [006 - Origins of React](https://youtu.be/yiCnfJ1rflI) with [Jordan Walke](https://twitter.com/jordwalke)`,
      `[Midwest JS](http://midwestjs.com/) next week - [tickets](https://ti.to/midwestjs/2016) are still available!`,
      `My frontend masters workshops are next week! [Webpack Deep Dive](http://kcd.im/fem-webpack) and [Writing an Open Source JavaScript Library](http://kcd.im/fem-oss) - tickets are still available for in person and online.`,
      `<a alt="Ragtime" href="https://en.wikipedia.org/wiki/Ragtime_(musical)">Ragtime</a> the musical`,
    ],
  },
  panelists: [
    {
      twitter: 'dan_abramov',
      picks: [
        `[create-react-app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)`,
      ],
    },
    {
      twitter: 'drboolean',
      tips: [
        `Use an ide or vim setup`,
        `Learn to reason about type signatures alone`,
        `Constraints are great, but start simple and dial them up later`,
        `Write simple code w/o abstractions until you feel the pain - then learn abstractions to solve that`,
      ],
      picks: [
        `[Math primers](https://jeremykun.com/primers/)`,
        `[What a bijection is not](https://github.com/twitter/bijection/issues/41)`,
        `[Functional Geekery Susan Potter](https://www.functionalgeekery.com/episode-61-susan-potter)`,
      ],
    },
    {
      twitter: 'pamasaur',
      picks: [
        `[Mies: Minimal ClojureScript template](https://github.com/swannodette/mies)`,
      ],
    },
  ],
  transcript: `
    KENT: And we're live with JavaScript Air! Hello everyone. I'm so excited about this episode. This is gonna be so cool. We're gonna be talking about typed functional programming in JavaScript. And we have some really amazing people here with us today, so I'm really excited. This is episode number 34. JavaScript Air. It's fun.

    Let's go ahead and I'm gonna give a quick shout out to our sponsors, who make lots of the cool things about the show possible. First, our premier sponsor, Egghead.io, has a huge library of bite-sized web development training videos. Check them out for content on JavaScript, Angular, React, Node, and much more. Egghead.io is also the host of two free courses about Redux from Dan Abramov. Find them at egghead.io/Redux. And Dan is here today! Fun stuff.

    Front End Masters is another sponsor. It's a recorded expert-lead workshop with courses on Advanced JavaScript, Asynchronous and functional JS use as well, lots of other great courses on front end topics. Find them at frontendmasters.com.

    And Track JS reports bugs in your JavaScript before customers notice them. And with their Telemetry Timeline, you'll have the context to actually fix them. Check them out and start tracking JavaScript errors today at trackjs.com.

    And WebStorm is a powerful JavaScript IDE. Working with Angular, React, or NodeJS? Then you don't want to miss its super intelligent coding assistant. Use the discount code 'JavaScriptAir', all one word, the 'J', the 'S', and the 'A' are capitalized. So use that code at checkout at jetbrains.com/webstorm to get 20% off of your WebStorm personal subscription. I'm gonna add that code to the JavaScript deals page or the JavaScript Air deals page, so JavaScriptAir.com/deals, and you can find that code there.

    And then Trading Technologies is looking for passionate and inventive full-stack JavaScript developers who want to work on cutting edge solutions in a collaborative and challenging environment. Go help them build the top choice platform for derivative traders.

    Alright, sweet, those are our sponsors. We're so grateful for them. Because this is a live show and many of you are watching live, you can actually interact with us, it's awesome. So if you go to Twitter and use the hashtag #jsAirQuestion, you can ask us questions and at the end of the show, we'll go through some of those questions.

    And then, this is a weekly show, so next week we're gonna be talking about mentoring. I get a lot of questions about people looking for mentors, and I recently got some questions about how you can be a good mentor to kind of solve this problem of people looking for mentors. I'm really excited about next week's show, How to Be a Mentor, with a couple expert mentors, Colt McAnlis, Pam Crayton, Jed Watson and Taras Mankovski. Really excited, it's gonna be great. Cool, so that is that.

    Let's go ahead and introduce everybody that we have here. We have a couple panelists, and a bunch of guests. So first, for our panel, we have Dan Abramov.

    DAN: Hey there.

    KENT: And Brian Lonsdorf.

    BRIAN: How's it going?

    KENT: And Pam Selle.

    PAM: Hello.

    KENT: Great, and I'm your host, Kent C. Dodds. And then, for our guests, our distinguished guests, (laughs) we have Jordan Walke.

    JORDAN: Hey, thank you for having me on.

    KENT: Thank you. And Alfonso Garc°a-Caro.

    ALFONSO: Hi there, how're you doing? Thanks for inviting me.

    KENT: Sure, sure, and Phil Freeman.

    PHIL: Hi there. Yeah, thanks for having me on.

    KENT: Yup, and Richard Feldman.

    RICHARD: Hey, great to be here.

    KENT: Great to have you. This is so awesome. One of the things that I love about JavaScript Air is the amount of perspectives that we can have on the show. And so we have a lot of different people on the show with interesting and unique perspectives and backgrounds on the topic of functional typed JavaScript. So let's go ahead and just kind of get into things. I think it would be useful to kind of get an intro to each one of our guests. So yeah, let's go ahead and do that. Jordan, do you wanna give us a quick intro to yourself, who you are, what you're interested in, and whatever you wanna say?

    JORDAN: Yeah, sure. So I'm an engineer at Facebook with Dan and I work on product infrastructure. One of the things that we're responsible for was React, and we continue to work on other cool systems like Relay and React Native. And right now, I'm working on a project called Reason, which is relevant to the topic here. It's a new front end or a new developer experience on top of the OCaml compiler.

    KENT: Awesome. Yeah, we're definitely gonna chat about that. Alfonso?

    ALFONSO: Hello, yeah. I'm talking from Madrid, and I'm working at (mumbles).com. I'm very happy that Jordan is here because actually we are working on creating some F# type of type provider for GraphQL, this technology created by Facebook. But I would-- (speaking through static)

    KENT: Alfonso? I think you're really scratching out really bad, I'm sorry.

    ALFONSO: Can you hear me?

    KENT: Okay, yeah, that's much better.

    ALFONSO: Okay. So you can hear me now?

    KENT: Yeah, that's better, thanks. (laughter)

    ALFONSO: I'll just start over, I'm working at (mumbles).com, and actually we're doing some type providers, F# type providers, with GraphQL. So I'm very happy that Jordan's here so I can maybe later I can ask him some questions. But the reason I'm here is because I developed Fable, which is a pseudo compiler because it's, maybe we can talk about that later, but it's a tool to transform F# code to JavaScript using Babel. So yeah, that's all for now.

    KENT: Awesome, Phil?

    PHIL: Sure, yeah. So hi, I'm Phil. I'm based in L.A. and I work on Haskell code a living, that's a (mumbles) networks. And in my spare time, I work on the PureScript compiler. So I started working on PureScript about three years ago, just under three years ago. So I continue to work on the compiler development tasks and then also I have some libraries I maintain. I'll (mumbles) library development, that sort of stuff.

    KENT: Great, thanks for your work. And Richard.

    RICHARD: Hi, I'm Richard. I write Elm code for a living at NoRedInk. We use Elm for our front end, I wouldn't say almost exclusively, but majority of our front end work is in Elm. Also, we're hiring, if you wanna do Elm stuff. And I'm also writing the book Elm in Action for Manning Publications. And speaking of our sponsor, Front End Masters, I'm doing a two-day Elm workshop for them in September. Excited about all of those things. And yeah, really excited to talk about typed FP in JavaScript.

    KENT: Awesome, yeah. Front End Masters is great. Cool, yeah, so let's get into it. We have a couple of different-- you all referenced these different things that are, programming languages that are intended for deployment to the web, right? But we can't actually deploy these languages you've talked about to browsers of today because the run times don't actually support them. And so you transpile, or compile those languages into JavaScript, that's supported in all the browsers. I wanna talk briefly about each one of these different solutions, and why they're valuable. I think it would be really useful though to start out with, why is it important for us to or why is it even useful for us to have a different programming language for the web? Why can't we just use JavaScript? What are the benefits of typed functional language? Anybody can take these.

    RICHARD: I'll say reliability. I mentioned that we use Elm at NoRedInk. We've been using it in production for about a year, we have about 35,000 lines of Elm code in our code base. In that year, the number of production run time exceptions we've seen from our Elm code is zero. It has not actually crashed at all yet. We have tons and tons of JavaScript run time exceptions, actually. First we used Airbrake, now we use Rollbar. But I mean, that tool's job is to catch the things that blow up on our end users from our JavaScript code and not from our Elm code because it hasn't happened yet. So definitely, compiling to JavaScript is additional overhead over just using raw JavaScript.

    But I do wanna make an important note here, which is that everyone compiles to JavaScript. Everyone does it. Nobody doesn't compile to JavaScript. If you have Babel, you're compiling to JavaScript. If you use, you know, Uglify, you're compiling to JavaScript. The real question is to me, not whether you're compiling to JavaScript, because you are. I mean even if you're using JSX, you're compiling to JavaScript. But rather, what is the gap between your target language, and the language you're writing. So certainly, there is a higher learning curve to doing something like Elm compared to something like Babel. But as far as compilation steps go, I think that ship has sailed. Everybody's doing it. Everybody's always going to be doing it forever. I don't think we're ever gonna go back to a world where people don't compile to JavaScript.

    JORDAN: Even if (mumbles) JavaScript today, or ES6, not all browsers support it yet. So we're going to always have some modern standards compliant version of JavaScript that compiles into older JavaScript for older browsers.

    KENT: I totally agree. I know that, for some people they're thinking, "Oh sweet, once ES6 ships in all the browsers that I have to support, then I can stop." But honestly, there will always be features of the language that you want to use. And even beyond that, just like you said Richard, you're always gonna be uglifying your code. It's kind of a given, you're gonna have a build chain, and why not just stick a typed functional language compiler in there, in that build chain?

    JORDAN: I think it's a good question, but I also think, you know, three or four years ago, that phrasing of the question would make a lot more sense. But increasingly, lately, I would almost kind of subvert that question a little bit, turn it around, and ask, "Why would you program in JavaScript today?" Because the options out there, they're immense. There's so many different ways for you to program in the language that you want, and then target JavaScript. I think the question now is increasingly becoming if you could choose any language that you wanted, why would you choose JavaScript to target the browser? And there's some good reasons for that but it's not exactly clear anymore.

    KENT: Yeah, actually, just in response to that, I know that lots of people's resistance to using anything outside of JavaScript is the sheer knowledge base of the broader JavaScript community. There's so many people in the world who know JavaScript, and there are very, so many fewer people who know PureScript or Elm or F# or whatever. And so I think that's one reason why people are hesitant to learn it because suddenly, the stuff that they're learning makes them maybe a touch less marketable at getting jobs at places that are already doing JavaScript. And then from the company's standpoint, they might be afraid to adopt these kinds of things because it makes it harder for them to find potential employees.

    JORDAN: Yeah.

    PAM: So, I wanna backtrack to Richard's original statement in terms of everyone compiles to JavaScript because I wanted to remind us that polyfills exist, and that there is such a thing as not using a compiler. Using a compiler is a different step than doing, say, I mean this the thing of, you know, we've kind of stepped away from this as an industry but it is a thing that you can still do and polyfill features. If you can write it in ES5, and your compiler is compiling down to that, then theoretically, you can write a polyfill for that feature. Or you can use someone else's polyfill.

    BRIAN: Not all JavaScripters, is that what you're saying? (laughs)

    PAM: Maybe. (laughs)

    JORDAN: There's some challenges with new JavaScript language features, new semantic features like (mumbles)

    PAM: True.

    JORDAN: If you're to send them to older browsers, they would just crash when the page loads.

    PAM: True, good point.

    JORDAN: But there is some relationship between mini classes and stuff like that, you can maybe polyfill those.

    RICHARD: I would note that even people who polyfill, typically, I mean, I'm not aware of anyone who doesn't minify their code in production, unless they're working on a toy app or something like that, like people who, it seems like, and maybe this is my ignorance, but my impression is that basically everybody has some compilation step or other, they're just varying degrees of invasive.

    PAM: Sure, I could go with that.

    BRIAN: So I wanted to throw a quick question out there, I think this is a burning question of a lot of people I work with and people who are skeptical of typed functional languages. What can the types save you from? You mentioned there's not a lot of run time errors, and I think a lot of people think, if they wrote a test, that will cover a lot more ground than a type could. So I'm curious, in particular, PureScript has a lot of constraints you can lay on the types. I'm not as familiar with Elm, but I think it also has those, so I was curious what you can catch, or what type of things you're catching with types.

    PHIL: Like you said, PureScript has quite the use of interesting type system features that's of design to help you catch a lot of stuff at compile time, right, a lot of different types of bugs at compile time. And then, you have Haskell and (mumbles) and even further towards this very strongly typed end of the spectrum, and different languages that are wider on the spectrum. But for me, I think for power to weight ratio, it's of the really simple type system features that give you the most, that are the most interesting. In Haskell, we have something like new types, PureScript has something similar. And this allows us to distinguish between things like, "Do I have a string that represents a phone number?" versus "do I have a string that represents an email address?" or something, or different types of strings that are categorized in different ways so I can't mix them up. At compile time, I will be told if I've mixed up a phone and an email address or something.

    Another good example of that, I think, is units of measure or something, which is maybe not simple from an implementation point of view, but conceptually simple, that we want to say, "Okay, this number represents seconds or something versus kilograms or something." Patch that in or something. There's all of these very interesting types of features that allow to assert much more interesting things, but, it's sort of simple stuff that's really interesting as well.

    ALFONSO: Sorry, just coming back to the first question, Pam's question, why to compile to JavaScript. I think some years ago, most of the time the answer to this question was JavaScript was not a mature language, so you need a language more features. Like for example at the moment, CoffeeScript. But right now JavaScript is very mature. You have these tools, like Babel, to transpile new features to old JavaScript that can run in old browsers. So I think, for example for me, the reason to develop Babel was not because I did not like JavaScript, I actually love JavaScript, I like to think of JavaScript as more of a platform, like when we talk about JVM, the Java Virtual Machine. And now it's incredible that ecosystem is incredible, the implementation is incredible, the tools are awesome. It's not only a browser, you have Node, you have GitHub Electron, you have also Reactive Native, I know these are also like a (mumbles) tools. And so it's incredible. It's a place where you want to be. I love F#. I love the language, the community, the tool. So I just want it to be there. So that's the reason for me.

    And trying to replay for quickly to Brian Lonsdorf, I think it's also great it's a very long debate and I think it's very difficult to settle it down with a couple of words that dynamic programming versus typed programming, I think it's-- because you get used to something so I hear it always that people that love dynamic programming that it takes a lot of time to define your domain model with types. But I think it's true with languages like Java or C#, they have been verbose (mumbles) types. But with a language like Elm or Haskell or PureScript, I think it's much easier to define the types. And for me, of course, you need to get used to that. The types drag you to the right path, so you first define your (mumbles) model and especially we need to use very light-weight tool, and then later you can just let the types drive you. If that makes sense. (laughs)

    PHIL: Yeah, I was interested about what you said about JavaScript as a platform. (mumbles) It's actually a very good platform, right. It's a compile author and also a compilation target. JavaScript targets issues as a compilation target but you know, functional languages, it's actually quite nice right? You know the fact that we have first dollar functions and all these things and you know, nice light-weight abstract mechanisms, makes it actually quite a good target for compiling functional (mumbles).

    So going back to, somebody asked sort of why we compile to JavaScript, and Richard said that everybody compiles to JavaScript first. I think like it's not really a question anymore of why you would compile to JavaScript, because of wherever along the spectrum, you sort of choose a language you want to compile to, right? Which is why, as you're choosing these languages, it's interesting to think how they use JavaScript as a platform, like how the good the interoperability is and how (mumbles) sort of mix and match together, I'll sort of compile a code that (mumbles) of takes code compiled by PureScript and mix it together with Babel code or a different compilation output.

    RICHARD: So to get back to Brian's question of what do types get you on top of tests? Here is how I see it, there's sort of a spectrum and it's a spectrum of guarantees. And what these guarantees get you is, in particular, when you're debugging or re-factoring, answering the question, what is and not possible here? Like what does this code do? So at the one end you have tests and so a test will tell you, if you run your test suites, you can say certain things about your code. So you're trying to hunt down a bug and you're like, "Where could this bug be?" And potentially it can be in any part of your program. So your tests tell you, "Okay, this part it's not this, it's not this, it's not this, it's not--" In each case that's been numerated you can say, "these tests tell me that the bug is not here."

    Okay, so let's say you add on a layer of type-checking. So like TypeScript. So now it's going to tell you, "Okay so, my problem is not a type that's matched between these two things. At this point this value has this type," so you've narrowed it down even further on top of your test. You can take that one step further beyond that and say, "Okay, not only do I have that but I also I have these things are constants and these things are immutable. So now I know that not only do these things have these particular types in these particular tests, but also they can't be mutated. So these values that are in this function this time, they can't have changed as a result of other functions being called because they're immutable, because they're constant." And then even one step further beyond that, is saying, "Okay, not only do I have those guarantees but also I have the guarantee that these functions are not doing side effects that are potentially impacting other parts of my programming."

    And so that whole spectrum, each of those things gives you different guarantees. And so the immediate one is, you know, type-checking and you can get that from like TypeScript, right. So, this is a panel about-- maybe panel's the wrong word, but this is a show about typed functional programming, right? So, I think there's an important distinction between just adding a type-checker and also changing the design of the language itself to rule out additional different things. So like, I don't know as much about Fable or Reason, but I do know that in both PureScript and Elm, if you look at function and it says, "This is a function that takes a string and turns it int. I know a lot of things about that." I know just from that one line of code, that's like 12 characters worth of code, I can say, "Okay this function only accepts strings. It does not accept null, it's not going to accept undefined, it does not accept lists, doesn't accept anything like that, just string and it only returns ints. It does not return decimals, it doesn't return objects, it doesn't return null, it doesn't return undefined and it doesn't run any side effects. It's not gonna touch it's argument, it's not gonna mutate that argument, it's not gonna mutate anything else." I can know all of these things, just from like 12 characters of code. And when my entire codebase is covered in these things, the debugging experience is just completely unrecognizable from JavaScript, where you're like, "Okay, what does this function do? Let me go read the entire implementation and go read all the tests, just to figure out something that I can get in Elm or PureScript in like 12 lines of type annotation." So that's the big benefit for me.

    JORDAN: Yeah and just driving that, it kind of sounds like really restrictive, "Oh, this only takes a string, it can't take an int," but all of these languages that we're talking about today, Elm, PureScript, OCaml, Reason, they also provide these mechanisms for you to express what could be accepted. Like it either takes an int or it takes a float, or it takes a string and you model that and express that. So you can expressively describe what is taken, not just what isn't accepted by a function.

    KENT: So I think this reminds me of, I don't even know who to attribute this to, but there's the quote, "Tie your hands to free your mind." I think that kind of is the whole mantra of functional programming and immutability and all of this is that, like sure you're kind of giving up a little freedom or you know liberty to kind of do whatever you want, but what's nice about that is everybody else is giving up that same freedom and liberty. And so when you go to look at somebody else's code, you have to hold less in your head. And that's one of the things we're always fighting for when we're developing applications is I only have so much space for state in my head and the less I have to keep in my head to maintain this codebase, the better.

    JORDAN: Yeah I totally agree.

    PAM: I feel like that's such a weird phrase, Kent. (laughs) Like I guess there's somewhere where I disagree with types being a limitation. Because I think what you're trying to describe with that phrase is constraint-space programming, which is a thing I've heard people talk about. And I'm not sure if that has a relationship to types. So I think, because I would even disagree so far as to say that using a type system is codifying a thing that you were doing anyway. Like when you wrote, choosing the simplest example, when you wrote a function add, you expected to hand it a number, you didn't necessarily expect to hand it a string. And so types are a way to codify the thing that you were already trying to express. Which is not really a constraint, it's actually being more explicit about what you mean.

    KENT: Right, I agree that it's more explicit, but there are-- like in functional programming and in typed programming, you do have constraints. Like that's part of the whole idea is this idea of constraints.

    PAM: Can you expand on that though?

    KENT: Yeah, so we'll take an example of functional programming. Part of the idea of functional programming is no side effects. And so you have something that takes some arguments and then you want to make a call-out to the dom. Well you can't do that because in functional programming that's the side effect. You're breaking out of the constraint. So in that sense, you're tying your hands. You can't do as much as you could before with just regular JavaScript. But by doing that, you're giving yourself some guarantees that are like really valuable. So you have to think about that, that's kind of what I mean by "tie your hands to free your mind."

    PAM: Okay, yeah I think that helps.

    PHIL: As a producer of libraries, it can kind of seem like it's burdensome to have to sort of start with these constraints, right, but the converse is that as a consumer or somebody trying to use a library, good types and those constraints should also serve as a documentation tool, right? As Richard said, if I see a function from string to edit and somebody else rolled that function, since I'm at the library, I know exactly how I should be expected to use that. I can expect it to work if I use it right a right way. So types would serve as good documentation tool.

    BRIAN: I should throw out there, if you're not familiar, you can actually constrain things with your types as well. Say like in your PureScript by example, you can constrain functions that are partial or total. Or you add type constraints in there. So they're kind of related too.

    KENT: Yeah Richard, you can go ahead and bring up hiring if you want. (laughs)

    RICHARD: Yeah so I just wanted to respond earlier, Kent you mentioned that there are different reasons people choose different languages to compile JavaScript. And one of the big attractions of JavaScript is sort of -- or JavaScript or languages that are very close to JavaScript, like Babel or like CoffeeScript, is the huge ecosystem of libraries as well as the huge knowledge base. Whereas, not as many people know Elm, know PureScript, know Fable, know Reason or Ocaml in comparison. And you mentioned two things about that, one is that you might have people being reluctant to sort of take the plunge and try this new thing that's sort of untested, that's sort of had this much smaller community. And two is, you might have trouble hiring people. The second thing is interesting to me because we now have a good bit of data on that.

    So by far the most effective tool we've had for hiring front-end people is using Elm. I'm not kidding, like before that, we went almost two years without making a front-end hire because it's just so hard to find good front-end people. Ever since we've started using Elm, it's almost like people are beating down our door to work here. Like people want to use good tools and good people want to use good tools even more. And so the fact that we're able to say-I mean, we can practically just show up to a conference and say, "Hi, we use Elm in production and we're hiring. And people want to work here."

    And it's really surprising because you'd think that, "Oh well, there's a much smaller number of people who know Elm out there." And that's true, but there's a lot of people who want to learn it and who want to use it because they're intrigued by it. And so we don't expect anyone to know Elm on day one but it doesn't take that much to learn, believe it or not, if you're surrounded by people who know Elm. Or if you're reading a good book on it like 'Elm in Action,' shameless plug. (laughter) But it's really true that, you know, as counter-intuitive as it might seem, if you're trying to hire good people, being able to say you're using a really awesome technology is a huge selling point and makes your company really stand out from the crowd.

    JORDAN: That's a good point.

    ALFONSO: Yeah, I'd like to point out, Phil and Richard have been talking about the side effects. Pam also as well. I think we should distinguish between a pure functional languages , like this coming from Haskell and language maybe in this case maybe Reason, as well as F#, they both come from OCaml. So it's an impure functional programming language, so it means that it allows you to do these kinds of side effects. And even for Fable, for example, you can even do dynamic programming. So F#, we say that it's functional first language but it's not-- you can apply different products with if you needed to.

    So it's the same way as when we are talking about dynamic programming, you say, "No, no I want to do things very quickly. I don't want to spend time creating my mine model." So in this case, it's more or less the same as the milistep. You think that maybe something's unique to access the DOM but you need to mutate something. So it's good that you have this feature, but I completely agree with Richard and Phil, that if you take this job and you get excited to go to the completely pure language, I think the chances that you get hours and the work time are much less.

    BRIAN: I just want to-- And that's totally right, it's good to know about the distinction there. And I think on-boarding or learning the language is pretty difficult especially in a pure setting. And one of the hardest things, is to actually understand what the compiler is trying to tell you or know how to fix these kind of random type errors. Can anybody speak to, how to learn a language, like a real typed functional language that might be totally different from what they're used to?

    PAM: Do you mean-- so Brian, which is your question, like where are some suggestions for someone to start or maybe even just people sharing their personal experience?

    BRIAN: Yeah, coming from a dynamic JavaScript language, where they just kind of throw some arguments at a function and it writes to the screen, how do you start learning?

    JORDAN: I think if you've never used a typed system before, something like Flow, which is one of the things our team builds for JavaScript, eases you into the notion of types and it kind of does it gradually. So it's not going all in at once, but if you wanted to do that, I think Elm has a great reputation for being very newbie-friendly and that developer experience of getting on-board is just really seamless. And I think that could be a great way to try, sort of the complete picture, assuming you don't have side effects on anything.

    ALFONSO: Yeah, Elm has set the standard for compiler-friendly message. Friendly compiler message. So yeah actually, there's a movement now, in the F# community, to make the compiler messages more friendly. And we have Elm as the goal.

    JORDAN: And I think that, it's not like when you dive into one of these languages, like either Haskell, Elm, PureScript, OCaml, Reason, it's not like, you've gone in this one direction and, "Oh no, I've kind of strayed from these other languages, it's going to take a lot of work to learn the other ones." That's not the case, it's actually, once you learn one of these ML-derivatives, they all kind of come from the same family of programming languages. Once you learn one, learning the next one is just really easy because you can relate a concept of one to the other instantly.

    KENT: I think that's actually been one of my fears, so I'm glad that you mentioned that Jordan. To be perfectly honest, I totally love the idea of a typed system, the idea of functional programming, but I've yet to actually jump into it because there's a little bit of decision like fomo going on there, which one should I really pick? And also it's a matter of, how do I find the time to learn this stuff? Like when I'm not doing it on the job, I can't convince my boss to let me build something new in a language I've never used before, so like finding the time to do that. But yeah, I'm really glad that you mentioned, you just kind of learn one of these-- and you mentioned ML-based languages, if you could actually define that for us, that would be really helpful.

    JORDAN: We're you saying you have typed functional JavaScript fatigue?

    KENT: (laughs) That's right, yeah.

    JORDAN: Yeah so you can look up on Wikipedia the history of ML and OCaml and Haskell, and you can see that these things have been-- these language have been around for decades, really. And these ideas and the implementation of the types, it seems like it's been around for a really long time. And they're all kind of taking inspiration from each other and the history is more complicated than a lot of people kind of describe, but to reduce it down to a simple story; you have this ML family of languages from which Haskell and OCaml and then eventually, Elm and PureScript have derived from. Phil might be a better person to speak to that.

    PHIL: I think that one thing that's sort of quite important about ML is the fact that we have type difference for all our terms, right. Some people are about perception and types of languages in general just because they're used to types that seems worthy to write the most types on all of the indiscretions. But one of the benefits of sort of ML, and the ML family of languages, is, you know, we don't have to do that. The compiler-- we sort of just make sure our programs are correct, but the compiler will do that without having to write up a type of exceptions. Really, really powerful programming.

    DAN: Yeah, I just wanted to jump in and ask something. So, Kent mentioned a good point about not knowing how to start with a typed language like this. And what I found is that, for example, like when I was under React, the reason I learned it well and was able to apply it was because I was able to take one component in my app and use React there and figure out what works well for me. So I think, I'd like to ask different panelists, who are like working on different languages, what is your story for integration with addition JavaScript apps? And can you use these languages together in JavaScript applications?

    JORDAN: One of the benefits of having an impure functional languages, Alfonso mentioned this, is that you can more easily interopt with other implementations of libraries that are also impure, like most JavaScript libraries. And then those variances you're keeping in your head about impurity, you don't have to be as careful about that. So that is one strength of something like OCaml, Reason or F#, I feel.

    RICHARD: So Elm actually-- coincidentally, the top blog post on the Elm website's blog is actually about doing this, specifically with React, like, "Here's how to embed Elm programs in your React programs." And the reason for this is this is basically-- the title of the post is How to Use Elm at Work. And because it's like this is the success story, when people successfully start using Elm at work, it's by doing exactly that. You have a big JavaScript codebase and you use a very small bit of Elm for just like one part of one thing and then once you get that into production, you're like, "Oh okay, that went well. Let's try expanding it." Everybody's intuition seems to be, let's wait for a big rewrite. Like, "Oh we're gonna do this big project, we're gonna do it with Elm." Like almost always fails. I mean it's like a recipe for disaster. It's much better to just do a small thing.

    So to Jordan's point about-- you're working in this, like Elm is purely functional, no side effects; JavaScript is full of side effects, how do you reconcile those two? The way that Elm interopts with JavaScript, it is through the system called Ports. And it's basically, you talk to JavaScript like the same way that you'd talk to a server. Which is to say, you send data over and you get data back. And the nice thing about data is that data doesn't involve side effects. So there's no actual code-sharing. So you can't actually mess up your invariance that way. There's nothing to worry about there.

    DAN: Sorry, is that mechanism synchronous?

    RICHARD: Is it synchronous? No, it's asynchronous, just like talking to a server. So the metaphor is like very strong with like talking to a server, except that there's no network traffic. It's just like, you know, you're all on the same memory, but you designed it exactly the same way as you'd talk to a server. And so what that means is when you wanna-- it's sort of like you can either think of it as like JavaScript as a service, you're writing an Elm app and you want to go use the JavaScript library. Or you can do it the other way around and be like, "Oh, I have some JavaScript code. I want to introduce Elm. Let's just drop Elm as a service in." And then expand from there. And so that's exactly how we get it started over at NoRedInk and now Elm has taken over our front end codebase. Like it used to be just 0% Elm like a year and a half ago and now it's like the second biggest language in our repo after Ruby, which is our back-end. So yeah, it's, I think, the way to go is to start small.

    ALFONSO: So yeah I want to stand on what Richard said. Yeah I think the social design choice when you're making a tool to compile from another language to JavaScript, how to interact with the JavaScript. And I think you have this two extremes, like you have Elm with this protective barrier that which show you many errors at one time. And then you can just interact with JavaScript. For example, you can do dynamic programming, so there's nothing this product can do from the impurity of JavaScript. I think this is also coming because F# was a language designed to interact with SeaShell with the dot net pass form. The same way the Scala was designed to interact with the Java platform. So it's a functional language, but it's knowing the fact that you have to interactive with impure or pure code. So it gives you tools for that.

    And in Fable also, many of the designs choices I had to make, I had to acknowledge two facts. First is that I'm not very clever. Second, I'm very lazy. (laughs) I'm very surprised by Elm because Elm has everything. It has the architecture, it has tools, its own package manage system, but I cannot do all those things. So I want to integrate very simply all the tools, the awesome tools that already in the JavaScript community, so we have interaction with Webpack, Babel of course, and React as well. We have some nice helpers, a very, very thin layer with React. And with that of course, you have to trade the safety for convenience. I don't know much about PureScript, maybe-- and with Reason of course, the reason I'm assuming it's more or less the same approach as F#, but I may be wrong. So if Phil and Jordan can verify that.

    JORDAN: I think it would be helpful to clarify a little bit more about what Reason is right now. So Reason is basically improving a lot of the common complaints about the OCaml compiler and making it more friendly to JavaScript and front-end developers. And the first complaint is always syntax. So what we're doing is we're making the syntax more approachable to JavaScript developers, web developers, front-end developers and then we're also integrating, to your point, we're also working integrating the package manager and the build system with npm and all the tools that JavaScript developers are very familiar with. And so one of the things you can do right now, which is sort of like the extreme of what like you were describing, Alfonso, is if you npm install Reason, the GitHub URL right now, it will install the compiler tool chain, it will install the syntax parts or the formatter, editor plug-ins and everything. It will recompile it onto host, so you have a full native compiler right there, installed both via npm. And pretty soon we'll also have the JavaScript compiler installed as a result of that. And one of the reasons why Reason stands out here, and maybe actually F# and--

    KENT: Oh no, Jordan fell out again. (laughs)

    JORDAN: I'm here. Is that the language isn't just compiled to JavaScript language, but it's also a full native programming language that can produce native executables. So what we want to do is, even though we're integrating with the JavaScript ecosystem and all the tooling like npm, we still wanna allow people to produce native binaries.

    KENT: That's awesome! Do you want to talk about PureScript, Phil?

    PHIL: Yeah sure. So the approach to the foreign function space, is what we call it, the way we talk to JavaScript, I guess it's a little different from what Richard described. We have sort of JavaScript in this (inaudible), so in Elm you have this sort of message passing to essentially JavaScript service written in Elm. So in PureScript, the way you sort of interact with JavaScript is that basically you just compile to common js modules. And they compile PureScript resources, just a regular common js module, that you can just drop in alongside of the compiled common js modules and just use them seamlessly. So you know, that's quite expressive. Possibly like too expressive in a sense, because you can pull in arbitrary common js modules and use them to compile to common js. You have to be careful about the types when you start using these things with JavaScript, right?

    So aside from sort of the importance of-- You know it's really important, for a foreign function (mumbles) to be really expressive, I think, and really complete and allow you to say what you want to say but it's almost more important for it to be like really principal, so that when you use a foreign function space, you sort of-- You can carefully sort of reason about how to use it and make sure that when you don't have types on the JavaScript side, that you're not going to mess things up and you talk and PureScript's all over there, the right way. So that was sort of one of the really important deciding considerations for me. I've come from TypeScript and I think that's sort of one thing that you really learn in TypeScript. They have these definition files and colossal libraries and you just start-- you can start using these libraries and you can compile to TypeScript until it just becomes a regular JavaScript module. And that was something I wanted to emulate.

    KENT: Yeah, that's great.

    RICHARD: One more note to mention, based on what Alfonso said, so you noted that Elm has its own package manager, which is true. And it's not just because Elm wants to just like be cool and hip and doing something other than npm. So you can npm install Elm, the compiler itself, just npm install-gElm and then you're good. But what he was referring to is that Elm's library user system does have its own package manager and the reason for that is that it actually puts guarantees on those packages, specifically about semantic versioning. So if I write a package and I release it as version 1.0, and then I make some breaking change, like I change the way some function looks or I delete the function or something like that, and I try to publish that as a minor or patch version release, the package manager will actually reject that. It'll say, "No, you made a breaking change. You have to increment the major version number." So the results of that is that semantic versioning is actually guaranteed across all packages in the ecosystem. Which is pretty cool because it also means that when you do constraint solving-- so like in npm when you install a module, you get all of the dependencies that come with it. And so that can result in sort of an explosion of lots and lots of different things.

    So Elm does it differently where instead, it says, okay when you say I depend on this version range, it will actually just download one copy of each library and then it will just find versions that fit with all of your different libraries. So you actually get a really small footprint, even when you have lots of dependencies because even if they're using the same module, it'll just find versions that they can all talk to one another with. So you get a much smaller sort of footprint. But yeah, basically the reason it's able to do that reliably is because semantic versioning is respected and if it were not respected, and it were not guaranteed, then it would be pretty easy to have that constraints over result in things that were actually incompatible even though they claimed that they would be compatible. So there is a good reason for it having its own package manager.

    KENT: Yeah that sounds pretty awesome.

    ALFONSO: Awesome, yeah. So just a very quick note, sorry. It's also incredible that Elm has this pure packages and guarantees on the packages. And Phil already mentioned about the type declarations in TypeScript and just quickly mention that also Fable is-- we have a (mumbles) to relate this declarations to F#. Some managing is unnecessary. And in the last version, it's also not something I've done myself completely, but I'm using Babel and Babel plug-in, but we are also generating these declarations in our code. So if you want to interact with a code generated by Babel with TypeScript or with JavaScript, this is the goal, it's our goal that type of way.

    KENT: I'm glad that Dan asked that question earlier about iteropt with like current applications because I think that's like a must-have for any of these languages. Just like you said earlier, Richard, anybody that thinks they can rewrite in a new language is wrong. (laughs) So cool, we are coming down on our time, but if there's anyone else has something they want to just mention before we go, with other questions, now is the time. Jordan you can go if you'd like.

    JORDAN: I was just going to say, one of the things that we have-- one of the things that Reason can do pretty well right now is compile the JavaScript to a couple of different back-ends. Right now, there are two existing back-ends, JavaScript or OCaml, JS or OCaml, which can take a very, almost perfect, representation of your program that could run anywhere as a native app. And then deploy that into JavaScript in the browser. But there's also a new project coming out there that I think people should take a look at called BuckleScript and Reason works with BuckelScript as well. And what that gives is, a more direct module-to-module mapping and a way to directly invoke any JavaScript library and be well typed across the boundary. So you guys should check out BuckleScript as well.

    KENT: Sweet, so many things to look at. Hopefully we'll get all these things in the show notes so people can check them out. Great, so let's go ahead and-- I don't think we'll have time to get into all of the Twitter questions, but let's try to do this as quickly as possible, so we can at least mention resources or something for these people who are asking and interested. So, let's see. Eric Rasmastan asks, "If starting from scratch like untyped JS, should I go with TypeScript or Flow or something else?"

    RICHARD: You should go with Elm! (laughs)

    KENT: What would be a good thing for someone who hasn't really jumped into typed languages or functional programming, if they wanted to add something to an existing application, where would be a good place to start? They should just go all typed functional or should they just start adding a couple types here and there?

    RICHARD: I mean my personal advice would be-- obviously I'm going to say you should use Elm but (laughs) I would think of it less as trying to gradually convert your program to typed, as much as picking some part of your program and saying, "How can I make this one part of my program, as nice as possible?? And so that's sort of what's worked well for us, is just saying, let's make this one thing-- even in a different language or even just saying, let's make this one part typed, what have you. But as I said earlier, I think there's kind of a spectrum and typing is only one part of it. I mean the typed functional is, for me, more important than the typed. There are a lot of people who, for example, if you asked me would I rather use ClojureScript or TypeScript. That's not-- I obviously like typed checking, but I can easily see myself answering ClojureScript because ClojureScript is awesome with the mutability, the concurrency, all sorts of different things that TypeScript wouldn't get me. So I don't know if the typed part of the typed functional is necessarily the end all be all even as much as do like it in the context of Elm. So, my two cents.

    BRIAN: Yeah, I'm going to throw in there that when you're doing functional programming, it all comes down composition. You're not setting state to tie things together, you're just passing one value to the next function typically. So the types really shine there. So if you're using types in an object oriented setting, it might not shine as much as it would in a functional setting, so they do go together quite a bit.

    KENT: That's great, thanks for mentioning that. I actually was hoping to get into that, we never did, so that's good to know. I lost the question. Oh yeah, so from Emilio Srougo, this person asks, "Brian's prof frisby videos show that with discipline, predictable effect-free JS can be written Can that replace languages?" So for those of you that aren't familiar, Brian Lonsdorf is amazing and has this really awesome series of videos on YouTube called Professor Frisbee, that talks about functional programming and JavaScript. And in there it shows that if you exercise a little bit of discipline, you get a lot of these benefits of functional programming. Can that replace these languages that we're talking about?

    BRIAN: Let me just start off by saying, I fully promote typed functional languages. Part of the reason for making those was to help migrate people to typed functional languages and give them a way to practice this style of programming in their day job if they're tied to JavaScript.

    JORDAN: So I had actually kind of tried to take that approach for many years inside of JavaScript and one of the things that I found was, yes, it's beneficial, you can pull it off, but you may find a constant sort of cultural clash with other people that you're contributing with. In addition to that, you're not going to see all the benefits until you-- maybe if you overlay Flow on top of that, you'll start to see a lot of the benefits, but you can't even really fully maximize the benefits until you have a static type system that can prove your program is sound and make all these kinds of optimizations, dead code elimination. So yes, you can get some of the benefits, but I don't think you can get all of them.

    ALFONSO: Yeah, I think Jordan's right. This is something we don't talk that much to be honest, but what's he doing in the language is very important because you have to-- you can exercise this discipline, but if it's not going to matter as soon as you work with a team or working with other people. It's very difficult to keep (mumbles). And also, the key word is discipline that you have to do everything by yourself. And then the compiler is not helping you on that. Compiler like Elm, PureScript, Reason, F#, it's helping you. It's much more difficult that you're making mistakes.

    RICHARD: So more directly, I was actually specifically doing this, before switching to Elm, I was really doing basically like, pretend that we're writing Elm code, like don't ever mutate anything, always use constant whenever possible and things like, only use functions. And here's the thing, there's a very concrete case in which discipline is absolutely useless and it's when you're refactoring. When you have a big chunk of code and you've been really disciplined about writing it, and now you need to change it, if you have a compiler that will say, you know-- we've done this several times, where we'll take some big chunk of Elm code, do a big refactor, clean up stuff, make the API nicer and then afterwards, the compiler is like, "you missed this thing, you missed this thing, you missed this thing and then you forgot this piece of code that you haven't touched in six months." Discipline totally does not help you there. Tests can help you there, but the problem with tests is that if you're doing a big refactor, that usually the first thing that happens when you do a gigantic refactor is that you break all of your tests and they don't apply anymore, they're now covering code that doesn't exist anymore. And I have never, in my entire programming career, found a way to have a as nice refactoring experience as I now do in Elm. No matter how many tests I write, no matter how much discipline I use, there is just absolutely no way to get that experience without compiling.

    KENT: That's actually really a great point, thanks for bringing that up. So we pretty much don't have anymore time for another Twitter question, but this one just came in and I'm really interested in the answer, so I'm gonna ask it anyway. It's by Ville M. Vainio, and his question is, "Any complaints about debugging/source maps?"

    RICHARD: Nope.

    KENT: (laughs)

    JORDAN: So when you program with OCaml or Reason, there's two approaches right now, there's BuckleScript and there's JS OCaml. JS Ocaml has really great source map support. And so if you open it up inside your browser, you can browse all your original files and if you're using the Reason syntax, even the Chrome debugger will highlight it correctly. It will look really natural inside the browser. You can step through and you can now even highlight or you can even hover over some variables and see the values. So that's really good. And BuckleScript strength is that is compiles down, much like PureScript, into very idiomatic JavaScript, that's almost one-for-one module-to-module. So even though source maps aren't there yet, you can definitely make out what was going in the code and you know exactly what's referring to in the original.

    ALFONSO: Yeah, Fable also compiles to various JavaScript or (mumbles) lines in JavaScript, that you can be proud of. And yeah, we have posted source maps that are in present form in Babel because it's also another thing that Babel is doing for us.

    PHIL: Yeah, we have source maps in PureScript as well actually and again, like what you're saying Jordan, if the translation is simple enough, then often you don't find any of them. Often I've used the source map feature in PureScript when I'm using PureScript Alpha, but I think that's more because of, you know, in functional languages we have other tools for debugging. So I tend to just sort of use the repl, much more than I would use the Chrome debugger or something. But if I really sort of need to dig in and go line by line, I'll use the Chrome debugger. That works fine, but in a pure functional language, you have the benefit of using a repl and testing to get small ideas of making sure these things all work. If the small things work, it compiles into large things. So yes, we can have a nice debugging tools but we can also re-enable these nice other debugging tools that you can have in other languages as well.

    JORDAN: And also the joke is that if you're using a ML-derivative language like this, then if it compiles, it works and you should never need to debug.

    (laughter)

    ALFONSO: Yeah.

    RICHARD: Yeah, it's funny because when I used to do CoffeeScript all the time, I really liked source maps because it meant that when my code drew run time exceptions then I could see where the culprit was. But now, I just don't get run time exceptions. So it doesn't really come up as much. But yeah, Elm obviously has a lot of-- like a long history of awesome debugging tools. So like the Time Traveling Debugger and stuff like that, that are not necessarily integrated with the browser, so much as they are separate stand-alone tools. But currently, the Elm reaction that likes Time Traveling Debugger is not as awesome as it once was, but the next release is looking to make it as awesome as it once was before and I'm so unbelievably excited about what that debugging experience is going to like, I can't wait. (laughs)

    KENT: Cool, well thank you so much everybody for answering. I'm afraid that we are running out of time, so we need to get into our tips and picks and closing up the show. This has been super awesome. So thank you, thank you, thank you. Let's go ahead and we'll get into our tips and picks. Dan, I think you need to head out, so why don't you go first?

    DAN: Yeah, so I only have one pick, which is just a shameless plug. So I was working for the past several weeks on Create React app. This is a tool that lets you get started with React environment, where it quickly downloads like Backpack and Babel and ESLint and all this stuff that people usually use in production projects, but it's still very developer friendly because it doesn't have any config. So there's like literally zero configuration. You just run a command, npm start, and you're up front. So check it out, it's from React blog. It's the last entry in the blog, Create React Apps with No Configuration and let us know what you think.

    KENT: Awesome, cool. Brian, do you want to do next? He says no, Pam?

    PAM: Sure, I've got one ready. Well one, Create React, that is definitely awesome so good work, Dan. So I am actually also picking-- this is actually a minimal closure script template. So mi-es or mies? But in case-- you heard from all these great language creators and you said, "But what about ClojureScript?" You can go try to ClojureScript template. It's nice because it solves that problem of giving you somewhere to start and to try it out and mess with it.

    KENT: I'll go next. So first my tip is, check out the JavaScript Air episode page for this episode, probably by tomorrow because all of the tips and picks that Brian didn't say will be on there. (laughs) So they're a couple of really good ones there. So my picks, my first one is React 30, episode six, Origins of React. We actually talked with Jordan about how React got started. It's really an interesting episode. So I recommend you check it out. MidwestJS is a conference that I'm going to be speaking at next week. I'm giving a workshop as well. There's tickets still available, it's in Minneapolis. It's a great conference, this is their 3rd year. I've been the previous two years, it's great. And then I have two front-end masters workshops next week that I'm super stoked about and I've spent countless hours preparing for. So if you're interested in Webpack or doing open source libraries in JavaScript, then come to those, it'll be awesome. And then finally tonight, I'm going to a musical called 'Ragtime,' it's like an amazing musical. I've never seen the play, but the music is totally beautiful. And yeah, just really, really good commentary on the civil rights movement and just like very, very, very great. And by civil rights, it's not like Martin Luther King Jr. or anything, but it's older time than that. It's a great musical, you should check it out. Cool, so Alfonso, why don't you go next?

    ALFONSO: So yeah, the first thing is just the Fable website. So you can just google "Fable compiler" and you'll get there. And there you have samples, you have online samples. You have the docs, you have also the link to the GitHub repo. So very brief explanation on how to download everything from npm and get it started. So I think it's a very good starting point. Then we have F# for Fun and Profit, which is a site for learning F# in general, because as we already commented F# is general language. It's not only for compiling to JavaScript. And this very good place because progress we've taken before if you're coming from JavaScript background, maybe another (mumbles) programming or dynamic programming. This for people who are new to functional programming and I like very much. And the last pick or the last thing is the Ionide, which is a plug-in for Atom and Visual Studio Code to use F# and things if you're not on Windows or you're not using Visual Studio, which is the big tool to develop in F#, I think it's the perfect choice. But there are also plug-ins for Vim and Emacs for F#.

    KENT: Awesome. Jordan, why don't we have you do next?

    JORDAN: Alright, a couple of things. Check out the book, Real World Ocaml. It's free online and you can order a hard copy of it as well. I didn't write the book or anything, I'm just am huge fan of it. It teaches languages and the statically typed, functional languages that we're talking about here. So check that out. It's free. The other thing is, if you're using Atom, I really recommend that you use the Vim-Mode-Plus program plug-in. It's really good. It should be the default really. It should be the official one and the developer's super responsive and he responds to bug reports really quickly, fixes them and takes user feedback. So yeah, check that out.

    KENT: Awesome. Phil, why don't we have you go next?

    PHIL: Yep sure. So I've a couple of picks. The first one, I just wanted to point to the PureScript website, it's purescript.org. So if anyone's interested, it has all the links to all the resources. So thing's like module documentation and language guides, the link to the book, all these sort of things. And the second one, I just wanted to sort of highlight a library from the ecosystem. So the one I chose is called PureScript Pux, which is a UI library. It's really nice, it's sort of an implementation of-- I guess it's sort of a combination, takes inspiration from Redux but also the Elm architecture from Elm. It's really nice. It has a lot of the tools that were mentioned before, like the Time Traveling Debugger, these sort of things. But yeah, that's all I was checking out.

    KENT: Great! And Richard.

    RICHARD: Cool, I want to start by endorsing Jordan's endorsement for Atom with Vim-Mode-Plus, big fan. Okay so, I mentioned Elm in Action, available for early release now. The Front-End Masters two day Elm workshop that I'm doing. So two picks. One is a video, 6 Months of Elm in Production and that's basically back when we had only been using Elm for six months in production. Just sort of a recap of our experiences and lessons learned and things like that. Building a Live-Validated Signup Form in Elm, so this a post that assumes only JavaScript knowledge, no functional programming knowledge, no Elm knowledge, it just takes you through from start to finish building a live-validated signup form that uses Ajax to validate usernames and stuff like that. Tip, I only have one tip, which is don't wait for a rewrite. Introduce incrementally, build a small thing that works, get that small thing in production, whatever language you're using then expand from there. So that would be my advice. Also, I have to mention we're hiring at NoRedInk. And if you're interested in using Elm, we don't need people to know Elm on day one, we will teach you. So please apply.

    KENT: Great, great. Alright so that's our show, thank you very much everybody for coming. Let me just give a couple closing announcements. So we do have Silver sponsors we're grateful for. ReactJS Program, it's a great master the react ecosystem site. And Sentry, is cross-platform crash-reporting, so check them out. And then if you have suggestions for the show, guests or topic ideas, go to jsair.io/suggest. That'll take you to a form. And then jsair.io/feedback, for you to submit feedback on this show or like the show in general or past shows. Really appreciate the feedback. Then jsair.io/email will take you to a place where you can see our previous newsletters and sign up for the newsletter. We do like highlights from the show and stuff. And then next week, again we're going to talk about how to be a mentor and so I recommend you watch that. It'll be great. And then yeah, that's pretty much it. So thanks everybody, really appreciate you coming on the show and we'll see you all later.
  `,
}
