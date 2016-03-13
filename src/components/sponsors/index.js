import React from 'react'

import Title from '../title.js'
import SponsorGroup from './sponsor-group'
import Sponsor from './sponsor'

export default SponsorsSection

function SponsorsSection({
  goldSponsors = [],
  premierSponsor = {},
  silverSponsors = [],
}) {
  return (
    <section className="sponsors-section" id="sponsors">
      <div className="sponsors-section__container">
        <Title name="Sponsors" />
        <h3 className="sponsors-section__subheading">Premier Sponsor</h3>
        <div>
          <Sponsor {...premierSponsor} />
        </div>
        <SponsorGroup
          className="sponsors-section__gold-sponsors"
          sponsors={goldSponsors}
          title={`Gold Sponsor${goldSponsors.length === 1 ? '' : 's'}`}
        />
        <SponsorGroup
          className="sponsors-section__silver-sponsors"
          sponsors={silverSponsors}
          title={`Silver Sponsor${silverSponsors.length === 1 ? '' : 's'}`}
        />
        <p className="sponsors-section__footnote">
          JavaScript Air is supported by
          some <a href="/contributors">awesome contributors</a>.
        </p>
      </div>
    </section>
  )
}


