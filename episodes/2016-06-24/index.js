export default {
  time: '11:45',
  title: `On site at KCDC`,
  guests: [
    {
      name: 'KCDC',
      twitter: 'kc_dc',
    },
  ],
  description: `
    We'll be live and on site at the Kansas City Developer Conference! This conference covers all aspects of software development and we're sure to have really interesting conversations with a lot of people!
    <br />
- [Joe Andaverde](https://twitter.com/joeandaverde) - Asynchronous Patterns in JavaScript
- [Nate Taylor](https://twitter.com/taylonr) - TDD, RamdaJS, and Semantic UI
- [Cory House](https://twitter.com/housecor) - Pro JavaScript, JavaScript Showdown, and Conference Speaking
- [Matthew Renze](https://twitter.com/matthewrenze) - Data analysis and visualization with the R programming language and Clean code
- [Kirsten Hunter](https://twitter.com/synedra) - Being a Polyglot programmer
  `,
  youTubeId: 'ANTWWoKrwGE',
  podbeanId: 'nsxgx-607238',
  shortUrl: 'http://jsair.io/kcdc',
  transcript: `
    KENT: And we're live with JavaScript Air. Hello everyone, my name is Kent C. Dodds and I am on site and live at KCDC. That's not "Kent C. Dodds Conference," that's "Kansas City Developer Conference." And we're super excited to be here to talk to some of the attendees and speakers here at the conference, about what's going on at this JavaScript, or in general developer conference.

    So before I get into things too much, I just need to give a shout-out to our sponsors that we appreciate so much. They're responsible for this microphone that I'm holding, and so hopefully the audio quality is better than some of the past conference shows that I've done. But yeah, thanks to these sponsors.

    So our first, our premier sponsor is Egghead.io. They have a library of bite-sized development training videos. Mostly centered around JavaScript, Angular, Node, React, and Webpack. Shout-out to my course that was released just last week.

    And then for our gold sponsors we have Frontend Masters, they're an expert-led workshop, recorded workshop about JavaScript and front-end topics. It's super awesome, go check them out.

    TrackJS, tracks bugs in your code before your customers notice them. And they have a cool telemetry timeline that allows you to see like what the user was doing when the bug happens. So, check them out at trackjs.com.

    SparkPost is actually sponsoring this conference. They're here and they're awesome. I recommend you check them out. They are email, so you can build something awesome with their SMTP relay or with their Node library, or their other like clients for other languages. And yeah, you can send 100,000 emails a month for free. Crazy!

    And then WebStorm. JetBrains is actually also supporting the conference. JetBrains is like the company behind WebStorm, it's a really intelligent IDE for JavaScript. It's really good, so I recommend you check them out.

    And then as always, remember that this is a weekly show. So next week, at the normal time, we'll have web animations. And we'll be joined by Matias, Sarah, and Rachel to talk about animations for the web, which is a pretty exciting topic. So I recommend you check that out.

    So to get us started on our topics here, we're going to be talking, like I said, with speakers and with the attendees. We're gonna start out with an attendee, and that is Alex, come on and join me Alex.

    ALEX: Hey, Kent.

    KENT: Hey, thank you for coming.

    ALEX: Hey, thanks for having me.

    KENT: Do you wanna give us a quick intro to yourself, who you are, where you live, what you do?

    ALEX: Yeah, so my name's Alex Munda. I live here in Kansas City. I'm a full stack developer at Staples Promotional Products. And I also co-organize the Kansas City JavaScript Meetup.

    KENT: Sweet, yeah I wanna talk to you about the organizing a meetup. Because I think some of the people who are watching or listening, might be thinking about like, "I kind of wanna start a meetup." And so, yeah, getting some of your experiences organizing would be great. But I first wanna ask you about attending KCDC. So, have you attended other conferences before KCDC?

    ALEX: Yes, I have attended other conferences not JavaScript related, which this is awesome, that it is, more focused on JavaScript. But yeah, and this is my first year here at KCDC.

    KENT: Cool, so what are some of the highlights of the KCDC conference?

    ALEX: So, some of the highlights so far, the first day was all precompilers, so like eight hour, four hour sessions. I went to yours, your ES6 on. It was awesome. Highly recommend checking out the repo on GitHub. And, so that was really cool. The first day, keynote was great. And then just jumping straight into sessions. There's two JavaScript tracks at this conference. So that's probably the biggest focus, I would say. But if you're not into JavaScript, you can always go the .NET route or the data route or there's kind of just like a be better at life route. And so that's kind of cool too. So yeah, it's been awesome.

    KENT: Well yeah, this is kind of a unique conference for me because there are 13 tracks. And so there's so much to. Have you done anything or like gone to any sessions that weren't at all related to like your day to day work?

    ALEX: Yeah, I kind of went to the functional programming in C# one which is really, really interesting. Some of the same concepts that you would use in functional JavaScript all just kind of being used in C#, which, seems like there's a lot of overhead to do that in C#, so I would just say stick to Node. But if you do wanna use C#, that's definitely something to check out.

    KENT: Very cool. So let's shift over to the organizing piece of it. So, you organize the Kansas City JavaScript Meetup, here in Kansas City. So, what are some tips that you would give to somebody if they wanted to or like if they're organizing a meetup?

    ALEX: Yeah, so I would say you could do it by yourself, but it's always better to do with a group. Get a couple friends together that are passionate about something, in this case, it's JavaScript. Go to meetup.com, the startup fee is very minimal. Get your group, and then just kind of spam Twitter, get it out there and you will always find people that are interested in the same things you are, wherever you are. So, that would be my advice to somebody trying to get something started in any city.

    KENT: Now, food and venue are two like kind of key things for a meetup. And obviously, you're like paying that out of your pocket.

    ALEX: Right.

    KENT: That would be like crazy expensive. So, do you have any tips on getting sponsors and like, you know, encouraging sponsors to donate time and money?

    ALEX: Definitely yes, so just kind of get the word out there, send them emails, tweet at 'em. They're always willing, you say, "Hey, we'll put your link on our meetup page if you just wanna bring pizza to the next meetup or do something like that." And usually you will find that there are more sponsors than you can actually maintain. So that's always a good problem to have, so.

    KENT: Sweet, sweet. Cool, well go start a meet up. It's good. Okay, thank you so much Alex, I really appreciate it.

    ALEX: Yeah, thanks for having me.

    KENT: Yeah, sure thing. Next we have Joe. So, come on down Joe. Thanks for coming on man.

    JOE: Thank you!

    KENT: So, Joe why don't you give us a, just a second introduction to yourself, who you are, where you work, what you're interested in.

    JOE: My name's Joe Andaverde, I work for a startup called SMRxT. We essentially try to change patient behavior by helping them take their medication on time. We know if they've taken it or not taken it, and so we try to intervene and help change their behavior. And hopefully have a better outcome.

    KENT: Interesting. So I'm actually kind of interested about that. So, are these patients like forgetful, or they don't want to, or what are some of the like use cases of your product?

    JOE: Really, yeah, forgetful, it's all the above really. Particularly the use case with our product is that there's some very expensive drugs, that it's a very important not to miss.

    KENT: I see.

    JOE: And even. Even forgetting is a bad deal. Some drugs, "Hey, I forget. I can take it tomorrow." But there are some that, "I forget," and it starts a whole new therapy all from the start or it could it could affect your life.

    KENT: Yeah, that sounds kind of scary. Thank you for doing that. Cool. So Joe why don't you give us a brief rundown of what you're here at the conference for? What's your talk on?

    JOE: Sure, I'm here to speak. I spoke on, I think the titles called Deep Dive Into Asynchronous Patterns in JavaScript. The gist of it is, is to give an overview of what's available in JavaScript to perform asynchronous actions. And then of course, just sort of talk about all the pitfalls of each of those, and why you might choose one pattern over another.

    KENT: Okay cool, so what were some of these asynchronous patterns?

    JOE: For example callbacks, that's been around since the dawn of time. Promises, generators plus promises, async await, which is to come in the future. Yeah.

    KENT: Cool, so is there any particular like asynchronous pattern that worked well for one scenario but not for another? Can you give us examples of that?

    JOE: You know, I think, it just depends on what libraries you're consuming. Some libraries have a callback interface, and so you are kind of forced into doing that. Some libraries provide callbacks and promises. So it's really just the environment you're in. So just being aware of all the patterns, and knowing how to apply them and knowing the pitfalls of each of those. I think that's what's important. Not necessarily choosing one over the other.

    KENT: Okay cool. Yeah, I think that seems to be like a pretty good stance, diplomatic stance even (laughs) about these different callback patterns. I think personally that it's good that we have all these different patterns available to us because our applications are varied and our programming styles are varied. And it's cool to be able to utilize these different, different styles. And JavaScript being just such an asynchronous programming language, yeah, makes a lot of sense.

    So, I wanna ask you a little bit about speaking at conferences 'cause I imagine people listening or watching are really interested in like how you do it, how do you get into a conference? And so, what are some tips that you would give to somebody who wants to speak at a conference?

    JOE: You know, the tip I would suggest is submit some talk, even if you haven't prepared it yet. It'll force you to do it. There's nothing better than having some sort of deadline, I think, to force you to just learn about something. And really, it's all about just repeating what you've learned and trying to do it in a way that other people can absorb what you've learned in a faster format. So my tip is just do it. Find something you're interested in, maybe you have a little bit of expertise in, submit a talk, and if it gets accepted, now you have a date.

    KENT: Yeah.

    JOE: So.

    KENT: I've done that countless times, yeah, that's fantastic advice. Very good. I would like asterisk that, make sure that what you're submitting is possible. (laughs)

    JOE: Oh sure, yes, yes. I was considering submitting for Mconf right before Strange Loop. And I was going to submit something that may or may not be possible, but I think I'll, I think I'll pass on that for now.

    KENT: Yeah, yeah, probably a good call. Yeah, like I've submitted some talks where I'm like, I've never actually done this before, but I know somebody else has done this, and so like it's definitely possible. Or like, I could see, you know a very real way that this could be possible. So yeah, I think that's a great way to learn new tech.

    JOE: Oh definitely, there's nothing better than having sort of the deadline and the expectation that there's gonna be potentially hundreds of people counting on you giving a, you know, a coherent speech (laughs).

    KENT: Yeah, very true. Is there any last things that you'd like to share with our viewers?

    JOE: Not really. I, really thanks for having me on here.

    KENT: Cool yeah, thank you Joe. We'll see you around the conference.

    JOE: Thank you.

    KENT: And next we'll have Cory. Come on down, you're the next contestant on JavaScript Air. (laughs) Just joking. Cool, so Cory, thank you so much for coming on.

    CORY: Thanks for having me, Kent.

    KENT: So Cory, you're kind of like a stalwart here, like you've been in Kansas City, you've been going to KCDC for a long time, right?

    CORY: Quite a while. I think this is the fifth year or so? I don't know how old the conference is, it's about--

    KENT: It's eight years.

    CORY: It's eight years?

    KENT: Yeah.

    CORY: Okay, so not since the beginning.

    KENT: Yeah, the beginning was like 100 people, free conference, right?

    CORY: Yes well, first year I went was free too, so I guess that would of been the third year, yeah.

    KENT: That's very cool, it's now just for those listening, it is 1,600 people attending this conference.

    CORY: It's intense. You go to lunch and you, it's hard to find people you know. Go meet new people.

    KENT: Yep, it's very cool. So, Cory, you had a workshop and you have three talks, right?

    CORY: Yes.

    KENT: That's a lot of work for you.

    CORY: I have issues. (laughs) I need to say no sometimes.

    KENT: Yeah well, one of your talks is about talking at conferences, right? You wanna talk about that?

    CORY: I like going meta, yeah so, that talk is close to my heart because I started speaking because like a lot of people I found it scary, so I thought, I'll at least give it a shot. Now I did never expect to find that I really liked it, but as I've talked to more and more speakers, there's a lot of people that way that thought, "Okay, I'll try it," and my frustration is there are a lot of people that feel so strongly that if they got up there they'd be miserable. And I go, well, but until you've tried it because it is nothing like when you're in high school and you were forced to get up there and explain how to tie your shoes in front of people. You're getting to talk about something that you're excited about. And you're talking to a room of people that had a choice between, like at this conference, there were 12 other sessions they could of went to, but they walked in, they sat down in your room, and they said, "I wanna listen to you for an hour."

    KENT: Yeah, they're voting for you.

    CORY: Yeah, and that is awesome, and that gives you so much energy to go, "Oh, thank you," that is, to give you, to give me an hour of your life, that's really meaningful to me and it encourages me to make sure that I bring my A game. But it also, in the same token, takes the pressure off because I go, "I know they wanna listen. They're really here to learn, so let's do it."

    KENT: Yeah, I think that's a great perspective to have, like it is totally nerve-wracking, like even me as someone who's had an opportunity to speak at several conferences, every single talk I give, I'm still nervous. So if you feel like you'd be nervous before giving a talk, like that's pretty normal. There's nothing wrong with that.

    CORY: Absolutely.

    KENT: Let's talk about some of the other talks that you're giving at this conference. You just barely gave a talk comparing Knockout, Ember, React, and Angular. Kind of dangerous subject, right? So, why don't you talk a little bit about what the content of that talk is all about?

    CORY: Well, so if I was to sum it up, there are no losers in this race but I recognize that it is also really valuable to have an opinion on the matter. I don't believe in trying to be wishy washy and just say, "Oh, everything's good, everything's happy." The fact is, everything has its benefits and has its downsides. And what I really wanted to focus on was the level of opinion that each of these has, dictates the learning curve, and also dictates the amount of fatigue that you have.

    So for instance, I have felt a lot of fatigue as a React developer. Fatigue is, as in, am I choosing the right way to do AJAX calls? Am I choosing the right way to handle promises? Should I, before it was which Flux implementations should I use, on and on. And, that's why I created a starter kit, and one of the jokes that I had in there was, I created a starter kit to try to make it easier to make decisions for people, but there are 75 starter kits out there if you Google for it. And I'm not kidding. I'm not making that number up. There are legitimately at least that many.

    So, that can be overwhelming, and that I think is precisely why people are excited about Angular 2 because you just, if you choose Angular 2, you go read the docs, and then you're rolling. I mean, they have thought things through and covered those. Whereas in React, you will be making a ton of decisions and constantly questioning, "Should I follow that pattern or this pattern? Or use this library?" It's become a large portion of my job. And I have that luxury as a software architect, other people may not have that luxury. So, it's a really a tough call between all of them, but making it clear what the trade-offs are, was my goal in there.

    KENT: Very cool. And I attended that talk, I thought it was great. And you did make those trade-offs clear. And then you also had 12 point, or 12 keys of professional JavaScript, right?

    CORY: Yes.

    KENT: So, yeah, can you give us just a brief rundown on what that was about?

    CORY: Yeah, the brief summary was that you got to be the rock star at the end. (laughs) Which probably looks scripted, but absolutely wasn't. I had no idea where you would fall on the list, but the whole idea of this talk was, "Here are 12 pretty fundamental things that I think would be really helpful for people to do." And I went in there knowing that the large majority of people are not doing probably even close to 12, then I will say throughout my career I have not either. In fact, I put this list together, basically saying, after having a few months, having the luxury of being a software architect that's focused on the front-end specifically, I was able to really think carefully about what I feel like we should always be doing. And it's, there's nothing earth-shattering here, running tests, minifying, linting, having an automated build, knowing every time that I hit save that all this stuff happens automatically. But most people don't go through the work of setting all that up. So, I wanted to see where the room sat. And that's why I posted up on YouTube, the video, and you can see that Kent gets to be the one person in the room that was doing all 12, so.

    KENT: Pretty, pretty fundamental things. I think, if you're building a serious application, you should be doing these things. I was actually pleased to see that there is an absence of like the hyped up features like hot module reloading, like that's a cool feature--

    CORY: It is cool.

    KENT: But it's really not one of the key points to Pro JavaScript. Is there anything else that you intentionally left off of that list?

    CORY: Well, I think it's interesting that hot reloading never came to my mind as something that should be on there because it's also not possible everywhere.

    KENT: Very true, yeah.

    CORY: So, my thing was, I wanted something that was across the board and useful. And in fact, when you look at most the talks that I try to do at conferences, this is my tip to speakers. I personally like to submit something to a conference that I feel like a lot of people at the conference will be interested in. And that depends greatly on the conference. So for instance, my 12 keys, pro JS, I probably wouldn't submit that to a JavaScript-specific conference because it would be too introductory. But at other conferences that are more broad, that have people that are probably more fixated on the server than the client, then it's really useful because you go okay, there are a lot of people, JavaScript is their second language. And I feel like that's a good talk for people that are spending most of their time focusing on the server side. I'm seeing more and more that, you know, JavaScript is swallowing the world. And what we're seeing is, a fair number of developers that are doing JavaScript reluctantly. So I'm.

    KENT: Yeah, that's true.

    CORY: And I was one of those until I kind of, I turned the tide and decided, "Why don't I make this my specialty?" Because I look around Kansas City and I go, "There's just not enough JavaScript developers." And I know this 'cause I'm interviewing them, and it's hard to find people to interview. Of course, that's a problem across dev anyway, but it is particularly a problem here.

    KENT: Yeah, that makes a lot of sense. And I think it's only gonna get more so, JavaScript is becoming even more ubiquitous than it already is. So yeah, JavaScript's a good bet. (laughs) Cool, so we've just got like a minute or two left, you did have a workshop about React, is that right?

    CORY: Ah no, so.

    KENT: Not about React.

    CORY: My workshop was showing how to build, basically a starter kit. I'm a big believer in this idea of starter kits because that was the summary of my 12 keys talk was, all of these things that I say that we should be doing, if every time you have a new project, you get together as a team and say, "What testing library should we use? How should we configure ESLint? Where should we be putting our tests? What assertion library?" And the list goes on and on, "How should we configure Babel?" No, you're gonna waste a whole bunch of time navel-gazing, what you wanna do is hit the ground running.

    So I say, one time, get together as a team, look at all the starter kits out there, find inspiration and build your own, and then make it yours. And I suggest put it up on GitHub, maybe it'll catch fire. Ours has been great because effectively people are doing my job for me. My job was to keep that up, and now a lot of people are submitting pull requests 'cause it got fairly popular, didn't expect it. But the real key is, now when we do something new, we don't have to have a conversation about it. When we do have conversations, it's about, "Hey, here's some pain points in our starter kit. Let's make it better, and let's iterate." But we know any future thing that we do, benefits from all the decisions, all the blog posts we've read, all the team's knowledge is encapsulated in this one place.

    KENT: Yeah, very cool. So yeah, like I'm sorry we don't have enough time to keep on going, I do have some more questions, but, I really appreciate you Cory coming on to chat about some of these things. And thanks for making, or helping build the JavaScript community in Kansas City. Specifically React, I'm a big fan. (both laugh)

    CORY: I noticed your shirt.

    KENT: Yeah, yeah, so cool, thank you very much Cory.

    CORY: Thanks for having me man.

    KENT: Okay, next we have Nate. Come on down Nate. Thank you, thank you for coming on the show Nate.
    NATE: Thanks for having me.

    KENT: So, Nate do you wanna give us a quick introduction to yourself, who you are, where you work, what kinds of things you're interested in?

    NATE: Sure, yeah, so I'm been doing software development professionally for about 15, 16 years now. I've been doing it not professionally for about 30 years, you know, started as a little kid. I work at a consulting company up in Omaha, Nebraska called Aviture, and we do a lot of, we do everything, we do defense contracts, we do commercial, we do startup work. We help, we actually invest in startups and help them get going. You know, they got the idea, they don't know how to do it. And so, I've covered the gamut, started as a C++ developer, then did WinForms in .NET, and then finally moved to the web only about four years ago. I've only actually committed HTML, CSS, or JavaScript within the last four years, despite doing this for about 15, 16 years.

    KENT: Wow, yeah, I have even less experience doing development in general than you have with just JavaScript, so. (both laugh) So, very cool, so here at the conference, I believe you have two talks.

    NATE: I have three actually, but yeah.

    KENT: Okay, so one of them is about Ramda and functional programming, can you talk about that for a sec?

    NATE: Sure yeah, so, actually what happened was I went out to lunch one day with a friend that works at Mozilla, and he was the guy that kind of got me into JavaScript. And I was talking about Lodash, and he said, "You should check out Ramda." So I went back to the office that day and started looking at Ramda, and I remember emailing him and going, "This looks like the same thing as Lodash. Why is this better?" And he kind of challenged me to look at it a little bit more. And he sent me some code examples, and I started seeing the functional paradigms that come out when you use RamdaJS. And it started changing my mind of how to write software.

    And functional programming is something I've been interested in. I found Haskell maybe six years ago, and just could never make it click in my head. And so JavaScript was kind of the gateway for me to start understanding the functional nature of programming. And so Ramda's just been a library that I've been using there to really nail down how to do functional programming. And so in the talk, we covered that Ramda's three overarching concerns were immutability, currying, and functional composition. And when you start combining those things, the code gets easier to see, it gets easier to read, and it should reduce bugs because of those things.

    KENT: Now, some idea just popped into my head. It seems like in the earlier days, people spent a lot of time in programming, thinking about like, "How can I make this fast?" They just spent like, the hazard, everything else, "I just wanna make this fast." And so they didn't really care quite as much about the readability of the code. Now it seems like, let's think about making the code fast later, if it becomes a problem.

    NATE: Right.

    KENT: Let's focus on readability, maintainability of the code base. Would you say that's kind of why functional programming has been taking off recently?

    NATE: I think so. I think also that functional programming has got some ability, depending on the language that you're doing, but it's got some ability to handle some of the speed as well. So, a functional language I'm playing with right now, and it's, when I say playing, like within the last month, is Elixir. And it's built on the Erlang VM. And, so the way I'd like to describe it is, Erlang was built for massively distributed systems to run concurrently. And if you think of your CPU, it's a massively distributed system on one processor, right, 'cause you have all these cores.

    KENT: Yeah sure.

    NATE: And so Elixir takes advantage of that. And, so it can spin things off and do all these different things. And so I was actually reading a book about it, and this guy did the Fibonacci of 2,000 and the thing actually processed, right? And you think about how many times--

    KENT: It finished.

    NATE: It finished, right. And so, I think that's, I mean functional programming, I think, reduces bugs. It's more readable, but then I think there's some benefits too, that can make it, you know, more performant. Again, depending on the language, you can, you can make it slower as well, I suppose.

    KENT: Sure yeah, I imagine so. In JavaScript context I was thinking like, all this currying, you're setting up a whole lot of like state and memory, just to--

    NATE: Yeah.

    KENT: You know, do some calculations, but really like most of the time, you don't need to worry about the performance optimizations, even in that kind of a scenario.

    NATE: Right yeah, so when I write my code, I think most of the time I optimize, first of all, if it's testable.

    KENT: Very good.

    NATE: Then second of all, is it readable? And then if I need to, I can optimize for speed. Because the places that I'm gonna need to optimize for speed are fewer and farther between than the places I need to make sure it's readable and testable. And so that's kind of at least how I approach software.

    KENT: Yeah, that makes sense. Cool, so let's talk about your other talks. Now, I can't quite remember them--

    NATE: No, that's fine, so another one, the one I gave yesterday was how TDD improved my quality of life.

    KENT: Oh yeah, yeah, I love that talk title. Let's talk about that.

    NATE: Okay, yeah so, I didn't do TDD for a long time. And I had the same developer frustrations that everyone has where I make a change over here, and it breaks something over here. And so when I fix it here, it broke it here, right?

    KENT: So frustrating.

    NATE: You're the kid sticking your finger in the dams, right? And you run out of fingers and you're like, "I don't know what to do," right? And so that's really what pushed me going in that direction. And so I started looking back over the last four, five years, six years of doing TDD, and realized my life has measurably, not measurably, but my life is better than it was. I don't go home grouchy. I know when I fix something, I know when I break something because my test break. And I also know what I did at the end of the day.

    And so, one of the tips I like to give people is if you're doing TDD, and you're gonna stop for lunch or a meeting, or you're gonna go home, stop at the failing test. When you come back in the morning or when you come back after lunch, you know what you were working on, even if you don't know exactly, you know, I have to make that test pass. And so it was tips like that, and it was things like that, that you know, I've just showed you, this is one way of looking at TDD. Because I think too many of the talks on a lot of that kind of stuff is like, "Well you should be doing this."

    KENT: Yeah, it's very much shaming.

    NATE: Right. And so I wanna turn it around and I don't even wanna necessarily focus on the details of how to do it, but I wanna get people excited about it. Like this is something I, I want that. I wanna not know, I wanna not be breaking stuff constantly. And so it's much more of a focus of that. Here's some of the things I'm getting out of this. And some of them, I think are prescriptive, some of them are just gonna describe my experience, right? So I'm not guaranteeing everyone's gonna have all these benefits, but I have, and other people will have as well, so.

    KENT: Yeah, that makes a lot of sense. Yeah, I actually really like that idea of leave work with a failing task. Like that makes a lot of sense. So, I actually, going off on that, we talked a little bit during breakfast yesterday I think. And I find it a lot easier to do test-driven development in my libraries or in utility functions, than I do in like a UI-centric library even, or application.

    NATE: Sure.

    KENT: So, do you have any tips on, or is it even useful in an application context? And if it is useful, do you have tips on how to make that easier?

    NATE: Sure, and I think that's a common pain point that a lot of people have. Because I think a lot of times when we start getting away from the UI, we start thinking more of the pure functions, right? I'm giving it this input, I'm taking this output, and we can start thinking of processing that. And I actually did an interview one time and at the end of the interview they said, "If we hire you, would you wanna do front-end or back-end?" And I didn't even pause, I said back-end and they were, "Why? Everyone wants to do the front-end." I was like, I know when the back-end's right. You know, 'cause I can, you can give me these inputs or whatever.

    And so I was that way for a long time too, and I think what finally started working for me was, you know, I think it was Uncle Bob or Martin Fowler, one of them talked about designing, design to an interface. And so Uncle Bob says, "How do you test that you have a piece of software that rings the bell, how do you test the bell rings?" Well you can, but it's gonna be a lot of setup. And so probably what's better is that you test that the message got sent to the thing that rings the bell. And then every once in a while, you run the whole program and make sure the bell rings.

    KENT: Or write an integration test.

    NATE: Or write an integration test, right, yeah. And so that's what I do a lot. I test a lot of, you know, my view model, or what's gonna be backing that view, both directions. And then, I don't really care so much about what the UI looks like. I don't necessarily care about the classes. I'm not gonna test that, this has the red class, or this has the large class. But I'm gonna make sure that my model is largely there. And that was something I actually started doing before I started doing JavaScript. I started doing it with .NET Razor views. So I figured, if I can have my entire view class tested then I know, reasonably well, that my view is what I want. And then I can spend more time just, "Okay, let's get these things lined up, let's play around with the HTML."

    And so that's how I approach it. And so I end up, I think we talked, you start on the view, I start on the logic of the UI and move forward. But I've talked to other people that start on the view as well, that are huge TDD proponents. So it's not, I don't think you have to change how you do it. It's just, I don't know, it's one of those things that take practice, I guess.

    KENT: Yeah, I guess so. I think that I neglected to define TDD, so just in case--

    NATE: Oh yeah, I always get caught on that.

    KENT: Yeah, TDD stands for test-driven development, and it's just a fantastic way to write stuff, so. We just have a minute or two left. What was your third talk?

    NATE: Yeah, so my third talk's actually coming up right after this, it's on intro to semantic UI.

    KENT: Oh right, yeah.

    NATE: Everyone, almost everyone knows what Bootstrap is, and so semantic is (mumbles) it strives to make you marketable and more semantic, which is where they get the name. And so, if you want a big button on the, big red button. (mumbles) you start to form it in your head without learning another language,  "Oh, this is probably what my view's gonna look like."

    KENT: Okay yeah, that makes sense. Cool. Well, good luck on that last talk.

    NATE: Thank you.

    KENT: Thank you very much--

    NATE: Yeah, thanks for having me, I appreciate it.

    KENT: Appreciate it. See ya Nate. And next, we have Matthew.

    MATTHEW: Thanks for having me.

    KENT: Why don't you scoot up a little bit here, perfect. Cool, Matthew, how are you?

    MATTHEW: Very good.

    KENT: Good, thank you so much for coming on the show.

    MATTHEW: Thank you for having me.

    KENT: So, yeah, just before we like get into what you're talking about and stuff, why don't we get a quick intro to who you are, where you work, what kinds of things you're interested in?

    MATTHEW: Well, my name is Matthew Renze, I'm an independent software consultant and data science consultant. With 16 years of professional experience building large scale data-driven desktop server and cloud-based applications. I've got double degrees in computer science and philosophy, with a minor in economics. And my focus was on artificial intelligence and machine learning. In addition, I'm a Pluralsight author, an ASP insider. I've written some pretty cool open-source software projects as well. And I'm also an international public speaker.

    KENT: Very cool. So even with all of that, you're still being a little bit modest 'cause you have five degrees, right? ( laughs)

    MATTHEW: Yeah, I actually do. I usually don't tell people that though, I usually just focus on the ones that are most important.

    KENT: Relevant.

    MATTHEW: But yeah, the other three degrees, I have an Associate of Science and Management Information Systems, Associate of Science in Business Administration, and Associate of Arts in Liberal Arts as well.

    KENT: Okay, I'm Master of Information Systems, so you and I have that really in common. Very cool, so, Matthew, why don't, you're here to talk about data science, data visualizations, and specifically about R was what your talk was about.

    MATTHEW: Yeah, so at this conference, I'm specifically talking about data science topics. In general though, I typically talk about like agile software practices in addition to code craftsmanship. And it's all kind of centered around data science as well too. But, I did a full-day workshop on practical data science with R, where we kind of walked through, from the beginnings of like what is data science, what is this R programming language, which it's a statistical programming language that's really popular now for doing data science, data visualization, slicing and dicing data, and all these things.

    And we walked through the process of like transforming and cleaning data, getting into descriptive statistics, and how to kind of quickly summarize the shape and feel of the data numerically, how to create data visualizations. And then go further into statistical modelling, machine learning, how to handle big data scenarios in R. And then end with like kind of R in practice, like how do you deploy R into production with servers and build interactive web UIs and stuff, that have kind of R behind it.

    KENT: Cool, yeah, that's a layer that I'm kind of interested in. So this is a JavaScript show, and so R sounds really interesting. But most of our viewers and listeners probably aren't familiar with it, or necessarily like, it's not exactly practical for their day job. So at what point does this become relevant to front-end or even Node JavaScript developers?

    MATTHEW: So I think there's three ways that I see R being practical, or at least valuable to the viewers. The first is that, any time you learn a new programming language, it kind of changes the way you think about your existing programming languages. There's certain features in R that don't exist in just about any other language. Like the fact that it's a vectorized language, which I really don't have time to explain why that is, but it makes programming entirely different. And you think entirely in terms of like functional programming with these vectors. So for example, in R, if you're ever writing a for loop, you are almost certainly doing something wrong. And so, yeah, you just, you never have to do it because everything is a vector of size one. Even the primitive data types are essentially vectors of size one.

    KENT: So like no arrays.

    MATTHEW: Well, essentially a vector being a homogeneous array of one dimension. And then we have matrices, data frames, which is a tabular structure.

    KENT: Mind blown. (both laugh)

    MATTHEW: And so, if you have an opportunity to play around with a language like R, you'll start thinking about your own language in different ways, it's like, "Oh well, maybe I could make the language, you know, do it kind of this way  because it's really easy in R to do it like that."

    KENT: Yeah, that makes sense.

    MATTHEW: Or for example, the concept like a data frame in R, which is like a table is organized in such a way that makes slicing and dicing data extremely easy. So we see other languages starting to incorporate the same concepts, like there's this, I believe it's called Pandas in the Python language now, it does essentially data frame work. And I'm assuming something like that will come along in JavaScript before too long. Especially if more and more people that are interested in data science and working with data are you know, switching over, and building systems entirely in JavaScript, since it's kind of taking over the world.

    The second way I see it being important is, so I use like, C# is my primary bread and butter language, and I have to do a lot of JavaScript when building like web UIs. But using R to do the kind of data work, so essentially you're still programming in JavaScript, but you know, you've got these little data sets you need to figure stuff out, like whether it being, you know, the telemetry for your website, or you know, even like click analysis. And it's like, I've got this data but to write a program that would kind of slice and dice the data and create a visualization in JavaScript would take way too long. So it's like, "Well I'll just kind of use this language on the side just for my data tasks, but JavaScript is still my main language."

    KENT: That makes sense.

    MATTHEW: And the third way you could potentially use it, is if you're building web-based data visualizations. You can use R under the hood in the server in order to do kind of the big number crunching, the stuff it's really good at, generate data visualizations as like SVG files, and then just have those SVGs from a web service, just work with them in JavaScript. So yeah, having R in the server and then do all the JavaScript stuff on the front-end, and build completely interactive web based UIs.

    KENT: Cool yeah, I like this idea of using the right tool for the job.

    MATTHEW: Yep.

    KENT: It seems like R is a fantastic tool for data analysis and visualizations even.

    MATTHEW: Yeah.

    KENT: So, very cool. So, another thing that you're kind of passionate about, you talk a lot about is clean code. Do you wanna talk about like, why is clean code important? Why do I care? Why can't I just like churn out a bunch of crazy code and ship it off?

    MATTHEW: Well, clean code, at least as I see it, is a philosophy of writing code for the reader of the code, rather than for the author or for the machine. And by the author, I'm essentially saying you know, we don't wanna be writing code that's the way we like it, the way we prefer--

    KENT: Like terse, or like really short, short variable names 'cause I don't like typing.

    MATTHEW: Or because I think I'm really clever, so I'm just going to use these names that no one else is going to understand.

    KENT: Or using features of the language that are kind of like--

    MATTHEW:  Yep, obscure

    KENT: Obscure, yeah, yeah. And JavaScript has plenty of those.

    MATTHEW: Yes, yeah, there are many ways to shoot yourself in the foot in JavaScript, as well as many other languages. And by not writing for the machine, and the previous gentleman that was speaking, kind of eluded to this as well too, we wanna avoid premature optimization. Machines are really good at processing things very fast, and the machines are getting faster and faster. We don't have to worry about really small footprint kind of source code running on like embedded systems, at least with most of the software development, enterprise development we're doing. So essentially, by focusing for the reader, you're essentially optimizing, taking the economics of software development into consideration. Because when you look at the cost to create software, you know, you can write code really fast if you just use short terse things, but if you spend way more time maintaining the code, which we do, based on empirical evidence, then, you're actually optimizing economically to focus on the maintenance, which by having really clean readable code, you're essentially optimizing then for maintainability 'cause someone else can go in there, they can look at the code, and they can quickly figure things out. And this is largely to do with the kind of psychology of code. The amount of time you spend writing code is roughly like, the amount of time you spend reading code is roughly 90%.

    KENT: That's very interesting.

    MATTHEW: Yep.

    KENT: So this is from a study?

    MATTHEW: That's actually anecdotal evidence. I think it's both, no, no, Uncle Bob has mentioned it and I think maybe McConnell did in Code Complete too. Don't quote me on that though.

    KENT: It sounds right to me.

    MATTHEW: There is actually empirical evidence though, that we spend significantly more time maintaining software than we do creating it for enterprise applications with over like a 10 year life cycle. It's usually around like 20% is actually in the creation of the code and 80% in the maintenance, somewhere between--

    KENT: Still, like this is something to talk about for sure.

    MATTHEW: Yes, yeah. So and this is one of the things that I really, I'm trying to think of how to word this. One of the things I really bring as a value to a lot of the organizations that I do consulting for, is you know, my background in economics. So I'm always thinking about software development in economic terms, which is the language that the business is thinking as well. So being able to make arguments, economic cases to the business saying that, you know, "Well, this is why code quality is important because we wanna reduce the overall, you know, cost of creating this software over the life of the project. Not just writing the features and getting 'em out the door initially, but, you know, someone's gonna have to maintain this. And if it's gonna cost you, you know, 10 times more to maintain it, than it would if we'd just spend a bit extra time now, getting the quality right." You know, it's a no-brainer, once you understand the full economic implications.

    KENT: Yeah, and I think like business people get investment and return on investment as well. So yeah, if you, and like I think if you're having a hard time in your company convincing people like, "Testing is important," or whatever. Just bring it back to business terms and like this will literally cost you more money in the future.

    MATTHEW: Yes. And this is why the technical debt metaphor, I think works so well when communicating, you know, "Well, why do we need to, you know like, use clean code? And why do we need to do TDD?" Well because every time you don't do that, you're essentially taking out a loan in the long-term of the software, and you're going to continue to pay more and more interest. And as interest typically compounds exponentially or at least super linearly.

    KENT: Yeah, I've seen that.

    MATTHEW: And so at some point in time you end up having this, you know, grand redesign in the sky because you've put off quality for so long, that the whole system is just collapsing under its own weight. And we see this happen way too many times. As a software, software development as a profession, this should not be happening anymore. But we're a relatively immature industry yet and so I think, we're really trying to figure this out. And by doing these practices like TDD, which I honestly believe TDD will be kind of a, the bare minimum entry for any software development in the near future. I don't know if this is gonna take five years or 10 years, but I think it will be the exact same thing with the accounting.

    Essentially, you know, you couldn't go into any business in the world and say, "Well, I don't believe in double entry accounting. Like, I just enter the numbers once and they're gonna be right." They would be like, "No, you are not an accountant." (laughs) Like you cannot be an accountant. So the double entry accounting system works so well because, you know, by entering these numbers, you know, twice in the duplicate ledgers. The math eventually all works out to the end. This is essentially a metaphor for TDD. By writing the test cases, what should the code be doing, and writing the code itself to match those test cases, we're essentially doing double entry accounting in our code. And in the future, I think it'll be the same way. Like, you cannot be a professional software developer unless you are doing TDD.

    KENT: That's very interesting. I'm not 100% convinced, but, yeah, we'll see what the future holds.

    MATTHEW: Five, 10 years, we'll put a wager on it.

    KENT: Yeah. (both laugh) I'm a fan of the practice. Cool. So I think we're about out of time but is there anything else that you'd like to bring up?

    MATTHEW: No, I can't think of anything off the top of my head, other than KCDC is a great conference, this is honestly the best conference I've been to. I did a full-day workshop, an hour presentation, I was on a panel in front of 1,600 people over lunch, well with you actually.

    KENT: Yeah, yeah.

    MATTHEW: And then the interview here, so it's been a great time.

    KENT: It has been a good time, thank you for coming.

    MATTHEW: Thank you.

    KENT: Appreciate it. Alright, and finally we have Kirsten. Come on over Kirsten. Thank you so much for showing up. Appreciate having ya, looks like your soda bottle that's there is kind of deformed a little bit. (laughs)

    KIRSTEN: It's sort of, yeah.

    KENT: Exploded, sort of.

    KIRSTEN: Exploded a bit, but it's still tasty, so.

    KENT: Cool, cool, why don't we scoot in to the camera a little bit more.

    KIRSTEN: Hey.

    KENT: Cool, so, yeah, Kirsten why don't we get an introduction to yourself, a little bit, who you are, where you work, what kinds of things are you interested in?

    KIRSTEN: Well, I'm Kirsten Hunter. I'm an API evangelist for Akamai. And one of the things I do is I go around and I travel to our customers' sites, and give them free boot camps on our APIs. But the other thing I do is I go to conferences and I teach people how to create and use APIs. I have over 10 years of experience with REST APIs, which means I got excited about APIs before they were the big thing, and now they're the new hotness. And I have a great time going around and helping people learn how to use APIs and get excited about what they can do with them.

    KENT: Awesome. So I wanna talk with you about your talk about becoming a Polyglot programmer. But just to continue on the API love for a second, you do have a book about APIs. Can you talk about that for a sec?

    KIRSTEN: Yeah, I've created a book called "Irresistible APIs", one of the things I used to say, is that I go around and I talk to companies about how to make APIs that don't make developers cry, and then telling developers how to use APIs without crying. So, on the first note, I've created this book, it's about the process of creating an API that has a fantastic developer experience because that's the number one indicator that you're gonna have a successful API. And it goes through business value metrics, use cases, schema modelling, and how to just have a fantastic developer experience, so that it's fun for people to use.

    KENT: Are these like programmatic APIs or HTTP APIs? What kind of--

    KIRSTEN: Generally it's focused on REST APIs, most of the, the concepts would work for any kind of API. And the book is called "Irresistible APIs" and you can find it at irresistiblapis.com. So, it's actually available on Manning Early Access Program right now, and it will be in paper form at the end of August. I already have an Amazon page, which I'm super excited about.

    KENT: Very cool, yeah. One of these days I will get an Amazon page, very cool. So let's talk about becoming a Polyglot programmer. I think this is something that, at least I as a kind of a new developer, I don't have experience in, but I can sense the value of. So, why is it important, well maybe we should define what Polyglot programmer is and then we can talk about why it's important.

    KIRSTEN: Right, so Polyglot usually means spoken languages, but we have languages in programming. And one of the things I noticed was that we have a lot of people who believe that they can only program in one language. And it's not true, especially with interpreted languages, Python, Perl, Ruby.

    KENT: JavaScript.

    KIRSTEN: JavaScript. (laughs) And PHP. All those languages are very similar, it's much more like a dialect, so it's much more like, you know, someone from Brooklyn trying to talk to someone from the Deep South. You know, they might struggle a little bit, but you can see what's happening there and you can port it over to your language. One of the things I do as an API evangelist, is I create a lot of sample code. And I tend to create it in Python 'cause that's the easiest one to read when you don't know how to use it. But I have people who are, just they're reluctant to even take a look at the code and see what it's doing and try to bring it into their own language. And you know, I really want us to be in a world where people feel comfortable looking at other languages.

    And then, the other side of the coin is we have these siloed communities for each of the languages, and we end up with, you know, people bagging on other languages or thinking their language is the only possible language. And I think that, if we came together as one big development community, web development community, we could solve the most amazing problems. We're generally solving the same problems, so you know, I really wanna encourage people to think beyond their language and think about the community as a whole.

    KENT: Yeah, yeah. That makes sense. So what would you say to somebody who is just like, "I would actually rather just focus on one and get really, really, really good at that." Is there any pitfalls that they would have or like is there any problem with that kind of an attitude?

    KIRSTEN: Well, there are things that you might do that would be more appropriate in certain languages. So if you're a Perl programmer or a Ruby programmer, and you wanna do some really complicated matrix multiplication, you really probably wanna look at Python, it's just easier. And, sometimes there's a better tool for the job. And sometimes you're gonna be handed some code that comes from a different language then you're used to, and you need to maintain it. Well maintaining existing code is really not that hard. It's already written. And so you can usually figure out how to take it and make sure that it continues to work the way it needs to. But if you're really reluctant to try those other languages, it can seem like it's gonna be a huge difficulty and it's really not.

    KENT: Now, did you have three talks or just the two?

    KIRSTEN: I had three.

    KENT: Three talks, what was your third talk?

    KIRSTEN: Quantifying your fitness.

    KENT: Oh, of course, yes. And I saw this one at Space City, it's fantastic and you haven't yet given it, right?

    KIRSTEN: No, I got my bag of goodies over there.

    KENT: Very good, do you wanna talk about that for a sec?

    KIRSTEN: Yeah so, I have a Node.js application that's running on Modulus. Modulus is a great hosting platform, similar to Heroku, but Heroku really focuses on Python and Ruby. Modulus really loves Node. And the logging is fantastic. So what I do is I have my Fitbits, so I have my Fitbit here, this is the Blaze. And, I have the, Node server is watching to see when there's an update to my activity. And when there is, it counts to see how I'm doing in terms of eating protein and burning calories for the day. And if I'm not keeping up, then I get SMS messages that remind me to do so.

    And during the day, my Philips Hue light bulbs also change color, so they start at red and then they go orange, and yellow, and green, to just give me some positive feedback to know kind of where I am. "Hey, you know, I'm sitting here in my office, I'm working and my lights are still orange. (laughs) I need to get up and walk around, or probably I should eat some lunch." So, you know, it's a pretty fun talk and it's live demo with Philips Hue lights and nobody doesn't love it, so.

    KENT: Yeah that, I thought it was kind of entertaining. Now is it 100% in Node or are there other technologies you have to use?

    KIRSTEN: It's 100% in Node. I did actually, I mean it's interfacing with a bunch of APIs, so it interfaces directly with the Fitbit API, with the Twilio API. And I, sort of hacked the Philips Hue API. I pretended it was an iPhone. So you can actually do local stuff with your Philips Hue light bulb pretty easily, and I'm gonna demonstrate that at the talk. But, remote access, you have to go through with this and that, or use the iPhone. And I wanted everything to run in a cloud. I didn't wanna have to run something at home. So to solve that problem, I reverse engineered their API, so that I could make my lights change color from wherever I was.

    KENT: Very cool. I hope they never make a breaking change for ya. (laughs) Cool, well Kirsten is there anything else that you'd like to mention to the viewers?

    KIRSTEN: Yeah, so the one thing I would like to mention is, I have a survey about the different languages, mostly it's the interpreted languages, but if you use Haskell or Go, you're welcome to put information in there as well. It's a five minute survey. It asks you what language you use, what do you think the language is great for, what do you think about the community, and what could be improved? And if you fill out the form, then you are entered to win a $100 Amazon gift card, so it's a pretty good use of your five minutes. In order to find it, go to princesspolymath.com and then click on the money. (laughs)

    KENT: Very good, alright. Great, thank you so much for coming onto the show--

    KIRSTEN: Thanks for having me.

    KENT: Really appreciate it, and we'll see you around the conference.

    KIRSTEN: Awesome, thanks!

    KENT: Bye. And yeah, that's our show. So just a couple brief closing announcements. So we have a silver sponsor Trading Technologies, they're super awesome and hiring, so check them out. And then, we are a weekly show, so remember next week we're doing Web Animations with a couple like gurus on the subject. It will be at the normal time, so on Wednesday at noon, Central Time. And then, yeah, go to suggest.javascriptair.com if you have suggestions for the show. Guests or topics, go to feedback.javascriptair.com to give us feedback about this show. I especially wanna get feedback about conference shows because they're kind of unique. And then go to jsair.io/email to sign up for our newsletter. And that's it. So, thank you very much. And we'll see you all later!
  `,
}
