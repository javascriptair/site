export default {
  title: `Web Components`,
  guests: [
    {
      name: 'Rob Dodson',
      twitter: 'rob_dodson',
      links: [
        `[Server Components](https://pimterry.github.io/server-components/)`,
        `[Using React app techniques at the web component level with Redux, virtual-dom, and JSX](https://component.kitchen/blog/posts/using-react-app-techniques-at-the-web-component-level-with-redux-virtual-dom-and-jsx)`,
        `[Web Components Twitter Thread](https://twitter.com/dan_abramov/status/770645608415784960)`,
      ],
      tips: [
        `The gas arrow in your rental car dashboard tells you which side the gas tank is on`,
      ],
      picks: [
        `Slappy Cakes (http://www.slappycakes.com/)`,
        `Elon Musk biography by Ashlee Vance (https://www.amazon.com/dp/B00KVI76ZS/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)`,
        `The Corgi sticker from cotton bureau (https://cottonbureau.com/)`,
      ],
    },
    {
      name: 'Tushar Mathur',
      twitter: 'tusharmath',
      links: [
        `[rwc](https://github.com/tusharmath/rwc)`,
        `[Demythstifying Web Components](http://www.backalleycoder.com/2016/08/26/demythstifying-web-components/)`,
        `[Funag](https://funag.github.io)`,
      ],
      picks: [
        `[Google I/O 2012 - Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw)`,
      ],
    },
    {
      name: 'Monica Dinculescu',
      twitter: 'notwaldorf',
      tips: [
        `[Emoji-cli](https://github.com/muan/emoji-cli) is an emoji-searcher-by-keyword as a cli`,
      ],
      picks: [
        `Electron!`,
        `GO VOTE`,
        `[punchesbears](https://twitter.com/punchesbears) is an amazing twitter where a dude posts hilarious videos of various videogames he is making (dancing bears! Throw macbooks at hipsters! Drunk navigating of a 7-11 for a burrito!)`,
      ],
    },
  ],
  description: `
    There's been quite a bit of talk about the Web Components spec lately. As with anything new, there's been a lot of fear, uncertainty, and doubt (FUD) about Web Components. We're going to chat about some of their use cases, strengths, and weaknesses to give us all a better idea of this tech.
  `,
  youTubeId: 'M_yEe9pVKgg',
  podbeanId: 'ikyrh-631dfc',
  shortUrl: 'http://jsair.io/web-components',
  host: {
    tips: [
      `Vote`,
      `If you know [Elon Musk](https://twitter.com/elonmusk), I’d like an intro because [I want him on the show](https://twitter.com/kentcdodds/status/780968532976685056) I’m. Not. Joking.`,
    ],
    picks: [
      `[slice-js so far...](https://gist.github.com/kentcdodds/e85254d4dbc1540df6b95eb9ad2098d9) (a gist giving a quick demo`,
      `[React.js 50,000 stars](https://facebook.github.io/react/blog/2016/09/28/our-first-50000-stars.html) (and some awesome shirts for the whole family!)`,
    ],
  },
  panelists: [
    {
      twitter: 'pamasaur',
      tips: [
        `Delete your Facebook (app)`,
      ],
      picks: [
        `[NPR fact check](http://www.npr.org/2016/09/26/495115346/fact-check-first-presidential-debate)`,
        `[Polymer Summit](https://www.polymer-project.org/summit/)`,
      ],
    },
  ],
  transcript: `
    KENT: Alright and we're live with JavaScript Air. Hello, everyone! My name is Kent C. Dodds and I am your host for this JavaScript broadcast podcast that we love so much, called JavaScript Air. And today, we're going to be talking about web components. Something that is of great interest to the web community and the web platform. So, before we get into that, I'd like to give some shout outs to our sponsors that make it possible for us to do the things that we do with this show.

    So first off is Egghead.io, the show's premiere sponsor. They have a huge library of bite-sized web development training videos. Check them out for content on JavaScript, Angular, React, Node and much more. Egghead.io is also the host of two free Redux courses from Dan Abramov. Find them at Egghead.io/redux.

    And then Frontend Masters is a recorded expert led workshop with courses on advanced JavaScript, Asynchronous and Functional JavaScript, as well as lots of other great courses on frond-end topics. Find them at frontendmasters.com.

    TrackJS reports bugs in your JavaScript before customers notice them. And with their telemetry timeline, you'll have the context to actually fix them. Check them out and start tracking JavaScript errors today at trackjs.com. And that actually that little shout out has never been changed in like, the 10 months that I've been running this show, I'm pretty sure I could say that from memory at this point. (laughs) I can now say "telemetry timeline" which is great.

    So WebStorm is also a sponsor, it's a powerful JavaScript IDE. Give it a try for more productive development with ES6, Angular and React. Use the discount code JavaScript Air at checkout at jetbrains.com/webstorm to get 20% off your WebStorm personal subscription. 

    And Trading Technologies is looking for passionate and inventive full stack JavaScript developers who want to work on cutting edge solutions in a cooperative and challenging environment. Go help them build the top choice platform for derivative traders.

    Alright, sweet. So that is our sponsors, we're grateful for them. Let's talk about next week's show. I don't actually have it planned yet. I apologize for that. Normally I do, so if you look at the website, it's going to be kind of lonely. But it's going to be great, I have a couple ideas lined up. But as always, if you have suggestions go jsair.io/suggest and I appreciate your suggestions.

    And as always, follow us on Facebook and Twitter and Google+ to keep up with the latest. I'll be honest, I pretty much only pay attention to Twitter. So there's that.

    Alright, let's go ahead and introduce everybody. For our panel we have Pam Selle.

    PAM: Hey everybody!

    KENT: And I'm your host Kent C. Dodds. For our guests we have Rob Dodson.

    ROB: Hey, how's it going? Thanks for having me.

    KENT: Thanks for coming. Monica and I'm not going to even try with your last name, I'm sorry, Monica.

    MONICA: No worries, it took me like three years to get it, hi.

    KENT: Nice, welcome to the show and Tushar Mathur.

    TUSHAR: Hello.

    KENT: Thank you all for coming. So let's give everybody a chance to introduce themselves and correct my pronunciation of their names. (laughs) First of all, we'll start out with you Rob.

    ROB: So yeah, you got it right. I'm Rob Dodson. I'm a developer advocate at the Googles. I work for the Chrome team and I primarily work on web components and I also work on this library called Polymer with Monica and other folks.

    KENT: Excellent! Thank you so much! Definitely a subject matter expert here. Monica.

    MONICA: Hi, I'm Monica, I work on Polymer with Rob. I'm one of the engineers on the team. And I am obsessed with Emoji and web components and also cheese. And I work in Google sorry.

    KENT: Awesome, another subject matter, who am I kidding everybody here is subject matter experts. All the guests here.

    MONICA: I'm a subject matter expert on cheese also. (laughs)

    KENT: That's great! We'll get to that. (laughs) And Tushar.

    TUSHAR: Hey guys my name is Tushar. I've been exploring web components lately, trying to integrate WhatWG DOM and Shadow DOM together. So, yeah, pretty much that's it.

    KENT: Awesome! Thank you, Tushar. Now I know how to pronounce your name. Cool, great, so I like to start out the shows, leveling the playing field. Not playing field, like the just making sure that we're all on the same page with what we're talking about and make sure that people understand what it is that we're going to be discussing. So let's kind of, I would actually like to start with the why behind web components. I think that will help us understand a little bit more what they are, as well as why they exist. So can somebody give us an idea of why web components exist and like, what the problem they're trying to solve?

    ROB: Yeah, I could take a stab at that if you want. So web components, it's actually a set of ideas that have been kicked around for a very, very, very long time. In a nutshell, it's basically the ability to make HTML extensible and let developer's create their own tags that kind of get to play as first class citizens, the same way all the other HTML outlets get to. It's an idea that goes way back, I think in old IE, there was this thing called HTCs that was kicked around, there was a thing called XPL 2 that was kicked around. Never really like, not all browsers ever really got on board. And so maybe about at this point maybe five years ago, it took another crack at the ideas. They broke it up into a set of four different specifications, which are custom elements, Shadow DOM, Template and HTML Imports. Those four specifications sort of fall under this umbrella term of web components. And what we've been seeing is all the different browsers, sort of implementing those piecemeal. So now we have kind of varying levels of support, but at this point I think we have pretty much all the browsers signed on with the idea of web components are a good thing. They like the ideas behind it and so now they're working on shipping kind of the core pieces which are custom elements and Shadow DOM, Template has already shipped everywhere and HTML Imports is still being kind of kicked around and debated.

    KENT: So it's basically like web components is, I think this is kind of a common misconception, but web components is not a standard, it's actually a collection of standards. Is that right?

    ROB: Yeah totally it's, these four standards. And I think kind of really at the heart of it, you've got two that are very important, which are custom elements and Shadow DOM. Custom elements are what let you make new HTML tags. Shadow DOM is what lets you (silence)

    KENT: Oh no, did we lose Rob?

    ROB: Did we? I don't know I can still see.

    KENT: For a second I lost you.

    PAM: Your back, everyone was frozen for me for a second, but I think we're cool.

    ROB: Okay, sorry about that, I froze the internet with my awesomeness.

    PAM: So you were at the point where you were talking about the most important are, of them you would say are Shadow DOM and custom elements.

    ROB: Yeah, custom elements let you define your own tags, Shadow DOM lets you scoop the CSS for those tags and encapsulate their mark up, so folks don't accidentally poke around inside of them.

    KENT: Well maybe we can talk a little bit more about the problems that web components are trying to solve. So like why is it not permissible for me to just code up my whole, like my whole pages just HTML and CSS? Like what you know, that worked great for my grandpa, what's the problem that we're trying to solve with web components?

    MONICA: Oh man, I can I take this one?

    KENT: Please do.

    MONICA: So, one of the things that I found, I'm not classically a JavaScript developer, I'm a C++ developer. Encapsulation is a thing that you always take for granted. And when I moved to the web, one of the weirdest things was, if I wanted to get somebody's awesome widget, like a super colorful button of everything, I would have to very carefully copy/paste their DOM, and very carefully copy/paste their styles and make sure that I'm using the right class name, the right IDs, the right whatever that person expected. And on other hand, I can't duplicate it. So if they use, I don't know, the class name, button, on their button, nowhere in my application, can I use that class again, because everything's going to be a mess. And that's really annoying from any other framework or language perspective, where you can encapsulate things and build a little box or a castle around them and just give them to people and be like, "It's safe, I promise you. Just drop it in your application and nothing bad is gonna happen." And I think Shadow DOM in particular, tries to fix that. That's it, that's me.

    TUSHAR: Yep, so I do have some points actually. So first thing for me I've been building components using React and Cycle and a lot of other labels and what I've observed, is every few years there's some new label that you want to use and you want to rewrite the whole application. And that's the major problem with these components, because when you want to make some changes, you have to actually rewrite the complete application, you can't just take a component and change the architecture there or, can't piece by piece make those migrations. And that's what web components help me achieve. I could just create one web component with some architecture and a different web component using a completely different library or an architecture. And when I want to migrate, I can just break it into pieces and keep migrating one by one. So that was the biggest advantage that I got using web components.

    KENT: Okay, so actually I've got a question for you Tushar. So like, right now I'm way into React and I'm totally loving the component model and everything, and I understand the argument that you're giving, that like you know, I want to be able to move these components from framework to framework. Maybe not all the projects that I'm working on are a specific framework or maybe React is too big and React is not working or whatever. So, I get that argument. But my question is like, if that's the case, why don't we just build our entire application using just raw web components? Like, where does web components kind of fall over, so that you even care to reach for a framework like React or Polymer or Angular or is web components enough to stand on its own? Like, shouldn't we just be using web components.

    TUSHAR: Yes absolutely, I mean, you could actually just use web components. You can have a component called app and that component does everything for you, and you can mount pretty much index that app web component anywhere that you would like. But my idea is actually, if you're using React, you might as well use React for a web component and not for the whole application. So that way, it's easier because eventually, you will find a WhatWG -DOM library, which is faster than React and you would want to migrate, but you can't migrate if you have the whole application just tightly coupled with the app. But if you have a web component which is just one web component which is using React and if you could isolate and give migrate that particular web component, it's the best.

    MONICA: I think my favorite analogy for, I completely agree with that, for web components is the question of, would you use an input for a search field in your website or your application? Like it's not about whether you need a framework to build a website. I have a blog. On my blog I have a couple web components. One of them makes it rain emoji. But I'm not using any frameworks, I'm not using, it's just like HTML with something called emoji-rain, which is a web component that I wrote. And I think you reach towards frameworks when your application is growing and you want somebody to do some more heavy lifting for you and help you build a bigger application.

    ROB: Yeah, I think, you know, that a question that's like, can I build my whole app out of just web components? One thing to keep in mind is that the standards themselves are. They're low-level, just sort of extensions to what you can do with JavaScript and HTML. So in some ways it's like saying, "Can I build my whole app out of vanilla JavaScript?" and yeah, you absolutely can. There will be places where you prefer the ergonomics of like using a framework to do something things to make it more efficient. But that doesn't mean that, that then that framework and web components become mutually exclusive. You can use them together and for instance, you use components as like, little leaf elements that you then sprinkle into your framework. So I think that's one of the things that we definitely want to get across to folks is this idea that frameworks and web components are not mutually exclusive. You can and should be able to mix and match them together in ways that, you know, make you feel really productive.

    PAM: So if I get too far ahead of us, we can back off of it, but I actually thought of a question that, so when you're, especially Tushar, when you were talking about how you would you know, let's say it like, you can package your components so that they're sockable, what happens when we're using web components when multiple components have the same dependencies? Are you incurring the load of those dependencies more than once or is there any kind of smart sharing going on?

    TUSHAR: It depends on how you are bundling your components, right? If you are using webpack for instance and if you're using JavaScript to create and bundle your web components then it'll only be done once. Again if you're using HTML imports, you can still load them one by one. So eventually you can technically optimize your loads.

    PAM: Interesting! Thanks.

    ROB: Yeah, HTML imports naturally de-duplicate, so that's like one of the best features. So long as it's pointing to the same destination, essentially. So if you have, ten components that all point to ../foo.dependency or foo.js or whatever, it'll only load it once. The system will sort out, "Oh, everyone's asking for the same thing. I'll just load it that one time." So that's one of the nice features of imports, it doesn't require any additional build step or machinery to do that one cool trick.

    KENT: Okay, cool. Yeah that sounds like that would be something that would work really well for a website, but once you bring in a framework and stuff, like you want to start writing, you know, future code things or add typings or something then you're going to need to build stuff and you're going to want to modify your code and stuff. And so then you need something like what Tushar was talking about with webpack to bundle these things. You could just make sure that your de-duping, it's interesting.

    So I had kind of a related question to our, you know, why couldn't you just build the whole thing in web components. So, like I was saying, I understand the you know, the draw to be able to move web components from one framework to another or from application to another pretty seamlessly. What if I just really, really like React and that's the only thing I ever want to write anything in? What are some of the other things, beyond the share ability, what are some of the other things that I'm giving up by ignoring web components in that kind of scenario?

    ROB: I think another issue is the potential for future platform optimization. So because these are standards based, if there are areas, where the browser makers are going to be like tuning things. For instance, one of the ideas that I think has been kicked around before, is the idea that using Shadow DOM, you could potentially improve the performance of style recalculation, things like that. You can say, I'm scoping these styles to this one area right here, so I know that they're only going to affect this one chunk. So there is the potential there for future optimization. And any time you're sort of close to the platform in that way, you might down the line, benefit because the browser makers really have to choose one common denominator place to tune things. And if everybody's got Shadow DOM, it's shipped in every browser, for them, that's kind of an easy place to look to be like, "Alright, you know, we can get some (mumbles) out of this."

    TUSHAR: I think the other aspect is also the inter-component communication, for instance React has its own way. You could use Redux for dispatching actions, putting it in a storage. But if you're not using Redux for instance in your app, how do you use that component? If you are using an observable based architecture the ergonomics, it's not standardized and that's the best part about web components so you just have a standard API where you just dispatch custom events on a custom element and that's how everybody can (mumbling). So you're sort of giving and API and you're making sure that that doesn't change. So that's a big win I feel.

    KENT: So another thing that I've often wondered about web components and one of the things that makes me kind of weary of them is the extensibility model. So with React, one of the things I love is how composable they are with higher ordered components and that kind of thing. And unless I'm mistaken, web components, the extensibility model is more of an inheritance based approach. Can we talk about that a little bit?

    ROB: Yeah sure, I don't think it has to be inheritance based. A web component naturally, automatically does always inherit from HTML element, but then beyond that, if you want to compose things together as children, that totally works just fine. There are mechanisms in Shadow DOM to let you pull in your children and distribute them to different places. So there's nothing that I can think of that enforces custom elements to inherently be like an inheritance based model or there's nothing that I see that you couldn't you know, replicate you know the patterns that other frameworks are doing just using regular elements. There may be places where you need to write little helper abstractions to make those things work but that's essentially what those other frameworks and libraries are doing anyway. So yeah, I can't think of any one specific thing where I couldn't probably duplicate something using web components without maybe some additional JavaScript to like do some plumbing or something.

    MONICA: So one thing that I wanted to mention is if you think of a web component, it's basically a bunch of DOM that's backed by a bunch of JavaScript that you write. So that DOM can have other elements that you're putting in. It can do something called distribution where you just have a generic slot where you can put anything in it. And the nice thing about web components is that they have a very nice life cycle API, so they're born in a very specific order, they get created they get attached to the document and you get to control what happens on all of these points. The other thing is that if you think about existing elements that the browser uses, they're basically very close to what web components are, so anything that input or video does you could basically do with web components. Because that's what they are, they're a web component that the browser just wrote for you.

    TUSHAR: When you talk about high order components, I think this is something which is, you can't write high order components in HTML, so this is not something which I think web components can solve, definitely. But there are other ways to solve the same problem I guess. I don't think it can be solved using web components.

    ROB: So well, when you're talking about higher order components, are you talking about how like, can you name maybe a good example, Kent, of what you're thinking of as like a higher order component that you couldn't map to a web component?

    KENT: Yeah, well so I. I've never actually used web components, so like maybe this is something that is totally doable in a web component. It's all just been conversations with people. But an example of a higher order component in React would be, I have this button that you can configure its color and then obviously, you'd also have an onClick handler for a button. And so let's say I wanted to spread a bunch of red buttons throughout my application, so I'd create a red button (stammering)

    TUSHAR: I have a better example.

    KENT: Why don't you give an example, Tushar.

    TUSHAR: So say for example you have a list item which is a component and you want to pass it to a component which repeats that list items a number of times.

    KENT: Okay.

    MONICA: You can absolutely do that with web components.

    ROB: Yeah.

    MONICA: We have that in Polymer, we have something called a DOM repeat. Which is just a little template element that basically repeats a standard item over and over again. And we even have an amazing-- sorry.

    TUSHAR:  The best part about React is that you can actually quite declaratively specify that particular component. How would you do it with web components?

    ROB: I think maybe what you're getting at and I remember seeing this example that Brian Florence demonstrated, which was basically it was like (distortion) component that he wrote, like a fetch tag. The idea was that it did Ajax. And then as a child of that, in JSX, they were essentially kind of writing like a template. And the idea is whatever the return value from fetch was would get fulfilled into that template and that would end up being sort of like what got rendered to the screen. I believe that you can totally do that same thing using raw custom elements, but this is where you're going to have to write again some plumbing. You're going to have to basically like, slurp in whatever that child syntax was they used and then figure out how you want to stamp that out yourself using some JavaScript.

    I kind of mentioned in the chat earlier, this is something that I was sort of reminded of. I think one of the things that a lot of people think is when you look at custom elements, they look at something like JSX and some of the features that it has. The ability to, you know, pass in properties and things like that through attributes. And those things seem like, because they're not built into custom elements automatically, that custom elements just can't do that. What's happening there is, what JSX is doing is, it's a little helper library that's actually setting properties whenever you, you know, write a little attribute binding. And so you can do that exact same stuff with custom elements, you're just going to need a helper. And so this is where things like Polymer come in or you could use JSX with web components or you know, custom elements.
    But again I think this is an important thing for people to keep in mind which is just that, because custom elements do not or because web components do not natively add these features, like you know, pass around templates or pass around properties through attributes. That doesn't mean that you can't still do that, you know, you just gotta add a little bit of JavaScript. And that's exactly what you're doing with the framework and library today anyway. The nice thing about using custom elements is that you can limit the amount of library code to just the little helper bits. You don't have to have a whole framework in to do your component model for you. I hope that made some sense.

    KENT: Yeah, yeah, that does actually, that does help. So, I kind of thought of a better way to describe like a higher ordered component, it's basically a function that takes an argument and then returns a new component that utilizes those arguments in some way. So it's like dynamically creating components at run-time. Is that possible to do with web components? To like create a component at run-time?

    ROB: Yeah, so, well, yes and no. You couldn't register a new tag, but you could basically have components that could take in sort of like a template. Again you'd need some sort of helper library to make the plumbing go, but something that takes in, you know, a template and then you could decide to render something different based on that template. The template itself could have again, like little markers for where you'd want to plumb in your properties and things like that. This is kind of like what we do with the data binding system in Polymer and what Monica mentioned using DOM repeat, where we basically have an element and you give it a template and you're like, inside this template, I want user name to go here, inside of some p tags and I want, you know. And so that relies on Polymer's data binding system. And you do a similar thing in React using JSX. In both those cases, the data binding system and JSX, that is just you know, that is helper JavaScript that is on top of the platform. And so I think you can do these things using web components or using custom elements. You're just going to need to use a little bit of that helper code to make it work.

    KENT: Okay. Yeah that makes sense. So I think one thing that you said, kind of made me think of something we should probably call out and that is, you can actually, like, if I were to build a static website using just React, unless I'm doing some server side rendering or something, I'm going to have to have JavaScript running to actually render that out. You know, but let's say this static website doesn't have like interaction or anything. On the flip side with web components, I can actually code up the entire static website using just web components and there's no, like even disabling JavaScript, it would still work. Is that like possible with web components? Am I understanding that correctly?

    ROB: Yes and no. So I think one of the things that wouldn't work, is if you disabled JavaScript and you had any sort of like, client side behavior that you wanted to run, but this sounds like you're kind of asking can I server side render an app? Is that sort of like where you're headed?

    KENT: Well, mostly I just wanted to call out the fact that unless you're doing some dynamic behavior on the client, like that this is one distinct feature between any framework pretty much and web components is that you could have it an entirely static site that depends on, like has no dependency on JavaScript whatsoever, so long as it's not like a has any dynamic behaviors.

    TUSHAR: You would still have to redistribute the element right?

    ROB: So it depends, like if you're using Shadow DOM, you would need to distribution on the client or you could for instance server render, if you're just using vanilla custom elements, you're not using Shadow DOM or anything, you can for instance, server render the templates for the elements and then send all that down. You would have a site that then, you know, visually displayed properly. If you, you know, if you don't have any client side behavior, then you're done. And then as Tushar mentioned, the other tricky bit is that you need to do Shadow DOM distribution, this is this idea of basically being able to sort of pull in children and display them at different places in the DOM. You'll need some client side JavaScript to make that work but you have to use Shadow DOM. Again because there's four different web components specs, you can choose to just use custom elements by itself.

    And if you're in a really constrained environment where you know that you won't be able to do any sort of like client side JavaScript, you could choose to omit Shadow DOM. I think that what would be cool and I'll share a link to this afterwards, is there's a project that a guy named Tim Perry has been working on called, Server Components and it's a very cool project where he demonstrates more kind of like a proof of concept that he's like demonstrating here's how you could statically render custom elements on the server, so you don't have to worry about any of the client side JavaScript to like register them or boot them up. And that sends it all down that paints properly and that's like how he builds his blog and things like that. So it's a cool idea. So yeah, some parts work and then some parts wouldn't. Shadow DOM stuff wouldn't work without some JavaScript.

    KENT: Okay yeah and it sounded like Tushar was mentioning you also have to register the elements, is that right? That would require JavaScript?

    ROB: Right, so you register the elements client side, You call it windowcustomelements.define and you pass it a class and that class has all your life cycle hooks and everything. What that server components project demonstrates is basically doing all of that server side. So it simulates the DOM server side goes, stamps all your templates out and everything and then sends it down that way. So in theory, you could have you know, something that paints on screen, it just might not be super interactive. But you'll run into that situation with any library that depends how much dynamic client side JS.

    KENT: Okay yeah, cool. Sorry Tushar did you have something you wanted to add?

    TUSHAR: Yes, so would call that web components when it's rendered on the server using normal HTML and then so back to the client?

    ROB: Sure, yeah. I mean it's using, under the hood we're still using the spec, we're using custom elements. We're simulating it like on the server but to me like I don't have, I wouldn't say that that's not web components. I'm just like, I'm using a feature of the browser and leveraging it server side, you know? I obviously would like to be able to use as much JavaScript as I can whenever I need to client side, so that I can have a like a super-rich experience, but if I know I'm in a constrained environment, that's not going to be available to me. I can still use custom elements and still you know, have it render server side and still you know, if I like (mumbles) elements, do things in that fashion.

    TUSHAR: Okay.

    KENT: Alright so the three of you have projects that use web components, in particular Monica and Rob, you both are working on Polymer and Tushar's working on RWC, Reactive Web Components. I'd like to talk about why these things exist and in what scenarios would I use them. So Monica, why don't we start with you, what can you tell us about Polymer.

    MONICA: Polymer is a library that helps you write web components and it does a lot of heavy lifting that Rob was mentioning before, so that you can focus on writing your custom element rather than all the plumbing to get (mumbles), you know, very defined callbacks for what state your element is in, things like Shadow DOM distribution where it makes it very easy for your element to like accept children and react to those children changing. So you could write all of this, but it would be a lot of JavaScript that you would have to write and Polymer is basically all of that helper around web components. We also write the poly fills for all the browsers that don't have web components or some of the specs ready.

    And we also, so that's Polymer the library itself and as part of the Polymer project, we also have created a whole bunch of material design web components, which are basically material design widgets, you can drop them in your application. Some are very simple like an input that floats it's label and stuff like that. Some are very advanced, there's entire like, layout elements that basically you know are responsive on mobile and they expand on desktop and they do all that magic for you and you basically just drop an element in your application and it just works.

    KENT: Cool so and, so I would use this kind of an app or if I was building an actual application where I wanted to, yeah, just like you said, like focus on actually building my app and not the wiring between components.

    MONICA: Kent, you can use Polymer elements without necessarily caring about Polymer, which is what I do. So you can just drop a Polymer element inside of your application, it just works. You don't really have to care about Polymer, the library. You would care about Polymer the library when you're like, "Okay, I'm going to make my own web components, they're going to be awesome," and Polymer's gonna help you with that.

    KENT: Okay, so I can use Polymer components without Polymer, the library or maybe I misunderstood you.

    MONICA: Well, you have to load Polymer the library but you don't have to speak Polymer to use somebody else's element.

    KENT: I see okay, so what would I do if I wanted to create my own Polymer element or my own element that used Polymer? Like, what's the API look like?

    MONICA: We're working on a command line interface which actually generates, it's like a stub sample element for you, so you don't have to like start with a blank HTML page and freak out. But basically the structure is, you have something called the DOM module, which has a template and styles and that's the HTML for your element and the styles for that HTML chunk and then you have a script. And all of them are basically package inside this taco, you basically make a taco custom element and then--

    KENT: I just love that. I hope that's what the docs call it. (laughs)

    MONICA: I think it actually used to be this idea that you stuff everything inside a container, I think it used be called a taco thing, right Rob? I came in late and had to learn about this.

    ROB: I don't know if we ever called it that, but I mean we can go back and add that for sure. (laughs)

    KENT: I love that, I want to see taco emojis all over the docs.

    MONICA: Yeah, because that's what it is, right? You have a shell then you like stuff some lettuce and some (mumbles) in there and make a taco.

    ROB: Yeah.

    MONICA: But yeah so, so then in the JavaScript bits you would have you know, how your element behaves, you know, maybe it does something fancy when you click on it, maybe it does something fancy when it gets attached to the DOM, that's all your decision.

    ROB: And those are based, a lot of those are based on lifecycle callbacks. So if you're familiar with writing a component in React probably feels pretty similar, you know. Lifecycle callbacks are based on the native custom element spec lifecycle callbacks. Yeah, we just make sure that our stuff runs after the native callbacks run, we run our callbacks on top of them and you know it's a good place to like synchronize your properties and set up your event listeners and stuff like that.

    KENT: Okay, so if I'm making a Polymer element or web component then the like, the lifecycle hooks that I'm hooking into are actually like my code is getting called by Polymer not by the native lifecycle hooks?

    ROB: Yes. Actually, so what Polymer does, is it hooks the native callback, so I'll give you an example. On a custom element spec, when you insert an element into the DOM, there's a callback that gets fired called, connected callback. I think in Polymer, we have a shortened version which we just say connected, if I recall, I could be mistaken. Sorry, we're in the middle of working on Polymer V2 right now, so some more things, their names are changing. But essentially all polymer does is, it hooks into the native connected callback if it needs to do any work there it does it and then it calls your implementation of that connected callback. So honestly, it feels like a one to one mapping like there's I've never experienced any place where was any sort of dissonance there. It just feels like implementing the native one.

    KENT: Okay cool, so another question, kind of about that too, is like, if I want to add a class, maybe think more about the use case, rather than implementation. So if I want to have a like a toggle button and then I click on the button it changes from blue to red and then I click on it, it goes back to blue. How would I accomplish that, using web components or Polymer in particular?

    MONICA: Sure, so if you think about your toggle button, it looks like, you've got some sort of like bar and a clickable thing like the little round circle, words, hard. So then you know on the div that you're clicking on you can have a click handler and that's just like an event listener, a normal JavaScript event listener. So when that gets called you do something. You slide the little ball over to the right or to the left. Maybe you set a property like checked or not checked. I think it's like five lines of code. It should be pretty easy.

    KENT: Okay, so, in that scenario, like am I attaching the event listener via JavaScript or is there like special attributes. I'm trying to think of this like connect it with my understanding of how React works and like the really declarative approach there. Is it similar--

    MONICA: So I think it's easier, I think it's easier to think about HTML not React. So in HTML the way you would have, like if you had a normal button, you would say onClick equals and then you put a function and then somewhere in your script, you define that function. That's exactly how you would do it inside a web component. Inside of your taco, you have like the part about the DOM, what it looks like, you have a div, you have onClick equals a function and then the code part of your web component you have that function. It's exactly the same.

    KENT: Okay, and because of the web component's specifications, the various of them, that all of that logic is encapsulated and so like we're not back in the dark days of global functions and onClick handlers and stuff.

    MONICA: Yeah the function lives in there although like the Id, you can put an Id on that button and call it like, button and that Id would not leak out in the web, it would just sit inside of that element, forever and ever.

    ROB: Yeah actually the onClick handler, Polymer does have special syntax for that, we say on-click instead. And I believe that is to avoid the global onClick handler thing. So Polymer does have syntax for declarative event handlers, just the same way that React does. React camel cases I believe, like they do onClick, we do on-c click but it's effectively the same thing.

    KENT: Okay so in raw web components, if I were to use onClick, like all lowercase, all one word, would that use like, the global function kind of namespace thing?

    ROB: Yeah, because Shadow DOM doesn't do any sort of JavaScript scoping, that is left to JS modules, so yeah, all the JavaScript stuff is the exact same as it was before, web components don't do anything to affect JavaScript in anyway. The only one sort of caveat to that is they do encapsulate your DOM and so if you're calling something like query selector, you know document.queryselector foo, that will not be able to poke inside of the private bits of an element. And that's good. That prevents people from accidentally looking for every p tag on the page and then mutating something inside of a component when they shouldn't.

    KENT: Okay, yeah, that makes a lot of sense. Cool so, yeah, I guess we can move on to Tushar, tell us about RWC.

    TUSHAR: So RWC provides a way to create web components using your favorite WhatWG-DOM library and essentially have a more functional approach to create it. The DOM APIs are imperative in nature and that's something which people have gotten, you know. Nobody uses it because they've been working with React and (mumbles) everybody loves the way of having (mumbles) in some particular place and just keep rendering the DOM using (mumbles). So RWC provides that functionality. So essentially you just have three functions, init, update and a view. And init function provides you the initial state of the component. Update function is like a gentle reducer function like you have in Redux. And it gets two arguments, first is the state and second is the action. And the view function returns the WhatWG-DOM So whenever there's an event that is filed on the view, automatically and the action is dispatched for the update function, update function updates the states and essentially you keep re-rendering the WhatWG-DOM. So technically, we are using a WhatWG-DOM that really do create the Shadow DOM off that (mumbles). And the best part is it's awfully small, so if you have a web component that you want to share with somebody else, it's just the WhatWG-DOM library that you need to that person would need to download. And if you look at React and other the (mumbles) 2-3 Kbs so that's the best part it's pretty small.

    KENT: Okay, so what are the virtual DOM libraries that people normally use with RWC?

    TUSHAR: So you could use any (mumbles) it has demos of React (mumbles) DOM. But you could use it with (mumbles) reactors.

    KENT: Cool. Awesome so what are some of the applications or not. But what are some examples of components that you've built in it that, where you're like, "Okay, yeah this is this RWC thing like reactive or declarative type thing really shines." Like what are some examples of that?

    TUSHAR: So we built a small music app. I'll share the link later. Essentially it hits the API, the sound cloud API to get tracks and you can basically list them on the screen. And the whole app is a web component. And you have HTTP components for, you have web components for making HTTP requests and the best part about this approach is also that you could pass props to a component. So a web component, if you're using the HTML directly, you cannot pass props unless you use something imperative. But when you're using WhatWG-DOM, you can actually pass props and you can pass JavaScript objects without serializing and just and use that web component with real data. So yeah, you can create more complicated components (mumbles).

    KENT: Oh yeah, that was one thing that I actually wanted to ask about but I totally forgot. So I'm glad you brought it up. So because things are like template strings, you can't actually pass references to objects with raw web components. And so what you're saying is RWC can do the wiring for you to make it possible to pass references to objects.

    TUSHAR: Essentially you're writing JavaScript right, when you have a WhatWG-DOM element. It's JavaScript so you can pass any kind of props.

    KENT: You know, like functions and everything, you don't even have to use the venting system if you don't want to, for example.

    TUSHAR: Exactly. So every (mumbles) in the WhatWG-DOM is dispatched as an action and you can take the action and reduce the state and create a new state and yeah.

    ROB: I did want to mention something about that string only props thing since it's an important point. This was one of the things we were kind of discussing on Twitter with the React folks earlier, was so in just like vanilla HTML right, any element through attributes can only receive a string as a value. And then the corresponding thing is, if you want to pass an object or an array, you have to say, okay well instead, I'll select that element in JavaScript and set property to pass that more complex thing. This is something though that, this is not a unique issue of web components, this is just HTML that we're talking about here that has this sort of limitation. There's no standard way in HTML to pass an object except to set a property. And so, you always have to have some sort of helper in order to do that, whether its JSX, Incremental DOM, Angular's data binding system, Polymer's data binding system. You always need some mechanism. And all those data binding systems, all they secretly do is, they take the attribute value and they look for the corresponding property and then they just secretly set the property that way.

    And so this is one of the things that I really, really want to think is important. I don't want people to think that this is something that is just a missing feature of web components. Really, this is just something that the web platform right now can't do, but it doesn't mean that you should not use web components because that you can't do this part of HTML. It just means that you'll need a helper library to do that. So anyway that's something I just really wanted to get out there, because it was something that we kept going back and forth with the react folks on and it's this is something I would like to see maybe fixed or standardized in the platform. Like this would be a really cool feature to just have natively like this ability, but I think it might be tricky to do. But again this doesn't mean that you can't use web components because of this missing feature. It's something that you can just add in using a helper like JSX or def HTML.

    PAM: So Rob, when you were referencing those, you mentioned these conversations with React people on Twitter. Is there something that you all use to keep track of that or can you drop like a link to one of them if anybody wants to fall into a Twitter hole to read about all this stuff?

    ROB: Yeah this was like a few weeks ago too, but I'll try and dig up the original discussion. It was a really good discussion. I'm sorry it makes it sound like it wasn't that interesting, it was actually a great discussion. Just figuring out like from people who use a lot of React, like what their perspective was and what they found lacking. And so this is stuff that I think on our team, like (mumbles) Devrell, the people who are working on these standards. Like, we just need to discuss these things more, write about them more, listen to people better and if that's a pain point for them, try and figure out how we can discuss it more easily.

    PAM: Cool.

    KENT: Awesome. Sounds good, I actually, I'm not going to say that, never mind. (laughs) and so great. We are coming down on our time. I've totally forgot to mention, I think, at the beginning of the show, that people who are watching live can actually ask questions. We have a Q&A right now actually. And so if you want to ask questions, go to Twitter and with the #jsAirQuestion, you can ask a question. And so we'll go ahead and do our tips and pics right now and if any questions pop up, I'll have that open and we can jump back to those questions. So, yeah, we'll go ahead and we'll have Pam go with her tips and picks and then I'll go and then we'll have our guests give their tips and pics. So Pam go ahead.

    PAM: Sure, so, I'm going to my tip for the week is, especially if you are in the States and you do have a Facebook account, I suggest deleting your Facebook app during the election season. So that's not one of my picks, I did it a few weeks ago and it's improved my life. And then one of my pics related to that is, this is actually just kind of I found it interesting that the site itself, the page itself is interesting too of course but npr ooh. (banging) Sorry, I have chaos happening, my cat is like trying to sit on my keyboard right now.

    KENT: Nice.

    PAM: (laughs) Yeah, you can't see her but--

    MONICA: Show the cat, show the cat! Show the cat.

    PAM: I'll try and bring her on while you all are doing your picks. (laughs) But yeah, so, so yeah, So that factor article was actually was npr's most popular, is they got the most traffic that they've ever gotten. And then the (mumbles) pick is the I'm sure one of you all on the Polymer team are going to mention it, but I'll steal your pick that the Polymer summit is coming up, and you can in London, October 17th-18th, I believe are you both speaking?

    ROB: Yeah.

    PAM: That's what I thought. And registration is free and I think you'll end up on a wait list but you'll, you might have good luck. And it also has a live stream so, so check that out.

    KENT: Alright, sweet. Thank you. For me I have a couple tips and a couple of picks. So my first, my first tip is vote. Especially if you're in the United States at this time of great sadness and whatever you want to call it. I forbid you from complaining about anything if you don't vote. Yeah, that's that. For my other tip, if you know Elon Musk, I'd really appreciate an intro because I want him on the show. And I'm not joking. I want to know about what the future of--

    PAM: Does he have things to say about JavaScript? (laughs)

    KENT: Yeah, I want to ask him about JavaScript and the web and what he sees as the future in programming and the web. And also kind of like what he thinks of you know, programming being an important skill for people to know especially as we go to multiple planets. So anyway, if you know Elon Musk, let him know. I'm totally not joking.

    So yeah, and then for my picks, uh SliceJS so far, this is a link to a gist that I just wrote this morning. SliceJS, I mentioned this last week, is a project that I'm working on to do program slicing and it's coming along great. I'm super, super excited about this. If you're not familiar with program slicing, this link will take you to another link or has another link for a talk at Strange Loop about it. And it's just the coolest idea just like picture this, you can like create the version of lodash that has only the code that you will ever run like, only that code that you run in your app, which like even, even if you say, "Okay, I only want these specific functions," sometimes even in those functions, there's code that you're not running. And you could do this with React potentially or Angular. This will be a really, really difficult problem to solve. It's already been really difficult but, anyway check that out and if you want to help me out with it let me know.

    And then my other pick is ReactJS just hit 50,000 stars and they have this as celebratory post on their blog. And what's even more exciting is the awesome shirts that they have on t-spring and it's just available for one week, so you want to jump on this. I bought five, because I have a wife and three kids, so I have a onesie and two toddler shirts and I have a shirt for my wife and me. They're actually it's a really, really cool shirt, designed by the Egghead.io designer Maggie. So yeah, that's that for me. Monica, why don't we have you go next.

    MONICA: Okay, my tips and picks sort of meld into one section. So, if you are, if you always look for the emoji. If you never know what the emoji you want is and you can only think of the word and you're on a platform like Windows or Linux, it doesn't necessarily give you an emoji picker, my friend Moen makes all sorts of like emoji related libraries and she made something called emoji-cli. So it's a command line interface, where you basically write down a keyword like flowers or coffee and it gives you all of the emoji that are related to that particular keyword. So it's great to find it. Especially on Linux where I don't think there's an easy emoji picker. So that's my tip pick link situation.

    My pick for the week is a Twitter account and Electron. So I'll tell you first about Electron. Electron is an awesome little thing that's build on Chromium and it basically lets you write sort of a native app that displays HTML. So I really hate native apps, but I really like writing web pages. But I also really hate losing my tabs. This is a constant problem in my life. And Electron basically lets you take a web app that I wrote and point it so that it sits on my Mac  up bar, so that I can actually get to it. And I was really excited to learn it because I made a thing that tells me if my friend who lives in Taiwan is awake or not because that's many time zones away and I don't really, I can't do really time zone math in my head. So I made a tiny little Electron app and that was great. That's Electron.

    My other pick for the week, is a Twitter account called punchesbears. And I'm getting worried because I think now I've mentioned it in like two talks and now their part of this podcast so he might think I'm stalking him, but I'm not. So punchesbears is an amazing dude, who's writing a library for unity, which is a game making thing, but basically he makes hilarious videos. They were previously of dancing bears, to things like Shakira and they were really sassy. And now he's pivoted and he's making a game about throwing math books at hipsters. He also has videos of a game he was working on where you are a drunk person navigating a 7-11 at three in the am trying to find a burrito and you're like swinging around and running into things and you're trying to get to that burrito. These are the videos he produces. They're incredible, I don't know why you wouldn't follow him, punchesbears. That's it.

    KENT: Nice.

    MONICA: Also go vote.

    KENT: Yeah, that's great.

    ROB: Do you know if any of his games have actually been released, because I keep watching his videos and I'm like, I want to play these games and then they just and it just becomes another video.

    MONICA: None of them have, I'm like obsessively, the reason why I follow him is like I can't wait. He drops a game and I will spend all of my money on it. Like he can easily take my money. But right now he's just posting videos.

    ROB: He's a hype building machine.

    MONICA: He's, I'm in it (giggles).

    KENT: Awesome, cool. Rob, why don't you go next?

    ROB: Okay, so I got, I wrote down a whole bunch of stuff. But I'm going to go real fast. One is a link that I actually, I'm going to share which is called, Using React App Techniques at the Web Front Level with Redux, Virtual DOM and JSX. It is an awesome, super meaty, blog press by the folks over at Component Kitchen. So that's just a cool thing to read.

    I have a tip, which I just, I learned recently, cause I was on my honeymoon, had a rental car and you know when you are driving a car that you are not familiar with and you're wondering which side the gas cap is on. If you look at the dashboard and you look at the little icon that shows the gas pump, the gas light, it'll have a little arrow that points one way or the other, that arrow tells you which side the gas cap is on. Yeah I know right, no one knows that, but it's just like something-- I know right? But it totally works, it's amazing. So that's my life pro tip, I just hopefully changed a lot of lives.

    And then my picks, I got a few. There's a restaurant in Maui and I think there's one in Portland, called Slappy Cakes where you get a griddle and they give you a squeeze bottle and you have to draw your own pancake batter and draw your own pancake shapes and stuff and put coconut syrup on it, it's amazing.

    The Elon Musk biography by Ashley Vance, I'm actually reading that right now, it's an amazing book. And that Space-X Mars video yesterday. It was just like totally mind blowing.

    And the last thing is this corgi sticker that I got from Cotton Bureau. Cotton Bureau makes really good t-shirts and I got this really cool corgi sticker with my last one. I like the t-shirt, I really love the sticker. So um, so good on you Cotton Bureau for that sticker. That's it.

    KENT: Fantastic, thanks Rob, make sure if you could link those up for me that'd be helpful. Alright, Tushar.

    TUSHAR: Yeah, so I just have one link, I just saw today in the morning's news a pretty cool video by Damien Clifford about how you can optimize basically break the speed limit of JavaScript and optimize V8 and run your JavaScript at really clearly speeds. So I'll put a link on the website, I guess. So yeah, that's it pretty much. Didn't get time off for more.

    KENT: That's alright thank you so much. Alright so that's it. So just got a couple final shout outs and some links for everybody. So big thanks to our silver sponsors, thanks to React.js Program, they help you master React and React Native. Find them at jsair.io/reactjs-program. And thanks to Hired.com. They bring job offers to you. Find them at jsair.io/hired. And then if you go to jsair.io/suggest, you can suggest episodes and topics and guests for us. I definitely look at those. I get an email every single time somebody submits a form. So yeah, that'd be great. And jsair.io/feedback is similar form where you can submit feedback on the show, like a specific episode or the show in general, really appreciate that. Even if it's just to say thanks, it keeps me going. And then jsair.io/email will take you to our previous newsletters and a place where you can sign up for the newsletter, which is great.

    One other thing that I don't normally mention, but I would really appreciate, reviews on your favorite podcasting site, iTunes or wherever else you get your podcasts. Reviews are helpful, I want to help as many people as possible so if this has helped you then help other people find it. And so again, next week's show is not nailed down quite yet and so keep an eye on the website or subscribe to the calendar at jsair.io/calendar, where you can subscribe to that. And yeah, that's it. So thanks everybody for coming. This has been a great discussion. I've learned some things about web components and I think people should give them a go. That's it, thanks everyone!

    PAM: Yay!

    MONICA: Thanks for having us! Bye!

    ROB: Thanks.

    KENT: Thank you.
  `,
}
