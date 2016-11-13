/* eslint complexity:[2, 7] */
import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {isEmpty} from 'lodash'

import {container as containerStyles} from '<styles>'

import Title from '../title'
import SponsorGroup from './sponsor-group'
import Sponsor from './sponsor'
import SponsorSubheading from './sponsor-subheading'

export default SponsorsSection

function SponsorsSection({
  goldSponsors = [],
  premierSponsor = {},
  silverSponsors = [],
}) {
  const {styles} = SponsorsSection
  return (
    <section className={css(styles.section)} id="sponsors">
      <div className={css(styles.container)}>
        <Title
          name="Sponsors"
          buttonText="Become a Sponsor"
          buttonUrl="http://jsair.io/sponsor-info"
        />
        <div>
          <SponsorSubheading title="Premier Sponsor" />
          {isEmpty(premierSponsor) ? null : <Sponsor {...premierSponsor} />}
        </div>
        {isEmpty(goldSponsors) ?
          null :
          <SponsorGroup
            sponsors={goldSponsors}
            title={`Gold Sponsor${goldSponsors.length === 1 ? '' : 's'}`}
          />
        }
        {isEmpty(silverSponsors) ?
          null :
          <SponsorGroup
            sponsors={silverSponsors}
            title={`Silver Sponsor${silverSponsors.length === 1 ? '' : 's'}`}
          />
        }
        <p className={css(styles.footnote)}>
          JavaScript Air is supported by
          some <a href="/contributors">awesome contributors</a>.
        </p>
      </div>
    </section>
  )
}

SponsorsSection.propTypes = {
  goldSponsors: PropTypes.array,
  premierSponsor: PropTypes.object,
  silverSponsors: PropTypes.array,
}

SponsorsSection.styles = StyleSheet.create({
  section: {backgroundColor: '#F2F2F2', overflow: 'hidden'},
  container: containerStyles,
  footnote: {
    lineHeight: '1.3em',
    '@media only screen and (min-width: 730px)': {
      textAlign: 'center',
    },
  },
})
