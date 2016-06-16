import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import Episode from '<components>/episode'

export default Header

function Header({episode}) {
  const {styles} = Header

  return (
    <div className={css(styles.episodeWrapper)}>
      <Episode episode={episode} index={episode.number} />
    </div>
  )
}

Header.propTypes = {
  episode: PropTypes.object.isRequired,
}

Header.styles = StyleSheet.create({
  episodeWrapper: {marginTop: 50, textAlign: 'center'},
})
