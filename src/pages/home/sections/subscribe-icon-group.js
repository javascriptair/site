import IconLink from '../../../components/icon-link'

export default SubscribeIconGroup

function SubscribeIconGroup() {
  const iconList = [
    {href: 'http://audio.javascriptair.com/feed/', name: 'podcast', title: 'Podcast RSS Feed'},
    {href: 'http://video.javascriptair.com/', name: 'youtube', title: 'YouTube Channel'},
    {href: 'http://itunes.javascriptair.com/', name: 'apple', title: 'iTunes Podcast'},
  ]
  return (
    <ul className="subscribe-icon-list">
      {iconList.map((item, index) => (
        <li className="subscribe-icon-list__item" key={index}>
          <IconLink {...item} />
        </li>
      ))}
    </ul>
  )
}
