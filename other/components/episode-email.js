import {PropTypes} from 'react'
import {Email, Box, Item, Image, A} from 'react-html-email'

import LinksPicksTips from './links-picks-tips'
import ShowDescription from './show-description'
import personPropType from './prop-types/person'
import Person from './person'

import * as utils from '<utils>/utils'

const episodePropType = PropTypes.object
const sponsorsPropType = PropTypes.object
hijackConsole()

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
          return (
            <Clear key={i}>
              {i !== 0 ? <Spacer /> : null}
              <Box>
                <tr>
                  <td style={styles.td}>
                    <Person {...person} Image={Image} />
                  </td>
                  <td style={styles.td}>
                    {
                      !person.hasNotes ?
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

function Clear({children}) {
  const styles = {
    visibility: 'hidden',
    display: 'block',
    height: 0,
    clear: 'both',
  }
  return (
    <div>
      {children}
      <div style={styles} />
    </div>
  )
}
Clear.propTypes = {
  children: PropTypes.node.isRequired,
}

function Spacer({space = 32}) {
  return <div style={{marginTop: space}} />
}
Spacer.propTypes = {
  space: PropTypes.number,
}

function Line() {
  return <hr style={{marginTop: 32, marginBottom: 32}} />
}

function hijackConsole() {
  const ignoreLogs = [
    'in outlook:',
    'unsupported in: outlook.',
    'unsupported in: outlook-web.',
    'mso-line-height-rule',
    'border-radius` supplied to `Box` unsupported in',
    'border-radius` supplied to `Image` unsupported in',
    '<html> cannot appear as a child of <div>', // can't think of how to get around this :-/
  ]
  hijack('warn')
  hijack('error')

  function hijack(logger) {
    const original = console[logger]
    console[logger] = function hijackedConsole(...args) {
      const line = args.join(' ')
      const shouldIgnore = ignoreLogs.some(l => line.includes(l))
      if (!shouldIgnore) {
        return original(...args)
      }
      return undefined
    }
  }
}
