import GoogleAnalyticsScript from './scripts/google-analytics'
import Functionize from './scripts/functionize'
import StartServiceWorker from './scripts/start-service-worker'
import striptags from 'striptags'

export default Page

function Page({
  children,
  title = 'JavaScript Air',
  description = 'The live JavaScript podcast all about JavaScript and the web platform. Available on YouTube, iTunes, and an RSS audio feed',
} = {}) {
  /* eslint max-len:0 */
  return (
    <html>
      <head lang="en">
        <title>{striptags(title)}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="85n8ZBk_3hSeShlRmsVJXgDolakFG4UsMJgpy3mQyPs" />
        <meta name="theme-color" content="#efdd4f" />
        <meta name="author" content="Kent C. Dodds" />
        <meta name="description" content={striptags(description)} />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon.ico"
        />
        <link rel="stylesheet" href="/styles.dist.css" />
        <link rel="manifest" href="/resources/manifest/manifest.json" />
      </head>
      <body>
        {children}

        <GoogleAnalyticsScript />
        <Functionize />
        <StartServiceWorker />
      </body>
    </html>
  )
}
