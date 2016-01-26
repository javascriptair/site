import React from 'react'
import Person from '../../../components/person'

export default Panelists

function Panelists({panelists}) {
  return (
    <section className="panelists" id="panelists">
      <div className="panelists__container">
        <h2>Panelists</h2>
        <div className="person-group +space-children">
          {panelists.map((p, i) => <Person {...p} key={i} />)}
        </div>
        <p className="+text-center">
          JavaScript Air has <a href="http://panelists.javascriptair.com">a panel</a> of
          some of the finest people the community has to offer
        </p>
      </div>
    </section>
  )
}
