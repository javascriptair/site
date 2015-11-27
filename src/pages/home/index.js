import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {groupBy} from 'lodash'
import UglifyJS from 'uglify-js'
import moment from 'moment'

import Person from '../../components/person'
import PreviousEpisodeSection from './sections/previous-episodes'
import EpisodesSection from './sections/episodes'



import episodes from '../../../episodes'

const today = moment()
const yesterday = today.subtract(1, 'day')
const episodeGroups = groupBy(episodes, e => {
  return yesterday.diff(e.date) < 0 ? 'future' : 'past'
})


/* eslint max-len:[2, 161] */ // TODO fix this
function App() {
  return (
    <html>
      <head lang="en">
        <title>JavaScript Air</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="85n8ZBk_3hSeShlRmsVJXgDolakFG4UsMJgpy3mQyPs" />
        <meta name="theme-color" content="#155674" />
        <link rel="shortcut icon" type="image/png" href="favicon.ico"/>
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="resources/font/font.css" />
      </head>
      <body>
        <header className="+text-center">
          <div id="logo">
            <a href="https://twitter.com/JavaScriptAir">
              <img src="resources/logo.png" />
            </a>
          </div>
          <h1>JavaScript Air</h1>
          <p id="sub-title">
            The <strong>live</strong> broadcast podcast
            all about JavaScript
          </p>
          <p>
            Brought to you by <a href="https://egghead.io">Egghead.io</a>
          </p>
        </header>

        <hr />

        <section className="group-of-icons +space-children">
          <a href="http://audio.javascriptair.com/feed/" className="icon-podcast" title="Podcast RSS Feed"></a>
          <a href="http://video.javascriptair.com" className="icon-youtube" title="YouTube Channel"></a>
          <a href="http://itunes.javascriptair.com" className="icon-apple" title="iTunes Podcast"></a>
        </section>

        <hr />

        <EpisodesSection episodes={episodeGroups.future} />

        <hr />

        <PreviousEpisodeSection episodes={episodeGroups.past} />

        {episodes.past ? <hr /> : ''}

        <section>
          <h2>Host</h2>
          <div className="person-group">
            <Person name="Kent C. Dodds" twitter="kentcdodds" imgSrc="resources/kentcdodds.png" />
          </div>
          <p className="+text-center">
            <a href="https://egghead.io/instructors/kentcdodds">Egghead.io</a> instructor Kent C. Dodds
            is your host
          </p>
        </section>

        <hr />

        <section>
          <h2>Panelists</h2>
          <div className="person-group +space-children">
            <Panelist name="Dan Abramov" twitter="dan_abramov" />
            <Panelist name="Brian Lonsdorf" twitter="drboolean" />
            <Panelist name="Kyle Simpson" twitter="getify" />
            <Panelist name="Iheanyi Ekechukwu" twitter="kwuchu" />
            <Panelist name="Lin Clark" twitter="linclark" />
            <Panelist name="Matt Zabriskie" twitter="mzabriskie" />
            <Panelist name="Pam Selle" twitter="pamasaur" />
            <Panelist name="Tyler McGinnis" twitter="tylermcginnis33" />
          </div>
          <p className="+text-center">
            JavaScript Air has <a href="http://panelists.javascriptair.com">a panel</a> of
            some of the finest people the community has to offer
          </p>
        </section>

        <hr />

        <section className="group-of-icons +space-children">
          <a href="https://twitter.com/JavaScriptAir" className="icon-twitter" title="Twitter Profile"></a>
          <a href="https://plus.google.com/105493143005968326308" className="icon-google-plus" title="Google+ Page"></a>
          <a href="https://facebook.com/JavaScriptAir" className="icon-facebook2" title="Facebook Page"></a>
        </section>

        <script dangerouslySetInnerHTML={getGoogleAnalyticsScript()} />
        <script dangerouslySetInnerHTML={getFeatureShowScript()} />
      </body>
    </html>
  )
}

const string = ReactDOMServer.renderToStaticMarkup(<App />)

console.log(string) // eslint-disable-line no-console


function getGoogleAnalyticsScript() {
  return {
    __html: UglifyJS.minify(`
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

      ga('create', 'UA-70331623-1', 'auto');
      ga('require', 'displayfeatures');
      ga('send', 'pageview');
    `, {fromString: true}).code,
  }
}

function getFeatureShowScript() {
  return {
    __html: UglifyJS.minify(
      featureShow.toString(),
      {fromString: true}
    ).code,
  }
}

function Panelist(props) {
  return <Person {...props} imgSrc={`resources/panelists/${props.twitter}.png`} />
}

/* eslint-disable */
function featureShow(index) {
  // get featured episode
  var episodes = document.body.querySelectorAll('.episode')
  var feature = episodes[index]

  // replace body content with feature episode
  // document.body.innerHTML = feature.outerHTML

  // remove all prose
  Array.from(feature.querySelectorAll('.description'))
    .forEach(e => e.parentNode.removeChild(e))

  // style stuff
  var styles = `
    .episode {
      text-align: center;
      margin-top: 400px;
      margin-bottom: 1000px;
      zoom: 1.6;
    }
    a { text-decoration: none; }
    h3 { font-size: 40px; }
  `

  var container = document.createElement('div')
  container.innerHTML = `
    ${feature.outerHTML}
    <style>${styles}</style>
  `

  document.body.innerHTML = container.outerHTML
}
/* eslint-enable */
