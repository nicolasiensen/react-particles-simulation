import React, { Component } from 'react';
import './Driver.css';

class Driver extends Component {
  render() {
    return (
      <div className="Driver" style={{left: this.props.driver.x, top: this.props.driver.y}}></div>
    )
  }
}

export default Driver
