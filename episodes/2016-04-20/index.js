export default {
  title: `Internet of Things with JavaScript`,
  guests: [
    {
      name: 'Andy Carle',
      twitter: 'PrototypingAndy',
      picks: [
        `[Chvrches](http://chvrch.es/)`,
        `BLE Hacking (Bluetooth Low Energy)`,
      ],
    },
    {
      name: 'Kassandra Perch',
      twitter: 'nodebotanist',
      links: [
        `[Learn JavaScript Robotics](http://www.amazon.com/Learning-JavaScript-Robotics-Kassandra-Perch/dp/1785883348)`,
        `[Tessel](https://tessel.io/)`,
        `[Espruino](http://espruino.com)`,
      ],
      picks: [
        `[Kristina Durivage](https://twitter.com/gelicia)`,
        `[avrgirl](https://github.com/noopkat/avrgirl)`,
      ],
    },
    {
      name: 'Kristina Durivage',
      twitter: 'gelicia',
      picks: [
        `Suz Hinton’s (cat filled!) presentation on how javascript runs on hardware  https://vimeo.com/129003513`,
        `Coming after 4/22 - A tutorial on making a simple IOT device with particle http://portfolio.gelicia.com/connecting-the-internet-with-the-thing-on-the-particle-platform/`,
      ],
    },
  ],
  description: `
    The world is becoming more and more interconnected with more devices joining and communicating on the network every day. The space of hardware hacking is exciting! It's becoming even more welcoming to developers as the barrier to entry has been decreased significantly with JavaScript.
  `,
  youTubeId: 'oUBbfYUzaAI',
  podbeanId: 'sgtax-5e9e3d',
  shortUrl: 'http://jsair.io/iot',
  host: {
    tips: [
      `Communicate with screencasts!`,
    ],
    picks: [
      `[How to create a bite-sized screencast](https://www.youtube.com/playlist?list=PLV5CVI1eNcJhc9Lxu83Zp4uyqP2yKV4xl) by [your’s truly](https://twitter.com/kentcdodds)`,
      `[Conference Speaker? Here’s 7 Tips for Getting Accepted](https://medium.com/@housecor/conference-speaker-here-s-7-tips-for-getting-accepted-6151af513148) by [Cory House](https://twitter.com/housecor)`,
      `[JavaScript and Robots with Raquel Vélez (rockbot)](https://changelog.com/200/)`,
    ],
  },
  panelists: [
    {
      twitter: 'kwuchu',
      picks: [
        `[Ember Fastboot](https://ember-fastboot.com)`,
        `[Ember-CLI-Deploy-DigitalOcean](https://github.com/iheanyi/ember-cli-deploy-digitalocean)`,
      ],
    },
  ],
  transcript: `
    KENT: And we're live with JavaScript Air. Hello, everyone. My name is Kent C. Dodds and I am your host. Broadcasting today from PayPal offices in San Jose. And today, we're joined with a couple subject matter experts on The Internet of Things with JavaScript. So this is gonna be kind of a fun episode, I think. But before we jump into the episode, I wanna give a shout out to our sponsors. We have two new sponsors, gold level sponsors today. And so, excited to introduce them to you all.

    So first, our premiere sponsor is Egghead.io, and they have a huge library of bite-size web development training videos. Check them out for content on JavaScript, Angular, React, Node, and much more.

    Frontend Masters is a recorded expert led workshop with courses on Advanced JavaScript, asynchronous and functional JS as well lots of other great courses on front-end topics. Check them out, FrontendMasters.com.

    TrackJS reports bugs in your JavaScript before customers notice them. And with their Telemetry Timeline, you'll have the context you need to actually fix them. Check them out and start tracking JavaScript errors today at TrackJS.com.

    And then SparkPost, hooray! You can count on SparkPost to provide seamless integration of the highest inbox placement rates, unsurpassed performance, and real time insight. Get started sending 100,000 emails per month, totally free at SparkPost.com. They have the sweetest free tier, it's amazing!

    And then WebStorm is powerful JavaScript IDE. It makes developers more productive with its super intelligent coding assistance for JavaScript Node, Angular and React, and integration with lots of different tools. Learn more at JetBrains.com/WebStorm.

    All right, sweet. So I'm just gonna go ahead and give a couple announcements. Remember, if you're watching live, you can tweet with the hashtag #jsAirQuestion. And we'll answer your questions at the end of the show. So, if you have any IoT related questions this is a great time to get answers.

    And then remember we are a weekly show. And so next week we are going to be having a show, same time, same place. Actually, I won't be in the same place, I'll be back at home. But you could be in the same place. We're gonna be talking about Ember. So that should be an exciting show. We're kind of continuing this theme of JavaScript frameworks. Giving everyone exposure to the amazing ideas from lots of different angles. And then follow us on Twitter, Facebook, and Google+ to keep up with the latest. And I am almost ready to stop talking. (laughs)

    So, let's go ahead and introduce the people we have on the show today. So, we have panelist (mumbles), aw, shoot. Dang it, I'm sorry, 'Ee-shawn-ee'. I'm pretty sure I'm pronouncing your name wrong. Can you pronounce your name correctly for everyone, please?

    IHEANYI: Yeah, 'Ee-haun-ee Ecka-chu-ku'.

    KENT: Iheanyi Ekechukwu, okay. Wow, I'm really sorry, that's really embarrassing. Okay, and then, (laughs) we're glad to have ya. Then for myself, I'm Kent C. Dodds, your host. And let's introduce our guests to you all. So we have Kristina, now, I didn't try to practice your last name, is it 'Dura-veige'?

    KRISTINA: Yeah, 'Dura-vaaj', it's fine.

    KENT: Durivaje, (laughs) thanks, Kristina. Kassandra Perch.

    KASSANDRA: Hi.

    KENT: Kassandra's actually a return guest. We had her at Forward JS like a month or two ago. A live, on-site conference show. It was sweet. And then we're also joined by Andy Carle.

    ANDY: Hi, there.

    KENT: Thank you all for joining us. I'd like to give you each a second to introduce yourselves before we get into the subject of Internet of Things with JavaScript. So, we'll go ahead and start out with the order that I introduced you all. So, Kristina, why don't you go first.

    KRISTINA: Okay, my name is Kristina. I live in Minneapolis. And I am probably most known for the TweetSkirt. Which uses the Particle Core to kind of run a LED array, and then a node backend to pass messages from Twitter or Twilio or whatever. So, I'm covering kind of the using JavaScript as the server to run things part of things.

    KENT: Love it. And Kassandra, I think you have something a little bit similar there. Do you wanna talk about that?

    KASSANDRA: Yeah, Kristina. So, Kristina's basically my twin. I am known, also, for Node wearables. Some of them are full JavaScript, but I have a belt that you can tweet at. And it has colors and it is also run on a Particle Photon. So, yeah, very similar stuff going on. And Kristina and I have discussed, at length, how we are basically twins. So, yeah. (laughs)

    KRISTINA: Yeah, the first time we met we were just comparing notes. And it's just like, "Me too," like, kind of down the line, so it worked out really well.

    KENT: (laughs) Nice.

    KASSANDRA: Yeah, everything from family members having the same occupations to, yeah, it's ridiculous how much we have in common.

    KENT: Very cool, very cool. Andy, why don't you go, introduce yourself.

    ANDY: I'm Andy Carle, I'm a director of the Kinoma team here at Marvell Semiconductor. And we probably make tool kits for people who want to bring JavaScript kind of off of the web and off of servers, and into kind of real, physical product design. So, we do Kinoma Create and Kinoma Element, which are our prototyping tool kits for product developers. And KinomaJS, which is our JavaScript runtime and framework for JavaScript development for embedded devices.

    KENT: Very cool. I think we'd like to talk about that a little bit during the show. But I think, let's kind of put everybody on the same playing field here. There are likely people listening who are a little bit confused by the word 'things' in our title. So let's start out by talking about what is the Internet of Things and what are these things that are related to the internet. Anybody can jump in on this conversation.

    KASSANDRA: I could start with this one. So, basically, anything that you can put a micro-controller in can be a part of the Internet of Things. Between the Particle Photon costing $20, and getting you set up with GPIOs and a Wi-Fi connection. We have a clothing, we have biometric devices, we have... I'm building a Dungeons and Dragons gaming table that will have lights in it that will be part of the Internet of Things. There are refrigerators. Yeah, anything you can even put a microcontroller in and connect to either Wi-Fi or a local network, it can be a part of the Internet of Things. And that's part of what's so exciting about it.

    ANDY: And on commercial side, you might think of products like the Nest Thermostat or Philips Hue light bulbs. Things that you can actually walk into a Home Depot or a Best Buy and come home and get onto your Wi-Fi network, and then control with your phone or web browser over the internet.

    KRISTINA: Yeah, then the cool thing, too, is it can be controlled from anywhere you are. Or it can be shared with someone else easily, which is good and bad if they don't think about security.

    KENT: (laughs)

    KRISTINA: It's really, really exciting to be able to, like Kass was saying, just put a microcontroller in stuff. Especially for us who just like to build kind of fun stuff. And be able to think of new ways to make an interaction with other people.

    ANDY: Mh-hm.

    KENT: Very cool. So, what are, like, we already kind of talked about some of the use cases, but why would somebody want to use JavaScript to participate in this Internet of Things? It seems like JavaScript is a really high level abstraction. And really far from the middle. So, why JavaScript?

    ANDY: Well, I think JavaScript is getting traction everywhere because it's so, kind of, accessible to such a wide audience and powerful at the same time. You know, not everybody that has a brilliant idea for an amazing product wants to go out and learn C, and how to build their own Linux drivers, and how to do the kind of wonky command line, James Bond villain sort of stuff. But a lot of different do people know JavaScript or are able to kind of pick up JavaScript, and use that as an entry into this space.

    KRISTINA: Yeah, and I've really liked being able to kind of separate people. Like if you have someone who can do the hardware stuff really, really well, because that's what they do all day long, then you can have someone else who's used to doing web apps, like what I do for my job, to build the server and interact with it really easily.

    KASSANDRA: Yeah, and you mentioned for not very bare metal, that's becoming less and less true by the day. You can now install a modified version of V8 on an ESP2866 Wi-Fi chip that has relatively little RAM, relatively little hardware, and run JavaScript directly. The Espruino engine is actually what I'm alluding to here. So it's getting closer and closer to the metal as we speak. As we work.

    KENT: Let's make sure we get a link to that in the show notes, Kassandra, that sounds awesome. Very cool. So if I'm, like, totally new to this, how do I get involved in the Internet of Things with JavaScript? I'm asking for a friend. And I am my friend. (laughs)

    KASSANDRA: (laughs) One great way to get started is the Johnny-Five library. And basically, an Arduino Uno kit and a SANE Smart equivalent would even be cheaper. Getting started there. If you're looking for step by step tutorials (Disclaimer: I'm the author), there's a book called Learning JavaScript Robotics, out now from Pact, that will walk you through how to build NodeBots. Assuming you already have JavaScript knowledge. There's also node-ardx, which takes the very popular ardx Arduino kit and walks you through all of the experiments that come with the kit. But instead of C, they're in JavaScript. So that's pretty handy. And of course, all of these will be in the show notes. So, yeah, those are the best ways I can think of to get, oh, and Tessel. Good point, Kristina, Tessel. Tessel 2 just came out and it is fantastic. And it has a Johnny-Five wrapper. Or you can use it without. And it runs Node straight on the board. And $35 for a web connected, JavaScript running microcontroller. Yay!

    ANDY: Indeed. And so, Tessel and our products, the Kinoma Create and the Kinoma Element, are both things that I would recommend to people that kind of don't want to futz around with a lot of installation and bring-up. They're just sort of, pull it out of the package and it has JavaScript running on it. Tessel is an excellent product.

    KENT: Cool. Do you wanna talk about the product that you're working on right now, the Kinoma?

    ANDY: Sure.

    KENT: What does that, like what role does that play in the Internet of Things with JavaScript?

    ANDY: Well, so, we have two things. We have Kinoma Create, which is this guy right here. And we have the Kinoma Element, which is that guy right there. (product crashes to floor) Whoa. It's very durable. And basically what they are is, the Kinoma Create is an embedded Linux box. You know, it's effectively a computer with a touch screen Wi-Fi Bluetooth speaker microphone, all that sort of stuff built in. And then Kinoma Element is just a little Cortex ARM microcontroller with Wi-Fi built in. And so, the idea is that with both of them, you get them up and running just by kind of pulling them out of the box and turning them on. And then write JavaScript in our IDE and remotely run your applications and debug to the devices. So you plug in your potentiometer, your sensors, or your whatever else you want to get up and running for your device. That's kind of something we've alluded to here, but not really talked about is that most IoT devices are some combination of computing and sensing. And so you wanna be able to plug in your color sensor or your temperature sensor or whatever else from SparkFun or Adafruit. And then do some computing with it. And make decisions and draw your user interface and everything else in JavaScript.

    KENT: Very cool. So it sounds like, if I understand you correctly, like Kinoma's goal is to make coding with, or doing NodeBots or JavaScript Internet of Things, a little bit more accessible to people by providing good hardware and an IDE that's specific for it?

    ANDY: Yeah, good hardware, good, you know, good support around the IDE. And then, also, actually what we've done for the past 10 years, and going back actually a little further than that, is we make our own JavaScript runtimes. So, rather than running kind of V8 or Node's back-end, we have our own JavaScript engine called XS that's been kind of  tuned aggressively for this IoT space. And for running on embedded.

    KENT: Cool, so what are some of the, like, exciting things that you can actually build with the Internet of Things JavaScript? Why would somebody really be interested in getting involved in this kind of a thing?

    KASSANDRA: So Kristina and I aren't the only people in light-up clothes at JavaScript conferences?

    KENT: Yeah.

    KRISTINA: I like that, yeah, that would be fun. (laughs)

    KASSANDRA: Yeah, I tell people constantly. Like, I mentioned that all my projects and stuff are open-source, and I always use open-source hardware when I can. And someone asked me like, "Well, aren't you afraid that like 50 people are gonna show up with your skirt next year?" And I'm like, "Afraid? That would be the best day ever." Like, I would--

    KRISTINA: Dance party.

    KASSANDRA: Right? Like, that would be the funnest thing ever because that would also mean we've enabled 50 new people to build something that they thought couldn't exist. And that's really the essence of my answer, is, well, you can build the things that you want to exist, but don't, or that do exist, but you wanna make 'em yourself. Like, there's this very builder-intrinsic want to build, okay, so, like cat feeders. Rachel White did a fantastic presentation on a cat feeder that was a bulk goods dispenser and a NodeBot. Yeah, you could buy an automated cat feeder. Like for 150 bucks off Amazon, that works on Wi-Fi. But why do that when you can build it? So, yeah, the answer to that, what you can build, is things that don't exist that you want to or things that exist, but you wanna know how they work. The best way to know how something works is to build it.

    ANDY: Mh-hm. And then some people will take that great idea and go out and make, you know, a million of them, and start a business.

    KENT: Cool, yeah, so the start of the Internet of Things, I don't know, couch. Yeah, that's happening. (laughs) I'm sure we could come up with something really interesting. Yeah, we'll brainstorm about that.

    KASSANDRA: I mean, I've got Internet of Table. So, yeah. So, to put more context on that, I do woodworking, I do any craft known too. My sewing room's just full of them. But I also do woodworking. And I'm building an eight seat table for my front room area. Because my friends and I play D and D, and we wanted a board game geek table. But the one we wanted was like $14,000. And I don't wanna pay more for a table than my car.

    KENT: (laughs)

    KASSANDRA: So I'm gonna build one. And then we were like, well, why not throw a couple Raspberry Pi's in there and some NeoPixels. And we could find a way to cool the cup holders. And of course, scope creek went like, you know, amazingly in that one night. But I'm actually speaking at Twilio SIGNAL here in a little bit. And I'm gonna have a prototype of one of the seats with me, with the NeoPixels and everything working. So, yeah, furniture is definitely something that we're starting to IoT. Like the Sleep Number Bed? I'm just waiting for them to put that on the internet. Like, it'll tweet, "This person changed their mattress side to 80."

    KENT: (laughs)

    KASSANDRA: Like, because we tweet pictures of food. Why not tweet our Sleep Number? (laughs)

    KENT: Yep. It sounds like the sky's the limit (laughs) with that. So, what about like for people who are getting into this? 'Cause I guess I'm kind of focusing on getting into it because it seems to me like not enough people are involved in this stuff. And there are a lot of people who are just waiting to get in. And it seems like a lot of all of your effort is to get people involved in this. So what are some of the common challenges that you see people face as they're getting into IoT? What are some of the hard parts about IoT? Or is it a lot easier than we think it is?

    KASSANDRA: It's becoming easier by the day. Things like Kinoma, things like Tessel, things like the Particle Photon, these open source projects and documentation are making it easier by the day. The two challenges I find most often are people are afraid they're gonna hurt themselves, break something expensive, (Kent laughs) or that they're just not smart enough to do it. And number three, I always start any workshop I do with NodeBots with, "Yes, you are smart enough. Get in here." And when you're working with Arduinos, Tessels, etcetera, (disclaimer: don't sue me if I'm wrong), you will, 99.999% chance, not hurt yourself with five volts -- unless you take a bath with your Arduino. If you get into relays and working with like 120 volt, yes, you could hurt yourself. But, like, lighting up an LED? You're not gonna hurt yourself. Soldering iron, you could hurt yourself with. But luckily, most of these are plug and play. And you don't have to worry about that. So I usually put that disclaimer at the beginning, too, is that with five volts, you are very, very, very not likely to hurt yourself.

    And as for destroying expensive things, luckily, microcontrollers come with lots of fantastic little tiny pieces that prevent you from breaking them. Say, you plug something in backwards. Like littleBits, for instance, have the magnets so you can't flip 'em the wrong way. You know, so it's convincing users that you won't break the expensive stuff. You might burn out some LEDs, but they're like five cents apiece. That they're not gonna hurt themselves. And that even though you've never done hardware before, you are smart enough. I always tell people I've only been doing hardware for two years. And now I'm an author, and go to conferences all the time and speak about robots. And I'll be, technically, a robots expert in a few years. I'm going back for my electrical engineering degree, starting in the fall, but--

    KENT: Wow, congratulations!

    KRISTINA: Yeah, that's awesome.

    KASSANDRA: Thanks, it's terrifying. It's a terrifying amount of math involved. But anyway, yeah, that's the three biggest challenges I find in getting people interested.

    ANDY: Yeah, I mean, a lot of people just see this as a bigger leap than it actually is, I think. Like, it seems to be a whole different world to go from kind of pixels on the screen to actually physically holding something. You know, a real device.

    KENT: Yeah, totally.

    ANDY: But at the end of the day it's kind of, bits are bits, and you control these things in the same way that you're used to controlling, you know, everything else that you've ever programmed. And so, it doesn't need to be as intimidating as people initially feel like it is.

    KRISTINA: Yeah, for me it's just always been about having a good mentor. Like someone to help you along with stuff. Like, if your first. you know, if your first exposure to it is a workshop, like what Kass is saying, you're smart enough for this. You're gonna screw up, but you're probably not going to die. And it's gonna be okay.

    (laughter)

    KENT: Thanks for putting that 'probably' in there just in case.

    (laughter)

    KRISTINA: I mean, well, yeah. Probably not gonna die. And then, like, these parts are getting cheaper all the time, too. And I think a big thing for software people is, like, it's really, really hard to write JavaScript, so that bit, like, to write JavaScript in a way that will actually blow up a device, like physically hurt a device. But like when you're wielding a soldering iron, there's a little bit more of, you know, the (mumbles) possibility of actually physically breaking something. But just, like, this stuff isn't, you know, buy two and just go nuts. 'Cause these microcontrollers now are like five bucks. Like, the Uno knockoffs can be like five bucks or something like that.

    KASSANDRA: Yeah, the Trinkets, yeah.

    KRISTINA: Yeah, so, it's not hard to just, don't let that be a thing that holds you back from trying.

    ANDY: We recently help a bunch of workshops for 4th to 6th grade girls here at the Kinoma offices. And I, at one point, sat them all down and taught them to solder. So, if you can, you know, get 4th grade girls with their soldering iron, not killing themselves, anybody that's listening to this can do it too.

    KASSANDRA: Yeah, my mom's a 4th grade teacher, and my dad just taught her to solder. And yeah, now she's building NodeBots. So, this was a couple weeks ago when my dad taught her to solder, and she realized she wasn't gonna hurt herself unless she, you know, wasn't paying attention. And she's like, "Oh, well, I've never done code." I think it was Andy that mentioned earlier that JavaScript as this very accessible sort of interface. Yeah, my mom texted me two weeks later with a video of a NodeBot and I was like, "Oh, my gosh, this is the best day ever." I was so excited.

    KENT: Super cool.

    KASSANDRA: Like, I showed all my friends. I tweeted about it. And another thing that makes the community accessible, at least the NodeBots community, harkens back to my origin. One of the first people I ever saw for NodeBots was Raquel Velez. And it kind of harkens to Kristina's mentor note as well. The NodeBots community is the most diverse programming community I have ever participated in. More than half of the Core NodeBots group is non-white sis-males. Lots of women. We are working on being less white. And we constantly police ourselves about being better about who we include. And everything that NodeBots does has a code of conduct. NodeBots Day has a code of conduct. Our forums, our Gitter channels. We adopted the Contributor Covenant for Johnny-Five.

    I think that's also part of the accessibility as for the NodeBots community, is that we are diverse, and we recognize that we must always do better. Because, I say this a lot, we don't need bad people to make good code. If we foster the right environment, and we foster the people that want to be in this community, good code will follow. We don't need to hold onto the people who are like, "Oh, well, they're a jerk, but they code real well." No, we don't need to hold onto those people anymore. If we foster good communities, good code will follow.

    KENT: I love that, I'm gonna go tweet that right now. I think that's super cool. And I did wanna actually get into the community because I'm not really in the NodeBots community. I haven't really done a lot with the Internet of Things. I once programmed a Sphero and a Leap Motion to do stuff together. That was super cool.

    KASSANDRA: Then you're a NodeBots person. Because that's,

    KENT: (laughs) Yeah.

    KASSANDRA: You've written a NodeBot. Then you are a NodeBots person. Hooray. (laughs)

    KENT: It is super cool. But every single time I look at the NodeBots community or the Internet of Things community, all I see is just really nice people. And so, can we talk about that a little bit? Like, how does this community manage to create such a welcoming and friendly environment in something that seems really intimidating to a lot of people on the outside? It's just magical, I guess. (laughs)

    KRISTINA: No, it's like, There's a lot of... Like, there's this old school mindset with hardware, because it's been around, you know, through the 60s and 70s, and that's gotten a lot of kind of people with an older mindset, who don't want to be as helpful or as inclusive. And I think, for me anyway, I do what I do in speaking and trying to reach out to people just because I have hit those roadblocks from the older school type of mentality, where you're not sharing ideas. Like, you're keeping it, or you're building it in a basement somewhere and not really sharing that. And I've had people give me the absolute wrong advice, but do it in a way that's like, "I know what I'm talking about." Which is really, really scary when you don't know what you're talking about, and you're like, "Okay, that doesn't make sense with anything I've ever learned, but this person obviously knows it." And like, no, I mean, not necessarily. It just isn't the thing all the time. So, I mean, for me, I try to be open and teach just because I wanna help people not have to deal with the same, the people that sort of would have turned me off if I wasn't more stubborn.

    KASSANDRA: There's also this communal newness to NodeBots. Like, most of us, I think Raquel has a background in robotics, but most of us in the NodeBots community have not been doing hardware very long. Even the folks who adopted the beginning, in the beginning of Johnny-Five, have only been around two years in the hardware scene. So I think that communal newness kind of doesn't, like, it gives everybody an even playing field. Because it's like, you look at the experts and they're like, "Oh, well, you've only been around two years, "So if you can do this, I can do this." There's no, and I talk about this a lot at conferences, too, there's no idols, really, in NodeBots. There are cool projects, but there's no, like, "Oh, that person is amazing no matter what they do or say. If they say something horrible, it's okay, because they did this." No, we don't have idols in NodeBots. We have cool projects and cool products. And I think that it also is part of it, is that we don't have any idols that we allow bad behavior from. We just have cool projects.

    ANDY: Mh-hm. I would say here in the Valley, especially in the connected devices space, where everybody's doing these little startups and incubators, and trying to build their cool IoT thing, we kind of all understand that we're in this together. And that, like, most of these things are going to fail. And that's sad in a sense. (Kent laughs) But it's also kind of inspiring in a sense. That there's all these people out there just kind of trying things and building things that you never would have thought could exist, you know, five or 10 years ago. And pulling together as a community at good meetups and hackathons and things here around the bay area, just to commiserate about the fact that, like, you know, we're trying something new and for a lot of us it won't go well. (laughs)

    KASSANDRA: My nana used to tell me, when I was riding a bike, that "failure is the sprinkles on the success ice cream sundae."

    KENT: Nice.

    KASSANDRA: Yeah, and I think she was totally right. Especially in NodeBots. If you fail the 1st time you do something, and you fail the 2nd time, when you succeed, it feels that much better. You wanna yell that much louder and jump that much higher and run around even more, because you're like, "Yes, I did this. It couldn't be done, but I did it." Like, yeah. So, sprinkles on the ice cream sundae of success. (laughs)

    KENT: That's fantastic, yeah, that's, you know, more than we bargained for for this show. Like, you've given us some pretty good, solid life advice. Well, thanks for that, that's cool. So, I think I wanna get a little bit more technical now. And yeah, let's talk a little bit more about how these thing work. Iheanyi, I think you had a question.

    IHEANYI: So, yeah, my question was around more about Johnny-Five and the library for doing this Internet of Things with JavaScript. 'Cause back in college, I took a class where I had to use an Arduino to build some project. I built a weather cube that would, like, you know, communicate with external APIs. But I'm wondering, how well does Johnny-Five handle Wi-Fi or the various shields that come with the Arduino boards. Is it only with the default Arduino configuration?

    And then my 2nd question would be around memory management of the underlying, you know, C code or C-inspired code. 'Cause I realized as a computer scientist or software engineer, we kind of forget that memory isn't really as infinite or, you know, as large as we imagine it to be. In comparison to, you know, microcontrollers. You got way less memory to work with.

    KASSANDRA: I can tackle those. So, for one, with the Arduino boards specifically, Johnny-Five does not tackle IoT very well. However, Johnny-Five is so much more than Arduino now. It supports over 35 different platforms. Tessel, for instance has a Johnny-Five wrapper. And the Tessel handles IoT magnificently. The Wi-Fi chip is built in on-board, and you've got everything you need to get started. The Particle Photon has a Johnny-Five wrapper. And one of the things I love to say about Johnny-Five is when you are writing Johnny-Five, you are writing a Node server. So any of the Node modules you use in day to day can be used in tandem with Johnny-Five. And also with things like the Kinoma. It'd be outside the realm of Johnny-Five, but there a lot of, so, NodeBots is not just Johnny-Five. All Johnny-Five bots are NodeBots, but not all NodeBots are Johnny-Five. You've got lots of devices coming out that handle IoT with JavaScript really well.

    And the 2nd question, memory management. So, on the Arduino platforms, Johnny-Five runs Firmata on the board, and receives instructions from the computer running the Node program. So memory management is not a problem, because all the Arduino is doing is processing messages on the Arduino. The memory management would just be on your laptop, where the memory would be almost endless. You'd only have to worry about the same memory leaks you would have to worry about in Node programs. With things like the Tessel, it's very good about giving you warnings when you're getting close to memory consumption, much like when you upload an Arduino script in C and it says you've used this much memory, you have this much left.

    IHEANYI: Yeah. Could you purge it and everything like you can in C? 'Cause I remember I was communicating with this API that was huge, and I had to something unique with purging out, or deleting like, or, you know, you have to free up memory. In order to, like--

    KASSANDRA: I cannot speak to Tessel's ability to do that. I don't know for sure if it has the ability to do that.

    ANDY: I can talk a little bit about how we handle those problems.

    IHEANYI: Yeah, I'd love to hear that.

    ANDY: So, in our engine, you know, we have a pretty aggressive garbage collector in order to kind of minimize these problems, while still not impacting performance in any particularly meaningful way. And we've decided that the way we were going to handle this was to really aggressively just follow the JavaScript spec. And so, we follow all the rules in terms of, you know, if your object is attached to a global object, or if it's attached to an object that's currently in scope. And if, you know, it's attached to something that's being drawn on the screen, then we keep it. And otherwise we sweep it away really aggressively. And so, in that sense, we sort of allow people to manage their own memory if they have to. Just by deciding kind of what objects to keep around and what objects to disassociate from the kind of global tree.

    KENT: Fascinating. (laughs)

    IHEANYI: My computer's so laggy. Thank you.

    KENT: Yep, very cool. So, maybe somebody could take us through, like, the eye-level overview of the Hello World example of blinking an LED. What exactly is happening, like, maybe we could get pretty technical here. But maybe a general idea of what's happening from the time that I type my code and hit run to the time the LED actually starts blinking. What are the technical aspects of that? Like, flow of commands and electrons and stuff.

    KRISTINA: You're talking about Johnny-Five, right?

    KENT: Well, it could be an abstraction or, I'm kind of mostly interested in how does JavaScript get converted, or transformed into something that can actually communicate with an LED.

    ANDY: Well, so, in our case, what you would be doing is, on the Kinoma Create, you've got our JavaScript engine running on the device. So, we don't do kind of remote control in the same way that was being described for, like, an Arduino. We really do kind of interpret directly on the device. And so, just say you had an LED set up. And you say LED dot, you know, on. In our case, what's that's going to do is trigger a little bit of C code in an extension to the JavaScript engine. That, on Kinoma Create, which happens to be a Linux system, goes through a Linux driver. So, we wrote, you know, a Linux driver to interface with the actual GPIO pins that are part of the SOC that powers this device. And so, JavaScript gets interpreted, triggers a function in C code, C code triggers a function in the kernel. Kernel, which is basically just what's called sysfs, it's this mechanism for interacting with hardware through the file system. Kernel then tells the SOC to make that particular pin high or low. That pin goes from being, you know, zero volts to 3.3 volts. Goes through the LED, LED lights up. (chuckles)

    KENT: Cool, thanks for that. I think that's, well, it was interesting to me. Hopefully it was interesting to everyone else.

    KASSANDRA: I could speak a little bit to Johnny-Five as well as other platforms.

    KENT: Cool, yeah.

    KASSANDRA: So, for Johnny-Five, at least on Arduino platforms, it sends a message to the Arduino saying, "I need this pin set to this value." And then the Arduino handles it internally. It gets a little more interesting when you talk about platforms like the Intel Edison or the Beaglebone Black. Basically, what I call itty bitty computers. So, they contain everything they need to run in a small amount of space. Those, it's interesting, you actually, in a lot of cases, write to the file system a specific value at a specific place. And that turns a GPIO to a specific value, which is really interesting to me. It's like a really funny, like it feels like a hack to me. It's like, "Oh, I write to this file and an LED turns on." But that's how a lot of these platforms actually end up working in the software side of it all. Yeah, it's really funny to find out that on your own.

    KENT: Yeah, that's really weird. It seems like it's... Like, we definitely need an abstraction on top of that kind of crazy API. It's kind of like, you know, nobody likes the DOM, and so we created jQuery so we don't have to deal with it as much. Well, I guess that's maybe not a perfect analogy. But yeah, that's kind of weird. (laughs) But I'm glad that there are abstractions like Kinoma and Johnny-Five to kind of hide that away from us.

    ANDY: If you ever read the source code for sysfs, which is this thing that does the kind of file system based turning on and off of GPOs and things, you will find that the authors of it would agree with you that it's a hack.

    KENT: (laughs) Well, awesome. I'm glad that they've done all the hacking so that we can do the making. So, very cool. I think we're coming close to our time. So I'm gonna go ahead and just ask, what other really cool things are there that you'd like to talk about with the Internet of Things? What have we not talked about already?

    ANDY: Well, one thing that I would briefly like to bring up is that the new... we just had, over the past year and a half, the new ECMAScript 6th standard that came out, JavaScript 6. And ES6 has really brought a lot of features that are important for IoT. So, we're now able to do kind of, you know, modules as 1st order objects and we're able to do garbage collection in kind of smarter ways. And the whole framework for doing Promises, the whole kind of asynchronous framework around that, really is an excellent fit for IoT devices, which often just kind of want to send out a message, and then when something happens, respond to it. So, ES6, I think, is a topic that's going to continue to be incredibly important to JavaScript for IoT. And our engine is fully ES6 compliant. Open source on GitHub, you can check it out.

    KENT: Cool. So, before we wrap things up, I did wanna just get a sense of what people think the future of IoT is. So, like right now, it's kind of fun. We can make a sweet dress or we can make a cool belt. Or we can make, you know, a Nest. But I don't think that's the endgame for IoT. I think there's a lot of really cool things that we can see, like if we just watch Star Trek. So, what do you see, each of you, I'm curious what you see as the future of IoT?

    KRISTINA: I can't wait to see how it can affect other things, like, civically, I'm working with a startup now that wants to put light rings on lamp posts. So, in Minnesota, we get a lot of snow. You guys in Utah too. But we have this alternate type parking, where you can park on the odd side on one day, and then the even side on the other day. And then there's some places you can't park at all. And it gets confusing. But we wanna put colored lights on the light posts to be able to signal either red or green for can you park on this side of the street or not. And there's other things too, like when, I'm just talking out of my rear end a little bit about this, but when it starts to flood, they start evacuating roads to park in as the flood waters rise. And so, they do block off parking in zones in some places. And then having lights on lampposts to kind of signal where you can and cannot park from that would be really interesting. And I'm really excited to see how that takes off in sort of the more kind of boring than tweet skirts and light-up clothing, but also extraordinarily useful things that can help the public.

    KENT: Yeah, totally, making a difference in the actual world.

    KASSANDRA: That's part of where I view, my view of the future of IoT is three-pronged. So, it's gonna affect the real world more and more, much like Kristina mentioned. The middle is, it will be more and more accessible. So, we're getting really close to being able to unleash an IoT platform on a room full of kids with very little instruction and have them building their own thing. So, the education's definitely a part of it. The 3rd is gonna be data aggregation. And building stronger user profiles out of this network of devices that we're building. Which is terrifying and awesome. So like right now, Google has all of my information. Like, it knows where I am. It knows where I'm going. It knows where my hair appointment is. And as we build this IoT network of devices, we're gonna know more and more about users, and be able to aggregate more and more of that data to bring them better experiences, on the nice side. And spy on them more, on the bad side. And somewhere in the ambivalent middle is, you know you're being spied on, but you're willing to accept the downside because of the benefits. So that's, (Kent laughs) I see more robust user profiles and a huge demand for data scientists in the future of IoT. Because the more things we build, the more data we have, the more numbers to crunch, the more data scientists we need. So, yeah, that's gonna be fun.

    KENT: Very interesting.

    ANDY: Yeah, so, building off of that, I'll say that my vision of the future of IoT, and maybe this is aspirational instead of what I actually think is going to happen, but what I hope is going to happen is a more concerted effort towards ownership of products. And I mean that in the kind of holistic sense. One of the reasons that I think that JavaScript in particular is important for IoT, is because it really opens up the ability to modify your product for the end user, you know, not just for the company in Silicon Valley that maybe will be out of business in six months, but for everybody in the community. And for this kind of, you know, grand world of people building kind of new firmware and new applications to run on top of their devices. So, I would like to see a world where, just like if you don't like the alarm clock that came with your phone, you can download a different app for that. I would like to see you, if you don't like the app that came with your refrigerator, you download a different app for that. If you don't like how your physical alarm clock works, you download a different app for that.

    And this kind of customizability lends itself, you know, leads into the kind of transparency that we were just talking about. Where we want to know what's happening with our data and be able to control that to some extent. And then, also, this kind of independence from the company that built the product and hands it to you. There was a big story in the news about a week ago, where Nest decided that they were just going to kill off a product line. It was this kind of SmartHub thing that goes into your house and controls other devices. And there's something incredibly frightening to me about this notion that somebody can sell you a product, it's a physical good, you screw it into your house. You've installed it in your wall. And then they can turn around and say, "Meh, we're not gonna do that anymore. We're gonna turn off your thermostat or you home hub." And I really do thing that--

    KASSANDRA: Or your pacemaker.

    ANDY: "Yeah, you know, whatever. Whatever it is that we've sold you that was going to be amazing." Yeah, and that's just absolutely abhorrent to me. And so, I think that the future of IoT has to go towards this direction of, you know, people really understanding and owning and being able to change how their own devices work.

    KENT: Yeah, that is kind of a scary thought that I hadn't actually really considered is, like, Asher, Google can kill Google Reader but it's not that hard to move away from that. Like, you haven't really invested tons in that. But when you screw it into your wall or you put it into your body, yeah, if they decide to discontinue the service, that's a problem. So making sure that it's open and not so proprietary. I'll bet that we have a situation that's very similar to the mobile space, where you have Apple device, which are very proprietary. Unless you do some fancy thing to it, you're pretty much stuck with whatever Apple gives you. And then you have the Android devices that are sort of the same in some cases, but it's really a lot easier to kind of customize and do what you want. I expect that we have refrigerators that are just like, this is what you get and there's no way to put anything else on. But then you have the people who are, like, want to root those devices or whatever and do what they want with them.

    Cool, okay, so, we don't have any questions on Twitter. But I'll keep Twitter open just in case anybody has last minute questions while we get into our tips and picks. So remember, if you do have questions and you're watching live, go to Twitter and tweet the hashtag #jsAirQuestion. And we are here to answer your questions about IoT. So, while we wait for those to come in in droves, we'll go ahead and move to our tips and picks. I'll let Iheanyi go first. And then I'll go. And then we'll let our guests go. Go ahead.

    IHEANYI: All right, so, really, I only had one pick. I haven't really talked about, well, I guess this hasn't been mentioned, I was at EmberConf last month, and Ember FastBoot has hit 1.0. So, if you wanna check out a way of server rendering your Ember applications for a good SEO and all that, check out Ember FastBoot at EmberFastBoot.com. And also, a shameless plug, I've created a plugin for deploying your Ember FastBoot applications to a DigitalOcean Droplet. So you can also check that out on my GitHub. It's called Ember CLI Deploy DigitalOcean. And yeah.

    KENT: Cool, yeah, make sure you get that CLI DigitalOcean thing in your picks too.

    IHEANYI: For sure.

    KENT: Yeah, cool. So, actually, I'm excited about that. 'Cause we're having our show next week with Ember. Some people who do Ember stuff. So--

    IHEANYI: Yeah, I'm excited too.

    KENT: Yeah, it's gonna be sweet. So, Ember has done some really amazing things with their Glimmer rendering engine. And FastBoot is super awesome. So, cool ideas coming from the Ember team. Okay, so, for me, I just have one tip: communicate with screencasts. Lots and lots of people learn really well from video. Lots of people learn from reading too. I'm not one of those people. Video is how I learn. And creating screencasts has just become a little bit easier, hopefully, because of one of my picks, which is How to create a bite-sized screencast. And this is a screencast about screencasting that I created, it's on YouTube. And it's a playlist of nine videos. They're like, the longest one is like 14 minutes. And so, yeah, it's pretty quick. And it shows you how to do screencasting. Like, high quality bite-sized screencasts. It's great, a great way to communicate how to do things. You couldn't really do IoT super well with that. Except maybe the coding side of things. But you gotta bring a camera in there to show what you're actually building, eventually.

    But yeah, then my next pick is a blog post by Cory House. It is entitled Conference Speaker? Here's Seven Tips for Getting Accepted. And so, I agree with most of these tips. Most, like 100% almost, of these tips. Great tips. Recommend you check that out. So, let's go ahead and go to Kristina. What do you have for us? The mute button is--

    KENT: I, oh, yeah, sorry. I was like going (mumbles). I was like lost in space and time. I wanted to talk about, we were talking about how does JavaScript IoT actually work. There's a great presentation by Suz Hinton, where she really goes into it. But with cats and cat butlers and cats. And it was great. It was adorable, first off. And it goes really deep in how the bits and bytes work. And then translate from JavaScript into communicating with an Arduino. So, that would be my, if you really wanna go there, it's a great resource. Both in that is handles a historically dry subject matter in a way that's really interesting.

    KENT: Very cool. Kassandra, it sounds like you're really interested in, or gave a huge plus one to that. Kassandra, why don't we go with your tips and picks.

    KASSANDRA: Yeah, I plus one that. And we're twinsies again, Kristina, because my recommendation also has to do with Suz Hinton. Because she is amazing and spectacular. So, NodeBots is moving beyond just controlling robots. We're starting to subvert the traditional tool chains for robotics, and that includes things like AVRDUDE. So, AVRDUDE is a piece of C code written 20 years ago that has zero unit tests, and it used to load all the code on Arduinos ever. Yeah, so Suz is writing avrgirl. She recognizes that the acronym is arbitrary, but so was the acronym for

    AVRDUDE. So anyway, she's rewriting it. She's got some really cool libraries. Like, Firmata Party, if you ever wanna use an Arduino Uno with Johnny-Five, you used to have to download the Arduino IDE, and then follow some instructions, and then flash your board. Now, you just npm install GE Firmata Party, plug into your Uno, hit Firmata Party, and ta-da, you have Firmata. Which is great on Wi-Fi on conferences because instead of 180 megabytes, you are downloading 12. Much better. So that's one of my picks. My other pick is that, I get to go to a lot of conferences and speak about robots, but my schedule's super full. I get requests all the time. My twin's sitting right there, right. Like, okay, and she wants to speak at conferences too. So my 2nd pick is invite Kristina to speak at your conference, because she is amazing and awesome.

    KENT: I've actually--

    KASSANDRA: You like my dance that I stole there?

    KENT: Thank you. (laughs)

    KASSANDRA: (audio cuts out) to my left on my screen, so I hope I'm pointing at her on your screen.

    (laughter)

    KENT: I've actually seen Kristina speak at Midwest JS last year. She's fantastic. So, yeah, plus one to that. You're awesome, Kristina. (laughs) All right, Andy.

    ANDY: I have two picks. My first pick is the band Chvrches. Because I went to a Chvrches convert last night and my ears are still ringing. But Chvrches was amazing at the Fox Theater in Oakland last night. So, if you haven't listened to Chvrches, it's a good JavaScript coding soundtrack.

    And then my 2nd pick is BLE Hacking. So, there's more and more of these BLE devices coming out online through Kickstarter, through Amazon, through everywhere. People are making cool BLE things. And one of the neat features of BLE from a kind of hacker perspective is that it's basically impossible to really close off your APIs if you're building BLE devices. And so, it's really super easy to come in with your Kinoma Create or your, you know, your phone, anything that has a kind of BLE chipset in it and make your lights blink in cool ways. Or make your, you know, robot that is controlled, a lot of these little Sphero style robots are controlled over BLE and to hack the controllers for those. So if you're looking for a fun little project to do, pick up some arbitrary, cheap BLE device and give it a go.

    KASSANDRA: For the uninitiated, BLE is...

    ANDY: Bluetooth Low Energy. BLE 4.0. Bluetooth 4.0.

    KENT: Cool, yeah, Kassandra, it looks--

    KASSANDRA: Just wanted to make sure we covered that.

    KENT: It looks like you're a big fan of Chvrches, also.

    KASSANDRA: Oh yeah, no, they're amazing live. Their music on album is great. And live, it's a whole 'nother thing. Yeah, no, great music.

    KENT: Very cool. So, I actually thought of another pick that I wanted to make sure that I got out there. And that is the most recent episode of The Changelog. This is another podcast that I listen to and totally love. But it's episode number 200. It's called JavaScript and Robots with Raquel Velez. And I think there's a lot of love for Raquel on this podcast. She's super awesome. And during that podcast, she describes, like, the perfect method for teaching, where it's like, get people excited about something 1st. And then they will be motivated into learning. And like, learning will be a side effect of their excitement to build something awesome. So anyway, it was a great episode. I recommend that everybody go check it out. So I'm gonna at that to my picks. So, yeah, we--

    KASSANDRA: So the diversity thing, did you all notice that every single NodeBots pick was non-male, look at that. That was awesome. 'Cause its Suz and Raquel.

    KENT: (laughs) Yeah, I've actually noticed that, like you said, Kassandra, it is, the NodeBots community is very diverse. And I think that is kind of, compliments its ability to be really welcoming and friendly. Because, you know, we're kind of all in this together. And it's awesome. So, that's very cool. Okay, sweet, so I'm gonna wrap us up. So, thanks, everybody, for coming to the show. Just to give a quick shout-out to our silver sponsors, they are O'Reilly Fluent Conf, Auth0 and Trading Technologies. So, check them all out in the shout-outs. Very cool, Auth0 shout-out for Kassandra there. (laughs) Kassandra worked at Auth0. So, thank you.

    KASSANDRA: I work there. It's not past tense, I work there.

    KENT: Yeah, yep, (laughs) awesome. And then, so let's just, a couple links for you all. If you have suggestions for the show, this actually, this show was a suggestion, go to suggest.JavaScriptAir.com. And you will be taken to a form where you can give me a suggestion on topics or guests that you'd like to have on the show. And then go to feedback.JavaScriptAir.com to submit feedback. And I should say, on the suggestions, I've gotten a lot of suggestions. And so, if I haven't done your suggestion yet, don't feel bad, it's a huge backlog. And so I've gotta deal with that. I do read every single one of your suggestions. I care about you. And same thing on our feedback. I read all of the feedback, and really appreciate that. If you'd like me to respond, please leave your contact info because I have received some feedback, and I wanna get back to you about it.

    And then, we do have a newsletter. If you go to jsAir.io/email, that will take you to our MailChimp newsletter, where you can get show notes and behind the scenes. Like after the show and show highlights and stuff like that. So it's awesome. And then remember, next week we're gonna be chatting' about Ember. It's gonna be sweet. And yeah, that's it for our show. So, thank you very much, everyone, for coming on. This was a great discussion, so thank you.

    KRISTINA: Yeah, thank you for inviting me.

    ANDY: Thank you for having me.

    KENT: Yeah, it was sweet. We'll see ya later! Buh-bye.
  `,
}
