import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Base from './common/base'


class App extends React.Component {
  render() {
    return <Base>
      <h1>Hello world!!!</h1>
    </Base>
  }
}

const string = ReactDOMServer.renderToStaticMarkup(<App />)

console.log(string);
