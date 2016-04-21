/* eslint max-len:0 */

export default {
  title: `Live at React Conf`,
  time: '**12:45** PM **PST**',
  guests: [
    {
      name: 'React Conf',
      twitter: 'reactjs',
      squareImage: true,
    },
  ],
  description: `
    We'll be live at [React Conf](http://conf.reactjs.com/) talking with speakers and others about what's going on at the conference. This is your chance to get an insiders look at the conference if you didn't get a chance to snatch a ticket.

    Guests:

- [Ben Alpert](https://twitter.com/soprano) - React: What Lies Ahead
- [Andres Suarez](https://twitter.com/zertosh) - Nuclide hacks for React Native development
- [Erik Schlegel](https://twitter.com/erikschlegel1) and [Eric Rozell](https://twitter.com/ericrozell) - ReactNative UWP
- [Eric Florenzano](https://twitter.com/ericflo) - React, Meet Virtual Reality
- [Helena Milosevic](https://twitter.com/SFHelenaSF) - Demystifying Tech Recruiting
- [Isaac Salier-Hellendag](https://twitter.com/hellendag) - Rich Text Editing with React
- [Scott Kyle](https://twitter.com/appden) - A New Way to Persist & Query Data in React Native
- [Jamison Dance](https://twitter.com/jergason) - Rethinking All Practices: Building Applications in Elm
- [Maria Hollweck](https://twitter.com/maria_hollweck) - React Native: Lessons Learned After Migrating an App from iOS to Android
  `,
  hangoutId: 'c6kdirtpl5i76am6mlhuqis490o',
  youTubeId: 'rgoyT95ce2U',
  podbeanId: 'hwwwv-5cf025',
  shortUrl: 'http://jsair.io/react-conf',
  hideShowNotes: true,
  transcript: `
    KENT: And we're live with JavaScript Air. Hello, everyone! First, I need to apologize. React Conf had created, or had provided a ton of awesome technology, microphones and stuff for me to be able to do this show with really great quality. Unfortunately, there were some technical difficulties with that, and so we're just using the microphone from my computer. And so if it sounds bad, I'm really sorry about that and I'll try to make sure that's not a problem in the future. So we're live at React Conf right now in the Grand Hyatt in San Francisco. And this is the second day. We've had a ton of awesome talks, we have some more talks this afternoon. And for this show, we're going to have some people on who are speakers who will talk with us for like lightning interviews for about five minutes apiece. And so it should be fast-paced and interesting and fun.

    Before we get into the show too much, I want to give a shout out to our sponsors. So first we have Egghead.io. They are a library of tons of bite-sized videos about JavaScript development and the web platform in general. And Frontend Masters is an expert-led workshop with a lot of training courses on JavaScript from functional JavaScript to synchronous programming, those kinds of things. So check them out for that. TrackJS is a monitoring platform, error-tracking platform for your application, so check them out to keep track of errors before your customers notice them. And then WallabyJS runs your code coverage as you're coding, in your editor. It's amazing, very, very cool technology. So I recommend that you check them out for that awesome stuff at WallabyJS.com. And CodeCov is coverage done right. They have a lot of really awesome integration and tools for GitHub and other things. And so check out CodeCov.io for information about them.

    Awesome, so let's go ahead and start our interviews. Ben, why don't you come on down? It's good to meet you.

    BEN: Yeah, you too.

    KENT: Thanks for coming on the show.

    BEN: Yeah, no problem, glad to be here.

    KENT: So, yeah, thanks. Your talk as titled React: What Lies Ahead. Can you give us like a basic idea about what your talk was all about?

    BEN: Yeah, so you know, I just tried to outline the things that we're thinking about for React, and how we can help people build great apps. So that really falls into two pieces: the user experience use for actually making the apps great and the developer experience for making it easier to build those apps. And so, for both those categories, I outlined a few ideas we had. These are all ideas for the future and we haven't written code for most of them, but my hope was that we can share what we're thinking about with the audience and help get people brainstorming on ways that we can solve these problems, and hopefully inspire people to fix some of them themselves, too.

    KENT: Cool, cool, yeah. I think that's kind of the trend with the React community, is it's very much like this isn't Facebook's code, it is the React community's code and we're all gathering around to make this community better.

    BEN: Yes.

    KENT: Cool.

    BEN: That's absolutely it.

    KENT: Good, good. So what are some ways that people can get involved in some of the ideas that you propose?

    BEN: Well, I mean like honestly, when we look at the community, like obviously there are hundreds, thousands of people using React. And that's really great, but you know, I look at some of these awesome projects that people have made. People make projects like Redux and React Hot Loader and Material UI, React Router, and design all of these great projects, which do a really great job of just solving entire classes of problems. And then that means that on the React team, we don't have to worry about those as much. And as much as possible, when we're building React, we're trying to make it so that it is possible to build all of this stuff in, you know, userspace, where you don't need to make changes to React Core in order to build the libraries.

    And there are still a few areas where we're a little bit lacking right there and I think it's hard to build some of this stuff and user space, but for most of the stuff that I outlined in my talk, it should be possible to just build your own components that do these things. The one thing I talked about was just making it easier to get started with a new project. And that's absolutely something that we don't have to integrate into the actual React itself. React shouldn't have to change to let you do that. So really I'm just hoping that people can start new projects that solve some of these problems and build on top of what we have with React.

    KENT: Can you give us an idea some of the proposals that you made in your talk?

    BEN: Yeah, so like one of the things I talked about was gesture support. And gestures is one of the things that people often overlook, especially on the mobile web. And it's one of the things that often differentiates native apps from web apps and apps that feel really good and native versus apps that feel webby. And as an example, if you take the Maps app on your phone, it supports, you can pan the map around, you can pinch to zoom in or out, you can tap on something, you can double-tap on something. And the gesture system on IO is able to distinguish between all these gestures to figure out what your intent is. And right now, on the web, it's a lot harder to build systems like this. And so I'm hopeful that somebody can build a really solid gesture system that makes it easy to just add certain gesture recognizers to your React, probably with just like wrapping some gesture component around your view, or something along those lines and that it can coordinate with the event system in figuring out how to decide which gesture is active and that call would be appropriate it decides on what is happening.

    KENT: Okay, cool, yeah. It sounds like there are a lot of good ideas. And I recommend people check out Ben's talk for more ideas on how you can contribute to the community in general. Ben, is there anything else that you'd like to mention before we wrap up?

    BEN: No, I just love being with the community here. There's like 400 people here and a couple thousand people watching the live stream. And it's just great to see so much excitement about React.

    KENT: I agree. Thanks, Ben.

    BEN: Thank you.

    KENT: See you around.

    BEN: See you.

    KENT: All right, so next we have Andres, and I can't pronounce your last name.

    ANDRES: Suarez.

    KENT: Suarez?

    ANDRES: Yes.

    KENT: Good to meet you Andres. And why don't you give like a brief introduction to yourself, who you are and what you do.

    ANDRES: Yeah, so I'm on the Nuclide team. I did a lightning talk yesterday on React Native apps that Nuclide enables.

    KENT: Cool, awesome. So can you talk a little bit more about what Nuclide is?

    ANDRES: Yeah, so--

    KENT: And what its purpose is in the React community?

    ANDRES: Yeah, so Nuclide is an Atom package that provides support for Flow, Hack, React Native, Mercurial. We use it internally for development and most of it is open source and you can just install it.

    KENT: Cool, cool. So what are some of the features that you presented yesterday in your talk?

    ANDRES: Yeah, so, well to give some context, our goal with this is so that you (inaudible) all development for React Native happens in Nuclide, and you shouldn't have to go to the terminal or go to Exit. So this first layer of features is to try to bring as much of that stuff in, so you have the package area right inside it, you have the simulator logs, you have the debugger, you have the inspector. So the idea is that you have one centralized place to do all of your React.

    KENT: Awesome, awesome. Yeah, I think that's really helpful because right now the React Native development workflow involves a lot of different screens.

    ANDRES: Oh my God, you have to have the terminal open, and XCode over here, and your editor, and then the simulator is on the side, and you know, and command tab into all that, it's just too much.

    KENT: Yeah, and even if you have like a giant 4K monitor, that's still like you're overloaded with the screens.

    ANDRES: No, it's not. So one of the things that I actually showed yesterday was, with the simulator logs, in addition to showing you normal output, they also show you errors, so when you redbox in React Native, that shows simulator logs, which you have inside of Nuclide. So if you happen to have one of the simulator in the background, which that's how I use it, it's usually not in the same view, I get to see that I have an error right away without having to switch back or move past, because you don't have a giant screen you have to, you know, move to the side. (laughs) It's like no, it's just there in one spot.

    KENT: Yeah, awesome. So what do you think the future of Nuclide is? What are the features that you're looking forward to adding to Nuclide?

    ANDRES: So I think there's two fronts on that. One of them, at least for React native is the debugger experience. So right now it's there, but I think there's a lot more that we can do. So stay tuned for that. On second is (inaudible) performance. That's kind of been one of those things that Nuclide has not been so great on. And it unfortunately has (inaudible) the option. I mean, Nuclide's been around for almost a year in open source, and it really hasn't gained that much traction, because I think the performance issues. But it's been now two months since we like revamped the experience and it's a lot easier now. So it used to be involved to get it installed on your Atom, but now it's just crazy easy.

    KENT: Cool. So one of the thing about the technology used to develop Atom, or an Atom plugin, so it's all written in JavaScript, right?

    ANDRES: Yeah, so Atom is part CoffeeScript and (inaudible) six. Nuclide is like cutting-edge (mumbles)

    KENT: All right. (laughs)

    ANDRES: Yeah, so if it's a feature, if there's a language that Flow supports, we use it. 'Cause our code is 100% Flow type.

    KENT: Okay.

    ANDRES: So we use async wait, and we use esthetic properties, we use anything that Flow supports, we use it.

    KENT: Cool. Do you know what stage Flow supports? If it's stage two I think that was the default with--

    ANDRES: I think it was a default, but I think Asynchro wait was largely a lower stage one than it would support, but I've been using asynchro wait.

    KENT: Makes your code a lot easier.

    ANDRES: It is, it's so much nicer.

    KENT: Cool. Well, Andres, is there anything else you'd like to say before we wrap up?

    ANDRES: Yeah, go download Nuclide. Check it out on Nuclide.io, documentation, videos, stuff.

    KENT: Awesome. Cool. Thanks, Andres.

    ANDRES: Yeah, no problem.

    KENT: We welcome on two Erics. (laughs) I don't know how to pronounce your last names so you're gonna--

    ERIK SCHLEGEL: Schlegel.

    KENT: Schlegel. Erik Schlegel and Eric Rozelle?

    ERIC ROZELL: Rozelle, yeah.

    KENT: Good to meet you.

    ERIK SCHLEGEL: Good to meet you.

    KENT: Thank you very much for coming on. So why don't we get just a quick brief introduction to each one of you, Eric and then Erik. (laughs)

    ERIC ROZELL: Sure, yeah. I'm Eric Rozelle. We both work for Microsoft for a team that (inaudible) Microsoft developer experience. Our team in particular kind of takes on strategic engagements with you know, various partners, both inside and outside the company to, a lot of times, get open source tools onto the React... sorry, onto the Microsoft platform. So you know, recently we had some people on our team that did some work with bringing Parse over to Azure, and likewise--

    ERIK SCHLEGEL: We're also working on like accessibility for Electron. We recently had access with the Electron team to actually work on some of the Windows accessibility issues.

    KENT: Oh nice.

    ERIK SCHLEGEL: Which redirected that to (mumbles), that's another example. But as Eric mentioned, some of our partners vary from small (inaudible) to large institutions, to also nonprofits. And our engagement with Facebook and the latest, with React Native,  kind of originated from the fact that we have partners that have the need to, they have interest in building the next generation mobile application using React Native, and they wanna target Windows in addition to iOS and Android. So that basically really spawned our engagement into that project. Eric and I have been working on the React Native port for (mumbles) with this platform over the last two months. For the sole purpose of being able to have the support for React Native on all devices to actually support. Some of these devices are Windows desktop, Surface, Windows Phone, Xbox, and then eventually Hotlines. So we'll be able to have React Native run on those devices for our partners. So our engagements more directly kind of correlated to our partner's needs and interests.

    KENT: Okay cool, so the fact that its correlated to your partners needs and interests, it's like, you're still gonna like, all this is gonna be open source, right?

    ERIK SCHLEGEL: Correct, yeah. Oh, most definitely.  One of our goals is to eventually contribute this back to Facebook's (mumbles). So we've already started working with Facebook in terms of doing (inaudible) timeline. What the implications have so far in gauging feedback and corporate needs.

    KENT: Awesome, so what's your perspective on the React Native's approach of abstracting ways as much as possible to make it so that we can deploy natively to multiple platforms?

    ERIC ROZELL: Yeah, sure. I think it's a great toolset for being able to surf. I think Brasha's talk yesterday covered some of the VS code extensions in our code push. I think that's an awesome ability to sort of have, you know, shipping agility and continuous integration and things like that. The cross platform approach is great as well. I think there's a lot of great success stories. Yesterday they were talking about stories where there was 88-90% of the code share JavaScript, that's fantastic.

    ERIK SCHLEGEL: That's awesome.

    KENT: In a native environment, too.

    ERIK SCHLEGEL: Right, and you get it for free for just touch and image and all the other amazing native modules and uses you get from all those different platforms. you get it out of the box, you get bootstrap immediately available. (mumbles) And so you know, it's just the tip of iceberg. There's so much attached to what's there. So yeah, the abstraction is just one of the many benefits of React.

    KENT: Awesome. What are you really excited about with the project that you're currently working on, with bringing React Native to the Windows platform?

    ERIK SCHLEGEL: It's, I mean, just the sole purpose of the different devices that run on EWP and being able to take React Native beyond the mobile platform, you can actually run it on a whole different series of devices, like Xbox and desktop. So it opens up a whole different wealth of possibilities for how far you take the React Native. Also, I work pretty closely on another project called... so basically, we're working with another partner of ours, we basically built an app so that it's more tailored toward visually impaired people and it's a 3D spatial audio app, where basically, it provides navigation and routing. Basically, verbal navigation and routing for visually impaired and the phone basically goes in the pocket and you just basically store it such as take me to point A to point B, or what's around me? So the proximity, points of interest near the user. But it's all audio-based. The interface is all audio-based. So being able to use React Native for that and being able to actually expand the React Native data module set for that peer-to-peer communication or Bluetooth attachment, for spatial audio would be pretty important.

    KENT: I think it's really amazing, like we think about these upcoming technologies like VR, for example, and we think, "Oh, man, this is going to be so cool for gaming." But we forget about like all the accessibility and like all of the things that this is going to help with people with disabilities, in scenarios like you described there. Very cool. So maybe we can talk for a second about what it's like to develop a target for React of like how much time do you spend with the native code and how much time are you spending working with bindings for React Native to the native code?

    ERIK SCHLEGEL: So initially for us, our main focus is build the backend, the core library. So, the bridge between native (inaudible) to JavaScript. Because JavaScript engine in that case is in Chakra. So we're kind of at the very low level to actually connect the two together. Also, being able to build modules for animation and for touch and gestures, and native views such as input box and scroll view. So it's kind of like starting from the ground up.

    ERIC ROZELL: Yeah, the only thing I would add is just basically, I think one of the cool things for React native is the native platform controls layout right now, which I know we're kind of talking about moving towards layout moving up in JavaScript. But you know, we didn't actually have to touch the JS library. We didn't have to build it with this platform into React Native before we started writing the actual Native program, just sort of piggy back off of what was already there for iOS or Android and sort of get experimenting there. And as we mature, start incorporating the rest of the JavaScript library.

    KENT: Very cool, very cool. So is there anything else about this project or any, like, maybe this is always the question that you avoid asking, but I'm going to ask it anyway. Release date, is there any like projection on the release date for--

    ERIK SCHLEGEL: I think it's right now it's still quite a bit more to go. Just logistics and just more work to go before we're ready for that, so I couldn't even--

    ERIC ROZELL: Yeah, follow us on Twitter. We'll keep everybody updated.

    ERIK SCHLEGEL: Yeah, follow us on Twitter.

    ERIC ROZELL: Simple requests on the React Native (inaudible).

    KENT: Okay, so if somebody wanted to get involved, what would be the best way to do that?

    ERIK SCHLEGEL: I think once the, once we have a pull request that's ready to go, eventually we will. I mean, that's the goal, uploading this back to Facebook, once it's actually in a stable place. We'll certainly document how contributors (inaudible) can help out, 'cause there's certainly a lot there, a lot that contributors can actually help out with the (inaudible), so.

    KENT: Cool, well awesome, thank you so much for coming, appreciate it.

    ERIK SCHLEGEL: Thank you.

    KENT: And we'll see you around the conference. Thanks. And we have yet another Eric.

    ERIC FLORENZANO: Lots of Erics at this conference.

    KENT: Yeah, and in fact, you're not even our last one for the day. (Laughs)

    ERIC FLORENZANO: Oh really? How many Erics do you have in total?

    KENT: Four in total.

    ERIC FLORENZANO: That's pretty good, I like that name.

    KENT: (mumbles) I'll sit here next to you. So sorry, how do you pronounce your last name?

    ERIC FLORENZANO: Florenzano.

    KENT: Florenzano, awesome. let me just scoot this just--

    ERIC FLORENZANO: Are we live here right now?

    KENT: We are live, yes. You've got the live right there. So Eric, you like VR.

    ERIC FLORENZANO: I do like VR, could you tell?

    (both laugh)

    KENT: Why don't you give us a quick introduction to yourself a little bit, and then we can talk a little bit about VR and JavaScript.

    ERIC FLORENZANO: Sure, so I'm doing web development for about 10 years, started in the Django community, briefly took a couple years and did an app startup, which I ended up at Twitter from that. Was doing a bunch more web stuff when I found out about React and did a bunch of blog posts about that. And then sort of burned out a little bit and was trying to figure out, how am I gonna get excited about the next decade of, you know, this industry? Where is it going? Where is the most exciting to me really about programming these days?

    And I realized that it's actually virtual reality. This is last year. It's just, I've been following with what's been going on with virtual reality for years. I had developer kits, I never knew how to sort of use them. I'm a web developer, so I'm not a game developer. So I undertook a project to sort of build up a little game engine or virtual reality engine and use JavaScript to manipulate that engine. And it ended up being a great project both for learning and for exploring and for really diving in and getting an understanding of all this virtual reality stuff.

    KENT: You know, a couple of things that you said that strike me as, that like you wanted to learn something new, and you wanted to find out something that could keep you excited, and I think that people need to remember that like, you don't have to just keep doing the same thing you've always been doing.

    ERIC FLORENZANO: Yeah.

    KENT: Look for opportunities to like, you know, do something different and exciting, something that excites you and keeps you going. In fact, that makes me think, Kyle Simpson just recently started writing a game just because. Like he just wanted to have something to keep him going, so I think that's a good approach.

    ERIC FLORENZANO: One thing, I would say, I was surprised about, was how transferable lots of these things were. If you dive into the low levels of creating a game engine, sure you're gonna need different skill sets, and you're gonna have to do some reading. And I had to do a lot of reading about graphics. But if you're gonna just build a game or if you want to just build an experience, I found that it's actually not that different from writing for a web app. Instead of writing, you know, DOM code and JavaScript manipulation, if you're using Unity or something you'd use, you'd write C# and it's similar to a scripting language, and you can get all your stuff done at a pretty high level. And that's sort of what I was getting at that the end there, where I was talking about A-frame. A-frame is actually a pretty cool technology that's built on top of the web stack, that lets you get into all this virtual reality stuff using the DOM and using some of the same ideas that I discovered and I talked about it in my talk. So yeah, I don't know. If you haven't checked out A-frame, I'd definitely check out A-frame and continue to watch what's going on with the VR scene and the WebGL stuff. There's a lot that's going on there. It could be that the internet is the real Metaverse, that we end up getting is just the Internet.

    KENT: Hmm, very interesting. So one of the things that you mentioned that I think is, I just need to call out, is you said that you worked on this small project. This is like a pretty big endeavor from what I saw. You basically, you found a really old (inaudible) file that's six months or six years ago?

    ERIC FLORENZANO: Six years ago, yeah. (laughs)

    KENT: So if you haven't watched the talk, you needed to build Spider Monkey, but there was nothing that you could find to build it except something is SDM that was dated six years ago to actually build it for VR, I just think that's...

    ERIC FLORENZANO: There are probably better ways to do it than the way I did it. Actually, pro tip, if you wanna get Spider Monkey build, just build Firefox, and it spits out a static of Spider Monkey copy and paste. Found that out later.

    (both laugh)

    KENT: That, yeah, good pro tip. Anybody wanting to build Spider Monkey, there you go. (laughs) Cool. So can you talk a little bit about what you see as the future of the web and specifically the VR space, how is that going to change our culture and change the world that we live in today?

    ERIC FLORENZANO: Well, I don't know. It's hard to predict things far in the future, but I think actually in the pretty near term, we're gonna see VR used for obviously games are the big use case. Games are sort of the Trojan, I think of it as the Trojan horse to get into people's homes. But I think beyond that, there's, like I talked about creative activities, where you're being creative in virtual space. It's so natural that that's quickly moving into production. So architecture and 3D modeling and things like texturing and all the stuff that is content creation is gonna start happening in virtual reality because you can always craft the perfect tool to do exactly what you wanna do at any given point. That's something that you don't get in real life.So it's in some cases, it can be better than reality because you can sort of use the reality that you can create to your advantage.

    Beyond that, I think multiplayer experiences, this feeling that you get when you're in a virtual experience, when you're in virtual reality with someone else, you feel this sense that you're really there with them. And it's hard to describe and it's hard to make sense if you're just looking on a screen, but there's this real sense of togetherness that you get. People like to say social experiences, but when you think of social, you think of you know, Facebook and Twitter and all these things. I like to think of it as togetherness because you really get this sense of like you and I are sitting here. You know, so if I do something weird, like I get embarrassed in VR, but online I could say something weird and not feel bad at all. (laughs)

    KENT: Yeah, so this to divert trolls then.

    ERIC FLORENZANO: No, I've seen plenty of trolling in VR. So we're gonna have to deal that just as well. Can't ignore all the real-world problems that come from these things. But honestly though, that's the way I see it, so creative activities, games, and multi-player experiences are gonna be the first couple of things that really take off. And then going forward, I definitely see co-working, meetings, conferences, things like this. It's gonna be a lot easier to do that stuff in virtual reality in the very not far term.

    KENT: No, that's cool.

    ERIC FLORENZANO: And beyond that, I think pretty soon, when the Form Factor? these things are huge big goggles right now, but they're not gonna be that way forever. They're working quickly on these slimmed down Form Factors that are a lot more like glasses. Those are coming quicker than I think people are expecting. So that'll make it a lot more acceptable, I think.

    KENT: Yeah, I think you're right. I think that was one of the challenges that Google Glass had. It's like, what is this monstrous thing that kind of made you look a little bit nerdy. But yeah, we'll see what the future holds there. So one other thing that you mentioned in your talk that I thought was a little humorous is avoiding making people sick.

    ERIC FLORENZANO: (laughs)

    KENT: So you know, on the web, we have to think about accessibility, we have to think about a bunch of different things, but now with VR we have to actually think about whether people are going to get sick using our applications. So can you talk a little bit about why is that a problem and how do you do overcome that?

    ERIC FLORENZANO: So it all has to do with latency, so however long it takes for you? you move your body and your brain expects to get the reaction from that movement right away. In reality, it's zero, you know, it's zero delay. So in virtual reality, we found that the longer that it takes for that sort of movement to be translated into what your senses perceive, so the light that hits your eyes, it's 150 milliseconds, for example, for you to move your head (which isn't all that much time, 150 milliseconds is pretty quick), most people will feel sick from that. But as you get that down to, you know, 30, 20, 10, eight milliseconds, you start to get to the point where almost, virtually nobody gets sick from that. And the thing that's difficult about that is a lot of times, there's difficulties where you might drop a frame here and there, you might drop below.

    In video games, for example, on complex scenes, you know, if it's a big action scene, sometimes these things drop down to 15, 20 frames per second. And in virtual reality, it's not just about like on an app if you're scrolling and it starts to be a little janky, it's annoying. In virtual reality, if you drop some frames and starts to slow, you feel sick. So it's just such a more important thing to be able to hit these frame rates. That being said, all these companies are building techniques for sort of interpolating between frames if you happen to drop one or two. So it's not quite as dire as I'm making it sound, but it's just something you need to be thinking about the whole way through building these experiences. It's just the performance and making sure that latency is so low. Because yeah, like I say, it's not annoying, it's nauseating. (laughs)

    KENT: Yeah. I think that that's going to be a really good thing for the web in general, because we're gonna start thinking a lot more about performance for VR, and that'll translate to better performance for the web. So I think that that will be a good thing. Good thing for us. So we're about done with our quick interview but is there anything, like if somebody wanted to get involved, what should they do to start working on VR with JavaScript?

    ERIC FLORENZANO: I'd say if you're familiar with JavaScript, HTML and all that stuff, and you wanna just kind of play around and get started, A-frame's the way to go. A-frame uses the DOM, it uses some of the techniques that I talked about in my talk to get high performance, very, very good quality VR out of the DOM. If you wanna get a little more serious and hit some performance targets and maybe target some of these more mobile devices, I suggest going with Unity. Unity pretty much owns 90% of the VR market right now, according to basically everything I've hear. But Unreal is not sitting still. Unreal Engine is actually very, very good, too. So picking anyone of those engines, they have years and years and years of work spent on making things great. And they've actually made them very understandable and even on the blueprints side, you don't even need to write code in text. They've built an entire programming language out of these Node-based programming. And I actually think that, if I may make a prediction, that in VR we're gonna very quickly see multi-user collaborative programming using nodes and not using text. And the cool thing about that is that you can actually do some really cool optimizations if you're expressing the code directly as ASTs.

    KENT: Interesting, yeah. That's exciting, and ASTs are exciting. We should talk about that later.

    ERIC FLORENZANO: Yeah.

    KENT: Cool. Well thanks, Eric.

    ERIC FLORENZANO:  Thanks for having me.

    KENT: Appreciate you coming on. And now we have Helena. How are you?

    HELENA: Good. How are you?

    KENT: It's good to see you.

    HELENA: So good to see you.

    KENT: Helena and I are actually personal friends, but why don't you give us a quick introduction to yourself?

    HELENA: I'm Helena, frontend recruiter at Facebook. I've been at Facebook for about 10 and a half years. There's a lot of people there. Very excited about recruiting.

    KENT: Awesome. So you're a recruiter. What are you doing at a developer conference, speaking?

    HELENA: I know, it was somebody's fault. (laughs) No, I'm very passionate about (inaudible). I want to just have (inaudible), I went to some of these places, and it's not (mumbles) obviously, but just to get more of what's going on (inaudible)

    KENT: Yeah. (laughs) So what was your talk about at React?

    HELENA: Yeah, so I talked about the importance of being findable. I know a lot of people, they put statuses on LinkedIn saying, "Don't contact me. I'm not interested,? or GitHub as well. It wasn't really, that wasn't the point of my talk, it was just the being able to be found by other people, to share your ideas. It's really important, as I come across people that are nowhere to be found and they're expecting that we're gonna do a lot of magic. And they are working on really interesting projects, but it's really hard to find it.

    KENT: Yeah, so what are some specific things that developers can do to make it easier to be discovered?

    HELENA: So obviously, as I said you know, technology that everyone is building is just giving so much opportunity to connect. I was talking to a few people yesterday. Whatever your passion is gonna come out somewhere. You know, (inaudible) we discovered, he had a blog post. That's how he came to Facebook. And it doesn't have to be, if you don't want to be in the open source, a lot of people are not, but just being connected with the community is really important.

    KENT: So that was (mumbles)

    HELENA: Yes.

    KENT: So in your talk you kind of went from, "We need to start the conversation. I need to be able to find you." And then you explained at least Facebook's process. And I've actually discovered personally that Facebook's process is similar in some ways to many companies. So I think that what you talked about was really enlightening for people, even if they don't interview at Facebook specifically. So can you talk about some of the process that you mentioned in your talk?

    HELENA: Yeah, I, when I was putting together the talk I was trying to, you know, for people to see what's important, what should this talk be about? I wanted it to be informative, not especially for Facebook, but other technology companies. And not only for the engineers as well. What I wanted, the message that I wanted to give out is that, don't be afraid to talk to a recruiter. I know sometimes people don't have really great experiences with recruiters but it's really completely informative. And if you're just randomly thinking that this company or this recruiter has something to say and offer and share, and they're doing something great in the community, you should definitely connect.

    And a lot of times people don't want to move forward because they're not sure what to expect. Sometimes recruiters are secretive. Not intentionally, 'cause we know the process. For us it's really easy, you know, you finish one step and then the recruiter says, "Now we go to the next step. I'm gonna tell you about the step after that when we get there." And people feel like they're kept in the dark. And it's, most of the time, not intentional on the recruiter side. It's just, for us, it's really natural how everything goes. And I've found out that a lot of engineers who are interviewing at Facebook, interviewers don't really know what happens behind the scenes. And we do, and the hiring manager does and it's really good to shed some light so people are a little more comfortable moving forward.

    KENT: Yeah, and I think that the interview process is probably one of the most uncomfortable processes that we experience. And putting as much transparency into that process as possible makes things a lot easier for the interviewer. And it allows them to put their best foot forward rather than just being nervous about the process, which is really not quite as important as them showing you what they've got.

    HELENA: Yeah, I think it goes both ways. If recruiters are very transparent about the process, then the person who's going into the interview process is also going to be transparent. It does really go both ways. And it has to do with trust. And you know, I shed some light on the whole process but there's a lot of other things that I do share with engineers. They're just remotely interested, I have a lot of people that are not interested right now, but you know, they email me when they are or they want to connect and come to the tech talks. But I think, as I said, it goes both ways. It's really, really important to, especially for the frontend team because it's so small, and I've been with that team for two and half years, it's really personal. It's a personal connection. And I like engineers, when they go through the process, to feel really confident and comfortable through the process. And I have copies of all of them and they're watching because they're probably gonna know, there's a lot of them here at the conference. I maintain that relationship because I think that's really important.

    KENT: Yeah, absolutely. So there's, some people call it a "talent shortage" right now. Can you give your perspective on what that talent shortage really means? And maybe like, I know that some people actually do have a hard time finding a job, so can you talk a little bit about that as well?

    HELENA: Yeah, I think in the industry, a lot of the titles are really non-defined. They might mean one thing to one company and another in the other company. I get across a lot of people that say, "I'm a frontend engineer. I work well with CSS. And that's my primary passion." And that's not what we think, in Facebook, about frontend engineers. It's not only about CSS.

    KENT: Sure.

    HELENA: So a lot of the times when you put the job post, people draw automatically to that, but it's really to connect with reader just to get more insight and do some more research behind what that means for a specific company. Because sometimes, you know, when I say "JavaScript," JavaScript could be jQuery, it could be Angular, it could be plain JavaScript. It's really defining those terms, I think that's really important. And that will make it much easier for people to see what would be the best way for them to approach a specific team and if that's really going to be something they want.

    KENT: Very good, yeah, I think you hit the nail on the head. We just have so many different pieces of our industry, that it's easy to specialize in something and then the terms kind of get mixed up a little bit. So one other thing before we wrap up, I want to ask about how junior developers or entry-level developers can maximize their marketability. Is there anything, like any tips that you can give for people just graduating or just getting into software development to help them be marketable and find a good job?

    HELENA: Yeah, be out there. Come to tech talks, come to happy hours, see meetups, see what the community is like. Understand what the job is that what you want to go to is. Connect with a recruiter. Keep connecting. It doesn't mean that we need to move forward right now. But you know, I know some other technologies companies might approach it differently. We, at Facebook, especially in frontend because it's so new and JavaScript used to be not very a fancy language as it right now and now it really is. And from the shortage of people that are actually working with JavaScript, now we have a lot of people that are working different places in JavaScript. Just being out there really helps.

    Sometimes I have engineers, it's really hard for me to find junior and senior because I have engineers that go through development boot camps, and I know a few of my engineers are gonna watch this and they're going to be nodding. They have, you know, a few years of experience and they're not, by industry standards, they're not considered senior, but they do really well in the interviews and they join the company. And it's really, it's depends on where your passion comes out. And it really does. And you can code for a year and you can, you know, that talent can come out and be awesome.

    KENT: Cool, cool. Well, Helena, thank you so much.

    HELENA: Thank you so much. (laughs)

    KENT: Appreciate you coming on the show, and I'll see you around the conference.

    HELENA: Yes. Thanks!

    KENT: Next we have Isaac. Come on over. Thank you for coming onto the show, Isaac.

    ISAAC: Sure. Sorry about my voice, I'm really glad my talk was yesterday because it's kind of been deteriorating since then.

    KENT: Are you getting sick?

    ISAAC: Yeah, I've been doing a little bit of traveling recently. It's kind of catching up to me. (laughs)

    KENT: Well, sorry about that.

    ISAAC: That's all right.

    KENT: I'm glad that you had your talk yesterday, too. Isaac, why don't you give a quick introduction to yourself, and then we can talk about your talk specifically.

    ISAAC: Sure, yeah. So I work at Facebook on UI infrastructure. And (inaudible) for the last, really, couple of years, two and a half years, has been building rich (inaudible) for your apps. And at this point, we've used it in a bunch of different products across the site. We (mumbles) what it's capable of, is the Facebook (mumbles) which we shipped in the fall. And so, you know, trying to make the most of the solutions that we feel good about Facebook, and to go ahead and (inaudible).

    KENT: Yeah, that's super exciting. And what you showed, the demo that you showed at the end was really mind-blowing, the capabilities of this editor. And the fact that the API into it, maybe the implementation is really complex, I imagine so, but the API around it seemed really quite simple. Can you talk about that a little bit?

    ISAAC: Yeah, so it's based on the same principle as like a controlled input. So basically, if you have a React on input, you're passing in a value that represents what the state of the text is, and you have it on just, you'd say, okay what's the value of the target (mumbles), and basically you can maintain control of the input. So we wanted do something that kind of mimicked that API, but with a content editor in this case. So, kind of having a full state snapshot that contained all of the information about the editor at any given point in time, contents, cursor, (mumbles) stack, and be able to pass that through directly into the component and have an on change (mumbles) that will give you whatever the new immutable state snapshot was after semantics occurred. So trying to move that controlled input AP. And then on top of that, when making changes, edit, moving cursor, anything like that, making sure that the API would make sense when making changes to the state. So, trying to keep things functional, no side effects, stuff like that.

    KENT: All right, so you use contentEditable like what the heck?

    ISAAC: Yeah.

    KENT: So can you talk about some of the challenges with alternative approaches that you came against that finally made you go, okay, let's try this contentEditable.

    ISAAC: Yeah so the initial approach that we were using for, so this is used in our comment input on feed stories, the initial approach that we used for a long time? actually, the initial initial approach actually was contentEditable. You know, kind of like we would help (mumbles), it was contentEditable, and this was back in 2009--

    KENT: What stopped you from--

    ISAAC: It just, it had all kind of issues because contentEditable has issues if you try to just use it natively as it is, you run into problems with it, markup doesn't match up with (mumbles), it kind of sanitize everything, normalize all of it. It's just really hard to try to make it work across (inaudible). So they moved over to a different (mumbles) approach which was just a plain text editor with a highlighter (mumbles) basically positioned behind the text.

    KENT: Like position absolute--

    ISAAC: In this case, the way they did it was to have spans with I think basically text (inaudible) visible text expand inside of it that when you highlighted text, and that would be positioned (inaudible). So you can imagine certainly the pre-React world trying to maintain the state between the texts.

    KENT: Yes.

    ISAAC: So lots of problems with that, especially when it came to just positioning things correctly (mumbles) sort of off, the highlighter that doesn't know (inaudible) it's kind of a mess. So another option is to do kind of a Google Docs approach, with (mumbles) cursor position absolutely, you're trying to position it within the DOM, but then you're dealing with more DOM attributions. You have to measure how much, like how big the characters are (mumbles) in that case. So that opens up a different set of problems.

    So we looked at contentEditable enlarged because we got that cursor to (mumbles) for free, so it's like, "Okay, let's see if this works. Let's give this a try." And certainly trying to do a control contentEditable opens up different problems, but it was, every kind of approach has its tradeoffs, and this approach we went, decided, "Okay, this is the approach." Yes, there are going to be tradeoffs, but we felt good about that direction. You know, in large part because we're dealing with that cursor behavior. It was also important to us to be able to handle accessibility which is a big thing. The auto-growing aspect, as you type more, the wrapper div just goes with it. I made that for free. I guess you would get that with rendering everything. But anyway, but so I don't know. Weighing tradeoffs, it seemed like, "Okay, let's see if we can do this contentEditable." And it worked pretty well for what we were trying to accomplish.

    KENT: Cool, yeah, so I was going to ask how do you feel about the final. Obviously, I wouldn't expect that this is officially done for you. I imagine there's still more stuff, but how do you feel about where Draft is now?

    ISAAC: I feel good about it. I think there are always improvements that you can make. That's really one of the reasons why I wanted to get it out beyond Facebook. I think it's easy for us to become myopic on what we're trying to solve and I think that there's a lot, there's definitely a broader conversation about what rich text looks like. And I wanted to contribute to that and be able to have this be part of the conversation. There's no way that what we've just open sourced the finished product for like, "this solves all problems from (mumbles)," that's impossible. But certainly with a project like this that can be done. But there's definitely, rich text on the web can move in whatever direction the community makes it go. So I'm just excited to have something that can kind of contribute to that.

    KENT: Yeah, absolutely, really simplify things and make it easier for people to innovate on top of the (mumbles)

    ISAAC: I hope so, but we'll see.

    KENT: So that's very cool. So what do you see as the future of DraftJS?

    ISAAC: Well, so the thing that probably excites me the most, yesterday my talk was very much about the web and what we did with contentEditable, but really, one of the key things about it, about what we open sourced is that the model is completely independent of (mumbles). So you can represent a really complex and rich document without even caring how you actually rendered it (inaudible). So we want to build that Google Docs approach of like moving the cursor manually with that model, sure, we can totally do it. But then the really cool thing I think is (mumbles) how to react to interpretations. I think that, I mean, you could do something that doesn't even use React if you want to, but I'm really excited about being able to use this model and integrate it with React native solution. Actually, the Facebook Groups app on iOS (mumbles) React Native. And Spencer Aarons, one of the product engineers on that product basically forked what I had built very early version of Draft, and built a React (mumbles) implementation for it. So super excited about the things that can be done with that. And that's the kind of thing where it's like, because the model is just JavaScript, you can do whatever you want with it, (mumbles) like I'm excited to see something come of that.

    KENT: That's awesome. It's really cool when something that you've built enables something even cooler.

    ISAAC: Yeah, it's awesome.

    KENT: Well Isaac, thank you for coming on the show.

    ISAAC: All right, thanks very much.

    KENT: And I'll see you around the conference.

    ISAAC: Thanks.

    KENT: Come on over Scott. This is Scott Kyle. Thank you very much for coming in. Why don't you give us a brief introduction to yourself, and then you can talk a little bit about Realm.

    SCOTT: Okay. I'm Scott, I've been working for Realm for a little bit now, I'm a (inaudible) JS developer, so I've worked at the start of (mumbles) before, and then Apple, co-founded a company a few years back. And then more recently, I've been doing some independent backend developing, working for them.

    KENT: Awesome. So tell us about Realm, and about your talk.

    SCOTT: Okay, so Realm is a database that is like an alternative to SQLite. We made it to be like better for mobile apps. We've had language bindings for Objective-C, Swift and Java, and they got really excited about (mumbles) with React Native. And then so that's kind of where I come in and then my coworker Ari, who got started on this before me, and we just pushed over the finish line and got it out the door yesterday.

    KENT: Yeah, congratulations!

    SCOTT: Yeah, thanks. I mean, you know, there's a lot more to do, but you know, it's at the point now where it works on iOS and Android and people can use it in React Native apps.

    KENT: Awesome, yeah, I think that's always exciting and kind of nerve-wracking when you've worked on something really hard for a long time and when you finally open source it, it's a little--

    SCOTT: Yeah, but you know, I think we've been getting really positive reception. So that's, you know, makes me feel really good. And yeah I'm just psyched to make it better and better. I mean, like it has everything you need to use in an app.  You know, there's lots of API that the other (mumbles), but you still gotta fill it, so.

    KENT: Sure. Yeah, so can you talk a little bit about the actual implementation of how it works? The technology and like how do you account for differences in platforms, those kinds of things?

    SCOTT: Yeah, so luckily with React Native, we used JavaScript Core on both iOS and Android, at least for the time being. JavaScript Core is like the JavaScript engines using web kit. And so that's something that made it easy for us to write, you know, just basically one language binding to work with JavaScript Core and the C++ and get that on with iOS and Android. So yeah, we need to access the JavaScript Core context in order to expose special methods and functions that, you know, you need that native binding to be able to accomplish certain things that we couldn't accomplish without.

    KENT: Sure, so I'm a little bit curious, maybe this will demonstrate that I have no idea what I'm talking about, but how do actually store the data in your database on the device? Is it in like a file system? Or how is that?

    SCOTT: Yeah, so like SQLite, like SQLite has this one file and you know, a lot of operations are done on that file. Realm's kind of similar. They create a file and it's a (inaudible) database, and so it writes snapshots to that file. The file is memory mapped, so that means you can access the files as if it's in memory, and then it garbage collects old snapshots that it no longer needs as you append to it. So that enables it to work really well and very (mumbles) environments, which is not exactly something we needed for the JS binding, but you know, it does really well in (inaudible) threads and asynchronous calls and stuff like that.

    KENT: Cool, exciting. So what do you see as the future for Realm? Like what are some things that still need to happen for Realm?

    SCOTT: Well, right now we're pretty pysched about getting our JS binding working in Node. And you know, just trying to get more and more developers to be using it and giving us great feedback on how to make it better. It's a really solid database as it is now. One thing that we're really excited about is, like I mentioned, the snapshot feature with Realm internally, is that we're trying to bubble that up so that you can have snapshots of your data in JavaScript, so it works really well as like immutable data structures with like Redux and stuff like that. So we know that functionality is possible, it's just like a few extra bits that we need to put in there to make it all work together. So we're super psyched about that.

    KENT: Your entire database in your Redux store. (laughs)

    SCOTT: Yeah, exactly.

    KENT: Yeah, that's fascinating.

    SCOTT: Exactly.

    KENT: Cool, so if somebody wanted to get involved in Realm and help out or learn more, where would you direct them?

    SCOTT: Well there are documentation and guides on our website, are just super phenomenal. It's at Realm.io. But you know, check out the repo. I mean, it has example apps, it has pretty good build instructions, so there's you know, we really appreciate people checking that out, and maybe sending us some PRs for some things to make it better.

    KENT: Cool. Is there anything else you'd like to talk about Realm?

    SCOTT: No, I mean, just psyched to get it out there on JavaScript. I love JavaScript. And also excited about Node and getting it working on Node, just npm install Realm and you can require it to your React Native app, require it in Node, and it'll all just work exactly the same.

    KENT: Yeah, very cool, very cool. Thanks, Scott.

    SCOTT: Thank you very much.

    KENT: I appreciate it. And next we have Jamison Dance. Hello, hello, thank you for coming on.

    JAMISON: Thanks for having me.

    KENT: So you, sir, still have butterflies in your stomach. You're not doing your talk yet. (laughs)

    JAMISON: Yeah, it's two hours from now.

    KENT: Well that's exciting.

    JAMISON: Give or take.

    KENT: Well why don't you give us a quick intro to yourself, who you are, and then we can talk a little bit about Elm.

    JAMISON: Sure, so I'm Jamison Dance. I'm gonna talk about Elm even though I am in no way affiliated with it. I'm just a happy user.

    KENT: I think most of us are that way with most of the technologies that we talk about. (laughs)

    JAMISON: Yeah, not like on the Elm dime or anything. I don't know. What else do I do? I do a podcast called JavaScript Jabber.

    KENT: It's a sweet podcast, by the way.

    JAMISON: Thank you! And then I do a conference called React Rally in August. It's a community React conference, it's solid. You should all come.

    KENT: There's the invite right there.

    JAMISON: That's the pitch. Let me invite you as my guest.

    KENT: It's very cool. I went last year, it's awesome. Maybe we hopefully could get a discount code for our show viewers?

    JAMISON: Sure!

    KENT: So check out the deals page, that would be awesome. Cool, so let's talk about Elm. What does Elm have to do with the React conference?

    JAMISON: That's a great question. So Elm is a functioning programming language that runs in the browser. I would say its relation to React comes mostly from Redux. So Redux is basically Elm translated into JavaScript. They were pretty directly inspired by the way you build applications in Elm. And Redux has all these implicit rules, like your reducers have to have state lists, and kind of some rules about how you structure reduces together and how you manage your actions and stuff. And all that stuff is just built into Elm. You don't have to think about it, because the compiler will tell you if you did it wrong, then you fix it. So that's kind of how I came to Elm. I was using Redux, heard about Elm, and just, I liked it better I guess. It's also pretty React-like in that it has kind of a one-way dataflow. You structure your app as a tree and data flows down through it. So it uses kind of the same basic model as React. (mumbles)

    KENT: Interesting. Yeah, so one question that I've had about Elm (and maybe this will like finally get me to give it a much closer look) is with React, they have the context to that you can kind of pass it around and it's sort of like this global variable that we're all like, "I know I shouldn't be using this, but I'm going to anyway."

    JAMISON: Yeah, someone smart said it was okay.

    KENT: Yeah, yeah, (mumbles) uses it, and Redux uses it.

    JAMISON: Yep.

    KENT: And it really actually solves the problem of drilling holes from the top component all the way down, you have to pass data all the way down to all components that need it. And it solves the problem in a nice way even though it's not entirely pure. So how does Elm deal with this kind of a problem?

    JAMISON: So in Elm, you're kind of encouraged to make your applications a little bit wider. You don't nest things as deeply. You end up writing a lot of functions that just take in data and return stuff, so you don't have to drill through as many layers because there aren't as many layers in your application. That kind of side-steps the issue a little bit. There is only one top-level app state, and the only way you can get data into it is by passing it down directly. So their solution is just don't pass it down through these layers.

    KENT: Interesting, okay. And in your experience, working with Elm is that a good solution for you?

    JAMISON: Yeah, I think, this applies to all my experience with Elm, but the first time I try and do something, like, "There's no way I can do this." And then I try and do it and ask someone smart, and they're like, here's how to do it. Then I do it and it's actually nice and I like it. So that was my experience with nesting things. Like I want to nest stuff deeper. You know, don't do it, just do it this other way. That sounds stupid and then I do it and it's fine. And like there's no component local state. Anytime you mutate state, it's by sending an action (mumbles) to the global app state. And that feels weird, like you've some hover state, right? That you add an on-mouse center, and (mumbles) it can feel icky 'cause you're so used to the convenience of having local state. But it's nice to have some physical (mumbles) around it, it's one decision you don't have to make. You do everything the same way, basically. And I think that even though sometimes that adds a little bit of complexity, globally, it lowers the complexity because you just do stuff the same way no matter what. No matter if you're clicking a button to like change pages or if you're adding (inaudible)

    KENT: Yeah, that's very interesting. I totally agree, I just started doing Redux, obviously, very inspired by Elm, like you said and I was just going to control whether somebody has entered an input into something. And I was like, "My entire application does not need to know if somebody's entered input in this one little thing." But after doing it, I realized that it's just so much easier to debug things because everything is in one place. I know exactly where to go for any state of my application.

    JAMISON: Sure, yeah. And in Elm it even gets a little bit, I'd say it's easier than Redux because you kind of collocate the different model chunks and the action types in with the components. So you can look at an individual component and you don't really have to care about how it's hooked into the rest of the app, you just know that these are like five actions this component can do, this is the state of the model, and this is how you update it. And then there's some kind of code that you use to forward those actions down into the right component. But it's pretty self-contained at the component level.

    KENT: Yeah, I have more questions for you. Maybe I'll ask them later.

    JAMISON: Sure.

    KENT: 'Cause we're out of time, but thank you for coming. Is there, if somebody wants to get involved in Elm, where do they go?

    JAMISON: Oh man. The site channel's pretty good. I think it's elm-language.rokuapps.something. You can go to elm-lang.org, that's the website, and then that'll point to a bunch of other sites.

    KENT: Awesome, cool.

    JAMISON: Thanks man.

    KENT: Thank you. I'll see you around. Good luck on your talk.

    JAMISON: Thank you!

    KENT: Now I have Maria. Thank you very much, appreciate you coming in to--

    MARIA: Nice to meet you.

    KENT: Our little show here.

    MARIA: Sure.

    KENT: So, Maria, why don't you give us a quick introduction to yourself and we can talk about migrating, or I guess yeah, was it migration from iOS to Android?

    MARIA: Exactly. So I'm originally from Germany. I just got my Bachelor's degree last week.

    KENT: Oh wow, congratulations!

    MARIA: ...in computer science. I'm done now.

    KENT: Wow, that's great.

    MARIA: And in the past two years there have been a few things that are really important for me: the first one is encouraging more girls in computer science, because I personally think that's really important right now.

    KENT: Yeah, so do we. (laughs)

    MARIA: Second thing is, I'm really active with the (mumbles) community, which encourages more women to accept leadership positions. And the thing is that I contribute to open source projects, as I did with my Eden app in the past few months with React native.

    KENT: Awesome. I'm big into open source, too, it's really great. We're gonna be great friends. (laughs) Cool, so your talk, you talked about how you had an iOS app with React Native, and you wanted to support Android as well and it was kind of the process of kind of migrating and seeing how much you could share. Can you talk a little bit about that process about what you talked about?

    MARIA: Sure, so first of all I started with the app in general, like I tried to run the app like it was in iOS and in Android, but that didn't work out because not all components are the same. For example, in Android we have the toolbar Android and you don't have that in iOS. And the same way works with iOS and like iOS components you don't have in Android. So you have to find a workaround or you have to figure out how to do that. And there are also components that are external libraries and you don't have them in iOS or Android at the same time. Sometimes you do, but most developers don't have to apply them now because they just introduced Android for Native last year in October.

    KENT: It's still pretty young.

    MARIA: Yeah, exactly. So I was trying to figure out how to do that and how to wrap that components together. So I wanted to have as much shared quota as (inaudible) so I wrote (inaudible) for most things.

    KENT: So what did, like this is kind of like the spoiler alert for anybody who hasn't watched the talk, but what was the final number give or take, how much were you able to share?

    MARIA: So for my app in general it was 80% of shared code, which is pretty cool, I think. As we heard this morning, or yesterday, we don't need two teams anymore. You just need one team that knows everything about your native and that's it. You don't need iOS and Android teams anymore.

    KENT: Yeah, I think that's really awesome. I know that there are other frameworks that are able to put your code into web view, and so then you can have 100% code sharing?

    MARIA: But it's not native.

    KENT: But it's not native, and I think that it's really impressive that you're able to create a native experience and still share so much of your code. So what were some of the challenges that you faced, some of the bigger, more specific challenges that you faced during that migration? You mentioned the toolbar. Was there anything else that was really difficult for that migration?

    MARIA: Yeah, I think the most important thing is that you have to know where (inaudible) native library is right now, because a lot of things change all the time in Android and iOS and your projects change, so you have to know how deploy, how to run all of these things (mumbles), so that changes, in the last couple of weeks, it changes all the time. Like almost every week it changes.

    KENT: Wow.

    MARIA: You have to keep that updated, yeah.

    KENT: Impressive. So like after you finish the migration, you're still working to keep things updated.

    MARIA: Exactly. And there're still a few things that are not ready on Android, for example, it's on the debugging options, you have an iOS inside the native component, (mumbles) so far. And so, I'm still waiting for that, for example. I'm hoping that will come soon.

    KENT: What do you do in the meantime for stuff like that?

    MARIA: Refactoring.

    KENT: You just don't show that feature?

    MARIA: Yeah, exactly. I'm trying to find a workaround for that feature, exactly.

    KENT: I see, cool. So what are some of the things that were really exciting to you while doing this migration? And what makes you so interested in working with React Native?

    MARIA: I think the most important thing it's based on JavaScript. You write mobile applications with JavaScript. I come from a (inaudible) background, so I've never written a mobile app except in 2011 for (mumbles) mobile, which was pretty bad, but at least I tried it. And that was the first time. And since then I was just, I had so much respect with Objective-C, and I did not want to touch that.

    KENT: (laughs)

    MARIA: So I thought, "Okay, let's try it out with JavaScript," and it's really awesome. You get started, you understand right away, you can find such a great community online. And I think that's the thing about React Native and React. A lot of people here that (inaudible).

    KENT: Very cool, very cool. Well, is there anything else that you'd like to bring up about this migration, or things that you're working on that you'd like to tell our viewers?

    MARIA: Probably one thing about tech conferences in general, when you're meeting a woman in tech at a tech conference, don't ask the woman why she's in tech, ask her what projects she's done.

    KENT: Yeah!

    MARIA: That's super (mumbles), in my opinion.

    KENT: Well, what project are you on? (laughs) We'll chat later.

    MARIA: Yeah. (laughs)

    KENT: Very good, yeah. I think that's a really good thing to close on, so thank you for that. And I'll see you around the rest of the conference. Thank you so much for coming on the show. I'll see you.

    And that is our show. So thank you for watching. Just a quick shout out to our silver sponsors, Fluent Conf and Auth0. You can check them out on our website. And next week, we're going to be meeting with John-David Dalton about JavaScript utilities and Lodash, in particular. Really excited about that. John is awesome. And so tune in next week. It'll be at our regular time. And then the week after that we're actually going to be at Fluent Conf doing another live show, so really appreciate feedback on these live shows that we do, so that we can make sure that we're providing the value that you're looking for out of a show at a conference. Like I said, I promise the audio quality will be better next time. I really apologize about that.

    If you have suggestions for us, please go to Suggest.JavascriptAir.com, and can fill out a form, suggestions about the show in general or this specific episode. And then if you have, actually sorry, that was Feedback.JavascriptAir.com. If you have suggestions for upcoming shows and topics, go to Suggest.JavascriptAir.com. And then our deals page, make sure you check that out, JavascriptAir.com/deals. We have a couple of discount codes and stuff on there. I just pushed up another one this morning. And so yeah, I think that's it. So thank you very much for watching, and we'll see you next week. Buh-bye! Ah, and I can't stop the broadcast. Goodbye! (laughs)
  `,
}
