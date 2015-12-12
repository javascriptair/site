import React from 'react'
import GoogleAnalyticsScript from './scripts/google-analytics'


export default Page

function Page({
  children,
  title = 'JavaScript Air',
} = {}) {
  return (
    <html>
      <head lang="en">
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="85n8ZBk_3hSeShlRmsVJXgDolakFG4UsMJgpy3mQyPs" />
        <meta name="theme-color" content="#155674" />
        <link rel="shortcut icon" type="image/png" href="/favicon.ico"/>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/resources/font/font.css" />
      </head>
      <body>
        {children}

        <GoogleAnalyticsScript />
      </body>
    </html>
  )
}

