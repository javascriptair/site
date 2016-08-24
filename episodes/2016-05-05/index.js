export default {
  title: `On site at ng-conf`,
  time: '14:00',
  timezone: 'MT',
  guests: [
    {
      name: 'ng-conf',
      twitter: 'ngconf',
      squareImage: true,
    },
  ],
  description: `
    We'll be on site at one of the biggest and most exciting conferences in the world: ng-conf. In this show we're
    joined by some amazing developers and community builders in the Angular community.
    <br />
- [samuel john saccone](https://twitter.com/samccone) - Promises are probably older than you.
- [Tero Parviainen](https://twitter.com/teropa) - Generative Art in Angular 2
- [Mike Brocchi](https://twitter.com/brocco) - Learn Clingon (Angular CLI)
- [Scott Moss](https://twitter.com/scotups) - Angular 2 for the rest of us
- [Aysegul Yonet](https://twitter.com/AysegulYonet) - Pipe Hype (Creating custom pipes)
- [Alyssa Nicoll](https://twitter.com/AlyssaNicoll) and [Sergio Cruz](https://twitter.com/hashtagserg) - Wanting it all vs. Being Great
- [Jules Kremer](https://twitter.com/jules_kremer), [Brad Green](https://twitter.com/bradlygreen), and [Miško Hevery](https://twitter.com/mhevery) - Keynote (Angular Community)
  `,
  youTubeId: 'Q9aL9kmdmIE',
  podbeanId: 'kjqzk-5f14af',
  shortUrl: 'http://jsair.io/ng-conf',
  host: {
    links: [
      `[The Changlog](https://changelog.com) episode 200: [JavaScript and Robots](https://changelog.com/200) with [Raquel Vélez](https://twitter.com/rockbot)`,
      `[Healthy Open Source](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951) by [Mikeal Rogers](https://twitter.com/mikeal)`,
      `[Open Source Stamina](https://medium.com/@kentcdodds/open-source-stamina-dafd063f9932) by me 😄`,
    ],
  },
  transcript: `
    KENT: And we're live with JavaScript Air! Hello, everyone. My name is Kent C. Dodds, and I am your host for this JavaScript broadcast podcast. And today, we're live and on-site at ng-conf. Super excited to be here. Really cool stuff going on. This has been kind of a crazy, awesome conference. A lot of really interesting things going on here.

    So, what we're going to do today is I, unfortunately, won't be taking any questions on Twitter. This is one of our on-site shows. And so, I've asked a couple of the speakers and the others to join me on the show for about seven minutes at a time. And we'll just do lightning interviews about what it is that they're talking about and other interesting things about what's going on with them, what they're doing.

    So, before I get into that though, I want to make sure that I give a special shout out to our sponsors. So, first, our premiere sponsor is Egghead.io. They have a huge library of bite-sized web development training videos. Check them out for content on JavaScript, Node, Angular, React, and a ton more. And Angular II. Yay. yay.
    Frontend Masters is a recorded expert led workshop with courses on Advanced JavaScript, Asynchronous, and Functional JS, and other great courses on Frontend topics. Check them out at frontendmasters.com.

    And TrackJS reports bugs in your JavaScript before your customers notice them. And with their Telemetry Timeline, you'll have the configs you need to actually fix the bugs. Check them out and start tracking errors today at trackjs.com.

    And SparkPost is email delivery built for developers. Build something awesome with their Node.js Library or SMTP Relay. Start sending 100,000 emails today for free at sparkpost.com/jsair.

    And then, WebStorm is a powerful JavaScript IDE. It makes developers more productive with its super intelligent code assistance for JavaScript Node.js, Angular and React, and integration with lots of different tools. Check them out at jetbrains.com/webstorm.

    Now, before I invite our first guest, in which you probably if you're watching, you may have noticed his reflection has been in the mirror a couple of times. But I just want to say that this is a weekly show, and so next week, we will be having a show that I'm actually really, really excited about. Not to say that I'm not excited about all of them, but this one, in particular, I'm really excited about. It is inclusiveness. And we'll be joined by, I'm sure I'm butchering her name, but Omoju Miller. So, that will be Wednesday, May 11th at 12 Central, the normal time for our shows.

    Okay. Great. So, now, let's go ahead and invite Sam on to join us. Hi, Sam.

    SAMUEL:  There you go.

    KENT: There you go. Sorry about that. That's kind of weird. (laughs) Welcome, welcome to the show. So, Sam.

    SAMUEL: Thanks.

    KENT: Why don't you give... Sorry, I should call you "Samuel."

    SAMUEL: Yeah, Samuel.

    KENT: And my apologies. I was actually hoping that you would join us with your traditional bindi on your face, but that didn't happen.

    SAMUEL: No, it's just, I got a little tired. A lot of people today.

    KENT: Yeah.

    SAMUEL: I just needed to take a break.

    KENT: Got it. Got it. (laughs)

    SAMUEL: So I'm filling in, no.

    KENT: Good for you. Good for you. So, Samuel, why don't you give us a quick intro to yourself. Tell us who you are, where you work, what you're interested in.

    SAMUEL: Sure. My name's Sam Saccone. I'm a software engineer at Google. And, yeah, I work at a keyboard pretty much most of the day. So, that's pretty good.

    KENT: Sweet. You do a lot of performance stuff right?

    SAMUEL: Yeah. I like to look at why things are slow, measuring performance, figuring out what's going on, trying to help people make their stuff fast.

    KENT: Cool, yeah, awesome. So, your talk here is about promises. I think it's entitled You're Probably Younger than Promises, or something like that.

    SAMUEL: Yeah, yeah. It's a history of promises from 1961 to present day. So, how we got from this pretty abstract idea in the 60s to landing in ES2015.

    KENT: I'm definitely younger than promises. Very cool. So, is there anything in particular that kind of stands out in the history of promises, like what, is there any moment in time that we may not have been blessed with this wonderful API?

    SAMUEL: Yeah, I mean promises were rejected, as a spec in 2011 actually. So, the committee, TC39, actually thought it was too high-minded and too sort of intellectual of a concept to bring into browsers. And there's no community buy-in. And everyone was like, "No, it doesn't seem like this would be a good thing." So, for a long time, promises weren't going to land. And it's, thanks to work that Dominick did with the A+ promise spec, that really got community buy-in and showed TC39 that there was a desire for this API. And basically, agreement from the community that this was the way that it should work. And so, that's basically why we ended up with promises in JavaScript today.

    KENT: Very interesting, wow. So, you mentioned when you said that they thought it was a little too high-minded, like too more like abstract of a concept, I guess. But it seems like they're exploring a lot more things that are more like that, like observables, and other things that are coming down, like decorators, and those kinds of things. What are your thoughts about like those things that are a little bit more abstract as well?

    SAMUEL: Well, I think it's important that we look to the past and see the problems that we're trying to solve today and how have they been solved already. And promises are a good example of that. And we've had this problem in computer science, since the 60s, and people have solved it. And then, in JavaScript, instead of ignoring what's been done before us, we look to the past and sort of lean on that. And we see the same thing happening with the new module format that's being heavily debated on the internet. Like, why are we inventing something new? Why can't we borrow what's been done before? And that will always be I think a good choice for the JavaScript community. And these new concepts that TC39 is looking at, they're just ideas that have existed for a long time. And, in some ways, the JavaScript community is maturing to these ideas. And say, "Oh yeah, I guess there is a lot of value in these things that have been solved, and maybe we should look to the past and see how we can learn from it to make ourself better."

    KENT: That was profound. Yeah. I like that. I like that. Cool. So, do you see an end to the development... I know. Sorry. We're not really talking about Promises, but you're like really interesting right now. So, do you like see an end to the things that we're going to be adding to the language? Like, are we going to add an abstraction on top of, on top of even promises? Well, actually, yeah, we kind of are (laughs) with async/await, but is there an end to adding things to JavaScript?

    SAMUEL: Oh. That's a hard question. I think that there will always be sort of a fixed set of problems in developer pain points. And as we build more and more complex web applications, we're going to run into new things, like a lot of the issues that we're hitting today with modules and everything. (mumbles) five years, JavaScript development was so different that these problems weren't even in people's minds. So, I think the evolution of JavaScript will be tightly paired with building more and more complex things. And that will drive future development of the language, which I think is a great thing for everyone.

    KENT: Yeah, I think that's really interesting. Like, we're kind of stuck with this language, like we have to keep all of the existing features. We can't just say, "Okay, now we can just look at today and see let's build a brand new language that has all the features that we want." You know, some people are trying to do that with (mumbles) to JavaScript languages. But yeah, I think it's really interesting that we, as we add things to the language because our assumptions (mumbles) now changed, we can't take things away that no longer really are useful in the way that we're trying to solve problems today.

    SAMUEL: Yeah. That's the backwards compatibility story with JavaScript. Obviously, ES 2015 was the first breaking un-polyfillable update. And you know, Babel saw that, and Babel thought that for a while. But there simply is some syntax that will not work in the browser. There's no way to poly-fill it. So, like, that's why TC39 exists, and that's why it takes so long for these features to land because they want to make sure that they don't make a mistake. And sure, mistakes have been made in the spec, like with tail call. They're looking at revising tail call spec right now because of the way that stack traces are discarded, which is a big deal. (laughs)

    KENT: Yeah. (laughs)

    SAMUEL: So, we're stuck with what we have. That's correct. But like, I think, the future is bright for what JavaScript is going to provide us natively.

    KENT: Cool. I agree with you. Future's bright. Awesome. Sam, thank you very much for joining me!

    SAMUEL: Sure, man. Thanks for having me on.

    KENT: And see you around the rest of the conference.

    SAMUEL: Definitely, thanks.

    KENT: Alright. So, now we have Taro coming up. Yeah, that's kind of weird. Hello. (laughs) Tero. Welcome, welcome.

    TERO: Thank you.

    KENT: Join me. Tero has actually been on my shows before. I think you've actually been on Angular Air at least twice.

    TERO: Twice I think, yeah.

    KENT: Yeah. You were at my very first on-site show at NGNL.

    TERO: That's right, yeah.

    KENT: I remember that. And then, we did another show about people who used React and Angular 2, and just kind of comparing the two, really interesting stuff.

    TERO: Yeah. That was an interesting show, yeah.

    KENT: Yeah. Go check those out. So, today we're on JavaScript Air at ng-conf. And you gave a really interesting talk. So, I say that it was really interesting. I must confess, I have yet to actually watch the talk.

    TERO: All right. (laughs)

    KENT: But I have seen some goings on on Twitter, and I read the abstract. And I'd like to know more. So, can you tell us, what was your talk called? And what did you do?

    TERO: So, my talk was called Generative Art in Angular 2. It was really about using Angular for something that people don't usually use it for, which is to make something that doesn't make any business sense, whatever. It's just for playing and doing something interesting, and to experiment with it, in order to just have fun with it, but also to kind of learn it. Learn it kind of in a sneaky way that you don't actually sit down and study, but you just play with things and just learning. Learning just happens when you're doing that.

    KENT: Now, that is a really good way to learn things, I think.

    TERO: Yeah. That's what children do. So, that's how I kind of connected it to playing, making art basically. Because it's actually not my original idea. I got it from Brian Eno who's one of these generative artists. And he has talked about this that children learn by playing. But they don't think like that. They don't say, "I'm going to learn how to do this or that. I'm going to play." It's just built into them that that's how they learn to communicate with each other and do all kinds of things that make them, you know, able to operate in the world by playing. And that same idea can be applied as an adult as well, but most of us don't really do that because it doesn't seem like a proper thing to do to just play with stuff as an adult.

    KENT: Yeah, I think you're right. Like, we always feel like we have to be making a huge difference in the world. Like, if we're not making a gigantic enormous impact on the world, then it's not worth our time.

    TERO: Exactly, yeah.

    KENT: It's worth our time 'cause we're learning.

    TERO: It is, yeah.

    KENT: Raquel, Vasquez, I think is her last name. She was recently on an episode of the Changelog where she talked about how she learned math. And as a like a high schooler or whatever, she, like "why do I need to learn this stuff?" And they'd always just say, "Oh, you just learn it." But eventually, she realized that she could motivate other people to be interested in learning math by showing them robots and how like the cool things you can do with robots. And so, like not approach it from that aspect of, "Well, okay, you have to understand calculus because this servo needs to do this crazy thing."

    TERO: Yeah.

    KENT: It's more like, "I want this robot to move over here." So, what do I need to do to make that happen? And it's fun at that point.

    TERO: Exactly. So, it's (mumbles) problem solving approach. You have this thing you want to do, and then you figure out how you do it. So, I want to make sounds in the browser, so I have to learn the web audio API. Or, I need to make these sounds happen over time, I need to learn observables in order to do that.

    KENT: Yeah, yeah. Very cool. So, Tero, actually, I apologize, I didn't give you an opportunity to introduce yourself, who you are, and that kind of thing when we started. (laughs) So, we're gonna do things a little bit backwards. Do you want to just go ahead and give a shout out to who you are, where can people follow you, that kind of thing.

    TERO: Sure! So, yeah, I'm Tero Parviainen. I'm a JavaScript front end developer from Helsinki. I do contracting over there. I was really doing front end work for the past few years. I'm pretty heavily these days involved in the JavaScript and therefore Angular community really mostly. 'Cause I've been writing this book called Build Your Own Angular JS for a couple of years now, which I just dropped, lifted the beta label off a couple of days ago finally.

    KENT: Congratulations!

    TERO: Thank you. So, I've been doing that. Then, I've been submitting things to conferences, which takes me to places like Salt Lake City, occasionally.

    KENT: Yeah. Awesome.

    TERO: This (mumbles) in February or March, and I was thinking, "Should I actually submit?" Because I kind of don't want to because it'll blow my whole schedule for the spring, because I have to prepare for weeks and weeks. So, I'll propose something that probably won't get accepted.

    KENT: Whoops. (Laughs)

    TERO: And then, they accepted it. So, I had to do it. But it was so that if it gets accepted, it's something I really want to do. So, that worked out pretty well.

    KENT: Very good. Awesome. Well, I think I'm going to listen to you saying your name over and over again. So, I can eventually pronounce your name properly. (laughs) But Tero, thank you very much for coming on.

    TERO: Thank you.

    KENT: And I'll see you around the rest of the conference.

    TERO: Definitely. Thank you.

    KENT: Alright. And we have Mike now. Don't forget to hold the mike really close to your face.

    MIKE: Got it.

    KENT: Thanks for coming, Mike.

    MIKE: Thank you for having me.

    KENT: Okay. So, Mike, now, is it Bronche? Bronchi?

    MIKE: It's actually Brocchi.

    KENT: Brocchi?

    MIKE: Brocchi.

    KENT: Oh. Brocchi. Okay. I was like, there's no n in there.

    MIKE: No. No. None at all.

    KENT: Cool. So, Mike, why don't you give us a quick intro to who you are, and then we can talk about what you're here for?

    MIKE: Sure. My name's Mike Brocchi. I am originally from outside Philadelphia. I live now outside of Pittsburgh. I work for a consulting company. We do mostly Microsoft work, although I predominantly focus on the front end with Angular hence me being here today, or out here at ng-conf. And that's pretty much it. I've been contributing to the Angular CLI, which is what I'm here at ng-conf to talk about tomorrow.

    KENT: Yeah, and you have one of the most interesting talk titles (laughs) of the lineup today. It's Learning Cling-on? Is that right?

    MIKE: That is correct. It's called Learning Cling-on, which is just a play on letters, just to be able to say that it's the CLI for ng. That's just a lead in to the second slide in my deck. (laughs)

    KENT: (Laughs) Nice. Very, very well played. Well played. It makes people really interested to read your abstract.

    MIKE: Yes. 'Cause if it's just based off of the title, nobody has any idea what it's about.

    KENT: Yeah, actually though, you got to be careful around here because Star Wars is all over the place around here.

    MIKE: So, that was the main thing I was very nervous about when my talk was accepted is my talk going to be on Wednesday and have a talk about Star Trek, in terms of title, on Star Wars day, which would have just been total chaos and total confusion for everyone.

    KENT: Close call. (laughs) I'm actually a Trekkie. So, you're friends with me. So, okay, enough with that. Why don't we actually talk about the Angular CLI and what it is that you're here for.

    MIKE: Sure. So, the Angular CLI is a command line interface for Angular to be able to scaffold a project, build that out, and build, test, run, generate different pieces of your application and manage the application through its life cycle from inception all the way to production, including deployment steps.

    KENT: That is amazing. So, there's this big JavaScript fatigue thing going on, and the idea behind Angular CLI is to kind of blow that away. Right?

    MIKE: It definitely helps with a lot of, there's a lot of new technology out there in terms of SystemJS, Webpack, Browserify, all of these different tooling technologies that people want to get in to do their front end development. And, there's a lot of other road blocks on the way, preventing people from getting in to just writing code. Because a lot of people will spend a lot of their time starting up a project getting involved with the build process when it doesn't really help your end users or your development of an application. Your end users never really ask, "Hey, are you using Webpack? Are you using Browserify?"

    KENT: I don't know. Mine always. (silence) Okay, apologies. We dropped out there for a second. I'm not sure exactly when we dropped out in our conversation. That has never happened during an on-site show. I'm really sorry about that. (laughs)

    MIKE: Yeah, well, the CLI doesn't really handle the internet connection. It's like you can't really totally rely on conference Wi-Fi.

    KENT: Yep. That is true. Actually I'm not. I'm trying the hotel Wi-Fi, but, you know, that's just, that happens sometimes. I will probably invest in like a hotspot or something in the future. (laughs) Okay. So, sorry to totally derail what you're talking about, but I did want to ask the origins of the Angular CLI, it was kind of a fork from Ember CLI. Is that right?

    MIKE: Sort of. It's not really a fork. And essentially, it's an add-on to the Ember CLI.

    KENT: Oh really.

    MIKE: So, Ember CLI is very extensible, so we are building on top of that even though some of the commands under the hoods are actual Ember commands from the Ember CLI. But we override a lot of it and kind of match that functionality and build on top of what they've already produced, which is phenomenal, all the parameter parts and commands, tests. Everything under the hood is very well put together.

    KENT: Yeah, very cool. I think, and if I understand correctly, there was actually help from the Ember team when things were getting started. Is that right?

    MIKE: Yeah. So, I wasn't there from inception of the project. Things were pretty well set when I got involved with the project about four or five months ago, but I've had some interactions. I've jumped into the Ember CLI community slack channel and got some help in terms of answering questions of things that I was trying to solve that they have already solved. So, to get help from that community was incredible.

    KENT: That's awesome. I love it. JavaScript's the best. Cool. So, Mike, before we say goodbye is there anything else that you'd like to mention?

    MIKE: No. My talk has not yet happened. So, if you haven't seen it, tune in tomorrow at its local time around 11 o'clock tomorrow.

    KENT: Awesome. Thanks, Mike.

    MIKE: Thanks for having me.

    KENT: And, next we have Scott. Scott Moss. Thanks for coming on the show, Scott.

    SCOTT: 'Sup, everybody.

    KENT: So, yeah, let's see. So, Scott, before we get into why you're here and everything, why don't we just get an intro to you?

    SCOTT: My name is Scott, Scott Moss. I live in the Bay Area. I'm a Front End Engineer at Udacity, where I do Front End things. (laughs)

    KENT: I see what you did there.

    SCOTT: Yeah. And also the co-founder of Angular class, along with (mumbles), and we do like Angular or pretty much just JavaScript corporate training, and weekend training, and stuff like that.

    KENT: Sweet. And you were also on Angular Air as a panelist for a while. Right?

    SCOTT: Yep. I was on Angular Air for a panelist for a while until things got busy. So, yeah.

    KENT: Yeah. Life gets busy sometimes. (laughs)

    SCOTT: Life gets busy, yeah.

    KENT: Cool. So, Scott, why don't you tell us a little bit about why you're here? Yours was Angular 2 for the Rest of Us, right?

    SCOTT: So, my talk is inspired from my own experience. I was learning Angular 2. I started learning in like pre-alpha, and I was just like, "I don't know if I'm ready for this yet." Like it's I'm more of a productivity type of guy, like, it has to be, like it has to be a finished product for me to use it. Like, I don't want to get into the beginning stages of it. But I tried it anyway, and it was really tough. So, I kind of backed away from it, and then I revisited again once the beta was released. And I was like scared. I was just like, "Wow, there's a lot of stuff going on here." You know, it's very overwhelming for me. And I really don't get overwhelmed a lot, but I was very overwhelmed. There was a lot of new technology being thrown at me. But I wasn't gonna let it stop me. So, I decided to build something, you know, not like a traditional MVC to you know to-do MVC, but like something really big. And I was like, I want to build something, and this is how I'm gonna learn it. So, the talk is like my journey of how, all the things I went through to learn it from a different perspective other than like "read the docs then you'll get it" type a thing.

    KENT: Yeah, I think that's a good way to go about it. We just had Tero on, and he was talking about how you learn by building things that are interesting to you.

    SCOTT: Yes.

    KENT: So, very cool.

    SCOTT: Yep.

    KENT: So, what are some of the things that like tripped you up the most as you were learning Angular 2?

    SCOTT: I would say the biggest thing for me actually in Angular 2, it was actually Typescript. Like I was just, I looked at Typescript from a different lens, and I didn't like it. Once I found a different perspective, and looked at it differently, I loved it. And now, I recommend using it for everything. So, that was probably the biggest thing for me was that... and then of course just lack of documentation. It was beta, right? There's nothing there. There's not a lot of blog posts. There's not a lot of resource, not a lot of videos. So, everybody's still trying to figure things out. So, you kind of got to figure it out yourself too. So, that was kind of hard. And then, I would say the third thing was actually like diving into the source code. That's always my next thing to do is like just give 'em the source code, and try to get inside the Angular team's head. And figure out why they made these decisions, so I can be a little more predictable and kind of understand the syntax a little bit. But that was kind of scary too because then I was like, "Oh wait, it's like Darts. Wow, wow, hold on, what's going on?" All this stuff going on. And it was really confusing to me.

    KENT: (laughs) And that was all Typescript too.

    SCOTT: And now, it's all Typescript, and I'm just like, "Okay, okay. This is going to be tough. This is going to be tough." So, yeah. A lot of challenges.

    KENT: Yeah, so hopefully people who watch your talk and go to learn it will have a little bit better of a documentation story.

    SCOTT: Yeah.

    KENT: Yeah. So, on the Typescript thing, like I still haven't gone forward on the Typescript yet. What were some of the like, was it more of the ES6 side of things, or you were pretty familiar with ES6 before right? So, what was it about Typescript that made it difficult for you?

    SCOTT: I think it was just like, I was just hesitant to do it. I've done Android development with Java, and it felt like that. And I was just like, I don't want to do that. That's just not, I came to JavaScript. I don't want to do that. And that's what it felt like. And I was just like, "No. I'm in love with ES6, and this is what I want to do." And at that time, when I was learning Typescript, it was Pre-Typescript 1.5, so they didn't have a lot of ES6 features.

    KENT: Oh, right, yeah, yeah, yeah. That was dark days. (laughs)

    SCOTT: Yeah, it was dark days. So, I was just like, "No, I don't want to import my modules like that." Like, I don't want to do that. So, it was kind of scary for me. So, it wasn't the ES6. It was just like pretty much, you know. I was just like, "Well I'm gonna function program it now. I don't want to use classes for everything." And it was just like really scary for me. I felt like I was walking backwards almost. I didn't really see the value of Typescript. But I think, once 1.5 came out and then I actually used it with Angular, I was just like, "Wow, okay. This is awesome." 'Cause realistically, if you don't use any of the typing features or the interfaces or anything. It's really just ES 2015 with decorators. Like, that's really, you can use it just like that and like be fine. And that's pretty much how I started out. Like, I started with that, and then eventually I started adding in more Typescript features. But I started off, I'm just like I'm just gonna write pure ES6, use the decorators, and that's it. And that's how I started, and it was easy.

    KENT: Yeah, that's a, it seems like a pretty solid approach. So, with... I totally lost my train of thought. But that sounds awesome. (laughs)

    SCOTT: Yeah. It worked out for me, like without that approach, I would have been like, "No. I'm not doing Typescript. No, no."

    KENT: Yeah, well, cool. Yeah. I think that may be something that I should, I should probably give (mumbles).

    SCOTT: Yeah.

    KENT: I remember the thing. So you were talking about how you're a functional programmer. I like to think of myself as a functional programmer. I like (mumbles) (both laugh) So, and try to keep things like pure functions. So, with Angular 2, it's like pretty much everything's a class. Right? So, how is that transitioned for you, like are you? Like are you totally bought into the classes? Like, do you have to give up functional programming to use classes?

    SCOTT: Oh, definitely not. Like, so I've been using React like exclusively for like a year now. So, like, it's pretty much everything's (mumbles) using ES 2015 or whatever. So, I kind of already had that acceptance of like alright these, this functional aspect of it. Just 'cause you do these classes, doesn't mean you're gonna be doing like inheritance. There's a big difference there. Like, you know.

    KENT: Big difference.

    SCOTT: Big difference.

    KENT: And should I say deep difference like. (both laugh)

    SCOTT: It's a really deep difference. Right? Yeah, it's a really deep difference. Like, "Okay, these components might be classes, but I haven't seen a pattern in Angular 2 where you're gonna be inheriting more stuff." You're using Typescript. You might implement some interface, but you're probably not gonna be (mumbles). Maybe. Maybe not. So, once I figured out that distinction and like really these classes are just a great way to (mumbles). I was like, well, that just leaves me free to program however I want, functional or not-functional. So, that was easy for me.

    KENT: Cool. Anything else that you want to bring up before we say goodbye?

    SCOTT: Yes. If you know Angular 1 very well, and you think that's gonna help you with Angular 2, you're gonna be mistaken 'cause it's not.

    (both laugh)

    KENT: Nice.

    SCOTT: Honestly, if I didn't use React exclusively for like a year, I don't know if Angular 2 would have made as much sense to me as it does now. So, like that kind of helped me a lot. And I'm glad React and Angular teams collaborated on Angular 2 because it's (mumbles). In fact, me learning Angular 2 was just a lot of like, "Okay, this is how I do this in React. How do I do it in Angular 2? And it was just like (mumbles)." If I didn't have that comparison, I would have been like so lost, so lost.

    KENT: Yeah, it's a lot of the component model. Yeah, very cool.

    SCOTT: Inputs, outputs, stuff like that with props. It's all like the same thing.

    KENT: Very cool. Awesome, Scott. Thanks for coming to the show.

    SCOTT: Yep.

    KENT: And, yeah, we'll see you around the conference.

    SCOTT: Sweet.

    KENT: Thanks, man.

    SCOTT: Yep.

    KENT: And next we have Alyssa. Sergio, you want to come on? Alyssa is joined by a friend here.

    ALYSSA: Oh, middle.

    KENT: Yeah, come on. Yeah, come on sit in the middle. And we've got Sergio and Alyssa. Yeah. So, say hi.

    ALYSSA: Hello.

    SERGIO: Hello.

    KENT: So, this microphone is not powerful enough to pick you up if it's even like this far.

    ALYSSA: Okay.

    KENT: Yeah, make sure you pass it back and forth. Okay. So, Alyssa, let's get a quick intro to you.

    ALYSSA: Okay.

    KENT: So, who are you, where do you work, what do you do?

    ALYSSA: Cool. Yeah. So, Alyssa Nicoll. I used to work for Code School. This week, I don't. I work for a company called Weave Up.

    KENT: Congratulations.

    ALYSSA: I'm going to be a real developer.

    (Alyssa and Kent laugh)

    So, well, a little explanation there I suppose. I'm on the content team, and I got to develop a little bit, but I wanted to be a real developer and do it full time. So, now I'm at a small startup. I'm their fourth dev. And it's like an Angular Ruby on Rails stack, and I really love it. So, yeah.

    KENT: Cool. Sergio, you want to introduce yourself?

    SERGIO: Absolutely. So I'm a developer out of Orlando. I work for Code School. I still work for Code School.

    KENT: Congratulations.

    (laughter)

    SERGIO: Some (mumbles). No, I'm just kidding. (mumbles) I'm happy for Alyssa. But yeah, so I develop there. I help produce content as well. So, I'm involved with podcasts and courses, and all of that kind of stuff I guess. I think that's the gist of it.

    KENT: Yeah, I listen to the five minute of JavaScript podcast from Code School. It's awesome. I've heard both of you on there.

    SERGIO: Thank you.

    KENT: Yeah, very cool. So, Alyssa. Your talk, you're going to have to remind me because I'm drawing a blank.

    ALYSSA: Yeah, no. It's, I did it like just now-ish. It was from one to one twenty, and it was wanting it all versus being great.

    KENT: Oh, right. I was actually really interested in this talk. And I'm sorry that I missed it. I will watch it later.

    ALYSSA: They did talk about me doing it again actually.

    KENT: Very, cool.

    ALYSSA: We'll see. But, yeah, it was an inspirational like (mumbles) talk. But I submitted like five, so, you know, there were tech talks in there, but that one got selected.

    KENT: Very cool. So, why don't you tell us a little bit about like kind of the premise of your talk?

    ALYSSA: Yeah, no, the premise of my talk is that we only have so much time in our lives. And so, admitting that sad beautiful fact that we're never going to be able to do it all, if you admit it and you embrace it, and that will set you free. I talked about some pitfalls on our way to greatness, and just calling and surrendering things in order to do that. So, yeah.

    KENT: Yeah, that is exactly why I don't do both JavaScript Air and Angular Air. I just don't have time.

    ALYSSA: Yeah. (laughs)

    KENT: Yeah, I think that is something that our community really needs to... like the JavaScript community is just moving so dang fast. It's crazy. (laughs)

    ALYSSA: No, that was one of things I mentioned is like we're constantly being inundated with like all of this information, whether it's like a new framework, new conventions, new whatever. And so, being able to like draw that line for yourself and pick those like one, two, maybe three things that are most important. That's why I loved Code School, right? Like, I loved it there. It was an amazing job, had great perks and benefits. I had all my friends. I was comfortable. it was safe. But at the end of the day, I wasn't growing. Right, like I was comfortable. And I just, I had to get somewhere that I was challenged because speaking at conferences, and like being a developer and sharing my knowledge with the world. Like, that's my number one. And so, I just have to do even if it's scary or nauseous, or terrifying, honestly, I had to do it. And I think that others just have to, like find a way to work through your fear because that's something I hear over and over again is that fear holds people back.

    KENT: So, anyway, yeah, Sergio, what, as your like teaching people as a teacher at Code School.

    SERGIO: Yep.

    KENT: What are some of the things that you see new developers really struggling with with regards to this like? Like, I see a lot of new developers who are really passionate and want to get into it and just like be it all. Right?

    SERGIO: Absolutely.

    KENT: So, what are your thoughts on that?

    SERGIO: Yeah, so we just put out our first React course at Code School. And that was a decision we had to make from the beginning, right? When you look at React, there's so much noise. There's, how are you gonna build it? Are you gonna use Webpack? Are you gonna use System JS? And what about that JSX thing. I think that the main thing to struggle with is not having that clear path to become a real developer.

    (laughter)

    SERGIO: Like Alyssa puts it. So, yeah, because it's like Alyssa says, you're just bombarded with a bunch of stuff. And when you're starting out, how do you know what's important and what's not? So, that's one of the things that we really take pride at Code School is just giving you just enough so that you can now understand the documentation a little better, and get into the build tools and whatever other fancy thing you need. But absolutely, just, you know, trying to do too many things at once I would say is the number one thing people might struggle with.

    KENT: Yeah. I think Pete Hunt has a How to Learn React guide. Have you seen that? On GitHub? I'll see if I can find a link to it.

    SERGIO: I think I have. I think I have. Yeah, and it was really good.

    KENT: And he basically talks about that. He's like okay, start here at the top and learn these things until you feel like you've covered your use cases. And if you get to your use cases, don't continue down this list.

    SERGIO: Yeah.

    KENT: And so like, further on down the list is Flux, and Redux, and Relay, and that kind of thing. Because most use cases don't really apply to those things. And I think we get really overwhelmed when we see oh my goodness, I have to do all this stuff to build an app.

    SERGIO: Yeah, you kind of have to take out like your developer hat and really put on like the feature hat because as a developer engineer, I go for accuracy. I want you to know everything.

    KENT: Yeah, yeah. I totally get that, yeah.

    SERGIO: So, right now we're working on an Angular 2 course and we're just going through the same process. Like, one thing that we're discussing right now if we should whether like cover the router or not. And as a developer, I'm like, "How are you gonna do Angular 2 without router?"

    KENT: Totally.

    SERGIO: Right. But then, when I start thinking, you know, 'cause we make so many assumptions when you already know things. You know? (laughs)

    ALYSSA: I would like to speak on that. That was one of the I think challenges of being a content developer there was like I wanted so badly 'cause I'm like super interested in learning everything. And so, I'm like, "Well, why wouldn't our students want to learn about this, this, and that really small thing?" And so.

    KENT: Totally, yeah.

    ALYSSA: And so we're constantly asking ourselves at Code School the question of like, "Is this applicable? Like, directly applicable for our students?" And sometimes we even have to make the hard calls where it kind of is but not 100% of the time, just to make the best course with like bite-sized content, enough to get 'em started and going.

    KENT: Bite-sized content. Egghead.io.

    (laughter)

    ALYSSA: Egghead!

    KENT: Gotcha. Very good. Cool. I think that's all the time that we have, but I am definitely gonna be checking out your talk. That's awesome. Thank you for giving it, and thanks for being here.

    ALYSSA: Yeah, thank you so much.

    KENT: We'll see you around.

    SERGIO: Thank you.

    KENT: Next we have Aysegul. Thank you. And I'm pretty sure I pronounced your name correctly. Is that right? (laughs)

    AYSEGUL: Yes.

    KENT: Awesome. Thank you. Here, go ahead and take a seat here. Great. So, Aysegul, I'm sorry. I'm not gonna try with your last name. How do you pronounce your last name?

    AYSEGUL: I thought my last name is easier, Yonet.

    KENT: Yonet. Okay. That's right. Sorry.

    (laughter)

    AYSEGUL: No, it's alright.

    KENT: Cool. So, let's get a quick intro to you, who you are, where do you work, what do you care about?

    AYSEGUL: So, I work as a full stack software engineer at Autodesk. And I work on their A360 platform. And I'm also the CTO of Annie Cannons, which is a non-profit organization teaching human trafficking survivors how to code.

    KENT: Yeah. That's what I was trying to draw out of you. That's awesome. Can you talk a little bit more about that? I just think that's something that our community really needs, and I want to hear more about that.

    AYSEGUL: Sure. Thanks for asking. So, it's a great initiative actually that we have. This is our first cohort. And we have great supporters in the Bay Area. And this is our first class. But our main goal is to make our curriculum available everywhere, so anyone who wants to have a similar program can access to it. And it actually started... I mean my involvement with it started with teaching in prison. And I saw how people who had no technical background, had no experience even using a computer, get to learn so much in like six months. And it was super impressive. So, I thought we should give this opportunity to people who's been suffered before.

    KENT: That's so awesome. I think we could fill an entire show about that. So, let's transition now to what you're here at ng-conf for. What are you doing here for?

    AYSEGUL: Well, I'm here to meet people and enjoy my time. But other than that, I'm talking about pipes tomorrow at 9:30. Yeah.

    KENT: Nice and early in the morning.

    AYSEGUL: Yes. Yes. Before everyone's awake. Before everyone has their coffee.

    (both laugh)

    KENT: It'll be a good crowd for ya I'm sure.

    AYSEGUL: Yes. It's just quite amazing. Huge stage and so exciting to be here.

    KENT: Yeah, a ton of people. I think there are 1400 people here, or something like that. It's a big conference. No pressure. Sorry. I shouldn't have.

    (both laugh)

    AYSEGUL: No pressure.

    KENT: You're gonna do great. So, what are some of the like concepts about pipes that make them so much more exciting than, or like a big upgrade to filters.

    AYSEGUL: For me, well, there's a huge performance issue. So, there's asynchronicity. I have so much pressure now, we have.

    KENT: Yeah, we have a couple of Angular team members here. (laughs)

    AYSEGUL: Brad Green just walked in. (laughs) You can see them.

    KENT: Oh yeah, you can see 'em in the reflection.

    (both laugh)

    KENT: They're next.

    AYSEGUL: Yeah, overall, with Angular 2, I'm super excited mostly for the performance boost that we got. And I've been writing Angular 2 code now at Autodesk. And it's been great, and I love it. I want to share my excitement.

    KENT: Very cool. So, is there anything in particular that you're going to be calling out. Or, like how is your talk gonna go down? Are you gonna live code stuff? Or, you're just, or, you're gonna show diagrams? How is that gonna go down?

    AYSEGUL: So, I want to keep the surprise but... (laughs)

    KENT: Yeah, you can do that. That's alright.

    AYSEGUL: Yeah. My main idea that I want to communicate is the pure versus impure pipes. And I really want to emphasize that. And I will have some examples. But I really shy away from live coding. So, hopefully. I won't do that.

    KENT: That's okay. Yeah, not everybody likes live coding. So, what are some of the benefits of pure versus impure pipes?

    AYSEGUL: First thing is the performance issue, of course. If you have a pure pipe, you are not watching for that pipe over and over again. And it's so much faster. And for the impure pipes though, I really like the async  pipe because it gives me an opportunity to have the same data structure and not mess with my data structure and show it in a different way in different views.

    KENT: Very cool. I'm looking forward to hearing that talk.

    AYSEGUL: Thanks.

    KENT: Is there anything else that you'd like to like to specifically call out on whether or not it's related to your talk specifically?

    AYSEGUL: Oh, that's a big thing. (laughs)

    KENT: Yeah, you can say whatever you want, as long as it's PG.

    AYSEGUL: No. Well, yeah. It's just so exciting to be here. Thank you for having me.

    KENT: Thank you for coming on, Aysegul. I'll see you around the conference. Alright. So, we have a couple more people here. Come on and have a seat. Yeah. So, Jules is our guest here, but we're gonna... we're gonna bring in a couple more people. We're gonna get nice and cozy. Alright. Hi, there.

    BRAD: Hi, everybody. Hello, everybody.

    KENT: No, no. We're good. We're good.

    BRAD: We can share a, we can share a seat, man.

    KENT: We're good. Yeah. I hope that anybody who's listening to this right now needs to watch this.

    BRAD: Good, okay. Yeah, good. Perfect.

    KENT: Alright. We're a nice good family here. Before we get into, we wanted to talk a little bit about Angular community here. And so, before we get into that, I think it'd be nice to get a little intro to each one of you. So, we'll go this way. Just a quick intro. Who you are, and why you care about Angular. That should be easy for you. (laughs)

    MISKO: I'm Misko Hevery. I care about Angular 'cause it's my baby. (laughs) How do you not care about your own baby? Right.

    KENT: Nah. That's very true. (laughs)

    BRAD: I care because it lets us do fun things like this conference. It lets us talk to a lot of people who build cool stuff. Yep.

    KENT: Very cool, yeah.

    JULES: I care because I think this is one of the most amazing communities I've ever seen around a developer platform, and it's pretty awesome to be a part of it.

    KENT: Yeah, and that's a little bit about what you talked about. Right? With the Angular community. That's kind of your role in the Angular community is developer relations, correct? Can you talk a little bit about that?

    JULES: Yeah. Like I said, in the key note, I think it was a fortunate meeting in time where I had been in a state in my career, I had taken some time away from developers. I had spent most of career in developers. Took some time away to do something else at Google, and really missed developers, and was seeking, internally at Google, anyone who cared. Not like Android developers or any, but you know more around who's writing apps, and web apps, especially for big companies. And the person I was working for at the time said, "You need to go meet this guy Brad Green." And that's how I ended up in that conference room. And so, it was just like the right time with the right meeting, and it was all perfect.

    KENT: Awesome. So, what exactly is your role as part of the Angular team?

    JULES: Well, I think that's... it's so many things. So, I think, it's not just about developer relations or developer advocacy, although that is definitely a part of it. It's to make sure that people external to Google are successful with Angular, that we're hearing how they're using it, what their problems are, how we can help them, and understanding you know, especially large companies who have different problems than just JavaScript developers or systems integrators who are doing custom development and those types of things. But my job is also to help the team see things that maybe they haven't looked at before. Like, I censored Misko in an article because I didn't think he should say what he was saying.

    KENT: Whoops.

    (laughter)

    JULES: Or, I'll bring to light, you know, "Hey, we might need some marketing around this." I think one of the things people don't realize, and it's true I've met so many people here that don't realize it is, the Angular team is a team of engineers. And but I think it's so big external to Google that people think it's a Google product with PR, and marketing, and a legal team, and all of these functions that normally are around a product. And that doesn't exist. So, I think it's Naomi, and Brad, and myself who take all of those functions and try to influence the engineers where we can.

    MISKO: Thank you.

    (laughter)

    KENT: Lots of gratitude over here. Very cool. I think that's really interesting because I know that from some other communities, the fear of Angular being built by Google is that it's like, well, Google is gonna have a really big influence on this, and they're only gonna serve their own use cases. But that's obviously been proven wrong. Brad, do you want to speak to that a little bit?

    BRAD: Yeah. I mean it's a funny thing. We started as an open source project. And we did it 'cause Misko and I wanted to do it and we had some spare time. So, we're busier now. But it is this like a little bit of a, it's not a war, but it's balancing act for us because like we have to serve our roots in open source. And we're very popular inside Google now. And so, we have these two things. Mostly they're aligned. Like, 95-ish percent that there's alignment. But you know there's conflicts. And especially around tooling, this is something that's very different inside Google than it is on the web. And it's a thing that we're very passionate about, bringing these parts closer together. So, how much of internal and external tooling at Google can we match? Because honestly we have this problem in that we've built a bunch of interesting tools that only Google uses. And sometimes they're ahead and sometimes they're behind. And it's just better if there's an open ecosystem where you can prune them out with everybody. It's also nicer if we could hire people at Google who know the tools that we use, and they could be successful more quickly. And I think Angular's had a big role in proving that point to Google, that this can be a good thing for Google.

    KENT: Yeah, absolutely.

    JULES: Because one of the messages I really want to get out this year is that I think there's this notion in the community about Google... Google builds Angular for Google, like that's a bad thing.

    (Brad laughs)

    JULES: And I don't understand it because Google is Google, and I know that there's this magical like Google halo. Oh my god, it's Google kind of thing. But we're still just a company, like every other company in the world. We have a legal department. We have marketing. We have HR. We have all of those same business functions that any other company in the world has. And so, yeah, we're building Angular in large part for Google, but those use cases are not different than any other company on the planet that has those use cases. And so, my perspective is this is a great thing. It's not a bad thing that we build it for Google, and that there's this sort of tension because what we're doing for Google, you can bet is gonna work for most every other company on the planet.

    KENT: Well, Misko, why don't you talk a little bit about like some of those use cases that you've had to really consider when working... trying to cover Google's use cases, which kind of overlaps with everything else?

    MISKO: Right. So, Google's use cases, they have big apps, right? The app you're working on, there's 100 engineers or something? I don't even know how many.

    KENT: That's a lot of engineers. (laughs)

    MISKO: Yeah, it's a big app. It's millions of lines of code or something. It's just huge.

    KENT: Wow.

    MISKO: Hundreds of thousands. And so, how do you build a framework so that it can grow with it? You know, it's one thing to be able to like, "Let me hack something together without types. And I know how all the system works." When you throw 100 people at it, how do you make sure they have a shared mental model of what the app is? That's the hard part. Right? And so, we wanted to make sure that it also is available for that use case as well. And a lot of times, we start actually making sure that the complicated use cases work first. And my philosophy is always make sure the complicated stuff works, first, and then go back and say, "Okay, how can I add sugar to it so that it's easy for everybody else?" If you start it the other way around, oftentimes, you get yourself into trouble. But if you start that direction, it usually works out.

    KENT: I think that's actually like just a good general idea in not just designing a framework but designing like, if you know that there will be complicated use cases 'cause obviously you don't want to you know there's the "you ain't gonna need it" philosophy and stuff. But if you know that there are going to be complicated use cases, you know striving to cover those first. And then, as it just so happens, those will make it simpler in the future as well.

    BRAD: I think this is one of the big challenges we're tackling with Angular 2 is that people want to be able to go from the small, say on mobile, up to the large... 'cause and back to your point, we have teams who are delivering for the mobile web. And I need to, I've got a tiny team working on it. I have to be able to be successful and deliver something that's very svelte and loads quickly, all the way up to these very large applications like our CRM solution (mumbles) Google, and AdWords, and the Cloud Platform, and all of these big players.

    KENT: Yeah. Very good. Jules, do you want to talk a little bit more about what community members can do to help with the work that you're trying to do and improve the community aspect of the Angular community?

    JULES: Community, yeah. I think there's so many opportunities for people to contribute back to Angular. I think a lot of the community is under the misguided notion that the only way to really be a contributor is to contribute to core. And that's absolutely not true. In fact, as brad just mentioned in our last interview, there is definitely like a line that you can grow from starting off in Angular, and blogging and helping the rest of the community understand Angular, to contributing to side projects that are associated with Angular. As I mentioned in the key note, for example, the CLI was largely not done by us. It was done by our community and those are really important and valuable things. And then, as you get your feet under you, and you're sort of in the community, and you've understood Angular 2, and you're working towards helping everyone else understand Angular 2, and then that's when contributing back to the core becomes like the appropriate thing to do. But I definitely think there's that growth period, and there's so many opportunities. And, for example, I've had four people come up to me at the conference today and recognize that we need our docs translated.

    KENT: Oh, yeah, yeah.

    JULES: And we've had, I've had someone in Mexico offer to do Spanish. I've had someone in India offer to do languages that are specific to India, and we've had Chinese contributors that are willing to do it in Chinese. And I had somebody from Japan offer today as well.

    KENT: That's fantastic!

    JULES: It's like all these contributions are really valuable. And again, we're in open source framework, so, those types of things are not things that Google's gonna do for us where we're gonna do all that ourselves. And so, there's.

    BRAD: And they can't get it right (mumbles).

    JULES: (laughs) Yeah, I was just gonna say.

    BRAD: (mumbles) That's gonna come from people who use it.

    KENT: Yeah, you're gonna wind up with Google Translate on the page. (laughs) Yeah. That's not gonna work.

    BRAD: It's a little better than that.

    KENT: No, no, Yeah, right. Sure. Yeah. I think that's a good point though. I have a blog post recently called open source stamina, and in it I basically say, you contribute best to something you use regularly. And so, I think that like that's why some of the open source projects I've had kind of have faded a little bit from my contributions because I don't use them anymore. I'm kind of out of context. But just like you were saying with translations, it's better to have people who actually use it and speak the language to do those translations. So, it sounds like there are a lot of things that people could do. Is there anything else in particular that people can do to contribute back to the Angular community?

    JULES: Aside from like blogging and contributing to different libraries and helping us get out there with meet ups and building more community...

    BRAD: (mumbles) Like bringing Angular to your company and evangelizing it. It's huge.

    KENT: Yeah, sorry. I don't think that anybody can hear you.

    BRAD: I'm sorry. Yeah, sorry. Even within your own company, sometimes it's if you have a small company, you can bring Angular in and teach everybody. Or, be that small seed project that shows people the advantages on how successful you guys can be.

    KENT: Yeah, very cool. Yep.

    MISKO: I have one thing that's actually been on my mind, and I don't know how to solve it. And that is, we're drowning in issues. And so, there's this huge problem of like just figuring out which of the issues are important, which are you know that can wait, which ones are actually obsolete. They already had been fixed because so many things have changed. And I don't know how to solve this problem, but I was kind of hoping maybe magically the community would stand up. But maybe there's some (mumbles) or curation. I don't know what the answer is. Yeah, but this is another interesting area where somebody could help.

    KENT: Yeah, I know the Node Project has a similar problem. They just get clobbered with issues. And there's a blog post called Healthy Open Source where they have a really interesting approach to managing their community. But still, they're just totally clobbered with issues. One other idea, I used to do this. I don't do this anymore. Maybe I should. But every single day in the morning, I would go to the Angular One issues, and I would find an issue and triage it. And see like is this still an issue? Like, reproduce it. Whatever was needed. And I think that's something, if we got enough people doing that that would be a huge deal for the Angular community.

    JULES: You heard it here first.

    (laughter)

    JULES: Help Misko, triage issues.

    BRAD: Let's put some structure around it first 'cause we don't want everyone triaging the same issue.

    KENT: Yeah, yeah. I definitely think that there's opportunity for tooling around that, and yeah, you got it. Take it away. (laughs) Cool. Is there anything else you'd like to share with our community before we say goodbye?

    JULES: Thank you.

    KENT: Yay.

    BRAD: One of the things that I like the most, so we love the web platform and we actually, I think it's not obvious to folks, but we actually love people who think they're our competitors. Like, we hang out with the Ember guys. And we're doing the same thing, and so like we're kin folk. And we've worked with them on standards and whatnot. And you know, I want to build a stronger new thing with the React team. Like, we already started working on React Native. And Misko's talk to folks about zones. I think like where we can collaborate across communities is also a wonderful thing. And try to avoid this competitive "my thing is the best," if we can. I think there's things to learn from everywhere. And so, let's be part of a bigger community.

    KENT: That's great. Misko, did you have anything?

    MISKO: I was just gonna kind of echo what Brad said. I always find it kind of liberating doing open source projects because you don't have to compete against everybody, right? It's just like, "Hey, this is what I love doing. And I'm just gonna do it whether it's gonna be successful or not because it's just my passion."

    KENT: Yeah. I think that's a great point, and a good thing to end on. So, thank you for coming on. Really appreciate it, Jules. Thanks for dragging these two to come with us. And yeah, we'll see you around the conference. Thanks!

    BRAD: Thank you.

    MISKO: Thanks, man.

    JULES: Thank you.

    KENT: Yeah, thanks. And that is our show. So, I'll just wrap us up with a couple closing announcements. So, yeah, a huge thank you to all the people who showed up for this show. I think it was a great show and learned a lot of really cool things. So, yeah. Just to wrap up, sorry we don't have tips and picks today just because the way that things are working. But I wanted to give a shout out to our silver sponsors O'Reilly Fluent Conf, Auth0, and Trading Technologies. They're awesome. Go check them out. If you have suggestions for us on topics or guests that we should have on the show, go to suggest.javascriptair.com, and there's a form there you can fill out.

    If you have feedback for the show, like especially this show, I'd really like to get some feedback on the conference shows, even if it's just like, "You're doing great. Keep it up." Go to feedback.javascriptair.com and submit feedback there. And then, if you want to sign up for our weekly newsletter, we send out show notes, and show highlights, and those kinds of things. Go to jsair.io/email. And you can see previous newsletter emails and sign up for future ones. And then, remember next week, we have a show called Inclusiveness with Omoju Miller. It's May 11th at 12 o'clock Central Time. And with that, that's our show. So, thanks everybody. And I'm going to awkwardly stand up and walk over to my computer to click this Stop Broadcast button. Goodbye!
  `,
}
