import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import Page from '<components>/page'
import HeaderBar from '<components>/header'
import EpisodeEmail from '<other>/components/episode-email'

export default EpisodeEmailPage

function EpisodeEmailPage({episode, nextEpisode, sponsors}) {
  const {styles} = EpisodeEmailPage
  return (
    <Page
      title={`JavaScript Air Newsletter | ${episode.taglessTitle}`}
      description={episode.metaDescription}
    >
      <HeaderBar nextEpisode={nextEpisode} />
      <div className={css(styles.episodeEmailRoot)}>
        <EpisodeEmail episode={episode} sponsors={sponsors} />
      </div>
    </Page>
  )
}

EpisodeEmailPage.propTypes = {
  episode: PropTypes.object.isRequired,
  nextEpisode: PropTypes.object.isRequired,
  sponsors: PropTypes.object.isRequired,
}

EpisodeEmailPage.styles = StyleSheet.create({
  episodeEmailRoot: {
    width: 600,
    margin: '40px auto 100px',
    fontSize: 23,
  },
})
