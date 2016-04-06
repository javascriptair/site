import Icon from '../../../../components/icon'

export default SocialIconGroup

function SocialIconGroup() {
  const itemList = [
    {href: 'https://twitter.com/JavaScriptAir', name: 'twitter', text: 'Twitter'},
    {href: 'https://plus.google.com/105493143005968326308', name: 'googlePlus', text: 'Google+'},
    {href: 'https://facebook.com/JavaScriptAir', name: 'facebook', text: 'Facebook'},
  ]
  return (
    <ul className="footer-list">
      {itemList.map((item, index) => (
        <li className="footer-list__item" key={index}>
          <a className="footer-list__link" href={item.href}>
            <Icon className="footer-list__icon" name={item.name} />
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  )
}
