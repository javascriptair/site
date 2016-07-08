import {PropTypes} from 'react'
import {Email, Box, Item, Image, A} from 'react-html-email'

import * as utils from '<utils>/utils'
import hijackConsole from '../../utils/hijack-console'
import ShowDescription from '../show-description'
import Banner from './banner'
import WatchShowButton from './watch-show-button'
import SponsorsSection from './sponsors-section'
import ShowNotes from './show-notes'
import {Clear, Spacer, Line} from './util-components'

const episodePropType = PropTypes.object
const sponsorsPropType = PropTypes.object
const ignoreLogs = [
  'in outlook:',
  'unsupported in: outlook.',
  'unsupported in: outlook-web.',
  'mso-line-height-rule',
  'border-radius` supplied to `Box` unsupported in',
  'border-radius` supplied to `Image` unsupported in',
  '<html> cannot appear as a child of <div>', // can't think of how to get around this :-/
  'Unknown prop `xmlns` on <html> tag', // fb.me/react-unknown-prop
  /Unknown props.*on <table> tag\./, // fb.me/react-unknown-prop
]
hijackConsole(ignoreLogs)

export default EpisodeEmail

function EpisodeEmail({episode, sponsors}) {
  const {
    taglessTitle,
    descriptionHTML,
    number,
    guests,
    host,
    panelists,
    screenshot,
  } = episode
  const episodePage = `https://javascriptair.com${episode.page}`
  const panelistsAndHost = utils.sortPeople([...panelists, host])
  const showAttendees = [...utils.sortPeople(guests), ...panelistsAndHost]
  const combinedSponsors = [sponsors.premierSponsor, ...sponsors.goldSponsors, ...sponsors.silverSponsors]
  const headCSS = getHeadCSS()

  return (
    <Email
      title={taglessTitle}
      headCSS={headCSS}
      style={{backgroundColor: 'white'}}
    >
      <Banner page={episodePage} />
      <Item>
        <Spacer space={24} />
        <WatchShowButton page={episodePage} />
        <Clear>
          <ShowImage src={screenshot} />
        </Clear>
        <Description descriptionHTML={descriptionHTML} />
        <Spacer space={16} />
        <ClickButtonWithAudioOption page={episodePage} number={number} />
        <Spacer />
        <Clear>
          <SponsorsSection sponsors={combinedSponsors} />
        </Clear>
        <Line />
        <Clear>
          <ShowNotes people={showAttendees} />
        </Clear>
        <Line />
        <Clear>
          <ShowDescriptionSection />
        </Clear>
        <Spacer />
        <Clear>
          <Black>
            <Footer />
            <LegalText />
          </Black>
        </Clear>
        <Spacer />
      </Item>
    </Email>
  )
}
EpisodeEmail.propTypes = {
  episode: episodePropType,
  sponsors: sponsorsPropType,
}

function getHeadCSS() {
  return `
    table {
      font-family: Helvetica;
    }
    a, a:hover, a:active, a:focus {
      color: #2BAADF;
      text-decoration: none;
    }
  `
}

function ShowImage({src}) {
  return (
    <Box>
      <Item>
        <Image
          width={600}
          height={300}
          src={src}
          alt="Show image"
        />
      </Item>
    </Box>
  )
}
ShowImage.propTypes = {
  src: PropTypes.string.isRequired,
}

function Description({descriptionHTML}) {
  const styles = {
    h1: {
      display: 'block',
      margin: 0,
      padding: 0,
      color: '#202020',
      fontFamily: 'Helvetica',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '125%',
      letterSpacing: 'normal',
      textAlign: 'left',
    },
    p: {
      margin: '10px 0',
      padding: 0,
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      color: '#202020',
      fontFamily: 'Helvetica',
      fontSize: '16px',
      lineHeight: '150%',
      textAlign: 'left',
    },
  }
  return (
    <div>
      <h1 style={styles.h1}>Hello JavaScript Air friends!</h1>
      <div style={styles.p} dangerouslySetInnerHTML={descriptionHTML} />
    </div>
  )
}
Description.propTypes = {
  descriptionHTML: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }).isRequired,
}

