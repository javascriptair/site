import React from 'react'

export default SponsorsSection

function SponsorsSection({goldSponsors = [], premierSponsor = {}}) {
  return (
    <section id="sponsors">
      <h2>Sponsors</h2>
      <div className="sponsor-group +space-children +margin-bottom-large">
        <Sponsor {...premierSponsor} />
      </div>
      <div className="sponsor-group +space-children">
        {goldSponsors.map((s, i) => <Sponsor key={i} {...s} />)}
      </div>
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
