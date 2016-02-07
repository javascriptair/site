/* eslint max-len:0 no-trailing-spaces:0 */

export default {
  title: 'Learning and Developing JavaScript',
  hangoutId: 'c2bgue075m3us9cemis03iivrag',
  guests: [
    {
      name: 'Ashley G. Williams',
      twitter: 'ag_dubs',
      links: [
        `[If you wish to learn ES6 from scratch you must first invent the universe](https://www.youtube.com/watch?v=DN4yLZB1vUQ) at [JSconf2015](http://2015.jsconf.us/)`,
        `[Breakfast Repo](https://github.com/ashleygwilliams/breakfast-repo)`,
      ],
      tips: [
        `Investigate the programming languages you use as tools`,
        `Learn about different programming paradigms and translate side projects into them`,
      ],
      picks: [
        `[Javascript Allonge](https://leanpub.com/javascript-allonge)`,
        `[Hello Declarative World!](http://codon.com/hello-declarative-world)[my ES6 implementation](https://github.com/ashleygwilliams/relational-node)`,
        `[Simple Made Easy, Rich Hickey](http://www.infoq.com/presentations/Simple-Made-Easy)`,
        `[Growing a Language, Guy Steele](https://www.youtube.com/watch?v=_ahvzDzKdB0)`,
      ],
    },
    {
      name: 'Kyle Simpson',
      twitter: 'getify',
      imgSrc: '/resources/panelists/getify.png',
      links: [
        `[MakerSquare](https://twitter.com/MakerSquare)`,
        `[Build Your Own Angular](http://teropa.info/build-your-own-angular)`,
        `[BannerFrom NAND to Tetris](http://www.nand2tetris.org/)`,
        `[Thunder Plains Conference](http://thunderplainsconf.com/)`,
      ],
      tips: [
        `Give yourself deadlines to learn stuff (talk to give or blog to post)`,
        `Unplug and sharpen the ax`,
      ],
      picks: [
        `[David Nolen (cognicast episode)](http://blog.cognitect.com/cognicast/093)`,
        `[BlissfulJS](http://blissfuljs.com/)`,
        `[ES6 & Beyond](http://shop.oreilly.com/product/0636920033769.do)`,
      ],
    },
  ],
  description: `
    Ashley and Kyle know a thing or two about teaching JavaScript.
    These two wonderful people will jump on and chat with us about
    learning and developing this wonky language called JavaScript.
  `,
  youTubeId: 'uDtkEEIBsz4',
  podbeanId: 'fq39m-5b07c8',
  past: true,
  host: {
    tips: [
      `Contribute to Open Source ([What open source project should I contribute to?](https://medium.com/@kentcdodds/what-open-source-project-should-i-contribute-to-7d50ecfe1cb4))`,
    ],
    picks: [
      `[Slides.com](https://slides.com)`,
      `[TodoMVC](http://todomvc.com/)`,
    ],
  },
  panelists: [
    {
      twitter: 'drboolean',
      tips: [
        `Start procedural => Learn OO => Learn FP`,
      ],
      picks: [
        `[Jared Tobin Recursive Types](https://medium.com/@jaredtobin/a-tour-of-some-useful-recursive-types-8fa8e423b5b9#.gwhpp43bj)`,
        `[Hardy Jones’ Computational Effects](https://github.com/computational-effects/free/blob/master/examples/http/index.js)`,
      ],
    },
    {
      twitter: 'linclark',
      tips: [
        `[ESLint](http://eslint.org/) use it! To start using it on large codebases, add all files to \`.eslintignore\` and then tackle files one by one. This cuts down on the number of collisions with other PRs. Look for additional plugins, like the React ESLint plugin, and you can create your own`,
      ],
      picks: [
        `[Async & Performance](https://github.com/getify/You-Dont-Know-JS/tree/master/async%20%26%20performance) (plus the whole [YDKJS](https://github.com/getify/You-Dont-Know-JS) series)`,
        `[Understanding ES6](https://leanpub.com/understandinges6/read)`,
      ],
    },
    {
      twitter: 'mzabriskie',
      tips: [
        `Use [ESLint](http://eslint.org/) to enforce code style.`,
      ],
      picks: [
        `Foo Fighters Saint Cecilia EP (free [on iTunes](https://itunes.apple.com/us/album/saint-cecilia-ep/id1059042560))`,
      ],
    },
  ],
  transcript: `
    KENT: And we're live with Angular Air. Hello world! Today we're... "Angular Air" oh, my gosh!

    (laughter) 

    Yeah, that's... old habits die hard, I guess (laughs). This is not Angular Air. This is JavaScript Air. Angular's cool, and Angular 2 Beta was just released, which is kind of exciting, but that's not what we're talking about today. We're talking about JavaScript, and in particular, we're talking about learning and developing JavaScript.

    And so before we get into the show I just want to give a couple of shout-outs to our sponsors who make this possible.  So our premier sponsor is Egghead.io. They have a huge library of bite-sized web development training videos, so check them out for content on JavaScript, Angular, React, Node and a bunch more. Frontend Masters is also a training website. They have a recorded expert-led workshop, with courses on Advanced JavaScript, Asynchronous and Functional JavaScript, as well as a whole bunch of other front-end topics. So check them out also. And then TrackJS is our sponsor as well. They report bugs in your JavaScript before your customers even notice them. And with their Telemetry Timeline, you'll have the context that you actually need to fix the bugs. So check them out and start tracking JavaScript errors today at trackjs.com. 

    Alright, so, as a reminder, if you are watching live, you can ask us and our guests questions with the hashtag "#jsAirQuestion". And if you just want to talk about the show, the hashtag is "#JavaScriptAir". And then, for our next week's show, just to keep up with what's going on, next week, we're going to be talking about Babel, the JavaScript compiler and we have a couple of the Babel core contributors on the show that we're excited to have as well. So, come and check that out. And then as always, follow us on Twitter, Facebook and Google+ to keep up with the latest. 

    So, I'm going to go ahead and introduce everybody really quick. We have Brian Lonsdorf. 

    BRIAN: What's up? 

    KENT: And Lin Clark. 

    LIN: Hey there! 

    KENT: Matt Zabriskie. 

    MATT: Hello.

    KENT: And I'm Kent C. Dodds. And for our guests, we have Ashley G. Williams...

    ASHLEY: Hi!

    KENT: And Kyle Simpson. 

    KYLE: Hello, everyone!

    KENT: And Kyle is actually a panelist too, but he's a special guest this time 'cause he knows some awesome stuff about training beginners. He's always thinking about that and I think that's great. So, let's go ahead and get started. Ashley, maybe you could give us a quick intro to yourself, and then Kyle. 

    ASHLEY: Sure, so I'm Ashley. I work at npm. My official role is Developer Community and Content Manager, but I pretty much just like to say that if you don't how npm works, that's my problem. Right out of college, I was a middle-school science teacher in Harlem, for three years and started most of my tech career by working and then leading a boot camp in New York City called the New York City Web Development Fellowship, which basically allows students who make less than 40k or are unemployed to be trained for six months to become web developers. So that's my background, at least in the education world. (laughs) 

    KENT: Cool. Yeah, that's awesome. I didn't realize you were a school teacher. That's great! Kyle, tell us about yourself a little bit.

    KYLE:  Yeah, so everyone's gonna know me much better online as Getify, so from here on out I'll just, I'll speak of myself in the third person with Getify. I'm kidding. I have been doing JavaScript now for 16, 17 years. Of course, like most people, I didn't really take it seriously for the first like, five or eight of those years. But I got real serious about JavaScript back in 2005-ish and have kind of specialized in it since then. So I was a developer for a long time. And about four years ago, decided that I was kind of bored of working on other people's projects, so I wanted to move into a different sort of career, a different part of my career track and that's what lead me to teaching. 

    Actually, one of our sponsors, Frontend Masters, a big shout out to them, I've done quite a few courses with them, but they are actually the platform that gave me my start in teaching. They were the first ones that reached out. Mark reached out and said, "Hey, I think you got to come teach." And that's what got me started about four years ago. So I am now a teacher of JavaScript. My role is Head of Curriculum for MakerSquare which is a developer and engineer training school, similar to other boot camp schools that you may have heard of. We're based in Austin, with campuses also in San Francisco and Los Angeles. And so I'm wrangling all things curriculum for them these days. 

    KENT: Great. Cool. So I think a good kick-off question for us is why do we even want to learn JavaScript? What's so great about this language that makes it something we want to learn about? 

    KYLE: I guess I'll tackle that first. Why learn JavaScript? The obvious answer is because it has become ubiquitous. Most people have probably heard of Atwood's Law, "Anything that can be written in JavaScript will be written in JavaScript, eventually." So that is definitely telling of what's happening with our industry. We see lots of move to the web platform and JavaScript has definitely cemented itself at the center of the web platform. I don't see JavaScript going anywhere anytime soon, even with all the great stuff that's come out in other languages, and the transpiling the JavaScript and wasm, all that stuff. JavaScript stays at the center of it. So, the most obvious answer is because you're going to need to have some competency in JavaScript going forward to have any place in the web platform. 

    Back to Atwood's Law for just a moment, just because you can write something in JavaScript doesn't mean you should. I heard a saying one time (I don't know who to attribute it to) it was, "Just because you can put JavaScript on a pacemaker doesn't mean I want you to put that in my chest." So, you know, I think we have to be careful with it, but JavaScript's not going anywhere and it's never been a better time to jump in and learn it. 

    ASHLEY: Yeah, I completely agree with Kyle. It definitely is ubiquitous, but I think when I think about why should we learn JavaScript, I try to think about why JavaScript would be a good language for a beginner to learn. And there's a couple of reasons why: I think one of the first reasons is the fact that you can write it on both the client and the server, and being able to understand both the client and the server, and the client-server relationship is super-important as a new web developer. It's something that's actually very tricky, and so the fact that you don't have to jump between two different syntaxes in doing that is very helpful. 

    Additionally, though, one of the reasons I like JavaScript as a beginner language is because it has a very, very small API. It has very few abstractions and so a lot of the magic that people often think is delightful for beginners is not present and therefore, you can't fall in its trap. Turns out beginners really don't like magic and all of that abstraction can really confuse them. And so as a very simple language, JavaScript is great that way. 

    KYLE: I think Ashley hits on something really interesting; when you say the language, the APIs, the abstractions are small, I think some listeners might... that might fly in the reason, counter to reason for some listeners. But I think it's important to point out that the reason why what you said is absolutely true is because the language itself is very narrow, but there's an awful lot of stuff that developers have to deal with that looks like JavaScript, which actually isn't. 

    For example, most of the ire that people have about web programming is actually directed at poorly designed DOM APIs, for example. The DOM APIs certainly look like JavaScript; they expose themselves using things that look like objects and functions as we would with JavaScript but they're these special host-based things that don't play by the same rules and also aren't developed by the same group that develops JavaScript the language. So when we talk about JavaScript we have to decide whether we're talking about the language core itself or the broader ecosystem that touches JavaScript, which is all the other stuff that plugs into it.

    KENT:  Yeah, one of the first things, when I was learning JavaScript, that my teacher told me was, like, lots of people say that they really hate JavaScript but what they really hate is the DOM (laughs). JavaScript is a great language; the DOM is what makes developing JavaScript so difficult. And that was particularly true you know, years ago, before we had better standards, idea, like when different browsers, you didn't have to account for the different ways that they add an event listener, for example. So actually, I think that's something else that's good to touch on and I want to get your perspective on is what makes learning JavaScript, maybe a little tricky? 

    ASHLEY: Well, I mean, we get right to your point immediately, like, I also like what Kyle just said, is when you say "learn JavaScript," what do you mean? If you're learning front-end development, and like browser compatibility and the DOM and those sorts of things, that's all extremely complicated. And a lot of people are like, "Oh front-end development isn't like real development. That's fake." It's actually significantly harder because you don't get to control where your code runs. It's running in a bunch of different places. It can behave very strangely. 

    I think when we talk about learning JavaScript though, if we're learning about, say learning programming concepts through JavaScript, I would definitely say that a lot of people tend to struggle with scope and "this", like that is very difficult in JavaScript for a lot of people. And like the idea of a closure, I think, is also a very difficult concept, generally speaking. I can go further into that, but maybe we shouldn't. I don't know if Kyle even want to jump in at all, or anyone else. 

    KYLE: I sure wish somebody would write some books about those specific topics (laughter) and help people figure out...

    ASHLEY: Corey Frang has an amazing presentation that they did at JQuery, the JQuery Foundation Conference last year. I'll put it in the repo. It's good... or the document. (laughs) 

    KYLE: So I would say, in addition to there being actual mechanics, which can be, you know, confusing, I think one of the biggest reasons or one of the biggest things that trips people up in learning JavaScript is almost cultural and structural issues. I talk about this a lot in other talks and books that I've written, but I feel like one of the best parts of JavaScript was its low barrier to entry. You can literally write the "Hello world" in one line and you're up and running and you feel empowered. "I can take on the world! I can do whatever I want with this language that doesn't require a big runtime to get going," it's just your nearest browser, for example. That's one of the greatest parts of the language.

    And to Ashley's earlier point, I think that is one of the biggest reasons why this is the language that someone should learn even if it's their first language to learn. I think it's okay and actually a really good idea for JavaScript to be that language. But that's a double-edged sword. Having such a low barrier to entry, being able to get up and go running so quickly I think has produced several generations of developers now with this mindset that, "I really only need to know just a small surface area in JavaScript. " Someone famously tried to call that "the good parts," for example and not need to learn the rest of the language, because, "oh, somebody else, you know, already looked at that and said that stuff was bad and we should stay away from it."

    So what got a lot of developers into JavaScript is also what got a lot of JavaScript developers just inside the door, just enough, what I would call maybe competency level understanding, and they were able to have some pretty good early success, especially with the amazing frameworks and libraries that are around in the community, the ecosystem. You can get up and going and you can look like a production quality, even master-level JavaScript developer without actually understanding much of the language. So you can get going quickly, and because there aren't a lot of other external incentives to do so, you just kind of stopped there or maybe you just sort of plateau off. And your learning stops being about the language, itself, and more about memorizing the new API for the new framework that just came out today, or whatever. 

    And I'm not saying that those are bad things to learn. Those are great things to learn. They make you productive. But I think one of the things that makes JavaScript hard is that if you really do have a curiosity to learn deeper, most of the places that you go within our community sort of hand wave and say, "Oh no, no, there'll be dragons. Don't go into that stuff. Don't learn the coercion. Don't learn this stuff. Don't learn that. Just stick with this framework and you'll be golden." I think we do ourselves and each other a disservice by allowing that to continue. 

    So, for lack of a better way to put it, that's kind of what my career is about is trying to address that problem and make it so that people do take seriously, for whatever crazy reason, you decided to make JavaScript your language of choice, hey, maybe you ought to actually learn all of it.

    ASHLEY: I think there's a really interesting point. And being someone who came from the Ruby world, I saw this a ton. Like we have Ruby on Rails developers and there are people who don't understand that Ruby on Rails is not a language. These things all infuriate me (laughs), but I wonder if it's not so much that students enter JavaScript, they're able to get up and running quickly and that they just stop because then they're productive and we're telling them not to do it. I think instead, there's something in the JavaScript community about kind of... there's the people who are doing like open-source JavaScript work and then there's people who are, I don't know, doing it for their job. 

    And in the open-source world, there's a lot of ideas about not rolling your own trademark, not writing things yourself. And so, there's the library writers, and then there's almost the idea that you shouldn't be writing it yourself. You should be reusing code. And I think that's something that's very powerful about the JavaScript community. And I guess I'm not sure that people think that they shouldn't dive into the language, but that we don't create resources for learning the language, like those resources don't really exist. I'd say probably the best resource out there is MDN, and that's hardly a learning resource. There's no narrative there. It's basically a dictionary. And so I think, if there were more resources we'd probably see a lot more people doing it, but there's this kind of like, wild west attitude where you just kind of like find and grab whatever's there.

    BRIAN: Yeah, Ashley, I was gonna mention, you said "Ruby on Rails" and I always thought that was the very easiest thing to learn when learning programming. Like here's a perfect environment, it's gonna be object-oriented, it's gonna be this, it's gonna be that, and you just do it this way. And like you said, the wild west, it's like what resource tells you how to write JavaScript? Because there's like... it's multi-paradigm, there's so many different ways. You can be like a C# developer, or like a Haskell developer or something and you end up with this crazy, like, you know, you don't know where to start, versus something easier. 

    ASHLEY: Yeah, definitely. There's like a huge lack of opinions, I think, in the community... or there's both like a lack of a definitive opinion and then like a plurality of opinions. And for beginners that makes it very difficult to decide which one's correct or which to pick. And so your kind of go the way of, "Okay, I have this... I am this stack JavaScript developer now, and these are the things that I know how to use and I just use them because making decisions in this community is really difficult." (laughs) 

    KYLE: I think it's a great point that there is lot of really fantastic libraries and frameworks out there and you're right, Ashley, that people do stress the idea of not re-inventing the wheel, not building you're own from scratch. And I think I have a little bit of a reputation for being sort of the grouchy, anti-framework guy, but it's not because I think frameworks are terrible; actually, there's a lot of really intelligent work that's been done on the frameworks. But one of the things that I dislike about the framework (again going back to that notion of a double-edged sword), if a framework does its job really well, and abstracts away the details from you and makes it so that you don't have to know how it works, there really does need to be some other external factor that will ever push you to actually understand how it works -- not just that it works -- but how and why it works. And I think a lot of people, especially those maybe that aren't so much in the open-source community, but maybe more just doing spec work, their boss hands them a feature, they build it and they go onto the next thing. If that primarily defines your career and your experience with JavaScript, the best thing that you can do to advance in your career is to be really quick at using other people's work to get your work done quicker. So you need to be really adept at finding the right library and the right framework and plugging it together. And there isn't a lot of motivation in that structure for you to learn how it works.

    I saw a talk years ago (and I now understand that it's actually a book and I'll put a link to this), it's called "Build Your Own AngularJS." Well now that Angular 2 is out, I guess it's okay for us to talk about Angular 1 and rebuilding it from scratch. But "Build Your Own Angular," was fascinating because what I assumed when I first was gonna watch that talk at a conference, was that the message was gonna be "You don't need frameworks. You can do it yourself." But actually, the message was much more productive and I believe this is true of the book as well. The message was: "If you're gonna use Angular, wouldn't it be a really good idea to understand how Angular works under the covers? So let me just show you that it's not actually magic, it's not actually a black box. Let's build it from scratch." 

    Any listener that's listening to me right now, I would encourage you to check those sorts of things out. Open up the source code for the things that you use and be a little more curious about them. So, I'm not saying don't use the framework, but I do want you to understand how it works and never treat something as purely a black box that you couldn't possibly understand. 

    ASHLEY: Yeah, I could not agree more. And I know that you've seen this, but I've been giving a talk this year called, "If you wish to learn es6 from scratch, you must first invent the universe," which is a play on a Carl Sagan quote (which is basically saying exactly what you just said), which is kind of, if you want to understand something you need to start from scratch and build it up. 

    So there's an awesome CS pedagogy, a professor named Peter Van Roy. He wrote a book called the "CTM," And basically, it's kind of this idea of creative abstraction. He has this kernel teaching approach where you literally start from nothing and you build every abstraction that a programming language would need from scratch, and only building that abstraction when you feel the pain of its absence. I think too many times, we believe that the sugar that we have in languages, the magic, is what makes something easier to use but beginners actually like find it, I've seen beginners get tripped up by it multiple times. And they feel much more in control when they know what's going on with something. 

    Like, I give the example of a "for" loop and "each" loop in Ruby, and "each" abstracts away the three things that define iteration: state, condition and increment; whereas in a "for" loop, they're immediately exposed by the syntax. And it turns out that, for learning iterations, students do much better learning "for" loops than they do with using the abstraction in "each." So yeah, I couldn't agree with your more, Kyle. If you're using a framework, it's imperative that at some point, you look under the covers and figure out how it works, because you really can't wield it appropriately until you understand the implementation. 

    KYLE: Yeah, everything's great in the happy path, but as soon as you get off the rail, so to speak, (laughs) as soon as things start to fall apart, you're like... that one last thing on that exact topic, there's another project which is very similar to what you just mentioned, Ashley, it's called, "From NAND to Tetris," (NAND as in the NAND gates inside of your CPU )"From NAND to Tetris - Building Computers from First Principles," highly recommend that people check out that book and that set of learning resources as well. 

    LIN: I think that it is super-important to get under the covers. I think that you can do that not just by building it yourself, but also by explaining it to other people. So for me, Code Cartoons has been exactly that. You know, going through Flux, going through Redux, going through Relay. Basically, I've been tracing through, you know, all of the code and then figuring out how would I explain this to somebody else and that's how I actually started understanding it myself. So I think that for people who are more, you know, who don't feel yet confident enough to build their own Angular 1 as a way to understand Angular 1, really getting nitty gritty deep into the interactions in the code base itself, not just the API, but the interactions between the components that you aren't seeing, that can really help you. 

    KYLE: I think that's a general principle for all of learning, that what really solidifies learning the best is when you re-explain, when you re-teach to others. Hundred percent agree with that. From the ground up, you need to be looking for ways -- whether that's writing blog posts or giving lightening talks, or giving brown-bag lunches at work or making an open-source project, or any of a dozen other ways -- if you turn around and say, "Hey, I think I just learned this thing, but can I show you what I just learned?" you will learn it better and they will learn it better. Teaching is really the only way to learn. 

    ASHLEY: Teaching is nature's way of letting you know how sloppy your understanding is. (laughs) That's how I like to say it. 

    KYLE: (Laughs) That's good. 

    ASHLEY: But it's funny when I think about when I was teaching myself JavaScript (laughs) I actually, the way I did it is, I was reading through, "Eloquent JavaScript" by Marijn Haverbeke and I was building... it started out as an alarm clock, I guess, and then I started building like basically a morning simulator to see, based on how many times I hit snooze, if I would get to work on time. But what I would do is I would write a prompt... I basically wrote it as if it was a class for somebody (laughs). And so I would like write a prompt, and then I would write the things that you would have to do in order to code it. And then I would give like the boilerplate code and then I'd write the answer code, and then there'd be the next step. And it was just like a super-fascinating way and I feel like each part of that was reinforcing something in the learning. And so, also when I looked back at it, I mean I look like, kind of a crazy person, but it's interesting. I end up writing my own test frameworks. I didn't know test frameworks existed, I don't know. (Laughs) It was very funny.

    KYLE: Does that still exist? That sounds like an awesome project. 

    ASHLEY: It's actually on my GitHub. I put it there. I'm embarrassed. It's called, "Rise and Shine." All my stuff's public. I'm gonna sound like, again, it's a little loopy. I was definitely writing it at like 4:00 AM, but it's there. (laughs)

    KENT: You know, all of this stuff that we're talking about makes me think of Dan Abramov's lessons on Egghead.io about Redux. If you haven't seen those, I recommend you check them out. But one of the things that he does in there that I think is just so valuable, and like it has, this principle has nothing to do with Redux; the principle is, he teaches you about... like some concept in why you need an abstraction. And then he shows you how to use that abstraction and then he shows you how that abstraction works. And he re-writes it, just right there, in front of you. It's really, really impressive. And maybe you couldn't do that in an Egghead lesson about Angular, maybe for different parts but, I think that was just a really impressive way to teach. And I feel like I could write Redux right now and like that's pretty cool. If only I'd thought of it a year ago, then it would be me... no, I'm just kidding (laughs). But yeah, he teaches in a really effective way and I think that's an effective way to learn as well. 

    BRIAN: I find like as a counterexample though, that when I try to show like, "here's an implementation of a monad," for instance, people are like, "Whoa, whoa, I just want to know how to use it and now you're showing me like all these things and I'm a little confused." It's like, sometimes it's better to hit something from like 10 different examples to gain an intuition, than to pick it apart and show the pieces and the implementation. But, I don't know, it's like, where do you draw that line?

    KYLE: That's just cause you busted out that word "monad"(laughs). Anybody that hears the word "monad" is automatically going to get a little bit scared (laughs). 

    ASHLEY: I think the key is balancing motivation. And I mean this is also why JavaScript happens to be a kind of great language for learning programming because you can get something that looks like something in the browser right away. So one of the things in that CTM book, is again, Peter Van Roy is having people, like, build things up from a kernel. And there's not many people who are going to start doing that, that are gonna like really stick with that 'cause they find it satisfying. 

    And so, what I find is you have to... all learning is goal-driven, right? You have a goal. And so, often, people who are learning, they want to do something. And so as long as you can keep what you're doing very clearly on track to the thing that they want to do, you can get as deep and hairy as you want in the weeds as long as that connection still is maintained. And so there's always like a circling back to, and this is how this gets you what you need. 

    So I think, like monads are awesome and there's lots of ways to motivate people wanting to use monads. I think probably one of the big reasons people are freaked out by them is they have no idea why they're useful. So if you keep that in mind, people could get excited about all sorts of things, like no matter how deep and dense or close to the metal it might be, I think.

    KYLE: There's a thing in teaching, and I don't know how many have heard of this term, but "cognitive overload theory", this notion that when you're teaching something, when you're learning something, there really is, everybody has sort of a level at which beyond that, not only are you not catching anything but it's really almost subtractive; you're losing out on the understanding that you thought you had. So as a teacher, you always have to be careful and mindful of that idea that, "What I'm teaching can't fill up the cup so much that it's overflowing and they're losing, they've tuned me out, they're not hearing anything that I have to say."

    So on this notion of like building from the ground up, I'm not sure that that is necessarily the most healthy thing. I think we should want to inspire people to be curious enough that they could. But I think more practically, you might go in the opposite direction; instead of building from the computer's first principles, up to an Angular application, maybe start with an Angular application and go one layer down further in the abstraction stack and understand that one. And if you get to the point where you are pretty comfortable, a mastery at that level, get a competency level of the one below that, and the one below that. So maybe going in the opposite direction where I'm not really showing you the entire way that the sausage is made, but just that last step before the abstraction, I think that sort of curiosity is what will foster deeper learning. 

    KENT: I think that actually kind of applies to the way that I have learned. I started out doing JavaScript just a couple of years ago and we were doing Backbone and then we migrated to Angular. I had no idea what was going on. And so I got to know Angular pretty well, and then I'd run into a problem and I'd have to dig in and debug Angular's code and whatever. And over time, you kind of... you figure it out. But I think what's key is having the curiosity and the desire to understand, "How does this thing accomplish what it's doing and how could I do it without that?" 

    And so, like building apps that are Vanilla JavaScript apps, just as like toys and stuff on the side, I think is really valuable for your learning and being curious as to how the framework that you're using accomplishes its stuff. Because, like, we've got to ship stuff, you know, like, having a framework, I think is totally valuable in a work environment where you're building stuff. But we also want to be able to use these things more effectively, and so you can use them more effectively when you understand how they work. And so there's kind of that bogs that makes it kind of difficult, but. 

    ASHLEY: Yeah, just to jump back quickly to what Kyle was saying, I do think that you can go in both directions (and obviously depending on the type of person you are, one way might work better for you or not.) But one thing I have seen, particularly with web applications, and the reason that I kind of like to start from first principles as opposed to an application, is that an application is oftentimes, especially for beginners, not something that they understand. So if you start with the application, you're already starting in a place that is super-confusing and disorienting. 

    Whereas, if you start from first principles, then first principles doesn't need to mean, like, how the computer works or something, but something more like, "I have this type of information and I need to show it in a template, first principles." Because once you start from those things, it's significantly easier to understand that as a human being, I can reason about how an app works and now I just need to figure out how to implement it. Whereas, if you start from the application itself, I find that beginners are often trapped in the way it was implemented -- can't think outside of it, and also can't think inside of it. And so it's often not a terribly great place to start. Of course, once you have people who understand how a framework works, then moving down and explaining it, abstractions, that way, I think can be really great. But for beginners, they just get stuck and all they see is syntax and have a lot of trouble reasoning about it. 

    KYLE: Also, there's a lot of really terribly written applications out there, so if you use that as your basis for learning, you have to take that with a grain of salt. 

    ASHLEY: Honestly, debugging bad code is a great way to teach, I've actually found. It's really nice to...  because beginners are often afraid of making mistakes, so being able to show examples of mistakes and then how to fix them, I think is often a more successful exercise than the blank page, having to write something from scratch. The debugging actually ends up revealing a lot more about how something works than writing it, often. 

    KYLE: Speaking of debugging, I hope everybody listening is well-familiar with the developer tools in your browser. You'd be surprised at how many times I run across developers that have been at it for a long time, and have barely any understanding beyond a console, that there is such a thing as developer tools. So if you haven't learned those, this holiday season would be a great time to up your skills in developer tools, whether that be Chrome or Firefox or whatever browser. There's tons of fantastic stuff about that. 

    LIN: I'm actually hoping to do some Code Cartoons, now that I've joined Firefox's Developer Tools Team, about developer tools, after I finish my React book, so, hopefully, that will help. 

    ASHLEY: It's really funny, being a back-end person, hearing y'all talk about dev tools. I mean, I do some front-end development, but debugging tools in the Node ecosystem are not actually really, they really like kind of like don't exist. They're not very good. So, it's funny to talk about dev tools in that sense. It's like, "Oh, learn how to use console log." (laughs) But yeah, I don't know. That can be interesting. 

    I think when you're learning as well, I think one of the hardest things getting up and running with programming is understanding your environment and your tools. And what's fascinating to me is that a lot of beginner resources skip that part, where that's the part where we lose 80% of people that try to learn how to code, is like, "How do I set it up? How do I install Node? How do I get going?" And so the low-barrier of entry for JavaScript, it just being like, "there's a console in your browser" is really nice. But if you wanna do anything more, I think also having a lot more resources on how to set tools up, how to set your environment up, and that sort of thing is really important. We skip it all too often. 

    KENT: I don't know if this exists, but hearing you say that makes me think we need to have a resource for learning JavaScript that does nothing but list all the different types of exceptions and error messages that can happen and tell you where the hell those come from. Like, for example, that famous one that everybody's seen for a million years: "undefined is not a function." Thankfully, Chrome finally changed that but "undefined is not a function," doesn't mean anything to anybody, unless you've already seen it a million times. So we should have a resource that like, lists what those things are and how to start figuring out, from the error message, how to go backward using developer tools, in whatever environment, to go backwards to find the problem. 

    BRIAN: Instead of survival mode. You have to survive as long as you can. 

    KYLE: Yeah, it's like a more helpful version of Stack Overflow, 'cause Stack Overflow has all that information but it's really hard to find it, without, you know...

    ASHLEY: Without all the snarks and the jerks, yeah. (laughs)

    KENT: Yeah, exactly. 

    MATT: I've got a question for both of you: as you teach JavaScript... it's like I'm kind of along the same lines as Kyle, like, I learned JavaScript like 15 years ago, and the language was much simpler back then and I thought that was kind of a good entry-level language just because there wasn't so much to try and get your head around. As we introduce new stuff every year with like ES6 and now ES7, how does that affect teaching JavaScript to beginners and how does that affect the way they comprehend it? Because I know developers that have been doing JavaScript for years and the first time they see an arrow function, they're like, "Oh, what the heck is this? It looks so weird." So I guess my question is how does ES6 affect how you teach JavaScript? 

    ASHLEY: Have you seen my talk? (laughter) I give a talk on specifically this topic. (laughs) I guess to summarize what I say is, I think one, I think we need to be a lot more careful about the way we're extending JavaScript. One of my biggest critiques of the class keyword in JavaScript is that teaching it will be a nightmare, because it complicates obfuscates the underlying implementation and how the language actually works. And if we understand that programming languages are tools to teach programming concepts, we have some conflict between the concepts and the syntax, which is a big problem. 

    As far as these things that we're adding to the language, that are like, my main thesis is that we need to continue to teach JavaScript exactly the way we've been teaching it before, in it's limited... in the small language that you learned 15 years ago. And this magic that we now have is magic and we sprinkle it on top once we've got everything else baked. And so, this will be a problem, though, as beginners enter into the industry and they're already going to be seeing code that's written with these new, like, the arrow functions and these new features. And, again, I think we need to start from the bases and just like work the way up. I don't think we should be teaching class or arrow or generators, as first classes when we're teaching beginners. 

    KYLE: Yeah, I did watch your talk and actually since that's been brought up, that is actually, that event, where she gave that talk, I also gave the closing keynote. That was the opening keynote and I was the closing keynote for the Thunder Plains conference, in Oklahoma City, a big shout out to the Oklahoma City JavaScript community. They're fantastic! But that's how Ashley and I first met. And what promoted us to this particular podcast episode was some conversations that we had there. It is a fantastic talk and Ashley's spot on that there are definitely some ways that we can take the new shiny stuff and actually put barriers in front of people to understand. 

    And one of the reasons for that is that I think there is some misconceptions among developers about what it actually means to have readable code. I think a lot of people think that's purely suggestive, purely opinionated, to call something readable. But it turns out, it has actually been more formally studied, this notion of code readability. What would it actually mean for a piece of code to be perhaps "scorable" in an automated way. There are metrics for code readability. There's a paper written about this. I'll see if I can dig up the link for the show notes, but there's a paper written about code readability. And one of studies, one of the outcomes from the studies that they did was that one of the biggest things that lead to people calling something readable is actually familiarity.

    And if you think about it, familiarity is actually based upon this principle of tribal knowledge. There's a special set of stuff that I've already learned and because I already know that, I can look at this piece of code and it's totally familiar to me and I will call it readable. But if I don't have that tribal knowledge and I look at your code, no matter how readable you think the code is, another person without that shared familiarity isn't going to find that readable. So I think that there are definitely some things about ES6 which are being touted as "this is objectively more readable code," but because there are some paradigms introduced that don't actually exist in other languages, we don't have as much of a chance for a developer to show up a JavaScript with that shared tribal familiarity and that is going to harm the readability of code. 

    Now, I have to just take a side note and rant on class since Ashley brought it up. Class, for example, is a perfect example of trying to layer on additional syntax to fit a particular predisposed mindset. I show up at JavaScript with lots of thinking about class-oriented design and I want JavaScript to service my desire to do class-oriented design. So we keep trying to put more and more of the syntax there to look like it does in other languages and in the places where it doesn't behave like it, plaster over that with as much, you know, silly putty as we can. The problem is that it is actually making things harder and harder, for someone like me who doesn't just teach how to do the thing, but how the thing works. There are more and more exceptions being added to the language to service all of that silly putty. And it has gone to the point where I personally don't feel like I'm even going to teach the class, or not that I'm gonna talk about it, and then just move on but if I can't teach how it really works without completely losing people, then I'm not gonna teach just what it does. So, I'm not a fan of that direction in the language. But on the other side, there are things that the language has done which are really important and I think actually will aid in learnability of the language itself. For example, I'm a big fan of destructuring. 

    ASHLEY: Yes! (laughs)

    KYLE: Now I know the destructuring feature, itself is actually, fantastically complex. There's a lot of nuances to it, and I still am learning parts, you know different nuances of it, but I think destructuring actually does something really useful with our code, which is that it turns our code from being more imperative into being more declarative. And it has been proven -- not just a theory of mine -- it's been proven that declarative structures are easier to learn. Instead of telling you how to do a thing, I just want to tell you what I want and I want you to give me that thing back. And that's what destructuring is actually doing for the language is allowing us to declare what we want to have happen out of these destructured assignments, and let the language take care of some of the nitty gritty, imperative work to make that happen. I think that's really important. Not that we can't or shouldn't tell them, "Here's how we did it before," but I think over time, it will become the preferred way of explaining how to deal with that idiom. So, I think ES6 actually did a fantastic job with stuff like that, and then they got a little bit drunk on special operators for things like arrow functions and other things like that, and didn't actually really move the ball forward in terms of learnability, in my opinion. 

    ASHLEY: Yeah, we had not talked this before but I like that we have similar views on ES6, Kyle. That so funny. Destructuring is one of my favorites. And to talk a little bit about what you mentioned there about programming paradigms and declarative languages, I think that's super-important. And again, one of the reasons that JavaScript is a great beginner language is that you can write lots of different paradigms in it. It's very much a multi-paradigm language. And I think too often, when we teach programming, we focus on the syntax, we focus pretty much exclusively on like imperative-style of programming. 

    But when we're teaching JavaScript, we have the option of being, again, able to teach programming languages as tools to solve problems. And declarative languages, in particular, are something I'm personally really excited about. I'm actually implementing in declarative language, like DSL on top of Node right now. But when you can kind of understand that when we do imperative programming, we have a conflict, where we're mixing both our implementation and our business logic. And when we do something with declarative and we have solvers, then we can have our business logic and our declarations, and then we can solve them imperatively. And I think that, that's really great. And again, this is a perspective on programming and what programming is, that we could teach when we teach programming, but we often don't. When you can view programming as this kind of tool, I think our relationship with it can be very different. 

    KYLE: I think you're hitting on something important because what was underlying what you just said is a question of, "why do we write code?" And I think an obvious answer that might quickly jump to most people's minds is, "Well, I write code to tell the computer what to do." But actually I don't think that's really the primary purpose for writing code. There's two observations, I've been quoted as saying this many times, but there's two observations I can quickly make about that. The first is, that computer science tells us that there's an infinite number of programs that can solve the same program problem correctly. There's an infinite number of ways to write the program that solves your problem correctly. And then within that space of correct programs, if we talk about just JavaScript, the code that we write is actually just a set of suggestions to the JavaScript engine on what it oughta do. It's almost declarative in that sense, that we write a "for loop" and the JavaScript engine's like, "Okay, I see what you wanna do, but I'm gonna do it an entirely different way."

    ASHLEY: This is very important! (laughs). 

    KENT: There's a separation between what we write and, and it's difficult for me, because I'm a craftsman. I'm like, I chose to do "++i" instead of "i++" and the language is like, "Well, this other way is way better." You know I'm glad that the engine is better at writing efficient code than I am, but it is difficult to separate and think that the code that I'm writing is precise to the set of instructions. Anyway, if we back up from those two assertions, it really does ask: what is the purpose of code? If there's an infinite number of ways to do it and whatever way I pick is just a suggestion to the computer anyway, then maybe the purpose of code is something different. And I contend, as many others do, that the purpose of coding, primarily, first and foremost, and as a far distant second the computer first and foremost, human beings. It's a form of communication with other the people. 

    Which is why I think it's so important that we not just figure out how to teach people a way to get a correctly running JavaScript program, but that we teach people how to write an understandable and learnable JavaScript program. That's where we move beyond the skill and the craft into almost an art form. And I don't mean to get like, you know, "code is poetry" or anything like that. I'm not trying to be, you know, frilly about it, but like, I do have in my mind that there is a lot of different ways to express the same program. And if we were to judge those different ways, those different expressions of the program based upon how easily a person, with no prior knowledge of the problem domain or the code, could understand it without explanation, that's what I call, almost "self-teaching code," code that teaches itself, that explains itself. 

    And, yes, code comments can help and, yes, variable names and functions can help, but it's deeper stuff like, what idioms we choose. Is this appropriately done with a for loop versus a recursion, or is this a destructuring thing that needs to be declared that way? What we choose to do affects how people will understand our program, how they will learn our program. And it's not just other people on our team, but our future selves. When I go back to code that I wrote a week ago, I'm like, "what in the hell were you thinking?" No, no, literally, what were you thinking, 'cause I actually don't know, 'cause I can't tell from this (mumbling.)

    ASHLEY: (laughs) I mean it's really important in substance though, right? It's like programs must be written for people to read and only incidentally for machines to execute. 

    KENT: Yes, it's not a unique idea to me. I'm just...

    ASHLEY: Oh yeah, no, no, no. I mean I think it's super-important. And when I started really getting into programming language design as kind of like a hobby, I started out by being pretty hung up on this question of, "what does it mean for a language and then also a program to be expressive? What does expressive mean?" And I would like ask people this, at like meetups, all the time. I'd just go up to them and be like, "So what do you think it means for something to be expressive? What makes a language expressive?" And generally speaking, the thing I heard was "being able to do something in the least amount of characters." Like, the least amount of syntax. I know! I know it's terrible! I was like, I am trying to get at something really beautiful and important here and you're just talking about you have a language that has sugars so that you can write something really, really short. 

    So I think trying to move the community towards an idea, like, when we say "expressive," we're not meaning, how quickly you can get something done, but how you can really show intent and thought in what you are writing is what's important and is what makes languages, I think, either better or worse or special is how well they can help express what you're trying to do. 

    KYLE: Since you're at npm, I have to tease you on this: obviously, semicolons hurt the readability and understandability of code. We need to remove all semicolons, right? 

    ASHLEY: Um... that was not a decision that I made. I have no comment. (laughs)

    KYLE: Sorry. I couldn't resist. 

    ASHLEY: (laughs) It's fine, it's fine. I mean style is important. Like the one thing I will say, as far as style goes, and expressibility or in the expressivity of a language is, you want it all to be the same, because the key thing that we want to do (and this is why frameworks and stuff are very great), is we want to take away all the boring problems, so that we can focus on the interesting ones. And so being able to Bootstrap things, being able to eliminate style, I mean this is why declarative languages are great, we don't need to tell the computer how to solve things; we just wanna focus on our interesting problems and the things that pretty much we spend all of our time as developers doing, which is like repeating this like kind of boilerplate stuff that everyone has already solved, done, again. 

    KYLE: Yeah, that's a very interesting notion of what is the difference between the boring, mundane work and the interesting work? And I would almost, you know, it's that "one man's trash is another man's treasure." One man's or woman's boring code might be somebody else's really interesting code. But I do think it is important for an individual developer to say, "this is the part of the program that I'm gonna be most effective at applying my brain power to and figure out what tools can help me not worry about that." 

    I hope that people will find (and maybe this is the take away from my portion of this podcast), I hope that people will find that actually the language, itself, is a really good tool for that. Understanding the language itself and knowing how to use what's already built in, in more effective ways is actually one of your best tools. When you don't much about the language, you just reach for the nearest, most familiar thing and you end up doing stuff the hard way. So, I hope that people don't always think, "I have to find some other framework or library to do that for me." Sometimes we can just learn JavaScript better and in the process of that, end up creating more understandable code. 

    ASHLEY: Oh yeah, I completely agree with you. I mean, this is kind of like a nesting doll abstraction situation, and it's like, "Which abstraction do you want to start with? Which one is the one that's going to be the most interesting to you?" And there's kind of a question here about like, what's to learn next for those intermediate programmers. And I would definitely say take a look at the tools you're using, whether the tools are a language, JavaScript, or a framework and then pick, I would say, pick a couple of the abstractions that you've taken for granted in that and dive deep into those and find out how they are working. You know, lift the curtain and see how that works. And that can be really cool because when you do that, you end up getting the skills that you would need to be able to build abstractions of your own. Because when you don't know how the abstractions work, you are kind of beholden to the ones that other people have made for you. Whereas once you start understanding how to build them for yourself, you can see a whole new world of different types of abstractions and be able to contribute those back. 

    KENT: Cool. Okay, so this has been such an amazing episode. I wish that we had more time. Unfortunately, we don't so I'm going to wrap things up here. Thank you so much for coming on. Let's go ahead and take a look at the hashtag @jsAirQuestion question really quick. We do have a couple of questions on here. So Marcus Nielsen says, this is @Getify, "Object composition, prototypes, pure functional, reactive programming. What paradigms should we use in normal projects?" I don't know what "normal" is, but there you go. 

    KYLE: Ah, yeah, that's super, super hard to answer in a generic way. So, for example, you could think about procedural programming, functional programming and class-oriented programming as three major programs. Certainly not the only ones, but it's those three major paradigms. And I have to be honest with you that the vast majority of projects that I've ever written, that the most effective parts are the parts that mixed the best parts of those together. So I don't feel like I've ever written and entirely object-oriented or an entirely class-oriented or even an entirely functional programming-oriented project. 

    I have (again, shout out to Frontend Masters), I have a class called "Functional Light Programming," and basically that's taking some of the real basics simple principles from functional programming, separating themselves from some of the perhaps overwhelming terminology and just talking about the fact that we can deal with values as if they don't change and we can make functions that don't have side-effects on other state. And those are things that actually improve my code, even if I'm running a class-oriented program or if I'm writing, you know, a procedural-based code, program. Those are things that help regardless. So I would say find the principles, those first principles in each one of those paradigms and figure out how those work together. You're not gonna hear me, likely, say, "do all functional or all class" or anything like that. 

    ASHLEY: I just want to jump in here really quickly and say that the desire to do something in a purely one-way or the other thing and to have a simple, like, a one answer for all things is I would say, try rid yourself of that desire because that desire is not how the world works. And the reason you would want that is because you would want something, like, just this black and white answer. And I think it's important for us to know that these problems are complicated and things need to be hybridized and we need to see things as tools. 

    KYLE: Cool, yeah, I think those are good insights from both of you, thank you. So Alyssa Nicoll asks, "Difficulties like scope are not unique to JS though, right?" I think this is pointed to you Ashley.

    ASHLEY: Yeah, that's totally the case. Scope is difficult for beginners in general. I think because of... I think there's a couple kind of specific things about how scope in JavaScript works, that makes it a little bit harder for beginners. In JavaScript, it's not as easy to make little boxes that things can't' go in and out of, basically, is how I like to describe it. And what we think about scopes is you're on a box and like this is in here, and then this is out here. In JavaScript, that's a little bit more confusing with closures. I think that's something that people really, like, don't enjoy. In languages like Ruby, again, scope is very difficult but you have like a class and it's a nice box; you can create namespaces in a simple way and you don't have to necessarily use functions to do that. The fact that functions are one of the ways that we control scope is, I think, what makes scope in JavaScript particularly hard for beginners because functions are already something that's difficult for them. 

    KENT: I wonder if maybe some of that has to do with familiarity, though. Like if you've learned another language first and learned how they manage scope and then maybe it makes it more difficult in JavaScript. But if you learned JavaScript first and learned how JavaScript manages scope, I don't know...

    ASHLEY: I think it's yes and no, like certainly if you're coming from another language and then you're asking about JavaScript and you're like, "oh wait, this seems harder." But I do think still the desire to just have a box to put stuff in and that box ends up needing to be a function, is confusing for people who have still never even programmed before because they want it to be a not-moving part and it end up being a moving part. 

    KYLE: I think one of the things that plays into that, just real briefly, is that we have to go back again to the previous episode when Brendan reminded us all that JavaScript came from Scheme. It really is Scheme in a procedural facade, stuck inside of the browser. And if you think about a functional programming language, that notion of boxes of scope is all over the language, so if you learned Lisp, you already have an instinctual concept of that. But if you came from a purely procedural language, you're not used to thinking about these notions of closure, variables outside of functions, functions being passed around as values. So what JavaScript asks you to do is learn functional programming without realizing that you're doing so. It asks you to learn it in the facade of a procedural language. And I think maybe that might be one of the places where a functional programmer has a leg up is because if they come to the language with that intuition, scope in JavaScript, makes not terribly dissimilar sense, but if you don't have that prior to coming into JavaScript it can be a little bit weird. 

    ASHLEY: Yeah, completely agree. 

    KENT: So the next question that we have here is from... oh, no sorry, these are just a bunch of troll questions from Jeff Whelpley, so we're gonna move on. (laughs) So I think that's good for our questions. We are a little bit overtime. I do still want to get to the tips and picks though, because we have some really good ones. So let's go ahead and Ashley, we'll let you go last. We'll start with Lin Clark. What do you have? 

    LIN: I'm glad that you start with me because everything that people were touching on before the questions was exactly my tips and picks section. So, my tip was about ESLint because some places, I was at a place before Firefox. I was told when I was on the Firefox DevTools Team where there was actually a big fight about whether or not to have code style, whether or not to have ESLint at all, not even the rules. And I think that it's important to realize that for beginners, that stuff is really important because when you're a beginner, every difference that you see, you think that difference is meaningful. You don't see it as three different ways of doing the same thing; you see it as doing three different things. And so it does add to that cognitive load that Kyle was talking about. So, my tip for this week is, definitely, if you are working on a project with any other people, definitely use ESLint or JSLint or JSHint -- one of those. So use it. 

    Second, if you are converting a big code base like we're doing right now at Firefox DevTools, and Firefox generally, is converting to using ESLint right now and it can be tricky to introduce code style to a project when it's already so big. I've done this before in another open source project and the way we managed it there was by doing it file by file, so that you don't have... you know, if you do one rule across the whole code base as a patch, then it will conflict with a whole bunch of other patches that are currently being worked on by other people. If you do it file by file, you might inconvenience a couple of people who have patches that touch that file, but it'll be a lot easier for them even, when they are doing a rebase to figure out, you know, they just have one file that they need to go through and remember what they were doing in that file.

    And my third ESLint tip is look for plugins, you know, if you're using React. There's a React ESLint plugin that helps out with specific rules for that framework. And you can even build your own. We have one for Mozilla. So those are my tips about ESLint. 

    My pick is about what to learn next and how to dive deeper once you have gotten past that beginner stage of learning JavaScript. I actually have been reading a lot over the past year. I read I think almost all of the You Don't Know JS books over the past year. They're a really great way to get a deeper understanding of JavaScript. I actually come from, you know, Java, C, C++ I learned in school. PHP is what I have used more in open-source projects. And so JavaScript I was newer to than those other languages, so those books really helped me jump forward immensely. And also Nicholas Zakas' "Understanding ES6," was another great one. And I was actually reading that one as I was interviewing for my current job and there were a couple of questions where I knew, like, "well actually the spec does this, this, this..." because I had read that book like a week before my interview. So if you are trying to get a deeper understanding or if you're interviewing, I'd recommend reading those books. 

    KENT: Solid tips, awesome! Matt, why don't we have you go first, or go next. 

    MATT: Okay. Me and Lin were actually on the same wave length as far as tips. I will recommend ESLint as well. I actually just added this to an open-source project that I'm working on yesterday, because I was getting all these PRs, like everybody was using different styles and stuff. And kind of going back to what we talked about earlier, to have better readability of code when it's consistent, that's way more readable for either other people coming in on the project. But even for myself, when I look at stuff, it's like, "what is this doing here?" So I'm kinda echoing what Lin said, but I a hundred percent plus one that. 

    As far as picks, I have something not tech-related. I'm a big Foo Fighters fan. They just released an EP on iTunes for free yesterday, called Saint Cecilia. Dave Grohl's a legend. Go check it out! 

    KENT: Awesome (laughs) cool! Let's see, Brian, why don't you go next? 

    BRIAN: Sure. Let's see. My tips (laughs) were that, I found that most people I know that have been programming for a very long time, started with procedural until they got a good handle on it, and then they felt the pain and then started with object-oriented after that. After they became a good intermediate programmer with that, they started to really, you know, learn the design patterns, Gang of Four kind of stuff and classes and everything. And then once they saw that, then they started learning functional programming, you know, from more of a slim and different style, you know, of handling these problems. 

    So then, I think this natural progression of starting procedural and then learning object-oriented is the smart way to go, because you're gonna learn what the industry is using for the most part and then everybody's starting to kind of move to functional because it's interesting and new, I guess sometimes. But I find people are reading my "Mostly Adequate Guide," and I'm like, "Don't do this (laughs) unless you already know object-oriented programming," 'cause, you know, you're not gonna, you know, walk into the next job using this stuff. 
    And then, I just wanna say there was some cool picks, I don't know if they're links or picks, but I have some links too. Jared Tobin's "Recursive Types." He talks about fixed-point, you know, "Fix", "Free", and "Cofree". And then Hardy Jones' Computational Effects. I've linked to that. It's a really great GitHub repo to get an understanding of the composability of this stuff. 

    KENT: Cool! Thanks. Good tips and picks. So, I'll go ahead and go next and then we'll go with Kyle and Ashley. So I have one tip: contribute to open source. You just learn a ton when you contribute to other people's code. And so I've been asked many times, you know, "What project should I contribute to? You're telling me to contribute. What should I contribute to?" So I have a blog post that answers that question and I'll add a link to that, "What open source project should I contribute to," in the show notes.

    And then my picks, I had pick Slides.com. I totally love slides. It's just like I don't want to have to worry about setting up my slides or anything, just like give me a place to put stuff. And it looks really slick, so Slides.com. And then, TodoMVC. I use TodoMVC. I know there's been a little bit of hate on TodoMVC, just because it's a really small application. It really doesn't show you all the awesome benefits of these different frameworks and how they compare, necessarily, but it's a fantastic place to start, I think. And I use it for some of my workshops. And so I think TodoMVC is very cool. Kyle, what do you have for us? 

    KYLE: My first tip would be if you are looking for a way to motivate yourself to learn, try to look in your immediate vicinity, like, for example, where you are at work and look for those opportunities. I you wanna learn something, like a new plugin or framework, then go to your boss and say, "Hey, can I do a brown bag lunch next month about this thing and I'll spend the next month learning it, then I want to turn around and teach other people." So if you're looking for ways to motivate yourself, set yourself up external deadlines, goals, if you will, whether that's giving a talk, or whatever, or a date that you have to have blog post published even. Set yourself up those external deadlines and that will help motivate you towards deeper learning.

    The other tip that I would give is, I personally have had, as we're drawing towards the end of the year and I've had a crazy year of travel and busyness as usual, I've been experiencing a little bit of burn out recently. And a couple of weeks ago, I was like, you know, I'm just not gonna Tweet anymore for a while and I'm just gonna start workin' on building a game because I'm kind of tired of this grind of stuff. And I just wanna give that as a tip; it's okay to literally unplug and do something stupid and silly and kind of recover some of your mental direction and that sort of thing. So, that would be my other tip. 

    A couple of quick picks to mention: David Nolan, who is kind of my hero; I listen to and read almost everything that he does. He's @swannodette on Twitter. He is really, really smart and fantastic. He works for Cognitect and he just did a podcast episode for them in their most recent Episode 93. And I only got about half-way through this podcast before I realized I gotta go back and re-listen to this thing about five times. He was talking about how his framework and Clojure and ClojureScript called "Om" really changes the way people think about state and management of state, both front-end and back-end. I was blown away by it. I thought that was really fantastic. 

    Another quick pick is, some of you may have seen BlissfulJS before. That came out from Lea Verou. BlissfulJS is basically like a JQuery lite; it gives you a selection, but it doesn't wrap too much on top of the elements. It's a nice way of having some helpers along with Vanilla JavaScript. 

    And finally, a shout out to myself: finally, after way, way too long, the final book in my series, the "You Don't Know JS" series, the "ES6 & Beyond" book finally went to print this week, so that should be on shelves within few weeks, maybe right after the first of the year. So check out "ES6 & Beyond," if you want to learn about JavaScript and where's it's headed. 

    KENT: Awesome. Congratulations! Now we need ES 2016 and beyond, so get on it! (laughter) Cool! So Ashley what do you have for us? 

    ASHLEY: Alright, so to start off, one of the things that I wanna say kind of as a tip that's been great for me is, last year, my resolution was to have more sustainable behaviors. I often do things like in huge bursts but I wanted to be able to do things like more sustainably.  And one of the things that I started doing was this thing called Breakfast Repo. It's now my most popular GitHub repo, which is hilarious. But basically, it's a series of videos that people file as issues. And I watch one every morning with my coffee. And it's been amazing. And I've been able just to learn so much, just by doing like 20 minutes every day of watching a video. And it's not necessarily all about programming. There's a lot of programming stuff in there, but that's been really good.

    For my two tips, what I've written here is to investigate the programming languages that you use as tools. Don't just take them for granted. Investigate them as tools. Figure out what makes them what they are. I know a common interview question is, "what's your favorite thing about the language you use? What's your least favorite thing?" Figure out what those are. Figure out what the trade-offs with the language that you use are. I think it tends to be very illuminating. 

    And then secondly, I said learn about different programming paradigms and then spend some time translating your side projects into them. One of my favorite exercises that I find is probably the way I learn the fastest, is to take something that I've already done and either translate it into another language, translate it into a different paradigm. Going from something that I understand and them moving it to a new thing tends to be really successful. 

    And so with my picks, these four kind of like focus on those two tips. The first is something called JavaScript AllongÇ. I don't know if any of y'all have checked that out but it's really JavaScript for beginners, in theory. I think it's a little bit more advanced but it focuses very much on the functional paradigm. And so even if you think you already know JavaScript, it's a really great way to go back in there and like try and see JavaScript from a different angle -- if it's an angle that you're not using. Additionally, it's also just like a great review of some good functional practices. 

    Then there's this blog post called "Hello Declarative World." It's a blog post based on a talk that somebody gave. And basically it's written in Ruby, but it's talking about different programming paradigms, what the declarative paradigm is all about and then it actually implements what's called a relational declarative language in Ruby. And I will throw up the link. I went through and translated it into ES6. It was really cool. In particular, it use generators, so if you thought generators were cool and need a project to like actually use them, this like was a very fun example of that. 

    And then last two are two talks which I would recommend that you watch together. And I'm only going to just say their names and tell you nothing about them, because I feel like I would ruin the kind of surprise in both. One is "Simple Made Easy" by Rich Hickey and the other is "Growing a Language," by Guy Steele. They're both fantastic. The Guy Steele one is old, but it's amazing! Again, both focuses on language design.

    KENT: Awesome, if you're listening and not watching then just know that a ton of people just nodded their heads real big like this. (laughter) "Simple Made Easy" is a very good talk and I highly recommend you watch it regularly, like re-watch all the time.

    ASHLEY: Oh yeah, all the time. It's so good.

    KENT: Cool, okay, so we are a little bit over, so, I apologize to anybody who had other commitments after this, but I think this was a fantastic show. And these tips and picks were super-solid so check them out. Before we wrap things up, I just have a couple of closing announcements. So, if you have suggestions for us, go to suggest.javascriptair.com, and there you can suggest topics and guests. We fuel or podcasts with your suggestions. It's really helpful. And if you have feedback for us go to feedback.javascriptair.com and submit feedback. We'd appreciate that. We do respond to... or we do things based off of your feedback, so it's helpful. 

    And then remember that next week's show is with the Babel team. We're going to be talking about Babel, the JavaScript transpiler. So it'll be the same time, same place next week, and it should be fantastic. And as always, follow us on Twitter and Google+ and Facebook to keep up with the latest. 

    So that's our show. Thanks everybody for showing up! We really appreciate you, Ashley, especially, for coming on. And Kyle, always appreciate you, thank you. We'll see you all next week! 

    (EVERYONE): Bye!
  `,
}

