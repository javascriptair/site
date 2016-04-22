import Icon from '../../../components/icon'

export default Heading

function Heading() {
  return (
    <div className="header__heading">
      <Icon
        name="logo"
        className="header__logo"
        viewBox="0 0 99 100"
      />
      <h1 className="header__title">
        JavaScript <span>Air</span>
      </h1>
      <p className="header__subtext">
        Sponsored by <a className="header__sponsor-link" href="http://jsair.io/eggheadio">Egghead.io</a>
        , and <a className="header__sponsor-link" href="#sponsors">others</a>.
      </p>
    </div>
  )
}
