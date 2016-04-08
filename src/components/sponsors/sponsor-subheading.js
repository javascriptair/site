import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'

export default SponsorSubheading

function SponsorSubheading({title}) {
  const {styles} = SponsorSubheading
  return (
    <h3 className={css(styles.subheading)}>{title}</h3>
  )
}

SponsorSubheading.propTypes = {
  title: PropTypes.string,
}

SponsorSubheading.styles = StyleSheet.create({
  subheading: {
    fontSize: '1.6em',
    lineHeight: 1.3,
    '@media only screen and (max-width: 530px)': {
      textAlign: 'center',
    },
  },
})
