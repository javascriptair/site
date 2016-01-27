import React from 'react'
import Person from '../../../components/person'
import Decor from '../../../components/decor'

export default Panelists

function PanelistsList({panelists}) {
  return (
    <div className="panelists-list">
      {panelists.map((p, i) => <Person className="panelists-list__panelist" {...p} key={i} />)}
    </div>
  )
}

function Panelists({panelists}) {
  return (
    <section className="panelists-section" id="panelists">
      <Decor />
      <div className="panelists-section__container">
        <h2 className="panelists-section__heading">Panelists</h2>
        <PanelistsList panelists={panelists} />
        <p className="panelists-section__caption">
          JavaScript Air has <a href="http://panelists.javascriptair.com">a panel</a> of
          some of the finest people the community has to offer
        </p>
      </div>
    </section>
  )
}
