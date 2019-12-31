import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxTest from './ReduxTest'
import {  store } from './AppState'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h2> A create - reac - app with Simple Redux </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
          <ReduxTest store = {store}/>
        
      </div>
    );
  }
}

export default App;
