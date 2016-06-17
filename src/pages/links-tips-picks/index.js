import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {upToBig} from '<styles>/media-queries'
import Page from '<components>/page'
import HeaderBar from '<components>/header'
import ShowNotes from '../episode/sections/show-notes'

export default LinksTipsPicks

function LinksTipsPicks({nextEpisode, episodes}) {
  const {styles} = LinksTipsPicks
  return (
    <Page
      title="JavaScript Air links tips and picks"
    >
      <HeaderBar nextEpisode={nextEpisode} />
      <div className={`container ${css(styles.linksTipsPicksRoot)}`}>
        {episodes.filter(e => e.past).map(e =>{
          return (
            <div key={e.number} className={css(styles.episode)}>
              <h2><strong>{e.number}. {e.title}</strong> </h2>
              <ShowNotes episode={e} />
              <hr />
            </div>
            )
        })
      }
      </div>
    </Page>
  )
}

LinksTipsPicks.propTypes = {
  episodes: PropTypes.array,
  nextEpisode: PropTypes.object.isRequired,
}

LinksTipsPicks.styles = StyleSheet.create({
  linksTipsPicksRoot: {
    margin: '40px auto 100px',
    maxWidth: 1000,
    width: '90%',
    fontSize: 23,
  },
  episode: {
    marginBottom: '20px',
    [upToBig]: {padding: '16px 20px'},
  },
})
