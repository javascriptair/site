import React from 'react'
import IconLink from '../../../components/icon-link'


export default SocialIconGroup

function SocialIconGroup() {
  return (
    <section className="group-of-icons +space-children">
      <IconLink href="https://twitter.com/JavaScriptAir" name="twitter" title="Twitter Profile" />
      <IconLink href="https://plus.google.com/105493143005968326308" name="google-plus" title="Google+ Page" />
      <IconLink href="https://facebook.com/JavaScriptAir" name="facebook2" title="Facebook Page" />
    </section>
  )
}

