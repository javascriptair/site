/* eslint max-len:0 */

export default {
  title: `Live at Fluent Conf`,
  time: '12:45',
  timezone: 'PT',
  guests: [
    {
      name: 'Fluent Conf',
      twitter: 'fluentconf',
      squareImage: true,
    },
  ],
  description: `
    Live at [Fluent Conf](http://conferences.oreilly.com/fluent/javascript-html-us), the web conference from O'Reilly Media about JavaScript, HTML5, CSS, and the latest web development technologies and frameworks.

  Guests:

- [Simon St. Laurent](https://twitter.com/simonstl) & [Peter Cooper](https://twitter.com/simonstl) - Fluent Conf chairs
- [Jen Looper](https://twitter.com/jenlooper) - Getting physical with the beacon-enabled Web
- [Maximiliano Firtman](https://twitter.com/firt) - Advanced mobile Web
- [Jen Kramer](https://twitter.com/jen4web) - Planning successful products
- [Rachel Andrew](https://twitter.com/rachelandrew) - Making sense of the new CSS layout
  `,
  youTubeId: 'R0eIlOvo5Js',
  podbeanId: 'a2jc5-5d6380',
  shortUrl: 'http://jsair.io/fluent-conf',
  hideShowNotes: true,
  transcript: `
    KENT: Hello and we're live with JavaScript Air. Hello everyone, my name is Kent C. Dodds and I am on sight at Fluent Conf. I'm giving a couple of talks here and just experiencing the wonderfulness that is Fluent Conf. We have several people from the conference organizers, as well as speakers, who will be joining us for today's show. So before we get too far into that, I just want to call out that we do have a show next week, it's going to be with Julie about Protractor and end to end testing in general. Really looking forward to that. I'm a big fan of testing. That will be at the normal time on Wednesday at 12 P.M. CST.

    And for our sponsors, we have a bunch of sponsors that are making some really awesome things possible for the show. One thing in particular I'm really looking forward to is having a weekly newsletter that'll send our show notes. And so if you want to sign up for that, we haven't actually set that up yet but there's a Google form you can go to if you go to jsair.io/email and you can sign up to be on that newsletter once we get that rolling.

    And so for some of those sponsors, our premier sponsor is Egghead.io, they're bite-sized videos about JavaScript in the web platform. Super, super awesome. And then Frontend Masters is another great sponsor. They're expert-led recorded workshops, check them out for great training on JavaScript topics. And TrackJS will find bugs in your code before your customers even notice them, so yeah, check out TrackJS to keep track of your bugs in your JavaScript. Of course, none of you write bugs, so maybe you don't need that. Just kidding. And then Codecov.io is another sponsor. They're fantastic, really great for measuring coverage in your testing and they integrate really well with GitHub. So check Codecov.io out to see what they can do for you, for your coverage. And then WallabyJS is a fantastic, super-fast test runner that runs right in your IDE and gives you instant feedback as you're changing your code. It's very cool. So, definitely check them out. And that's our sponsors.

    So I just want to first before we invite our first guests on, Fluent is a conference created by O'Reilly about the web platform and they have a bunch of trainings and sessions and keynotes. It's a really exciting conference. There are a bunch of people here and so we're going to first invite our... some conference organizers onto the show with us. So, yeah, we have Peter here.

    PETER: Hello, hello, how's it going?

    KENT: And this is Simon.

    SIMON: Hi there.

    KENT: Great. Thank you very much for coming on, both Simon and Peter. We're really excited to have you on the show. I'm super pumped about this conference 'cause it's a lot of fun. So far it's been great. So can you give us a little bit of background, first to kind of introduce yourselves, and then we can talk a little bit about the conference. Why don't we have you go first Peter.

    PETER: Yeah, I just wanted to let you know the URL you gave earlier was wrong. If you wanna sign up for email, it's JavaScriptWeekly.com, just to--

    KENT: Oh right, yea.

    (laughter)

    PETER: Right, yeah ok, so yeah I guess that's where I'm probably best known just in case anyone's watching this live, you know, I do JavaScript Weekly. Yeah, I'm also the co-chair of Fluent. The whole kind of goal originally with Fluent was to be a purely JavaScript conference, originally. But we decided to extend it when we found so many proposals were coming in about HTML5, Web Audio API, WebGL, that type of thing. We decided to expand it's speed the web platform, 'cause that seemed to be the way things were going, it wasn't just JavaScript; it was the whole thing. So that's how we took it. And now, we kind of pitch it as... we kind of wobble, don't we? From being a JavaScript event to being a web platform one 'cause the term 'web platform' didn't catch on perhaps the way it should've. But that's kind of what we do; we provide the whole platform, the whole experience. Perhaps Simon can expand on that.

    SIMON: Sure, I'm Simon St. Laurent, I co-chair with Peter and I work at O'Reilly. I work on all kinds of things that are web related at O'Reilly, whether it's books or this conference or videos -- many, many different pieces. Fluent is kind of the capstone. It's where we bring together lots of people who are in all of these conversations. And I think part of why we had to step back from it just being JavaScript is that JavaScript is just stuck to everything else in a really big way. Even at our first event, there was a talk on "you don't need a framework for that." A lot of it wasn't even just, "You can use CSS for that instead of JavaScript. Why are you trying to script something that's built in with hardware acceleration?" So these pieces all kind of go together naturally. It's great to bring together the different stories and let them bounce off each other. And not just the talks but really the people, the hallway track, the kinds of conversations you'd get here are really what make me excited.

    KENT: Very cool, yeah, I actually share the... or what you're talking about with it not just being about JavaScript but the web in general, the same thing goes with a JavaScript Air, so I call it JavaScript Air but it actually is about the web platform in addition to JavaScript. So the name kind of confuses some people. We're gonna actually have Jen Kramer on in a little bit and she was like, "You know I'm not a JavaScript person, right?" And I said, "Yeah that's great, it's the web platform, so you're totally in there."

    PETER: (mumbles) the "Web Platform Air."

    (laughter)

    KENT: Awesome. Actually, somebody has asked me if they could start a React Air 'cause there's an Angular Air that I started a year ago. And I was like, "Yeah, totally, do it." And that's one of the things I love about our community is that, and events like this, is that our community is like a candle... like each one of us has a candle and if we, you know, in sharing the flame of our candle, we're not actually diminishing ourselves at all, we're just making the entire room brighter. And so that's one of the beautiful things about events like this where we can share that. So what are some of your favorite parts about this event?

    PETER: Oh, I guess we'll go along the line again. Yeah, one of the things that I really focus on, I'm really interested in are the social events. So some of the hallway track stuff, the meet ups that we're running downstairs. And even things like this, doing this type of thing and having people come in and speak. It just makes it a richer experience. So yeah, while there's content I like, I don't get to see a lot of it. I've been discussing this with people, I don't get to see a lot of the talks because I'm too busy making sure everything is running ok and handling some of the social stuff, and doing interviews like this and so on. But that's what I like, that's what I get the most out of and if I was an attendee, I would kind of be here for the social aspect of it and to kind of network and see people that I know and respect. That's just my perspective on it.

    SIMON: Yeah, I love the social side of it. I'm probably more focused on the training side of it. So, we've always had a strong tutorial day, like that was, I remember coming here and just marveling on the tutorial day and it felt like the entire conference had already started 'cause so many people had signed up for that.

    PETER: It's almost everyone wasn't it?

    SIMON: It's a lot, yeah. The registration folks were like, "This is different!" This year we took that further, we did these two-day intensive training things on the front. That's pushing it further. I hope that people come out of those, with lots of things that they've learned. I also hope they still come out with the energy to have the social conversations about what they've done that actually make it stick and make it useful. So we're trying to balance this kind of content story with the people story and make sure that they reinforce each other.

    KENT: Very good, I think you've described exactly what my favorite part of conferences are as well, is it's the talks, they do and they should, go up online afterward, right? And so like we can go and experience those. And there is something to be said about being present at the talks, but what I really love about conferences is meeting new people and people that I've known on Twitter for years or whatever and never met in real life and being able to meet them in real life at venues like this. And then also, like, the diversity that you get around the conference is something that's really exciting. So what are some of the things that you do specifically to encourage people to do networking? So like, what are some of the hallway events that you're talking about?

    PETER: Ok, I'd have to bring up a list to remember them all...

    (laughter)

    'cause we really do have quite a few. But there's a few noticeable ones. So one actually isn't even run by us, it's run by Suzanne Axtell at O'Reilly, 'cause it's one of the favorite things to do which is speed networking. So as I came down the elevator today, I got out and it was just like the biggest roar I could hear, it's like (roars dynamically) and I thought why can I hear this noise so far up into the event? Like I thought, literally, there were like thousands of people down here.

    But it turns out, there was a whole line of chairs outside this room in fact, where people were sat facing each other then they move along like one per minute, so they kind of actually have to introduce each other. Now, it's something that happens at like 8:30 in the morning, that's a bit too intense for me.

    (laughter)

    Like I would rather do that a bit later in the day, especially if I was slightly intoxicated, it might be slightly better. But, people were really getting into it, really loud and noisy. S there's that type of social event. But we also have like actual meet ups on site, so we've got about eight this year on different topics, like React, Angular, again like some of the buzzwords that we've been describing, just 'cause that's what people want to get together and talk about. So, I've just come out of one actually that was all about Electron, which is the GitHub crazy thing that kind of powers their Atom Editor. And I think Slack uses it on Windows as well. But we had people turn up, so we had like Alex Russell from Google turned up, just kind of randomly. We had some guy who did, so one of your sponsors is Egghead, someone that has apparently done an Electron course for them or is in the process of doing one. So there you go, plug, plug.

    (laughter)

    But like literally, he just turned up, in the middle of it. And 'cause we have an MC who's helping thread these conversations together, so we actually have a comedian here who's actually helping be the kind of social catalyst between these people. We got to have a lot more knowledge come out than you would if it was perhaps a one to many type talk. And I think that is the real advice; if you can get the social aspects right, as long as it's not just, "Oh, let's go and drink and talk." If it's something that can be recorded and turned even into an artifact somewhere, so like what you're doing here, these live shows, it has a lot of value to take home. But I don't think every conference has figured it.

    And we haven't really entirely figured it out either. But we have numerous events that kind of tie into that. We have a speaker's reception and we have the tribe tables at lunch. So the tribe table is the way you have lunch tables but they each have topics, they each have a little sign that will say like PHP or JavaScript or Ember or Angular, or whatever. And if you're interested in that topic, you go there and chat. I mean I've just scratched the surface, maybe you can render some more, I can't. But we have office hours as well, don't we, so and book signings and stuff. We try and invest a lot into doing this stuff.

    SIMON: I think a lot of it for me is that it's, a lot of conferences you go and you sort of listen, you're talked at a kind of classic lecture maybe I'm talking notes to make sure that it stays in my head. But I find it sticks together way better if you have the chance to either talk with the person who was speaking or talk with other people who were in your class or kind of like in that community meet up, just marvel at people who turn up in the conversation.

    PETER: Right at the moment.

    SIMON: Yeah, and I also like the space. It's, we're in a basement, ok, but it's a very coherent space, and there's like a setup of tables at the top of the escalators and every time I walk by there, either I'm seeing people and getting pulled over or I'm seeing other people having these same kinds of things. So when you put the right people in the room, magical things happen.

    PETER: Just a tip for the future, if you could ever do this in a kind of mobile setting, so you could actually like walk around and look, because it would be so great to get out of this room and just look outside where what Simon's just said is going on, like it's all tables outside of this room and just go along and kind of pick on people. I think that'd be hilarious.

    (laughter)

    But that's just, that's just my attitude, like I just love to go up to people. So I'm putting me on Periscope later. So if anyone is like on Twitter or whatever, just follow me @Peterc, P-E-T-E-R-C, if you're watching this live of course. I might go on Periscope and kind of just shove it in a few faces, you know?

    KENT: It's like, "Hey, you're live. I hope you're okay with that!"

    (laughter)

    PETER: You have to do it right now, be like put you on the spot.

    KENT: Yeah, yeah, well I actually, so I've done this live conference thing before and at one of the conferences I actually lifted up my laptop and took it around places, that was kind of interesting. But yeah, very cool. I really actually, I really appreciate all of the effort that you're putting into to help the attendees learn about each other and learn from each other's experiences. And I think that other conferences should really follow suit. Is there anything else that, like if somebody's watching this, they're thinking of putting on a conference or they are putting on a conference, any takeaways or learnings that you get from putting on a conference that you would give to them?

    SIMON: Well I think one thing to keep in mind is that the gaps matter. It's, the program is central, but figuring out how people have time to process it is a really helpful thing. We've done these like 30-minute sessions with 15 minutes in between, and the 15 minutes in between seems to spark a lot of conversations and a lot of other possibilities. Having spaces for people to find each other, to congregate. It's not the usual conference organizer's story, it's usually, "I've got to find these people and make these things go," and that's all true, it's great, but also make sure there's room for these side stories.

    KENT: Very good, awesome. So with the last minute or two that we have, I'd like to just open it wide open to you to tell us about anything you'd like. You can tell us your dog's name or just keep it PG please.

    (laughter)

    PETER: I was actually gonna say this is live, so could I curse. But I guess we're not in England anymore, so we can't. I don't have a dog so I can't do that one. But I was wondering, are we allowed to talk about the dates have been up everywhere about Amsterdam?

    SIMON: Yeah, yeah.

    PETER: Yeah, so one of the things that perhaps is relevant, 'cause obviously you're gonna have a lot of people around the world watching this, not just in the US; we are bringing Fluent to Amsterdam, bring it to Europe essentially, and that's gonna be in November 9 through 11. It's kind of on the tail end of the Velocity Conference as well, so it's not just us, there's gonna be two conferences in the same space, 'cause we share a lot of exhibitors and even attendees. So put that on your calendar, November 9 through 11. It's gonna be in Amsterdam. We've seen the venue, been to the venue before, done events there, it's absolutely fantastic. The food was superb, wasn't it?

    SIMON: Yes, yes. I'm actually, now I'm very hungry. The other thing I wanted to mention about that is the call for proposals will open in the next few weeks, so be looking for that as well.

    PETER: Yeah, come and speak!

    KENT: Very great. So thank you very much for coming onto the show. I really appreciate all that you've done to put on this conference. Obviously, you're not the only ones working on this conference, you have I'm sure a lot of people that you'd like to thank. But, you've put on a really wonderful conference and people like me are very grateful for that, so thank you.

    PETER: Thank you very much, I hope all the rest of your guests are as good as us.

    KENT: (laughs) I'm sure they will be, thank you.

    PETER: Humble brag.

    KENT: (laughs) Thank you very much.

    PETER: No, I was just waving goodbye.

    KENT: Yeah, yeah, yeah, alright Jen. So our next guest is Jen Looper and she has some fun IOT stuff, right?

    JEN LOOPER: I brought my show and tell.

    KENT: Oh great, come on.

    JEN LOOPER: so I'm so excited.

    KENT: Have a seat. I'm gonna move this a little bit. Great. I love that ng-conf charger.

    JEN LOOPER: A little plug for ng-conf. We're gonna actually be there in just not so long actually, better get ready for it. Yeah, so this is the biggest and kind of clunkiest charger I could find. I just couldn't find my other one but it does power up the device, that's all I need.

    KENT: Perfect. I have one myself and it's amazing. So if you can go to ng-conf and convince them to do that again, that'd be awesome.

    JEN LOOPER: Well I'll get on that then.

    KENT: That's right, that's right. So Jen, why don't you talk with us or give us a quick introduction to yourself and then we can talk about what you're talking about.

    JEN LOOPER: Ok cool, well my name is Jen Looper and I'm here at Fluent from Boston and I'm still jet lagged so I'll try to speak coherent. I'm a developer advocate at Telerik and I've been there for about a year. And a half and it's been a blast. I love it because I can come and speak to awesome people like you and just learn and speak and talk to people at the booth. And it's just a blast, I love it to death.

    KENT: Cool, so do I. That's great, (laughs) we share a lot of things in common here. Cool, so, can you talk with us about like what you're talking about and why you're so passionate about it?

    JEN LOOPER: Sure, ok. So I think a lot of software engineers, sometimes they start getting a little tired of always having their fingers on a keyboard and tinkering around with that sort of thing. And a lot of us are sort of leaning into the direction of hardware and trying to find interesting software integrations for all the new and interesting hardware that we now have available at a very affordable price. And it's very, it's kind of omnipresent and it's very cool to hack and to tinker with. And it's also a great way to teach and to learn new programming with, which is, you can use CylonJS, might be a good way to learn JavaScript as well. You can make things move with it, you know? This is kind of my perspective.

    But I'm here giving a talk about the, something really cutting edge which is the use of the physical web and the introduction of the Eddystone Beacon Protocol. So, what I created is an interesting little hardware integration that would be useful in a cultural site. So what I did is I installed these treasure boxes in the Wellesley College greenhouses, right next to the sensitive plant, and I created a website about the sensitive plants so that when you are beckoned by this beacon that's installed into this box to approach the box, approach the sensitive plant, the Eddystone Beacon sends out a URL. You press... you are opening the URL on your phone and you're educated about this cultural artifact or this, it's just a sensitive plant. But we're not gonna, let's not split hairs. (laughs)

    And it's just been a really fun integration. And the other thing about this is since it's a box you can use it, you can use your phone to open it and inside you get a little treat. But the physical web is just a great way to avoid having to build a mobile app. You basically are able to simply, instead of pushing out a UUID to a user which you're gonna need a mobile app to consume, you're just pushing out a URL. So you can really just use the web to interface with your world in a completely new and different way. I'll give you this thing.

    KENT: Yeah.

    JEN LOOPER: So what I'm doing here is I'm opening up my today widget, or trying to anyway. And it's listening for this beacon here. There's actually a couple beacons, yeah and it just found treasure boxes, so I'm gonna press on that, it opens. And I'm gonna go ahead and open the box. And you heard it just opened--

    KENT: Yeah we just heard it open.

    JEN LOOPER: And it just opened and inside I have some seeds and your certainly free to take one, (laughs) so this would be a way--

    KENT: Wow.

    JEN LOOPER: It's actually little wildflower seed, so.(laughs)

    KENT: Very cool. I just got a present on JavaScript Air!

    JEN LOOPER: Yay! And I can close the box, and this is just a... Oh sorry, should open it so I can show what's inside. So what it is, is it's a photon which is a Wi-Fi connected microprocessor connected to a sirvo that's just opening and closing this latch. It's a great way to maybe engage museum goers or other people in a different way than what we've been doing. And it's absolute leading edge on the web, so really, really, exciting and fun and fun to play with.

    KENT: Yeah, I think that's kind of the next level, right? Like so far we've been playing around with things on our phones and like we move this with our finger and it moves something on the screen, and that's rewarding and fun and exciting. But there's something else to be said about, you do something on your phone and something in the real world is changing.

    JEN LOOPER: The motto of the physical web is, "walk up and use anything." So I mean how exciting is that? And I just noticed there's another beacon that's beckoning me, so I'm gonna push that thing and I'm gonna see what I can find.

    (both laugh)

    JEN LOOPER: So very fun.

    KENT: Yeah, very cool, I've actually been noticing that beacon thing too. And I've never experienced this before so that's new to me. So I'll probably be following you around like, "Where's that beacon?" (laughs) Cool, so what are some other things that you're excited about with the physical web? What are some of the future use cases that you can see for this type of platform?

    JEN LOOPER: Well I think people are using beacons a lot in retail right now and as my colleague said, "the future's now and it's on sale!" (laughs) It's like surely we can think of other things to do than pushing coupons at people. Retail, I mean, does that perfectly well with just GPS. I think it's a really great way... they have beaconized the San Francisco Airport, I don't know if you've noticed this. There are little beacons all over the place so that people with disabilities can be pinged, that you're at Gate X, you're at Gate Y, you know these kind of accessibility uses.

    But I was just talking to someone in my talk who is working in a library... actually two guys: one is from the New York Public Library, and one was at Montana State. And they would like to have certain beacons telling people of books that they want you to try or check out, integrated into their rare books collection. All kinds of really interesting uses for beacons other than just selling people stuff, you know, which is basically where we're at right now, so let's face it. (laughs) But the trick with doing any kind of installation in a cultural site is that museums are kind of conservative and nervous about this sort of thing. I had a really rough time, I begged and pleaded for anybody in Boston to let me install this box (laughs) but Wellesley College, they bailed me out and let me get into the greenhouse, so that's as far as I got. But that's the challenge.

    KENT: I think that's a challenge that we have with any new technology, right? Like, the self-driving car is going to have a challenge to overcome with people's perceptions of what safety is and that kind of thing. And I think that overtime, people will become more accepting of this idea of the physical web and seeing more use cases. And it's really exciting to me to see technology being used to make people's lives better, rather than just spending more money, wasting more time, yeah rather than just making people richer or poorer for that matter. (laughs) Yeah that's really exciting to me. Is there anything else that you'd like to call out about things that you're excited about or things about the physical web?

    JEN LOOPER: Not so much the physical web, but can I do a little shout out for--

    KENT: Yes absolutely, please do.

    JEN LOOPER: So I'm here, I'm at the booth working with the Telerik folks and we're advocating very strongly for people to try Native Script. So if you go to NativeScript.org, it's a free and open source project that allows you to use CSS JavaScript and XML to build truly native mobile apps. So if you want to give this a try, this is very, very fun. It kind of like rejuvenates your... the fun of building a mobile app, now that I just talked about how we don't need mobile apps. Right?

    (both laugh)

    KENT: Yeah right. Well it's all exciting and advancements in technology is always kind of fun and exciting. And you never know who could be watching this show and each of us have different interests and we can all contribute to these different movements in different ways. So if somebody wants to get involved in the physical web, where do they get started?

    JEN LOOPER: So physical web is a project of Google of course, and they have their own website, you can just, you can literally Google them. Google the physical web and you will find them. It's an open source project as well, so I'm sure they're looking for contributions. They have a cookbook, but I was actually introduced to it a little bit more on one of my favorite websites which is Hackster IO. I have a website called ThingLearn and I post all my hardware projects onto Hackster. It's a great platform to really deal with the community. And the first physical web project that someone built was a candy dispenser of course. (laughs) Yeah, so you know walk up (swooshes) and you know, you get Skittles. So it was really fun. The only thing is somehow we have to enforce proximity because people from five miles away are opening these boxes, (laughs) you know. So, that's the challenge of this sort of thing. But yeah, Google the physical web and take a look at Hackster IO, Hackaday is another one. Lots and lots of people are experimenting and making fun things.

    KENT: Very cool. Thank you very much Jen, appreciate you coming on and showing us your cool little box.

    JEN LOOPER: Thank you.

    KENT: We'll see ya. Alright next, we have Max. Come on around here, Max. Thank you very much for coming on the show. Now I'm not sure how to pronounce your actual full name, could you pronounce it for us?

    MAX: Yeah sure. It's in Spanish, it's Maximiliano.

    KENT: "Maximiliano."

    MAX: Yeah that's fine.

    KENT: Awesome.

    MAX: "Max" is fine.

    KENT: Okay, great. Thanks, Max. So why don't you give us a quick introduction to yourself and then we can talk about, you had a two day training, right? We can talk about that training a little bit and other things that are interesting to you.

    MAX: Sure, so I'm a web developer. I have been doing web development since 1995, a long time ago. I have something with mobile in 2000, so long time ago also for the mobile space. And I have been doing the mobile apps using web technologies also native technologies. In the last few years, I am more focused on training, writing some books on the mobile web. I'm also doing consulting on that thing. So mobile web, there've been also mobile apps using web technologies and those sort of things, performance also. And here I've been doing the two-day training on advanced mobile web.

    KENT: Very cool, so you've been doing this for an incredibly long time. And so before we get into what your training was about, I'm actually really curious, what was developing like for mobile back in 2000? What was that like?

    MAX: Well for, just try to remember mobile phone in 2000, right? So they're talking about black and white, text-only devices and at that time, we were talking about that WML. Not sure if you remember that, if you know what it is, really. So it was an XML subset, it wasn't really HTML but at least you have some similar tasks, <img>, <p>, something like that, but not bmp files, they were wbmp files, black and white files. So that was fun and you were browsing the web basically using dial up. So yeah, when you connect to the web, you were using dial up so we are basically being charged by time. So it was funny.

    KENT: That is interesting, very interesting. So, you're two day training was, if I remember right, advanced mobile web, right? Or something like that, can you talk about what were some of the things that you covered in your training?

    MAX: Yeah sure, so one of the things that usually happens with the mobile web, so let's first say that the mobile web doesn't exist from a user perspective, right? It's just the web. But from a developer's perspective, from a designer point of view, we have some specific things to do right, and some best practices, some things that we need to understand that is different from let's say the classic web. So usually, I'm seeing a lot of underestimation of the mobile web. Ok it's just the same thing right, I can just resize Chrome and it's the same.

    So, no. For us, we, I know exactly how the mobile web looks like in different browsers. For example, we talk about the Samsung internet browser, that is taking right now around 5% of the market. Another browser, like UC Browser, Amazon Silk, browsers that you usually don't test on. Also, the old (mumbles) browsers are still here. Then we get into web views to understand how the web views world is today. Then some CSS and hacks that works directly on mobile. Some problems that we have with responsive web design, some challenges, new challenges, that we have, for example on iPad, now you have side view and a split view, so you can open a website on half an iPad. So have you ever tried your website on half an iPad?

    KENT: No.

    MAX: Something like that. Then we get into API, so hardware APIs, accelerometer, gyroscope, battery's API (mumbles), bluetooth. Also, we have covered something on the physical web that you were talking before. And then, the second day was basically about the offline web. So we were covering there: application cache that is right now necessary for iOS. Then, service workers right, and the web push API so you can provide these new (mumbles) web apps or onscreen web apps, so full screen experiences that you can install in your own mobile device. Finishing the training was just on performance. So we were also talking about performance and why performance is so important. Mobile performance has a direct impact in conversion and that usually means money for someone. And how to integrate your website with your app. So let's say that you have an app, a native app and a website where there are now in iOS 9, Android 6, you have different ways to connect both. And you need to do that, to increase engage with your app and your website. So it was a lot of topics and also fun.

    KENT: Yeah that is a lot of topics. It seems like you covered pretty much everything. You know, I'm sure there are like really specific things that you can't cover in a two-day training but it seems like it was some really valuable stuff for your attendees. Yeah, several of those things, I'm like, and I wish I was at that training right now. (laughs) So, actually I wanted to ask you a little bit about your experience as a trainer here at Fluent Conf. Let's assume right now that there are some people watching, who are thinking about doing a workshop or they, they're not sure if they're good enough or if they have anything valuable to share. What would you say to those people who are considering maybe doing trainings?

    Well first, I'd, you need to do it right now. Go now and fill the next call for proposal, there is one for Amsterdam, by the way, in a few days. So I have a started doing conferences like five years ago. And after that, I've been, right now, in 50 different countries doing trainings and conferences. So, in fact, my first conference ever in the States was an O'Reilly one. O'Reilly was co-sponsoring it I think. I think it was Inside Mobile 2009. So that was my first talk in the States. So I have been doing other conferences in Latin America. By the way, I'm from Argentina. I am based in Argentina. So it's something that you can do, right? So anyone can share the experiences. Sometimes we think that everybody knows exactly what we know and that's usually not the case. A lot of people out there, that they don't have the same experience and usually, your experience it can be very valuable to others.

    KENT: Very wise words, thank you. That was great. Max, is there anything that you would like to bring up before we welcome our next guest?

    MAX: No, the only thing is just don't underestimate the mobile world, ok? So it's not just chrome in a very small window. There are a lot of things to understand. And that's my only advice for now. The other thing is that everything is going to change. That's the only thing that we know for sure in the mobile space, that everything is going to change and we should embrace the change. Ok? Thank you!

    KENT: Yeah, if you don't embrace that change, you're going to be pretty miserable. Yeah, thank you very much Max, appreciate it. Next, we have Jen Kramer. Thank you very much, Jen, for coming onto the show. I really appreciate it.

    JEN KRAMER: Great, nice to see ya. Thanks. Hey everybody.

    KENT: So, Jen, before we talk about what it is that your talk is about, I'd like to get a quick introduction to you. Could you about who you are, where you come from, and what you're interested in?

    JEN KRAMER: Sure! So my name's Jen Kramer. I'm a senior staff author at O'Reilly and I'm a lecturer at Harvard Extension School. I've been teaching website design and development for 15 years, in an academic environment as well as in commercial environments. I do workshops, I do things online, etcetera, etcetera. And back in the day, I freelanced and I had my own company and the rest of it, but the last four years I've just done teaching, it's been great. And previously, I was a lynda.com author.

    KENT: Wow, so teaching is kind of obviously a big part of who you are--

    JEN KRAMER: It is what I do.

    KENT: And you gave a two-day training here at Fluent about how to design, let's see, what was it called now... How to build a product, is that?

    JEN KRAMER: Planning successful websites and apps.

    KENT: There we go. (laughs)

    JEN KRAMER: With the fabulous Heather O'Neil.

    KENT: Very good, can you give us a brief introduction to what your topic was about and some of the things that you covered in the workshop?

    JEN KRAMER: Sure. So the, as many of you developers may know, the fun part about thinking about a project is what kind of technology you're gonna use to start building it, right? So we say, "we need a new thing," and everybody goes, "hey cool, we can use this hot new framework and this other thing," and we're all like, "it'll be awesome." And then you actually get to content and you say, "huh, I wonder what we're actually going to say with this thing." So it's actually way better to start planning your website or application from the ground up. And there's actually a process and procedure that you can use that will greatly enhance your possibility of being successful. Remember, like 60% of the apps in the app stores are never downloaded. That's a lot of money to spend to never download an app, and all that development time, you did it 'cause you never understood who you were building it for or why you were building it.

    KENT: Oh wow, that sounds like having a process in place and something that actually makes sense is pretty important to developing applications. (laughs)

    JEN KRAMER: I would say.

    KENT: So can you talk about a little bit, just kind of an intro, to what is that process, like where do you start? 'Cause I'm a developer and often, I'm exactly like you described, I'm just like, "Okay, cool, so now I can finally use Graph QL and React," and like all this really cool fun stuff. And I just jump right into that, just like you described. So where is the right place to start and how do you ensure that you're building the right thing for the right people?

    JEN KRAMER: Sure, well it kind of all depends. Are you a freelancer?

    KENT: No, I work for PayPal.

    JEN KRAMER: Alright so, freelancers, you may be doing this yourself, the entire process. If you're working for a larger company, like PayPal, you might have a team of people that help you do this. But basically, what you want to do is first of all, you want to understand your client or whoever it is that's asking you to build the thing. So you need to understand what the goals of the organization are, what the goals of the project is, and the goals of your users. You need to understand all three of those kinds of things, so you can understand what people want to get out of it.

    Let me just tell you a story. Alright, so my very first web development project after I graduated with my master's degree was I built a website, this is 2001, for a developer who lived where I lived in Southern Vermont. Southern Vermont has a rough median income of about $40,000. This guy was a developer, he had built a house worth $1.875 million. And it being 2001, the concept of putting real estate online was fairly radically new kind of thing to do. So, where was his target market to purchase this house? It was not in Southern Vermont. So it was actually in Boston and New York City and Montreal and Albany and other various towns that are around that, where people make lots of money and maybe they come for a vacation home or something. So his overall goal was to sell the house. Great. So we need to somehow to reach the people who are going to be in these large cities, they are not in Southern Vermont. How can we do that? How about a website? Ok? But the purpose of the website is not to sell the house, right?

    KENT: It's to--

    JEN KRAMER: Is anyone? Right, is anyone gonna make a $1.875 million buying decision based on what a website says? Highly unlikely. Certainly not even Bill Gates is going to do that. So the point of the website is, let's provide enough information to convince people to come up for the weekend and visit the house.

    KENT: Very good.

    JEN KRAMER: And of course, from the user perspective, there's certain information that they need to make that decision, so bedrooms and bathrooms, and the nuts and bolts about the house. But also like what are the school districts like? What's going on in the area? What kind of activities are happening? How far is the skiing from the house? That kind of thing. So understanding those different perspectives, and even then, that's a super simple example and feels like child's play in 2016, it's still really, really demonstrates exactly what you need to know and it start at least start from building a successful application.

    KENT: That's actually like, you totally, you're reading me like a book. 'Cause I totally would've been like, "yeah, I'm just gonna try and convince people to buy this house on the website," right? So I think having a really good process and knowing the right questions to ask is really valuable, so thank you for sharing that. Is there anything else that you'd like to share with our audience about anything else that you're interested in, really?

    JEN KRAMER: Oh, well, normally, I wind up talking a lot about responsive design and bootstrap and SASS and other various types of technologies. And you can follow me at O'Reilly and I have started to put out some weekly videos for O'Reilly that are covering various types of topics.

    KENT: Very cool.

    JEN KRAMER: I have four out right now that are about Bootstrap 4, which of course is in Alpha 2, yay! And it was supposed to be out at the end of last year and we're still in the alpha stage. So it will be, when it does come out, we'll put out a full video course on that. If you like the concept of how to plan successful websites and applications, we are also putting a video course out on that with Heather and me. We were in (mumbles) recording last week. This week, we ran the workshop. We're gonna chop up some interactivity with the students, like doing various activities and interweave that into the video that we recorded last week, so you can watch the video as soon as it comes out.

    KENT: Thank you very much, Jen. I appreciate you coming on the show. And we'll see you around the rest of the conference.

    JEN KRAMER: Thank you.

    KENT: And now we have Rachel. Rachel Andrew, right?

    RACHEL: Yep.

    KENT: Great. Thank you so much for coming onto the show, Rachel. Really appreciate it. So, Rachel, you have a lot of tags on your thing there.

    RACHEL: Well there was even more that I could potentially put on here but it was starting to get a bit silly, but yeah.

    KENT: Yeah, I think I need a little bit more silliness, personally. (laughs)

    RACHEL: Yeah, I think it's going, this is a full stack tags thing.

    KENT: Very cool, very cool. So Rachel, why don't you give us a quick introduction to yourself and then we can talk about what you were talking about at the conference.

    RACHEL: Ok, yes. So I'm Rachel Andrew, I'm a web developer from the UK. And this is my second Fluent. So I'm over here talking about grid layout and other CSS layout things.

    KENT: Very cool. So you had workshop, or two-day class and then you have a talk, you haven't given that talk yet, right?

    RACHEL: Right.

    KENT: Yeah and so are you a little bit nervous about that talk?

    RACHEL: Well it's a subject that I've been talking about quite a bit over the last few years so, yeah I'm really looking forward to it actually. I think it will be fun.

    KENT: A little background about what this CSS grid layout thing is, especially for somebody like me, who's more focused on the JavaScript side of things. But I do have to do CSS often and actually, with stuff like Flexbox, I'm actually really starting to enjoy it. (laughs) But maybe you can talk with us about what this CSS grid layout is.

    RACHEL: Yeah so, really the layout methods that we've got at the moment, the things we've traditionally been using, so floats and positioning and all that stuff. They were never really designed to do full page layout. And that's really where all the problems that we have with layout come from. You know, we're trying to use floats and you have this issue, you try and float things, you float one thing left and one thing right and you can't tell the right hand thing that it should be as tall as the left hand thing.

    KENT: Right.

    RACHEL: You know? They're just sort of like equal height columns there, and then a whole bunch of you can't align things, you can't do vertical alignments. And yeah, not good. (laughs) And we've been doing this for years. We've been battling away with this stuff for years. And so Flexbox was really the start of this kind of bringing in a new layout system for the web. And Grid is the other half of that because, the thing with Flexbox, as anyone who's used it for a bit, will realize it's very good if you've just got a bunch of things in a line and you can wrap it in things. But then if you try and control things in two dimensions, it doesn't really work. And that's because it wasn't designed for that, it was designed for the sort of small UI elements.

    And what CSS Grid Layout does is the other piece of that. It's more for those bigger structures, actually creating a two dimensional grid and positioning your items in it. So, between the two of them, with Flexbox and Grid, we're going to have a proper layout system for the web. And that's what's so exciting and that's why I've been talking about it and trying to get people excited. I'm looking at the spec and offering feedback to the working group to say what they would like to see in a spec like that.

    KENT: Awesome, that's exciting. So it's, based off what you said, my assumption is that the spec is not actually finalized yet and it's not actually implemented in browsers yet, is that true?

    RACHEL: There are implementations. So this spec actually came from Microsoft, so there's an early implementation in IE 10, 11, and Edge, but that's actually quite out of date now, it's MS prefixed. But it's an older version. So the new spec is in Blink, it's behind the flags. It's one of these browser feature flags you have to toggle. You can also get to it in unprefixed in Firefox Nightly, also in Webkit Nightly's prefix so there are (mumbles). But probably the easiest way to play with it is to use Chrome and switch on the experimental web platform features flag and then loads of stuff will just start working and you can play with it. I've got a lot of examples at the site called GridByExample.com, which is where I've been putting all the different things I've been building. So you can toggle that flag, go and have a look, and actually play with it.

    KENT: Very cool, I think just like you said, it's pretty exciting because for years we've been hacking at these different things that were never designed to do what they're doing these days. So what are some of the things that we can do as a community to help... browser vendors and the specification and the working group to push these things forward, so that we can start using things the way that they were intended to be used?

    RACHEL: Well actually have a look at it. Have a look at the spec and start to build things and think about how you would use Grid layout to build the sort of sites that you are currently building, you know, maybe using Bootstrap, or (mumbles) framework or whatever and think, "Does this work?" and other places where it isn't working very well. And if that's happening, offer that feedback to the working groups and write about it. Just show if there are... so CSS specs, there's loads and loads of new specs kind of floating around and some of which aren't, don't have a lot of implementations. If you think they're important, write about them. Because that's the only way they're gonna get out there into the world is if the browser vendors see that people are demanding a certain spec and it's implemented. Then they're gonna look at it and say, "well maybe it's worth putting the work in to implement it." But if there are no signals from the community, if it doesn't look like we're interested, then, you know, we'll not get that stuff.

    KENT: So would you say that's why you're giving these trainings? Great, very good. So, one last question and then I'll let you say whatever it is that you want. So, you're a trainer and a speaker here at Fluent. What are some of the things that the Fluent Conf organizers to enhance your experience?

    RACHEL: Oh, actually loads of things. It's been a really nice conference. I think those that looked after as a speaker coming in from another country and things that like, I just mentioned in the Slack that there are a bunch of things I'm allergic to that I can't eat. And they sorted me a special meals at lunch time, which is great because otherwise, what happens is I have to go out and find something and then I don't sit at the table and chat to people.

    KENT: Right.

    RACHEL: So it's like a social thing isn't it? You know, I don't mind going and finding something else to eat, but then you miss out on the interaction, especially on workshop days.

    KENT: Sure.

    RACHEL: When you've only got an hour. So it's stuff like that, I feel like they've actually looked after speakers very well which is really nice and that happens a lot of conferences and it's great when that happens.

    KENT: Great, thank you so much Rachel. So before we say goodbye, I'd like to invite you to say whatever it is that you'd like to say. Is there anything else that you're really interested in or any points that you wanna make?

    RACHEL: Well, really just go and have a look at my Grid examples at GridByExample.com. Play around with them. And if you got any questions or if there's anything that you try and build or you don't think you can build, let me know. I will be very happy to play around with it and try and do that.

    KENT: Very cool. Thank you so much, Rachel. I appreciate you coming on to the show, and I'll see you around the conference.

    RACHEL: Yes, you too.

    KENT: Thank you. So that's our show, JavaScript Air is a wrap here at Fluent Conf. So I'll just close out with a couple of things. First our sponsors, our silver sponsors, we have, Fluent Conf actually is a sponsor, so thanks Fluent Conf, for sponsoring the show! And Auth0 is also a sponsor. They do super simple authentication for us developers. Thank you to Auth0.

    And so with that, I think I'll just wrap us up with a couple of announcements and general things. So remember, if you have any suggestions for the show, for the guests or the type of topics that you'd like us to explore, go to Suggest.JavaScriptAir.com. And if you have feedback for this show or any other past show that we've had, or the show in general, go to Feedback.JavaScriptAir.com, and you can submit feedback there. And then again, if you want to sign up for the newsletter, just like Peter said, that URL is not JavaScriptWeekly.com, but it's jsair.io/email. And with that, I think we're good to wrap things up. Thanks, everybody, for watching and we'll catch you next week on our End to End Testing show. Thank you, goodbye!
  `,
}
