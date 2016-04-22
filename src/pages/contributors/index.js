import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'

import Page from '../../components/page.js'
import Person from '../../components/person'
import HeaderBar from '../../components/header'

export default ContributorsPage

function ContributorsPage({sponsors, contributors, panelists, host, nextEpisode}) {
  const {styles} = ContributorsPage
  return (
    <Page
      title="JavaScript Air Contributors"
    >

      <HeaderBar nextEpisode={nextEpisode} />

      <div className="container contributors-page">

        <div>
          <h3>Financial contributors</h3>
          <Contributors contributors={sponsors} />
        </div>

        <hr />

        <div>
          <h3>Non-financial contributors</h3>
          <Contributors contributors={[host, ...panelists, ...contributors]} />
        </div>

        <hr />

        <div className={css(styles.links)}>
          <p className={css(styles.linksP)}>
            If you or your company is interested in contributing financially,
            please see <a href="http://jsair.io/sponsor-info">this document</a>.
          </p>
          <p className={css(styles.linksP)}>
            If you're interested in contributing non-financially,
            feel free to peruse <a href="https://github.com/javascriptair/site">the github repo</a>.
          </p>
        </div>

      </div>
    </Page>
  )
}

ContributorsPage.propTypes = {
  sponsors: PropTypes.array.isRequired,
  contributors: PropTypes.array.isRequired,
  panelists: PropTypes.array.isRequired,
  host: PropTypes.object.isRequired,
  nextEpisode: PropTypes.object.isRequired,
}

ContributorsPage.styles = StyleSheet.create({
  links: {
    textAlign: 'center',
    fontSize: '0.8em',
  },
  linksP: {
    marginBottom: 12,
  },
})

function Contributors({contributors}) {
  const {styles} = Contributors
  return (
    <div className={css(styles.personGroup)}>
      {contributors.map((person, index) => (
        <div key={index} className={css(styles.contributor)}>
          <Person {...person} />
          {person.contributions}
        </div>
      ))}
    </div>
  )
}

Contributors.propTypes = {
  contributors: PropTypes.array.isRequired,
}

Contributors.styles = StyleSheet.create({
  personGroup: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
    textAlign: 'center',
  },
  contributor: {margin: '0 10px 18px 10px'},
})
