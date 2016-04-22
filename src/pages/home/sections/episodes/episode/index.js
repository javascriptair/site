import {PropTypes} from 'react'
import Date from './date'
import Content from './content'

export default Episode

function Episode({episodeData, index}) {
  const {date} = episodeData
  return (
    <div className={`episode episode-index-${index} episode-${date}`}>
      <Date episode={episodeData} />
      <Content episode={episodeData} />
    </div>
  )
}

Episode.propTypes = {
  episodeData: PropTypes.object,
  index: PropTypes.number,
}