function ClickButtonWithAudioOption({page, number}) {
  const styles = {
    div: {
      textAlign: 'center',
      width: '100%',
    },
    p: {
      fontSize: 16,
      margin: 0,
      lineHeight: '100%',
      display: 'inline-block',
    },
    a: {
      fontWeight: 'bold',
      padding: '15px',
      letterSpacing: 'normal',
      textAlign: 'center',
      textDecoration: 'none',
      color: '#FFFFFF',
      msoLineHeightRule: 'exactly',
      msTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      display: 'block',
      borderCollapse: 'separate !important',
      borderRadius: '3px',
      backgroundColor: '#2BAADF',
      msoTableLspace: '0pt',
      msoTableRspace: '0pt',
    },
  }
  return (
    <div style={styles.div}>
      <p style={styles.p}>
        <A
          href={page}
          style={styles.a}
        >
          Click for more about Episode {number}, including an audio option
        </A>
      </p>
    </div>
  )
}
ClickButtonWithAudioOption.propTypes = {
  page: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}

function ShowDescriptionSection() {
  const styles = {
    box: {
      width: '100%',
    },
    descriptionTD: {
      lineHeight: '150%',
    },
    imageTD: {
      verticalAlign: 'top',
    },
    img: {
      marginLeft: 'auto',
      paddingLeft: 72,
    },
  }
  return (
    <Box style={styles.box}>
      <tr>
        <td style={styles.descriptionTD}>
          <ShowDescription />
        </td>
        <td style={styles.imageTD}>
          <Image
            width={128}
            height={128}
            style={styles.img}
            src="https://javascriptair.com/resources/logo.png"
            alt="JavaScript Air square logo"
          />
        </td>
      </tr>
    </Box>
  )
}

function Black({children}) { // eslint-disable-line react/prop-types
  const styles = {
    box: {
      backgroundColor: 'black',
      color: 'white',
      width: '100%',
    },
  }
  return (
    <Box style={styles.box}><Item>{children}</Item></Box>
  )
}

function Footer() {
  const styles = {
    box: {
      width: '100%',
      textAlign: 'center',
      height: 100,
    },
    image: {
      display: 'inline',
      outline: 'none',
      border: 'none',
      textDecoration: 'none',
    },
  }
  const icons = [
    {name: 'twitter', link: 'https://twitter.com/javascriptair'},
    {name: 'youtube', link: 'http://video.javascriptair.com'},
    {name: 'link', link: 'https://javascriptair.com'},
    {name: 'rss2', link: 'http://audio.javascriptair.com'},
    {name: 'google-plus', link: 'https://plus.google.com/+JavaScriptAir'},
    {name: 'facebook', link: 'https://facebook.com/javascriptair'},
    {name: 'github', link: 'https://github.com/javascriptair'},
  ]
  return (
    <Box style={styles.box}>
      <tr>
        {icons.map((icon, index) => (
          <td key={index}>
            <SocialIcon {...icon} />
          </td>
        ))}
      </tr>
    </Box>
  )

  function SocialIcon({name, link}) { // eslint-disable-line react/prop-types
    return (
      <A href={link}>
        <img
          style={styles.image}
          width={24}
          height={24}
          alt={`${name} icon`}
          src={`https://javascriptair.com/resources/images/email/${name}.png`}
        />
      </A>
    )
  }
}

function LegalText() {
  const styles = {
    box: {
      textAlign: 'center',
      width: '100%',
      fontSize: '0.6em',
      height: 30,
    },
  }
  return (
    <Box style={styles.box}>
      <Item>
        JavaScript Air · P.O. Box 562 · American Fork, UT 84003 · USA
      </Item>
    </Box>
  )
}
