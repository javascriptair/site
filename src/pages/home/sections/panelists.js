import React from 'react'
import Person from '../../../components/person'

export default Panelists

function Panelists() {
  return (
    <section>
      <h2>Panelists</h2>
      <div className="person-group +space-children">
        <Panelist name="Dan Abramov" twitter="dan_abramov" />
        <Panelist name="Brian Lonsdorf" twitter="drboolean" />
        <Panelist name="Kyle Simpson" twitter="getify" />
        <Panelist name="Iheanyi Ekechukwu" twitter="kwuchu" />
        <Panelist name="Lin Clark" twitter="linclark" />
        <Panelist name="Matt Zabriskie" twitter="mzabriskie" />
        <Panelist name="Pam Selle" twitter="pamasaur" />
        <Panelist name="Tyler McGinnis" twitter="tylermcginnis33" />
      </div>
      <p className="+text-center">
        JavaScript Air has <a href="http://panelists.javascriptair.com">a panel</a> of
        some of the finest people the community has to offer
      </p>
    </section>
  )
}


function Panelist(props) {
  return <Person {...props} imgSrc={`resources/panelists/${props.twitter}.png`} />
}

