import React, { Component } from 'react';
import Driver from './Driver'

class Map extends Component {
  render() {
    return (
      this.props.drivers.map(driver => <Driver key={driver.id} driver={driver} />)
    )
  }
}

export default Map
