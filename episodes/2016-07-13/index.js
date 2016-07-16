export default {
  title: `Automated Accessibility Testing with aXe-core`,
  guests: [
    {
      name: 'Dylan Barrell',
      twitter: 'dylanbarrell',
      picks: [
        `[Deque University](https://dequeuniversity.com/) `,
        `[React](https://facebook.github.io/react/) & [Redux](http://redux.js.org/)`,
        `[React Axe](https://github.com/dylanb/react-axe) - [React A11y](https://github.com/reactjs/react-a11y)`,
        `[Crew Seekers](https://www.crewseekers.net/)`,
      ],
    },
    {
      name: 'Marcy Sutton',
      twitter: 'marcysutton',
      links: [
        `[axe-core](https://www.npmjs.com/package/axe-core) node module`,
      ],
      tips: [
        `Get away from the computer and GO OUTSIDE.`,
      ],
      picks: [
        `I'm speaking about aXe at [npm camp](http://npm.camp/)`,
        `I'm speaking at [React Rally](http://www.reactrally.com/)`,
        `Installing the [Chrome Accessibility Inspector](https://gist.github.com/marcysutton/0a42f815878c159517a55e6652e3b23a)`,
      ],
    },
    {
      name: 'Wilco Fiers',
      twitter: 'wilcofiers',
      picks: [
        `[The WAI Perspectives](https://www.w3.org/WAI/perspectives/)`,
        `Looking for help developing new rules for a11y testing`,
      ],
    },
  ],
  description: `
     The Deque Labs team is doing some really cool stuff for automated accessibility testing, bringing their years of accessibility expertise to mainstream web developers. The open source axe-core framework, written entirely in JavaScript, supports a bunch of integrations: unit testing, Selenium Webdriver, Chrome and Firefox extensions, Grunt, React and more. Get the low-down on how to integrate accessibility testing into your workflow with the core team from Deque.
  `,
  hangoutId: 'c86bqmgr1bk53qec2b4qqfui8u0',
  youTubeId: 'KSUBrO48k5M',
  podbeanId: 'a6g53-60f165',
  shortUrl: 'http://jsair.io/auto-a11y',
  host: {
    tips: [
      `Don’t spend money on Pokemon Go 😀`,
    ],
    picks: [
      `[Contributing to React JS](https://www.youtube.com/watch?v=wUpPsEcGsg8)`,
      `[eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)`,
    ],
  },
  panelists: [
    {
      twitter: 'drboolean',
      links: [
        `[Clarity Conf: Baking Accessibility In](http://bradfrost.com/blog/post/clarity-conf-baking-accessibility-in/) by [Brad Frost](https://twitter.com/brad_frost)`,
      ],
      tips: [
        `Get familiar with your screenreader.`,
      ],
      picks: [
        `[Gershom Bazerman: Representing Applicatives](http://comonad.com/reader/2013/representing-applicatives/)`,
        `[Alissa Pajer: Category Theory: An Abstraction for Anything](https://www.infoq.com/presentations/category-theory)`,
        `[Practically Functional Programming Workshop](http://forwardjs.com#practically-functional-programming)`,
      ],
    },
  ],
  transcript: `
		KENT: And we're live with JavaScript Air. Hello, everyone! My name is Kent C. Dodds, and I am your host for this JavaScript broadcast podcast that we love so much called JavaScript Air, all about JavaScript and the web platform. Today, we're gonna be talking about accessibility, something that we all really care about. And in particular, we're gonna be talking about testing accessibility in an automated fashion. 

		And so, before we get into that and introducing our guests and panel, I'd just like to give a shout out to our sponsors who make many of the cool things about the show possible. First, Egghead.io is the show's premier sponsor and they have a huge library of bite sized web development training videos. Check them out for content on JavaScript, Angular, React, Node, and more. 

		Frontend Masters is a recorded expert-led workshop with courses on Advanced JavaScript, Asynchronous and Functional JS, as well as lots of other great courses on Frontend topics. 

		And TrackJS reports bugs in your JavaScript before customers notice them, and with their telemetry timeline, you'll have the context to actually fix them. Check them out and start tracking JavaScript errors today at TrackJS.com. 

		And WebStorm is a powerful JavaScript IDE. It makes developers more productive with its super intelligent code assistance for JavaScript, Node, Angular and React, and integration with lots of different tools. Learn more at JetBrains.com/WebStorm. 

		And Trading Technologies, a new Gold Sponsor! Trading Technologies is the world's leading provider of electronic trading systems for professional derivatives traders and is rebuilding their entire front end in JavaScript. Go help them build a world class solution. So, they're hiring. 

		Awesome! So, just as a reminder, because this is a live show, we get the opportunity to interact with our live viewers. And so if you have a question during the show, tweet them at #jsAirQuestion, and we'll cover those at the end of the show. And, next week, because this is a weekly show, I can tell you, next week we're gonna have an awesome show called Publishing JavaScript Packages. And we have a stellar lineup of guests: James Kyle, Henry Zhu, John-David Dalton, and Stephan Bonnemann. So, Bonnemann, I better learn how to pronounce that before the show. But, yeah, it's gonna be awesome. I'm really, really looking forward to this show. These people have developed some really interesting ways to publish JavaScript packages. Cool! So, as always, follow us on Twitter, Facebook, and Google Plus to keep up with the latest. 

		Let's go ahead and get started with the introductions. So, for our panel today we have Brian Lonsdorf.

		BRIAN: Hey, how's it going?

		KENT: And me, of course, your host, Kent C. Dodds. And for our guests, we have Marcy Sutton.

		MARCY: Hello.

		KENT: And Dylan Barrell.

		DYLAN: Hi, I'm Dylan.

		KENT: And Wilco Fiers.

		WILCO: Howdy.

		KENT: Did I say your last name right, Wilco?

		WILCO: Nope, not at all. (laughter) Wilco Fiers.

		DYLAN: Fiers, as in "fierce."

		KENT: Ah, perfect. (laughter) Great, well, there it is, Wilco Fiers. Let's go ahead and give a little intro to each of you, just so we can know you a little bit. We'll start off with Marcy.

		MARCY: Hi, I'm Marcy Sutton. I am a senior front-end engineer at Deque, where I work on browser extensions, tools, basically integrating accessibility testing into development workflows. It's my dream job. And I'm really happy to be both working on that, and to be here talking about it.

		KENT: That's great. I love hearing that that's your dream job. That makes me happy.

		MARCY: Yeah. It's awesome. (laughs)

		KENT: I hope we all can find our dream job. That's great. (laughs) Alright, Dylan.


		DYLAN: Yeah, hi, I'm Dylan Barrell. I'm Chief Empathy officer at Deque. That's not my official title, but that's what I do, (laughter) kind of understanding customer problems and trying to solve them, and specifically related to accessibility testing.

		KENT: Great. And Wilco.

		WILCO: Hi. My name is Wilco Fiers. I am, like Marcy, senior accessibility engineer at Deque Systems. And I work on a lot of things at the W3C, most notably the Auto-WCAG community group.

		KENT: Cool, cool. Alright, so let's go ahead and get into our topic for today. So, we're going to be talking about accessibility and automating testing, but I think it's really important for us to make this show accessible for people, so let's make sure that we have a good baseline of what we're talking about when we say accessibility. And also, why we even care about this subject. Anybody want to take that up?

		DYLAN: Yeah, so what accessibility really is is about, you know, our mission is digital equality. And it's about making the same experience available to people with all sorts of abilities. So, you know, you can take that from a very technical aspect of accessibility, like, "Can I actually interact with this button? Can I click the button if I'm using a mouse? Can I touch it with a finger? And if I'm using a screen reader, can I execute the button with a screen reader and a keyboard?" All the way through to the more user experience end of that: is that a good experience? Right, so, even if I can technically interact with it, is it a good experience for me to be able to do that with all the different abilities? So, that's kind of very high level, what accessibility is about. It's about making sure everyone can get access to the functionality.

		KENT: Does that actually, just curious, does that kind of translate also into the type of language that you use on your website? Like the being inclusive with the phrases that you use and make sure that you're not accidentally demeaning anybody in particular? I don't know if I phrased that question well.

		MARCY: Absolutely. I can take that one. Yeah, so part... there's all of these different abilities that we have to think about, but something that I've heard mentioned a lot lately is the idea that we should use plain language in our marketing copy, on our websites, so that we're bringing people along who might have learning disabilities or just trouble really understanding the message underneath your marketing copy. (laughs) That might not be that opaque. And so there's definitely a part of accessibility where we need to make things approachable, and intuitive, and easy to understand. So, that's definitely a part of it.

		KENT: Cool.

		DYLAN: Yeah, and there's different types of disabilities as well. Sorry, Kent, for interrupting. There's disabilities that have to do with a particular physical ability, and then there's cognitive disabilities. And that's kind of what you're addressing a little bit there, with language and understanding, is cognitive disabilities. But also, there are things we put into our products that, when we don't realize what we're doing, that are cultural in nature, too. And so it also, if you take it to that degree, can deal with cultural references. 

		You know, when I first moved to the States, I went out to lunch with my colleagues, and they were all talking about the Soup Nazi, and I had no idea what the Soup Nazi was because I'd never seen "Seinfeld." And that's a cultural reference that a lot of people in the U.S. take for granted that other people may not understand. And we don't realize how much of that actually makes its way into our product. And so cognitive impairment is one example of something that we have to think about.

		BRIAN: I had a question. Is it possible to automate test any of that? Like, checking for plain copy, or cognitive disabilities?

		WILCO: So, yeah, certainly parts of it. Obviously, language is very tricky to analyze and test automatically. That's a lot about content and understanding the context that something exists in. But there are certain parts of that, that relates to understanding what the content is about, that you can automate. Things like, are there headings on this page? That is a huge part of understanding what... making a page understandable. There's certainly parts of that that you can automate.

		BRIAN: Right on.

		MARCY: That actually makes me think of... something I saw recently was, like a job listing linter, and it would tell you if you had offensive language in your job postings. And so I think, I'm wondering, I haven't looked at technically how they accomplish that, but I wonder if they have a bank of phrases that they check against? So, it seems possible, but it's such a big bank of, (laughter) you know, infinite phrases and things to check against, so it would be a challenging task, for sure.

		WILCO: Yeah, so most of accessibility, when you look at it, often it's being talked about as a problem for people with visual disabilities, especially screen readers are a very common scenario. But accessibility really has a lot of aspects to it. It covers a very broad range of people, like Dylan mentioned, there's all sorts of different people with different limitations and different abilities, so all of that falls within accessibility, really.

		DYLAN: Yeah. And I mean, I think that one of the points that's important to make, we, we're talking today about aXe-core, it's an automated testing library. Right, that's one of the things we're talking about, but it's also important to underline the fact that automation is only gonna get you so far. And you can't expect automation to do everything for you. At the end of the day, accessibility is about usability too. And to some degree, for some of these questions, there's no actual correct answer. And you just have to realize that there is that gray area, that fuzzy area, that has to be done through a human. 

		An example is an image, right? You took an image of me at the beginning and you tweeted it out, and you could've created an alt attribute on that image when you tweeted it out to Twitter, and you might have said something along the lines of, I don't know, "Bald guy with funky looking headphones," right? And that would be an accurate description of that image, but somebody else might look at that image and interpret it in a different way and decide that what's behind me in that painting in this lobby of this hotel that I'm in is more interesting than the bald guy with the headphones. (laughter) And in a particular context, you know, one of those descriptions might be more accurate than the other, but at the end of the day, it's also, to some degree, a judgment call on the person writing that alt attribute as to what is the correct alt attribute. And that part of accessibility, and there's lots of analogs to that, with what it overlaps with usability that are just not automatable at all. You know?

		WILCO: Sure, but something that isn't in question about that is that an image needs some sort of alternative. It will either need a description, if that image provides information, or, if it doesn't provide information, you need to explicitly say, "hey, this image..." no information there, so you leave the alt attribute empty and that way assistive technologies like screen readers or when you're using a braille keyboard, they can ignore this piece of code there, this image. There's parts of that you can absolutely automate, but, yeah.

		BRIAN: That's something I had a follow up question on. You mentioned that with the screen reader, you know, that is where everybody kind of pushes accessibility these days, so if it works with a screen reader, you're good. And I wonder how true that is because, I mean, it does seem to capture... just for a little context, I've seen, you know, people with limited mobility have extra tools to be able to kind of scan the page, but it almost kind of builds on top of a screen reader in that way. I'm curious how far you can go just by making your screen reader work, or if you have to do a lot of other work. So there wasn't really a question there. (laughter) I'm just wondering if you do your screen reader, is that good? Is that good enough?

		DYLAN: That's awesome. So there's like these layers, right? And we always say if you're beginning out as a developer, the best thing you could do, the way to get the biggest bang for your buck is literally unplug your mouse, right? I know there's difficulty these days with touch screens, 'cause you can always then touch the screen sometimes even if you don't have a mouse. But if you just take that concept of get rid of the mouse and the touch and now just try to use the keyboard with your application, you get so far because, at the end of the day, whether it's a voice recognition piece of technology, whether it's a one switch, whether it's actually a screen reader, those all, to some degree, interact with the application and they emulate a keyboard, or they are, in fact, using a keyboard. 

		Now, screen reader is a little different in that what it actually does is it intercepts, it sits there as an interception layer above the keyboard, so when you've got a screen reader turned on, the keyboard commands go to that screen reader before they go to the application below it. So, just doing it with the screen reader on will sometimes make things function that won't function when the keyboard is turned... when you're just using the keyboard, and the inverse of that, right? So sometimes, if your JavaScript event handlers are registered but you don't have the correct roles associated with those elements, then the screen reader will block that keyboard event and it won't get through to the actual JavaScript event handler. So, you do have to test with a keyboard without the screen reader and a keyboard with the screen reader. 

		But, once again, that's also, you know, it's not gonna cover the cognitive disabilities. It's not gonna cover some of the things that are composite multiple disabilities. So, just like with anything else, blind people, or visual disabilities, we're all somewhere on the spectrum. You know, when I was 18 years old, I had 20/10 vision, right? Now that I'm a little older, my vision is not quite 20/10 anymore. And so everybody, in every aspect, is somewhere on the spectrum of some sort of distribution. And then there are people who have multiple disabilities. So I may, for example, have 20/200 vision, which is legally blind, but I still may actually mostly use the screen, and a keyboard, and a mouse. But then, every now and again, I may have to use a screen reader because it's just, you know, that particular application or functionality is just too difficult for me to use with a normal screen and a mouse. So you do have to think about things like proximity of information, use of color, that are not screen reader specific. So, it gets you very far, but it doesn't take you all the way.

		KENT: So I think we've pretty well established that accessibility is important, testing for it is really difficult, and the traditional automated testing... or manual testing of it is really, really time consuming and cumbersome. And so what can we do to automate some of this so that we not only continue to care about accessibility and ensure that we're keeping our apps accessible, but also we have time to work on features in our apps?

		WILCO: Yeah, so ideally we get some features done, right? That's ultimately what we wanna do. This accessibility thing, it's interesting, and it's good to be working on, but ultimately we need to deliver. We need to get things done. And so, some things that are, some solutions that are out there are things like aXe-core which we've developed. It's a library that you can use in your automated testing, and it'll check certain things that can be automatically tested. It'll check the things like does your image have a text alternative? Do your colors have sufficient contrast? Are your ARIA roles correct, and all the attributes that need to go with that, are they present? The things like that you can get done really quite easily by putting in a tool like aXe-core into your automated testing.

		MARCY: Yeah, I think it's important to mention that there is no substitute for human testing, However, by using checklists and automated tooling, you can get coverage for, what, 60, 70 percent of all of these low hanging fruit use cases. So maybe you typed in an attribute to use ARIA, but you put ARIA-role instead of role, or role of image, and spelled it incorrectly. I would totally miss that if I was looking at the element inspector in the browser. But if I run an automated checker, it will detect whether I spelled it right, whether, if I'm using a widget role in ARIA, which is a way to tell a screen reader the role of your HTML if you're not using a button element, for some reason, you can indicate that an element is a button using ARIA. But the automated tooling will help you just by being sort of an extra set of really good eyes to check things that you may have missed. So I think it's really a handy tool to get you most of the way there. And for people who aren't doing any accessibility at all, it's a great start, because it gives you a checklist, basically. It'll give you a list of things that you could fix, which, for a lot of organizations, is the place that they're starting. So I think it provides a lot of value.

		BRIAN: I had a question about how do I go about this? Do I need to have a Karma runner, or does it work with any testing framework? Or how would I, as a normal JS developer, throw this into my stack?

		MARCY: Well you could start with the browser extensions. So, there's a Chrome extension and a Firefox extension. And there's a number of these for accessibility. The aXe extensions are free and you can install them, and that will allow you to run an audit on any web page. It could be running on local host, it could be out on the web somewhere, and it will run the set of rules in aXe-core using the browser extension. And that's a tool that I use quite frequently. You can also take aXe-core, pull it down as an npm module, and run the same calls in your unit tests. There's an aXe web driver JS library you could use to run the same audits as the browser extension in Selenium WebDriver, or Protractor, or whatever your tools are. So, there's multiple ways you could do it. People tend to start with the browser extensions and then integrate it into their testing workflow.

		BRIAN: Right on.

		KENT: Interesting. You mentioned you can run it with unit tests. I'm really kind of curious what the API looks like, because in my unit tests often I'm not... I guess sometimes I actually generate HTML, like an HTML string. Do I just hand that HTML string off to this module? Is that how this works?

		DYLAN: Yeah, let me take that. So we... (laughs) We, in order to do proper accessibility testing for all the things that we can test, we have about 50 something test in aXe-core, we actually need a proper browser. And what I mean by that is, we actually need the CSS to be applied to the HTML in order to be able to do things like look at what colors are being applied, if colors are being applied, whether or not the element is, in fact, being displayed at this point in time, those sorts of things. So there's a bunch of things for which we require proper CSS being applied to the HTML. And therefore, with aXecore, we actually require that fixture to be applied to the DOM. So, normally what I've seen is, if you've got unit tests and you're just testing the HTML without attaching to the DOM, then in order to integrate aXecore, what you would do is you just append that to the body or to some special fixture DIV inside the browser that you're running inside, and then run the test against that, and then just clean that up afterwards. But most of the time, you'll find if you're doing testing, especially if you're doing things like testing, keyboard functionality, maybe focus functionality, making sure your focus goes into the right places, if you're doing all that sort of functional testing already, then it has to be attached to the DOM at that point. And so then all you need to do is actually include the aXecore library in your fixture and call one function and it will do the test on that particular piece of the DOM.

		KENT: I see, so, in general you would see this being used with either WebDriver of course, as you mentioned, but also Karma for the unit test side of things. So in your unit test you would say, "Okay, stick this into the DOM with all the CSS it needs, whatever, and then run aXe on that fixture in the DOM."

		DYLAN: Correct. Yeah, absolutely. Yeah, so you can run it with, we're totally agnostic. You could run it with Jasmine, Mocha, qunit, any of those sorts of testing frameworks. We run with Capybara, with Selenium, with any of those sort of browser automation tools. And we run inside any browser that's IE9 and above. So, you can literally, the whole idea behind aXe-core is that you use it inside the infrastructure that you already have, you don't need anything new. And the key for that is because, you know, Deque's been doing a lot of automation since 1999. We wrote our very first automation tool to automate testing of Windows applications. 

		And one of the things we've learned over all this time is if you have a separate set of tests, automation tests for accessibility, that's an extra set of things you have to maintain. And as your application is changing, and you're breaking tests because tests are just breaking because stuff is moving around and stuff, you have to maintain your functionality so it's easy to do that. If you have to maintain a separate set of tests for accessibility, it's just another one of those things that gets in the way of accessibility being done. So, best practice, in our opinion, is integrate accessibility testing into the tests you're already doing for your functionality and it will just be such, much more low friction way of getting it done.

		BRIAN: So, does it work on mobile as well as it works on desktop? Or does it catch different things that you might be needing to catch on mobile?

		WILCO: So, what is it you're trying to catch on mobile? So, aXe is a JavaScript library, so it will run in mobile web browsers. You can just inject it that way.

		BRIAN: Yeah, I guess, I've experienced using a screen reader on mobile and using it on the desktop, and I felt like they were very different experiences. And, at least for my novice ability, I'm not a power user by any means, (laughs) so I'm looking for if there's anything that could help me, nudge me in the right direction or catch with touch events, or things like that.

		WILCO: So your HTML requirements for mobile are the same. You're still giving that image its text alternative, you're still using the same ARIA. The differences you'll see mostly have to do with those just being different screen readers. Every screen reader has their own user base and they have their own preferences, and things that fit more smoothly into the platform that they're building on. So, you'll get a lot of differences from that. But, as for mobile, the accessibility requirements for mobile are not that different than they are from the desktop.

		BRIAN: That's good to hear. (laughs)

		WILCO: You'll see differences, obviously, if you're... If you have different layouts for mobile than you have for your desktop, then you'll have different accessibility tests that need to run on both of those. But, the requirements for that are still the same. It's still, indicate your language, your images, all that sort of stuff.

		DYLAN: And so, yeah, and what Wilco is talking about there is kind of HTML based UIs, but obviously the requirements for Android native apps or for iOS native apps are totally different. We are actually working on some libraries for that right now. They're not ready for public consumption. But, actually what you touched on a little bit, Wilco and I have been working over the past couple of months on something called Accessibility Supported. And so we are gonna look at, there are differences, as Wilco pointed out. So, for example, in iOS, tables that use what's called header-id association don't work on iOS, 'cause Apple has just decided they don't wanna implement those APIs. So that means if you utilize those APIs, it'll work on some platforms and won't work on others. And there are other nuances like that, of things that just don't work on this platform, but do on the other.

		And if you have to support all the platforms, kind of what aXe tries to do is test across all the platforms for stuff that works everywhere. And if it doesn't work everywhere, we'll try to flag it. But what we also realize is that some organizations, when they're creating apps safe for internal use, they can control that environment, and they may be able to prescribe JAWS and Windows, right? So, for those organizations, it would be good if they could turn on additional features that they can use and allow those to pass through the aXe-core tests correctly, and be tested for correctly as well. So, we are looking at, in a future version of aXe-core, building support for that sort of thing into the library so you can actually say, "I'm interested in JAWS and Windows, and I'm interested in Android, and that's it, I don't care about iOS."

		BRIAN: That would be really helpful.

		MARCY: Yeah, that would be cool. Something else I saw from Apple recently was they, so WebDriver in Safari previously required an extension. And I saw with, I guess WWDC just happened, and they mentioned that they're adding native support to Safari for WebDriver, and I saw somebody asked, I think on Twitter, about Selenium for the iOS simulator, and Apple's reply was "not yet." (laughs) So, we can't programmatically run the iOS simulator to check for accessibility. I mean, you could go in and manually check things in a simulator. And I think there's some opportunity there, but I think we don't quite have the tools yet to programmatically open either a mobile device. I think maybe you could use something like BrowserStack, and if we could integrate with that, I think there's some potential, but it's still pretty new territory.

		KENT: Yeah, I would expect using something like Sauce Labs to run your tests on different devices, 'cause they, if I understand it correctly, they actually have physical devices that they run your tests on, which is wild. But, yeah, that seems like a fairly good solution. And I've used Sauce Labs before, they're pretty good.

		DYLAN: Yep, they are.

		KENT: Cool, so what are some of the other challenges that come with automating testing for accessibility? What makes your jobs harder? (laughter) Why would I want to use something like aXe-core instead of just rolling my own thing?

		MARCY: I could take that one. Something, I mean, Dylan just hinted at something. He's keeping track of table APIs in iOS. That's a bug that's been open with Apple for a while. And he happens to know that that one has sat open for years and is probably not going to get fixed. So that knowledge is baked into the rules that you're running. I have taken a stab at writing my own rules, but years before I joined an accessibility team, and it's hard. There's a lot of nuance, there's a lot of platform differences that we try to consider in when we're writing these rules. So having 16+ years of knowledge baked into it is something that you're not gonna earn overnight. And there are other tools and other libraries with similar companies, and they also have a lot of experience. So I think it's worth looking at what's out there before you bite that off. 

		An example was Vorlon.js, which is Microsoft's remote debugging tool. They were starting to write their own accessibility rules, but it's not a core competency. They're really focusing on the remote debugging piece. And so they actually integrated aXe as the rule set to run accessibility tests in their remote debugger. And I think that was a successful partnership because it allowed them to focus on what they're good at and they could pull in an API to run accessibility tests.

		DYLAN: Yeah.

		MARCY: That'd be my advice.

		DYLAN: Yeah, absolutely.

		WILCO: So, I've been working at the W3C to work on developing general accessibility rules. And it is a very difficult problem to work on. So really there's two things when you look at accessibility testing. You can automate your application, the accessibility testing of your application. You can do that, and that makes a lot of sense to do. If you're running some sort of React application, you know that, what your components are supposed to do, you know what certain events are supposed to trigger, and what you can do is you can automatically test. You can write, for your application, a test to make sure that the ARIA that goes with that event is actually updated correctly. So, you can do that. 

		What's a lot more difficult is to write accessibility tests that are true for every application, because you don't really know the context of those applications. If you take that example of a heading, if you want to make sure that everything that is a heading is actually marked up as a heading, if you know what the text on that heading is going to be, then it's fairly straightforward to figure out if that was done the correct way. If that isn't the case, if you have to, based on the information that's there, you have to guess which elements are supposed to be headings, that's a lot trickier.

		BRIAN: For those of you who aren't watching the video, Wilco's screen got really dark right when he started saying that, for dramatic effect. 

		(laughter)

		DYLAN: Exactly, yeah.

		WILCO: Yeah, I'm not used to being at the office this late, this is a lot of sunlight right in my face.

		(laughter)

		MARCY: Yeah, Wilco...

		KENT: Well thanks for sticking around for us.

		WILCO: I'm going to reposition myself.

		BRIAN: It was beautiful. You started talking about the headers and how you couldn't automate that, and it was like a spotlight on you. 

		(laughter)

		WILCO: Yeah, beautiful, right?

		MARCY: Are you in Retract, Wilco?

		WILCO: Yes? No I'm not. Ah! This is horrible. (laughter)

		KENT: Well it looks fine from here. Yeah, you're alright.

		DYLAN: It looks good.

		WILCO: We'll go with this.

		KENT: Dylan, did you have something you wanted to mention as well? 

		DYLAN: Yeah, I just wanted to mention a couple of things. So first of all, what Wilco is talking about is one thing, but there's actually, now, just for example, take the accessible name calculation that's part of the ARIA spec, for example. Implementing that is quite complicated. And so if you wanted to go out and write your own rules, you'd have to go out and figure out all the specs to figure out how is an accessible name calculated so that you could actually do that properly. Now we obviously have code that already does that sort of thing. So, you'd be reinventing the wheel there, for one thing. 

		For the second thing, there are bugs. So, for example, in Firefox, for whatever reason, when they use ARIA tags as part of an image map, then Firefox sets those to display none automatically, even if they're actually active on the screen, whereas Chrome doesn't. So you'd kind of have to figure out, over time, the differences between the browsers in terms of things, weird things like that that I don't even think are specified specifically by HTML. And then you'd have to re-implement all the rules, stuff that Wilco was talking about. 

		But then, just to touch on, also, something else that Wilco mentioned in terms of writing your own tests for your own components. We definitely recommend that if you're doing accessibility properly, try to implement tests for the accessibility requirements if you can. If you can do that, you're really kind of at the high end of the maturity scale for accessibility, and you should be trying to do that. The problem is for people starting out, it's not a good place to start out because one of the biggest questions we get after we train people in accessibility, and we have three-day training courses, in person and online training courses, this, that, and the other, a lot of times we're training people in basics of accessibility, and they'll know how to turn on a screen reader, and they'll know how to do some of the keyboard navigation with a screen reader. And then one of the first questions that comes back is, "Okay, I can hear my application. It sounds like this. It's saying x, y, z. Is that the way it's supposed to sound?"

		In other words, the first thing that developers, they come back with is they don't understand how screen reader users use screen readers, whether what they're, in fact, hearing is in fact, what a screen reader user would ideally expect to hear. So that's kind of a big hurdle that takes time to get over. And in order to write your automated tests, such as the testing the right thing, you need to have answers to those questions. So, what aXe does, it allows you to get out of the box 30 percent of (mumbles) testing for free. And then if you want to put your effort into writing something yourself, do what Wilco talked about and write your own automated tests that are gonna test your specific application for its specific accessibility requirements. Because that's where you're gonna get the biggest bang for your buck in terms of moving the needle further and not reinventing the wheel, so...

		MARCY: Yeah, I think you could write some unit tests for your own components. You can integrate aXe in places I think it is important to have test coverage for accessibility in your application. That way, if you add a feature, like, say you add a component and you want it to work with the keyboard. If you have unit tests, you should be able to integrate some accessibility into your unit tests that way, like if you're testing for mouse stuff, you should be testing for keyboard stuff. And that way, if somebody breaks it, they will get the red light on top of their desk saying they broke the build. Or, that would be pretty cool if it did. (laughter) But that way, people understand that they broke something. It's sort of a contract to show, "this is how this thing should work." 

		We did a lot of that in the Angular material framework. We would have unit tests for components. And those included things like, "Can I operate this component with the keyboard? Does it set the right ARIA attributes?" And we do some checking of ARIA attributes, but you would have to write unit tests that, open a component with the keyboard, and then test that it opened correctly. So, I think that you still have some responsibility to write tests for your own application. Integrating with something like aXe will help you get a bigger, or a broader set of tests to run. But it is something that you have to think about your own application, "How is it supposed to work with a keyboard?"

		KENT: So I think we've established that aXe-core is like the jQuery of automated accessibility testing, where it covers, it makes it so I don't have to think about the differences across different platforms. And actually, even beyond the jQuery, because I don't actually have to do a whole lot to actually run tests on things, I just have to call into the API, right? So, as far as I understand it, you have your normal tests, you generate your HTML and your CSS, and then you say, "Okay, aXe-core, audit this."

		WILCO: Yep.

		KENT: That's pretty much the whole story there.

		WILCO: It's as straight forward as that. That is where you start. You run aXe on every page in every state that you have that page in. And, if you have zero violations, you've done an amazing job.

		BRIAN: Nice. And so you're saying I can do something like click expand my autocomplete, run aXe, close my autocomplete, run aXe, and it just kind of takes care of it on each state?

		DYLAN: Yep.

		BRIAN: Nice.

		MARCY: Yeah, I think it would still be on you to set up the bindings to actually open it, (laughs) so you'd still have to open it and get it into that state, ideally, with the keyboard command. You can stub keyboard events and patch the right key code and make sure that you're opening it with space bar or the enter key, closing it with the escape key, that kind of stuff. And then, once it's in that state, you could run the tests and make sure that if there's ARIA that was supposed to be set, that it's correct. But, I think there's some custom stuff that you could add in to make sure that, like I said, that you have keyboard support and you can even open the component (laughs) the keyboard.

		BRIAN: Yeah, I was gonna mention, just real quick, that I found it extremely difficult to do things like capture focus when you're in a tab, focus when you're in a modal, or work with fancy JavaScript components in an accessible way. And so, hopefully, if I can open my modal, I can just run aXe and it'll just tell me... well, would that actually catch that? If I opened up a modal and I ran aXe, would it tab behind the modal for me, or do I have to kind of catch those fancy cases? (laughter)

		WILCO: So, dynamic content testing is still very, very tricky. You can imagine that if aXe were to try things like move the focus around the page just to see what happens, the page could, anything could happen.

		BRIAN: Ah, I see. Yeah.

		WILCO: You don't want the thing that you're testing to change as you're testing it. (laughs) So, that's really kind of tricky. It will definitely be something that we're thinking about. There are ways around that, and as we develop aXe, and really as automated accessibility testing develops, we'll get more mature. And we'll get smarter, and we'll find new ways to integrate with that. So, right now I don't think there's any automated tool out there, so for those kind of cases, write your own unit tests. You can write a unit test and figure out what's the most, what's the element that currently has focus?

		MARCY: Yeah, I will add that that particular problem is tricky for everybody. (laughter) Focus-traps... We're really trying to get native support for stuff like Inert, the dialog element in Chrome, which kind of happened but didn't really, because the spec wasn't really clear. We're trying to expose some primitives in the community to push on browsers to give us those tools, because that problem is really, really hard. But I think there is some opportunity to write some tests to just check that focus is even being caught in the right place. And so, that's an area for opportunity, I think, is to write some tests that really make that easier, and so we're not chasing our tails trying to solve that over and over.

		BRIAN: Yeah, I can't tell you how many people have cracked open jQuery UI to "steal" their tab focus.

		MARCY: The tabable. The tabable selector.

		BRIAN: Tabable, yeah. (laughter)

		MARCY: I don't want all of jQuery UI, I just want the tabable selector. (laughs) Ya, everyone does that. (laughs)

		KENT: Dylan, did you have something, additionally, you wanted to share?

		DYLAN: Yeah, I just wanted to say there are some libraries out there that, or let's call those products out there, none of which are free, as far as I know, that do try to do some kind of automated testing of ARIA widgets and keyboard interactions. I don't know that they, I can't recommend any of them because I don't know how well they work, but there are some commercial tools that do try to do that. And there is some scope for doing that. We've thought about doing that, as Wilco said, we've thought about doing that sort of stuff. We're an open source project, so if there's anyone out there that has a small idea of how they could integrate that sort of testing, into aXe-core, come on guys. 

		MARCY: (laughs) 

		KENT: Go open source! 

		DYLAN: Yeah, come on. Go open source. (laughs)

		KENT: Awesome. So, we're coming pretty close on our time, we have about 13 minutes left. Is there anything else in particular you wanted to cover before I go to, I think we have one question on Twitter right now, but we might have more. Anything else that you wanted to talk about?

		DYLAN: Well, just one thing, and that is if you don't know anything about accessibility and this is the first time you've heard about it, just go and download one of the aXe extensions and just go and run it against your apps, and use that. There's like a More Info link inside there, and you click on that More Info link and it takes you to the dequeuniversity.com website, and you can start to learn about what are the sorts of disabilities that are affected by this sort of defect, why should I care, and a lot of links up to information about how to fix it. And also more information about standards that it relates to. So, even if you're just learning for the first time, maybe, about accessibility, the aXe-core extension can serve as something that can help you learn more about that. 

		Hopefully a couple of you will take that and become experts because the other thing I would like to say is there's a lot of demand for accessibility out there. A lot of big banks, big insurance companies, airlines, are looking for a lot of people with this knowledge. So, if you wanna up your salary, become an expert in accessibility. At this point in time, it's a good career move to become an expert. Marcy, for example, we had to sell her for lots of money to a company recently for a period of time because she's an Angular expert, and she's an accessibility expert. And you'd be surprised how much money this company is willing to pay for her time. There is a lot of opportunity and a lot of money if you're an expert in the JavaScript side of things and in the accessibility side of things, so...

		WILCO: Did you just pimp out Marcy, Dylan?

		(laughter)

		DYLAN: We did, we pimped out Marcy. Sorry. 

		(laughter)

		MARCY: Inappropriate. No, I should mention that it's also just a really rewarding thing to do. I do it because I care about making the web more quality and making it accessible to more people, and so it's a good career move. It's also just really fulfilling. So, that's why I do it. There is a lot of demand. That particular client needs more help, I think, but it's really cool to see accessibility in modern applications. I think it can get tricky, and so they do need help with things.

		KENT: And I feel like, it seems like there's a lot of really low hanging fruit with accessibility. And if you just learn, and lots of that stuff is just really simple, like just put an ARIA role on that thing and suddenly it's much better. So, even if you have a pretty rudimentary understanding of accessibility, you can start to help people make their apps more accessible. And over time, you'll learn more and eventually you'll be at Marcy Sutton level, and... (laughs)

		DYLAN: It takes time, but... 

		(laughter)

		WILCO: I think that it's worth emphasizing that, this is really kind of important, the number one rule of ARIA is not to use ARIA unless you can really not avoid it. 

		(laughter)

		MARCY: Yeah, that's true. It can get messy.

		WILCO: Because you are opening yourself up for a very complicated debugging, and testing over and over and over again. If you can use a native, use a native.

		KENT: Yeah, if it looks like a button, make it a button.

		WILCO: Just use a button, yeah!

		MARCY: Yeah, yeah.

		KENT: Cool, so we've got two questions now on Twitter, but Brian had something really quick before we get into that.

		BRIAN: Well, alright, before we run out of time, I was just wanting to know if you had any tips. I know it's already hard enough to be like, I wanna test my whole app. How can you convince your boss, or whatever, that we need to spend some time on accessibility. Is there any quick one-liners I can say? I work at Salesforce, so they're all about it, but for others, and stuff.

		MARCY: I would frame it as a quality problem, and Dylan used the word defect. If you frame it as quality, just like security or performance, I think it's something that's really important. It can expand your customer base, you're making your app more accessible to actually get more customers. And there's also the legal risk. So, if you're a big enough company, there is a lot of growing legal risk, so it's important to make sure that you're thinking about it proactively so that you don't get sued for it.

		DYLAN: Yeah, I mean, just one-liners: 20 percent of people in the U.S. have some sort of disability. And so if you are in any way creating an application that's targeted at, say, older people, you're automatically just going to make it a lot easier to use, insofar as to have choices between which apps and which sites they use, they're gonna gravitate towards the ones that are easier to use. So, I think that there's a huge opportunity there to talk about how this allows you to go after that particular market a lot better. 

		And then there are also temporary disabilities. I mean, it's just about usability. There are temporary disabilities. Just a while back, I fell off a boat and hurt my leg and I was hobbling around on crutches through the airports and all sorts of stuff, and when you're hobbling around on crutches, it's really difficult to get two hands to use stuff. And so whether you're a mother with a baby in your arm and you can only use one hand, or whatever it is, we all have these sort of temporary disabilities where we can't always use the mode of interaction that we'd like to use. And so if you start thinking about the applications from an accessibility perspective, what it does is it opens your eyes to these ways we can improve the app for everyone. And I think that's an opportunity too, so...

		KENT: Yeah, actually that's, I feel like that's a great note to close on is that really, accessibility improves things for everybody.

		WILCO: Yes, it very much does.

		KENT: Yeah, I have actually a temporary accessibility issue, my keyboard, for some reason, stopped working.

		DYLAN: Well, there you go.

		KENT: Just in the middle of the show, so if I'm not typing anything, that's why. 

		(laughter) 

		KENT: So I'm going mouse right now, but (laughs) yeah, let's go ahead and jump into our Twitter questions. We have two from Rob Fentress.

		DYLAN: Hi Rob. (laughs)

		KENT: The first question is: "I know Tennon has an integration with WordPress. Any effort to do this with aXe-core?"

		DYLAN: Yeah, well, we don't have an integration right now. Amanda Rush, who works in the WordPress group, promised us she was gonna work on something. So there's some stuff going on there, but it's...

		WILCO: Wink, wink. Nudge, nudge.

		DYLAN: Yeah, wink, wink, nudge, nudge. (laughs) But no, we don't have an out of the box integration right now. Great opportunity for someone who wants to get involved in accessibility to do that.

		KENT: Awesome. And next question is: "Any tutorials on using Gulp with aXe-core? Documentation on that seems sparse."

		DYLAN: There's nothing special about Gulp. We do have a grunt plug-in, but all the grunt plug-in does is kind of take the WebDriver JS stuff and automate that. So, you can use, just like I said, the whole principle behind aXe-core is use it with whatever infrastructure you already have. So if you're using Gulp for your unit tests and for your running of Selenium tests, and you integrate aXe into those, it'll just work with Gulp. And so, most of the time, I don't see any need for a specific integration with Gulp.

		MARCY: There used to be one. I think the author abandoned it. I might rescue it and see if there's a demo, so stay tuned. I think there might be some opportunity to talk more about it, but at this time there is an abandoned repository, but that is it. (laughs)

		KENT: Cool, alright. Sounds like opportunities. Awesome! So, yeah, let's see, I think we're gonna go ahead and jump into our tips and picks. So, yeah, this has been an awesome show, and I see a couple awesome links, tips and picks in here. So let's go ahead and we'll have Brian go, and then I'll give some tips and picks, and then we'll let our guests go.

		BRIAN: Alright, oh you know what? I just found this super cool, I'm gonna throw it in as a link. It's Brad Frost's notes on this awesome talk I saw by Cordelia on clarity. (laughs) Yeah, she's talking about how you have to like, you can't push the blueberries into the muffin afterwards, was the message, right? You have to kind of bake it in to the accessibility, and I think with test-driven development and all that, it all kind of ties together with this episode, beautiful. 

		But my tips were try to get familiar with your screen reader. I've tried time and time again to actually understand that you're within a context and you bump up levels and it takes a lot of practice to understand those things. So I think it's cool to try it out when it's just bright out, or late at night, or something. 

		And then I have three picks, which is, thank you, just talking about representable functors and how you can transform a value into a function that can wrap that value. It's really interesting stuff about the (mumbles) dilemma, if you're interested. I was just watching that all week, so I put some links there. (laughs) Totally unrelated.

		KENT: Wow, that's great. Great stuff. This is why I love your picks, because they're often functional programming related and...

		BRIAN: If you care about category theory... (laughs) Yeah, just throw that in there. 

		KENT: Okay, so for my tips and picks, my first tip is don't spend money, actual physical money on PokÇmon Go. 

		(laughter)

		KENT: I think it's fine to play. It's a blast. I love playing it, but, it's a game guys, (laughs) so y'all shouldn't be spending money on PokÇmon Go. It's great, but, yeah, find something else to spend your money on. And your time, spend your time with your family and stuff. But I play, and I think it's fun!

		MARCY: And don't PokÇmon Go and drive, people!

		(laughter)

		MARCY: Or motorcycle, or bicycle, or even the walking, questionable. (laughs)

		KENT: Yeah, that's true. They show you that loading screen for a reason, (laughs) Dylan's got it out right now. (laughter) Nice. It had to be mentioned in the show, of course. 

		So my first pick is this video interview sort of thing that I did with Ben Alpert yesterday called Contributing to React. I just asked him about what is the process involved with contributing to the React code base. It was really informative, so I recommend you check it out if you're interested in contributing to React. And also, I found this plug-in for ESLint called eslint-plugin-jsx-a11y, so it's an accessibility plug-in, statically analyzes your JSX to determine if you're breaking any accessibility rules. So, on top of aXe, you could also use this so that you are authoring stuff in an accessible way. So, cool stuff.

		WILCO: Cool.

		KENT: Alright, Dylan, why don't we have you go next?

		DYLAN: Okay, I don't know exactly what tips and picks are, so I'll just say all of you guys can sort out the categories with your category theory. So, dequeuniversity.com, I mentioned it earlier, it's linked to from within the aXe. It's a great resource. The reason I'm mentioning it is if you're a person with a disability, we are currently giving you a free subscription to all the courses on dequeuniversity.com. So, or if you know somebody who has a disability, go there, sign up for it. It's an awesome resource. The other thing I'd just like to... I'm loving React and Redux, I love it. 

		Also, if you're into React and you're looking for React related accessibility, there's two. There's the one that I wrote called React aXe, it only works if you use createclass. If you're not using createclass, it's not going to work, in which case you should use probably React-a11y, which will work if you're only using Create Elements. So those are two React related things.
		
		Then, in the real world, seeing as we're talking about the real world, my wife just finished a trip where she sailed across the Atlantic. And she went to crewseekers.net, and signed up there, and was able to find a ship and find a crew, and do it all for free. So, if you're looking to get out into the real world, get away from the technology, maybe sail across the Atlantic, for free, go to crewseekers.net.

		KENT: Wow! That sounds awesome. It almost sounds like a scam, honestly. 

		(laughter)

		DYLAN: It does, ya, it does. There's another one that, I can't remember the name of it, but cruiseseekers is actually pretty legit, actually.

		BRIAN: It's like that old Scientology, like, whatever boat that they had. 

		(laughter)

		KENT: Cool, cool. Marcy, we'll have you go next.

		MARCY: Sure, that sounds really amazing, Dylan. My first tip, my programming tip is to go outside. (laughs) So, it's kind of related, because mainly I will hammer on a problem and just go around and around and around, and the second I leave my desk and go do something else, boom, it comes to me. And I...

		KENT: You know what you can do outside, of course. Play PokÇmon Go. 

		(laughter)

		MARCY: No, you shouldn't! You shouldn't because you... I get screen overload, personally. I need to focus my eyes at a different distance. I need to think about other things that are not related. We're in a bit of a bubble. (laughs) I've moved very close to the woods to try and get out of that bubble. And for me, personally, I get so much more energy by switching my work off, closing the door, taking a break. And so I think it's important to diversify how you spend your time. So, that's my biggest programming tip. (laughs) What else did I, I wrote them down.

		KENT: Great.

		MARCY: My other tips, I'm speaking at npm camp coming up, that's in Oakland, and I think tickets are still available. But I'm going to be speaking about testing with aXe, so if you're curious about how exactly your unit tests should be set up, or how to integrate with Selenium WebDriver, I'm gonna talk about all of that stuff. And I'm sure once that's recorded, the video will be a great resource. 

		And then my other, I don't know if it's a pick or a tip, but I wrote a GitHub gist this morning about enabling the Chrome accessibility inspector by Alice Boxhall at Google. It is, it was in Chrome Canary previously, now it's in Chrome Stable, but if you enable this experiment, you can go and inspect accessibility nodes for information like see if your input field has a correct label, and how it was even computed. There was an accessibility extension that did something similar, but extensions don't have the same API access as an internal experiment. And so this Chrome accessibility experiment is a really valuable tool. There's a similar one on Safari, but I have a gist with images that shows you exactly how to enable it. So, those are my picks and tips.

		KENT: That's awesome. On the subject of speaking, you'll also be in Utah, wooh! Speaking at React Rally, so come to Utah!

		BRIAN: Oh, yeah, I'll see you there Marcy. I listened to your podcast the other day with Jameson.

		MARCY: Oh, nice, yeah I'm really excited for that one. It's gonna be totally different than npm camp. It's similar to a talk I'm doing at CascadiaJS, but probably, I have a bit of a legacy of doing wild things at CascadiaJS now, so those two should be a lot of fun.

		KENT: Alright, awesome. Cool, and Wilco.

		WILCO: Alright, so as my pick I would like to point out the WAI Perspectives. It's a resource developed by the Web Accessibility Initiative. It's this group inside of the W3C. They have an awesome set of videos that show you how different people with different abilities use the web, so you can find that at w3.org/wai/perspectives. I love that resource. 

		Secondly, I just want to really mention that the Auto-WCAG community group, which I'm chairing, we are looking for people to help us develop new rules for automated accessibility testing. So if you're interested in that and you are kind of a WCAG nerd, come help us out, it's a lot of fun. 

		And, I think maybe, as a last tip, you wanna catch those Pidgeys. Really, you catch them, you evolve them, that's the way to go. You catch Pidgeys, you evolve them. That's the way to level up, fast. 

		(laughter)

		KENT: Nice, alright. Cool, so that's our show, so I'll just go ahead and give a couple of closing announcements. We do have two Silver Sponsors we're grateful for: React.js Program to master the React.js ecosystem and Sentry for cross-platform crash-reporting. If you want to give us suggestions on episode topics or guests, then go to jsair.io/suggest. This episode was actually a suggestion. I think Marcy suggested it, so thanks! This is a good episode. And then feedback, if you wanna give us feedback on this episode or the show in general, go to jsair.io/feedback. And if you want to sign up for our newsletter, we send a newsletter out every week with highlights from the show and that kind of thing, go to jsair.io/email. 

		And with that, oh yeah, and remember next week we're talking about publishing JavaScript packages with James Kyle, Henry Zhu, John-David Dalton, and Stephan Bonnemann, yep. It's gonna be an awesome show, I'm really looking forward to it. And, as always, follow us on Twitter, Facebook, and Google Plus to keep up with the latest. And that's it. So, thanks everyone for coming, this has been a great show!

		MARCY: Thanks so much. This was awesome.

		WILCO: Cheers.

		KENT: See you around.

		WILCO: Bye everyone.

		MARCY: Bye! 
	`,
}
