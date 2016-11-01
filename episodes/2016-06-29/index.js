export default {
  title: `Web Animations`,
  guests: [
    {
      name: 'Matias Niemelä',
      twitter: 'yearofmoo',
      links: [
        `[Element Animate Polyfill](https://github.com/angular/element-animate-polyfill)`,
      ],
      tips: [
        `Keep up with the Angular RC releases`,
      ],
      picks: [
        `[Angular Connect](http://angularconnect.com/)`,
        `[Web unleashed](http://fitc.ca/event/webu16/)`,
      ],
    },
    {
      name: 'Rachel Nabors',
      twitter: 'rachelnabors',
      links: [
        `[WebAnimationWeekly.com](http://WebAnimationWeekly.com)`,
        `[slack.animationatwork.com](http://slack.animationatwork.com)`,
        `[DevTools Challenger](http://devtoolschallenger.com/)`,
        `[A List Apart Article on using animation to improve your users’ experience](http://alistapart.com/article/web-animation-at-work)`,
        `[Complex timing function proposal](https://github.com/w3c/csswg-drafts/issues/229)`,
      ],
      tips: [
        `Steady FPS over peaks and valleys`,
        `[Complete Web Animations API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)`,
        `[Detailed browser support for the Web Animations API at the Edge Platform API catalog--don’t trust caniuse on this beast of an API!](https://developer.microsoft.com/en-us/microsoft-edge/platform/catalog/spec/web-animations-1/)`,
      ],
      picks: [
        `[My new CSS Animations + Transitions Course](http://courses.rachelnabors.com)`,
        `[CSS Conf Argentina](http://cssconfar.com/)`,
        `[CSS Dev Conf San Antonio](http://2016.cssdevconf.com/) plus [CSS + Motion Design workshop](http://2016.cssdevconf.com/#workshops)`,
        `[All Things Open](http://allthingsopen.org/)`,
      ],
    },
    {
      name: 'Sarah Drasner',
      twitter: 'sarah_edo',
      links: [
        `[My CodePen](http://codepen.io/sdras/)`,
        `[Comparison of Animation Technologies on CSS-Tricks](https://css-tricks.com/comparison-animation-technologies/)`,
        `[Frontend Masters Course](https://frontendmasters.com/courses/svg-animation/)`,
        `O’Reilly book coming: SVG Animations`,
        `[The First Pull Request](http://youtu.be/HjgZQeMrw6c) and [Zero to 60 in Software Development: How to Jumpstart Your Career](https://youtu.be/-qPh6I2hfjw) - talks by [Kent C. Dodds](https://twitter.com/kentcdodds)`,
      ],
      tips: [
        `[Greensock SVG Tips](http://greensock.com/svg-tips)`,
      ],
      picks: [
        `[Recreating the Twitter Heart Animation](https://css-tricks.com/recreating-the-twitter-heart-animation/)`,
      ],
    },
  ],
  description: `
    It's totally mind blowing what can be done to enhance the user's experience with animations on the web these days. Let's talk about how some of this is done and what tools are out there to help you with this.
  `,
  youTubeId: '5JpsSC_gumk',
  podbeanId: 'r3axn-6096c8',
  shortUrl: 'http://jsair.io/animations',
  host: {
    tips: [
      `Write a letter to someone`,
    ],
    picks: [
      `[React Rally](http://www.reactrally.com/)`,
      `My [Frontend Masters](https://frontendmasters.com) workshops. [Webpack Deep Dive](http://kcd.im/fem-webpack) and [Writing an Open Source Library](http://kcd.im/fem/oss)`,
      `My [Webpack Playlist](http://kcd.im/egghead-webpack) on Egghead.io (includes my [Webpack course](http://kcd.im/webpack-course))`,
    ],
  },
  panelists: [
    {
      twitter: 'dan_abramov',
      picks: [
        `[Immutability is not enough](https://codewords.recurse.com/issues/six/immutability-is-not-enough)`,
        `[A Deepdive into Flow](https://www.youtube.com/watch?v=VEaDsKyDxkY)`,
      ],
    },
    {
      twitter: 'tylermcginnis33',
      picks: [
        `[What I learned from analysing 1.65M versions of Node.js modules in NPM](https://blog.nodeswat.com/what-i-learned-from-analysing-1-65m-versions-of-node-js-modules-in-npm-a0299a614318#.awfyildrp)`,
        `[React.js Program](http://www.reactjsprogram.com/)`,
      ],
    },
  ],
  transcript: `
    KENT: And we're live with JavaScript Air. Hello, everyone. This is JavaScript Air, the JavaScript broadcast podcast, all about JavaScript web platform. I must first apologize. If you're watching this, my eye looks really hideous. I'm not turning into some sort of mutant or anything, I just have an infection in my eyelid. So, apologies there. That will clear up. So, yeah, we're excited to talk about web animations today. We have a couple subject matter experts, and it's gonna be awesome.

    Before we get into it, I like to give a shout out to our sponsors that make many of the cool things about this show possible. So, first, Egghead.io is the show's premiere platinum sponsor. They have a huge library of bite-sized web development training videos. Check them out for content on JavaScript, Angular, React, Node and much, much more.

    And Front End Masters is a recorded, expert-led workshop with courses on Advanced JavaScript, Asynchronous, and Functional JS, as well as lots of other great courses on Front End topics. Check them out at frontendmasters.com.

    And TrackJS reports bugs in your JavaScript before customers notice them. And with their telemetry timeline, you'll have the context you'll need to actually fix the bugs. Check them out, and start tracking JavaScript errors today at trackjs.com.

    And SparkPost is email delivery built for developers. Build something awesome with their Node JS library or SMTP relay. Start sending 100,000 emails free with SparkPost at sparkpost.com/jsair.

    And finally, WebStorm is a powerful JavaScript IDE. It makes developers more productive with its super intelligent code assistance for JavaScript, Node, Angular, and React, and integration with lots of other awesome tools. Check them out at jetbrains.com/webstorm.

    Sweet! So, just a reminder, if you're watching this live, one of the benefits of a live show is that we can interact with you. And so, if you have any questions for our guests, or the panel, just go to Twitter and with the hashtag jsAirQuestion, you can ask your questions. And at the end of the show, we'll address those to the best of our ability.

    Next week, this is a weekly show, and we are going to have a show on Electron apps, so building for the desktop with JavaScript. And we'll have Jessica Lord and Evan Morikawa. I'm not sure if I'm saying his name correctly. But he's really cool. And so, yeah, check us out next week. Same time, same place. And as always, follow us on Twitter, Google Plus, and Facebook to keep up with the latest from us.

    Okay! Great! So, let's get an intro to everybody. So, for our panel, we have Dan Abramov.

    DAN: Hey there. And Tyler McGinnis.

    TYLER: What's up, everybody!

    KENT: Hey, Tyler, you're pretty scratchy there. Sorry! (laughs) And for me, I'm Kent C. Dodds. So, for our guest today, we have Matias Niemela.

    MATIAS: Hello!

    KENT: Matias, I think I may have pronounced your name wrong. Was that correct?

    MATIAS: That was correct.

    KENT: Okay, sweet! And, Rachel Nabors?

    RACHEL: Hi, hi!

    KENT: And Sarah Drasner.

    SARAH: Hi!

    KENT: Awesome! So, let's get an intro to our guests here who aren't on the show regularly. So, we'll start out with Matias.

    MATIAS: Do I do the intro or you do the intro? (laughs)

    KENT: You can do the intro for yourself.

    MATIAS: Alright. So, what (mumbles) I live here in San Francisco. I work at Google on the Angular team and I work on ng animations, all the stuff, involves animations from the framework, and I've been doing so for about three and a half years. I got started with Angular through blogging, through my blog theyearofmoo.com. And I've been building websites for as long as I can remember.

    KENT: Cool, thanks for coming on the show. Really looking forward to hearing your perspective. Rachel?

    RACHEL: Hi, I work for myself. I'm an Invited Expert at the W3C. I try to represent the needs of designers and the (mumbles) developers as we build new specs for web animation as we know it. There's probably something else I could say, but it's early and in Portland, this time is like 4am.

    KENT: Sounds good. Cool. And finally, Sarah.

    SARAH: Hi, I'm Sarah Drasner. I am a manager of UX Design and Engineering at Trulia, which is part of Zillow. I live in San Francisco, and I work as a staff writer for CSS Tricks.

    KENT: Sweet! I have landed at CSS Tricks more than once. (laughs) I think many of us have. Cool! So, to get our conversation started, I think a great just kind of a great talking point is just to kind of help us all understand why animations are even important. And in particular, why web animations are important. Like, is it not enough for me to just have things jump over around to where they're gonna be. Like, why do I have to animate something from one place to another? Why is that even important?

    SARAH: Yeah, I feel like the way that users visit a website, they're always scanning for spatial awareness. So, it's an event called saccade, so you're constantly like eye tracking around the site to figure out where everything is mapped and planned. And every time you shift that contextual awareness of where things are in the UX, it actually causes like some sort of disturbance or like causes the user to have to like refocus their attention. So, if you can retain the context of those pieces of the UX while you're shifting them and moving them around, you retain the spatial awareness and you kind of retain that context for the users. So, it actually allows them to kind of process information more quickly. It also like helps with perceived wait time and things like that where if something just snaps into view and you have a loader, that's not as elegant as something like gently coming into view, and you don't even realize that you've been waiting for like an Ajax call or something like that.

    RACHEL: Just to build out on that, animation can do a really good job at stringing disparate pieces together. So, we are kind of, on the web, we are trained to acknowledge jump cuts. Jump cut is a term from Hollywood. It's basically when you take the camera, instead of moving it or panning it, you just cut in a whole new shot that's pointing in a different direction. And we're kinda lucky because humans have been trained to associate these different cuts. But truth is, if there's not a face or a pair of hands in those cuts, they're really hard to track. And a user interface is very different from a human face.

    So, on the web, for many years, we've been dealing with this kind of like there's a new page. And then, immediately, our brains race to figure out what has changed on this page considering the past page. Animation actually helps break down all of that mental heavy work that has to be done, and lets the computer do it for the people. So, you don't have to analyze, "What has changed on this page? How do I visually diff it?" It's like, no, the computer is showing you the change as it's happening, so you can stay on task and do what you came to do on the site.

    KENT: Cool, yeah. I think that's a like so basically it's all about caring about our users and their ability to use our software, maximizing their productivity, making it like an enjoyable experience, right? So, why doesn't everybody just do this? Well, like, why is it not just the default on the web?

    RACHEL: We haven't really had animation on the web since Flash. I mean, think about it. The browser is really only optimized to animate one thing and that's scrolling. Until, you know, the advent of CSS animations and transitions. And rendering engines are still playing catch up with getting animations to actually run performantly. Let's face it, the browser is not a game engine so, we're coming a little way along. But our ecosystem has evolved sans animation. Unlike native, which has had animation from the get go. So, app developers and people developing apps for even desktops, they have access to a host of functions that the web simply has not grown up with, outside of the sandbox that was Flash.

    SARAH: I mean, I guess to build on that, I do think that CSS animations tend to be pretty performant. And any kind of JavaScript engine or JavaScript library that's working on top of that kind of native way of animating gives you some really good power tools to work with. So, I'm not feeling like I'm missing Flash too much, but I will say that animation sometimes doesn't have its hay day because it's been abused. Like, back in the days of Flash, back in the days of like the like crazy splash intro, like, you had to, instead of animation--

    RACHEL: Oh, but this was so fun!

    SARAH: (laughs) you have to like, that was like the opposite of cutting down perceived wait time. That was making the user wait so that you could have this like display of peacockedness in animation. So, people started to equate animation with things that were taxing on them, things that got in the way of them like buying an airplane ticket or doing whatever they needed to do, which is too bad. It's a shame. And there is a place for those kind of like beautiful, immersive experiences. Like sometimes I talk about like movie sites where all you have to do is wow the user. You're not really trying to get them to do anything other than like, "Wow, like look how great this movie is!" Like, that's a perfect use case for something like WebGL or something like that. But, you know, a lot, like 90% of the time, maybe more than that, that's really not animation's role on the web. It's really to like help the user do the things that they're trying to do, not get in their way.

    RACHEL: You subtly plus the user experience to borrow a term from Disney. (laughs)

    KENT: Cool, yeah! So, what are like, you mentioned that there are some challenges with people just doing animation for animation sake, like to maybe even show off as developers. Like, I'm guilty of that on my side projects and stuff. So, what are like what are other common pitfalls that developers have? Like maybe from like a technical standpoint, and then also from a usability or user experience standpoint?

    MATIAS: So, I think the challenges that people have are that the animation cointensity baked into the logic of the application. So, especially if you want animations early on and you're not using a framework or something that encourages organization, you'll end up having animations be a part of the business logic of your application. So, that's definitely a challenge. And I find that if it's done incorrectly, the code almost becomes spaghetti code or vaporware at that point. And I have a bias with this because I work on a freeware, and freeware encourages things to be organized in its own way. That I find definitely to be a challenge. And I find that to be a challenge throughout my development career.

    SARAH: Yeah, I think performance is another one. I think a lot of people are maybe a little under educated about what animation performance is and how to like debug jank. And, you know, sometimes I sit with the developers here. And just like, we go into like the rendering and the Chrome tools. And I'm showing people like how like, "Look, I'm gonna hardware accelerate this element. Watch all of the green paint rectangles come off of it." And you know, a lot of the kind of like things like people grew up on these like jQuery animate kind of things that were not very performant and just allowed them to plug in to something really fast, so, they didn't learn what's happening under the hood. So, I think that kind of tends to be, you know, if somebody will implement an animation and all of a sudden, they're seeing all this jank, and they'll be like, "Oh, well I guess that's just like how animation works." (laughs) So, I think yeah like understanding how performance impacts animation is a big one.

    RACHEL: Well, this is an interesting question to answer because I'm actually thinking about it from the implementor's standpoint. One of the biggest problems I'm noticing is people are using animation more and more is that there is a lack of tooling for building nonlinear animations in the browser environment for the web. Like, it used to be that everybody built things in Flash and now, we build things using the browser. But there's no UI for it. It's very difficult. It requires you to put in a lot of numbers. You have to know what those numbers mean. You have to understand CSS and how it works, or you need to understand how JavaScript works. And it's not very accessible for the layman. You have to remember that the people who make Pixar animations and films, they aren't actually writing the code that runs the animations. They're using interfaces that let them manipulate things that are then compiled to code. And I think if everyone who worked at Pixar had to be able to write the code that ran their animations, we wouldn't have many films from them. So, that's a bigger metaphor from a different field, but I think we're starting to see some of that showing up in the web right now.

    KENT: I really like that metaphor actually. So, you're saying that what enables Pixar to make us such awesome stuff is the tools that they have at their disposal to create the animations.

    RACHEL: Which are 100% patent and proprietary and not shared with anybody else. You can bet.

    KENT: Yeah, (laughs) that's too bad.

    MATIAS: I think that the reason why the tool is a challenge is because there still isn't a good way to do everything. Like, you have transitions which are really good for stage changes, key frames, which are good because you could have a bunch of stuff (mumbles) in CSS. And then, when you want to go to the programmatic route, you have to go 100% into JavaScript. And a balance of these things is kinda what browsers and front end developers need.

    TYLER: Yeah, I'd be interested. Kent, is my mic working?

    KENT: Yeah.

    TYLER: Cool. I'd be interested to hear how you all kind of got started down this animations route. 'Cause I know as a beginner, it can be like super intimidating because, as we talked about already, it's really easy to like have a bunch of jank with your animations. And then, it's even more difficult to figure out like how that is happening, like, jumping into dev tools and whatnot. So, what are some things that you all did, or like how did you get started not really like mastering animations but even like getting comfortable using them in your app?

    SARAH: Yeah, I mean I've been working, like building websites here and there, for 15 years. So, and I've been interested in animation from like since I was a young kid. I think when we moved away from Flash and things started moving towards CSS animations and JavaScript, I really like I think I brute-forced it. Like, I just like straight up went for like every single type of animation thing I could try. Like, I think if you like go to my CodePen, it's just like every, it's like Canvas, it's WebGL, it's a lot of GreenSock, it's React Motion, web animation, API. Like, I just try every single thing I can get my hands on because I'm kind of naturally curious. And I don't mind spending the time outside of work because I must have like a dopamine rush every time I make something move, it just must happen. (laughs) So, I don't think that that's typical necessarily like to just keep going for it like that because I definitely do it outside of work when it's not called for for any purpose other than just like to see things and try stuff. But I do think that there are enough write ups from people like me and people like Rachel and people like Val Head. And like people who are very exploratory and then kind of break things down for other people if they're interested in trying things out and not doing the same, spending their weekend coding. (laughs)

    KENT: Yeah, I think we all like that shot of dopamine though. So, maybe if you're not getting that, then try animations.

    RACHEL: Yeah, Sarah's a machine. I don't know how she does it.

    SARAH: I just like it. That's the secret.

    RACHEL: I like it too, but I don't know where you get the hours out of your day. I'm just always surprised to the wonderful things Sarah is putting. I don't know where she gets the energy from. It's amazing.

    KENT: Aww, that's nice!

    (laughter)

    KENT: I would like to get that kind of on the tooling side of things. So, we talked about how--

    RACHEL: Wait, you didn't let the rest of us answer.

    KENT: Oh, I'm sorry, sorry. Go ahead, Rachel.

    RACHEL: I want to hear how Matias got into animation.

    MATIAS: So, since I've been building websites for so long, animation, like I started for the Flash round, and then I wanted to have animations and websites. And my big reasoning for using animations was because the back end was always slow on the websites that they did, so the animations kind of disguised it. So, waiting for one second for a page to load or some Ajax request to come in was acceptable when you have animations doing (mumbles). So, then from there, when I got started with Angular about four years ago, I had messaged Igor and Misko, who are the leads of the project and I said to them like, "Do you guys have any animation plans?" And they're like, "Yeah, we have some plans." And I was like, "Well, can I build them?" (laughs) And they're like, "Yeah, sure." So, then they got me involved as a contractor. That was at the start of 2013. And that led me to move to here to work on the project full-time. So, it's just been like a passionate hobby ever since I've learned how to program. That's how I got involved. What about you?

    RACHEL: So, I used to be a cartoonist in a previous life. And when I say "cartoonist," I mean, I made comics. I didn't make animations. Something people outside that industry sometimes get confused. But then the recession happened, and I needed health insurance, so I had to get into a different job. And I realized, "Oh, I've been building websites. I'll do this for a living." It turns out that's a really profitable thing to do for a living. And so, I got into front end development, became a CSS junkie, and started traveling and giving talks because I like doing that. And then, these things called CSS animations and transitions wandered into my life, and I was like, "What?" I could finally make cartoons using two things that I love, drawing and CSS? And I could combine these things, and maybe I could make like an animated music video. I should give a talk about that! And I just sort of dove deep and really enjoyed doing the work so much that I abandoned traditional work to see if there was a way that I could do that full-time. I don't know if that works. But we're still trying to figure it out.

    The fun part though is it's been great watching the community grow from those early days back when CSS animations and transitions were kind of weird, and nobody really knew about them. And watching how many people have come in and joined and seen like the tweening library GSAP was rewritten in JavaScript. Now, you know, everybody who wants to animate things, they learn GreenSock. Sarah has a lot of experience with it. Just watching how animation went from this dirty word to being something that people are super excited about.

    And I totally forgot to say this in my intro, but we do have a flourishing community. If you'd like to get active with them. You should check out slack.animationnetwork.com. It's a great place to meet a lot of people who are interested in all these different kinds of animation, from JavaScript to CSS. We have everyone from brand new spunky folks to old and haggard Flash people shaking sticks being like, "In my day, we had a timeline UI!" And I also curate Web Animation Weekly, which you can subscribe to at webanimationweekly.com. This industry, it changes fast. It's wonderful to keep up with.

    SARAH: Yeah, I think just like to piggyback on that, Rachel actually is like a pioneer for web animations. Like, when I was first learning web animations, I learned from Rachel a lot. Like, learning CSS and transitions and animations. I'm not sure like I would have been able to do it so quickly if it wasn't for a lot of like Rachel's talks and like articles she wrote.

    RACHEL: Well, that's great 'cause I learn from you so much now Sarah.

    SARAH: Yay! (laughs)

    KENT: That's the best. Actually, I'm just gonna take a tangent off of that for a second. I often have people tell me that they don't feel like they could ever speak at a conference because they're too new, or like they don't have anything to share with the greater community. And I just think that's like so sad that people feel that way. Don't feel that way because, just as we see here, Sarah and Rachel have taught each other things. We all have something that we can teach people. As new as you are, you can teach somebody something.

    SARAH: Kent, don't you have a talk about submitting your first PR, or like how to get involved in open source. I thought that was a really cool talk. Like, just a really, like a really good idea for a talk too.

    KENT: Yeah, I'll put a link to that. Thanks for the shout out. I'll put a link to that in the show notes for people to check out.

    SARAH: It's important to remember to that when you're a person who is just getting started and just learning things, you have that access to that wonderful thing called the beginner's mindset. A lot of experts are terrible at teaching what they know to beginners. But if you are learning, that's the best time to be teaching. Most of the work that I use in my CSS animations and transitions workshops is stuff that I worked on when I was learning them. And I still remember the exact steps that I went through to learn it. And then, when people are confused, I'm like, "Oh, no, I made that same mistake too!" And that's a common issue. "Let me explain how I worked my mind around that." Whereas, if I were like, you know, "I'm a super expert at this. I'm going to come in and just kind of mind dump on you." It might be harder for people to relate to that who come from that beginner's mindset too.

    KENT: Yeah, actually, we just had a show last week about beginners. So, if anybody wants to hear more about beginners, listen to last week's show. Cool. So I do want to get back into tooling. Because like we did talk a little bit about how nice it would be to have better tooling. What tooling do we have already that makes building animations easier?

    SARAH: Well, I mean, there are tons. I actually did a comparison of animation tooling for CSS Tricks where I just did like a huge article of like everything that I've played with and like why I use it, why I don't use it, pros and cons for everything. I would say that there's no perfect solution to anything, but there's like pros and cons and reasons why you would use one thing over another. Canvas is beautiful for like doing a ton of blobs of pixels and like making them dance. Probably not as good if you want to do something that's like complex, responsive animation where SVG like really shines, and you can do stuff with GSAP and SVG to kind of get into like timeline and sequencing and things like that.

    I think when we start to get into React, that's when things get really interesting because of the virtual DOM. And Dan probably has a lot to say about that too. But I think like my like exploration of React animation tooling is like as wide as all of the rest of the animation tooling because there's not one right answer that I've noticed. Like, some things are good for one thing versus another. I think React Motion is like gorgeous, gorgeous motion, but it's very similar to game based animation where you give something like mass and physics and send it on its way, unlike GSAP where you're like giving something a sequential, and or CSS, where you're giving something a sequential timing and like fine tuning that like two second integer.

    RACHEL: Or we're gonna need an API for that kind of animation. I think that's the next big one.

    SARAH: Yeah, I mean there's like there are a lot of ways of handling that, and you know, you can even use GSAP within React like CSS transition group and things like that. There are a lot of like creative ways that you can access that. But I have noticed like strange race conditions between the DOM and the virtual DOM and stuff like sequenced, delayed CSS animations when they start to be chained. So, yeah, I think that the tooling gets more and more complex, the more your implementation is complex too. Maybe that's the easiest way of saying it.

    RACHEL: I'm confused. Are we talking tooling, like user interfaces or technology?

    SARAH: Oh, I assumed we were talking about technology but if you mean something else, then.

    RACHEL: Someone clarify here, so I know which way to go. (chuckles)

    KENT: I was mostly asking about the tooling that we need to build animation. So, like if I wanted to add an animation to my site, what tools do I have at my disposal? That's what I was talking about.

    RACHEL: That's kind of both.

    KENT: Cool! (laughs) Actually, Matias, I'm kinda curious because you have an interesting perspective as from a framework perspective, what things like if I were building an Angular 2 app, what things do I have at my disposal to build animations to my Angular 2 app?

    MATIAS: So, first and foremost, I want to mention that Angular 2 worked with a lot of animations API, 100%. Anything else with CSS, key frames, transitions, that's completely up to you to use through regular CSS means. But the API that we exposed to the users (mumbles) for the web animations API. So, you have that at your disposal. There's some polyfill for web animations that's graded by the Angular team that the aim is to make it smaller than the W3C one and to make it look more efficient so that you can include it into your Angular app, and it really just works. That's fairly close to completion. So, you have those tools. And then, there's a whole wealth of features. So, if you imagine 100% of the features that I have in mind, about 10 to 15% of them are in the core right now, and you can use them. And there's tons of features coming up, coming down the road.

    So, I'll give you an example. Let's say you wanted to have a container that opens and closes. So, the API that we have for Angular, you could say like, "Okay, figure out the height by auto, and it will automatically figure out the height for you." And you put all this work into making animation sequence, and you'll be able to control it frame by frame. And if you choose to have the animation work on a browser, you can, but you can swap out the render and have it work on native-level with iOS or Edge. And that was demoed at ng-conf as well. So, the tooling that Angular provides for animation is not (mumbles) framework within framework (mumbles) animations.

    KENT: I think you cut out there for a second there, Matias, but Dan, did you have something that you wanted to say?

    DAN: Yeah, I actually wanted to ask a question 'cause I haven't been really following what's going on in like animation ran for quite a while. And I wanted to ask what is the current approach or approaches that people use for interruptible animations. So, like, maybe last time I read something about interruptible animations was like three years ago. And I think like the way I understand is they didn't really handle this case. For example, if you have something that goes from here to here. So, it goes like this. And then, suddenly you want it to go back. So, it would just suddenly start going back with the same duration. So, yeah, it won't look very nice because it will be in the middle of the, yeah. It's hard to explain. But the easing would not look very nice.

    And later, I read about additive animations, which is something I think iOS 7 made the default so that if something is going from here to here, but it's in the middle, and then you want to go back, it's going to sum up those curves. And so, it looks kind of like the transition is less sharp. And then, I read about the approach that track motion uses, which is like everything is guided by physics. And so, you don't really specify the durations at all, and it just calculates how the thing moves. So, what other current approaches like in web animation standard, and so on, for adding interruptible animations?

    RACHEL: I think I get to speak on the web animations API front here. The web animations API does have room for additive animations in it. This has been something we've been waiting for for a long time because of issues with animating transforms, which are kind of overloaded. But it's not quite ready for prime time yet. I think Sarah can speak to your options from the wealth of libraries and solutions she has investigated. Take it away.

    SARAH: Yeah, I mean, so like GSAP GreenSock offers a ton of tooling for this kind of stuff. There's like a lot of, I mean, of course, you build that interaction but I think you do that with pretty much every tool. So, any kind of like what have you I think like (mumbles), click, or whatever. You could add (audio blurps) when you can reverse and actually change the parameters for the eases as you do so. They allow you to speed up or slow down with one line of code. So, you basically can animate your animations and have this like really finite control, which is the reason why its so popular to be honest. It's just super powerful and it's like putting a jet pack on.

    I do think that React Motion is gorgeous for what it does. But we just got some tooling in React Motion that like other things have had for a while. We just got on rest, which is a callback that didn't exist before for motion. But that doesn't even apply to Staggered motion yet. And in terms of Interruptible Motion with React Motion, I think you can definitely write that, but it's gonna be very (audio blurps) if you're writing with GSAP, which will be like one line of code versus maybe 40. However, React Motion does have, because of the physics that you're talking about, it does have a really beautiful motion. I wouldn't say that GSAP doesn't have beautiful motion. It also has really beautiful motion. But like, one of the really nice things about React Motion when you do work with a stagger is that rather than the stagger, normally when you're using a stagger in CSS or in like Request Animation Frame any type of like normal JavaScript, it's like layering those things with a delay. But what React Motion does is it takes the previous one and updates from the previous animation. So, like instead of getting like just like do-do-do-dah-do, you have them like folding into one another, which can be just gorgeous. So, there's trade-offs to either one I would say.

    KENT: I think we could say that's question's been answered. Awesome. So, another question, I think maybe this is maybe a little bit of a backtrack and more basic but I think it'd be useful for people to hear about the different ways that you can animate something. So, the different approaches like CSS versus JavaScript. And even within CSS, it's like you can animate something the same way in multiple different ways. And then, like what use cases are suited better to these different mechanisms?

    RACHEL: Oooh! I want to go. (laughs) Well, speaking from the CSS portion. CSS is kind of, it's so handy because it makes state-based animation so useful. Like, seriously, you just tie states to classes. And it's like you have your own little state engine, and the cascade handle is what takes precedence. The link state engines in JavaScript is a little bit trickier. So, if you're like, "I have a Jekyll blog. I would like to make the pages move from side to side as you move through the blog." Doing that with state based CSS animations and transitions is just probably a lot more accessible to the layman or to somebody whose job isn't integrating animation into a larger system that runs on a framework. So, I think that CSS animation is really good for hover states, page transitions, doing little things that bring in supplemental animations and even some heavy duty decorative animations from time to time. But there are really good use cases for kicking it up a notch with JavaScript.

    KENT: I think she's calling out to you, Sarah. (laughs)

    SARAH: Oh, I also want to let Matias have a chance to answer some of these questions too. But, yeah, I mean, I think I agree with Rachel. I talk a lot about how like I think CSS, when you're doing one or two small interactions, you're not having to load external resources. That's really nice. And CSS is like super performant. When like JavaScript APIs or libraries are really performant, they're usually leveraging CSS animation. That said, like JavaScript is really, really good for interaction. So, it's nice to not contact shift yourself between CSS animation or CSS and JavaScript. Also, JavaScript is much better like fine tuning things. Personally, I don't miss the like UI thing of Flash. I really like the finite like underneath the control thing that JavaScript allows you to have when you're animating. So, I think that it's like, it tends to be just like a really powerful tool in a lot of ways. But maybe, Matias, you want to talk about like Angular's version of this and page transitions and stuff?

    RACHEL: I just want to interject that for doing interactive animations, like you know, "I move this thing, now it's going to influence that thing," you need JavaScript for that.

    MATIAS: And that's the thing that kind of gets to me about having that separation of CSS and JavaScript because CSS is really good for ad hoc stuff, especially when you take into consideration media queries, just like, "Oh, boom, okay, you're in landscape mode, let's change all of the transition animations and key frames." But as soon as you do want to have interaction, as soon as you do want to have some element of dynamic data being put into the animation, you have to go to JavaScript. And even as advanced as the web animation API is, it still doesn't allow you to integrate directly into the CSS style sheet to pull in styles, to pull in classes, to pull in other data. So, you kind of have this mix of like custom specific CSS code and specific programming code.

    So, with Angular, we're trying to solve these things. We're trying to make it so that you can still have your regular CSS code, and then it just reference the classes inside of the animation. And the dynamic parts, and the attractive parts are handled through the framework. So, the way that I see it is it's nice that CSS and the web animations API are distinct from each other. And you will have to have a crossover with the two if you want to do advanced (mumbles) animation. And that's where framework is really good, or a library like GreenSock, or another set of tools, which you can compose very easily.

    SARAH: Can I ask you a question between like Angular and Angular 2? Or, like how things have like gone forward for you as this has gone on and like what the differences are? I don't work with Angular that much and I've heard really good things about how it's advancing. And I was just wondering if you could speak to that a little bit?

    MATIAS: Sure, sure. So, Angular 1, it was driven through CSS, where you add classes, and you detect changes. And that was done about three years ago, and it was very new at the time. And it was maintainable. It was good, but anything beyond that was very, very difficult. We would have to do a lot of CSS hacks, and we couldn't get the vocabulary out of CSS that we wanted. And with Angular 2, we don't rely on CSS. We have our own DSL for doing this stuff. But the DSL, like I said earlier, it could work on different platforms and have it work on iOS and Android (mumbles). And you could use CSS mechanics and stuff like that, but that will translate into something that iOS and Android render on their own. So, the long term goal is that okay, developers are used to making animations in CSS that let them do that, but there shouldn't be a penalty when you're rendering something natively. So, that's a huge difference. And I could go on and on and on talking about how everything works, but if there's more questions about the DSL, let's get to them.

    KENT: Yeah, yeah, so I did want to ask you a question about the DSL. So, just to make sure everybody's on the same page, DSL means domain specific language, and that comes with its own set of trade-offs. But a couple of the benefits, I remember talking with you a while ago about some of the benefits of having a DSL. You just mentioned one of them, being able to render differently through native platforms. Also, testability is another. Is that right?

    MATIAS: That's right, yeah. So, the benefits are that you can design your own language or design your own set of verbs, functions that kind of compose together. And then, anything below that, you have full reign to optimize and maintain and change things around. That's not the case with CSS. If I developed a CSS framework that ran animations and I was like, "Oh, I want this thing to work. I can't do this because CSS says no." That's a huge difference right there. Testability, being able to step through one animation at a time, being able to knock out parts of the testing code so that you're not hitting a browser each time, which will allow you to isolate things further. The amounts of combinations of things, we can have some really cool effects with very little code. If you design the language the right way, there's endless amounts of possibilities and benefits with it. And it's also more readable. It's all the quotes of (mumbles). That's the biggest thing I've seen with animation. t's like, "Wow, this is actually easy to understand now with Angular 2." Definitely.

    KENT: Cool, so we actually, we're starting to get a couple of questions, and as a reminder to our viewers, our live viewers, you can ask questions of our panelists or guests on Twitter if you use the hashtag #jsAirQuestion. But yeah, we still have a little bit more time. Is there anything else that we want to talk about? I think in the show notes, one of you put in you wanted to kind of talk about the landscape of browsers and stuff, something specifically about Webkit or Safari adding spring in. Rachel, did you want to talk about that?

    RACHEL: Oh, I, okay, this is-- (laughs)

    KENT: (laughs) Maybe you don't want to talk about it.

    RACHEL: Oh, it's an issue that's come up a lot with people working in interaction design and development is that Cubic Bezier Transition Timing Function Spec that we have is great. But it's limited in that it can't be used to do things like bounces and springs because it only has two points. So, the idea is wouldn't it be great if we had an even, wouldn't it be great if we had a spec for a timing function that had multiple end points? So, you could export entire motion graphs from tools like Adobe's After Effects, which lots of motion designers use to create things for the web right now that don't have a clear export strategy to anything the web can read right now. Wouldn't it be great if we had a spec that accommodated this need for larger motion graphs?

    And just recently, the (audio blurps) team introduced Spring to accommodate an internal need for some of these bounces. Now, don't blame them. You know, I get tired of having to chop up my Cubic Beziers and to key frames and substituting animations where I'd rather use transitions myself. But wouldn't it be great if we had a spec that could underlie this complex, underlie something like spring, and then we could build even more kinds of timing functions on top of it? So, I've been trying to get people excited about pushing that spec forward, and there will definitely be a link in the show notes.

    SARAH: Yeah, and I think like one thing to mention about that too is like that's a CSS particular thing. When we talked about like CSS versus JavaScript, JavaScript does have a lot of spring parameters, like tons of these libraries like GreenSock we mentioned earlier has like a ton of easing functions that do mimic physics and look really, really natural and beautiful, has bounce and elastic and all sorts of things, and one like, it's not even like a full line of code. And then, there's also like a lot of like spring parameters that you can choose for React Motion. And I know like WebGL does a lot of this stuff too, and Canvas. So, like you can build all of this stuff in. So, this is like a really, really cool thing to have in CSS that doesn't keep us back, but people should know that they can do it in JavaScript pretty easily.

    Also, like one thing about the After Effects that I would add is that there is a library called Body Movein that I never use because I like coding animation that like would take away the fun for me. But you can work with things in After Effects, and it exports to either Canvas or SVG plus JavaScript, depending on your preferences. And I usually don't like compiled code, but I haven't noticed that there's like a huge blip in the performance of the outputted code for this. So, it's worth mentioning. Even though I don't use it, I know that other people really like it, in case somebody's listening who wants to do it that way.

    RACHEL: I also can vouch for the Body Movein plugin. It's very popular with motion designers and the developers, a swell person.

    KENT: Cool, so I wanted to, I don't think that we actually mentioned this, but I wanted to at least bring up some of the cool things, like advancements in the browser for developing animations. There's like the Chrome DevTools I know has some really cool stuff for like creating your Bezier Curves and stuff. Anybody feel like they have good experience with that can kind of describe how that works and why that's useful?

    RACHEL: Funny you should mention that, Kent. I actually built, with Mozilla, devtoolschallenger.com, which is basically like an educational fun interactive site where you get to learn Firefox's animation tools, along with some other visual design tools, and discover the secrets of deep sea fish. It's a lot of fun. But yeah, browsers are coming up with different kinds of solutions to animation problems. And the success of these solutions, I think that people who are used to things like Principle or After Effects, or even Flash, might have their own opinions about whether or not these are the best solutions. But they're always a work in progress. Does anybody else wanna weigh in on the state of browser tooling?

    SARAH: I think there's like some really nice hidden tools. Like, if you go into the Chrome DevTools and you go into the thing, and it's like there's another one that's like Rendering Settings. That one is the one that I talked about a little bit earlier where you can actually see the paint rectangles for things that cause a lot of repaint. That's a really nice one to teach people who are just first starting to learn about performance because they can see it visually. Like, I do a lot of work with timeline recordings and like understanding garbage collection and things like that. But even though that has like a really definitive you can kind of see the graph, I think it's a little bit harder on beginners to grok what that means and how that-- It's like an animation goes from here to here, and then there seeing this thing that goes like this. And the immediate understanding that of like how that's working with the browser isn't so apparent where the rendering paint like repaints like those rectangles is like immediately like, "Oh, that one is messed up." (chuckles) So, that tends to be really like a nice, like hidden, tool that I use.

    But like, yeah, I think timeline recordings are really good. The only thing that I would critique for the timeline recordings is that they're not all created equal. You see this pie chart, and it has all of the colors of like what everything is doing and what it costs. And what's not clear is that paint, like the time it takes to paint is actually like way worse for the way that things look and perceive performance than other things. So, people will be like, "Oh, well, it's smaller." And I'm like, "Yeah, but the paint is larger, and that's actually not great." So, I would say that it's beautiful the stuff that they've done, but that would be my one like maybe make that a little more apparent thing.

    RACHEL: I think it's also an issue I've noticed is that a lot of people optimize for Chrome because of their timeline tools are really epic. So, they optimize a lot for Chrome but don't necessarily realize that other browsers have different rendering pipelines and handle different things differently. So, you might optimize like crazy for Chrome. And if you're never testing on IE, and you find out that you know IE whatever before Edge is like (gagging) dying on something. I want to remind people even if it looks good on Chrome's timeline, make sure you do your browser testing because different browsers render animations at different ways.

    KENT: Actually, kind of on that. What would you do in a situation like that if you realized, "Oh, this animation is like terrible, and it's like our own special, favorite browser." Is checking what browser is running your code like and just not running the animation in Internet Explorer, is that acceptable? Or, like should you try to optimize it to make it work in Internet Explorer? Or, just like not have it at all?

    SARAH: I would definitely look at your analytics for that. I mean like sometimes you're not, sometimes you shouldn't be optimizing for IE 8 if none of your users are on IE 8. Like, don't spend a million years doing that if you find out that like a ton of them are using IE 11 and Edge, then like, do that work. You know, so, I mean, or like have a fallback. Fallbacks are fine. I think progressive enhancement is super awesome. I actually think we're like ragging on IE because we're used to IE being bad. And it actually has made leaps and bounds lately. Umm, Safari, (mumbles) What's that?

    RACHEL: It's fully compatible with CSS animations and transitions, and even like move the web animations API into the (mumbles). You know, next on the list (audio blurps). It's Safari on iOS that we really need to be worrying about. (laughs)

    SARAH: (laughs) Yes, and it's definitely mobile Safari that's like the worst.

    RACHEL: Oh, gosh! It's almost like, "Are you doing this willingly Safari?" (mumbles)

    SARAH: Yeah, I have like friends that are like "They're pushing people to need it." (chuckles)

    RACHEL: It does seem willfully neglectful sometimes. But then, you see spring, and you're like, "See, they still care."

    KENT: Cool, alright. I think we're coming down on our time, so I'm just gonna move us over to questions on Twitter. So, we do have one question from Jonas Sender, uhh, Sendsett. Uhh, I hope I pronounced that right. But the question is directed to Rachel: "You mentioned controlling states in Jekyll. How would you keep states between pages like position on objects, so you could use techniques like flip animations?" And if anybody else has thoughts on this as well, feel free.

    RACHEL: I do some, I do use a similar technique on my site rachelnabors.com. I use local storage to store states that aren't persistent across the site. Like, remembering whether or not you had the sidebar closed when you leave the site and then you come back. And this would be great, by the way, for remembering people's motion preferences if they want to add some controls for making things faster or slower and have a little global control that remembers in there. So, personally, I just pull back and use of local storage. Does anybody else here ever encounter that issue and have a solution?

    SARAH: I mean, I think the use of local storage is super awesome, especially we were talking a little bit, Rachel and I, about accessibility, like if people have vestibular disorders, and you have a really big animation that's on a site and you want to toggle for people who just can't watch something like that. That would be a really nice thing so that they don't have to continually keep toggling off something that is potentially jarring to them on first arrival. So, yeah, that's like a really good use. I guess that's off of the topic of the first conversation but worth mentioning.

    KENT: Okay, we did get another question in. This is from Frank Albenesius, yep. And his question is: "Are there any books or blog posts you could recommend that talk more about human perceived animation?" Sorry, "How humans perceive animation?"

    SARAH: I wrote an article for CSS Tricks called the importance of context shifting in UX patterns. That one's a lot about human perception and animation. I know Rachel's probably gonna say some of hers. I won't say hers. But I think Val Head also does a lot of this kind of work. And she has a motion and meaning podcast where she delves into that. I think she's also coming out with a book soon that's just about UI/UX animation in perceived time. I'm coming out with a book about SVG animations, but I have a chapter that covers this. Not in as much depth as Val does in her full book. But yeah, maybe Rachel wants to talk about some of the things that she does.

    RACHEL: I have a thing I can't talk about yet, but there's also, I have written about this topic for A List Apart. And then, specifically, I think you'll find some good resources there both from myself and people like Val Head. I do advise it. I think I did a course for UIE too about animation and UX if anybody has a UIE subscription and wants to go dig it up.

    KENT: Cool! The second part of this question just came in from Frank. He says, "I would love to read more about the why animation matters discussion you were having at the beginning." So, anything in particular that anything else in particular that is specific to why it matters?

    SARAH: Umm, I gave a talk recently. I mean, it's not a written thing, but I gave a talk recently at Smashing Conf that dealt with this a lot. I'm also giving a talk coming up at Generate Conf that are like all about these UI/UX animations and why they're important. So, yeah, and some of the resources we talked about before.

    KENT: Great! Okay, that's it for our Twitter questions. So, I'm gonna wrap us up. Rachel, it looks like you had something to say.

    RACHEL: No.

    KENT: No? (laughs)

    RACHEL: No, I do. (chuckles) Like I said, it's too early for Portlanders. So, yes, I've just launched my new CSS animations and transitions course at courses.rachelnabors.com. So, if you would like to fully round out and master CSS animations and transitions, you can get everything that's inside my brain in either one weekend or a lunch break or two. I edited it a lot because I believe less time and conciseness is more valuable than seven hours' worth of training that you're not able to sit through.

    KENT: That's so awesome! I feel the same way. That's why I do Egghead. Yeah, that's great! Cool, yeah! That's exciting! Thanks for announcing that. So, yeah, let's go ahead and move into our Tips and Picks. We'll start out with our panel. Then, I'll go ahead and go, and then we'll have our guests go. So, Dan, why don't you go first?

    DAN: Yeah, so I have two picks for today. The first one is an article called Immutability is Not Enough, which has a really interesting overview of how immutability doesn't save you from bugs and some interesting solutions to this. So, check it out. And another pick for today is a talk from ReactEurope that I missed at the conference, so I just watched it a couple of days ago while I was procrastinating. And it is an amazing talk by Jeff Morrison about Flow, the gradual aesthetic type assistant for JavaScript that he works on at Facebook. It's really amazing. It's kind of deep, but I don't know. I enjoyed it a lot, so. I recommend it. That's it.

    KENT: Cool! Tyler, it looks like I'm watching the dock, and it looks like you're in the middle of (mumbles).

    TYLER: I just got it in. So, this one's really good. It's called What I Learned from Analyzing 1.65 Million Versions of Node, JS Modules, and npm. Basically, this guy goes through at like a granular level and really like dissects what npm is doing. It's really long, and it's really like heavy. So, like get some coffee or whatever and sit down on like a Saturday morning and go through it. But it's really good, really interesting, and I really recommend it.

    KENT: Cool! Alright, for me, I have one tip. Write a letter to someone, like, physical handwritten letter. So, my wife's birthday was yesterday. Happy birthday to her. And the thing she wanted more than anything else was a letter. And so, I wrote her a letter, and it was great. And she loved it. So, except I was kind of creative, and I wrote her 42 pages of a letter. And it was like six words per page. It was enormous, and I like mixed up the pages and stuff. So, you don't have to make it that fun. I even like put it in an old Amazon box that I had, and I put it on the doorstep. So, it was like, this is such a big letter. She loved it. But yeah, like, it really shows people that you actually like care. You didn't just copy paste something, or whatever. And so, yeah. Write a physical letter to somebody.

    For my picks, my first pick is React Rally. It's coming up in August. There are still tickets. It's awesome. We're gonna see Sarah there at least. Tyler, I think you're gonna be there, right? Yep, Tyler will be there. I'll be there. It's gonna be great. And then, actually we're gonna be doing a JavaScript Air show there on site, so fun stuff. And then, my next pick is a personal plug. It's my Front End Masters workshops coming up next month. Or, not next month, August. So, almost next month. So, yeah, it's like the second week of August. I'm giving two workshops right before MidwestJS, which you should also go to 'cause I'm getting a workshop there. But, yeah, it's a webpack deep dive and writing an open source library. So, those are gonna be awesome. I'm like totally killing myself that week 'cause I'm doing a workshop Monday, Tuesday, and Wednesday, and then, a talk on Thursday, and another talk on Friday. So, crazy week for me. Yeah, and then, finally, my webpack playlist on Egghead.io. It includes my webpack course that was just released. But yeah, if you want to get into webpack, lots of good resources there. Cool! Now, we'll have Matias, you want to go next?

    SARAH: Actually, do you mind if I just cut in real quick because I have to leave.

    KENT: Oh, sure! (mumbles)

    SARAH: I'm sorry to cut you off Matias.

    MATIAS: Go ahead.

    SARAH: Yeah, there's a CSS Tricks article out today by Ana Tudor that I thought was really awesome. She kind of breaks down how you would make a Twitter heart animation, and I thought it was just really, really cool. Yeah, I'll be at React Rally and also Smashing Conf in Freiburg and a few other conferences coming up. And yes, there's a Front End Masters course for SVG animation that you guys all should check out. But I have to leave, and thank you for having me on. I appreciate it.

    KENT: Thank you!

    SARAH: Thanks. Bye!

    KENT: Alright, Matias.

    MATIAS: Okay, so I obviously I'm kind of bias when it comes to Angular, so the tip I have is for the final stages of getting Angular 2 to final. We're all working very hard, and hands down on that. So, keep up with the IRC releases 'cause there's a lot of cool stuff coming. I posted a link into the doc, which has the web animations polyfill that I'm working on, which will hopefully soon be something would be a good choice for people to use for something a little bit more performant and optimized compared to the W3C plugin. And in terms of conferences, I will be at Angular Connect in October, and I believe ng-Europe as well. And I'll be speaking in Toronto in October for Web Unleashed.

    KENT: Great! Alright, Rachel!

    RACHEL: Alright, so my tip, we didn't get to cover this at all. But fun fact, when you're animating things, aim for a steady frames per second. Go for, you know, sometimes hitting 60 frames per second and then dropping down back to 30 frames per second from time to time. You're looking for a smooth line, not peaks and valleys. The human eye, when it notices the frames per second change, it immediately bounces it out of whatever illusion of life you've given them. So, it's better even to have an animation running at 30 frames per second that's steady, than at 60 frames per second. Keep that in mind when you're working on your animations. That you want a smooth line and not peaks and valleys.

    But for those links, I'm gonna say you should really go check out the web animations API documents over at MDN because, as of Friday, they are going to be 100% complete. They are 90% complete as of today. I've been working on that for a while. It is a massive spec, but I have made it all cute and adorable and easy to understand with Alice in Wonderland examples.

    MATIAS: Does that mean that it won't be behind a flag anymore? For Firefox?

    RACHEL: Actually yeah, it's running right now.

    MATIAS: Oh, wow.

    RACHEL: But not all of it. It's the, the API has been adopted in different portions by different browsers. And actually, the Edge platform has a really good documentation of which portions of it are supported by which browsers. It's much more comprehensive than caniuse.com. And here we go now for those official conference plugs because we all are speaking at conferences. I will be at CSS Conf Argentina in August. So, if you're in Buenos Aires, say hello. I'll be down there having a great time talking about the web animations API. And then in October, I'll be at CSS Dev Conf San Antonio with an animation workshop on motion design with CSS. And then, in later on, just a few weeks, I'll be at All Things Open in Raleigh, North Carolina to be a keynote. And I hope I'll see you there. Raleigh used to be my old stomping grounds. It's always good time say hi to it.

    KENT: Cool, cool! I'm trying to decide whether to go to All Things Open. I just got like other things.

    RACHEL: Just come. I'll be there. We can meet.

    KENT: Yeah, that'd be great. Now, I'm feeling even more encouraged to go, so cool. Alright, thanks, everybody, for coming. This was awesome. Let me just give a couple closing announcements. A special thanks to our silver sponsors Trading Technologies: Build for What's Next. And ReactJS program from our very own Tyler McGinnis. Awesome! Actually, Tyler, you want to give a shout out? This is your first week.

    TYLER: Yeah, sure, so ReactJS program basically if you want to learn React, I hear it's a pretty decent way to do it. So, check it out.

    KENT: (laughs) We'll stick that in your picks as well. Alright, and then Century is also a new silver sponsor: Cross Platform Crash Reporting. Check them out. So, we value your suggestions and your feedback. So, if you go to jsair.io/suggest, then you'll be taken to a form to give us suggestions on episodes or like topics, and/or guests. If you go to jsair.io/feedback, then you'll be taken to another form to give us feedback on this show specifically or the show in general. And then, jsair.io/email to sign up for our weekly newsletter (audio blurps) special like the highlights from the show as well as the Tips and Picks and everything that you've heard. So, yeah, that's it. And remember next week, we're doing a show on Electron, that's gonna be just splendid. And follow us on Twitter, Facebook, and Google Plus to keep up with the latest. Thank, see ya!
  `,
}
