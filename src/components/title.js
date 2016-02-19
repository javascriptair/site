import React from 'react'

export default Title

function Title({name, buttonText, buttonUrl}) {
  return (
    <div className="title">

      <h2 className="title__text">
        {name}
      </h2>

      <a
        className={"title__btn title__btn--" + (buttonText ? "visible" : "invisible")}
        href={buttonUrl}
      >
        {buttonText}
      </a>

    </div>
  )
}