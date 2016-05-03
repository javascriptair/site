/* eslint max-len:0 no-trailing-spaces:0 */
import {panelists} from '<resources>/panelists'
import {cloneDeep} from 'lodash'
const guests = cloneDeep(panelists)


const guestLinksTipsAndPicks = [
  {
    twitter: 'dan_abramov',
    links: [
      `[React Hot Loader](http://gaearon.github.io/react-hot-loader/)`,
    ],
    picks: [
      `[devtool](https://github.com/Jam3/devtool)`,
      `[React.js pure render performance anti-pattern](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.a6h48jrtg)`,
      `[Fullstack React](https://twitter.com/fullstackreact)`,
      `[Code Cartoons - Relay](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-1-3ec1a127bca5)`,
      `[Redux 2 in the works](https://www.reddit.com/r/reactjs/comments/418spy/redux_2_in_the_works_with_dan_and_contra/)`,
    ],
  },
  {
    twitter: 'drboolean',
    links: [
      `[Hardy Jones on lenses + virtual dom](http://joneshf.github.io/programming/2015/12/19/Lenses-and-Virtual-DOM-Support-Open-Closed.html)`,
      `[Lamda Conf vids](https://www.youtube.com/watch?v=JxC1ExlLjgw&list=PLE7tQUdRKcybh21_zOg8_y4f2oMKDHpUS)`,
    ],
    picks: [
      `[Jeff Bridges: The sleeping tapes](http://www.dreamingwithjeff.com)`,
      `[Don Hertzfeldt: World of Tomorrow](https://vimeo.com/ondemand/worldoftomorrow)`,
    ],
  },
  {
    twitter: 'getify',
    links: [
      `[You Don’t Know JS book series](http://youdontknowjs.com)`,
      `[MakerSquare](http://makersquare.com)`,
      `[Frontend Masters](http://frontendmasters.com)`,
      `[ForwardJS Workshops](http://forwardjs.com/workshops)`,
      `[ForwardJS free webinar: “Blocking Across The Wire”](https://attendee.gotowebinar.com/register/7996879282595345666) Tue Jan 25, 12pm CST`,
      `[FluentConf Workshops](http://conferences.oreilly.com/fluent/javascript-html-us/public/schedule/detail/47782)`,
      `[asynquence](http://github.com/getify/asynquence)`,
      `[A Tale Of Three Lists](http://github.com/getify/a-tale-of-three-lists) The “TodoMVC” of async programming`,
    ],
    tips: [
      `Pair program with a friend on a couch.`,
    ],
    picks: [
      `[RTC Everywhere](https://github.com/contra/rtc-everywhere) P2P cross-platform`,
      `[ChakraCore in Node.js](https://blogs.windows.com/msedgedev/2016/01/19/nodejs-chakracore-mainline/)`,
      `[Brave Browser](https://brave.com/) by [@BrendanEich](http://twitter.com/brendaneich)`,
    ],
  },
  {
    twitter: 'kwuchu',
    links: [
      `[IBM Chef Watson](https://www.ibmchefwatson.com/)`,
    ],
    picks: [
      `[Ember-CLI 101](https://leanpub.com/ember-cli-101) - Really good book for getting started with learning Ember!`,
    ],
  },
  {
    twitter: 'linclark',
    links: [
      `[A cartoon guide to Facebook’s Relay, part 1](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-1-3ec1a127bca5#.ak19gbh26)`,
    ],
    tips: [
      `Learn keyboard commands for your favorite web apps like Gmail. Flash cards can be really helpful for this. [Brainscape](https://www.brainscape.com/) has a few different decks.`,
    ],
    picks: [
      `[Dvorak keyboard training](http://learn.dvorak.nl/)`,
    ],
  },
  {
    twitter: 'mzabriskie',
    links: [
      `[@zabriskiesbeard](https://twitter.com/zabriskiesbeard)`,
    ],
    tips: [
      `[First Timers Only](https://github.com/search?utf8=%E2%9C%93&q=language%3AJavaScript+state%3Aopen+label%3Afirst-timers-only)`,
    ],
    picks: [
      `[Learning React Native](http://shop.oreilly.com/product/0636920041511.do)`,
    ],
  },
  {
    twitter: 'pamasaur',
    links: [
      `[Choosing a JavaScript Framework](http://bleedingedgepress.com/our-books/choosing-javascript-framework/)`,
      `[When the computing](http://thewebivore.com/when-computing-hurts/)`,
    ],
    picks: [
      `[Pixel Art to CSS](http://pixelart-to-css-react.herokuapp.com/)`,
    ],
  },
  {
    twitter: 'tylermcginnis33',
    picks: [
      `[Headspace](http://headspace.com)`,
      `[Front End Newsletter](http://frontendnewsletter.com)`,
      `[React.run](http://www.react.run/)`,
    ],
  },
]

guestLinksTipsAndPicks.forEach(info => {
  const guestIndex = guests.findIndex(g => g.twitter === info.twitter)
  guests[guestIndex] = {...guests[guestIndex], ...info}
})

