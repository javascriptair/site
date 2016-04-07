import {StyleSheet, css} from 'aphrodite'
import IconLink from '../../../components/icon-link'

export default SubscribeIconGroup

function SubscribeIconGroup() {
  const {styles} = SubscribeIconGroup
  const iconList = [
    {href: 'http://audio.javascriptair.com/feed/', name: 'podcast', title: 'Podcast RSS Feed'},
    {href: 'http://video.javascriptair.com/', name: 'youtube', title: 'YouTube Channel'},
    {href: 'http://itunes.javascriptair.com/', name: 'apple', title: 'iTunes Podcast'},
  ]
  return (
    <ul className={css(styles.list)}>
      {iconList.map((item, index) => (
        <li className={css(styles.item)} key={index}>
          <IconLink {...item} />
        </li>
      ))}
    </ul>
  )
}

SubscribeIconGroup.styles = StyleSheet.create({
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    margin: 0,
  },
  item: {
    width: 70,
    height: 60,
    display: 'inline-block',
    padding: '0 5px',
  },
})
