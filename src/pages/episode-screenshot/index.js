import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import Episode from '<components>/episode'
export default EpisodeScreenshotPage

function EpisodeScreenshotPage({episode}) {
  const {styles} = EpisodeScreenshotPage
  const hackStyles = `
    [class^="buttonRoot_"],
    [class^="bottomWrapper_"] {
      display: none;
    }
  `
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,300,100,600,700,700italic,600italic,400italic,300italic,100italic" // eslint-disable-line
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="/styles.dist.css" />
        <style>/* aphrodite-content */</style>
        <style dangerouslySetInnerHTML={{__html: hackStyles}} />
      </head>
      <body className={css(styles.body)}>
        <div className={css(styles.episodeWrapper)}>
          <Episode episode={episode} />
        </div>
      </body>
    </html>
  )
}

EpisodeScreenshotPage.propTypes = {
  episode: PropTypes.object.isRequired,
}

EpisodeScreenshotPage.styles = StyleSheet.create({
  body: {
    width: 1200,
    margin: '0 auto',
    padding: 1,
    height: 600,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  episodeWrapper: {
    margin: '60px 60px 98px 60px',
    minHeight: 'initial',
  },
})
