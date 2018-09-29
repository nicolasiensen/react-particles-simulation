import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'

class App extends Component {
  constructor(props) {
    super()
    this.domDrivers = []
    this.isDomDriversEnabled = true
    this.driversCount = 500
    this.state = { drivers: [], clickCount: 0 }
  }

  componentDidMount() {
    if (this.isDomDriversEnabled) {
      const drivers = []
      for(let x = 0; x < this.driversCount; x++) {
        const map = document.getElementById("map")
        const driver = document.createElement("div")
        driver.className = "Driver"
        driver.style.setProperty("left", window.innerWidth * Math.random() + "px")
        driver.style.setProperty("top", window.innerHeight * Math.random() + "px")
        map.appendChild(driver)
        drivers.push(driver)

        setTimeout(() => {
          setInterval(() => {
            const driverLeft = parseFloat(driver.style.getPropertyValue("left"))
            const driverTop = parseFloat(driver.style.getPropertyValue("top"))
            driver.style.setProperty("left", (driverLeft + (Math.random() * 100) - 50) + "px")
            driver.style.setProperty("top", (driverTop + (Math.random() * 100) - 50) + "px")
          }, 3000)
        }, Math.random() * 3000)
      }
    } else {
      const drivers = []
      for(let x = 0; x < this.driversCount; x++) {
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
      this.setState({ drivers })
    }
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
        <div id="map"></div>
      </div>
    );
  }
}

export default App;
