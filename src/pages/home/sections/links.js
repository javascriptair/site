import React from 'react'
import utils from '../../../utils'

export default Links

function Links() {
  return (
    <section id="links" className="+text-center +font-smaller">
      {
        utils.intersperse(
          getLinks().map((link, i) => {
            return (
              <a key={i} href={link.href} alt={link.alt || link.title}>
                {link.title}
              </a>
            )
          }),
          ' | '
        )
      }
    </section>
  )
}

function getLinks() {
  return [
    {
      href: 'http://issuetemplate.com/#/javascriptair/site/episode-suggestion',
      title: 'Suggest Episodes',
    },
    {
      href: 'mailto:javascriptair+website@gmail.com',
      alt: 'Email JavaScript Air',
      title: 'Contact us',
    },
  ]
}
