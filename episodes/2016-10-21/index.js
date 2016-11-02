export default {
  title: `On-site at Connect.tech`,
  time: '12:30',
  timezone: 'ET',
  guests: [
    {name: 'Stephanie Brubaker', twitter: 'sjbrubaker'},
    {name: 'Tim Dorr', twitter: 'timdorr'},
    {name: 'Ben Ilegbodu', twitter: 'benmvp'},
  ],
  description: `
    We'll be live and on site at [Connect.tech](https://twitter.com/connect_js) in Atlanta Georgia. See you there!
  `,
  youTubeId: 's9kNekW8B-8',
  podbeanId: 'ucpj3-63ccdd',
  shortUrl: 'http://jsair.io/connect',
  panelists: [
    {twitter: 'drboolean'},
  ],
  transcript: `
    KENT: Alright. Hello, everyone! We are actually streaming live. This is JavaScript air. Feel free to continue to chat if you don't care, but JavaScript is a cool thing. And we're here to talk about it, JavaScript and the web platform. So if you're not familiar with JavaScript Air, it's a live broadcast podcast. And we do shows every week for the next couple weeks. (laughs) And yeah so, we're here on sight at Connect Tech in Atlanta, Georgia. I'm joined by a couple awesome speakers. We'll get a chance to introduce everybody here in a second, but I'd like to give shout out to a couple sponsors just really quick.

    Egghead.io is our premier sponsor. They have training videos and they're super cool. Front End Masters is another sponsor and they're super awesome for training as well. And TrackJS is super cool too. They will track your JavaScript errors, so check them out. And yeah, those are our platinum and silver sponsors.

    So yeah for the next like half hour we're just gonna be chatting about what this conference is all about. So, let's go ahead and get an intro to the people we have on the panel. So my name is Kent C. Dodds. I work for PayPal. And we're hiring and it's awesome. So yeah that's me. Why don't we get an intro to everybody else.

    STEPHANIE: Hey my name is Stephanie Brubaker. I'm a former Google developer. I now work at a startup called Full Story here in the big ATL. And we're also hiring. I'm sure we're just as famous as PayPal, pretty much. But if you wanna work in a smaller shop, we're a great employer.

    TIM: Yeah Full Story is really cool by the way, it's basically a DVR for your website, or as I called it to somebody on the marketing team one time, a reality show for your website. It's really freaking cool. My name is Tim Dorr. I'm a CTO over at a company called Showcase IDX in the real estate technology area. We do real estate search for realtor websites. I've been around in the startup community in town for a while, worked with, cool story a little bit early on. My previous company SalesLoft, which I see some guys from the company out in the audience. And I work primary in the open source world on React router and Redux, kind of maintaining that now. And we're doing major releases of pretty much all of those things very soon. So I have a very long notification list on GitHub right now. But yeah that's my story.

    BRIAN: I have this microphone.

    TIM: Yeah the bomb microphone. (laughs)

    BRIAN: So I'm Brian. I'm a regular panelist on JS Air, for the next couple of weeks.

    BEN: Hello my name is Ben Alecbadoo. I'm from the Bay Area. I work at Eventbrite. I am a former senior UI engineer. I just got promoted to be a manager of my front end platform team, so now I'm in management I guess, but I still do code about 40% of the time. So I'm calling myself both engineer and manager, yeah.

    KENT: Awesome, thank you so much, so all of us have one thing in common, well we probably have several things in common, but in particular, we are all speakers here at the conference. So why don't we just like talk about really quickly what we are each here talking about, or work-shopping about. So since I'm holding the mic I'll go first. I gave a workshop yesterday about ES6, well more like ES next things, including ES 2016 and 2017 and all that stuff can be found online. I even did like a recording. And then today I'm doing a talk on testing React, which is kind of fun so.

    STEPHANIE: So I've been a full stack developer for a long time. I've worked with a lot of designers. I've had the privilege of working with the same designer that I worked with at Google for about six or seven years now, 'cause he came with us to Full Story. We're actually co-presenting a talk about bridging the designer-developer gap. About just finding ways to work together very tightly and to use a very iterative process to actually come up with the best product that you can conceive of. And it's right after lunch, so if anybody wants to come please come to room 103.

    TIM: That sounds cool, I heard a lot of stuff out of CSS Conf about that kind of thing, like bridging the gap with a lot the, what's happening, and what it takes to get there, 'cause there's kind of a gulf right now. People want to hold fast to their existing tool sets of CSS, that's just native CSS. And all this new stuff that's happening that tightly integrates all the apps that we're building, that are super complex and would benefit from having a better coupling and just how do we do that. So, a lot of stuff that's happening, I'll definitely be there.

    I'm talking tomorrow morning at 10:20 in Room C about React Router 4, which is our upcoming giant middle finger to the entire (mumbles), community apparently, based purely on my Twitter feed. I'm pretty nervous about that talk, mainly because I don't wanna get like tomatoes thrown at me, but hopefully it will go well. I assure you there are plenty of funny gifs throughout the entire thing, and lots of humorous puns and what not. So it can be entertaining on that level at the very least. And yeah we'll be going over what is a router, how does that work, what do we do differently for React router four, where we've rewritten the whole thing. Or I should say more accurately, Brian Florence and Michael Jackson have rewritten the whole thing. I just came along for the ride. And you know, what the implications of that are. So it should be a pretty interesting, exciting future for that library, so looking forward getting some knowledge out about that.

    BRIAN: Monads. (laughter)

    KENT: That was terrifying. It is October so fitting. Actually sorry, actually last year like two days after Halloween, I was like, "Oh snap I totally missed it!" Like, the scariest costume I could have had for Halloween was like to be a monad. (laughs) Or a burrito I guess, yeah. (laughs)

    BEN: How many people do you think would've understood the monad joke? Like two on your block?

    KENT: (laughs) Yeah that might be a little tough to pull off.

    BEN: (laughs) Yeah so I was smart and decided to do two talks today.

    KENT: Yeah.

    BEN: Alright so I got one that I just did, it finished 15 minutes ago. So if my eyes are a little sleepy, that's why. It was about navigating the React ecosystem but I called it a solar system because they're all revolving around React, yeah see what I did there. So just kind of talking about what's all there, what are the options, how do they work, why you would need 'em, when you should learn 'em, basically. So I gave a shout out to React router, to come to your talk tomorrow. Gave a shout out to testing, so they should come later today for that. And then I gave a huge shout out to React create app for what it can do and how it makes life a whole lot better. And then later this evening, I'm talking about building isomorphic JavaScript when you don't have a Node backend. So at Eventbrite, we're Python-Django, how do we actually render server side when we have Python-Django. So I don't want to spoil the surprise of how we did it, but come to the talk and then you'll find out.

    KENT: Yeah now you got me totally interested.

    BEN: Good. (Laughs)

    KENT: Sounds really interesting. Yeah so actually I wanted to ask you about that, navigating the solar system a little bit. So what is it about React, like I don't feel like there's the same kind of feeling in any other framework out there like, Ember and Angular. It's not so nebulous as React, so what about React makes it so, like, makes it so you even have something to talk about? When talking about solar system.

    BEN: Yeah so with Angular and Ember, Nicholas Zakas called those walled gardens. They give you everything you need, they give you ajax, they give you data, everything you need to do to build an app is provided there. You can't get out of that, which is why people kind of had push back with that, they're like, "We want micro-libraries. Want something small, so I can piece together what I want to be able to do." And then React is kind of one of those micro-libraries. So it does one thing, it does something really, really well, but then now you have to figure out, "Okay, how do I do Ajax? How do I manage my state? How do I actually build my app and compile it?" And stuff like that so, kind of because it does one thing well, and you have to put all these things together that's kind of the world we're in. I don't mind it because I like learning all those things, but having some like React (mumbles) app kind of is the bridge between the two, which is really nice.

    TIM: Yeah I was gonna say, probably the biggest difference between something like Ember and Angular one or two, is when you plug into those ecosystems, there is a defined API for how you plug in.

    BEN: Exactly.


    TIM: Whereas, React there is more of a set of patterns.

    BEN: Right, suggestions.

    TIM: It's not necessary that you have to, like, I mean in some cases you have to call certain things, but more about getting things built the right way.

    BEN: Yup.

    TIM: And that's actually kind of, as a preview to my React router 4.0 talk, like that's kind of what we have been trying to do with 4.0 is embrace the patterns rather than the API's 'cause one of the big things, kind of, precipitated us even trying React router four was the fact that in React router two and hopefully 3.0 this weekend at some point, we basically, when you configure your app (mumbles) it's passing some json objects. Like the route component doesn't render which is like a core fundamental thing of React.

    BEN: Yeah. (laughs)

    TIM: When you build a component it has a render function that does something, return null, but it's got to do something. Ours produces a warning, which is not right. The idea was like, "Okay, well what if route could run,  how would that work?" And it eventually ballooned into this whole thing of embracing the entire declarative style that React fosters through just its structure and patterns, and things like that. Not a hard written API to get the file. I mean the hardest API that exists in there is lifecycle methods you have to call, but even then it's like less about writing the code that runs within those particular bounds, it's more about like how do those things interact, how do those things occur, when do you do like, you know, build up and tear down. And how do you like make things so they're super declarative.

    BEN: Gotcha.

    TIM: Ryan Florence actually gave a really good talk about this at React rally, Brian just mentioned this to me or reminded me about it. Where he basically took a bunch of imperative stuff that was shoved into React, and ripped it all apart so it became more declarative code, and took out things like time, and like internal like to a function state and brought it more to the point where you know, "this thing happens when this state is, when this is the current state of this component," kind of stuff. Rather than, "hit this button, do these things." So I definitely would recommend checking that out.

    STEPHANIE: Yeah so I, I know you can describe, some people's commitment phobic, I would say I'm framework phobic. (laughter) So I was talking to Kent last night at dinner, and I said like typescript is as much structure as I want. And we essentially build all of our components from scratch. We have our own, we actually built our own internal framework for writing out HTML and binding to the DOM. And so I said to Kent, "Sell me on React. Why would I want to use this?" And actually you inspired me to go to the intro to React talk this morning, to just get a little more info, like why would I want to use this, and what I liked about it was that, I feel like a lot of frameworks try to do too much and I want control, and I want to be able to get down to the bare metal, do the exact thing I want. Don't put me on too many rails. And so it felt like React is close enough to native code, that it's very natural and you have a lot of control, but it's also restricted to doing one aspect, the view very, very well. And so, you're primed with the view in a nice programmatic way, but then the model and everything else around it, I can control. So that actually felt very freeing, because I was like, "Oh yeah this is fine. I don't mind plugging in this piece of my system. I just don't want you to take (mumbles) everything."

    KENT: So that's something that I love about it as well. I'm kind of the type of person who likes to have control, but I know that there are like a lot of people who feel differently. And that's why I think that it's awesome that we have like a bazaar of frameworks that we can choose from (laughs) That's kind of misusing that analogy, but just having this buffet of different options, so that we can all identify the thing that works best with the way that we think about building applications and then use that. I'm not an Angular two developer or an Ember developer, like that's not the way that I think about building applications. I like the React way, but I'm glad that those things exist for the people who do think in that way. I think that's an important distinction. And something that I think in the last year or two, we've started coming to that conclusion that, "Okay, this framework four stuff doesn't even make sense because we're all different," and so it makes sense that there would be different solutions.

    BEN: Yeah, I agree with you. I like the control, but when I was first starting out, I didn't know what to pick. Should I pick webpacks? Should I pick roll up, like what should I do? Without something that would create it for me, I had to kind of learn what I should pick before I knew what it should do. And I'm the kind of person whereas like I want to know everything that I'm putting into what I'm doing. I don't want to make just a random decision so, I'll just kind of like, what's the phrase where, I just couldn't make a decision before I could actually do it, so. Yeah, analysis paralysis. That's exactly it. That's what I had so. At least having something like create React app that will do it first, then I can actually learn React and get good at that, then I can see oh what's this web pack thing about, what's other parts about as well, what's this ES lead thing, stuff like that.

    KENT: Yeah, I like how you mentioned that in your talk you talk about when you learn things, because there's so much to learn right, so I wanna go back and look at that talk. There's a resource from Pete Hunt called React Howto that shows here are the things about the React ecosystem and this is the order you learn them, and you don't skip anything. You just learn it in this order. I think that lots of the principles that he's illustrating there apply across everything, not just React, not just software development, but you're entire life. You learn things as you need to, like, there are too many things in the world to learn to like, be sane, like if you just started thinking, "Oh, my goodness I have to learn this, that, and the other," and it's an analysis paralysis kind of thing. And so the idea is you learn things when you need to and not before. So do you implement Redux right at the start of your application, right at the start of your learning? No, you need to figure out why does Redux exist, before you start using that size of an abstraction, just as an example. And I think that same kind of concept applies throughout a lot of different things.

    So let's talk a little bit more about the conference, we're here in Atlanta, what are some of the things about this conference that are special to you all?

    BEN: Well I think one thing that really stands out to me is that the conference has 11 tracks, 11. It's like 75% JavaScript, like how much JavaScript, like that's amazing that you could have a whole conference that is that big just about JavaScript. So before last year it was Connect.JS and now they're taking it to Connect.Tech 'cause they have mobile, and they have PHP as well I think, so they kind of broaden it out, but just the sheer size of this is really amazing. And then the fact that there's a React JS track, I can just park my laptop on a desk in there and just sit there and get learned on about React, which is great.

    BRIAN: It's definitely massive (laughs). There's like, there's a lot of different languages. I wanted to ask you about Go again. (laughs) But yeah you'd think that JavaScript is kind of the central theme of every developer, so they can watch talks and all enjoy it. So I like that it's central, but you get to dip into whatever specialty that you'd like, and I think that's pretty sweet.

    TIM: Yeah I mean, it's kind of emblematic of what's going on in the general development community as more and more people are getting into this entire world. A lot of people are finding their start using JavaScript because if you have a web browser open, you are literally three keys away from a JavaScript console at any point in time. So you can start coding right away with just pressing three keys. So the barrier to entry has been lowered significantly in the past decade. And you know, this conference has grown, the name's changed from Connect.JS to Connect.Tech now, to indicate wider breadth of knowledge throughout it but it still has that JavaScript core. It is again kind of emblematic of where a lot of people start and begin. But it's a good place to come and kind of branch out, and go maybe look at the PHP track and go look at a specific library if you aren't using it. So if you're a React guy, go look at the Angular track, you're an Ember gal, go look at the React track, or whatever. So there's a lot of opportunities to sort of cross-pollinate your skill set here, and really branch out and dip your toe in the water on some stuff. And I think that's great. That's good for anybody regardless of skill level.

    STEPHANIE: Yeah, to kind of echo that sentiment, (mumbles) I write a lot of code all day and it all looks pretty similar, so being able to come and check out a bunch of technologies that I just don't use day to day and don't really have time sometimes to look for is really, really nice. I think making this a foundational conference here in Atlanta, and we're limited on the west coast in terms of access to getting together and actually cross-pollinate ideas, so it's really nice to get together here in ATL and actually exchange ideas.

    KENT: Cool. So I actually, I'm kind of curious what you all think about some things that this conference has really done right. Let's just pretend for a moment that there's somebody here listening that wants to organize a conference, what are some of the things that this conference has done really well that should be emulated by other conferences?

    BRIAN: Well I can say they really take care of their speakers. (laughs) I have like an apartment. (laughs)

    KENT: It's been super nice and I'm really, really impressed by Patrique. If something comes up, he just handles it, you can't tell whether he's stressed or not. He's just an upbeat, happy person.

    BRIAN: Yeah. Well he's a seasoned speaker himself so you know. But also, just attended like 15 minutes ago, 'cause I was practicing my talk in my hotel, so I don't really have much to say yet, circle back.

    BEN: Something that's always underrated at conferences are the speaker badges. The speaker badges are nice. Your name is clear and such, so I can actually look at somebody and say, "Oh, okay hi Stephanie, like I actually know you because I can just say your name, right?" So, the speaker badges that they have the barcodes, the sponsor booths were scanning them so I could automatically be in raffles and stuff like that and they don't have to write stuff down, amazing.

    STEPHANIE: And I think they also make a big effort to have a wide variety of talks. I mean there are really basic beginner talks, specialized case studies, so there's something for everyone. I know people here who are just getting into web development, and they're excited to see the spectrum of what's out there and kind of make some career choices based on it, and more seasoned folks who just like exploring the higher level stuff.

    KENT: Yeah, actually on that, I think I find over and over again things are more interesting when there are multiple perspectives. That's one of the things I try really hard to do with JavaScript Air is I try to make sure that more than just one perspective is being represented on the show. I think that's one of the things that makes it really interesting and relatable by a lot of different people. And I feel like I totally agree, this conference, it's enormous. And if somebody is going to start a new conference, I probably wouldn't recommend doing something this big, but like with what you are able to do try to make it like as diverse as the niche that you're going for. So like, it's okay to make a React conference or an Angular conference, but make the content and the speakers you're having come from different walks of life and different kind of backgrounds, different topics and I think it'll make for a better conference. And they've done that here I think.

    So cool, so for the last couple minutes, I think a lot of people who come to conferences, myself included when I got started, look at speakers and think, "Oh, man I'd really like to go do that one day!" So what are some of the tips that you could give to people that are interested in getting involved in speaking at conferences?

    STEPHANIE: So, I think the first thing to realize, and I'll say this especially as a woman in computing, 'cause there's like an extra mental barrier there I think, is that speakers sometimes... (microphone cut out) ...expert in something and has something that they want to say, can get up try to talk. So if there's something that you're passionate about, big or small, if you don't make it this time around get to another conference, not just at big conferences like this. (audio cuts out) So it's important to be heard because there are so many great ideas.

    BEN: And the thing is you don't even have to be an expert, you just have to have experience. Like, "I went through this and it didn't go well," or "this part went well," is like a great talk for somebody, you know, if you already know what it is, just seeing that experience is really great. And what you said like the speakers aren't anointed, that's perfect because I used to think all of us speakers got selected, they were already in the circuit so there's no way for me to get in. I didn't even know about CFPs, or call for proposals, like even that fact that anybody can submit is something that people should know. Once you realize that that's the process, it feels like it's not so big a barrier of entry just to get in there. So just have something that you're passionate about that you've experienced. And if you're passionate about it and you can communicate that in a presentation, you'll do very well.

    TIM: Yeah I mean, the people that are speaking here are not like all (mumbles) in the back room of some conference center. It's, at least for this one, it's entirely based on calls for presentations or proposals, or whatever. So you know anyone can do it, and there's kind of a single baseline for everyone. Everyone's on the same page when they're chosen, 'cause it's just, it is the talk. And then, it's kind of interesting okay, let's then make sure this person actually does have some experience with it so they can have good content. And it's not just going like, "Well, I just read the readme a couple days ago, so I think I can talk about it."

    Same thing, they don't need to be like (mumbles) God who knows everything and fully understands what a monad is. (laughs) Which hopefully more people will now, after your talk. It's not some like magical, black box like process, that involves back rooms deals. A lot of them are, you know there's some of that to get big names in. So like I went to a Rails Conf in 2015, and Aaron Patterson and David Heinemeier Hansson talked there. You know, DHH created Rails, and Aaron Patterson is huge in that community, so obviously they got them. But there was a whole slew of other talks from people that I didn't know but had great content to provide nonetheless. So you know it's usually a mix of that stuff, but you can be up there with those people who are the untouchable Gods of the, you know, various communities of coding that you're involved in. There really is no like, it's not like they're gonna put like one podium higher up, like so it's like, Olympic podium style. (laughter) You know like, you can only talk at level three, you have to work your way up to level two podium that includes the extra lighting and louder speakers and stuff like that. When you're done fireworks come out. It's all the same for everyone.

    BRIAN: Don't live code. (laughter)

    TIM: Yeah that's a good one. Well don't live code unless you've done it a bunch of times. And even then, don't live code.

    KENT: Yeah on that, my talk at 2:30 will be pretty much just live coding. (laughter) But no, no totally, if you are going to live code, I've done the walk through this live coding like probably a dozen times. You do need to be prepared if you're going to live code. And you have to be able to, I find that talks that are like, "here's how you use this API are not very exciting or interesting or inspiring." So whatever it is that you do, your goal should be to entertain and to inspire and inform. And I think those are the best talks. So however you accomplish that, whether it's live coding, live coding is probably a little harder to do that, it's easier to slip into the "this is how you use this API" kind of talk with live coding, but whatever it is that you do, I think those are the most interesting talks to me. Actually, Ben Orenstein gave a talk at Rails Conf a year or two ago, called How to Talk to Developers. Amazing talk. I have re-watched it several times and it really changed the way that I think about talking at conferences. And his thesis for his talk is basically, it's more important to be entertaining than informative. So if you can be both, that's great, but at a conference, yeah I think entertainment is kind of like paramount. Both is really important though.

    BRIAN: Just look at the presidential debates and you'll understand that. (laughter)

    KENT: That throws a third one in there, memorable but not for good reasons. (laughter) Awesome yeah, thank you. Yeah we are running out of time, so let's just wrap up. And I'm gonna give you each just a second to give a shout out to whatever you want. Normally, we do like tips and picks at the end of the show, we don't have time for that. And so, I'm gonna go ahead and give a shout out to our silver sponsors hired.com where they bring job offers to you. I'm not sure what the tag line is anymore, but it's a good one go check it out. And then ReactJS program helps you learn the React ecosystem, so check them out too.

    STEPHANIE: Well, I can't help but say that my pick is my own company, for very selfish reasons, but also for altruistic reasons. I don't know how I learned code without Full Story. I don't know how I ever found love in code and (mumbles) without Full Story, so if you have a moment go ahead and check it out, fullstory.com.

    TIM: Yeah, I'll echo that because mine's real estate technology and nobody here is a realtor. Basically, you drop some Java code on a page, then you basically get like recorded sessions of everything that happened on there, so all the HTML, CSS and stuff gets copied, all the manipulations that happened get shown to you. And you can watch in excruciating detail if somebody misuses your application but learn why that stuff does or does not work. It's amazing that it works at all. They have a lot of smart cookies on that team, Stephanie included. And then I don't know, my talk tomorrow please come see it. It's at 10:20. And if you're not here at Connect.Tech, definitely go to connect.tech and check out this conference. I assume they will do it next year and it will be similarly awesome, if not more. So that's my pick, is this.

    BRIAN: Shout out to all the people that are about to submit their first CFP.

    TIM: Yes, please do.

    BEN: Yes I'll give a shout out to my talk that's later this evening like I mentioned, but also want to shout out Eventbrite, my company as well. They're super supportive of me going out to speak, and give me the time off to speak, which is key in being a speaker. I'll also say that we're more than just an events and ticketing company, we're also an engineering company, so we're kind of beginning our foray into open source. We don't have the people to maintain huge frameworks yet, but what we're contributing is our ideas and our patterns and our best practices and our guidelines. So if you go to our GitHub, Eventbrites' GitHub slash JavaScript, we have a lot of documentation on how we go about writing JavaScript in ES5, how we go about writing Backbone and Marionette, React, React testing, and stuff like that. So check that out. That's my tip.

    KENT: And that's it for us! Thank you so much for watching and we'll see you all later.
  `,
}
