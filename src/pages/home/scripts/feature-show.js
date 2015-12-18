import React from 'react'
import InlineScript from '../../../components/scripts/inline-script'

export default FeatureShow

function FeatureShow() {
  return <InlineScript fn={setFeatureShow} />
}

function setFeatureShow() {
  window.featureShow = featureShow
  function featureShow(index = 0) {
    // get featured episode
    const episodes = document.body.querySelectorAll('.episode')
    const feature = episodes[index]

    const allPeople = Array.from(feature.querySelectorAll('.person'))
    const numberOfPeople = allPeople.length
    const peoplePerRow = cols(numberOfPeople)
    const rows = Math.ceil(numberOfPeople / peoplePerRow)

    const newFontSize = 40

    const totalTitleWidth = getWidthOfTitle()
    const totalWidthOfPeople = getWidthOfPeople()

    const episodeWidth = (totalTitleWidth > totalWidthOfPeople ? totalTitleWidth : totalWidthOfPeople) + 1

    // remove all prose
    Array.from(feature.querySelectorAll('.description'))
      .forEach(e => e.parentNode.removeChild(e))

    // style stuff
    const scales = [0.8, 0.8, 0.45]
    const styles = `
      a { text-decoration: none; }
      .icon-calendar-plus-o { display: none; }
      h3 { font-size: ${newFontSize}px; }
      body {http://javascriptair.com/
        text-align: center;
        max-width: 1200px;
        width: 1200px;
        height: 300px;
      }
      .episode {
        width: ${episodeWidth}px;
        margin: auto;
      }
      body.small .episode {
        transform: scale(${scales[rows]});
        transform-origin: top;
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
    document.body.classList.add('small')

    function getWidthOfPeople() {
      const chunkedPeople = chunk(allPeople, peoplePerRow)
      const max = Math.max.apply(null, chunkedPeople.map(widthOfRow))
      return max

      function widthOfRow(people) {
        return people.reduce((t, p) => t + getWidth(p), 0)
      }
    }

    function getWidthOfTitle() {
      const title = feature.querySelector('h3 a')
      const titleWidth = getWidth(title)
      const fontSize = getComputedStyle(title)['font-size'].slice(0, -2)
      const fontSizeRatio = fontSize / newFontSize
      return Math.ceil(titleWidth / fontSizeRatio)
    }

    function getWidth(el) {
      const style = el.currentStyle || window.getComputedStyle(el)
      const width = el.offsetWidth
      const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight)
      const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
      const border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth)

      return width + margin - padding + border
    }

    function chunk(arr, len) {
      const chunks = []
      let i = 0
      const n = arr.length
      while (i < n) {
        chunks.push(arr.slice(i, i += len))
      }
      return chunks
    }

    function cols(x) {
      const rem4 = x % 4
      const rem3 = x % 3
      if (!rem4 || rem4 === 1 && rem3 === 1) {
        return 4
      } else if (!rem3) {
        return 3
      } else {
        return rem4 >= rem3 ? 4 : 3
      }
    }
  }
}

