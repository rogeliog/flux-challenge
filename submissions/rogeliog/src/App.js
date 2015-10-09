import React, { Component } from 'react';
import { PlanetMonitor } from './PlanetMonitor'
import { SithLordsList } from './SithLordsList'

export class App extends Component {
  render() {
    const sithLords = [
      {
        name: 'Edda',
        homeworld: 'Monterrey'
      },
      {
        name: 'Rogelio',
        homeworld: 'SF'
      },
    ]
    return (
      <div>
        <PlanetMonitor planet="BatMan" />
        <SithLordsList sithLords={sithLords} />
      </div>
    )
  }
}
