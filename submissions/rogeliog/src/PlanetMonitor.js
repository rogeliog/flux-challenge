import React, { Component } from 'react';

export class PlanetMonitor extends Component {
  render() {
    return (
      <h1 className="css-planet-monitor">Obi-Wan currently on {this.props.planet}</h1>
    )
  }
}