export default {
  title: `Introducing the JavaScript Air Panel`,
  guests,
  description: `
    We have some solid developers on the JavaScript Air panel working on some amazing things. This is your chance to get to know them!
  `,
  hangoutId: 'ciduop5sck7su6n8f99nnctigt0',
  youTubeId: 'gxI5m_raAWg',
  podbeanId: 'mu5vn-5bebfd',
  shortUrl: 'http://jsair.io/panel-intro',
  host: {
    links: [
      `[My Talks and Workshops](http://talks.kcd.im)`,
      `[My Egghead lessons](https://egghead.io/instructors/kentcdodds)`,
      `[My Blog](http://blog.kcd.im)`,
      `[My AMA](http://ama.kcd.im) and my answer to [what's your favorite/most-effective learning method?](https://github.com/kentcdodds/ama/issues/41)`,
      `[First Timers Only](https://medium.com/@kentcdodds/first-timers-only-78281ea47455) - My original blogpost about the concept`,
    ],
    tips: [
      `Take chances, make mistakes, and get messy! -Miss Frizzle, Magic School Bus`,
    ],
    picks: [
      `[Babel Service](https://github.com/bahmutov/babel-service) by [Gleb Bahmutov](https://twitter.com/bahmutov)`,
      `[The Magic School Bus](http://www.scholastic.com/magicschoolbus/) (warning! Video auto-plays)`,
    ],
  },
  transcript: `
    KENT: And we're live with JavaScript Air! Hello, everyone, my name is Kent C. Dodds, and we have every single one of our panelists today on one show, which is super exciting. We're going to be introducing all the panelists to you. We have eight panelists, and then myself, and so we have a lot of people to go through today, but I thought that it'd be really useful for people watching the show and keeping up with it to keep up with who is talking during the show. We have some awesome developers here. All of us have really interesting backgrounds, and so this should be a fun show!

    Before we get too far into it, I would like to give a shout out to our sponsors because they are enabling some really awesome stuff for this show. First is our premiere sponsor, Egghead.IO. They have a huge library of bite-sized videos on web development and so, check them out for content on JavaScript, Angular, React, Node, and a bunch of other really awesome things. I'm working on a series right now that is supposed to help newcomers learn how to contribute to open source. So I'm really excited about that one. Frontend Masters is a recorded expert-led workshop with courses on Advanced JavaScript, Asynchronous and Functional JS, as well as a lot of other great courses on frontend topics. Track JS reports bugs in your JavaScript before customers notice them. And with their telemetry timeline, you'll have the content you need to actually fix them. So, check them out and start tracking JavaScript errors today at TrackJS.com. Then, we have two new sponsors, (wooh!) WallabyJS is an intelligent and super-fast test runner for JavaScript that continuously runs your tests. It reports coverage and other results directly in your code editor. Wow, amazing! Immediately, as you change your code, it's crazy! Check them out at WallabyJS.com. And definitely check them out, their demo video is way cool looking, so very cool. Codecov. Codecov is coverage done right. Reduce technical debt by visualizing test performance and faster review for your code reviews. Codecov is highly integrated with GitHub, and provides browser extensions. Learn more at Codecov.io. I use them, personally and I think they're great.

    So, let's go ahead and jump into a couple other announcements. If you have questions during the show, any specific questions about any of our guests, or anything, then you can ask on Twitter with the hashtag #jsAirQuestion. And then, as always, follow us on Twitter and Google+ and Facebook to keep up with the latest. Also, we are a weekly show, and so next week we have another live show that's super, super cool. It's about Chakra, the open source JavaScript engine from Microsoft. And they have a pull request out to Node to make it, Node, work with Chakra right now, so it's like, crazy exciting times. It's open source. And it's like, what? This is Microsoft, so cool. So, check us out next week.

    Okay, let's get into things. Let's introduce everybody, and then we'll just go ahead and ask our questions. I'll go left to right on my screen. I see Brian Lonsdorf. Say, "Hi"

    BRIAN: Hey!

    KENT: And Dan Abramov.

    DAN: Hey, there.

    KENT: And Iheanyi, I can't pronounce your last name, you'll have to say it.

    IHEANYI: Ekechukwu.

    KENT: Ekechukwu, awesome. We're super excited because this is the first time Iheanyi has been able to jump on the show, so, wooh! Actually, no, technically, he was on the first show with Brendan Eich, but wasn't--

    IHEANYI: Wasn't talking that much?

    KENT: Yeah, (laughs). And then we have Getify, or Kyle Simpson.

    KYLE: Hello!

    KENT: And Lin Clark.

    LIN: Hey, everybody!

    KENT: Congratulations on your Code Cartoons release today.

    LIN: Thank you very much, and thank you for reviewing it.

    KENT: Absolutely. And, Matt Zabriskie.

    MATT: Hello.

    KENT: And Pam Sell... Selle, I keep calling you Pam Sell.

    PAM: Hi. (laughs)

    KENT: I'm sorry, Pam, I'll get over that habit. And Tyler McGinnis.

    TYLER: Hello.

    KENT: All right, let's get into our show. Basically, the goal of this show, it's kind of a conversation amongst each other to kind of get to know each other better, and for the audience to get to know each one of us. The questions we're going to ask is, more general and more conversational, but basically like, What's your name? Where're you from? Where do you work? How'd you get into software development? Those kinds of things. I think we're going to start off with Iheanyi, just because he may need to jump out. Yeah, Iheanyi, why don't you give us a little intro to yourself? Where do you call home? How did you get into software development?

    IHEANYI: Yeah, so a little bit about myself. My name's Iheanyi Ekechukwu. I'm a computer science and graphic design graduate from the University of Notre Dame. Currently working at IBM Watson. My home town is Myrtle Beach, South Carolina, but right now I'm living in Austin, Texas. I'm working down for IBM Watson over here. I actually got into software, I didn't start coding until college, technically, but I'd been interested. Whenever I was younger, I thought I wanted to be a video game developer, but then it came time to do that whole college thing, and I was looking at video game design schools at first. But then I also started researching salaries and whatnot, and things about the video game industry, and actually realized it's kind of, everybody's like getting underpaid and overworked because the video game development is actually really difficult. (laughs) My cousin majored in CS at a local university, and he's like, "Why don't you just do Computer Science? And then if you want to be a game developer, go do game development, or you could also go do other stuff, if you want, like if you so choose." I decided to go and do CS, and haven't really regretted it since then. I fell in love with coding as soon as I got into the major, and just started like, learning everything that I could from there.

    KENT: Cool, so where do you work, now?

    IHEANYI: IBM Watson.

    KENT: Oh, right, you did mention that, sorry. Can you tell us something that you do that is not related to software development?

    IHEANYI: I dance. I started dancing in college as well. I was in a hip-hop dance crew, so I do a lot of B Boy-ing and all that jazz in my free time, so that's fun. And I also like to design UIs and stuff like that. So that's cool as well.

    KENT: We need to get you at a conference. I want to see you at an after party. (laughs)

    IHEANYI: Sure, I'll tear up the dance floor. I got you.

    TYLER: Let's just do it right here. I don't see the problem with that.

    IHEANYI: I can't multi-task, (laughs).

    KENT: Nice, well, it is a video, so. If you feel so inclined. (laughs)

    IHEANYI: Maybe, I'll think on it.

    KENT: What's one thing that you've done with regards to your software development stuff that you would say that you're especially proud of?

    IHEANYI: I'm especially proud of? I think in regards to software development, what I'm proud of, what am I most proud of? That's hard to choose. I think helping Chef Watson become generally available is my proudest career moment because I guess it was my first actual project I shipped post-graduation. And it was kind of a big deal, and has gotten a lot of, like popularity in the media, in the news and all that. That's definitely, like my proudest moment.

    KENT: Cool. Make sure to get some links to that in the Google doc, that'd be good for people. Sweet. Anything else that you'd like to mention about yourself? Or any of the other panelists want to ask?

    IHEANYI: Nothing for me.

    KENT: All right, sweet. Let's go ahead and, Brian, why don't we go with you next. Can you give us a little background on yourself?

    BRIAN: Sure, let me just say, Watson is awesome. (laughs) If you haven't used Watson, check it out. And stop learning linear algebra yourself, and just use that. (chuckles) Still learn linear algebra. Anyway, (laughs) I am a... what was I supposed to say about myself?

    KENT: Just give us some background about how you got, or yeah, where you live, generally, and how you got into software development.

    BRIAN: Sure, so I used to live in Austin, Texas, now I live in the Bay area. I go to dev meet-ups every day, free pizza. (laughs) I started programing after... I used to be in a band, which is kind of embarrassing, but that's what I thought I was going to do with my life, and then that kind of fell apart. And I started learning the code and have continued to learn and still learning every day. That's fun. Oh, Pam has something to say.

    PAM: I want to know what your band, what your genre was. If your band genre was a Netflix category, what would it be?

    BRIAN: (laughs) You know, honestly, we tried to do like Kelly Clarkson covers. It was like if Kelly Clarkson wrote a song, and we would badly cover--

    PAM: I'm so glad I asked! (laughs)

    LIN: I am, too! (laughs)

    PAM: Did you ever go on tour?

    BRIAN: Well, yeah, up and down California coast. Never really like a serious thing. I know a lot of musicians that are coders, and I think it's all about patterns and recognizing patterns and being able to deal with it. Anyway, that's my theory. Other than that, I learned to do object-oriented for like, five, six years. Got way into design patterns, Gang of Four, Martin Fowler, Uncle Bob, all these things, but eventually fell into functional programing and have not looked back. I absolutely love it. I don't really side with one or the other, but I've been obsessed with FP for the last three or four years. Maybe I'll circle back around to logic programing or something. (laughs)

    KENT: Cool. So what's the one thing that you've done related to software development that you're, like especially proud of?

    BRIAN: Oh, right. Let's see. I feel like, I'm proud of, like, my personal achievement, I think is like trying to learn, like every language for at least six or seven months before I move on. I've done Objective-C, Erlang, PHP, Ruby, Python, Java, you know. It goes on, Scala, Haskell, so that makes me proud for myself because I'm like, "Hey, I can kind of write a crappy program in all these languages." Also, I got my mug. I wrote this little functional programming guide, the mostly adequate guide. I'm happy about that. That's about it. That, maybe, and the Fantasy Land spec on JavaScript, a lot of people go to that when they write functional stuff. So you'll see the recurring spec in, like RxJS, and Immutable.js, and things like that.

    KENT: Cool!

    BRIAN: Cool. I didn't really start it, I just contributed. (laughs)

    KENT: Contributions are valuable, for sure. So, make sure that we get links to all those things, especially, like where we can get that coffee mug in the show notes. (laughs)

    BRIAN: Right, right. That was a gift from my old... oh, also, I forgot to mention, I work at SalesForce, now. I used to work at Loop/Recur, and my buddies there got me that mug when I wrote the thing, but now I work at SalesForce, and I'm having a really good time, really good people. So, yeah, that's all I got.

    KENT: Great, awesome. Dan, you're the next on my screen. Why don't you go next?

    DAN: Hi, so I'm supposed to just tell my background? I think I started programming when I was, like 12. And I did that by accident because I loved Power Point. Power Point was my favorite program at the time. I didn't like computer games, but I loved Power Point. In Power Point, there is these service macros many, where I stumbled upon it accidentally, and I just found that you can press "record" and do something in the UI, and press "stop," and then there's a bunch of English lines that kind of correspond to what I did. And if I changed the numbers, they do the slide to different things. This fascinated me, and my grandma used to buy me books about Visual Basic for applications, Visual Basic 6. And later, I kind of transitioned to doing C# and that ecosystem, and this was when I got... when I was 18, I started working at a outsourcing company, just doing corporate mumbo jumbo, C# for finance companies. But, I kind of grew tired of that after a few years. I was fascinated with object-oriented programming, and all kinds of crazy hierarchies and all that kind of object-oriented stuff. Later, I got some exposure to functional programming and I kind of loved it. And so now, I'm kind of doing both, a little. I try to stay away from object-oriented programming, but I cannot do both.

    I work at Facebook, now. This is my second month at Facebook. I'm just finishing the boot camp. So I'm actually getting to work on something that is not, like random tasks from random things, which is really nice that I can do something. I guess in terms of what I would be most proud of, I think that would be, like I'm not taking... I'm not taking credit for that, but I think I contributed to this kind of movement in the community this kind of feeling that hot reloading, changing your code on the fly and seeing the results right in the running the application, this is something that used to be like, not considered mainstream. This is something that seemed like a fancy demo for a conference talk, or a fancy demo for a purely functional language, or something like that. People didn't really have this kind of productivity environment when they work on apps. I think with React hot loader, which was one of my projects, that piggybacked on webpack and React and their strong sides, it kind of helped to gain some momentum for hot reloading. And I think a lot of people, when they create new tools, new languages, need new libraries for JavaScript for rendering, I think, this is now based on expectation, that at least it's possible, or possibly, but people are paying attention to that, to this kind of developer experience, and they want to try it on different libraries. So, I'm happy that this happened and I'm happy to have made some contributions to make this happen.

    KENT: I promise you that we are all happy as well that you made those contributions. (laughs) Cool. So what's something that you do that you really enjoy that has nothing to do with software development?

    DAN: In fact, recently, I haven't been doing much. I enjoy just walking around the city, listening to music, watching TV shows with my wife, and just being regular person, I guess. I might, maybe I need to take a hobby, but not currently.

    KENT: I'm kind of in those same shoes. People tell me it's not entirely healthy, but... (laughs) Is there anything else that you'd like to say about yourself or your things that you've done, or any other questions from other panelists? (silence) All right, sweet. We do have a lot of people, and not as much time as I'd like, but, so we'll move on. Getify, you're next.

    KYLE: Hello, everyone. I'm Getify, sometimes also referred to as Kyle Simpson. I've been around this JavaScript name for a long time. I've probably specialized in JavaScript I would say for, about eight or nine years, but really been working with JavaScript for about 15, 16 years, so quite a while. Probably most notably known these days for a series of books that I wrote on JavaScript called You Don't Know JS. It's a six-book, 1,100 page series, and it's all online for free as well as, you can also purchase it from normal book sellers. It was published through O'Reilly. The first edition of that was recently done, and I'm now working on the second edition of those books.

    I am the head of curriculum for MakerSquare, which is a developer and engineer training school. We're based here in Austin, Texas where I live, but we also have offices in San Francisco and Los Angeles. We like to turn out good engineers, and I work on curriculum for them as my day job. Also do a lot of teaching of JavaScript. Basically, that's what I do all the time. So I have online classes that I teach through Frontend Masters, which is one of the sponsors for the show, you can check into, I think I have seven or eight workshops through them. Some of them, I think, are just about to come out. I have several workshops coming up in person at conferences, so Forward JS, which I know Brian is also a part of. I'm teaching some workshops through that, so you can check out Forward JavaScript. It's coming up in a few weeks. And then, a little bit later, an O'Reilly conference, Fluent Conf, also in San Francisco, and I'm also teaching there. So, lots of places to find me teaching. Also, a free online webinar. This next Tuesday, I'm giving a free webinar through Forward JS, so you can check that out. It's about some asynchronous stuff. So, yeah, that's what I do. I work on teaching JavaScript, and trying to figure out how to do that better.

    PAM: I want to know where you came up with your handle.

    KYLE: (laughs) I do get asked that regularly, and I wish it was an interesting, or you know, whatever story, it's not terribly interesting. But, so the true story is, back in 2006 or 2007, there was a series of TV ads done for... I don't know if anybody remembers the Ask.com search engine. I don't even know if they still exist, but anyway, Ask.com did TV ads, which was weird in and of itself. But their TV ads were themed "Getifaction," as in the word "get" plus the word "satisfaction" stuffed together. It was a weird set of ads, and it was only on for a couple of weeks. But I remember the very first time I saw that TV ad, immediately the verb form of that word popped into my head, the word "Getify." I started rolling around, thinking about how basically what I try to do is go out and get information and bring it back and make it accessible for people. So that sort of stuck, that became my company name, which is my side business company name. And when you're a one person side business, your company becomes your person, so it just became a personal moniker. So that's where Getify comes from.

    KENT: Cool. I know that a lot of people have benefited and learned a lot from what you've done, so thank you for those contributions. Awesome, and I love having you on the show 'cause of that unique teacher perspective that you bring. Great, so is there anything that, like is totally unrelated to software development that's a hobby of yours?

    KYLE: Unrelated to software development? Well, I play golf and ping pong, most recently a lot more ping pong, mostly because of the weather. I've been taking some lessons and trying to get better at it. It's really good exercise and lots of fun. I found out, just an interesting fact: I guess sports scientists have studied it and the game of ping pong is the most mentally-challenging of all the sports. Like when athletes are playing competitive ping pong, their brain is more engaged and more stressed than in any other sport. I thought that was interesting. It certainly is a good physical workout, if not a mental workout, too.

    KENT: Interesting. Cool. Neat. Let's, unless anybody else has other questions for Kyle, I think we can move on. Or Kyle, if there was anything else you wanted to bring up.

    KYLE: If I can just plug two more quick things, since we're all on here. Most of the R&D work in open source these days is around asynchronous programming. I think it's one of the biggest shortcomings for developers these days is really knowing how to effectively manage, and there's lots of things that you've probably heard of, but wading through all that is difficult. A lot of my writing, a lot of my teaching, and a lot of my R&D work is around that. Just quickly, I have a tiny little library called Asynquence, it's the word "async" plus the word "sequence" smooshed together, and that is a library designed specifically to help make learning and using early on various asynchronous patterns easier to get around. It tries to remove some of the rough edges around that stuff. Asynquence has been around and you might check that out.

    And building on top of that, I wanted to provide a way for people to understand the differences between the major different patterns, like reactive programming, functional reactive programming, CSP, callbacks, promises, all those different things. So I kind of took a page out of the ToDo MVC book and then I created a project called A Tale of Three Lists. It is just a simple little demo of various asynchronous events happening, but then I rebuilt it seven different times using seven different variations of asynchronous programming patterns. And that's all open source, so you have a code base that you can look at side by side, seven different implementations and try to get a sense of why one pattern has a strength in one area and a weakness in another. I would say the TLDR of that is that I don't really think there is one pattern that rules them all. I think there's a mixture of them that is most effective. I do a lot with asynchronous stuff, and if you're interested in that, check out the things that I've got.

    KENT: Awesome, lots of really great resources. Anybody listening or watching, check out the website later for all of these links to a ton of awesome resources. Great. So Lin Clark, you are the next on my screen.

    LIN: Hello. I'm Lin Clark, and I work from Pittsburgh, Pennsylvania most of the time, but I travel a lot, mostly to the San Francisco area. I work for Mozilla on the Firefox developer tools. The way I got into programming, this is kind of a fun origin story. My parents were programmers. They had a Bespoke operating systems company back when you made Bespoke operating systems. And my mom actually was a programmer on Apollo 11. She worked on the trajectory for Apollo 11. (laughs)

    KENT: Wow! That's impressive!

    LIN: Yeah, she's a cool lady. She also wrote a book on modeling the stock market, how you could use computers to model the stock market that the Wall Street Journal recommended. So she did a lot of programming back before I was, she raised us, so she wasn't doing as much of that when I was growing up. So I had access to computers at a pretty early age, but the thing that really got me into programming was I had heard that the advanced placement computer science course at our high school was one of the most interesting, intellectually challenging ones, but I hadn't taken the prerequisite. And it was going into my senior year and so I told my parent this, and they said I should teach it to myself over summer, I should teach myself C++ over summer. I was like, "Sure, yeah, maybe." Then, they went away to take care of, to help my sister move for a weekend. And it was SAT weekend, so they couldn't take me with them. And of course, being an American teenager, growing up in the '90s, what you do in that situation is, you have to throw a party. That's like the cultural expectation.

    So I threw a big party that got a little out of control, and when my parents came home, instead of punishing me, they grounded me for two non-consecutive days and told me that I had to teach myself C++ over summer. That's what I did. And I ended up being in this amazing class, and that's how I ended up actually continuing my interest in computer science. (laughs) So I think that's pretty much the perfect origin story for me because like the thing that I do outside of programming is, at coding conferences, I mostly spend all of the non-conference, non-talk time, trying to get people to go do karaoke and go dancing with me. (laughs) So I think my origin story kind of combines the two halves pretty perfectly.

    KENT: That's awesome, I know Matt Zabriskie and I can attest to that.

    LIN: Yeah. (laughs)

    KENT: Looking forward to React conf. We'll have to find a good place.

    LIN: We already have one in mind, actually, so. (laughs)

    KENT: Nice! Awesome. Cool, sounds like a party.

    KYLE: I just want to clarify: is that your parents saying C++ was a punishment? Or that C++ was a motivation? I can't really figure out which.

    LIN: (laughs) Well, you know what? I think that for them, they knew that the best way to keep me on task wasn't to punish me, but to just redirect it because despite being a partier, I was also a pretty nerdy kid. So, basically redirecting that energy.

    KENT: Nice. So, Lin, is there anything about software development that you've worked on that you're particularly proud of?

    LIN: Yeah, so there are a number of different things. I have been a core contributor on a few different projects, but the thing that I'm most proud of is not even software; it's the Code Cartoon stuff that I'm doing right now, which is basically describing different architectures and patterns in stick figures. And I just had one come out today; the first part in a four part series on Facebook's relay, which I'm really excited about.

    KENT: As a reviewer, I can tell you that the next three parts are really awesome, so follow along.

    LIN: (laughs) Thank you.

    KENT: Anything else you'd like to share with us, Lin?

    LIN: No. I think that's it, yeah.

    KENT: Okay, great. Matt Zabriskie, you're next.

    MATT: Hey, I'm Matt Zabriskie. I live in Provo, Utah, which is like 40 miles south of Salt Lake City. I work from home for a company called Instructure that's based in Salt Lake City. They do, like learning management software, which, if you've been to college in the last five, ten years you probably used Blackboard. Our product, Canvas, is like a competitor to that. In my opinion, not that I'm biased, but it's way better. I don't know what else to say about myself. Wasn't there like a list of a bunch of questions we're supposed to answer?

    KENT: No, I can ask you the questions.

    MATT: Go for it.

    KENT: So, how did you really get into software development?

    MATT: My dad was a programmer. He started in like 1968 doing Assembly on IBM mainframes. And so I've kind of been around software development my whole life. He didn't do anything cool like program space shuttles, (laughs) but I kind of was around it my whole life, but wasn't really super interested in it -- until probably early 2000s. Going through high school I kind of wanted to be like either an artist or a musician, I didn't know which route to go. And so around 2001, I had a friend ask me to design a website for him, just because of my art background, which is kind of a little bit different than most of what I'd done. And so I designed it for him, but then I didn't know anybody that knew HTML, and so he's like, "Cool, thanks for the design, how do I get this built into a web page?" And I'm like, "Well, I guess I could figure it out."

    So I Googled something, I guess it wasn't Google back then. Ask Jeeves, I don't know. I kind of found some tutorials that taught me some HTML and some CSS. And I ended up building the web page for him, and it was kind of a fun process. And I was like, "Wow, that's why my dad enjoys programming." That whole process of thinking things through and making something come to life was really exhilarating. So that kind of was like the launching pad into it. I did a few more small things like that, and then actually ended up getting an internship at a company to do like their corporate website, and ended up being there for like three years; as an intern for a year, and then was hired on to do some more software. That kind of like exposed me to a lot of stuff, like I learned Visual Basic there, did some C, a lot of PHP. And that was like in 2001, so about, almost 15 years ago, I've just been doing that ever since.

    KENT: One of the veterans on this show. Actually, just general question for everybody: and I probably should have been asking this to everybody, but how long has everybody been doing JavaScript? Matt, you said you've been doing 15 years. Anybody else do any longer than that?

    KYLE: The first JavaScript I wrote was in 1997, so that would be about 18 or 19 years ago. The first code I wrote was in 1990, so I've been around a lot longer than that.

    KENT: Oh, my goodness. Well, I feel really young right now. (laughs) Cool. Matt, what do you do for fun that's not related to software development?

    MATT: I like the outdoors, anything outdoors. I do a lot of rock climbing. I probably go rock climbing twice a week. I do trail running most days and I take my dogs. I've got two dogs. We live in Utah, so there's mountains close by, so we like to go out and run in the mountains. I don't know, I like beards. I like music. You can see I've got some guitars and a banjo in the background.

    KENT: I hear the banjo is really hard to play. Can you actually play the banjo?

    MATT: So, my wife actually bought that for me as a birthday present a while back, and I'm not good at it, but I know a few chords, and I can play a couple little things but I haven't really committed to learning it yet. It's actually a resolution for me this year: I want to get good at it -- relatively good.

    KENT: Cool. Well, so we actually have a couple of musicians around here. I'm a musician, I sing and I play the piano; Matt plays banjo and guitar. Brian, you play guitar, right?

    BRIAN: Yeah.

    KENT: Anybody else play an instrument?

    LIN: I do a pretty mean karaoke on my good days. (laughs)

    DAN: Yeah, same.

    KENT: Awesome, cool.

    PAM: I play the oboe.

    KENT: Oh, cool! nice.

    KYLE: Hey, I'm super jealous of Matt's beard, so I have this really creepy, weird question. If you were to shave it all off, how long would it take you to grow that back to that length, because that's awesome.

    MATT: To the same length?

    TYLER: Two and a half days.

    (laughter)

    MATT: I actually shaved this morning.

    (laughter)

    I would guess, to this length it'd probably take me about six months. I'm guessing, I don't know. I haven't been clean-shaven in like ten years, so I have no idea.

    KYLE: That's super impressive, I like that.

    MATT: Thank you.

    KENT: We should probably link to the beard's Twitter account. I'm just saying. Sweet, any other questions for Matt? Okay. Pam, you're next.

    PAM: Hey. I'm from Philadelphia, Pennsylvania, well, that's where I've been living lately. I'm actually originally from Kentucky, in case there's any other Kentuckians. (laughs) I got into software development by way of the internet. It's so awesome to hear how supportive of computers your family was, Lin, because I definitely had a computer quota and dial-up, and had to sneak downstairs during the middle of the night to use the internet to my heart's content because I was limited to only so much time per day. But the internet, and, but in a weird way, like the way people limited my access to the internet encouraged me to get to the internet, like learning about proxy servers to go around content filters during middle school. Stuff like that, because they blocked Live Journal, which was a really dumb decision. So there's that. So that's how I got into web stuff.

    And then I did some CS in college, but I didn't really realize that people would pay me to make things on the internet until it was time to, like go looking for jobs. That seems to have worked out. And I really enjoy the world of software development. I feel like there's so much to learn, and there's just, I think it's so interesting that there was Joe Armstrong's talk, I think. The one that said that there's so many states in the computer that literally, a general, like if you boot a computer, you actually cannot hold all of the things that are going on and understand that completely in your head at once because there's so much technology going on. Or if you read the book, The Information: A History, a Theory, a Flood that the first half of it gets you up to like 1940. The other half of the book, which is, like as long as the Bible, is from about 1940 to present. (laughs) So there's a lot that's happened, and I think it's so cool.

    KENT: Cool. So when I asked about how long everybody's been doing JavaScript, you put up six fingers?

    PAM: Yeah, six, because it's like, I feel like that's about how long I've been working professionally, and I really like, you know.. it's funny, one of the things that kind of happens in the JavaScript community is a little bit of jQuery hater, I feel happens. And it's a bit unwarranted because that's how a lot of people start. I started with figuring out jQuery plug-ins, and making probably the worst carousel anyone has ever made, like the buttons were actually at the bottom because I didn't know enough CSS to get them on the sides. So you start somewhere. So six years, but I've come a long way. (laughs)

    KENT: Haven't we all? Very good. (laughs) Cool, so what's something that you do outside of software development that you really enjoy?

    PAM: I've lately been getting into gymnastics and aerial yoga, by way of yoga, regular floor yoga. So I think that's a lot of fun. I think it's cool to hear about Iheanyi and dancing, and Lin has the heart of a dancer, apparently. So I think that's a lot of fun.

    KENT: Cool. I am a gymnastics person, myself. I'm tempted to just do a backflip right here.

    PAM: Oh, my gosh, that's like on my goals. I didn't get to do gymnastics really as a kid, and it's actually a lot easier to do gymnastics when you're only 40 pounds, turns out, so learning gymnastics as an adult is a whole different game. And I think one of the reasons I do it, too, is to do something that I'm not good at. (laughs) And because I think, especially overachievers have this tendency to end up doing things because we happen to be good at it and not because we like it. So, I like gymnastics, but I am really bad at it. (laughs) But that's totally okay.

    KENT: I relate to that. That's why I play foosball. (laughs)

    PAM: All right, we'll play sometime. I'm actually really good at foosball, Kent.

    KENT: Oh, sweet! I love playing foosball, I love it.

    PAM: Me, too.

    KENT: I get hammered.

    PAM: Yeah, I picked that up in grad school.

    BRIAN: (laughs) Sorry, I was thinking that gymnastics, backflips, foosball, it all somehow connects.

    KENT: It goes together, (chuckles). So, let's see. What's something that you've worked on in the JavaScript ecosystem community that you're really, particularly proud of?

    PAM: So, I did, I wrote a book on JavaScript frameworks, which, you know, the joke is that it was out of date as soon as it came out. But, you know, it was fun to write it. It came out in 2014. I'm proud of it, and it's easy sometimes to overlook accomplishments by over-explaining them, but I'm happy that I did it.

    KENT: That's awesome, curious what frameworks you covered?

    PAM: It was Angular, Ember and Backbone. And then, like React got, like a page. (laughs) And Polymer got, like a page.

    KENT: One day, I will write a book, but I'm really impressed that you wrote a book. That's awesome. Anything else that you'd like to mention or bring up about yourself? Or any other panelists, you have any questions for Pam? (silence) All right. Oh, sorry, Kyle, did you have something?

    KYLE: I was just going to ask, since I happen to know Pam, I've heard her talk about this before, but I'm just curious if you have any particular tips. You said you've come a long way in the six years since you started developing. What are your top two tips for how somebody should kind of follow a similar path and learn the software development? What was effective for you?

    PAM: I guess there is a two part to this. I'm glad you asked that, because it reminded me of something I thought about while you all were all talking in that, I am a social beast, so I definitely have like a bias towards this, but I made a lot of friends, and that helped a lot. I thought of it as my g-chat roster. And trading g-chat questions with people of like I ask you a question every so often, you ask me a question every so often. We all learn stuff, it's all cool. Another way to phrase that, that I learned last year that I really liked was: never stay stuck for more than 15 minutes. Your progress will be impressive if you just refuse to stay stuck for more than 15 minutes. So once you've thought about a thing for 15, 20 minutes, you say, "Okay, now it's time to ask someone else for help," and just getting out of your own head helps a lot. And then the secondary part of that was how do you make all those friends? And I think it's so fun to, I'm very happy with the panel show because one of the tips for networking, I think, is like pretend that everyone has something absolutely fascinating about themselves, like they used to be in a band that covered Kelly Clarkson songs.

    (laughter)

    Like, if you just pretend that everyone has something absolutely fascinating, you're like a detective that you have to find out what it is, then you will have no problems networking, and you'll meet tons of fascinating people. So, the kind of two parter.

    LIN: It's a shame that we are all muted, and that the audience can't hear us all cracking up at that. (laughs)

    BRIAN: Big, silent response, yes.

    PAM: Yeah. (Laughs)

    KENT: We could all just un-mute really quick, and I'll do that over again. (laughs) Awesome, thank you, Pam. And thanks for that question, Kyle. That brought out some good stuff. Tyler, you are second to last, and then I'll go.

    TYLER: Cool. I'm Tyler McGinnis. I am from Utah, I grew up in southern Utah in St. George. Now I live in a place called Draper, which is relatively close to Salt Lake. I got into programming about three years ago, so it hasn't been that long. Honestly, I initially hated it. A lot of people say, "Oh, when I first started, I loved it and it just absorbed my life." I loved the idea of it, and I loved that you could build things and you didn't really have to have a lot of resources or a lot of overhead, so it was basically my faith that eventually, when I got good at this, I'd really like it. And luckily, luckily that worked out. I just kept chugging along and eventually, I became decent at it. And, yeah, so now I'm here.

    KENT: Cool. And you're also kind of an instructor as well, right?

    TYLER: Yeah, so I was the lead instructor at a place called Dev Mountain, which is kind of MakerSquare's version here in Utah. I did that, led curriculum, taught classes there. And then, currently I work at a place called Sparrow. We just went through TechStars in London, and we are building a React native app to help connect individuals affected by cancer. So that's been a blast. React native's great. Obviously, the mission there is a pretty good one, so we're excited about it.

    KENT: Yeah, that's totally solid. Cool, so what's something you do that's not related to software development at all?

    TYLER: I bought a season pass to Snow Bird, which is a ski resort here. I've only gone up once, though, because the whole software thing kind of absorbs my life, but hopefully, hopefully I can get up more this season. So, I would say snowboarding, probably.

    KENT: We should hit the slopes together, man.

    TYLER: We should. Matt can come, too.

    KENT: Oh, yeah, Utah, wooh! (laughs) Coo. So what's something that you're particularly proud of in your software development or like community building stuff?

    TYLER: I don't think there's anything. Like, I didn't build Redux or anything huge like that, but I think for me, it's just like a lot of smaller things, like I did React week last year, I think, and that was really good, just a workshop with React. I do a few newsletters, React newsletter, front end newsletter, and those have been fun. So kind of just smaller, like ReactJS Utah, me and Matt do that. So I think just smaller, community-driven things is fun.

    KENT: Smaller, community, it's awesome. What you've done is really awesome, so thanks for doing that stuff.

    TYLER: No worries.

    KENT: Anything else you'd like to bring up about yourself, or any questions that the panelists have for Tyler?

    TYLER: I think I'm good.

    KENT: All right, sweet. I've thought about how I want to do myself, and Matt is suggesting that I refer to myself in the third person. (laughs) That could probably be entertaining, but I think instead, I'm going to ask Lin to ask me the questions.

    LIN: Sure, okay. So Kent, where are you from, and where do you work?

    KENT: I live in the Salt Lake City area in Utah, just like a 45 minutes' drive South of Salt Lake. And I work for PayPal. I work remotely from home in here, and it's awesome. I love it. I just started a couple weeks ago. Working from home is the best!

    LIN: It is.

    KENT: So that's that. (laughs)

    LIN: And how did you get into programming? I know that you're young, and fresh to it. (laughs)

    KENT: Yeah, I am pretty fresh. I graduated from college in 2014, I think, so not quite two years ago,. And at the time, I was an intern at a company called Domo here is Utah. They do business analytics, it's like a business management platform. It's really, really cool. I started there, they hired me to do REST N-point testing and I started doing like Cucumber with Ruby, and I did a little bit of Java to automate stuff. And I was just fumbling around, trying to figure out how to program. Actually, I should say, like before that, when I first got started at BYU at college, I started as an electrical engineering major and I took two programming classes, and I totally hated them. I spent eight hours per class, per week working on homework and just, like coding, and was like, "There's no way I could spend this much time every single day coding stuff." I did not enjoy it at all. I did really well. I'm pretty sure I scored an A in both of the classes. I tutored people in the classes, so I enjoyed that part of it, I guess, but yeah. I did not really enjoy it. Tyler, did you have a question?

    TYLER: I did, was one of those classes CS142?

    KENT: Yes, it was! (laughs)

    TYLER: Oh, my gosh, that's the worst class in the entire world, and that's the class I hated. It's like a weeder class, so you have all these bright-eyed freshmen who are super stoked to be building things, and then you throw them into the depths of CSS or C++, and they try to make it out.

    KENT: Luckily, it was Java, for me it was Java, it was a little bit easier. But, yeah, the really hard one for me was 124, where we had to program a calculator in Assembly and a couple, like something in machine code. And then we finally got to see it, and it was like, "Oh, this is glorious!" (laughs)

    TYLER: I dropped out before I got to that class, luckily.

    KENT: I was going to do double E, and then I went on a mission for two years for my church. And when I got back, I fumbled around a bunch of different majors and finally landed in Information Systems, and that's where I kind of started getting back into computer related stuff. But when I was working at Domo, I was doing kind of Java stuff, but I saw lots of my friends doing JavaScript, and I was like, "I want to..." The last time I tried JavaScript, it was like weird, and you had this dollar thing, I don't know what that even means. (laughs) It was like crazy. Once I figured out that was just a library, jQuery, and you could have, like dollar for a variable, then it kind of made more sense for me. But that was just weird as a newcomer.

    So eventually, I kind of migrated over to JavaScript and then the floodgates opened, and I totally fell in love with programming. So I converted from intern to full time at Domo. I worked there for a while, then Matt recruited me to work at AtTask, and I ripped the referral bonus out of his hands by leaving (laughs) after just like two months to go fly kind of solo as a UI developer at  Alianza. And then I just changed jobs, working at PayPal, now. So that's how I got in. I've just been doing it for about two years.

    LIN: I'm going to use Getify's question on you (the one that he asked Pam) because you've obviously learned a whole lot in that short period of time. What are your strategies for keeping your learning going so quickly?

    KENT: That's a good question. I actually, maybe I should link to this in the show notes, but I have a, somebody asked me a similar question on my ask me anything, my AMA. Basically, what I do to kind of stay abreast of things and learn new stuff is, I think, everybody's a different kind of learner, and I learn really well from watching somebody else do it, and then doing it myself. That's why I really like Egghead, I really like Frontend Masters, because I can see somebody else kind of explain it in video form and then I can go off and build it and fall over. I've built countless apps -- Angular apps, Vanilla JS apps, jQuery apps -- just little things, and a bunch of libraries. I do a lot with open source. And it's making mistakes is how I learn. I think that is probably fairly generally applicable. You don't really learn something until you actually do it. And so we may all initially learn things differently, you may be a visual learner, you may be somebody who learns better from reading blog posts and tutorials and books, but in the end, you don't actually learn it until you've actually done it. So I just do a lot of stuff. I spend a lot of time coding, and then I surround myself with people who are a lot smarter than me. And that's why you're all on this panel. (laughs)

    LIN: Does anyone else have any questions for Kent?

    KYLE: What made you start this podcast, Kent?

    KENT: That's a good question. About a year and a half ago, I thought about this idea of using Hang-outs on air to just have conversations about programming. And I've actually done that a couple of times. Dan was, and I chatted about Redux and module replacement and stuff like a year ago on Hang-outs on air. And I've done that like 11 times, just kind of like unofficially.  But Todd Modo... Motto, I keep calling him Modo, its Motto. Todd tweeted about a year and a half ago that he was thinking about doing something similar, and so I said, "Hey, let's do this." Nothing really happened. And then in November of 2014, I said, "Hey, man, let's like make this a thing." So we created Angular Air, and that's kind of where it all started. We went, like every other week we had an episode, we had the Angular team start us, and we went for a year. And then I was making this job change, and I was kind of leaning more toward React and I wanted to do something more general but I didn't want Angular Air to die off because it was doing great things for the community. And for those who didn't catch on, Angular Air is basically JavaScript Air, except for Angular. (laughs)

    KYLE: Because we all know Angular is not actually JavaScript. (laughs)

    KENT: (laughs) Yeah. So I handed off Angular Air to a couple of the panelists and I started JavaScript Air. And I reached out to each one of you panelists, individually. I hand-picked you all, and I'm so glad that you accepted because I feel like this show is made because of you awesome panelists. So thank you for coming on. But that's kind of where it came from is, I was going to stop doing Angular, so I feel like I would have been out of context, but I'm still doing JavaScript. So because I'm still doing JavaScript, I started JavaScript Air. I actually was about to buy the domain reactair.com, and right at that point I was like, "In five years, will I be using React? I don't know, but I'll probably be doing JavaScript." So I switched to javascriptair.com, and that's how this ended up being JavaScript, and not React. (laughs) So that's kind of the origin story for JavaScript Air.

    Oh, and one other thing: one of the things that I like to do that isn't related to software development is I am a skater, like an in-line rollerblader. I did that a lot as a kid, and then just last year, I bought some new rollerblades. I've been hitting the skate parks and I totally love it. So if you're in Utah, and you like to skate, join me, I love it. (laughs)

    LIN: That's really cool. So I guess, should we move on to the tips and picks?

    KENT: Yeah, let's do it. I think we've got like seven minutes left. We're probably not going to finish on time, but that's okay if the show ends up going a little long. If you do need to drop out, let me know and you can go first on the tips and picks. Let's go ahead and we'll have Brian go first, actually.

    BRIAN: I put some links up for, let's see, Hardy Jones wrote a really cool thing on lenses in the virtual DOM, and I've been working on Ramda lens, so, I just woke up one morning, I was like, "This is  a great post, what a coincidence!" I also put a link for the Lambda conf videos. If you want to learn a lot about functional programming really quick, put those on while you're making dinner or something. And two kind of artsy-fartsy things: Jeff Bridges, The Sleeping Tapes, are so fun to listen to. If you get a chance, they did a whole square space app or like website for it, it's really amazing. And then there's World of Tomorrow on Netflix. I just saw it and was blown away, so thought I'd throw that out there.

    KENT: Cool, thanks. Dan?

    DAN: Yep, let me look it up in the talk. My picks for today, there are a few. The first pick is called DevTool, it's a new repo, a new tool for debugging node code in Chrome Devtools. It's kind of like node inspector, but it's not as good for large applications because it doesn't replicate node environments completely, but it's pretty good. And there are some impressive demos, so check it out. Another my pick is an article that was posted maybe a couple of weeks ago called React.js pure render performance anti-pattern, which details the kind of issues people have with React, like performance issues, and how to solve them. It's really good if you have some kind of performance problems. Check it out. It shows some common anti-patterns and how to solve them. Another pick is a Twitter account that is called Fullstack React, which just reposts some projects, some libraries, but it has nice screen shots on the tweets. And the selection is really good, so if you need a React ecosystem you want to check out some libraries, this is a good account to follow. Then my next pick is the Code Cartoons, the today's issue, which is about GraphQL, which is completely awesome. I can't wait for the next parts. Great job, Lin, I love it.

    LIN: Thanks so much.

    DAN: Yeah. And the last pick is just something funny I saw the other day. Basically, I came to San Francisco the last week and the week before that as part of my boot camp process, and I had the opportunity to finally meet some people there from the JavaScript community. And we were hanging out with Contra, the golden guy, but he hates when people call him that, but anyway, we were hanging out with him, and his friend took a picture and posted in on Twitter with a caption that "Redux 2 is coming. Reducing node streams." And it was retweeted many times, and it got on Reddit, and there's a funny thread where people took it seriously. (laughs) That's it for today.

    KENT: Great. Kyle?

    KYLE: All right. So the first one, I'll give a quick tip, and this actually comes from literally just last night. My tip is, find a couch, sit down, and pair program with one of your friends. I actually did that last night. I invited my really super good friend and my barbecue buddy, Brandon Hays, who is @tehviking on Twitter, invited him over, and he just showed me a bunch of, we pair programmed on him doing a bunch of Ember stuff. I feel like I actually learned some Ember, so that was super awesome. Very chill, it doesn't have to be like super formal, but it was really, really good.

    Some quick picks: today, actually, and I don't have the link, yet, but it will be in the show notes as soon as I get the link, today I'm going to be doing an on-air with Chris Coyier of CSS Tricks. We're going to be just trying to write some JavaScript together. It's going to be fun. We're going to try to take on a task, and look at a couple different ways of doing it. I don't know how that's going to work out, because we haven't practiced any of the code yet, but we're going to have fun with that, so check that out later today.

    Three actual picks: RTC Everywhere just came out. I am super excited about this. It is a port of the Web-RTC peer-to-peer stuff for like all platforms, and it's the exact same usage pattern everywhere. If you don't know what Web-RTC and peer-to-peer is, it's going to change the web, it is changing the web, so I'm super excited about that library. So check out RTC Everywhere. Another one, yesterday actually, Chakra, the engine from Microsoft, from their new Edge browser, they submitted a pull request to add ChakraCore into the main line of node so that you'd have the option for running Chakra instead of V8 in node. This has massive, huge wins for the community, for anti-fragility, for performance, etc., etc. It's probably one of the biggest things that's happened since node was invented. That's a huge deal, and I can't wait to see that go forward. Lastly, just a few minutes before the show came on, I saw going around we finally know what Brendan Eich is doing with his Brave software: he is launching a new browser, called the Brave Browser. You should totally check out the write up on brave.com about that. It's all about replacing ads with clean ads and ads that you can pay to have removed and still support the sites and stuff like that. So it's like your anti-pro-ad future in the browser. So, interesting stuff there.

    KENT: Wow. You probably heard it here first, folks. (laughs) Yeah, that's cool. The Chakra thing, that's a pretty big claim, the biggest thing to happen since node itself, but I'm excited to chat with them about that tomorrow. Cool, cool. Lin, you're next.

    LIN: Okay, I figured since this show was all about how long we've all been working in software, I do some stuff related to making sure that you're a healthy software developer. I have been a professional programmer for close to ten years, now. And so I've run into RSI problems over the course of my career occasionally, and I ran into them most lately in the past six months and so I had to really adjust some things to make sure that they didn't come back. I have a whole lot of tips for that, but just one is to learn keyboard commands for your favorite web apps like Gmail, and flashcards can be really useful for this. Brainscape already has flashcards for Gmail, and I think a couple of other web apps. But for me, it was the track pad that was really causing a lot of my issues. And you might not realize it, but if you're having wrist issues, try using the keyboard more, and not using the track pad as much. So my pick is, I'm starting to learn how to do Dvorak touch typing, so that you don't have to move around so much. It has made me a little bit... you know, I'm still training, so I still need to get up my speed, but I think it will actually make me faster in the long run.

    KENT: Great. Awesome. Matt, you're next.

    MATT: Okay, my pick for this week, I just started this so I haven't finished it, but I've been reading Bonnie Eisenman's book Learning React Native, published by O'Reilly. It's been really good. If you're interested in learning React Native, and you already know a little bit of React, I highly recommend that. As for a tip, if you're involved in open source software, I recommend using the first time, first-timers only label on your issues. I just thought of doing this a couple weeks ago, and it's actually been a good experience helping new people get into open source that might not have otherwise. So just create a label, there'll be a link in the show notes. You can just search for that label, and if you're interested in getting into open source, you can kind of look through those issues and find something that looks interesting to you. And as maintainers, we really appreciate any help we can get fixing issues, and for you, it's a great way to kind of break in and get your feet wet with something.

    KENT: Awesome, thank you. That is so awesome for the community and so valuable. I've been meaning to write a follow-up. Your first-timer only issues are fantastic, but I've seen a lot of first-timer only issues that are not really good for first-timers. And so if you are a project maintainer, please do first-timer only issues. It's awesome and it's really rewarding, but know that it takes more work to create a first-timer only issue than it would to probably just do the work yourself. It's not about getting the stuff done, it's about helping people get started.

    MATT: It's true. Like some of these issues, I could probably fix in five minutes, but I spend 30 minutes writing a failing test case, and sending it out there, just to give someone the opportunity. So it is more effort, but like what Kent says, like, make sure it's like a good issue, like not something you have to really dig deep and understand the breadth of the code, like that's more frustrating. That's not helping anybody out.

    KENT: Awesome. Pam, you're next.

    PAM: So Lin, we could totally talk about Dvorak and other things like that. Before I do my pick, I just wanted to drop a link, too. I also have dealt with RSI issues. It also is generally if you have smaller bones, if you are a smaller person, you are probably more likely to run into this because you have smaller bones for your nerves to go through. I have a post from a few years ago covering a bunch of the different things I tried and how much mileage I got out of them in terms of, especially finding, working on things... I'm about things that help you in the long run and not get hurt again. So a lot about that.

    LIN: Awesome, thank you.

    PAM: For the pick, it is a purely fun thing. This is a nice little side project that someone made of who's at the Recurse Center, which is a programming community in New York that I did a retreat at last year. And it's a pixel art to CSS app. There's a little grid where you can create your pixel art, and then export it to the CSS, which is pretty neat. Side projects are really cool, and it's always nice to see when people show off neat things.

    KENT: Great. True words. Tyler, you're next.

    TYLER: All right, I just have three picks. The first one is headspace.com. I've always really liked the idea of meditation, but every time I tried to do it, it was always difficult in the sense where you just like keep thinking of random things you have to do, and whatnot. So Headspace has a very good, approachable, I guess approach to meditation that's really good. The next one, Front End Newsletter. I started this two weeks ago, basically just a newsletter of everything related to Front End, whether it's React or Angular or whatnot. So check out that. And then React.run, it's basically, so www.react.run, it's basically like a JSFiddle specifically for React, so I was pretty excited about that, and it works really well, so check that out as well.

    KENT: Great, all right, I am last. My tip is take chances, make mistakes and get messy. I hope you get the reference, if you don't, hold on one second. Because my pick is the Magic School Bus. I showed my kids the Magic School Bus episode about the water cycle, and they enjoyed it. So, Magic School Bus is great. And then Babel Service is this thing created by Gleb Bahmutov that basically, it's just an experiment. I don't think that he's recommending you do this in production, I haven't looked into it, so maybe he is, I don't know. Basically what it does is, it is a service worker script that will transpile your code in the browser, but what's neat about it is it checks your, the browser that's being used and only transpiles the stuff that needs to be transpiled for that browser. So like, Chrome has a bunch of the ES6 features implemented already, and so this will only transpile the features that it's missing. So it's an interesting experiment, and I recommend you go check it out. That's my tips and picks.

    KYLE: Just a side note: that one's using my feature tests library and service, so that also gets a big thumbs up from me.

    KENT: Yeah, yeah, very cool. Pam, you're right, I should give credit. That quote was Ms. Frizzle, and she is the Magic School Bus teacher. What I mean by that, though, is like I said, the way that I've learned is from building stuff, and I really am convinced that you don't actually learn something until you do it yourself and build it yourself. So, yeah, take chances, make mistakes and get messy.

    All right, so let's wrap this thing up. Next week, again, we're talking with a couple people from ChakraCore team, so really, really excited about that. Really exciting things coming from Microsoft. If you have any suggestions for future shows, go to suggest.javascriptair.com or, if you don't like typing, suggest.jsair.io will also get you there. That will take you to a form where you can fill out and give us a suggestion for a show or a guest. If you have any feedback on a specific show or any, like the in general for the show, go to feedback.javascript.air.com. As always, follow us on Google+ and Twitter and Facebook to keep up with the latest. And also, this just in: ForwardJS, actually, I think Brian, Getify, and Tyler and me are all going to be there. Anybody else going to be there at Forward JS? We'll all be there.

    BRIAN: If you wanted to come, I can get you there. Just let me know.

    KENT: (laughs) Plus one! So, they have graciously given us a discount code: JSAIR for $40 off your ticket so if you want to go, use the discount code, JSAIR. All right, everybody. Thank you for coming. This has been a very awesome show. Tons and tons of good resources, and we'll look forward to the future together. (laughs) See ya!

    LIN: See y'all!

    PAM: See ya!
  `,
}
