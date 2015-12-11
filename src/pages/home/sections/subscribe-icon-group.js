import React from 'react'

export default SubscribeIconGroup

function SubscribeIconGroup() {
  return (
    <section className="group-of-icons +space-children">
      <a href="http://audio.javascriptair.com/feed/" className="icon-podcast" title="Podcast RSS Feed"></a>
      <a href="http://video.javascriptair.com" className="icon-youtube" title="YouTube Channel"></a>
      <a
        href="https://itunes.apple.com/us/podcast/javascript-air/id1066446588"
        className="icon-apple"
        title="iTunes Podcast"
      >
      </a>
    </section>
  )
}
