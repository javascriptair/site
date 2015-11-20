import React from 'react'
import ReactDOMServer from 'react-dom/server'
import googleScript from './google-script'


/* eslint max-len:[2, 161] */ // TODO fix this
class App extends React.Component {
  render() {
    return (
      <html>
        <head lang="en">
          <title>JavaScript Air</title>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <meta name="google-site-verification" content="85n8ZBk_3hSeShlRmsVJXgDolakFG4UsMJgpy3mQyPs" />
          <link rel="shortcut icon" type="image/png" href="favicon.png"/>
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
            <p>
              The <strong>live</strong> broadcast podcast
              all about JavaScript
            </p>
            <p>
              Brought to you by
              <a href="https://egghead.io">Egghead.io</a>
            </p>
          </header>

          <hr />

          <section className="group-of-icons +space-children">
            <a href="http://audio.javascriptair.com/feed/" className="icon-podcast" title="Podcast RSS Feed"></a>
            <a href="http://video.javascriptair.com" className="icon-youtube" title="YouTube Channel"></a>
            <a href="http://itunes.javascriptair.com" className="icon-apple" title="iTunes Podcast"></a>
          </section>

          <hr />

          <section>
            <h2>Upcoming Episodes</h2>
            <div className="episodes">
              <div className="episode">
                <h3>
                  <a href="https://plus.google.com/events/c39cuc7ueppus41ajobpr9qt6cg">
                    The past, present, and future of JavaScript
                  </a>
                  <br />
                  <small>
                    Wednesday, December 9th, 2015 at 12:00 PM (CT)
                  </small>
                </h3>
                <div className="person-group +space-children">
                  <div className="person">
                    <a href="https://twitter.com/brendaneich">
                      <img src="episodes/2015-12-09/brendaneich.png" alt="Brendan Eich Profile Picture" />
                      <p>Brendan Eich<br />@brendaneich</p>
                    </a>
                  </div>
                </div>
                <p>
                  Kicking off JavaScript Air with a bang with our first guest Brendan Eich
                  (original creator of JavaScript) to talk about the past, present, and future of JavaScript.
                </p>
              </div>
            </div>
          </section>

          <hr />

          <section>
            <h2>Host</h2>
            <div className="person-group">
              <div className="person">
                <a href="https://twitter.com/kentcdodds">
                  <img src="resources/kentcdodds.png" alt="Kent C. Dodds Profile Picture" />
                  <p>Kent C. Dodds<br />@kentcdodds</p>
                </a>
              </div>
            </div>
            <p className="+text-center">
              JavaScript Air is hosted by
              <a href="https://egghead.io/instructors/kentcdodds">egghead.io</a>
              instructor Kent C. Dodds
            </p>
          </section>

          <hr />

          <section>
            <h2>Panelists</h2>
            <div className="person-group +space-children">
              <div className="person">
                <a href="https://twitter.com/dan_abramov">
                  <img src="resources/panelists/dan_abramov.png" alt="Dan Abramov Profile Picture" />
                  <p>Dan Abramov<br />@dan_abramov</p>
                </a>
              </div>
              <div className="person">
                <a href="https://twitter.com/drboolean">
                  <img src="resources/panelists/drboolean.png" alt="Brian Lonsdorf Profile Picture" />
                  <p>Brian Lonsdorf<br />@drboolean</p>
                </a>
              </div>
              <div className="person">
                <a href="https://twitter.com/getify">
                  <img src="resources/panelists/getify.png" alt="Kyle Simpson Profile Picture" />
                  <p>Kyle Simpson<br />@getify</p>
                </a>
              </div>
              <div className="person">
                <a href="https://twitter.com/kwuchu">
                  <img src="resources/panelists/kwuchu.png" alt="Iheanyi Ekechukwu Profile Picture" />
                  <p>Iheanyi Ekechukwu<br />@kwuchu</p>
                </a>
              </div>
              <div className="person">
                <a href="https://twitter.com/linclark">
                  <img src="resources/panelists/linclark.png" alt="Lin Clark Profile Picture" />
                  <p>Lin Clark<br />@linclark</p>
                </a>
              </div>
              <div className="person">
                <a href="https://twitter.com/mzabriskie">
                  <img src="resources/panelists/mzabriskie.png" alt="Matt Zabriskie Profile Picture" />
                  <p>Matt Zabriskie<br />@mzabriskie</p>
                </a>
              </div>
              <div className="person">
                <a href="https://twitter.com/pamasaur">
                  <img src="resources/panelists/pamasaur.png" alt="Pam Selle Profile Picture" />
                  <p>Pam Selle<br />@pamasaur</p>
                </a>
              </div>
              <div className="person">
                <a href="https://twitter.com/tylermcginnis33">
                  <img src="resources/panelists/tylermcginnis33.png" alt="Tyler McGinnis Profile Picture" />
                  <p>Tyler McGinnis<br />@tylermcginnis33</p>
                </a>
              </div>
            </div>
            <p className="+text-center">
              JavaScript Air has
              <a href="http://panelists.javascriptair.com">a panel</a>
              of some of the most
              awesome people the community has to offer
            </p>
          </section>

          <hr />

          <section className="group-of-icons +space-children">
            <a href="https://twitter.com/JavaScriptAir" className="icon-twitter" title="Twitter Profile"></a>
            <a href="https://plus.google.com/105493143005968326308" className="icon-google-plus" title="Google+ Page"></a>
            <a href="https://facebook.com/JavaScriptAir" className="icon-facebook2" title="Facebook Page"></a>
          </section>
          <script dangerouslySetInnerHTML={googleScript} />
        </body>
      </html>
    )
  }
}

const string = ReactDOMServer.renderToStaticMarkup(<App />)

console.log(string) // eslint-disable-line no-console
