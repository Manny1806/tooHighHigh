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
    if(this.state.page === "landing"){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">So you got too high?</h1>
        </header>
        <p className="App-intro">
          That's ok. That's why we are here! Just select a button below that corresponds to the person/thing you are trying to talk to.</p>
        <div className="button-group">
          <button className="talk-button" onClick={()=>{this.setState({page:"parents"})}}>Parents</button>
          <button className="talk-button" onClick={()=>{this.setState({page:"pizza"})}}>Pizza Guy</button>
          <button className="talk-button" onClick={()=>{this.setState({page:"partner"})}}>Partner</button>
          <button className="talk-button" onClick={()=>{this.setState({page:"cops"})}}>COPS!</button>
          <button className="talk-button" onClick={()=>{this.setState({page:"parents"})}}>Parents Again</button>
        </div>
      </div>
    );
  } else if(this.state.page === "parents") { 
    return(<div>
      What is the tone of the conversation:
      <button>Your mother and I are worried</button>
      <button>Have you been eating enough</button>
    </div>)
  }
  }
}

export default App;
