import {PropTypes} from 'react'
import {Box, Item, Image} from 'react-html-email'
import LinksPicksTips from '../links-picks-tips'
import personPropType from '../prop-types/person'
import Person from '../person'
import {Clear, Spacer} from './util-components'

export default ShowNotes

function ShowNotes({people}) {
  const styles = {
    h2: {
      marginTop: 0,
    },
    td: {
      verticalAlign: 'top',
    },
  }
  return (
    <Box>
      <Item>
        <h2 style={styles.h2}>Links, Picks, and Tips</h2>
        {people.map((person, i) => {
          const noNotes = !person.hasNotes
          return (
            <Clear key={i}>
              {i === 0 ? null : <Spacer />}
              <Box>
                <tr>
                  <td style={styles.td}>
                    <Person {...person} Image={Image} />
                  </td>
                  <td style={styles.td}>
                    {
                      noNotes ?
                      'No links, tips, or picks this week' :
                        <LinksPicksTips
                          linksHTML={person.linksHTML}
                          tipsHTML={person.tipsHTML}
                          picksHTML={person.picksHTML}
                        />
                    }
                  </td>
                </tr>
              </Box>
            </Clear>
          )
        })}
      </Item>
    </Box>
  )
}
ShowNotes.propTypes = {
  people: PropTypes.arrayOf(personPropType),
}
