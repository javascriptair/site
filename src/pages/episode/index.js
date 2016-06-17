import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'

import TwitterWidgetScript from '<components>/scripts/twitter-widget'
import Page from '<components>/page'
import SponsorsSection from '<components>/sponsors'
import HeaderBar from '<components>/header'

import TwitterFeed from './twitter-feed'

import Header from './sections/header'
import AudioSection from './sections/audio'
import VideoSection from './sections/video'
import ShowNotes from './sections/show-notes'
import TranscriptSection from './sections/transcript'


export default EpisodePage

function EpisodePage({episode, nextEpisode, sponsors}) {
  const {taglessTitle, metaDescription, past} = episode
  return (
    <Page
      title={`JavaScript Air | ${taglessTitle}`}
      description={metaDescription}
      headTags={getHeadTags(episode)}
    >
      <HeaderBar nextEpisode={nextEpisode} />
      <div className="episode-page container">
        <Header
          episode={episode}
        />
        {
          past ?
            <PastEpisodeStuff episodeData={episode} sponsors={sponsors} /> :
              <FutureEpisodeStuff episodeData={episode} sponsors={sponsors} />
        }
      </div>
    </Page>
  )
}

EpisodePage.propTypes = {
  episode: PropTypes.object,
  nextEpisode: PropTypes.object,
  sponsors: PropTypes.object,
}

function PastEpisodeStuff({episodeData, sponsors}) {
  const {podbeanId, youTubeId, transcriptHTML} = episodeData
  return (
    <div style={{fontSize: 23}}>
      {
        podbeanId ? (
          <div>
            <hr />
            <AudioSection podbeanId={podbeanId} />
          </div>
        ) : ''
      }
      {
        youTubeId ? (
          <div>
            <hr />
            <VideoSection youTubeId={youTubeId} />
          </div>
        ) : ''
      }
      <hr />
      <SponsorsSection {...sponsors} />
      <hr />
      <ShowNotes episode={episodeData} />
      <hr />
      <TranscriptSection transcriptHTML={transcriptHTML} />
    </div>
  )
}

PastEpisodeStuff.propTypes = {
  episodeData: PropTypes.object,
  sponsors: PropTypes.object,
}

function FutureEpisodeStuff({episodeData, sponsors}) {
  const {styles} = FutureEpisodeStuff
  const {youTubeId, hangoutUrl} = episodeData
  return (
    <div>
      {
        youTubeId ? (
          <div>
            <hr />
            <div className="+margin-bottom-large">
              <VideoSection
                youTubeId={youTubeId}
                hangoutUrl={hangoutUrl}
                label="Watch Live"
              />
            </div>

            <div className={css(styles.twitterFeedContainer)}>
              <TwitterFeed
                widgetId="675885424049393664"
                linkTo="https://twitter.com/hashtag/JavaScriptAir"
              >
                Tweet about #JavaScriptAir
              </TwitterFeed>

              <TwitterFeed
                widgetId="675879000950988805"
                linkTo="https://twitter.com/hashtag/jsAirQuestion"
              >
                Ask a #jsAirQuestion
              </TwitterFeed>
              <TwitterWidgetScript />
            </div>
          </div>
        ) : ''
      }
      {
        hasShowNotes(episodeData) ? (
          <div>
            <hr />
            <ShowNotes episode={episodeData} />
          </div>
        ) : null
      }
      <hr />
      <SponsorsSection {...sponsors} />
    </div>
  )
}

FutureEpisodeStuff.propTypes = {
  episodeData: PropTypes.object,
  sponsors: PropTypes.object,
}

FutureEpisodeStuff.styles = StyleSheet.create({
  twitterFeedContainer: {
    '@media only screen and (min-width: 803px)': {
      display: 'flex',
    },
  },
})

function getHeadTags(episode) {
  /* eslint react/jsx-max-props-per-line:0 */
  const {metaDescription, page, taglessTitle} = episode
  const episodeUrl = `https://javascriptair.com${page}`
  const image = `${episodeUrl}/screenshot.png`
  return [
    // Google
    <meta key="g1" name="description" content={metaDescription} />,
    <meta key="g2" name="keywords" content={taglessTitle} />,
    <meta key="g3" name="author" content="JavaScript Air" />,
    <meta key="g4" name="copyright" content={new Date().getFullYear()} />,
    <meta key="g5" name="application-name" content="JavaScript Air Podcast" />,
    // Facebook
    <meta key="f1" property="og:title" content={taglessTitle} />,
    <meta key="f2" property="og:type" content="podcast" />,
    <meta key="f3" property="og:image" content={image} />,
    <meta key="f4" property="og:url" content={episodeUrl} />,
    <meta key="f5" property="og:description" content={metaDescription} />,
    // Twitter
    <meta key="t1" name="twitter:card" content="summary" />,
    <meta key="t2" name="twitter:title" content={taglessTitle} />,
    <meta key="t3" name="twitter:description" content={metaDescription} />,
    <meta key="t4" name="twitter:image" content={image} />,
  ]
}

function hasShowNotes(episodeData) {
  const {guests, host, panelists} = episodeData
  const guestsHostAndPanelists = [...guests, host, ...panelists]
  return guestsHostAndPanelists.some(p => {
    const {links, tips, picks} = p
    return links.length + tips.length + picks.length > 0
  })
}
