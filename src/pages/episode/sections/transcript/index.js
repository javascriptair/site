import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'

export default Transcript

function Transcript({transcriptHTML}) {
  const {styles} = Transcript
  if (!transcriptHTML) {
    return <noscript />
  } else {
    return (
      <section id="transcript" className="episode-page__episode-transcript">
        <h3 className={css(styles.headerSpacing)}>Transcript</h3>
        <div dangerouslySetInnerHTML={transcriptHTML}></div>
      </section>
    )
  }
}

Transcript.propTypes = {
  transcriptHTML: PropTypes.object,
}

Transcript.styles = StyleSheet.create({
  headerSpacing: {
    marginBottom: 40,
  },
})
