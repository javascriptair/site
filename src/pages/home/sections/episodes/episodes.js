import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {sortBy} from 'lodash'
import Episode from '<components>/episode'
import {upToBig} from '<styles>/media-queries'
import Title from '<components>/title'

import EpisodeSmall from './episode-small'

export default EpisodesSection

function EpisodesSection({future, past}) {

  const futureEpisodes = sortBy(future, 'date')
  const nearFutureEpisodes = futureEpisodes.slice(0, 3)
  const farFutureEpisodes = futureEpisodes.splice(3, futureEpisodes.length)

  const pastEpisodes = sortBy(past, 'date').reverse()
  const {styles} = EpisodesSection

  return (
    <section id="episodes" className={css(styles.episodesRoot)}>
      <div className={css(styles.episodesContainer)}>

        <Title
          name={lamePlural('Upcoming Episode', nearFutureEpisodes)}
          buttonText="Suggest an Episode"
          buttonUrl="http://suggest.javascriptair.com"
        />

        <div>
          {nearFutureEpisodes.map((e, i) => (
            <Episode
              episode={e}
              key={i}
              index={i}
            />
          ))}
        </div>

        <FutureEpisodes episodes={farFutureEpisodes} />
        <PastEpisodes episodes={pastEpisodes} />

      </div>
    </section>
  )
}

EpisodesSection.propTypes = {
  future: PropTypes.array.isRequired,
  past: PropTypes.array.isRequired,
}

EpisodesSection.styles = StyleSheet.create({
  episodesRoot: {
    width: '100%',
    backgroundColor: '#e4e4e4',
  },
  episodesContainer: {
    margin: '0 auto',
    width: '1000px',
    paddingBottom: '50px',
    backgroundColor: '#e4e4e4',
    [upToBig]: {
      width: '100%',
    },
  },
})

function FutureEpisodes({episodes = []}) {
  if (!episodes.length) {
    return <noscript />
  }
  return (
    <div>
      <Title name={lamePlural('Future Episode', episodes)} />
      <div>
        {mapToSmallEpisodes(episodes)}
      </div>
    </div>
  )
}

FutureEpisodes.propTypes = {
  episodes: PropTypes.array,
}

function PastEpisodes({episodes = []}) {
  if (!episodes.length) {
    return <noscript />
  }
  return (
    <div>
      <Title name="Past Episodes" id="previous-episodes" />
      <div>
        {mapToSmallEpisodes(episodes)}
      </div>
    </div>
  )
}

PastEpisodes.propTypes = {
  episodes: PropTypes.array,
}

function mapToSmallEpisodes(episodes) {
  return episodes.map((e, i) => <EpisodeSmall episodeData={e} key={i} />)
}

function lamePlural(string, array) {
  return string + (array.length === 1 ? '' : 's')
}
