import React from 'react'
import {chunk} from 'lodash'

export default SponsorsSection

function SponsorsSection({
  goldSponsors = [],
  premierSponsor = {},
  silverSponsors = [],
}) {
  return (
    <section id="sponsors">
      <h2>Sponsors</h2>
      <h3>Premier Sponsor</h3>
      <div className="sponsor-group +space-children +margin-bottom-large">
        <Sponsor {...premierSponsor} />
      </div>
      <hr />
      <SponsorGroup
        sponsors={goldSponsors}
        title={`Gold Sponsor${goldSponsors.length === 1 ? '' : 's'}`}
      />
      <hr />
      <SponsorGroup
        sponsors={silverSponsors}
        title={`Silver Sponsor${silverSponsors.length === 1 ? '' : 's'}`}
      />
      <p className="+text-center">
        JavaScript Air is <a href="mailto:javascriptair+sponsor@gmail.com">sponsored</a> by
        some <a href="http://sponsors.javascriptair.com/">awesome companies</a>.
      </p>
    </section>
  )
}


function Sponsor({name, link, tagline = '', imgSrc}) {
  imgSrc = imgSrc || `sponsors/${name}.png`
  return (
    <div className="sponsor">
      <a href={link} alt={`${name} site`}>
        <img src={imgSrc} />
        <p>{name}<br />{tagline}</p>
      </a>
    </div>
  )
}

function SponsorGroup({sponsors, title}) {
  const sponsorsPerRow = sponsors.length === 4 ? 2 : 1
  const rows = Math.ceil(sponsors.length / sponsorsPerRow)
  const chunkedSponsors = chunk(sponsors, rows)
  return (
    <div>
      <h3>{title}</h3>
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

