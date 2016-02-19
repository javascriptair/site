import React from 'react'
import {chunk} from 'lodash'

import Title from './title.js'

export default SponsorsSection

function SponsorsSection({
  goldSponsors = [],
  premierSponsor = {},
  silverSponsors = [],
}) {
  return (
    <section className="sponsors-section">
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
          JavaScript Air is <a href="mailto:javascriptair+sponsor@gmail.com">sponsored</a> by
          some <a href="http://sponsors.javascriptair.com/">awesome companies</a>.
        </p>
      </div>
    </section>
  )
}

function Sponsor({name, link, tagline = '', imgSrc}) {
  imgSrc = imgSrc || `sponsors/${name}.png`
  return (
    <a className="sponsor" href={link} alt={`${name} site`}>
      <img className="sponsor__logo" src={imgSrc} />
      <span className="sponsor__name">{name}</span>
      <span className="sponsor__tagline">{tagline}</span>
    </a>
  )
}

function SponsorGroup({sponsors, title}) {
  if (!sponsors.length) {
    return <noscript />
  }
  const sponsorsPerRow = sponsors.length === 4 ? 2 : 1
  const rows = Math.ceil(sponsors.length / sponsorsPerRow)
  const chunkedSponsors = chunk(sponsors, rows)
  return (
    <div>
      <hr />
      <h3 className="sponsors-section__subheading">{title}</h3>
      {
        chunkedSponsors.map((rowSponsors, index) => {
          return (
            <div className="sponsor-group +space-children" key={index}>
              {rowSponsors.map((s, i) => <Sponsor key={i} {...s} />)}
            </div>
          )
        })
      }
    </div>
  )
}

