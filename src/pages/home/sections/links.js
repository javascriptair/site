import React from 'react'
import * as utils from '../../../../shared/utils'

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
      href: 'http://suggest.javascriptair.com',
      title: 'Suggest Episodes',
    },
    {
      href: 'mailto:javascriptair+website@gmail.com',
      alt: 'Email JavaScript Air',
      title: 'Contact us',
    },
    {
      href: '/guests',
      alt: 'Guests',
      title: 'All Show Guests',
    },
    {
      href: '/deals',
      alt: 'Deals',
      title: 'Deals',
    },
  ]
}
