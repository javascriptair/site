import React from 'react'

export default SponsorsSection

function SponsorsSection({basicSponsors = [], premierSponsor = {}}) {
  return (
    <section className="sponsors-section">
      <div className="sponsors-section__container">
        <h2 className="sponsors-section__heading">Sponsors</h2>
        <h3 className="sponsors-section__subheading">Premier Sponsor</h3>
        <div>
          <Sponsor {...premierSponsor} />
        </div>
        <h3 className="sponsors-section__subheading">Gold Sponsors</h3>
        <div>
          {basicSponsors.map((s, i) => <Sponsor key={i} {...s} />)}
        </div>
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
