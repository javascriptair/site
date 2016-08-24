import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'

import Page from '<components>/page'
import SponsorsSection from '<components>/sponsors'
import HeaderBar from '<components>/header'

import Header from './sections/header'
import AudioSection from './sections/audio'
import VideoSection from './sections/video'
import ShowNotes from './sections/show-notes'
import TranscriptSection from './sections/transcript'


export default EpisodePage

function EpisodePage({episode, nextEpisode, sponsors}) {
  const {styles} = EpisodePage
  const {taglessTitle, metaDescription, past} = episode
  const showEpisodeBox = episode.number !== nextEpisode.number
  return (
    <Page
      title={`JavaScript Air | ${taglessTitle}`}
      description={metaDescription}
      headTags={getHeadTags(episode)}
    >
      <HeaderBar nextEpisode={nextEpisode} showEpisodeBox={showEpisodeBox} />
      <div className={css(styles.episodePage)}>
        <Header
          episode={episode}
        />
        {
          past ? (
            <PastEpisodeStuff episodeData={episode} sponsors={sponsors} />
          ) : (
            <FutureEpisodeStuff episodeData={episode} sponsors={sponsors} />
          )
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

EpisodePage.styles = StyleSheet.create({
  episodePage: {
    margin: '40px auto 100px',
    maxWidth: 1000,
    width: '90%',
  },
})

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
            <VideoSection past={true} youTubeId={youTubeId} />
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
  const {youTubeId, calendarUrl} = episodeData
  return (
    <div>
      {
        youTubeId ? (
          <div>
            <hr />
            <div className={css(styles.sectionSpacing)}>
              <VideoSection
                youTubeId={youTubeId}
                calendarUrl={calendarUrl}
                label="Watch Live"
              />
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
  sectionSpacing: {
    marginBottom: 40,
  },
})

function getHeadTags(episode) {
  /* eslint react/jsx-max-props-per-line:0, max-len:0 */
  const {metaDescription, page, taglessTitle, date, youTubeId, past} = episode
  const episodeUrl = `https://javascriptair.com${page}`
  const image = `${episodeUrl}/screenshot.png`
  const youTubeEmbed = `https://www.youtube.com/embed/${youTubeId}`
  const youTubeUrl = `https://www.youtube.com/v/${youTubeId}`
  return [
    // Google
    <meta key="g1" name="description" content={metaDescription} />,
    <meta key="g2" name="keywords" content={taglessTitle} />,
    <meta key="g3" name="author" content="JavaScript Air" />,
    <meta key="g4" name="copyright" content={new Date().getFullYear()} />,
    <meta key="g5" name="application-name" content="JavaScript Air Podcast" />,
    // Facebook
    <meta key="f1" property="og:title" content={taglessTitle} />,
    <meta key="f2" property="og:type" content="video" />,
    <meta key="f3" property="og:image" content={image} />,
    <meta key="f4" property="og:url" content={episodeUrl} />,
    <meta key="f5" property="og:description" content={metaDescription} />,
    <meta key="f6" property="og:site_name" content="JavaScript Air" />,
    <meta key="f7" property="video:release_date" content={date} />,
    <meta key="f8" property="og:video:url" content={youTubeEmbed} />,
    <meta key="f9" property="og:video:secure_url" content={youTubeEmbed} />,
    <meta key="f10" property="og:video:type" content="text/html" />,
    <meta key="f11" property="og:video:width" content="1280" />,
    <meta key="f12" property="og:video:height" content="720" />,
    <meta key="f13" property="og:video:url" content={`${youTubeUrl}?version=3&amp;autohide=1`} />,
    <meta key="f14" property="og:video:secure_url" content={`${youTubeUrl}?version=3&amp;autohide=1`} />,
    <meta key="f15" property="og:video:type" content="application/x-shockwave-flash" />,
    <meta key="f16" property="og:video:width" content="1280" />,
    <meta key="f17" property="og:video:height" content="720" />,
    // Twitter
    <meta key="t1" name="twitter:card" content={past ? 'player' : 'summary_large_image'} />,
    <meta key="t2" name="twitter:title" content={taglessTitle} />,
    <meta key="t3" name="twitter:description" content={metaDescription} />,
    <meta key="t4" name="twitter:image" content={image} />,
    <meta key="t5" name="twitter:image:alt" content="JavaScript Air episode card with information about the guests, the episode description, and the episode date and time" />,
    <meta key="t6" name="twitter:site" content="@JavaScriptAir" />,
    <meta key="t7" name="twitter:creator" content="@JavaScriptAir" />,
    <meta key="t8" name="twitter:player" content={youTubeEmbed} />,
    <meta key="t9" name="twitter:player:width" content="1280" />,
    <meta key="t10" name="twitter:player:height" content="720" />,
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
