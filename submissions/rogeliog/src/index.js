import React from 'react';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/';

const goToPlanet = (planet) => ({ type: 'CHANGE_PLANET', planet: planet});
const store = createStore(reducers);
const websocket = new WebSocket('ws://localhost:4000');

websocket.onmessage = (e) => store.dispatch(goToPlanet(JSON.parse(e.data)));

React.render(<Provider store={store}>
  { () => <App /> }
</Provider>, document.getElementById('root'));
