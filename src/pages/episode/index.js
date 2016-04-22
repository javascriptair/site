import {PropTypes} from 'react'
import deindent from 'deindent'
import marked from 'marked'
import {StyleSheet, css} from 'aphrodite'

import TwitterWidgetScript from '../../components/scripts/twitter-widget'

import Page from '../../components/page'
import TwitterFeed from './twitter-feed'

import Header from './sections/header'
import AudioSection from './sections/audio'
import VideoSection from './sections/video'
import ShowNotes from './sections/show-notes'
import TranscriptSection from './sections/transcript'
import SponsorsSection from '../../components/sponsors'


export default EpisodePage

function EpisodePage({episode, sponsors}) {
  const {numberDisplay, title, description, past} = episode
  const descriptionHTMLString = marked(deindent(description))
  return (
    <Page
      title={`JavaScript Air | ${title}`}
      description={getPageDescription(numberDisplay, descriptionHTMLString)}
    >
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
  sponsors: PropTypes.object,
}

function getPageDescription(numberDisplay, descriptionHTML) {
  const description = descriptionHTML
    .replace(/\n\n/g, 'DOUBLE_NEW_LINE')
    .replace(/\n/g, ' ')
    .replace(/DOUBLE_NEW_LINE/g, '\n\n')
    .trim()
  return `Episode ${numberDisplay} of the live JavaScript broadcast podcast. ${description}`
}

function PastEpisodeStuff({episodeData, sponsors}) {
  const {podbeanId, youTubeId, transcriptHTML} = episodeData
  return (
    <div>
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

function hasShowNotes(episodeData) {
  const {guests, host, panelists} = episodeData
  const guestsHostAndPanelists = [...guests, host, ...panelists]
  return guestsHostAndPanelists.some(p => {
    const {links, tips, picks} = p
    return links.length + tips.length + picks.length > 0
  })
}
