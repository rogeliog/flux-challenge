import React, { Component } from 'react';
import { PlanetMonitor } from './PlanetMonitor'
import { SithLordsList } from './SithLordsList'
import { createStore } from 'redux';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  console.log(state);
  return {
    planet: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch({type: 'ROGELIO'})
  }
}

class App extends Component {
  render() {
    return (
      <PlanetMonitor planet={this.props.planet}/>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
