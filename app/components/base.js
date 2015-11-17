import React from 'react'
export default getBase

function getBase({children, title}) {
  return <html>
    <Head title={title} />
    <body>
      {children}
    </body>
  </html>

  function Head({title}) {
    return <head lang="en">
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <meta name="google-site-verification" content="85n8ZBk_3hSeShlRmsVJXgDolakFG4UsMJgpy3mQyPs" />
      <title>{title || 'JavaScript Air'}</title>
      <link rel="shortcut icon" type="image/png" href="favicon.png"/>
    </head>
  }
}

