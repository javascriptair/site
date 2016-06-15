import Markdown from './markdown'
import * as utils from '<utils>/utils'
import Person from './person'
import personPropTypes from './prop-types/person'

export default LinksPicksTips

function LinksPicksTips({person}) {
  const {links, tips, picks} = person
  const nothing = !links.length && !tips.length && !picks.length
  const notesSections = [
    {label: 'Links', notes: links},
    {label: 'Tips', notes: tips},
    {label: 'Picks', notes: picks},
  ]

  return (
    <div>
      <Person {...person} />
      {nothing ? ': No links, tips, or picks this week' : ''}
      <ul>
        {
          notesSections.map((section, index) => {
            if (!section.notes.length) {
              return ''
            }
            return (
              <li key={index}>
                {`${section.label}: `}
                <Markdown>
                  {utils.displayListify(section.notes).join('')}
                </Markdown>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
LinksPicksTips.propTypes = {
  person: personPropTypes.isRequired,
}
