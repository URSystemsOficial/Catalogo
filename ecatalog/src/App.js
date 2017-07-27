import React, { Component } from 'react';
import NavBar from './components/navbar';
import logo from './logo.svg';
import './App.css';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <Routes/>

        /*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/
      </div>
    );
  }
}

export default App;
