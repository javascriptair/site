import React from 'react'
import IconLink from '../../../components/icon-link'

export default SubscribeIconGroup

function SubscribeIconGroup() {
  return (
    <ul className="subscribe-icon-list">
      <li className="subscribe-icon-list__item">
        <IconLink href="http://audio.javascriptair.com/feed/" name="podcast" title="Podcast RSS Feed" />
      </li>
      <li className="subscribe-icon-list__item">
        <IconLink href="http://video.javascriptair.com" name="youtube" title="YouTube Channel" />
      </li>
      <li className="subscribe-icon-list__item">
        <IconLink href="http://itunes.javascriptair.com/" name="apple" title="iTunes Podcast" />
      </li>
    </ul>
  )
}
