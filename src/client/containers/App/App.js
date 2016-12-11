import React from 'react'
import { Board } from 'containers'

export default class App extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: '400px' }}>
        <Board />
      </div>
    )
  }
}
