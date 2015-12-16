import React from 'react'
import IconLink from '../../../components/icon-link'

export default SubscribeIconGroup

function SubscribeIconGroup() {
  return (
    <section className="group-of-icons +space-children">
      <IconLink href="http://audio.javascriptair.com/feed/" name="podcast" title="Podcast RSS Feed" />
      <IconLink href="http://video.javascriptair.com" name="youtube" title="YouTube Channel" />
      <IconLink href="http://itunes.javascriptair.com/" name="apple" title="iTunes Podcast" />
    </section>
  )
}
