import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map.js'

class App extends Component {
  constructor(props) {
    super()

    const drivers = []
    for(let x = 0; x < 150; x++) {
      drivers.push({ id: x, x: window.innerWidth * Math.random(), y: window.innerHeight * Math.random() })
      setTimeout(() => {
        setInterval(() => {
          this.setState({
            drivers: this.state.drivers.map(driver => (
              driver.id === x
                ? {
                    ...driver,
                    x: driver.x + (Math.random() * 100) - 50,
                    y: driver.y + (Math.random() * 100) - 50
                } : driver
            ))
          })
        }, 3000)
      }, Math.random() * 3000)
    }

    this.state = { drivers, clickCount: 0 }
  }

  render() {
    return (
      <div className="App">
        <form>
          <textarea></textarea>
          <button onClick={(e) => { e.preventDefault(); this.setState({ clickCount: this.state.clickCount + 1 }) }}>
            Click me {this.state.clickCount}
          </button>
        </form>
        <Map drivers={this.state.drivers} />
      </div>
    );
  }
}

export default App;
