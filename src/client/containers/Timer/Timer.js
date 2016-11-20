import React from 'react'
import { Timer } from 'components'

class RealTimer extends React.Component {

  componentDidMount() {
    this.timer = setInterval(() => this.forceUpdate(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <Timer date={new Date()} />
    )
  }
}

export default RealTimer
