import {PropTypes} from 'react'
import {Box, Item, A} from 'react-html-email'

export default SponsorsSection

function SponsorsSection({sponsors}) {
  const styles = {
    box: {
      minWidth: '100%',
      border: '2px solid #222222',
      borderCollapse: 'collapse',
      msoTableLspace: '0pt',
      msoTableRspace: '0pt',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
    },
    item: {
      fontFamily: 'Helvetica',
      fontSize: '14px',
      fontWeight: 'normal',
      textAlign: 'left',
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      wordBreak: 'break-word',
      color: '#202020',
      lineHeight: '150%',
      padding: 18,
    },
    h2: {
      marginTop: 0,
    },
  }
  return (
    <Box style={styles.box}>
      <Item style={styles.item}>
        <h2 style={styles.h2}>This episode made possible by</h2>
        <ul>
          {
            sponsors.map(({name, link, tagline}, i) => (
              <li key={i}>
                <A href={link} textDecoration="none">{name}</A> - {tagline}
              </li>
            ))
          }
        </ul>
      </Item>
    </Box>
  )
}
SponsorsSection.propTypes = {
  sponsors: PropTypes.array,
}
