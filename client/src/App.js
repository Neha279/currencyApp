import React, { Component } from 'react';
import logo from './res/logo.png';
import './style/App.css';
import './style/card.css';
import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             The Best Price List !!
          </p>
        
        <Container/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact US
        </a> 
        </header>
      </div>
    );
  }
}

export default App;
