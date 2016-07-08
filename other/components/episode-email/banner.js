import {PropTypes} from 'react'
import {Box, Item, Image, A} from 'react-html-email'

export default Banner

function Banner({page}) {
  const link = `${page}#email`
  const textColor = '#656565'
  const styles = {
    item: {
      paddingBottom: 9,
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      wordBreak: 'break-word',
      fontFamily: 'Helvetica',
      textAlign: 'center',
    },
    div: {
      display: 'inline-block',
      width: 300,
    },
    p: {
      color: textColor,
      fontSize: '12px',
      lineHeight: '150%',
      display: 'inline',
    },
    a: {
      color: textColor,
    },
  }
  return (
    <Item align="center">
      <Box width="100%">
        <Item style={styles.item}>
          <div style={{...styles.div, textAlign: 'left'}}>
            <p style={styles.p}>
              The live broadcast podcast all about JavaScript.
            </p>
          </div>
          <div style={{...styles.div, textAlign: 'right'}}>
            <p style={styles.p}>
              <A href={link} style={styles.a}>
                View this email in your browser
              </A>
            </p>
          </div>
        </Item>
      </Box>
      <BannerLogo />
    </Item>
  )
}
Banner.propTypes = {
  page: PropTypes.string.isRequired,
}

function BannerLogo() {
  return (
    <A href="https://javascriptair.com">
      <Image
        src="https://javascriptair.com/resources/images/logo-wide.png"
        width={600}
        height={222.38}
        alt="JavaScript Air Logo"
      />
    </A>
  )
}
