import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      page: "landing"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">So you got too high?</h1>
        </header>
        <p className="App-intro">
          That's ok. That's why we are here! Just select a button below that corresponds to the person/thing you are trying to talk to.</p>
        <div className="button-group">
          <button className="talk-button">Parents</button>
          <button className="talk-button">Pizza Guy</button>
          <button className="talk-button">Partner</button>
          <button className="talk-button">COPS!</button>
          <button className="talk-button">Parents Again</button>
        </div>
      </div>
    );
  }
}

export default App;
