import React, { Component } from 'react';
import { fetchJedis } from  './fetcher';

class SithLoadItem extends Component {
  render() {
    return (
      <li className="css-slot">
        <h3>{this.props.name}</h3>
        <h6>Homeworld: {this.props.homeworld}</h6>
      </li>
    )

  }
}

export class SithLordsList extends Component {
  constructor() {
    super();
    this.state = { jedis: [] };
    fetchJedis(5, true, true).subscribe((jedi) => {
      this.setState(Object.assign(this.state, {
        jedis: [...this.state.jedis, jedi]
      }))
    });
  }

  render() {
    const { jedis } = this.state;
    return (
      <ul className="css-slots">
        { jedis.map((jedi) => <SithLoadItem name={jedi.name} homeworld={jedi.homeworld}/> )}
      </ul>
    )
  }
}
