import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {chunk} from 'lodash'
import SponsorSubheading from './sponsor-subheading'

import Sponsor from './sponsor'

export default SponsorGroup

function SponsorGroup({sponsors, title}) {
  if (!sponsors.length) {
    return <noscript />
  }
  const {styles} = SponsorGroup
  const sponsorsPerRow = sponsors.length === 4 ? 2 : 1
  const rows = Math.ceil(sponsors.length / sponsorsPerRow)
  const chunkedSponsors = chunk(sponsors, rows)
  return (
    <div>
      <hr />
      <SponsorSubheading title={title} />
      {
        chunkedSponsors.map((rowSponsors, index) => {
          return (
            <div className={css(styles.group)} key={index}>
              {rowSponsors.map((s, i) => <Sponsor key={i} {...s} />)}
            </div>
          )
        })
      }
    </div>
  )
}

SponsorGroup.propTypes = {
  sponsors: PropTypes.array,
  title: PropTypes.string,
}

SponsorGroup.styles = StyleSheet.create({
  group: {display: 'flex'},
})
