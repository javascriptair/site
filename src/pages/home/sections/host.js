import React from 'react'
import Person from '../../../components/person'

export default Host

function Host() {
  return (
    <section id="host">
      <div className="person-group">
        <Person name="Kent C. Dodds" twitter="kentcdodds" imgSrc="resources/kentcdodds.png"
          link="https://twitter.com/kentcdodds"/>
      </div>
      <p className="panelists-section__caption">
        <a className="panelists-section__link"
          href="https://egghead.io/instructors/kentcdodds">Egghead.io</a> instructor Kent C. Dodds
        is your host
      </p>
    </section>
  )
}
