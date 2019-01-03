import React, { Component } from 'react';
//import {HashRouter as Router} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import { Connect } from "uport-connect"
import logo from './logo.svg';
import './App.css';

const uport = new Connect('mpresto', {
  network: "rinkeby",
  bannerImage: {"/": "/ipfs/QmTVTEzXBRNX1Q3pXFozifmQox66HBuRSdhjcdVuSxM4td"},
})

class App extends Component {
  render() {
    return (
      <Router>
        <AppBody />
      </Router>
    );
  }
}

const AppBody = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
)

export default App;
