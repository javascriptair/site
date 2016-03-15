function featureShow(index) { // eslint-disable-line
  'use strict'
  // get featured episode
  const episodes = document.body.querySelectorAll('.episode')
  const feature = episodes[index]

  // style stuff
  const styles = `
    body {
      width: 1200px;
      margin: 0 auto;
      padding: 1px;
    }
    .episode {
      margin: 79px;
      min-height: initial;
    }
    a, .person__details__text--twitter {
      text-decoration: none !important;
      color: black !important;
    }

    .episode__part--date__section--buttons,
    .content__section--buttons {
      display: none
    }

    @media
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi) {
        body {
          transform: scale(0.5);
          transform-origin: top;
        }
    }
  `

  const container = document.createElement('div')
  container.innerHTML = `
    ${feature.outerHTML}
    <style>${styles}</style>
  `

  document.body.innerHTML = container.innerHTML
  const onlyEpisode = document.body.querySelector('.episode')
  document.body.height = (onlyEpisode.clientHeight + 160) + 'px'
}
