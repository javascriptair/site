export default {
  title: `Progressive Web Apps`,
  guests: [
    {
      name: 'Henrik Joreteg',
      twitter: 'HenrikJoreteg',
      links: [
        `[Introducing Pokedex.org: a progressive webapp for Pokémon fans](http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org)`,
        `[Mozilla's SW Cookbook](https://serviceworke.rs)`,
        `[sw-toolbox](https://github.com/GoogleChrome/sw-toolbox) (so much good stuff here)`,
        `[Background Sync](https://developers.google.com/web/updates/2015/12/background-sync)`,
      ],
      tips: [
        `Sometimes it's just easier to disable registering SW in development. Just helps when you're trying to build/fix other parts of the site.`,
        `It's very important to test your update process when deploying new versions of apps with SW. It's possible to “brick” a web app since if you successfully register a SW, then push an update that has a JS error that prevents your SW registration code from running. Pushing a new version won't fix it because it won't register the new SW and keeps serving the broken code from the previous SW. `,
        `It's early to say this, but I think GraphQL will eventually replace REST as dominant http API approach for applications.`,
      ],
      picks: [
        `I <3 [reselect](https://github.com/reactjs/reselect) for [Redux](https://github.com/reactjs/redux) apps`,
      ],
    },
    {
      name: 'Ada Rose Edwards',
      twitter: 'lady_ada_king',
      links: [
        `[Caching best practices & max-age gotchas](https://jakearchibald.com/2016/caching-best-practices/) by [Jake Archibald](https://twitter.com/jaffathecake)`,
        `[My stupidest webapp](https://ada.is/starsword)`,
        `[The FT’s webapp](https://app.ft.com)`,
      ],
      tips: [
        `If you do 'network first' routes in the service worker, fallback set a timeout to wait for the response and if it fails respond with cached or fallback content. This keeps the app responsive when the device is "online" but no data is going anywhere this stops infinite loading spinners when connected to captive portals, or have low phone signal. I do 2-5s timeout usually.`,
      ],
      picks: [
        `[sw-toolbox](https://github.com/GoogleChrome/sw-toolbox)`,
        `[sw-precache](https://github.com/GoogleChrome/sw-precache)`,
        `[lighthouse](https://github.com/GoogleChrome/lighthouse)`,
      ],
    },
    {
      name: 'Nolan Lawson',
      twitter: 'nolanlawson',
      links: [
        `[Jake's article on appcache](http://alistapart.com/article/application-cache-is-a-douchebag)`,
        `[Infographic on service worker](https://github.com/delapuente/service-workers-101/)`,
        `[Paul Lewis on CORS](https://aerotwist.com/blog/cors-for-concern/)`,
        `[Ionic and PWAs](http://blog.ionic.io/what-is-a-progressive-web-app/)`,
        `[Differences between PWAs and AppCache apps](https://gist.github.com/nolanlawson/1326b4af986f5ac0ee9ae24630229fa8)`,
        `[On URLs in Progressive Web Apps](http://www.brucelawson.co.uk/2016/on-urls-in-progressive-web-apps/) by [Bruce Lawson](https://twitter.com/brucel)`,
        `[The importance of URLs](https://www.kryogenix.org/days/2016/05/24/the-importance-of-urls/) by [Stuart Langridge](https://twitter.com/sil)`,
        `[Regressive Web Apps](https://adactio.com/journal/10708) by [Jeremy Keith](https://twitter.com/adactio)`,
        `[Progressive Web Apps and the future of the Web (video)](https://www.youtube.com/watch?v=YxQUxCsNomM) by [Bruce Lawson](https://twitter.com/brucel)`,
      ],
      tips: [
        `Chrome Canary now has an “Application” tab showing PWA and storage information`,
        `Chrome Canary has a “clear all storage” button (so handy!)`,
        `[sw-precache](https://github.com/GoogleChrome/sw-precache) and [sw-toolbox](https://github.com/GoogleChrome/sw-toolbox) are awesome, see [web-starter-kit](https://github.com/google/web-starter-kit) for a full working app that uses them`,
      ],
      picks: [
        `[Hoop Dreams (1994 documentary)](http://www.imdb.com/title/tt0110057/)`,
      ],
    },
    {
      name: 'Ben Kelly',
      twitter: 'wanderview',
      links: [
        `[CORS for Concern](https://aerotwist.com/blog/cors-for-concern/) by [Paul Lewis](https://twitter.com/aerotwist)`,
        `[Infographic on Service Worker](https://github.com/delapuente/service-workers-101/)`,
      ],
      tips: [
        `Make sure you use waitUntil() for any async operations outside of respondWith(). Many examples will try to do things like cache resources after resolving the respondWith() promise without calling waitUntil(). The browser can kill the worker before these async operations complete. You may not see this in development, though, because the browser sometimes keeps the worker alive with devtools open.`,
      ],
      picks: [
        `[Sound Slice](https://www.soundslice.com/)`,
      ],
    },
  ],
  description: `
    A [Progressive Web App](https://developers.google.com/web/progressive-web-apps?hl=en) "uses modern web capabilities to deliver an app-like user experience. They evolve from pages in browser tabs to immersive, top-level apps, leveraging the web's low friction." The JavaScript Air website uses some of these techniques and technologies. Let's learn about this awesome stuff!
  `,
  hangoutId: 'cujm1df0s1715nfd2urvgkoacp8',
  youTubeId: 'JTVbjircIHA',
  podbeanId: 'd4tth-5f9f32',
  shortUrl: 'http://jsair.io/pwa',
  host: {
    links: [
      `[JavaScriptAir.com](https://javascriptair.com) is a progressive web app!`,
    ],
    tips: [
      `Avoid nesting your tests: [Nested Unit Tests: An Anti-Pattern](https://www.briefs.fm/3-minutes-with-kent/27)`,
    ],
    picks: [
      `[vaadin Progressive Web App Competition](https://vaadin.com/pwa-competition)`,
    ],
  },
}
