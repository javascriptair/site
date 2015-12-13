import React from 'react'

export default TwitterFeed

function TwitterFeed({widgetId, linkTo, children}) {
  return (
    <a
      className="twitter-timeline"
      href={linkTo}
      data-widget-id={widgetId}
    >
      {children}
    </a>
  )
}

TwitterFeed.propTypes = {
  widgetId: React.PropTypes.string.isRequired,
  linkTo: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
}
