export default {
  title: `JavaScript Frameworks: Angular`,
  guests: [
    {
      name: 'Brad Green',
      twitter: 'bradlygreen',
      links: [
        `[ngUpgrade](https://angular.io/docs/ts/latest/guide/upgrade.html)`,
      ],
      tips: [
        `[Webstorm](https://www.jetbrains.com/webstorm/) + Angular 2 is awesome`,
      ],
    },
    {
      name: 'Igor Minar',
      twitter: 'IgorMinar',
      links: [
        `[angular-cli](https://github.com/angular/angular-cli)`,
      ],
      picks: [
        `[Flat.io](https://flat.io/)`,
      ],
    },
    {
      name: 'Miško Hevery',
      twitter: 'mhevery',
      picks: [
        `[Polyfill.io](https://cdn.polyfill.io/v2/docs/)`,
      ],
    },
  ],
  description: `
    Angular is the most widely used JavaScript framework in the world and there&#x27;s a reason for that. Angular 1 changed the framework landscape and Angular 2 is shaping up to do that again. Join us with some of the core team members to talk about this amazing piece of JavaScript tech!
  `,
  hangoutId: 'cikahchraiqcname9ghsi5j1bh0',
  youTubeId: 'naDNy5VBQuA',
  podbeanId: 'xrg68-5e3062',
  shortUrl: 'http://jsair.io/angular',
  host: {
    links: [
    ],
    tips: [
      `Don’t confine your sharing of knowledge to one-on-one! Make your conversations public. 📻 Make the world a better place 🌎`,
    ],
    picks: [
      `[PayPal](https://www.paypal.com/us/webapps/mpp/jobs), for being so awesome to let me do this podcast 👍`,
      `[Soft Skills Engineering](https://twitter.com/SoftSkillsEng) episode 4: [Should I build my “personal brand?”](https://twitter.com/SoftSkillsEng/status/715565229971615745)`,
    ],
  },
  panelists: [
    {
      twitter: 'pamasaur',
      links: [
        `RxJS 5 (https://github.com/ReactiveX/rxjs)`,
      ],
      tips: [
        `Use f for fixup in git rebase rather than squash to merge smaller commits into a major one!`,
      ],
      picks: [
        `[Git tips](http://git.io/git-tips)`,
        `[How to Make Programming More Accessible Series](https://lunacodes.wordpress.com/category/how-to-make-programming-more-accessible/)`,
      ],
    },
  ],
  transcript: `
    KENT: Hello, world! Welcome to JavaScript Air. Hello, everyone. Today we're going to be talking about the JavaScript framework, Angular. And we have some subject matter experts with us today. I'll get to introducing them in a second, but before I get too far into things, I would like to give a shout-out to our sponsors who make this show possible.

    First, Egghead.io is the show's premier sponsor and they have a huge library of bite-sized web development training videos. Check them out for content on JavaScript, Angular, React, Node, and a bunch of other stuff.

    Frontend Masters is a recorded, expert-led workshop with courses on advance JavaScript, Asynchronous, and Functional JS, as well as lots of other great courses on Frontend topics like Angular. Check them out on frontendmasters.com.

    And then TrackJS reports bugs in your code before your customers notice them. And with their telemetry timeline, you'll have the context to actually fix them. Check them out and start tracking JavaScript errors today at trackjs.com.

    And Wallaby.js is an intelligent, super-fast test runner for JavaScript that continuously runs your tests. It reports code coverage and other results directly in your code editor, immediately as you change your code. Check them out at wallabyjs.com.

    And finally, Codecov. Codecov is code coverage done right. Reduce technical debt by visualizing test performance and faster code review. Codecov is highly integrated with GitHub and provides browser extensions. Learn more at codecov.io. It also is free for open source projects, which is super awesome.

    So, while we're going through the show today, if you have any questions, if you're watching live, then you can use the hashtag, #jsAirQuestion on Twitter. And I have that open and I'm looking at it and we will answer those questions, during the show or at the end of the show. We'll answer as many as we are able to. So, ask away.

    And as always, this is a weekly show and we have a show next week. Reactive Programming in JavaScript with Ben Lesh, Matthew Podwysocki, yep, something like that. (laughs) And Andre Staltz. So, it should be an awesome show. I'm looking forward to it. And as always follow us on Twitter and Google+ and Facebook to keep up with the latest. So, let's introduce who is on the show today. First, our panelist today is Pam Selle.

    PAM: Hi!

    KENT: And I am your host, Kent C. Dodds. And we have three amazing guests today. Brad Green.

    BRAD: Hello!

    KENT: Igor Minar.

    IGOR: Hi, there.

    KENT: And Misko Hevery.

    MISKO: Hello.

    KENT: And we're super excited to have each one of them here on the show with us today. Before we get into our subject about Angular, I think it would be a great thing to have each one of them introduce themselves. So, Brad, why don't you go first? Give us a little intro to yourself.

    BRAD: Sure, yeah. I'm Brad Green. I'm an Engineering Director at Google. And I work on the Angular project. And these guys tell me what to do.

    (laughter)

    KENT: Awesome. Igor.

    IGOR: So, hi, I'm Igor Minar. I'm a Software Engineer at Google and I'm one of the leads on Angular.

    MISKO: Hello, I'm Misko and I'm a tech lead on the core of Angular 2.

    KENT: Great. Thank you for your work. So, let's go ahead and I think a good starting point for us is just the general question, what is Angular?

    BRAD: It sounds like a simple question, but it's kind of changed from Angular 1 to Angular 2. In Angular 1, we were trying to really simplify developer's lives in building a web app, by giving them a framework to give some structure, reduce boilerplate, make testing easier, all of those nice things. And Angular 2, we've kind of increased the scope of what we're trying to do. And we now are grandiosely calling it a platform because we did a lot of work with the TypeScript, focus on the language. Misko and Igor have been working on the core JavaScript facilities with the TC39, doing things like extending with decorators and zones and some other things coming out of the pipe. We're building some rich tools to help make sure the developer experience is good and then attacking this problem for developers not just for the web, but for mobile web, native mobile, and for desktop also.

    KENT: Cool. When you're talking about platform, can you actually expound a little bit more on that? On how Angular is becoming more of a platform? Like, do you mean that it's gonna be more than just web technologies? Or what are the actual use cases that you're hoping to see Angular be kind of a part of?

    BRAD: Yeah, so, Angular 1, architecturally, we were tightly coupled to rendering from the DOM. There was no good way to plug other renderers, other template engines in. Like we know, if you're successful, you probably have a bunch of different platforms you need to develop for. And to be able to share code and expertise across those development targets, you know, this is not an easy thing. But we think web tech has really gotten to the place where you can reliably deliver to all of these platforms, maybe with some different renderers. Misko, maybe talk about the split we did in Angular 2 to allow pluggable renderers and templates. Could you explain the idea?

    MISKO: Right, So, in Angular 2, we wanted to make sure that you don't need to get hold of any over the DOM API, when you're developing an application. So, the injection system was beefed up. The markup was beefed up. And all these things were really done so that you don't have to get hold of the DOM. As a result, your application can run really in any environment, whether it's a server or web worker. And the renderer, we have a default renderer which renders the DOM, but we have other renders. For example, one that serializes across wires, so you can actually have the application running a web worker and then there's the UI. And it turns once you have a running serializer across the web worker, there's actually no difference whether the application actually might be running on a node and can serialize it to the browser as well. We have other renderers. For example, for React and NativeScript which actually allow rendering to native widgets and native ui.

    KENT: So, cool, just to be clear, basically, you can run Angular, anywhere that runs JavaScript. Is that kind of the overarching idea?

    BRAD: Yeah, and that doesn't just have to be Node on the server. We just need JavaScript. There's nothing special about Node. And so, we're working on integrating with other server platforms. So, we'd like to be able to run it from Java and we've been working with the Drupal folks on PHP integration. It also means, though, that in systems like Electron or Windows Universal where I do have a JavaScript engine, we can actually run, not in the UI thread, but off on another process. And get direct access to the platform API. So, this is a really powerful. Like for my services in Angular, now I don't have to actually make a HTTP connection to get a data or talk to USB or WindowsAuth or whatever I want it to do, I can go direct.

    KENT: Very cool. So, can you, since we're kind of on the subject of platform, can you talk a little bit about Dart? And how Angular 2 and Dart work together?

    BRAD: Yeah, Angular 2, we actually built on Angular 1, two things: we built one version for JavaScript and one version for Dart. And Misko had the bright idea that maybe we could combine the two and just have a single platform that we deliver across all of these targets. And so now, we author in TypeScript and we generate Dart, TypeScript, and the APIs for ES6 and today's JavaScript as well.

    KENT: Since we're continuing on this topic of languages, can you talk about why TypeScript is important to Angular development?

    BRAD: We just did an interview on Microsoft Channel 9 with Anders where we talked about kind of the history, but Misko, you were most involved, talk about how we started with languages.

    MISKO: Right. So, as I said earlier, one of the things we wanted to make sure is if you wanted to run offline or environments other than DOM, you need lots of declarative information about what you are trying to do, what you intent is. And this declarative nature of things is really what annotations or decorators are for. They're well-known in places like Java, but there's nothing like that in JavaScript. The whole thing started because we wanted to have annotations.

    BRAD: Metadata.

    MISKO: Metadata, yeah, etcetera. At first, we started with this idea add script, but luckily we met the TypeScript.

    BRAD: But we were gonna write our own language. That's right.

    MISKO: So, yes. So, yes, but we met up with TypeScript, and they just said "Well just add the thing in there for you and you can have all the benefits that you want." This is the reason we started down this path, but it turns out having type systems is very important because it allows large teams to work together. If you have a team of 20 or 30 people working on a particular project, it's just not possible for everybody to keep everything in their head. So, it helps if you give things names which are types. It helps if there's a formal verification system that says the thing that you made is actually the thing that you have. And so, it's really an enabler for large-scale teams. Once that happens, it's also an enabler for refactoring. What Anders likes to say is without types, you end up having right-only code base. That is, you can write code and have large code bases, but everybody is afraid of changing anything once things are up and running. With the type system, it becomes a read/write code base. It's not only that you're writing code, but you're also rearranging it as well.

    BRAD: Yeah, that's for developers, but we actually benefited ourselves from writing Angular in TypeScript.

    MISKO: Right, we did benefit as you pointed out...

    BRAD: We found bugs. (laughs)

    MISKO: We found bugs. A lot of team members, I think what Brad likes to say is "Now I actually understand what I'm working on." (laughs)

    BRAD: Because you can actually traverse the code base and find the source. It's nicer.

    IGOR: We often talk about the benefits of the type system for big projects and big teams, but I find that even on small projects, it's beneficial. Especially, many small projects. Just keeping all of them in your head and understanding how they work is just not feasible. And also, when you are starting, you just need to explore what kind of APIs are available, if you have type system, you can get much better tooling support and the tools can help you explore the API surface, understand how to wire things together, tell you when you make a mistake. So, it's beneficial for both beginners working on small projects, but also experienced developers working on large projects.

    BRAD: Right, I think for the individual experience, my IDE gets to help me a lot more to find out what is this API I need to use. Whether it's an Angular API or a DOM API or whatever it is.

    MISKO: And then for big teams, communication. I just want to add to it, as a reminder, you are not required to use TypeScript. We highly recommend it because we think there's lots of benefits, but you can just stick to the good old JavaScript of today. And it actually turns out that the good old JavaScript of today is a valid TypeScript program.

    BRAD: That's right, yes. If you're scared of TypeScript, you could continue writing JavaScript the way you do today.

    MISKO: It turns out you've been using a subset of TypeScript all along.

    (laughter)

    BRAD: It just works. Things just work together.

    MISKO: And you can slowly introduce the types, as you see fit.

    KENT: Very cool. With that in mind, is there any plan to upgrade the Angular 1 code base to be TypeScript?

    IGOR: We had some thoughts about this, but it's a big undertaking. We really want to get Angular 2 out of the door and help people migrate from Angular 1 to Angular 2. We don't see that it would have the impact that it would be worth justifying the cost.

    BRAD: Yeah. We have an export of the types on Angular 1. So, people can get a lot of the benefits from Angular 1 using TypeScript, already. And us, rewriting it in TypeScript, probably doesn't give you much, if anything more than that.

    KENT: That makes sense.

    IGOR: With TypeScript, there is a way to have external definitions of the type surface, system surface. That already exists on definitely typed which is a repository of these type definitions.

    PAM: I thought it was interesting when you mentioned how people seem to understand the project better in TypeScript. And that sounds like something I've heard from the community about learning Angular 1 or learning Angular 2 is that they find Angular 2, a lot more understandable. Not even necessarily because of the TypeScript part, it's actually, I know, the components part a lot of people really like. And the... what the hell is or "what the heck is a directive?" question.

    BRAD: Misko, would it work?

    PAM: ...a little more understandable. What do you think about how you've made, like how are you making Angular 2 more accessible and understandable for your everyday developer?

    MISKO: So, we spent a lot of time simplifying things.

    BRAD: We got to see all of the things we had laid out that grew organically over the time of Angular 1.

    MISKO: A lot of things in Angular 2 just happened to be the way they are because they organically...

    BRAD: In Angular 1.

    MISKO: In Angular 1, yes. So, Angular 2, we wanted to really just take a look at it and simplify it as much as we could and I think we did a really good job.

    BRAD: One example is in the way we do, we simplified the directive landscape by collapsing the concepts into here's how we handle events, here's how we handle binding. There's only one way to do things. As it turns out, a whole bunch of the directives we shipped in Angular 1 just disappear because we have a nice syntax that just encapsulates all of it. And it allows us to work with future JavaScript. It's more future-proof. We don't have to write a directive to encapsulate functionality. We can just bind that serves the low-level idioms.

    MISKO: And, you know, let me add to it. The other thing that might not be obvious is that Angular 2 is a lot more toolable. And so, companies like WebStorm which provide their IDEs can give you a lot more help navigating through clicking through the HTML, getting back to the components and the related formatting for it, etcetera. And so, you're gonna see a lot more rich kind of experience with Angular 2 and the IDEs.

    PAM: How do I have an echo?

    KENT: I just muted the Angular guys. Sometimes this happens in the middle of the show. Apologies to our listeners. I feel really bad, but maybe Brad, if you could mute and unmute yourself, that'd be great. Thanks.

    PAM: When you mention, the key phrase, that there's one way to do things, that sounds like "let's establish conventions." Do you think that... because that's one of the things I don't know what your experience is w Kent, but I haven't seen, I don't know if there are a lot of conventions around Angular 2 yet or if they will develop. I'm thinking about like in Ruby world or even in Ember world where there is a right way to do something. Is that something you would want to see in Angular 2? Like is that a goal?

    IGOR: Yeah, it is a goal. As Brad mentioned, the scope of Angular 2 is bigger than the scope of Angular 1. In Angular 1, we built the core framework and have people basically figure out how to use it. And the best practice information evolved over time as we got more familiar with different use cases and as the whole ecosystem evolved. With Angular 2, we have a lot of experience with building large applications. You know, with Google and also outside of Google. And we're taking all of these experiences and building a style guide for Angular 2 which is gonna be part of the documentation. All of the examples and tutorials are gonna reflect this and it's gonna be built into the CLI which is gonna help you bootstrap your project. And generate all of the scaffolds for you. We are working with John Papa and Minko Gechev on this and there's gonna be a single style guide that's gonna be recommended to the whole community. And one thing to realize with the style guide is it's really a recommendation. There's nothing in the framework that prevents you from using the framework in a different way. This is just a recommendation for you to get started, to learn from the best practices that we know of today. And if you find that in your company there might be some reason for diverging, then you should feel free to do that.

    BRAD: But we're coming with a bunch of experience about building apps already. Like internally at Google, we've built a bunch of Angular 2 apps. We've see a lot of the ways points get put together. The thing that is also great, in addition to the CLI, which will setup your directory structure and initial code, the way it works with the conventions we lay out in the docs, Minko's also building a linter that will take as many of these things and give you real-time feedback as you write the code. "Am I following the conventions or not?" It's optional, but it seems pretty cool.

    IGOR: One thing that's part of the style guide is explanations as to why there's a certain recommendation because that gives you insight as to why is this best practice and is it applicable to use the script.

    BRAD: So you can make your own decisions.

    PAM: A bunch of those things you just mentioned, is that CLI out or?

    IGOR: The CLI is currently in alpha. It still being developed and the style guide effort is undergoing. And we are slowly taking the stuff from the style guide we have today to move it into the CLI.

    BRAD: Yeah, the other big thing we get from the CLI is collapsing all of the setup you have to do with polyfills and installing tools and configuring and all the way through to scaffolding tests and running them and launching developer mode and deploying. If you go through our quick start guide, it's not as quick as we would like because of the overhead in building a modern JavaScript project, where I need to install a transpiler and Sass and my testing tools. So, this will all drop away. And our goal for finals is we're gonna replace all those instructions with just the one line. Npm install Angular CLI, Angular CLI, new projects. It should be a lot better for folks to get going.

    IGOR: A lot of feedback we get is that Angular 2 seems complex, but when people dive in they realize it's not Angular 2 that is complex. Angular 2, as you mentioned, the whole component system is very simplified compared to Angular 1. The friction really comes from the setup of the tooling and dealing with all of the new stuff that is in browsers that is corrected to polyfills and that needs to be set off. We see this as temporary state until the browsers implement many of these features and over time, you will rely less and less on polyfills. However, what I also see is visitors online comes up with new standards like async functions, developers get really excited about them and want to use them. So, while we say that many of these things are temporary, I see that over time they're relying on tools won't exist, but it's just gonna get smoother.

    KENT: This sounds like a great answer to JavaScript fatigue thing that people are all crazy about right now. I wanted to ask about the linter that you mentioned. Is this going to be a brand new linter or are you going to build on top of something that's pluggable like ESLint?

    BRAD: I don't know the details. I think it's orthogonal to ESLint. This is more about style.

    IGOR: I don't know the implementation details. My understanding is that nglint which is an already existing project. You can google it. It's Minko Gechev's project. My understanding is that it's built on top of TypeScript language services. He has a rule-base system where he verifies if the AST diverges from the expected rules.

    BRAD: So, it is actually used with some plugin to the TypeScript language system that Chuck, on our team, is working on. One of you know about what he's doing. Misko, you created the issue.

    MISKO: I'm sorry, the metadata?

    BRAD: Metadata, the language services, the structure you're working on?

    MISKO: So, Chuck is working on a collection of services which allow us to, there's two benefits we get out of it: first of all, we can adapt the tooling, so, IDEs like Visual Studio can provide the completion and just lots more insight. It's not just Visual Studio, but really any IDE that uses TypeScript services, including like even if you have it setup for VI, Sublime or anything like that. The other benefit we get is that we can, by collecting all this data, we can then run the compiler offline and generate the source code of the application and then ship it to the client. The benefit there is that one, it's shipping out less code, we don't have to ship the framework. And actually the stack message, the error message becomes a lot more useful because instead of having this meta stack trace that talks about, generically, how the framework does things. Now you have a stack trace that directly points to a specific line or will generate a code which will refers to a specific line in the template or CSS or the comment over there. And so, it's a lot more insightful as to what's going on. I mean, you can actually put grade points on a specific if check rather than just generate grade hoards across all GNU section.

    IGOR: The cool thing about this is that basically we take all of the HTML code and all the metadata, translate it into code and once we have that we can do minification on this code. So, while templates and metadata can be hard to minify because the framework needs to be able to read them, once we process them, we generate instructions in the form of code and that code can then be minified and made much smaller.

    KENT: Very cool. Yeah, that actually kinda touches on the thing I wanted to talk about next which is performance. Performance has a lot of different vectors. Minification being one of those. What are some of the things that Angular 2 is doing to make performance awesome?

    MISKO: What we've done with the code generation, But during the codegen, we create code which in technical terms is called monomorphic code. Turns out the VMs love monomorphic code. It can optimize it very well. So, by doing that, we can get really amazing performance. Not just in terms of runtime, but also in turns of startup because you don't have to boot...

    BRAD: Cold start.

    MISKO: Cold start, sorry, in terms of the cold start. And in terms of how much we have to, memory pressures as well, and how much we have to actually shift the browser. So, all of those are kind of great benefits in performance. The other performance we're looking is we spend a lot of time just making sure we can render things fast. We got it down to essentially one line, piece of line that basically says, "if previous value is not equal to current value, then" reference to a DOM element dot subtext the new value, right? It's hard to imagine how this line of code could be shorter because the new value is literally the expression you placed in there.

    BRAD: One point to compare and only if it's stripped, do we get to update.

    MISKO: And you know exactly where to write because the general rule is code, so it's not like we have to go to hashtag lookup or anything like that. We know exactly where to write the information. To be as flexible is obviously fast. You look up the code and you go like, "Well, it's just checking and then writing." So, I can't imagine how we make this shorter or rather faster.

    BRAD: And there's very little to do because there's just not much to check. There are a bunch of other things we're doing for performance. So dropping the compiler, generating the code, changing the change detection output, but also exploring some other routes because it's not just about the rendering performance, it's also startup speed and how much do we interrupt the UI thread. And so, for startup speed, we've been working with a bunch of external folks. Patrick Stapleton and Jeff Whelpley on Universal where we can render on the server for a very fast initial startup speed. And then working with Web Workers, so we can actually offload Angular into a separate process and not interrupt the UI thread and make things always responsive for the user.

    MISKO: I'd add actually one more thing to it which is that by default, we run the good old change detection, right? The thing that people have come to love which is very friendly towards other libraries etcetera, but we are setup in a way that we can actually run other strategies. So, for example, if you choose to make your code in immutable, you can flip a couple of flags and make the framework take advantage of this thing.

    BRAD: So, there's even less work for us to do that.

    MISKO: There's a little less work. And the important part here is that this can be done on per component basis, right, rather than on a global basis. So, you can have this hybrid application where you say, "For the top level, actually, I really prefer the change detection because it's simple to reason about. But for the lease, for example, I'm gonna choose an efficient, immutable algorithm or something like that." And it also supports Reactive/Flux style programming model as well. So, you do have a lot of choices. So, I guess to summarize like we can, the stuff we do, we do faster. We give you a bunch of other options, in terms of how to detect changes and we allow you to offload stuff onto different threads.

    KENT: Sounds like you've opened it up to a lot of additional experimentation and exploration, as well. That's awesome to hear.

    PAM: So, on a different tack, it sounds like you have lots of thoughts on performance, (laughs) but what about moving across platforms? So, shipping projects on mobile and you talked about the ability to ship to all these different engines, but what does that mean for people thinking like, "Okay, Angular 2, how do I put it on mobile?"

    BRAD: Yeah, well, there's two kinds of routes. So one is what we'll call mobile web and you may have seen some of the studies recently, where folks like FlipKart, have gotten a tremendous amount of engagement by just focusing on their mobile web story in this progressive web-app style application, where my app when I first surf to it, for the user it looks like a website, but it becomes more like an installed app as I use it. So, on first download we use service workers to cache the data and the codes. So, that the next time I come to it, it's already there, very fast. And this is where people actually make money. It's very hard for me to get my app installed. Most apps on the AppStore or PlayStore never get installed, ever, not once. But people are still able to make money by driving people to their websites on mobile. So, this is where we really wanna help people build into this problem space. We take advantage of Angular's much more minimal memory pressure. You use much less memory, faster change detection, offloading some of the work to web workers, if you've got an intensive application. So that you can have a completely native performance experience over there. And we've got a team actually focused just on this. It'll have starter code, it'll be part of the CLI, it'll get started quickly, go down that path.

    If you're very successful and you can get people to install your native application, there's a bunch of different options. So, one is the Ionic team, we've worked with for a long, long time. And we've been working with them throughout Angular 2 to make sure that Ionic 2 can launch in a similar time frame. I haven't used it, but I've actually heard a lot of great things about how much nicer Ionic 2 is. They take advantage of all the performance enhancements that we have to be able to deliver through a web view. If you want to go actual native, there's actually two different options you can go down right now. So, one is Telerik's NativeScript where I kind of write once and I get full access to all of the local platform APIs through this reflection capability that I have in JavaScript. They have some very nice tooling around it. I can built for Android, iOS, and I think, Windows Mobile. And the other one is React Native and we've been working with some folks at Amadeus to build this support end. So, you can use React's native renderer. It's similar to NativeScript, you don't get direct access to all of the platform things, you have to write a wrapper, kind of like Cordova works, but it's got some very nice APIs and it seems like a nice development environment also.

    IGOR: Their performance is very good.

    BRAD: Their performance is very good on that, yep. So, those are some of the options. And I talked a little bit about desktop with Electron and Windows Universal being the target shells that you can use over there.

    KENT: So I think Pam actually wanted to talk about Rx. Is that right, Pam?

    PAM: Well, I found it really interesting to, I'm a big fan of the RxJS project, and you all use it in Angular 2, is that correct?

    BRAD: Yep.

    PAM: And it seems timely since listeners, you can tune in next week and you know, hear about RxJS. So, I kinda wanted to ask what you all, why did you use RxJS in your tool chain? How do you think it's beneficial?

    IGOR: I can take this one. So, in Angular 1, when we were dealing with the problem of synchronous programming, we looked at is there something better than callbacks that we can use and expose us APIs and we came across promises. And promises really solved the problem of one-time events that are asynchronous that need to respond to in some way and handle errors. One of the big selling points of promises was composability. So, you could setup chains of events that happened in some succession and all of them are synchronous or potentially synchronous and basically you can setup complex applications in this way. In Angular 2, we had more and more needs of repeated events, not one times events, but things that happen over and over and over again. And promises are not great for mulling these kinds of situations. So, we looked around and somehow I managed to come across Jafar Husain from Netflix and Ben Lesh and I saw their presentation. And it totally opened my eyes because I saw all the problems we were dealing with and we couldn't solve well with promises were really well-modeled through observables. And Ben Lesh was, at the time, starting the RxJS project. So, we talked to him and basically came to the conclusion that RxJS 5 would be a perfect fit for what we are trying to build with Angular's framework and expose observables as if we're using APIs. Combine that with the effort, to standardize observables (mumbles) and make it part of the language, it made us feel really good about relying on this kind of APIs, as public facing APIs.

    BRAD: And it actually, you're talking from a developer perspective, but from an end-user perspective, in JavaScript, we don't have good idioms for handling like off-the-beaten path cases. So, on mobile, it seems rock-solid, on the web, it's not. I just used to, I'll just reload it, if it doesn't work out because I don't have a way to retry or to cancel events and decrease my load. And this actually gives it to me.

    IGOR: This is the composable impact of observables, just like promises, it was much easier to reason and recover from errors or at least, handle errors. With observables, you can do that same thing, in much more complex situations that we see more and more frequently in complex applications where networks connection is slow or fails or you have various errors that popup during the runtime and you need to deal with them in some way that doesn't crash the application and you don't need to tell the user to just restart.

    KENT: I'm really disappointed, but not because of your answer, your answer was great.

    (laughter)

    PAM: Yeah, that was a weird lead in.

    KENT: Yeah, that was a weird lead in to what I was gonna, what I'm disappointed about is that we're coming down on our time and we do have a couple of questions on Twitter that I think we should probably get to because we care about the people. So, if anybody is watching live, you can ask on Twitter with the hashtag, #jsAirQuestion. If there's anything that we didn't cover that you'd really like to, make sure that we cover it. I'm gonna go ahead and lead into that, unless there's anything in particular, that you all want to make sure we cover.

    BRAD: Let's hear it from the twitterers.

    KENT: Yeah, let's go. So, I'm not sure if I'm pronouncing your name right, but I think it's Evgeniy Oz. He asks, "Will Firefox and Safari be supported before RC1 or after?"

    IGOR: Before. We already run tests and I think there are a few failing tests in Safari, right now, and we need to fix those, but definitely before RC.

    KENT: Very cool. And actually, just to ask more broadly, what is the browser target for Angular 2?

    BRAD: So, it's all the evergreen browsers, of course, but IE9+ and then Android 4.1+

    IGOR: We're going with the limitation that IE9, we don't expect great performance in some situations. It's just not feasible. There's only so much we can do, if the engine is very slow, but the code itself will work.

    KENT: Awesome, yeah, those people need to get off of IE9. That's pretty much all that we can say. (laughs)

    BRAD: Actually, I mean, just to be really clear, It's not that everything in Angular will work on those platforms, but the core will. So, like our material design we're targeting the evergreen browsers for that.

    KENT: Okay, yeah, and I imagine web worker stuff and whatever service workers that's obviously not gonna...

    BRAD: Yeah, that's IE10 and above.

    KENT: Larry King asks on Twitter, "Thanks for everyone's great work on Angular 2. Any updates on status of 1) animations and 2) minimizing Angular 2 payload for mobile?"

    BRAD: We talked a little bit about minimizing payload. So, we're dropping the framework by going to a compilation stuff. But we're going to be looking past that to reducing it further, through a bunch of techniques. One is by tree shaking. I don't know, either of you wanna talk about some more points?

    IGOR: Just as I mentioned previously, when we take the templates, metadata and generate the code. Now we can generate code with type information in it. And what this allows us to do is optimizations that usually would be unsafe, but if you're have type information, you can actually do crazy minifications and structural changes to the code that minify the code significantly. This is what the Closure Complier does. Closure is a project from Google that is used to minify all the code that Google produces, the JavaScript code that Google produces for use in its applications. And what we have rebuild internally already is a way to take TypeScript code and minify it using Closure Compiler with all of the most advanced optimizations turned on. We are looking into how to expose this to the external world and make it super easy to use because Google Compiler is Java-based. It requires JVM to run which is not the most, there is some friction in setting it up. Internally, this is all handled, but externally, we are trying to figure out how to make it easier through JVM. So, we need to go about JVM being required.

    KENT: Nik Mad asks, "Any planned support for migrating from Angular 1 to 2?" So, we didn't actually cover this, but I think lots of people are interested.

    BRAD: Misko, you built these piece.

    MISKO: Right, so, there's an ng upgrade and a polyfill which allows you to, it's not a polyfill, but some kind of magic, that allows you to run Angular 1 and Angular 2 components side by side on the same webpage. You can mix and match. You can inject Angular 2 components in Angular 1 and vice versa. Angular 1 is not great with 2. Obviously, the services can be injected across boundaries, etcetera. So, the idea is that we would migrate a component at a time, from Angular 1 to Angular 2.

    BRAD: So, you have options. You can either do a big bang migration or you can do it a little bit at a time, if you wanna spread it out and continue shipping.

    KENT: Do you have any success stories about people upgrading so far?

    IGOR: We are currently running several pilots. We're figuring out applications bigger teams have taken ngUpgrade and migrating from 1 to 2. Once we have more data, we plan to publish a blog post and share the experience, but we're not there yet.

    KENT: I think that's all of our questions from Twitter. So, we'll move ourselves into the tips and picks. We'll let Pam go first because she might drop out due to battery problems. So, go ahead, Pam.

    PAM: Sure, yeah, my poor computer is making lots of noise. So, I have a tip. Git tips are always fun. So, I tweeted a little earlier today about using I often use Git rebase interactive to clean up a pull request. And so for a long time, I always used S for Squash and then suddenly edited my commit message afterward and then I discovered F for FixUp which also leads into a pick. I tweeted about that and someone linked me to Git Tips which is a nice repo of Git Tips which is always fun and you always learn something when you read someone else's tips. It's kind of like trying vim tricks and stuff like that.

    I have another pick, too. My friend Luna has a How to Make Programming More Accessible series that she just started blogging about including making open source projects accessible to new contributors which I know Kent, you're a big fan of. So, you should definitely check out her series for ideas on that.

    KENT: I am a big fan of making things easy for beginners. So, thank you. Great, so, I'll go next and then we'll let our guests go. So, for my tip, I'm a big believer in not confining our conversations to one-on-one conversations. It can be really easy to actually just make your conversations public. So, if you have a question about "how do I write a test for this thing?" Like have a conversation over a hangout on air or something. Have it recorded, so that you can make it public and everybody can make the world a better place that way.

    My picks are, first, I wanna pick PayPal. I work for PayPal. I work from home. I totally love PayPal. I think they're awesome and they let me do this podcast and I think that's great. So, thank you, PayPal.

    And then, my second pick is Soft Skills Engineering. This is a new podcast from Dave Smith and Jamison Dance about everything else you don't hear on other podcasts about soft skills. It's really, really good. They've had five episodes now and episode four is Should I Build My Personal Brand? And it's actually a terrific episode. I recommend you check it out. So, great, that's my tips and picks. Let's go with Brad. What do you have for us?

    BRAD: I'll go really local and low-brow. If you are using Angular 2, then the latest version of WebStorm has some amazing abilities in giving you Intellisense in the templates and in your code. It's really cool.

    KENT: Igor.

    IGOR: I came recently across this really cool web application called Flat.io. F-L-A-T-I-O It's an application for collaborative editing of music sheets. I'm trying to learn piano and I was looking for something where I could build my own sheets and this popped up, it looks really cool. And it's really slick. And when I looked under the hood, it's built with Angular which was the best prize.

    MISKO: One or two?

    IGOR: Angular 1.

    KENT: Awesome. And Misko.

    MISKO: So, I just discovered this morning, this amazing service called, it's run by Financial Times and they have a CDN with a URL which ends in something like powerful.js. And what the service does is it looks at your browser agent and says, "You're running Chrome or Safari or whatever, you need these sets of polyfills." And just magically delivers them for you. So, you include one thing and depending on what browser you have, the payload might be an empty file or it might contain, a large set of things that you might need for your particular platform. So, I think that's awesome.

    KENT: Actually, on that, WebPack 2 is requiring a promise polyfill. And so, like lots of people used to use WebPack to polyfill promises conditionally and now that WebPack, actually, itself requires a promise polyfill, they're looking for alternative ways do that and polyfill.io can do that for you. It's awesome. All right, so with that, I think that is our show.

    Let me just give a quick shout-out' to our silver sponsors, O'Reilly Fluent Conf, Auth0, Trading Technologies, and new sponsor SparkPost. SparkPost is actually going to be... what we use for our newsletter which you can sign up for at jsair.io/email. And hopefully we'll get a newsletter out this week. So, do that, it is gonna be great.

    And then go to suggest.javascriptair.com, if you have any suggestions for the show, guest or topics and/or. And then feedback.javascriptair.com is a great place for you to go and submit feedback about the show about this episode, about a previous episode, or about the show in general. That is appreciated.

    Remember next week our show is Reactive programming in JavaScript with Ben Lesh, Matthew Podwysocki, and Andre Staltz. And then, as always, follow us on Twitter, Google+ and Facebook to keep up with the latest. So, with that, I just want to say thank you, Igor, Misko, and Brad for coming on the show.

    BRAD: Bye. Thanks for having us.

    KENT: See ya.
  `,
}
