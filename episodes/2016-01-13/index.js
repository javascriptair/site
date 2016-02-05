/* eslint max-len:0 no-trailing-spaces:0 */

export default {
  title: `Firefox DevTools, React, and Redux`,
  guests: [
    {
      name: 'James Long',
      twitter: 'jlongster',
      links: [
        `[XUL](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL)`,
        `[react-proxy](https://github.com/gaearon/react-proxy)`,
      ],
      tips: [
        `Use [Firefox DevTools](https://developer.mozilla.org/en-US/docs/Tools) and [tell us](https://twitter.com/FirefoxDevTools) how we can do better!`,
      ],
      picks: [
        `[Om Next](https://github.com/omcljs/om/wiki/Quick-Start-%28om.next%29)`,
      ],
    },
    {
      name: 'Jordan Santell',
      twitter: 'jsantell',
      links: [
      ],
      tips: [
        `[Get involved with Firefox Developer Tools!](https://wiki.mozilla.org/DevTools/GetInvolved)`,
      ],
      picks: [
        `[Sourcemaps in Firefox](http://jlongster.com/On-the-Road-to-Better-Sourcemaps-in-the-Firefox-Developer-Tools)`,
      ],
    },
    {

      name: 'Lin Clark',
      twitter: 'linclark',
      imgSrc: '/resources/panelists/linclark.png',
      links: [
      ],
      tips: [
      ],
      picks: [
        `[The five keys to a successful Google team](https://rework.withgoogle.com/blog/five-keys-to-a-successful-google-team/)`,
        `[Consensus through Conversations](http://www.amazon.com/Consensus-Through-Conversations-High-Commitment-Decisions/dp/1576754197)`,
      ],
    },
  ],
  description: `
    React is in your browser. Not just in web pages, but in the browser itself! Join us as we talk with developers from Firefox's Developer Tools team about how they're using React and Redux to build developer tools, and how the two make the DX (developer experience) of building developer tools better.
  `,
  hangoutId: 'c06t5m6an80s3aracj7erm18lkc',
  youTubeId: 'wseL3Vl-Hh4',
  podbeanId: 'edvzg-5bc1f9',
  shortUrl: 'http://jsair.io/ff-react-redux',
  past: true,
  host: {
    tips: [
      `Watch your analytics. Encourage your customers to get off an unsupported, insecure browser >IE11`,
    ],
    picks: [
      `[Elements Components and Instances](https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca)`,
    ],
  },
  panelists: [
    {
      twitter: 'dan_abramov',
      links: [
        `[React Howto](https://github.com/petehunt/react-howto)`,
        `[React Components, Elements, and Instances](http://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html)`,
        `[Minimal API Surface Area](https://www.youtube.com/watch?v=4anAwXYqLG8)`,
      ],
      picks: [
        `[Lodash 4 is out!](https://github.com/lodash/lodash/releases/tag/4.0.0)`,
        `[Lazarus](https://www.youtube.com/watch?v=y-JqH1M4Ya8)`,
      ],
    },
    {
      twitter: 'getify',
      links: [
        `[SpiderMonkey improves Function.prototype.bind](https://bugzilla.mozilla.org/show_bug.cgi?id=1000780#c38)`,
        `[v8 improves Function.prototype.bind](http://benediktmeurer.de/2015/12/25/a-new-approach-to-function-prototype-bind/)`,
      ],
      tips: [
        `use “palm pads” to support your wrists while using laptop keyboards ([like these](http://www.amazon.com/GRIFITI-Notebook-Silicone-Reposition-Travelling/dp/B00897D3OQ/))`,
      ],
      picks: [
        `[Microsoft Chakra is OSS now!](https://github.com/Microsoft/ChakraCore)`,
        `[Github Social Client](https://devspace.io/) [blog post](https://blog.devspace.io/the-problems-with-github-s-news-feed-abf5e1a7aefd)`,
      ],
    },
    {twitter: 'mzabriskie'},
  ],
  transcript: `
    KENT: And we're live with JavaScript Air. Hello everyone, my name is Kent C. Dodds and I'm your host for JavaScript Air, the live broadcast podcast. And today we're going to be talking about Firefox DevTools, React and Redux. 

    And so before we get started, I just want to give a shout out to our sponsors. We have a premier sponsor, Egghead.io. And they have a huge library of bite-sized web development training videos. Check them out for content on Node, Angular, React, all kinds of JavaScript awesomeness. And there's actually just a shout out to Trevor, he has a recent course on React testing that is super solid and is teaching me stuff, so that's awesome. Then Frontend Masters is a recorded, expert-led workshop with courses on Advanced JavaScript, Asynchronous and Functional JavaScript as well as a lot of other awesome frontend topics, so recommend you go check them out. And then, TrackJS. TrackJS reports bugs in your JavaScript before your customers even notice them. And with their telemetry timeline, you'll have the context you need to actually fix the bugs. So check them out and start tracking JavaScript errors today at trackjs.com. And I'm getting really good at saying telemetry timeline. (laughs) Cool. 

    Just as a reminder for our viewers who are watching live, you can ask questions during the show with the hashtag, #jsAirQuestion. Yeah, as always, follow us on Twitter and Google+ to keep up with the latest. And also, we are a weekly podcast and so our next episode is actually going to be introducing the JavaScript Air panel. And so we have some awesome panelists that have really cool backgrounds and lots of great experience that we can learn from. And so check us out next week, same time, same place. Cool, so let's go ahead and introduce everybody that's part of this show. For our panel, we have Dan Abramov.

    DAN: Hey there.

    KENT: And Kyle Simpson.

    KYLE: Hello!

    KENT: And Lin Clark.

    LIN: Hello!

    KENT: Who's actually a guest today, so we'll be hearing from her a little bit more. And we also have Matt Zabriskie.

    MATT: Hello.

    KENT: And so we're also joined by some special guests. James Long.

    JAMES: Hello.

    KENT: And Jordan Santell.

    JORDAN: Hi.

    KENT: And as I said, Lin Clark is also a guest. So let's talk about this really quick. We're gonna be talking about Firefox DevTools and Lin, James, and Jordan are working on the Firefox DevTools. And it's built in React and Redux and so that's kind of our subject for today. We probably should've just made Dan a guest also. (laughs) But yeah, so let's get an introduction to our guests really quick. Why don't we start with Lin? Can you give us an introduction to yourself?

    LIN: Sure. I am actually the newest member that's on this podcast. I joined the Firefox's DevTools team a couple months ago. Maybe even just one month ago, it seems like longer. And so I've come on to, in part, help with, we're really more at the beginning of this process of moving to React than we are at the end of it. So I'll be helping out a lot with that. And so Jordan and James have been working more with the early experiments with React in Developer Tools.

    KENT: Great. James, what do you have to share with us?

    JAMES: About myself?

    KENT: Yeah. (laughs)

    JAMES: Sure. I've been with Mozilla for about four years, maybe five. It's crazy. But I've only joined the DevTools team about a year and a half ago, but it's been really cool. It's probably the team that I've most enjoyed at Mozilla for sure. It's just got a good mesh with what my interests are. So yeah, I've been using React. I got really interested in React in the first year that it came out for a lot of reasons. I really fell in love with it. So, when I joined the DevTools team, I was doing React a lot on the side and this has just kind of naturally come out. My team was just asking about React and so I've been helping figure out where it could fit in and what we can be doing with it. But I have a long background in functional programming. I used to use Scheme. I used to write a lot of Scheme, which is a subset of Lisp, and just have done a lot of various things. So I enjoy React 'cause it kind of embraces those functional programming paradigms.

    KENT: Cool, so you and Brendan Eich are buddies, right? With Scheme?

    JAMES: Yeah, yeah, in some ways. For sure. JavaScript--

    KENT: You'll have something to talk about at least. (laughs)

    JAMES: Yup.

    KENT: So Jordan, could you introduce yourself, please?

    JORDAN: Yeah. I'm Jordan. I've been with Mozilla for almost three years now on the developer tools team, managing the team that handles tools for the 1% of people that actually need them, like memory snapshot tools, profiling, JIT inspection, and things like that. And gaming tools in the pipeline. So, not the bread and butter tools, but like the scary tools. 

    KENT: I think that's actually a terrific description of those tools. (laughs)

    JORDAN: We wanna make them less scary, that's the ultimate goal.

    KENT: Yeah. Well, good luck. Those are really, really impressive tools and they're really handy when you need them. Cool, I think a good intro to get our conversation started is probably, can you describe a little bit about how Firefox DevTools and React are even related at all? I don't know if many people realize that DevTools are actually written in JavaScript, so can you talk about that a little bit?

    JAMES: Sure, I can talk some about the... so, we have a client-server architecture, which I think almost all DevTools have these days. So, the frontend is really, I mean, we'll go into this more in a little bit, but it's kind of a weird variant. But it's pretty much just a web page, you have your HTML and then you have your JavaScript in it. The frontend and the tools are very much just like JavaScript as you would write it normally in a web page. The backend is kind of special, but it still is a bunch of JavaScript. We have special-platform C++ APIs that are exposed to what's called chrome JavaScript, which is kind of funny because we call chrome this, you know, the whole browser, everything outside of the actual web page in Firefox is chrome, a little confusing. So this is like privileged JavaScript that can access these special C++ APIs to hook up a debugger instance and say, "Hey, I'm gonna connect a debugger to this web page and set different hooks so that I can step and I can break on this location." Most of the backend is still written in JavaScript. It's this layer on top of this very low level platform APIs.

    KENT: Sweet. What led to the decision to go into React developer tool, or, sorry, to use React for the developer tools?

    JAMES: It's kind of funny because I remember about a year and a half ago or maybe almost a year ago, we were at a work week with my team and I forget exactly what started it, but I had been using React on side projects and I had really grown to like it a lot. And I remember the idea was I was gonna go into a room with just a couple of my coworkers and talk about React, but it grew into this like, I actually ended up just giving a presentation to the whole team. 'Cause everyone was like, "Oh, we're gonna be talking about UI stuff." And everyone seemed interested, so I ended up just kind of explaining the fundamental ideas of React to the whole team for about 10 minutes. 

    So I think that showed a desire to have a better UI system, a better way to share UI code. The whole team was super interested in it and so, you know. Just over a year, we just talked about it more and more. And we have problems with our current system and so we just, I mean, React is really the only option in terms of the "frameworks" (its not really a framework), but between Ember and Angular and other things, React is really the only one that we can use 'cause we're a very special environment. We're not a normal web page. It's pretty much just our current system just isn't really meeting our needs. I don't know if Jordan has anything else to...

    JORDAN: I'll say it was a long process of lots of arguments. Yeah, James was championing at the start, saying, "Hey, check out this React thing. It's pretty cool." And showing us demos and they were all very impressive, but, at the same time, it's like, oh, we have these things that work enough for a start, you know, roll-your-own solutions, whatever we had. And was it a strong enough reason to rewrite things using React and is this gonna provide enough value to.... is it gonna be worth the time we're gonna dedicate to spinning this up? So there was a lot of uncertainty for a while. And eventually, people just started doing it. Like we started with small example (and we'll talk about this a little bit later) we started with some very simple examples saying like, "Hey look, we made this tool using React. Look how clean this code is," or, "Look at this whole class of bugs we just eliminated that we no longer have." We have a different class of bugs now, but those are a little bit more manageable.

    JAMES: So, some context. Most of the DevTools is actually written in this thing called XUL, which is, I mean, the name implies how weird it is. Like X-U-L, it's this precursor to web components basically. Like Firefox itself is written in XUL. But the whole Mozilla, like Mozilla has announced that we're just working as hard as we can to get off XUL 'cause it's just this old part of our Gecko codebase that has weird bugs and everything is, by default, the older flexbox style. Every single element, by default, is this old flexbox style. It's a completely different layout system. We're really moving hard to get off of that. We're gonna have to rewrite a lot of stuff anyway, so we're in a really good position to... so, first of all, we're not rewriting everything. That is completely not an option. But we want to set a vision, in two years from now, where do we want to be? And the idea was, we're gonna eventually slowly migrate off of XUL anyway. We wanna be just normal HTML that you can load up into a web page. So we're in a good position to just embrace something like React anyway. We might as well just not do something that's home-grown and have to manage all the documentation and do all that. We can just leverage an existing, huge ecosystem like React and just get a head start.

    JORDAN: Yeah and following up on the XUL stuff, XULs are pretty much like the hipster version of web components in like early 2000s--

    LIN: Yeah, in 2001 it was great.

    JORDAN: Yeah, yeah, it was amazing. And the only reason you would ever know it is if you worked on add-ons or Firefox itself. So with the latest hype and craze over React, which is very modulized components and web components, it seems like these are good replacements for getting rid of this technology that we would like to get rid of.

    KENT: You mentioned that in this process of switching to React, you've noticed that a whole class of bugs go away and problems go away. I'd like you to talk about that, but Jordan you also mentioned that you have a new class of bugs or problems that you have to deal with, so I'd be interested to hear more about some of those types of problems as well.

    JORDAN: So, a quick background. I guess let me describe the acceptance of React on our team, I guess. So, James was evangelizing this for a while and most people thought, I think, it was a good idea. Like, "Oh, this is good, but is this worth it?" etc. And so with our new memory tool that we just shipped in Firefox 44 in November, we figured that this is a simple enough tool visually, although work is done in a worker or you know, doing heap analysis. But the UI is pretty simple; it's just a tree and a list. So with that and as well as our JSON viewer and our about debugging page, those are also using React. These were all small use cases of like, all right, we actually implemented this and this works. And once those things started landing, I think it was more of a general acceptance on our team. Like, okay, let's develop a plan to actually do this. 

    At that point, I've heard a lot about React. I've read all of the blog posts, it seems like the new hotness, everyone's screaming about it. And I understood it entirely on paper, it all made sense. Yeah, it sounds great, you know? But I didn't actually use it until we actually shipped this tool. And then it all kind of made sense, it all clicked for me. Like, oh, James did make sense. And it was great that we can all rail behind those common patterns that James mentioned. And so the first thing I noticed, being completely new to React, so I was expecting a lot of scary things, it eliminated a lot of the race conditions that we've ran into a lot in our DevTools. Because it's client-server architecture, where our server is the page we're debugging, whether it could be the same process on a desktop version of Firefox or it could be a multi-processed version of Firefox, so on a different process, or it could be a different machine altogether with Firefox Android or Firefox iOS. So there's all these inherent race conditions that we ran into frequently because of faulty assertions. And a lot of this was due to, at one point, having three or four different promise implementations, which, we're now down to one. Two? Two or one.

    JAMES: Mostly one.

    JORDAN: Mostly one, okay. So we eliminated a lot of these conditions. We also started from the ground up and as in a new initiative to... James said these things are just web pages, essentially. Except we have to do a bunch, we have to access a bunch of special C++ things. Now the web is a little bit more sophisticated We don't need to use any special platform APIs or privileged code to get what we need to do. So as far as the de-XUL-ification process and rewriting everything to be more web-y, that also gave us a lot of advantages too as well as using React. I think Lin can probably explain the de-XUL-ification and just the overall making things more accessible to contributors and making our lives easier as well.

    LIN: Sure, yeah. James already touched on the fact that it's kind of an older style of doing things. One of the neat things about XUL is that, or, about React is that it takes this idea that you had in XUL with components and actually makes it something that web developers want to use. XML has a really bad name, but it was a cool concept that you could extend HTML and create your own markup and attach behaviors to that markup. So it's kind of cool that React has popularized that. And so, this doesn't really address any of the bugs that you see going away, it just makes it clearer for developers who are developing to be doing this. When they see XUL, it has this syntax that they don't know; when they see React, it's a familiar syntax. And that makes it easier for contributors to jump in.

    KENT: I think, actually, that's one of the things that I really like about React, personally, is just how simple it is, I think. And maybe, I don't know anything about XUL, so I can't make that comparison, but I can compare it to my previous experiences and for, at least the way that I think about developing web applications, React just makes thinking about my application and its state, and just the way that I develop UIs a lot more straightforward for me.

    JAMES: I think, yeah, that's a huge win for React. And not only React, I think Redux is such a great, I think it's winning because it espouses the exact same philosophies of React. It just matches so well with React, where it's like you have these three functions, that's the API. It's asynchronous, just like React. And all you have to do is like, oh, I have this async thing here. All of my async work is in this one place, everything else is synchronous. When I add an item to the array of this state, it's like, oh, the view rendered it to the LI and it changed the title up here. And it just all feels very much like you're just calling some functions and it all just magically works. So that's gonna be huge, 'cause right now it's really hard to work in our DevTools because when you change one thing, a lot of other things tend to break. So I think this is gonna be a drastic difference of just... the bugs that you won't see are, like there's no bugs. (laughs) Or there's fewer bugs.

    DAN: Sorry. Sorry, can I interrupt? (laughs) This is something I thought about a lot in terms of how does Redux really help you to have less bugs or maybe less serious bugs in your app. And one thing I realized, which is a really great thing, in my opinion, is that, for example, if you have have some kind of state change and you see that the data is not correct, right? So, viewer is rendering something weird. You always have a specific place to look at. For example, if you know that some kind of state dot something dot something is weird, you know that there is a specific place in your code, this is the reducer managing this part of the state, that is likely to have error. And you can log every action and the state before and after, you can see which action caused it. And so this is like super easy way to find the exact spot where you have a mistake. So, Redux is mistakes-friendly. And this is the same benefit that React gives you because if you see that something is rendered weird, but the props are correct, you know that this happened in this component and you just check the code. And this is what I like about it.

    JORDAN: Yeah, I think Redux gave us a lot of, we were able to replay a lot of, any issues that we had, we were able to just dump out the state and the past history of state and get a relatively deterministic results. And like you said, we could dig down into a component, everything's rather isolated, well-structured. It reminded me of when I first was playing around with Rails years ago. Everything had a really defined way of put, you know, you put your models in this directory and your views here and I think the terminology, like actions, reducers, those things were really helpful just 'cause guidelines and then other people that are familiar with that can also jump in and make more sense of it. And so like (mumbles), the shared knowledge of React and Redux developers.

    JAMES: We haven't talked much about the disadvantages. (laughs)

    KENT: Yeah, let's get some of those.

    JORDAN: Yes.

    JAMES: Do you want me start? I can, so there's like yeah, nothing is a silver bullet. One thing that comes to mind, I know that Jordan and Nick, working on memory tool, hit some performance things, so he can talk more about that in a second. But I think one of the main things that I've been trying to think about is the, so if you have this single app, say Atom, and your views are depending it, if you change the structure of the app state, then your views are broken, right? So you really don't want your views to just dig into the app state and say like, "state.sources.breakpoints.length" or something like that. What I did in the debugger, was I actually wrote some functions as queries. I call 'em queries, but they're literally just functions that take a state and then they return something like get breakpoints. And so one of the problems is now that you have this app state and are handing it out to your views, if you refactor your app state (which honestly happens more than you think) it's that kind of thing where you change one thing and you've got to change a bunch of other stuff. So that's kind of a smell of something else needs, some other abstraction needs to be there. And I know there's libraries like Reselect, which is really popular, and I actually haven't used that yet, but I think that kind of solves similar problems too. So that's definitely one thing. And... yeah, I guess that was the first thing that came to mind.

    DAN: Yeah, this is what we suggest with just using Reselect and we actually suggest more than that. We suggest that you, we call these functions selectors in documentation. We don't put heavy emphasis on them like we probably should because it's a common problem in big apps. So what you usually want to do, in my opinion, is to put them in the same files as your reducers because you want to collocate the things that know about the state shape. So, in this case, if you've got a reducer managing some part of the state of the app, it's useful to define the selectors right alongside. For example, there's named exports in the same file so that they contain this internal knowledge of the state structure. And just like you have reducers calling other reducers, you can compose selectors, either by calling other selectors or by using Reselect, which is more performant, but also (mumbles) than your compose selectors. Yeah, so that's something we definitely recommend if you care about performance and not breaking things.

    KENT: Go ahead, Jordan.

    JORDAN: No, no, no, I'll wait.

    KENT: I just wanted to ask about more of the, it was mentioned there are a class of problems that, or a new class of problems that you had to deal with. Can you touch on some more of those different classes of problems?

    JORDAN: Yes, sorry, I was rambling earlier about contacts and I didn't get there. So this is my coming at it as a, you know, I think I'm a pretty good engineer. So, looking at it completely fresh, running into some things, it's always a little frustrating learning a new framework or language. And so, like I said, it clearly reduced a lot of the race conditions, like it just wasn't there. We were just running into those and having this deterministic approach means that was fine. So the issues that we were frequently running into were things, when a React component view renders perfectly, like we had a list view, all right, we remove this item from the array, well, the list view is automatically updated and that thing's gone. Or we edit some property in this state and then it's magical, it's beautiful, it's amazing. 

    So for the first two days I was screaming with delight. And then I was screaming with terror after that because we had this tree widget (so this is for the memory tool in Firefox developer tools) so it's a tree widget and it could display essentially like a call tree of where all your objects were allocated from. So, just a normal tree view and you can change your snapshots, which snapshot view you're looking at. Snapshot being the states of your memory heap at some point in time. So you can toggle between different snapshots. So doing that, we didn't tag these elements, like the rows in a tree with identifications. So, going back and forth, we would have trees opening and closing and expanding unpredictably. And after digging around with more of React's component APIs and, that was just the hardest to debug. We just didn't have the tooling and we were looking at the tooling, but this was like a two-week learning experience. And traditional tooling is a little difficult to use in our environment but we're looking to make it better. So we just didn't have good tools to figure out, "Why is this React view doing this?" It's like when it works, everything's beautiful, everything's great. But when I pass in the state and I'm not getting what I'm expecting, then it's just a different kind of problem that we need to invest more in our React tooling.

    JAMES: There were definitely screaming, literally, in the IRC channel. 

    JORDAN: (laughs)

    JAMES: It's funny. (laughs) But still I enter, but--

    KENT: (laughs) Nice.

    DAN: I've got a question. I'm curious, do you have something like React DevTools inside Firefox DevTools? Is it possible to even use something like that?

    JAMES: It is. So we have something called a browser toolbox, which debugs the chrome, which is so confusing. Debug is like the privileged code, so there's no reason we couldn't throw in that extension right there and it could load that up. I think that should work. Because our environment is so special and we're sort of a little bit more static and things, sometimes we have some problems with libraries that assume certain things are in a certain way and ours is not that way. Somebody may have tried that and I think it did kind of work. Honestly, I think for right now, I think once you get past the learning curve of React, I think that kind of stuff is mitigated some. I think the hardest part is Redux, like what is going on in Redux? In fact, just soon as last week, I integrated the Redux DevTools and that was super easy to integrate. And that's super helpful. Like, this has everything going on and it's just like, toggle it on and off. Personally, I find that way more useful than the React DevTools.

    JORDAN: I thought you did integrates those, James.

    JAMES: Well, I think he was talking about the React extension. Like the actual React DevTools extension that, it's this extension that shows the whole component tree just like our inspector does. And you can go in and see the state of the component and stuff like that. That's totally something we should look into for sure.

    JORDAN: Yeah, traditional tooling is a little bit difficult for us. So this is probably a surprise, we do not use JSX in our tooling for build step reasons. I guess we don't need a built step in that case, but we would really like one. So we're working on things like that. (laughs) It's a little weird to get used to.

    KENT: I'm actually curious if you can touch on not using JSX. Not that I'm questioning your decision, I'm more interested in what your experience is like. I've never really tried it beyond a three-line component.

    JORDAN: It wasn't really a decision. It was just like, well, we don't have... do we have Node in the build system? Does anyone know?

    JAMES: I heard we do, but I've never used it.

    JORDAN: (laughs) Yeah, so because of uncertainties like that, we have a completely different build step that makes it a little different to use normal tooling. So having JSX as an option just really wasn't an option with our deadline. And after a while of using it, it was pretty much fine. The main frustration with that was there was zero documentation that does use JSX out there, for anything, I think. I remember not finding any kind of resource of not using JSX, which was a little. It was very difficult as a newbie.

    JAMES: Yeah, I can see it being hard for somebody who's new. For me, I can map it so well in my brain but I guess I'm kind of used to it, but, so this is something I'm really passionate about and I could probably talk a whole podcast about tooling. Obviously we've seen a lot of discussions about tooling fatigue, but I honestly, a year ago, predicted that JSX would fade away. And I'm really surprised it hasn't because if you look at all of the other frameworks that are doing the virtual DOM-style stuff, nobody does JSX. It's only React. Unless, I mean, I could be wrong in this, but like Andre Staltz' Cycle.js, Elm, of course they have their own syntax that might map better, all of them just use what is the React dot DOM stuff. 

    So, I don't really care about JSX to be honest. It's totally syntactic sugar. I would adopt React without JSX in a heartbeat. And it's like, oh, you know, the sandwich might not taste as good, but it's like, I'm still eating a sandwich. I'm not starving to death. I don't know, I just don't care about it in some ways. And I think there are more people on my team that probably do want it and so we probably will eventually do it. But all of this stuff about tooling fatigue and stuff, we aren't using any of that tooling that people are getting tired of and we are getting all of the benefits of React. In fact, the only tool that I'm going to use is Dan's React Proxy to do hot module reloading for React components. But I'm gonna use that directly and we have our own custom loader and I just hooked that in and it works. You just don't need the tools. You don't need them in React. And that's what I love about React. You can't do that within... I don't think you can do it in Angular, definitely not in Ember. You have to pretty much have the tools. Yeah, I don't know. It's a little frustration to me that people blame React for tooling fatigue when they're the ones that are feeling like they need to use the tools, but you don't have to.

    DAN: Yeah, I wanted to add that if somebody's React beginner watching this show, what I suggest you to check out is a GitHub project, which is actually just a README called React Howto by Pete Hunt. He's from the original React team and he currently works at a startup, so he has perspective both inside and outside Facebook. And it's basically just a list of things you should learn and the order in which you should learn them. His main thesis is like, "Don't try to learn five things at once; you're not going to need them. Just start with the React, then learn npm, and so on." It's a great README, check it out.

    KENT: Now, let's get that in the show notes. Dan, if you could, that is a--

    DAN: Yeah. I added it, yup.

    KENT: Thank you.

    DAN: I also wanted to add another thing, which is, if you're confused about whether to use JSX or not to use JSX, something I strongly suggest is to get a better understanding of what JSX actually compiles to and what elements are because this is something that is... I'd say elements in React, which is the things that you get when you type JSX, are not similar to any other view frameworks except like virtual DOM. So, I actually wrote a post about it. You can check it out on React blog. It's called Elements, Components, and Instances. And I'm trying not to use JSX there, I'm just explaining what the relationship between these concepts are. And it's really important to understand them because once you understand them, you will feel free to use JSX, not to use JSX because you'll just understand what actually happens, whether you use it or not. Yeah, I'm going to put this in notes too.

    KYLE: I have a question. Maybe taking a little bit of a step back. I'm curious. Obviously, we've got several pretty big fans of React here speaking. I happen to not be really in the big React bandwagon. I'm actually currently learning it, but I'm not on the bandwagon yet, so I'm kind of curious. First of all, to those on the developer tools team, do you think that you've signaled anything about the stability of React by choosing to put it into the browser? I think there's maybe a little bit of a difference perhaps between choosing a technology for building a browser versus choosing a technology for building a site that could perhaps more easily change. Is there any chance that React is painting you into a corner because my history on the web, (I've been around quite a long time and I've seen the ebbs and flows) and every two or three years, there is a big thing that almost everybody seems to be convinced is the new solution and we should do it this way from now on forever and then it's not. So looking forward, I can perhaps assume that maybe there isn't a React forever; maybe there is some successor to that. So how painted in a corner are we? And are we signaling to developers, it's okay to do that by choosing to build a browser with it?

    LIN: I think that's a really good question 'cause we've been using XUL now for 15 years, I think, or something close to that. And so, does this mean that we're gonna be using React for 15 years, you know? Do we think that it has that much longevity to it? I think one of the things that even the React team says, you know, that there's probably gonna be something that does replace it. But I think that the shift in the paradigm, the shift in the way of doing things that it has brought about, is probably here longer term even than React itself. So, even if we do then have to switch to some, you know, whatever its successor is, we'll have at least switched the paradigm the way that we're developing things. So I think that'll put us a step ahead.

    KYLE: Can you be more specific with that, Lin? That's exactly the kind of thing that I was interested in hearing. Can you be more specific?

    LIN: So yeah, moving away from sharing so much state directly, where you have different components poking each other's state and moving more towards having pure functions where you're passing things in through an interface. That's something that we have a problem with in the XUL right now is that we do have a lot of shared state, and so, lot of coupling of different components. So I think that the things that React enforces are helping us, moving us in a good direction and also setting us up to take advantage of whatever comes next.

    JAMES: And I think, so for... I think the team, historically, has been somewhat resistant to adopting anything kind of third-party for very good reason. I mean, for this reason. We are long overdue to adopt something. (laughs) There's gonna be an extreme where you always program to a low level, imperative API and then there's an extreme where you're always adapting abstractions. It's always a middle ground, it's always, if you know where we are and if you know where we wanna go, we think this is the right choice. And I also believe that software is an evolution. I mean, I think you're due a rewrite every, or, you know, a migration every five years. And I think it's basically what Lin was just saying. Every step that the web is taking is going to be built on the previous steps. So, it's actually better, in my opinion, to be evolving with these ideas that are coming along instead of being stuck in this sort of old school web development. I don't mean that as an offensive way at all, but sort of like assuming, which what we're doing right now is manual DOM creation. And there's sort of multiple parallel threads going along. There's Ember, which is awesome. I really respect Ember as well. But I think if you're not... the counterargument for not adapting things is that it's gonna be so much harder to adapt something 'cause you're that much farther behind the evolution of software. Maybe I'm drinking too much Kool-Aid, I don't know.

    KENT: I think--

    KYLE: Yeah, I think you might be. Just a tad. (laughs)

    KENT: (laughs) But I think some of what you're saying at least makes sense to me that, that if you think about it kind of at an extreme, I think it would be a lot easier to migrate from React to whatever the next cool thing. Or let's take it to technologies we're familiar with: it'd probably be easier to migrate from Backbone to React than it would from like GWT to React. Or something like that--

    JAMES: Exactly.

    KENT: The frontend technology is moving so quickly. It's easier, I think, to stay at least, not ahead of the curve or anything necessarily or bleeding edge, but stay near the edge so that you avoid this huge leap from one ancient technology, in a way of programming to another.

    JORDAN: Ultimately, we have to pick something, whether it's a framework library or something we make on our own. I was kind of, not against, but wanting to be convinced heavily about this whole React thing. And ultimately, we have to code something and it might as well be something that, you know, someone else is maintaining for who knows how long that is, but at least someone else is maintaining it for now. There's better documentation for it than we have for our own, you know, roll-your-own web app that we wrote. And our tools have been around for a while and we're a pretty small team. Very few people that were on the original team are still around. And so we have these tools that maybe some people don't know that well and they're not using the same framework that we're using now in our newer tools. Not only does this let us outsource the responsibilities of developing this framework and easy-to-point-to documentation for contributors and for ourselves, but this also lets us rally behind just the same thing and make our tools consistent. When React, you know, in 2025, when React is gone and we're using, I can't think of a funny name for a framework right now, but we're using that and then we're moving everything from React to that new 2025 hotness, rather than dealing with old legacy things that are no longer matching. So we have at least that consistency across our tools that we could move to wherever.

    KYLE: So I should give some, I'm sorry, Dan. You were about to say something, go ahead.

    DAN: Yeah so, I just wanted to say that in case of both React and Redux, there is this moment that, the reason much API surface, there's a great talk about this by Sebastian Markbage, I'm going to put this in the links too, called Minimal API Surface. Basically, what this means is that, for example, if you use functional components in React, which were added in the past version, you're not really coding against React API, you're just describing how your view looks like given some data as a function. And... you can take the same function and use it in CycleJS just by coding modding it to use virtual DOM instead of React create element. And so this is pretty portable and it's the same with Redux, I think. You're not really coding against Redux API, you're just writing functions that take a state and happen (mumbles) return the new state. And if you ever want to hop off the Redux train, you have these functions that are for your domain area and you can use them in the next library tool.

    KYLE: So what I was gonna say, I should, I guess, have given some full disclosure. I am one of those original Firefox DevTools team's members that pre-dates all of you here. So I was working on Firefox four, five, six, and seven. So that might date me--

    LIN: I had no idea!

    KYLE: I'm sure you won't even find anything for me that's left over from that long ago. But so I did actually work on that team and I am familiar with the mindset that some of you were alluding to about trying to stay a little bit hands off from the current hot trends, trying to, I would say, adopt the mindset of something without necessarily adopting the thing itself. So I think there are some very interesting ideas that React brings. And first of all, they're not new; they are ideas that have actually been played around with for a while. It just happens to be a particular formulation of those. So there's some interesting ideas there, but I wonder whether or not the choice to choose the specific React trademarked sort of implementation as opposed to the ideas is the part that can, not only paint ourselves into a corner, but affect the trajectory of the web in and of itself, especially in a choice in a browser. 

    So, for example, just today there were two articles that came out and they were both talking about Firefox and Chrome, respectively, implementing some update to their JavaScript engine for function dot prototype dot bind. And both of them referenced the idea that React specifically uses that quite a bit and there was pressure on the browsers to implement some performance optimizations for that thing because of React. Well, that cycle gets even more hyperbolic whenever those technologies become part of the browser themselves. And it can, I think, skew us a little bit. So I'm really only just asking to think about the choice of a particular implementation as opposed to the idea. I, (laughs) having worked on the developer tools team and knowing how difficult XUL was and knowing how difficult a lot of those things were, I'm a big fan of making it better. Anyway, I just wanted to disclose some of that so people understood where my questions were coming from.

    JORDAN: That's a great point. These popular frameworks will influence what is gonna be optimized in V8 and SpiderMonkey and things like that. And... I forgot where I'm going with this, so I'll just stop.

    KENT: Cool, I think we are coming down on our time here, so if there is anything else that our guests or our panelists wanted to make sure that we discussed before we go into #jsAirQuestion hashtag on Twitter and our tips and picks, then now is the time.

    JAMES: I think I'll say something real fast and I think, I don't know, I was thinking about it because of what Kyle was just saying, but I think React's ecosystem is just so huge. That's just gonna be a huge bin to us. An example of where that comes into play is hot module reloading. I mean, this is gonna be a significant step for us because right now we actually have to... we literally can't just refresh a web page. We are this weird XUL thing, so we literally make a change, close Firefox, restart it, open the DevTools, and that's how we develop right now. But now that we're, (laughs) yeah. So we're actually, in the past month we have work going on to where we can dynamically reload it automatically. But that still loses all that state where you were, right? 

    So Using React, just in a single night I was able to drop in Dan's React Proxy, which is the low level API to proxy React components, and I injected it with our custom loader to save a React component and you immediately see the changes. This is gonna be a significant upgrade into our development experience. So leveraging ecosystems is a huge part of, I think, being a... just, I don't know, it should be a really convincing point to why it's good to use something existing. So the hot module reloading is just something, I just got that working so that's why I wanna talk about it. But we're gonna be having hot module reloading very soon. And hopefully, we want contributors to be able to be able to download Firefox and then just open up some source files and save it and they can instantly start developing onto the DevTools and that would be really cool.

    KENT: Neat, yeah, that's awesome. I'm so happy for you. (laughs) Have that big of an upgrade on your development experience. (laughs)

    LIN: Thank you. (laughs)

    KENT: Cool. Well, let's go ahead and we'll get to our Twitter questions. So, we actually have only one, so if any of the viewers have any other questions about Firefox DevTools or React or Redux, now is your time to ask them with the hashtag, #jsAirQuestion. Our one question comes from Jeff Whelpley and he asks, "It seems like Elm and React have conceptual similarities. What does React do better than Elm?" And I don't know whether anybody here really has first class experience with Elm, but if you do...

    DAN: I don't really have first class experience, but from what I observed people doing and so on, I'm not saying React does anything better than Elm. These are completely different paradigms. What I would say is that React is probably more friendly to a typical JavaScript developer who's not familiar with writing completely side-effect-free code, this kind of stuff. React gives you escape hatches like setState, life cycle methods. So it gives you ways to do things imperatively when you need to do that. And Elm is more pure and more radical. It's a great way to get into functional programming if you're interested in it, but it can be a bit hard for average JavaScript developer to get into.

    JAMES: And it is harder to, I mean, this is an example I bring up and I think Richard Feldman was like, "Yeah, we have a solution for this." Of course. So the implications of not having setState means that in Elm, when you change something, literally the entire component tree is always re-rendered. And that sometimes can have performance problems when you're doing stuff like animations for a very specific element, whereas right now in Redux, it's kind of discouraged, but you're very welcome to connect a very deep node in a component tree that's always re-rendering to have 60 fps. So it's just easier to do things like that, I think, in React than Elm.

    JORDAN: And with regard to Elm versus React, I would agree with Dan and James. But also, way more people know React than Elm and that matters a lot. We're Mozilla, we are all about open source contributions. And we see people struggle when doing their first patch. We take for granted the things that we know. Like, "Oh, you're just destructuring the return value from this error function. What don't you get?" And I think we take for granted a lot of that knowledge that we know and dropping something in that's very different to what they're used to, something like the functional reactive style of Elm. And maybe if they played around with React, at least they have docs they can look at. I think that will hopefully improve our contributions, reduce time for that, and also make our own lives easier.

    DAN: I also wanted to say that in React's component module, you have stateful components, so any component can be stateful and you, as a consumer, may not be aware of that, which is great for ecosystem because it's really easy to write something modular with stateful things that you, as a user, don't care about, but there are downsides to you. But in Elm, you have to do more manual wiring. So, you compose views in React.; in Elm, you have to compose both views and update functions. And this can be a little bit more manual wiring you have to do. But there are wins to be had in Elm's model as well, so it's a tradeoff.

    KENT: That's half of our job, maybe more, is evaluating tradeoffs. (laughs) Cool, so we did get another question from Ville M. Vine-oh. No, shoot. Vainio. Sorry. And his question is, "Do you see performance implications on using React versus using XUL?" So you have seen improvements in performance?

    JAMES: Yeah, actually. Jordan can talk a little bit about the downside they kind of hit 'cause it does feel like, I've heard this before, it's kind of similar to a JIT in some way, I don't think it's as bad, but there's like a performance cliff where if you don't set your keys correctly, sometimes if you're dealing with large amounts of data, React suddenly starts getting slow. Luckily, it's not really usually too hard to fix. You just have to make sure to set the keys right to sort of nudge React in the right way, so that it's comparing DOMs more efficiently. But there are, yeah, I've actually already seen in the debugger, performance improvements because before we were like, actually, whenever it loaded all the sources in the source pane, it would actually set the data into the DOM twice and we didn't know that it was doing it before. But now, it's very deterministic, it's only loading it once. So there's performance benefits, but sometimes it can also be harder if you're doing a lot of DOM stuff.

    JORDAN: The experience I've had, so this is for the memory tool, which did not exist, so we have no previous version to compare it to. But it's essentially just a snapshot, a list of items and a tree view. And the tree view does a virtual viewport 'cause there's a lot of lines there and... So, we can use our own tools to profile our own tools, so it's, you know, we do a lot (mumbles). And so we noticed that when you're scrolling, you know, we want to only render the elements as they come into view and then get rid of them. Well, the calculations we were doing to determine all these things were, I don't know, two, three milliseconds, but then in our FlameGraph view of what was happening, it was this giant dump of React functions that were being called. And, again, this is from the perspective of a React, Redux newbie. I had no idea what was going, I didn't even know where to start with this giant cluster of functions called just because they were all internal functions and required a lot of digging around in documentation. And just a lot of research in what is going on because it wasn't evidently clear. And to be fair, this was with the development version of React. James, correct me if I'm wrong, I think you just landed the production-dev version toggle because of reasons, so with that--

    JAMES: (audio garbled), but it's coming. We're about to switch to production, but yeah--

    JORDAN: Wooh! Okay. Yes, but the development version gave us a lot of those model validations, the prop types, which were great. I kind of want those in production, like I want some errors somewhere if these things aren't happening. But I understand the development version of React adds a lot of extra performance overhead. So that's something I think we're gonna probably research more because assertions seem a lot easier with React and Redux than previously. And I think we should look more into the tradeoffs of that, but I think it's really important to have these assertions that we do have and provided by us by React and Redux.

    KENT: Great, cool. We actually did get another question, but we don't have time for it. So if anybody wants to check out the hashtag, #jsAirQuestion and respond to it, I'm sure that Yevgen would appreciate it. Yeah, let's go into our tips and picks. We'll start out with the panelists and me, and then we'll go to our guests. So Dan, could you go first please?

    DAN: Yeah. I've got two picks today. The first one is that Lodash 4 is out and it's been a long time and it finally drops IE8 compatibility. Yeah, check it out. It's a great release. And you finally don't have to remember the folder names, like if you import individual functions, you don't have to write import from Lodash slash lang slash something. Nobody remembers these. It's just Lodash slash function name. So that's great. And my second pick is, you probably know that David Bowie died. Before he died, he released a video about dying. So that's pretty crazy, but it's amazing song, amazing video. Really beautiful and touching. It's called Lazarus, so go check it out.

    KENT: Cool, thank you. Kyle?

    KYLE: All right, a few minutes ago I mentioned those two articles. What was interesting specifically about those two articles, not just that they were kind of coming from React, but what I found interesting most was that SpiderMonkey, Firefox's move was to bring function dot prototype dot bind from the C++ layer into the JavaScript layer and V8 is actually doing the opposite and moving it from the JavaScript layer into the C++ layer. So, it speaks to the interesting differences in their internal architecture, both of them optimizing in opposite directions. 

    One tip today, everybody that sees me in person, when they see my laptop, they see these strange two little black squares down where my wrists go. It's because I use these little palm pad wrist guard things to provide a better surface for my wrist to sit on. I don't use external monitors or keyboards or anything I'm exclusively on my laptop 100% and it's awesome to have. So I recommend you use, if you work on your laptop for any amount a time, use some kind of supporting comfort or soft pad. I'll have a link in there to ones that I purchased on Amazon. There's no kickbacks or anything, but I swear by them. And so anybody that sees me in person always ask about them and I always tell them about using palm pads. 

    Two picks. Just 30 minutes before our show went live, Microsoft released the Chakra engine, the core, into open source. So Microsoft Chakra is now fully open source, it's up on GitHub. You should totally go check that out. I think that's a huge, huge step. It's very nice timing that that comes a day after they sunsetted all those old Internet Explorers. And my second pick, I just read a blog today about a client that's being written. It's called DevSpace, it's a client for GitHub for all the social parts like the news feed and the interactions and things like that. So it's kind of like a TweetDeck, but for GitHub and so you should totally check that out. I've got a link to that. But DevSpace, I think they're in kind of private beta right now. I've already looked at it, it's amazing. And so, there you go.

    KENT: Cool, yeah, that's awesome. And excited about Chakra. We're gonna have people from Microsoft talking about Chakra in two weeks on the show. So, check that out. It's gonna be sweet! For me, I have one tip and it is related to the death of Internet Explorer, which, you know, it's kind of funny to say that. But my tip is, watch your analytics and encourage your customers to get off an unsupported and insecure browser, anything less than IE11. But don't just totally drop it, that'd be dumb. Yeah, watch your analytics. Do what makes sense for your company, but do what you need to do to encourage your customers to not use something that is not supported. And then my picks: I have one pick. It's actually Dan's blog post, Elements, Components, and Instances. It's a terrific blog post and it really helps you understand exactly, or more conceptually, what's going on when you're using JSX and returning your UI from these functions. Yeah, that's a great blog post. Lin, why don't we go with you next?

    LIN: Well, first I wanna second that pick of Dan's article, Elements, Components, and Instances. It's really, really well-written. I think it just will help you think more clearly about all of these things, not just specifically in React. So you should definitely read that. And I'm probably actually gonna do a Code Cartoon version that incorporates a lot from it. (laughs) 

    So my picks are actually related to what we were talking about earlier, James and Jordan talking about the group decision-making process, how you get a team to adopt something new and how you just make decisions as a group in general. One of the things that I saw this week was something that came out of Google, The Five Keys to a Successful Google Team. They actually did research into which of their teams showed the most group intelligence, made the best decisions. And they thought it was gonna be based on having a bunch of high-intelligence people put on a team and it turns out that you don't actually have a huge correlation between individual intelligence and group intelligence. And the factor that they did find had a high correlation was psychological safety; how safe people felt in asking questions, saying things that might be perceived as dumb. So, that's a really interesting read and it's supported in other research. So you can dive deep into that line of research. 

    And so one of the things that I found recently that I think helps with developing that feeling on a team, I found a good book called Consensus through Conversations. We've actually used it on the Firefox team a little bit, on the DevTools team. Basically, it helps you have group discussions where you can get true consensus, not that kind of fake, nobody wants to say anything kind of consensus, but it actually helps you elicit more true consensus. So those are my two picks for this week.

    KENT: Cool, thank you.

    KENT: Let's go with Jordan next.

    JORDAN: I wanna second Lin's communication recommendation. She led our most productive meeting ever by following those things, so I'm really excited to read them. (laughs) My picks are, James wrote a blog post this week, (sorry to steal your thunder, James, if you were gonna use this) On the Road to Better Sourcemaps in the Firefox Developer Tools. This blog post, I think it's a really good illustration of the rabbit holing we sometimes do on our team. It starts off with, "Oh, we want source maps. We want better sourcemap support in some tools and definitely need them in our console, so how do we do that?" And it just digs into, essentially, our tools are just web apps, but they're slow. We have to integrate with, oh, the debugger. Like, how do we know when to turn on the debugger? How do we make this performant? And then it goes into a little bit about the different JIT tiers of JavaScript code. And I think it's explained in a really accessible way and you don't need to be like a SpiderMonkey hacker to understand it. So I think that's really good. And it's interesting, you know, that's the kind of stuff we work on. 

    And my other pick was just getting involved with Firefox developer tools. If any of this sounded cool, scary, or awesome, we have good links of finding your first developer tools bug to, you know, get started hacking on it and someone on our team to mentor you through that.

    KENT: Awesome, yeah that's great. Let's get some of those links in the show notes for people. So yeah, James, I think you're last.

    JAMES: Sure. So for tips, I basically said the same thing. Use Firefox DevTools and let us know how we can do better. We're at a really good time right now. And I work on the debugger mostly and we're actually talking about a new-ish debugger UI. I'm not promising much, but if you have any insights about what would be cool in a debugger, please let me know. And if you wanna be an early user, I'd love to throw you some builds and try cool new things. It'd be fun. And for picks, so I've picked Om Next, which some of you may have heard about. But I'm building a side project in Om Next, which is basically a ClojureScript. It's David Nolen's library for, it's like an opinionated library built on top of React that is opinionated about components, not only components, but also about how it does the data fetching over the network. So it's sort of a combination of Relay and Falcor. But I like Om Next because, first of all, ClojureScript is cool and second of all, it's way simpler than Relay and Falcor, but I think it gets the benefits of both. And in fact, is better at both for doing certain things. It's more generic. You can actually have a simple Node server with a REST interface and it actually, you can make it work with that. So I've been really happy with just hacking on that as kind of the next step of doing data fetching, which is kind of, we're researching a little bit to see if there's anything else we can do.

    KYLE: James, are you saying that Firefox DevTools is moving to ClojureScript? Are you announcing that here today?

    (laughter)

    JAMES: Not gonna say anything officially.

    KENT: You heard it here first. (laughs) Cool. All right. I'm gonna wrap this up. I think that I'm going to change and say officially the show is 70 minutes, give or take, because we always seem to go over by 10 minutes. But it's always good content, I think. Let me know if you don't think that it is. (laughs) 

    So yeah, to wrap up, you can submit suggestions to suggest.javascriptair.com for episodes or guests. And then if you have feedback for us like, "The show shouldn't be 70 minutes, they should be 60," go to feedback.javascriptair.com and hopefully in the future I can keep it down to 60, but I can't stop talking about this stuff. So, yeah. (laughs) 

    Again, next week, we're gonna talking with just the panelists. We're going to learn about one another's background and some other cool resources that we've all developed, so I think it'll be a really good show. And yeah, same time, same place. 

    Remember to follow us on Twitter, Google+, and Facebook to keep up with the latest. And also, just again a shout out to our sponsors, Egghead, Frontend Masters, and TrackJS. They're awesome for making this show possible. That's it, thanks everybody for showing up. Oh, one other thing I wanted to make sure to ask is, could we get Twitter handles for our guests? James, why don't you go first?

    JAMES: Sure, I am @jlongster on Twitter.

    KENT: And Jordan?

    JORDAN: @jsantell, two Ls.

    KENT: Awesome. And Lin?

    LIN: Oh, I am @linclark.

    KENT: Great, that way people can reach out to you and bug you about Firefox DevTools. Hopefully, that's okay. 

    LIN: (laughs)

    JORDAN: Perfect.

    LIN: Totally fine.

    KENT: Cool. All right, well thanks everybody. We'll see you all next week! Goodbye.

    LIN: See ya.

    JORDAN: Thanks all, bye.
  `,
}


