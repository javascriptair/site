import React from 'react'

export default Links

function Links() {
  return (
    <ul className="footer__nav-footer-list footer-list">
      {
        getLinks().map((link, i) => {
          return (
            <li key={i} className="footer-list__item">
              <a className="footer-list__link" href={link.href} key={i} alt={link.alt || link.title}>{link.title}</a>
            </li>
          )
        })
      }
      </ul>
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
      href: 'http://jsair.io/email',
      alt: 'Show Notes Email Registration',
      title: 'Show Notes Email Registration',
    },
    {
      href: '/deals',
      alt: 'Deals',
      title: 'Deals',
    },
  ]
}
