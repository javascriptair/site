import React from 'react'
import IconLink from '../../../components/icon-link'

export default SubscribeIconGroup

function SubscribeIconGroup() {
  return (
    <section>
      <div className="group-of-icons +space-children">
        <IconLink href="http://audio.javascriptair.com/feed/" name="podcast" title="Podcast RSS Feed" />
        <IconLink href="http://video.javascriptair.com" name="youtube" title="YouTube Channel" />
        <IconLink href="http://itunes.javascriptair.com/" name="apple" title="iTunes Podcast" />
      </div>
      <div className="+text-center" style={{marginTop: 50}}>
        <a href="http://jsair.io/email">Register</a> to receive show notes in your email inbox
      </div>
    </section>
  )
}
