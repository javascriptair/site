import {PropTypes} from 'react'
import {Box, Item, A} from 'react-html-email'

export default WatchShowButton

function WatchShowButton({page}) {
  const styles = {
    box: {
      borderCollapse: 'separate !important',
      borderRadius: '3px',
      backgroundColor: '#AAAAAA',
      msoTableLspace: '0pt',
      msoTableRspace: '0pt',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
    },
    p: {
      lineHeight: '100%',
      fontSize: '16px',
      padding: '15px',
      margin: 0,
    },
    a: {
      fontWeight: 'bold',
      letterSpacing: 'normal',
      textAlign: 'center',
      textDecoration: 'none',
      color: '#FFFFFF',
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      display: 'block',
    },
  }
  return (
    <Box style={styles.box} align="center">
      <Item>
        <p style={styles.p}>
          <A
            href={page}
            style={styles.a}
          >
            Watch the latest episode now
          </A>
        </p>
      </Item>
    </Box>
  )
}
WatchShowButton.propTypes = {
  page: PropTypes.string.isRequired,
}
