/* eslint max-len:0 */

export default {
  title: `ESLint`,
  guests: [
    {
      name: 'Gyandeep Singh',
      twitter: 'gyandeeps',
      picks: [
        `[Alex js - Catch ins ensitive, inconsiderate writing](http://alexjs.com/)`,
        `[Proxyquire - Override dependencies during testing](https://github.com/thlorenz/proxyquire)`,
      ],
    },
    {
      name: 'Ilya Volodin',
      twitter: 'i_volodin',
      links: [
        `[ESLint bot](https://github.com/Bernardstanislas/eslint-bot)`,
        `[babel-eslint](https://github.com/babel/babel-eslint)`,
        `[eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel)`,
        `[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)`,
        `[eslint-plugin-angularjs](https://github.com/Gillespie59/eslint-plugin-angular)`,
      ],
      tips: [
      ],
      picks: [
        `[Visual Studio Code](https://code.visualstudio.com/)`,
        `[Iron Node](https://github.com/s-a/iron-node)`,
        `[babel-eslint](https://github.com/babel/babel-eslint)`,
      ],
    },
    {
      name: 'Feross Aboukhadijeh',
      twitter: 'feross',
      links: [
        `[standard](http://standardjs.com)`,
        `[WebTorrent](https://github.com/feross/webtorrent)`,
      ],
      tips: [
      ],
      picks: [
        `[standard-format](https://github.com/maxogden/standard-format) - Formats your code to \`standard\` style`,
        `[why-is-node-running](https://github.com/mafintosh/why-is-node-running) - Node is running but you don't know why?`,
        `[available](https://github.com/feross/available) - Find available npm package names – this is how the name “standard” was found!`,
      ],
    },
    {
      name: 'Jamund Ferguson',
      twitter: 'xjamundx',
      links: [
        `[Standard](http://standardjs.com/)`,
        `[eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)`,
        `[ASTExplorer.net](http://astexplorer.net/)`,
      ],
      picks: [
        `[Sawdust & Shavings EP](https://rockyvotolato.bandcamp.com/album/sawdust-shavings-ep)`,
      ],
    },
  ],
  description: `
    Let's talk about what [ESLint](http://eslint.org/) is, how it works,
    and how it can be super useful for your project.
    We'll be joined by ESLint committers and the author
    of [the Standard library](http://npm.im/standard).
  `,
  hangoutId: 'cms6et0sffpkf92nucv1nf70c74',
  youTubeId: 'sEXow0FPE3Q',
  podbeanId: 'dank2-5cc2ff',
  past: true,
  host: {
    links: [
      `[Webpack Validator](https://github.com/kentcdodds/webpack-validator)`,
      `[AST Explorer](https://astexplorer.net/)`,
    ],
    tips: [
      `Add \`validate\` script to your npm scripts`,
    ],
    picks: [
      `[GitHub Issue Templates Supported](https://github.com/dear-github/dear-github/issues/125)`,
      `[npm-run-all](https://www.npmjs.com/package/npm-run-all)`,
    ],
  },
  panelists: [
    {
      twitter: 'dan_abramov',
      picks: [
        `[Reflections on ESLint success](https://www.nczonline.net/blog/2016/02/reflections-on-eslints-success/)`,
        `[React Atelier](http://scup.github.io/atellier/material-ui-atellier/)`,
      ],
    },
    {
      twitter: 'drboolean',
      picks: [
        `[esprima](http://esprima.org/)`,
      ],
    },
  ],
  transcript: `
    KENT: And we're live with JavaScript Air. Hello, everyone. My name is Kent. C. Dodds, and I am your host. And today is Episode 10. We're base zero, so this is our 11th episode and we're going to be talking about ESLint. So yeah, really exciting times. Before we get into the show, I just want to give a shout out to the sponsors who make this show possible.
    
    So, our first sponsor is Egghead.io, and they're our premiere sponsor and they have a huge library of bite-size videos on web development. And so check them out for content on JavaScript, Angular, React, Node, Cycle.js, like all kinds of reactive awesomeness, and even Elm now. Check them out. Frontend Masters is a recorded expert-led workshop with courses on advanced JavaScript, asynchronous and functional JS, as well as lots of other great courses on the Frontend topics. And TrackJS reports bugs in your JavaScript before customers notice them, and with their telemetry timeline you have the context you need to actually fix them. Check them out and start tracking errors today at TrackJS.com. And WallabyJS is an intelligent and super-fast test runner for JavaScript that continuously runs your test. It reports code coverage and other results directly in your code editor immediately as you change your code. Check them out at WallabyJS.com And finally, Codecov. Codecov is coverage done right. Reduce technical debt by visualizing test performance and faster code review. Codecov is highly integrated with GitHub and provides browser extensions. Learn more at codecov.io. And these sponsors are awesome because they make it possible for us to do some cool stuff with the shows, so thank you, thank you to them. 

    So one thing that we're going to change about this show (and I should apologize, I have a bit of a cold, so if I sound funny, that's why) but one thing we're gonna change about the show is we normally do, like, at the end of the show we'll do questions from Twitter for those of you who are watching live. But we're actually going to actually sprinkle those throughout the show. So if you have questions at any time throughout the show, then go ahead and tweet that #jsAirQuestion and I'll be watching that and kind of pop questions in here and there as they come in. 

    Also, as a general announcement, our next show is next week. It's live at React Conf and it's going to be at the conference. And the conference is on Monday and Tuesday, and so our show is actually going to be on a Tuesday, and it will be at 12:45 pm PST. So I think that's like two, almost three hours later than normal. So, check that out at the website and add it to your calendar so you don't miss our live show at React Conf.  And actually, last week we did Forward JS, the live show at that conference. And I thought it went really, really well, so, looking forward to doing another live show at a conference this time around. 

    So now, let's actually get into the meat of our show. We have some experts about ESLint, contributors to the project and fanboys. I'm Lookin' at you, Jamund. (laughs) So, let's get an introduction to our guests and to the people that we have on the show. So, for our panelist today is Brian Lonsdorf.

    BRIAN: Hey, what's going on?

    KENT: And then for our guest, we have Feross Aboukhadijeh.

    FEROSS: Hi!

    KENT: And Gyandeep Singh.

    GYANDEEP: Hello.

    KENT: And Ilya Volodin

    ILYA: Hello, everyone.

    KENT: And Jamund Ferguson.

    JAMUND: Hi, friends!

    KENT: And again, I'm your host, Kent C. Dodds. And let's go ahead and get an intro to our guest. So, why don't we start with Ferros. Can you give us like a 30, 60 second intro to yourself? Who you are, what you do, and how you're related to ESLint.

    FEROSS: Hi, so I actually, I'm just an ESLint user, actually. So, I made JavaScript Standard style about a year ago, and that uses ESLint as the linter under the hood, and so I guess I just have a lot of experience using ESLint.

    KENT: Cool, thanks for your contributions. I know a lot of people use Standard and have benefited greatly, so cool. Gyandeep?

    GYANDEEP: I am a software engineer with Cerner, and I basically do JavaScript and database scripting at my work, and on Open-source I contribute (audio garbled) and I've been with ESLint since later 2014.

    KENT: Cool, thank you. Alright, Ilya?

    ILYA: Hi, I'm Ilya. I am a software developer at Demandware, and I've been contributing to ESLint since I think about third week it was posted on GitHub, so about two and a half years now. That's about it.

    KENT: Cool, and Jamund.

    JAMUND: Hi, so I'm Jamund. I work at PayPal. I make websites there. Aand I'm excited about ESLint and got started working on it a couple years ago because I was always trying to add custom rules to JSHint or JSLint or customize it to help my team. I've always worked for larger distributed teams, and so I've always really wanted tools that help make it easier to enforce the practices on those teams. So I started contributing to ESLint, or at least getting involved in ESLint pretty early days. And then really when ESLint started supporting ES6, I started working really hard because I really, really wanted to use ESLint with our ES6 stuff here when I started using ES6 probably about a year and a half ago, so. That's how I got involved.

    KENT: Cool, yeah. That's actually how I got started using ESLint as well was because I wanted to use ES6 and JSHint wasn't quite there. So cool, why don't we... actually, we already have a couple questions on Twitter, and I'd like to get to those, but I think it'd probably be wise, prudent for us to get a little bit of the background, backstory of ESLint. What it is, maybe some prior art, that kind of thing. Anybody feel up to the task of giving us a little bit of a history lesson there?

    ILYA: Sure, I guess I can start. So, ESLint is a static code analysis tool. It basically is there to try to catch potential errors in your JavaScript code, as well as try to enforce a specific style on your code. Prior to ESLint, there used to be JSLint, that's the oldest tool that I'm aware of at least. It was fairly opinionated and it wasn't really all that configurable. So at some point down the line, JSHint was created as a fork. It had more rules, a little bit more flexibility in terms of configuration. But ultimately, it was hard to create your own rules for it. So, that's kind of what I think sparked the idea of ESLint. About the same time ESLint showed up, there was another one that showed up, JSCS. But JSCS focused mostly on the styling only, not on potential errors. ESLint chose to try to do both. And ESLint uses slightly different approach than other linters out there. It basically use AST parsing, Esprima, in the beginning to parse out your code into abstract syntax tree and then walk the tree and invoke the rules for different nodes.

    JAMUND: Yeah, so what really makes ESLint amazing compared to the previous tools like JSHint and JSLint, which were very good, is it made it very easy to write custom rules. So, I think that's where people like me are really excited about ESLint because all of the sudden because of the using abstract syntax trees and making basically each rule is its own little JavaScript file. So a rule might just be ten lines of JavaScript. And so ESLint's really the big separator for me from the other tools is that it just made it super easy to contribute, which is why I think we have so many contributors and then you find people on the show.

    GYANDEEP: And just to add to the plugin nature of ESLint, I think we went across the board with plugin. Like, you can plugin external rules, you can plug in your own parser if you have, you can have plugin basically on other configurations, where someone defines a set of configurations saying, "Hey, this is how you should sign your code and then you can share that across the board." So, we go in different areas when it comes to plugins. Parsers, rules and configurations, things like that.

    KENT: Cool, yeah. I think that gives us some pretty good context. Now, let's talk really quickly about the history of Standard and what that is. Feross, maybe you can give us a little backstory on Standard. 

    FEROSS: So, I started this project two years ago called WebTorrent, and that's a completely different project to build the BitTorrent client for the browser. And while maintaining that I started to notice a trend of basically people sending me good pull requests on GitHub, but that had style issues. So, this is like a pull request for, the contributor clearly knows what they're doing. They made a good change to the project, and you want to accept it, but if you merge these kinds of pull requests over time into your code base, it's slowly gonna just start to look like a big confusing heap of all different sorts of styles. 

    And so, at this point I had two options: I could either reply and tell them to fix it up or just merge it and fix it up myself. And I wanted to be a good maintainer and I want it to be a friendly, welcoming project for new people to come in and contribute. And I just couldn't make myself just comment and make them do the work, because I felt like it was kind of rude to do that to a potential new contributor, someone who's just trying to be helpful, to go and send them back and make them learn how to force push to their pull request branch and all this stuff that they might not know how to do. So, the friendly thing to do is to just merge it and fix it myself. And I just got tired of that. So, I was looking for a linter. 

    And previously, I had only used JSHint and so I decided I would just make a module and put one configuration into that module and then I could require that module across all the various repos that make up the WebTorrent project. Because there was about five or ten at the time, and that way I wouldn't have to keep the config in sync between all of them. Because I knew from previous experience using JSHint and JSHint RC files, that you end up tweaking a rule here and there, and then it gets out of sync across all the different places. You use it, and anyway. So, the whole goal was to just have one package that you could require and then update. And when you updated that it would update across all the different repos that used it. And so, that's how Standard was born. 

    But the naming was actually gonna be, I actually was gonna name it something like WebTorrent Style or Feross Style or something like that, and then right before I named it I decided to do a quick search on npm for available package names, and found a couple of names that sounded cool. One was Policy, and then the other was Standard. And I was like, Standard sounds good. You know, it's a code Standard, and then right as I was going to write the readme for it, I decided to just call it JavaScript Standard Style as a joke -- literally as a joke -- and then I posted it, and then people started thinking it was real. Like, "Oh! This is a style guide I should use!" And that's actually how people started using it. It was not serious from the very beginning. 

    BRIAN: (laughs) That's the moral of the story.

    FEROSS: But anyway, thats...

    BRIAN: That's great, just claim the important names. (laughs)

    KENT: I think Feross is frozen. So, we'll just continue on. But that was an interesting backstory. I remember when Standard came out and Twitter was aflame with like, "How pretentious of this person to say that this is the one and only, end all, be all." But actually it's a really cool library and I think people should check it out. So, I'm gonna go ahead and hop into Twitter really quick for some of these questions, because we've got some solid questions with the hashtag #jsAirQuestion. So, the first one is from Ian Van Schutten, and his question is, "What do you think is the biggest challenge ESLint has yet to solve?" It solved them all, so, no, I'm just kidding. (laughs)

    ILYA: No. Well, a little bit of a background: Ian is actually also a contributor on ESLint project, so I think it's sort of a question that concerns all of us on ESLint team. And I think one of the biggest challenges for ESLint to solve right now would be auto-fixing. We do auto-fixing right now. We introduced auto-fixing as part of the 2.0 release just last week but it's very limited right now, and it doesn't really allow you to do auto-fixing on all the rules. And basically we need to figure out a better way to do that in the long run, I think.

    FEROSS: I'm back!

    KENT: Thanks for coming back. (laughs)

    FEROSS: Yeah, my--

    KENT: Next question coming from Luke Schunk. I think that's how you say your name, Luke. Tell me if I'm wrong. But his question is, "What are some new or unknown ESLint features/rules you might recommend in general and specifically for React users?"

    GYANDEEP: I think for the 2.0 which we came out with, we introduced two of the things which I remember right now is one is the initialization functionality where if you are brand new, you haven't used a linter on your project, you can just use the initialization feature of ESLint and you can (garbled audio) files, which is based on your code and it will also tell you it activate a certain rule looking at your code. I think that's pretty cool. And then the second functionality was actually I think we would be the only linter, I'm not sure, but we introduced code path analysis, so you can actually look at the back inside each for if conditions or functions, wherever you want to go. So, that analysis, you can (inaudible) using decode path analysis, which is really helpful. And especially for React, I think since most of our rules also support React functionality out of the box, but there's a plugin called ESLint plugin React which has more focused rules on React. If you combine default rules from ESLint and then also the plugin from React, you get a good balance of what you need for React.

    FEROSS: I also wanna mention that the ESLint plugin React has a lot of rules for JSX as well, so even if you're not a React user but you use some alternative like Virtual DOM or Deku or something, that you should still probably look at that ESLint plugin React, because you can make rules for indentation of JSX and stuff like that.

    JAMUND: I think for me, some of the most important rules are the Node.js rules. So things like not ever throwing... or sorry, always returning when you call back or handling errors, and if you're using callback pattern the handle callback error rule. There's also one that won't let you throw a string which is something that I've run into, (inaudible) sometimes. If you throw a string it can be very difficult to debug, so there's rules really to catch bugs and mistakes. Those are my favorite rules. The style stuff's nice. Use Standard for style, but us ESLint in addition for all the cool additional bug catching that it can do for you.

    BRIAN: Yeah, I think that's where it gets interesting. Like, we're starting to compile our JavaScript and where do you draw the line between compiling your code and just linting, you know what I mean? It's like auto-fixing, it's catching possible errors. Will it do optimizations for us? Can we do like reviews and things? Where are we gonna cross the line, do you think?

    ILYA: Well, I think we're not planning on doing optimizations. We'll leave that to something like Babel or tools like that. But, you're right. In order for us to lint the file, we need to basically parse the entire script and turn it into a AST. And that is a sort of a pre-step for compilation; if you don't have valid JavaScript code we just won't be able to parse it. So, it is sort of like compilation. However, we do everything as a static analysis tool, so we can't track your variables very well throughout the code. We can't work on different modules at the same time. So, it's not quite the same. And I'm sure somebody is going to come up with a full compiler for JavaScript at some point. But ESLint isn't trying to do that. We're just trying to provide a tool that would make it easier for you to find potential errors. Just do this sort of sanity check before you even run the script.

    KENT: So actually, that brings up an interesting topic. So, last night I was talking with somebody. I'm in the middle of trying to maybe write a library or a tool that would validate a webpack configuration because that can be easy to get wrong, just from like a spelling error or something. And so, was thinking of maybe writing an ESLint plugin to do that rather than like, what my original idea was just like, "Pass me your configuration and I'll log warnings to the console," but maybe instead using ESLint to do linting of your webpack config. So anyway, somebody in the Gitter chat on webpack mentioned to me that, I was kind of comparing the two and I said, "Well, if I do it with you know, 'give me your config and I'll log to the console for you.'" Then I'd have the benefit of runtime of like actually what the values are rather than trying to statically determine what the values are. But he mentioned that ESLint can do some sort of runtime checks. Is that true, and how does that work?

    ILYA: We cannot do runtime checks, but we do use a package called ES Scope, E Scope, I guess, which will track the variable life cycle and try to basically provide us a reference for a given scope within a given function or within a given file. So, we can do some magic that looks like it might be runtime, but it's not runtime. It's still static analysis. It's just a little more complex static analysis than what you're used to. The new feature that was mentioned before, the static pass analysis that we introduced in 2.0 makes it even more so. We can actually track the branching of the code. We can verify that every single if statement or every single branch of a switch or an if statement returns a specific value that you'll want and do for loop comparisons. So, it's pretty powerful, and it can sort of seem like it's a runtime analysis but it's still a static analysis.

    GYANDEEP: I think on that point, it's just very close that you can draw a line between Flow or Typescript versus what we are doing here. Because in Flow or Typescript, I haven't personally used it, but I think you can know that okay, a number, an integer is coming in or a string is coming in into a function in scope. In regular JavaScript, we just know that there are two variables in the scope. So all the Escope can tell us is how many variables are present in the scope and how many variables are writeable, like who are writing to those variables and things like that. So, I don't know if you can say that it's like partially runtime, you can know what kind of variables are in scope at that functional level, but you can't determine whether it's integers trying. So, that's where full runtime picture you need to have, whether it's string, a number to go along and perfectly...

    KENT: You bring up Flow and Typescript. There's actually a question on Twitter that touches on that. The question is, "Does ESLint support supersets of JavaScript such as Typescript, JSX, and Flow?" I think we all know that it supports JSX. We talked about that. But, can you touch on Typescript and Flow?

    GYANDEEP: Yeah, we actually, recently we started an experimental, it's still in experimental stage right now, but if you go inside ESLint's ecosystem, you would see a Typescript ESLint parser. So, basically since I talked about how you can switch parser based on your needs. Like, Babel has their own parser, and then we are experimenting with Typescript parser so that that Typescript parser can parse the code and then ESLint can consume it and then do static analysis on it. So, it's still under experimental flag, so feel free to go there and then contribute if you find some bugs. But I would try it. Use it on your project. If you find something, log an issue. We are still working on it. But yes, we have started some work on that. But, we haven't talked anything about Flow to be very specific. We started with Typescript right now.

    KENT: Cool, okay. Sweet. Then another question from Twitter, "Why do you think ESLint is important for all of the JS developers out there and specifically for newbies?" I think this is a great question.

    JAMUND: I'm happy to comment here. What I've seen, working on large teams and distributive teams and big projects and all that, is that having consistent style in your application is really important, so it makes it easier to context switch between different files. It's not necessarily so important what this style is as long as it's consistent across files. Which is why I think tools like Standard are getting very popular, as well ESLint, because they just say, "Hey, everyone just use this one style." And the more projects and the more people using that style, it's actually easy for you to switch through those different projects and very quickly get a better understanding of what's happening. So for that side, it makes it easier. And then the other side is just catching simple mistakes. New users or new developers, as well as experienced developers, have all this trouble making bugs. That's what we do. That's kind of like the biggest thing we make is bugs it seems like sometimes as developers. And so, I think that tools like ESLint that help reduce the number of bugs that are created and especially help you learn from past mistakes are really helpful for all levels of developers.

    KENT: I think it allows you to avoid having to write tests or write as many tests. That's kind of like the benefit you get from a typed system is you don't have to write as many tests. By doing ESLint or linting in general, you don't need to write as many tests.

    BRIAN: Yeah, I think thats--

    JAMUND: Yeah, you just like only have to write four tests. That's it.

    BRIAN: (laughs) More rules. It's interesting, where'd I cross the line with types? We were just talking about how types are kind of like a white list where tests are like a black list. So you can say, "This type only allows these things to get into my app." Whereas tests saying just like, "Well, we know about this situation. We're gonna try to test this situation." ESLint makes a rule, so I guess that's closer to a type and a test, but I don't think it's any substitute.

    JAMUND: I wanna know about their, this notion, and I'm wanna hear what people think about it. Writing a custom linting rule is actually more valuable than writing in unit test.

    ILYA: I think those two are related, in all honesty. I think you need both. Unit test, the primary goal of a unit test isn't even to verify that your code is correct; it's to allow you sanity of refactoring your code any way you want and making sure that the output still matches what you had before. ESLint is there to catch some basic mistakes that you're gonna make. Some of them are more complicated than the others, but still it's basic air handling, let's say.

    JAMUND: I like this idea, because what I think though is that if you can write an ESLint rule that prevents a certain type of bug from reentering your code, I think that will be extremely powerful. So, you can write the unit test to make sure you don't put that bug back in that one place, but you can actually write a rule that prevents that bug from entering in any place in your application. There's huge power in that. I think it magnifies your power. Other than writing a unit test in one place, ESLint rule protects your whole application.

    ILYA: I agree it's very powerful. I just don't think it's a substitution for unit test. I think you should have both.

    JAMUND: Sure, sure. But I'll say this: if you find a bug and you can write a lint rule that prevents you from reentering that bug anywhere in your app, it's actually gonna be more valuable if you can prevent that from entering anywhere than just writing a unit test to prevent it from returning to that one place.

    KENT: Yeah, I could definitely agree with that, but I think that there are certain things that you simply couldn't write ESLint plugins for, but maybe my ESLint foo is not quite up to par.

    JAMUND: You're very limited in what you can write plugins for, so I agree with you there. But I think at some level, it's interesting to think of it that way as actually preventing bugs on a higher level than maybe unit testing.

    KENT: Cool. Sweet, so if anybody watching live has some more questions, we've used up, actually, no there is one more question in Twitter, so feel free to ask some more. The one other question that we have is from Ian Van Schutten, and he asked "What are your favorite ESLint plugins?"

    (silence)

    We all just use raw ESLint here. Nobody here uses plugins. They're garbage. No, just kidding. (laughs)

    ILYA: Actually, I don't really use that many plugins myself, but React, as was mentioned, is one of the most popular plugins out there. There's also a plugin for Angular, ESLint plugin Angular, which is also pretty popular. And there's also a... if you're using new features of ES7 and beyond, you'll probably have to use Babel ESLint parser. And they also have a plugin ESLint plugin Babel that overrides certain core rules to work with new features. And by the way, that question about Flow, you can actually use Flow with ESLint if you're using Babel ESLint parser. It will support parsing, Flow.

    JAMUND: I'll just throw out there--(garbled audio)

    BRIAN: Go for it man. (laughs) You're the guest.

    JAMUND: Oh, thanks so much. You can talk next. So, I think there's a really cool plugin out there. It's called ESLint plugin, I think it's called Import. And it has all these cool rules that check, for example, if you're importing a module if that file actually exists. We've run into this a lot, and I don't know if any people have seen this issue where you might rename a file from lowercase to uppercase and get might get confused. And three or four times this happened because we have a bunch of modules and we've sort of been wholesale porting them over from ES5 to ES6 and changing things and renaming things and it's been a lot of change. And so the ESLint plugin import has some great rules to help make sure that the file that you think you're bringing in to your project actually exists and is spelled correctly, so that's helpful. And then I'm working on a plugin about Promises, but I don't know Promises very well, so if you have any tips you can go to ESLint Plugin Promise, and see if you can make suggestions for making that better since I'm trying to learn more about Promise.

    KENT: Cool, that's a good way to learn about technology is write ESLint rules for it. (laughs)

    JAMUND: (laughs) Yeah, I don't know how this works, but I'm going to make sure it's written in the same way. Maybe that's not such a good idea.

    BRIAN: Is the idea that you wanna make sure an error is caught and so it's being returned, the value's always returned, you think?

    JAMUND: Yeah, so basically I read some great stuff about Promises and I thought, I don't know what I'm doing, so I should probably have a rule to make sure I'm doing it following these best practices.

    BRIAN: Right on. So, I had a quick question just to throw it out there. You can only really enforce ESLint in certain situations, like if you don't run it then nobody's gonna actually use it. So, how does everybody actually plug this into their projects where it always runs like a pre-commit hook or CI or TestSuite.

    ILYA: I think the most common way is CI. You use whatever task framework you want, Gulp, Grunt, they all have plugins for ESLint, npm Script, easy enough to create your own and have CI fail if the ESLint doesn't pass. Pre-commit hook would be another way. There's actually also a project, I don't remember what it's called right now, but it's a GitHub bot that will run ESLint on the pull request and put in line comments for all the errors that were found, so that's another way. But, I think CI is the most common way of running ESLint, probably.

    KENT: Dude, get us a link to that bot, man. That sounds awesome! (laughs)

    ILYA: I'll try to find it.

    BRIAN: I wanna point out, my favorite is the pre-commit hook definitely, because it saves me from every commit I had to commence, and then it's like the original commit and then the amendment linted, because I get kicked out (garbled audio). So you don't have to--

    ILYA: If you're using one of the code analysis tools, I don't know, there's a bunch of them out there nowadays, trying to think of a name of at least one of them.

    KENT: Code Climate.

    ILYA: Yeah, Code Climate, and so on. A majority of them has a module or support for ESLint as well, so if you're using that in your (mumbles) tree it will also notify you about the ESLint errors.

    KENT: Cool, so maybe we could talk a little bit about writing plugins, because I think--

    JAMUND: Well, we can.

    KENT: Yeah.

    JAMUND: (garbled audio) on mute. I thought maybe Dan or someone mentioned this, but the ESLint webpack loader thing is the greatest! It is the greatest because what I've found is that it will just help you prevent the errors so fast. Because as soon as you're working inline, if you have the webpack loader set up for ESLint, it'll just show right in your terminal you have a bunch of errors. And what I found on our team is that people would get mad when they write a bunch of code, and then they'd go and commit and then they'd run into this error. They go and try to push and they get those linting errors. But it turns out that it's much more exciting and much nicer if you find about them earlier. So, I would recommend integrate into your IDE, which I do WebStorm, works pretty well, or if you're using webpack, the webpack loader for ESLint, it's just amazing because it helps people discover the errors way earlier, and they get less cranky when they're running into the errors that they can solve them earlier.

    GYANDEEP: Yeah, in our company, me with one of my colleagues, we co-authored a test environment where it's constantly running lint for your code changes, as soon as you made code changes while you're doing the development. So you already have that story in front of your face what's going on as you make changes and as you save the code. And it keeps on addressing this as you save files on it. And then once you are finally ready, you're done, it'll give you the most up to date report with all the errors. So you won't, if you're looking at the default, you won't miss any headers, and then you can commit the code if everything is good. So, before even CI catches it, you should be able to know what's going on as you code. So that was one of the experimental things we did. It's working good.

    JAMUND: Has anyone used ESLint --fix as like a pre-commit hook so they can just write whatever dirty code they want and it'll just get fixed to the Standard at the end?

    KENT: Yeah, actually... I don't like writing semicolons, but for a while in a project, semicolons were required. And so, I use Vim, and every time ESLint would run after I saved a file, it would add --fix and it would add all the semicolons for me. I loved that.

    DAN: Wait, are you saying that you can actually tell ESLint to fix some issues? It's the first time I learned about it. (laughs)

    ILYA: Yeah, it's a fairly new feature, but yes. It's been in ESLint for a little while.

    KENT: Yeah, why don't you talk about how that works a little bit and if I wanted to write my own rule and have it automatically be fixed, how would I do that?

    (silence)

    GYANDEEP: Alright, so nobody's taking this. I'll give you a quick outline of how it works. So, basically the fix smart logic for each rule is built into the rule. So when you're writing your rule, which if you write the rule in a regular way, then you just have to export another function which is like a fixed function, when you do the fix. And since right now with 2.0, we only support whitespace fixes and not the other kind of fixes. So, we have some helper functions which you can use during your fix. And the functions are like, "hey, replace this space with two spaces" or "remove anything on this range from two, three." So you can use all these helper functions using all the range information from (mumbles) and then you can replace anything on the range information. So, if you want to, let's say for example if you wanted to place a semicolon with nothing, just a blank space, you can just, tell inside your fixed function, you can tell ESLint to "remove any text from this range to this range," so it'll just wipe out that. Or you can say, "replace that information with something else," like if you want to put a question mark just for example. It'll replace the semicolon with a question mark.

    KENT: I'm gonna add a fix on a custom plugin that replaces all semicolons with "I don't need this" (laughs) with a comment that's just like, "Who needs semicolons? This is garbage." (laughs)

    GYANDEEP: You can do that. (laughs)

    JAMUND: You'll have no friends if you do that, Kent. Don't do that, I don't recommend it. 

    (laughter)

    JAMUND: So, just two quick things to add and maybe add a little bit more to comment. Most of the fixes right now are just around spacing. So, there's semicolons and then there's spacing. Those are really the main things that are automatically fixed right now. There's a lot of interest, and if you look at the ESLint issues I think a number of people are looking at branching out auto-fixing to additional things. I think there's probably a lot of worry that core rule will break, and I think it's really important that your linter doesn't break your code. I think that would be probably a good feature of a linter. So, I don't know. Ilya, can you comment a little bit on that? I know there's some good discussion happening right now on the issues about how far should fixing go.

    ILYA: Well, ideally we would probably wanna take it all the way or almost all the way. There's no clear way to fix certain issues, or at least there's no one way to fix certain issues. But for the most part, we would love to be able to fix everything. There are a few specific issues right now preventing us from doing that. First of all, ESLint was designed from the start to have each rule be completely isolated. Rules don't know about each other, they don't know about anything. The rules that are in the core ultimately are exactly the same as the rules you will find in any plugins. We don't have any special functionality for the core rules. So, they don't know about each other, and they can't share information currently. 

    So for example if you were fixing something that needs... one of the examples actually, today it happened, somebody was trying to fix object declarations to basically put everything in a quote. But because we have another rule that deals with quotes, and you specify which types of quotes you wanna use for that rule, the rule that the person was trying to fix didn't have any knowledge of what type of quotes he would need to use in order to fix your code. So, unfortunately it's just something we don't have right now. We're looking into trying to figure out a way to do it without kind of binding the rules together and creating inter-dependencies. The other thing is that a lot of rules we are trying to keep ESLint fairly performant. I don't think it's a necessity for a linter to be incredibly fast, but I still think it's important to keep it within a reasonable amount of time. So we chose to do auto-fixing as a single pass only. We don't rerun ESLint after we've fixed some issues. Because of that, we can't really be 100% sure that the fix we just committed isn't going to screw up some other rule. And we're also trying to figure out some sort of way of doing it. Not really sure what it is right now.

    KENT: Cool, so we've got another question on Twitter. I think now's a good time to hit questions on Twitter, So if anybody's watching live, they'd like to ask a question, now is the time #jsAirQuestion hashtag. So, this is from Yenis and it is, "What is the best learning curve for ESLint. I mean, Dan just discovered new functionality. Is there a list of all the cool stuff?"

    ILYA: Yeah we try to keep very clear documentation. Honestly, I think that's one of the things that sets us apart from a lot of open source projects. For basically every release, we will always have all of the release notes with every single commit with a link to an issue that spawned the commit posted on our website. We'll also, for every major release, we'll also add the migration guide, because between the major releases we do change a lot of things. So a migration guide should help you upgrade to a newer version. And also, for pretty much any release, we'll also have a paragraph up top describing major changes within every release. So, our blog on the website is probably the best way to keep track of new features and get an idea of what's new and available.

    KENT: Well yeah, I think actually ESLint is really good at documentation and releases, like having a full on blog for releases that kind of describes different things and having migration paths. That has been really helpful, and I think a really good way to manage that, an open source project as big and serious as ESLint is. I think we're kind of coming down on our time here. But is there anything else that the panelists or anyone else wanted to mention before we wrap up our show?

    GYANDEEP: I think I wanna give a shout out to Nicholas, who's the man behind the... man behind the great library and tool. I think he did a great job in starting this and then laying down the foundation, which is pretty solid. And that's how everyone whoever came in, everything was pretty much predefined that this how you go about doing things, and then we just put it on top of it, so, thank you. (laughs)

    JAMUND: Yeah, shoutout to Nicholas. (applause)

    KENT: Yay!

    ILYA: And I totally agree. The way I actually got into ESLint is I had exactly the same idea before I found ESLint. And I started writing something, you know, parsing code into AST and so on, so forth. Never really finished it, but then I saw ESLint and I looked at the code and I was like, "Wow, this is so much better and cleaner than what I was trying to accomplish." He built a very solid foundation for us to be able to build on top of.

    JAMUND: Yeah, I just wanna say this: if you're not using a linter right now, I really encourage you to ESLint. And if you don't have a style guide that your project uses, I would definitely pick one of the off the shelf style guides, something like Airbnb, or Standard, and use that in your project and use that across all your projects, because you'll find that having consistent code decreases a lot of difficulties when jumping into a different file or adding contributors to your project. So I strongly recommend, just use a linter use a style guide, and then if you get really curious, start writing custom rules, because it can be a lot of nerdy fun.

    KENT: Cool. A couple of things I wanted to mention. If you're particular about your rules, I'm a little particular, probably irrationally so, but, yeah, Jamund is nodding his head. He can testify that. (laughs) But so make your own config. So, ESLint is incredibly pluggable, and so you can create your own rules and then publish them to npm as a config and then install them in other projects. So, I have plenty of open source projects that use the same ESLint config. It's similar to what Feross was trying to accomplish and accomplished with Standard, except it's like you don't have your own binary to run on your code and stuff. But anyway yeah, so make your own config if you're particular. And then also, if you want to write custom rules, I think we should shoutout to AST Explorer. It's fantastic, a really, really good way to learn or to experiment and write rules for ESLint. So, anything else anybody wants to mention?

    ILYA: I would encourage you that if you run into a problem where ESLint doesn't seem to solve it, search around npm. There are literally thousands of different plugin packages out there. Some of them only have one rule, some of them have ten, but there are a lot of custom rules available on npm, and custom configs too. There's a good chance that somebody already created what you're looking for anyway.

    KENT: Cool. I feel like there was one other thing that I was going to mention before we start wrapping things up, but, if I think of it, I'll bring it up. So, let's go ahead and we'll move into our tips and picks for the show. So Brian, why don't you go ahead and go first?

    BRIAN: Don't really have much other than yeah, the Esprima stuff, you should really check out parsing your own JavaScript AST just for fun. It's a really great project. I'll throw it in the link.

    KENT: Cool, and Dan. Why don't you go next?

    DAN: So, I have some picks. Just two picks. So, the first pick is the blog post by the author, the original author of ESLint about the ESLint success, and how it was a grass roots effort where he didn't go give any kind of talks about it and people just started up with it because it was good and not pretentious. So it's a really great post. I suggest you read it. And my second pick is something that I just saw today, which is called React Idea, it's like a sandbox for your components if you use React you can try that out as a way of sharing your components using your app and having like all of them in one place where you can toggle different props and see how they look. So, it's pretty awesome.

    KENT: Cool, thanks. And thanks for coming onto the show. Appreciate it. So, for me, I have a tip. I started adding a validate script in my npm scripts on my projects, and so now I can tell people okay, to get set up you just clone the repo run npm install, and then run npm run validate, and this will run linting and the build, and the test, and everything that you just need to make sure that at least what you've got from GitHub or whatever, from the repo is correct before you start adding stuff and making changes, because if validate fails then there's something wrong. We need to look at it. So, that's my tip. And then for my picks, GitHub issue template support. So, this is a link to an issue that talks about how GitHub supports issue templates, and it maybe possibly supported issue templates a long time ago. So, anyway check that out. Why don't we go next with Jamund?

    JAMUND: Hi, so for my pick there's this guitar singer/songwriter guy Rocky Votolato from Seattle. I really love him, he just came out with a new AP. There's a link to it there. And Feross actually asked me to do his picks as well since he got stuck off the internet. And he's linking, his picks were Standard Format, it's a tool by Max Ogden to basically format your code to standard style. It's sort of like ESLint --fix, but I think it actually works more comprehensively to fix even more errors, and that's built into standard. And then the links to why is Node running, I don't know what it is. And also to one other thing. There's a package on npm, called Available that will tell you which package names are available. So, if you need a clever name, you can use that to find what's available.

    KENT: Cool, cool. Alright, Gyandeep. (silence) I think you're muted. And I think it's, you're probably muted just because you're boycotting the fact that I said your name wrong. (laughs) Sorry about that.

    GYANDEEP: (laughs) Alright, for my tips. I recommend using Share JS for cross-platform build processors. So, using the Make File concept cross platform from Windows to whatever, DOS or whatever. And my tips are to help you in testing, check out Proxyquire. It helps to override dependencies. I use it pretty much on all of my nodejs projects. Pretty cool. And something off the shelf I found was AlexJS, that's my second pick. If you write a lot of blogs or essays or something, it helps you catch possible offenses of race, gender, unequal phrases in your blogs. So, that's a pretty nice tool. I haven't used it, but it'll detect any possible offenses that you have in your blog.

    KENT: That's awesome! Cool, thanks for that. And Ilya?

    ILYA: So, I have three quick picks. First one is Visual Studio Code. Basically Visual Studio Code has a built in debugger for Node, and it really helps when you're writing Node.js applications, include ESLint. That's what I use. Having debugger built into your IDE is invaluable. If you don't really want that, there's a project called Iron Node, which is a standalone node debugger, which is also helpful. And the last thing that I wanna kind of do a shout out is for Babel ESLint. It's been mentioned, but it's a parser for ESLint or a compatible parser for ESLint that will allow you to lint any JavaScript style that is supported by Babel.

    KENT: Well, thank you. I actually wanted to add one more pick. This thing is amazing, I love it. It's called NPM Run All, and it basically allows you to run multiple npm scripts in parallel. And so, if you have, like the Validate script that I talked about earlier, building and linting and running code coverage, or tests in general, those are three things that can run at the same time, and really speed things up. And so, I use npm run all to run all those things at the same time and it's awesome. 

    Okay, I think that's our show. So yeah, I'll just go ahead and close this up. So, remember next week is Live at React Conf. And it's on Tuesday, not Wednesday, and it's at 12:45 PM PST, So, almost three hours later than normal. And just a quick shout out to our silver sponsors, O'reilly Fluent Conf and Office Zero, new silver sponsor. And then check out suggest.javascriptair.com if you have suggestions for the show and guests and feedback.javascriptair.com to give us feedback for this show. Tell us what you thought about, like tweeting during the show, like, handling the Twitter questions during the show. Experimenting with that. And, yeah I think that's it. So, thanks everybody for coming on the show. I really appreciate it, and really sorry. Shout out to Feross. I think there was some technical difficulties and he was booted. So, I'm super, super sorry about that. But Standard is awesome, go check it out. And thanks everybody for coming. We'll see you all next week! 
  `,
}


