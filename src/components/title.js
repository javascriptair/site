import {PropTypes} from 'react'

export default Title

function Title({name, buttonText, buttonUrl, yellow, id}) {
  return (
    <div className={'title title--' + (yellow ? 'yellow' : 'black')} id={id}>

      <h2 className="title__text">
        {name}
      </h2>

      <a
        className={'title__btn title__btn--' + (buttonText ? 'visible' : 'invisible')}
        href={buttonUrl}
      >
        {buttonText}
      </a>

    </div>
  )
}

Title.propTypes = {
  name: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  yellow: PropTypes.bool,
  id: PropTypes.string,
}
