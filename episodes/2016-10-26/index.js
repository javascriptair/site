export default {
  title: `React Native`,
  guests: [
    {
      name: 'Bonnie Eisenman',
      twitter: 'brindelle',
      tips: [
        `[Shubheksa's JavaScript Package Managers 101 post](https://medium.com/@shubheksha/javascript-package-managers-101-9afd926add0a#.lny9qf3cb)`,
        `[Ariel Elkin's post, Why I'm not a React Native developer](https://arielelkin.github.io/articles/why-im-not-a-react-native-developer)`,
      ],
      picks: [
        `[Botwiki](https://botwiki.org/), an open catalog / community "of friendly, useful, artistic online bots, and tools and tutorials that can help you make them."`,
      ],
    },
    {
      name: 'Tyler McGinnis',
      twitter: 'tylermcginnis33',
      picks: [
        `[React Training](http://reacttraining.com)`,
      ],
    },
    {
      name: 'Ken Wheeler',
      twitter: 'ken_wheeler',
      links: [
        `[Exponent](https://getexponent.com/)`,
        `[Victory](https://victory.formidable.com)`,
        `[Victory UI Explorer](https://itunes.apple.com/us/app/victory-ui-explorer/id1163915348?mt=8)`,
      ],
      tips: [
        '`./node_modules/react-native/packager/packager.sh start --resetCache`',
        '`watchman watch-del-all`',
        `[Try Objective C](http://tryobjectivec.codeschool.com/)`,
        `[React Native Animation Book](http://browniefed.com/react-native-animation-book/)`,
        `Upgrade often`,
      ],
      picks: [
        `[React Native Responsive Styles](https://github.com/FormidableLabs/react-native-responsive-styles)`,
        `[React Native Maps](https://github.com/airbnb/react-native-maps)`,
        `[Mobx](https://github.com/mobxjs/mobx)`,
        `[Victory](https://github.com/FormidableLabs/victory)`,
        `[Flow](https://flowtype.org/)`,
        `[Hot Tub Time Machine](http://www.imdb.com/title/tt1231587/)`,
        `[McDonalds All Day Breakfast](http://www.usatoday.com/story/money/2016/07/06/mcdonalds-expands-all-day-breakfast-menu/86747130/)`,
      ],
    },
  ],
  description: `
    JavaScript is taking the software world by storm, and we're going to talk about yet another enabling technology: [React Native](https://facebook.github.io/react-native/).
  `,
  youTubeId: '5vqKnvutCug',
  podbeanId: 'cy5ga-63fc80',
  shortUrl: 'http://jsair.io/react-native',
  host: {},
  transcript: `
    TYLER: Hello, everyone! This is Episode 46 of the JavaScript Air podcast. I am your host, Tyler S. McGinnis, here replacing the Kent C. Dodds who's currently going to a conference today.

    Before we get started, let's go ahead and give a shout-out to our sponsors. We have Egghead.io, Egghead is the show's premiere sponsor and has a huge library of bite-sized web development training videos. Check them out for content on JavaScript, Angular, React, Node, and more. Egghead.io is also the host of two free Redux courses from Dan Abramov. Find them at Egghead.io/Redux.

    Next, we have Frontend Masters. Frontend Masters is a recorded, expert-led workshop with courses on advanced JavaScript, Asynchronous and Functional JavaScript, as well as lots of other great courses on frontend topics.

    And then we have TrackJS. TrackJS reports bugs in your JavaScript before customers notice them and with their teleme-- (laughs) telemetry timeline, telemetry? I don't know how to pronounce that but it sounds great. You'll have the context to actually fix them. Check them out and start tracking JavaScript errors today at TrackJS.com.

    And also don't forget if you're watching, you can go ahead and tweet with the #jsAirQuestion hashtag (static) wait till the end of the episode to answer those questions but I think I'll just answer them throughout the episode. So if you have any questions for us, go ahead and use that hashtag.

    All right, so I wanna go ahead and introduce our guests today. We have two of them, two of them are, I would consider both of you pretty good friends of mine. We have Ken Wheeler and then we also have Bonnie. Go ahead and pronounce your last name Bonnie.

    BONNIE: Eisenman.

    TYLER: Perfect, there it is. Go ahead and introduce yourselves. Let's start with you, Ken.

    KEN: All right, yeah, I'm Ken Wheeler. I'm the director of Open Source at Formidable. And I'm very silly on Twitter.

    TYLER: That's true. That's a 100% the truth. Bonnie, what about you?

    BONNIE: Hi, I'm Bonnie. I am the author of Learning React Native, published by O'Reilly earlier this year. And I'm a software engineer at Twitter. Outside of programmery things, I have interests like I don't know, knitting, Esperanto, I'm a dork, et cetera et cetera..

    TYLER: So what I want to do before we actually jump in to React Native, I think that all of us kind of have super interesting stories about how we got here. And so I kind of wanna highlight those. Like Ken, why don't you go and start back when you were like either when you first got into programming or when you were like 16, whatever comes latest. And then just take us up to how you got to this point right now.

    BONNIE: What is your origin story?

    TYLER: What is you origin, yes.

    KEN: So from here to here?

    TYLER: All of it, yep.

    KEN: All right.

    TYLER: You got five minutes. Let's hear it.

    KEN: (laughs) Yeah, so when I was a little kid, my dad bought a computer when we were like really, really young. He showed me how to work DOS and everything. So I was dir/p-ing and all that. And eventual start-

    TYLER: Like a real hacker.

    KEN: That's right, that's right. You know, just got really custom with it and pretty good with it. So I coded a little bit and then when it became time to go to the computer lab in school, we had like a computer lab and it was mostly like typing classes, I was already a proficient typer, right? So when we were doing Mavis Beacon and all that, (laughs) I just flew through it so they were like, listen, just do what you want. So I started writing Qbasic then and that was a lot of fun.

    TYLER: What year was this?

    KEN: I don't know, probably like mid-90s, in third grade or so. (laughter) Something like that. Yeah, so I was writing Qbasic. And then I liked to program so the next couple years I was writing visual basic programs, stuff in C, everything like that. And then in high school, I stopped programming for a very long time because I wanted to be a rapper. (laughs) So let me back up for a second. Throughout that whole time I was also doing HTML like GeoCities type stuff, like Tripod websites.

    BONNIE: God, I miss those.

    TYLER: Yeah, right? In high school, I wanted to be a rapper. I ended up being more of a rap producer but I also rapped as well. I actually got signed and was indeed a rapper. And that was a pretty good time. And then Napster came out and then I was a record producer making money. It wasn't as viable a career if you weren't super popular. Like previously, it was a bit more viable of a career but when the bottom fell out on that, I had a bunch of really weird jobs. I was a stockbroker, a construction worker. I was a professional matchmaker. I was more in sales than anything. But you know, hook up--

    TYLER: This story is worth the whole show right here. (Ken laughs) I think after this we just end it at--

    KEN: I was an amateur butcher. That was a good time. And then I don't know, I guess my mom was yelling at me. I was living in her house at the time. I was in my super early 20s and she's like, "Get a job!" So I'm like, "Okay, relax." So back then, we used to have the job section in the newspaper and when you want a job you go look in the newspaper job section of your local newspaper. So I'm going through I'm like, ahh. Then I was like, "Web developer." I'm like, "Pft, I could do that!" So I hadn't done it in years and I called them up and I completely lied and said I knew how to do everything. So they brought me in and I was like, "Yeah, yeah, yeah." I mean, I talked a good game. So they (laughs) hired me. And then spent the next month and a half kind of just learning what I needed to learn. And I did.

    And I worked there for I don't know, like three or four years probably, ascending the ranks and what not. And then I moved to another company. So the original company I guess was like a smaller kind of like local website company. And then I moved to the next place which I also stayed at for about five years where that was ecommerce development so we did work like Oracle and ATG and everything like that. That was good time. It was a real good time. And then about two years ago, I came to Formidable and we did a bunch of fun React stuff, bunch of fun React Native stuff. And then very recently, they made me the director of Open Source. So, here we are today.

    TYLER: There you are, so basically your job, if I understand it correctly, is hacking on Open Source stuff. Since you-- basically took that job you've done, React Music was part of that right? Or whatever it was called, I forget the--

    KEN: That wasn't like a on the clock thing. That was just like a Saturday.

    TYLER: That's incredible. React, a gaming one. Was that on the clock or was that on a Saturday as well?

    KEN: Nope, that was a Saturday.

    TYLER: Look at you just grinding on the weekends.

    KEN: It's what I do.

    TYLER: There you go, cool. So basically rapper turned developer, and a few things in between.

    KEN: Sure.

    TYLER: Very cool. Bonnie, let's hear your story.

    BONNIE: Wow, I don't know if I can follow up the list that includes rapper and butcher and all that stuff. (Ken laughs)

    TYLER: I don't think many of us can, but.

    BONNIE: Yeah, I think pretty similarly right, like I had been using computers from a very young age. My first actual memory of learning to type was when I was three, I think. I actually, the first kind of pseudo-coding thing that I did was HTML and CSS on a website called Neopets. I don't know if either of you are familiar with it. Nickelodeon owns it now. It's like this little kids website that's primarily populated by, or at the time it was primarily populated by nine year olds. It was like you have a digital pet and you can customize their page or whatever. And I ended up learning some HTML and CSS to be able to do this. You could win in-game things on the app, on the website if you did this. But mostly it's was just a flash games website with some forums and stuff. So I was picking up some HTML and CSS stuff and my father had an ecommerce business and had been complaining because he had some text formatting strugs. Like he needed to bold some things or change the color of something. And to do this, he had to ask his web developer to do so. Who you know, bills him at his normal programming rate because all of this was included in his job description. Then I was like, I don't know, eight years old or something, I said to my dad, "Wait, I know how to do that." (laughs) Which I think was the moment when I realized, wait, this is actually a thing, that's really weird. Just very weird.

    But anyways, programming was always sort of a thing that I would pick up and put down and didn't think of as a separate kind of discipline. Right? It was like, you get your first graphing calculator in high school and you can program it. That's nice, whatever. I never really thought about it as some kind of special magic. It was magic in as much as everything was. And then I ended up going to college and being like, "Oh, what do I want to major in? Well, Computer Science seems nice. I don't know, I'll try it, whatever." And it was really sort of lucky to end up in a CS program that was really excellent and really interesting. And I got to do a lot of fun things there. Like, I got to try out computer music. I took a human-computer interaction class on how to build physical-- so things like I don't know, electronic musical instruments that reacted to light and sound and stuff like that. And yeah, I ended up just really enjoying it. I did a couple software internships at Fog Creek and Google. Decided that you know, this was I thing I really liked doing and I've been a programmer ever since.

    TYLER: Where are you working right now?

    BONNIE: I'm at Twitter right now.

    TYLER: Oh, very nice.

    BONNIE: I've been here for about a year. Ironically, I am doing nothing to do with JavaScript or React or React Native here.

    TYLER: Interesting. So that was another question I have for you 'cause it doesn't sound like you're, I think I saw on Twitter once, you got like at-mentioned, you're like, "Yeah, I'm not super involved with React Native right now." But with that said, you literally wrote the book on React Native. How did that happen or kind of what got you interested in React Native?

    BONNIE: Sure so, I had done some native mobile development previously on iOS and Android both. And when React Native was announced, well, actually I'm gonna take a step back. Out of school, I joined Code Academy which is a coding education startup. And I was a full staff developer there. And at the time, most of our challenges were on the frontend. So I was doing a lot of frontend work. Maybe 70% of my day job was in JavaScript. And when I joined the team React had just come out and we were all just starting to write a huge new section of the app. So we decided we would try this new shiny thing called, this shiny new framework that no one knew much about that we would give it a go.

    And so it turns out, at the time if you had like six months of experience working with React that was actually a fair amount. That was actually considerably more than other people. So even though I was pretty new to the whole web development thing, I ended up at the right place at the right time. So I was speaking at React Conf when they announced React Native. And I remember sitting in the audience going, "Oh, my goodness this is super great." You know, I was sort of in the target audience, right? I was someone who knew how to do web development, who was quite comfortable with JavaScript and who had done iOS and Android before and knew that I could write an app in them. But I was on a team that had seven developers in the entire company, right? We didn't have the manpower or sort of the business justification to build out an application on iOS and Android independently. We didn't have the resources to hire a developer for each of those platforms. So I was like, "Oh my god, this is great. This is hugely gonna change a bunch of things if it works." So that was why I was interested in it.

    As to how I wrote the book, that was the strangest and most intense pitch I've ever had to do probably. (laughter)

    TYLER: It obviously worked out right?

    BONNIE: Yeah, it worked out really well. So I had had some previous writing experience, actually. For a while, I guess I had been a "games journalist" for this iPhone app review site where I basically would just play iPhone games and then blog about them. Which was a great job and I enjoyed it a lot. I was already accustomed to the whole you know, I'm gonna take a thing and I'm gonna write thing about it really quickly and as efficiently as possible and try to be clear. And I really cared a lot about things like teaching, I care a lot about programming instruction. I was working at a coding education startup and so a publisher actually approached me after reading one of my React articles which I wrote on InfoQ and asked me if I'd be interested in writing a book about React. And I sort of counter offered. I was like, "What about React Native? 'Cause this is this shiny new thing and I think it's going to be very important and I think that it makes a lot of sense to want to hit the ground running with this and get a book out the gate as early as possible."

    TYLER: That's super interesting and also great that you got paid to review iPhone games. Cool, so let's jump into a little bit, dive in a little bit deeper into React Native. Ken, can you talk about kind of your experiences with it? Kind of how you got started with it as well.

    KEN: Sure, so I'd been doing a lot of React at the time for a little while there. And then I wasn't on the React Native beta list. You know, some people got some early access?

    TYLER: I wasn't on any it either.

    KEN: No, I wasn't on that. But I knew about it, right? I knew that it was coming and I was very, very excited. So when it finally was released-- I made the first React Native fart app within 27 minutes of it being released.

    BONNIE: (laughs) Oh, that was you.

    KEN: Yeah, I was pretty excited about that. But from there, I really just started taking the sort of things I was doing in React and really focused on you know, I guess exploiting the new device capabilities that were available to me. So I was playing around with it and seeing how far I could push it. Brushing up on my Objective-C to do the bridging and what not. And then also at the time, I had been building React at Walmart. So we were re-platforming walmart.com to React, for React architecture. So they were like, "Hey, how would you like to take a crack at some Walmart React Native stuff?" I was like, "Absolutely!" So I did that for a little while and that was interesting because it wasn't just like, "Hey, what silly thing can I build today?" It's like time to build something real.

    TYLER: So a question I get all the time is from React developers. They've done strictly web, they've never touched anything to do with like native Android iOS stuff. How easy was it for both of you, and I know both of kind of had some native experience. How was that transition going from truly on the web React to React Native?

    BONNIE: So, I'll answer first if that's cool?

    KEN: Please.

    BONNIE: So I hear this question from a lot of people and a lot of it depends on how comfortable you are with languages outside of JavaScript. I think that it's gonna be really different if you've never written anything other than JavaScript versus if you're more of a polyglot programmer who's comfortable reading from other languages even when you don't understand. And it depends a lot what you're doing with React Native. So for me, especially working with it super early on there was a ton of stuff that just wasn't supported out of the box at the framework, right? And there was a ton of stuff where if you wanted to do things, like, I don't know, use SQL then you were going to have to use some kind of third party library or you were going to have to write the bridging yourself. That's less true now but I think that if you're working with React Native now, it's still really helpful to be able to read Objective-C and Java even if you don't write it. Yeah, I don't know. For me personally, the jump wasn't that bad. You can do the vast majority of your work purely from JavaScript and just not worry about it. But I think if you wanna write something that's really ready for production, you need to be at least willing to step outside your comfort zone a little bit.

    TYLER: Would you agree with that Ken?

    KEN: I certainly agree with that. Again, it comes down to what you wanna build. If you don't wanna do anything super, super, I mean even if you do want to do pretty fancy things you can do you know? If you have something like Exponent, where it's all JavaScript you're kind of relying on everything that's already bridged and it's all JavaScript, then you know, if you're a JavaScript developer now you can hop right in to that and just make awesome apps. I mean, it's not like if you're just writing JavaScript, you can't build anything, you can build all kinds of things. Like I built Duck Hunt in Exponent with just JavaScript. That's all, I mean you can build a game in just JavaScript. You could build a lot of things.

    However, there's certain APIs that aren't supported out of the box. So, back to what you wanna build, right? For example that fart app, that first app I wanted to build relied on playing noises which wasn't a thing. Which still isn't a thing. This was 26 minutes after it was released, so there wasn't a huge community built up around it yet.  (laughs) But being determined to write said fart app, they actually have a phenomenal bridging system. Anything you wanna do, as long as you're willing to get your hands dirty in native code, you could do it. So I wrote a quick bridging class to, it wasn't even dynamic or pretty or anything like that it was literally you can call a method and then it plays a fart noise. But like the stuff at Walmart, you have an established mobile code base there and a lot of it is reusing a lot of that stuff, so we would bridge into stuff that already exists rather than trying to recreate it piecemeal out of views. So whether you have to write not JavaScript is definitely how dependent on how ambitious it is. If it's going to prod I would say it's not just the Objective-C or Java syntax, right? You wanna be comfortable with their IDEs as well. So you can do things like check out the performance or a lot of the different configurations of these applications are done in the IDE. So before bridging you need something to prod you're probably gonna, you're not just gonna React Native run iOS.

    BONNIE: Yeah I think that's a hugely important point. There's so much more to mobile development than just the difference of programming language, right? If you've never done mobile dev before, you're not gonna know things like, "Oh man, to at least for Android, I need to make sure I've tested this on say, phones that have the hardware back button and phones that don't. I need to make I've tested in all these different orientations." I've seen so many people forget that lefties will hold their phone differently in landscape mode then righties, things like that. And so if you don't have any mobile developers on your team with any previous mobile experience, you're just gonna have to be willing to learn all of that.

    TYLER: Yeah and it's coming from experience that might be kind of a pain. I didn't have a lot native experience when I went into React Native. I've learned a lot but it's definitely been an interesting transition. So it sounds like if you're a React developer or can pick up React Native fairly easily, it might get a little bit hairy when it comes down to like deploying or when you have to bridge, things like that. What if you're, say you're an Angular developer or even just like a pure JavaScriptist if those still exist. Say you wanted to come and build a React Native app, should you start with learning your React first or do you thing you can just jump straight to React Native and go from there?

    BONNIE: So I think I'd break that up a little bit, right? I think what you're really asking is what if you're just, generally you have a programming background and you want to come to this thing. And I think there's a whole bunch of separate skill sets at play. You can learn some of them at the same time but for some people you're gonna wanna learn them separately. So mobile development, mobile design best practices, React component lifecycle, React's Native's particular platform limitations and quirks. There's all these things. And you can learn them in any order but I think that you're really gonna shoot yourself in the foot if you try to do anything before you learn React.

    And you don't have to learn much React. You need like an hour really of playing around with it to understand what is a component, how does it render, and what's the component lifecycle. That's really all that you need in order to be able to read the React Native example code. Without that, I think you're just gonna be lost. And I've seen some people try and jump into without even looking at stuff, at React stuff, but like, you need to be able to read JSS. And again, it's not that much extra knowledge. It's maybe an hour of homework. But I think that there's so much stuff. Just like with any other new kind of domain, you're gonna wanna pick it apart in pieces.

    TYLER: That's a great answer. So let's talk a little bit about the pros and cons of React Native app. Ken, sorry to put you on the spot there. But if you were to list a few pros and a few cons, or the biggest pros that you have, the biggest cons that you've faced, specifically about React Native what would those be?

    KEN: Uhm, I mean, for pros, right, it's very approachable. Previously, native development you had to know Java or you had to know Objective-C. You to not just know them but you'd have to know Cocoa or the Android SDK and then you'd have to learn how to use the IDEs and everything like that. Now you don't really need that background. It's helpful and you can kind of learn as you go along. But now, you can make apps for both platforms writing just JavaScript. It makes it a little bit more approachable and I think that's great. Another thing is you know, when you look at previous attempts to do this a lot of the time it was web view-based. Yeah, you were make native apps but it was like a native app with a webview with a website inside of it. Whereas React Native is actually native so like real, real native so you get those benefits.

    BONNIE: Can you tell us a bit about what those benefits are? I'm not sure if everyone listening has experience dealing with the webview based kind of apps. So how does it feel different?

    KEN: First of all animations are way less smoother and then it's not as responsive so to say. When you have a, I mean not all of them right, some are fantastic but most of the time, you can tell that it's a webview. You know, just a handfeel? It feels webviewy, whereas with a React Native app, it feels like a native app. You wouldn't be able to tell the difference. We've had apps that we've done where we were recreating a previously native version in React Native. And we fooled people into thinking it was the old version because it was so spot on.

    BONNIE: Yeah, that's my favorite. Again, I'm not sure how much the people listening have a background in this but the whole idea of React Native is that the button feels like a real button because it's literally the same thing instead of a bunch of HTML and JavaScript trying to pretend to be like a Native Android UI view or a native iOS or anything like that. And that's why we can get things to actually feel the same. That's awesome that you did the user testing and fooled people. That's sort of the holy grail, right?

    KEN: I really enjoyed that. I was like, "Yeah!" (Bonnie laughs) Now as far as cons. (whistles) So if you're at a company and they have mobile developers and you say that you're gonna do React Native, it might not be warmly received. (laughs)

    BONNIE: Which is totally legit.

    KEN: Absolutely understandable. If you have Native developers who know more about native code than you do and the benefits of that, and then you're like, "Hey, we're gonna write this in JavaScript!" A lot of the time they're like, "JavaScript, really?" So there's that, I guess. Which is kind of, that's a big con to get by. Other than there's certain things with Android, with Perf that I haven't been able to get past yet. There's not a big list of cons and everything that I can say as a con is definitely getting worked on.

    BONNIE: Can I ask you a little bit more about that cultural component actually?

    KEN: The what?

    BONNIE: The cultural component of how do you work with an existing team and an existing app, right? Because obviously, if you go over to someone and you say, "Hey, I want to make your entire experience, I want to render is useless," they're gonna be upset with you. And this is a lot of the time the way that people I think initially react. And then I've seen a lot of native iOS developers come around to being like, "Actually all my expertise still matters and I get to develop faster, and I get these nice new tools, and I still get to you know... I have a deep understanding of iOS, perf. I have a deep understanding of all this stuff so it actually it makes my job better." But convincing people of that and proving it out is really hard, so how did your team go about dealing with that?

    KEN: I tried to be diplomatic from the start. I guess the first thing is don't say you're gonna redo the entire application in React Native. That's like, "Hey, I'm just gonna completely destroy everything you've worked on." That's absurd. The approach that we took initially was there were webviews being used. If you have a portion of this application that are hybrids, that are using Cordova or I guess like a home-baked internal version of Cordova, essentially a bridged-up webview. That doesn't need to be webview. Instead, this can be React Native and it's not gonna be a webview it's gonna be real. But you're getting all the benefits that you would of it being a webview. So that, and then I think the big thing is that working together where it's like I don't wanna recreate anything in React Native that they've already done you know? So if there's an existing native componentry I'd much prefer to bridge it and use it.

    At Walmart, that was one of the things that we did where we had a bunch of controls that they made and then we just bridged them over into React tags. So when you have all these primitives as React tags, or React component tags, and then you compose them together in a React context in React Native, what you then have is you have this stability of those components but then they all get the benefits of React Native, which is things like live and hot reloading. I mean if you keep that logic, when you tie them all together and they work together and you keep the logic in JavaScript, suddenly you can do CodePush updates. So you're keeping all of that really solid base native primitive code. The logic that controls them can now be CodePushed over. Yeah, that sort of thing.

    BONNIE: Yeah, and CodePush is something I don't think that we've mentioned yet as a pro but the fact that you can update your JavaScript over-the-air, is the way people usually call it, without having to go through the app store deploy process, that's huge. Having to wait two weeks to issue a bug fix or two weeks to release a new feature because that's how long it takes you to go through the review process, I hate that. It slows down feature development so much and means that when you screw something up you really have to pay for it. Not having to deal with that is amazing. And I think React Native right now is really the only reliable way to get that done.

    TYLER: Yeah, I'd agree with that. Let's talk a little bit about some of the cons, we touched on the pros. Obviously if you know JavaScript, it you know React and you've built a native app now you can do CodePush. There are so many pros which is why it's kind of taking off. It's a really popular thing now. Some of the cons that I've experienced, maybe you both have ran into these same things. The upgrade process is a little bit hairy.

    BONNIE: Oh.

    TYLER: (laughs) It sounds like you have. This may be, I don't know if anyone else is doing this, this is how I've had the most success after failing miserably over and over. So whenever we have to do a big upgrade which is basically going from, if you're not familiar with React Native, say I was going from .22 to .29 or something. What I've been doing lately that's been working and again I don't know if this is the best way it's just worked for us, is basically create a brand new project, move over all of our code and then relink everything. Just because I'm literally like zero for eight trying to run React Native upgrade and like actually--

    BONNIE: Can I ask you a question? For those projects where you're copying things over, do you have any custom native codes in your-

    TYLER: No.

    BONNIE: with the hybrid (mumbles). For the Walmart instance I assume that would totally not work.

    TYLER: That would not work. I'm the only developer which is why we can get away with that. But if you have a bigger team then probably just one it probably wouldn't work. But yeah, we aren't doing any custom bridging or anything like that. It's kind of a pain because you have to like, we're using Facebook SDK and things like that. But really other than that it's, I really find that they're very similar.

    BONNIE: So if you look in the release notes, they say when there are manual steps you have to take and whenever there's a manual step React Native upgrade will fail. I've in the past I want to say year, I haven't had any instances where React Native failed and there were not release notes. I think it's really awful that like you were saying .22 to .29 is a huge upgrade. Those version numbers suggest that those versions should be compatible without any major breaking changes and that's not how React Native version thinks and this drives me up the wall. I hate it. You have to manually figure out which lines you have to edit. You have to trawl through release notes to figure it out. It might take me half an hour to upgrade a small demo application. just because I have to go, "Oh wait, I have to go into the Android manifest and change this. Oh I have to relink that." I haven't found a way to make that better. I think if the team has been working a lot on making the process smoother but I'm not a fan. (laughs)

    KEN: Yeah, yeah it's tough. (laughs) So if I could give one piece of advice it would be you need to update your applications a single version at a time when the next one comes out. 'Cause if you find yourself (mumbles) releases back, you're gonna have a real bad time.

    TYLER: That's what my strategy (audio feed breaking up). That seems to be the takeaway is basically if you're going up one version, you're good. If you're going up like three plus, it might get a little bit hairy.

    BONNIE: I mean, you can also get away with this by just, when you need to do that large jump, 'cause I've done this a couple times 'cause I have a bunch of basically sampler apps. Just bump it up once incrementally, test it, make sure it still runs, do it again. Nothing's gonna blow up. It's just gonna take time. This is also a place where I feel like we should plug testing. You know it's really great when you have automated tests that determine whether or not your app launches et cetera et cetera and can build and that. 'Cause there's been a couple times where for example, they changed the way you imported React. This was a while ago now. So unless you fixed that import in every JavaScript file, it just wouldn't load and if there was a component that didn't get loaded all the time you could've missed it. So testing, it's a good thing.

    TYLER: Totally, and to the React Native team's benefit, they do tend to release code mods for those kind of things. I know the import one they had code mod that worked out really well for us. And also too, I know that they're trying their best. And I see that picture of Christopher behind you, Ken, and it's just making me feel guilty.

    BONNIE: Oh yeah. I think that we're all working in a fairly new and immature ecosystem. There's definitely, like, yeah, upgrading is a rough edge. I don't want anyone to interpret that as a critique of the people personally.

    TYLER: Totally, even for how bad upgrading is, the pros outweigh the cons, drastically, for me.

    KEN: What you're getting for each release is absolutely worth the bump. Even the last three releases I stopped and thought to myself, I was like, "Wow! We have that now?" Now there's a keyboard dot dismiss.

    TYLER: Totally.

    BONNIE: Yeah I've been waiting for that for ages.

    TYLER: So let's talk a little bit about the routing situation. I don't know if this is necessarily a con. There are just a lot of options. What were you gonna--

    BONNIE: I think that this plays into the upgrading discussion really well 'cause there's a bunch of options. If you are coming to React Native for the first time, it's really unclear what they'll do, part of this is a naming problem. Navigate or iOS is basically deprecated. You can't use it if you want to write cross platform apps.

    TYLER: I forgot about that one. We had a list of four and that one wasn't on there.

    BONNIE: You know what, it's the first one that comes up when you Google it a lot of times. So, that's great. Navigator, I find to be really verbose and not the best mental model. But my beef right now is with Navigator Experimental, which I like that API better but what on Earth is the migration path plan for something that you merged into master and call Navigator Experimental? (laughs)

    TYLER: Yeah. I did my React Native core. I mean, it's probably similar to your book, right? Did you use Navigator in your book, Bonnie?

    BONNIE: I used Navigator. At the time there was just Navigator and Navigator iOS.

    TYLER: So that's kind of how I've been with my stuff as well. I guess the question that would most benefit watchers is if you're coming to React Native today, if you're starting a brand new React Native app, do you use Navigator, Navigation Experimental, ExNavigator from the Exponent team, the React Router the mini version, React Native Router Flux which is another one, or React Native iOS?

    BONNIE: I would say one, figure out what your routing needs are. Like generically, separate from all of these libraries. Figure how you want to structure your app. Don't worry about navigation too much because while yes, navigation is a really hard and important problem, you're not gonna actually design your app around your navigator or at least I don't think it's really necessary. And then I would probably recommend Navigator Experimental. I think that basically, anyone who builds an app with React Native at this point, there's lots of navigator options. They're all good enough. Chances are once you have a navigator working in your app, it's not gonna be worth the cost to switch even if a more stable one emerges. And it's gonna work fine. It's a little bit frustrating to read the docs for all five versions but I that we're in a good state where there are good solutions. None of them are perfect yet, I'm sure we're gonna see a lot of churn. But they're good enough.

    TYLER: Anything to add, Ken?

    KEN: I would personally recommend Navigation Experimental or ExNavigator. The choice being which API the person likes better or prefers using. I don't know if I'd start a new project with regular Navigator. Even though Navigation Experimental has a large uppercase experimental on it. Yeah, you can use it.

    BONNIE: That's one of the reasons why I dislike the naming and I'm stuck on the naming. Because Navigator Experimental is actually a surprisingly mature API. It's totally useful and it's great and I think it's a huge step up over Navigator. So yeah, I think people shouldn't be afraid of the title.

    TYLER: it's been out for over a year now right? Or it's getting close.

    BONNIE: Half a year. I wanna say half a year. There was a period of time before it got merged to master in which some people were still using it. It was coming from a separate GitHub project. But I think it's been in React Native proper for about half a year.

    TYLER: Cool, let's see here. So far, I don't see any Twitter questions coming in. So let's go ahead and-- is there anything else that either of you want to touch on in regards to React Native or should jump into tips picks?

    BONNIE: One thing I would like to say is that I want to hear more from people who are using React Native and what their experience has been like. 'Cause I haven't heard from a lot of people who are trying it for the first time and I want to hear more from people who are doing hybrid experiences like the Walmart one. So if people have first-hand accounts, I would love to hear about that on Twitter.

    TYLER: What about you, Ken?

    KEN: I'd like to say that if you want to give React Native a shot and you think what we've been talking about here has been interesting, I would definitely check out Exponent. Exponent's phenomenal and if you want to get started it's a really easy way to do it. They have their own XD that you download. You don't even have to open XCode. You don't need any provision in profiles or anything like that. You could take it, you could share your app with your friends. You could have it on your phone. It's a really, really easy way to just kind of mess around or do quality stuff. But as far as getting started, I can't recommend Exponent enough.

    TYLER: The idea of Exponent is basically like, "Hey, if all you have is JavaScript experience you'll be fine because we've basically taken all the complicated stuff. That comes with Android and iOS the ecosystem and basically abstract it away from you."

    BONNIE: Yeah. They do a great job.

    KEN: It's only JavaScript. But on top of what React Native already has in core bridge, there's a couple more things that they've personally bridged that they had. And there's a lot more coming. There's not a whole lot of things to do if you're going the Exponent route. Obviously, I could name some large company's mobile app, yet you might lean towards regular React Native, but as far as getting started, I can't recommend it enough.

    BONNIE: And I think that the best way to figure out what is React Native or something like that if you haven't tried it yet. Definitely sit down and hack on it for a couple hours. I think pretty quickly it becomes evident how bizarrely powerful this thing is where you can write JavaScript and then have working mobile apps with live reloading and actually accessing native APIs. All that stuff I think is really well experienced just from starting from zero and trying to build an app.

    TYLER: Totally, all right let's jump in to our tips and picks. Bonnie do you wanna go ahead and start us off there?

    BONNIE: Sure, so I had two tips. I do this thing now where I add stuff to my pocket, which is basically a bookmarking app, every week and then I clear them out at the end of the week. And these are two from this past week that I really liked. One was this great description of how JavaScript package managers actually work. And why lock files are a good idea sometimes but not in other cases. Which was great because Yarn came out recently and therefore everyone's been chattering about it. And if you've never looked at how a package manager actually works, I really liked this very clear, beginner-level description of the mechanics. That was cool.
    And then the other one, is a post entitled Why I'm Not a React Native Developer. Which I actually thought was a really interesting and even-handed evaluation of some of the pros and cons of React Native. Including, bizarrely, some of the legal ramifications which I haven't heard a lot of people talking about. So even though I am personally obviously very pro-React Native and I think it's a wonderful tool, I think it's also important that people also read about sort of the caveats that come with it.

    TYLER: And then you also have one pick in there right?

    BONNIE: Yeah, so I made my first Twitterbot a couple weeks ago and I've been really enjoying the bot making community, just as a really interesting and artistic and excited and thoughtful group of people. I've been lurking on the edges. Botwiki.org is "an open catalog and community of friendly, useful, and artistic online bots and tools and tutorials that can help you make them." And especially if you only know JavaScript or if you're primarily a web developer, setting up a bot on its own server or whatever and dealing with OAuth can feel complicated, it's really not that bad. I set up an eBooks-style account that basically takes tweets from all my coworkers and mashes them up into one like Frankenmonster account. And it was just fun. And so if you're interested in writing Twitter bots, I recommend that.

    TYLER: Very nice, Ken what do you got?

    KEN: All right, so under tips this is gonna be--

    BONNIE: You have a lot.

    KEN: Yeah, this is gonna be published somewhere as a list on the--

    TYLER: Yep, you're good. Just talk slow.

    KEN: I'm not gonna say this out loud 'cause it's a long (mumbles). But it's basically I had to reset Watchman and reset the packager cache. I cannot recommend it enough. If at any point in time, in React Native, you're getting an error that you don't understand and can't really get to the bottom of and you're like, "Hey, what's going on here? Why is this broken? I'm gonna quit this development forever!" I can't recommend clearing your package or cache enough because that'll literally solve it a lot of the time. That is just money.

    The next one is try objectivec.codeschool.com, where if you want to get started with bridging you know, writing your own native modules. Objective-C is kind of a funny language to begin with. So before React Native came out I was writing Swift and I was like, "Oh, man, this is so nice!" And then I got to write native and I was like, "Oh, wow we got to do Objective-C again." I was like, "Ahh!" But if you wanna do your Objective-C thing, that's a great resource for that.

    The next one is Jason Brown's React Native Animation book. React Native Animation is dope. It's as dope as can be. And that'll show you how to do it. Anytime you've ever tried to do web animation where it was a little funny or the gestures were off or something like that, try it in React Native because it is (whistles). I mean absolutely, fantastically responsive. Really, really, really good.

    TYLER: Shout-out to him too. He always has a lot of really good--

    KEN: Oh, the best!

    BONNIE: Yeah his stuff is great.

    KEN: If there's two people to check their stuff out, it's him and Leland Richardson. The two of them are doing some serious business. And my last tip is to upgrade often. I guess we touched on that before. I'm just gonna say that again. Upgrade often. Let that sink in for a second. Now, for my picks. I was told that these picks can be anything so--

    TYLER: They can.

    KEN: I'm gonna start off with some tech picks. First one is React Native responsive styles by my good man Jani EvÑkallio. Although it's under the formidable account. On phones you wouldn't think that you're dealing with a responsive sort of thing but you are. You know, you're flipping the phones sideways suddenly it becomes wider. Or you're on Android and you these fragmented screen sizes. So that lets you style things accordingly. If you're on a tablet, suddenly it's not a little drawer now it's a locked sidebar or what have you. That makes that really nice to do. I'm surprised that's not built into core.

    The next one from my main man Leland Richardson is React Native Maps, which is fantastic. It's a cross platform maps. And if you have to do maps, just use it. Don't even look at anything else, just use it.

    One that I'm going to mention that's not on this list is Victory from Formidable Labs. If you have any charting needs on React Native, Victory works on React as well as React Native, so that's a really good time and it's getting better by the day.

    The next one is Mobx which is kind of my jam lately. I've done React Native apps with and without Redux and now with Mobx and it was pleasant. Can't recommend Flotype enough. That was really helpful when I was trying to sell mobile developers on writing things to JavaScript and I'm like, "No, no, no, listen, it's not the same JavaScript. We got typing and all this fun stuff, check it out."

    BONNIE: Do you use Flow in all your projects?

    KEN: I aspire to. Not in all of them but when I'm able to, I do.

    BONNIE: Awesome.

    KEN: I'm like, it's basically Swift. (laughs) And the last two things that I have on my picks are Hot Tub Time Machine. I cannot recommend that movie enough. It is a fantastic film. You might have thought it was absurd at first. You know, you're like, "Ahh." That really is a really good movie. Just pull the trigger on that one.

    And then I have a link there about the McGriddle being added to the all-day breakfast menu at McDonald's. That's a big Ken Wheeler pick. I'm very excited about that. So I just wanted to throw that out there. Make some fun, just raise awareness, really.

    BONNIE: Life improvements.

    KEN: Yeah, that's all I'm working with here today. (laughs)

    TYLER: For me really it should have been there from the start.

    KEN: Right?

    TYLER: They say all day breakfast. I go to get all day breakfast and there wasn't all day breakfast and I was just hugely disappointed.

    KEN: Yeah.

    TYLER: But I agree with you that's a fantastic pick. All right I only have one. It is reacttraining.com. Training by Michael Jackson and Ryan Florence, the guys who built React Router. They do a really good job and I know they put a lot of really hard work into that. So that's my only pick. Anything else before we close up? I don't see anything on Twitter. So I think we're good. Anything from both of you?

    KEN: Go build cool stuff!

    BONNIE: (laughs)

    TYLER: Go build cool stuff and be nice to each other. That's a great-

    KEN: I never said be nice to each other. (laughs)

    BONNIE: I'll say be nice to each other. I can vouch for both of those. Bonnie and I added that in. All right, so we wanna go ahead and thank our silver sponsors React.js Program. They help you master React and the React Native ecosystem. And also thanks to hire.com. They bring job offers to you. Find them at jsair.io/hired.

    And also just a few links. If you want to suggest another show, don't really do that 'cause this podcast is almost over, so I'm gonna go ahead and remove that. But if you wanna give feedback or say thanks to Kent C. Dodds, he's a great person, you could do that at jsair.io/feedback or jsair.io/email.

    And just as one side note, I was talking to Kent yesterday. He did mention that he is sunsetting the show, that he's not completely destroying the show if that makes sense. So there's a very small possibility that JSAir will return in the future. So send tweets to him in a few months and say, "Hey, we want jsair back." And I'll bet he'll give in because it's Kent and he's a very nice guy and he wants to really help people.

    KEN: Such a nice guy.

    TYLER: So that's it for us, thanks for watching. Thank you, Ken and Bonnie. And we will see you on Twitter!
  `,
}
