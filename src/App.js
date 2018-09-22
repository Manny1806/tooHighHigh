import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      page: "landing",
      class: "notVisable"
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
        <div className="ads"></div>
      </div>
    );
  } else if(this.state.page === "parents") { 
    return(<div className="App">
      <section className="person-section-question">
      What is the tone of the conversation:
      <button>Your mother and I are worried</button>
      <button>Have you been eating enough</button>
      <button>Grandma died</button>
      </section>

       <section className="person-section-question">
      When did you last talk to your parents
      <button>last week</button>
      <button>i dont know</button>
      <button>last week</button>
      </section>

       <section className="person-section-question">
      Are your parents seperated
      <button>Yes</button>
      <button>No</button>
      <button>i dont know</button>
      </section>
       <section className="response">
          <span className={this.state.class}>"This is alot to take in right now as I am "</span>
      </section>
    </div>)
  } else if(this.state.page === "pizza") { 
    return(<div className="App">
      <section className="person-section-question">
      What is the tone of the conversation:
      <button>Your mother and I are worried</button>
      <button>Have you been eating enough</button>
      <button>Grandma died</button>
      </section>

       <section className="person-section-question">
      What is the tone of the conversation:
      <button>Your mother and I are worried</button>
      <button>Have you been eating enough</button>
      <button>Grandma died</button>
      </section>

       <section className="person-section-question">
      What is the tone of the conversation:
      <button>Your mother and I are worried</button>
      <button>Have you been eating enough</button>
      <button>Grandma died</button>
      </section>
       <section className="response">
          <span className={this.state.class}></span>
      </section>
    </div>)
  } else if(this.state.page === "partner") { 
    return(<div className="App">
      <section className="person-section-question">
      What is the tone of the conversation:
      <button>Your mother and I are worried</button>
      <button>Have you been eating enough</button>
      <button>Grandma died</button>
      </section>

       <section className="person-section-question">
      What is the tone of the conversation:
      <button>Your mother and I are worried</button>
      <button>Have you been eating enough</button>
      <button>Grandma died</button>
      </section>

       <section className="person-section-question">
      What is the tone of the conversation:
      <button>Your mother and I are worried</button>
      <button>Have you been eating enough</button>
      <button>Grandma died</button>
      </section>
       <section className="response">
          <span className={this.state.class}></span>
      </section>
    </div>)
  } else if(this.state.page === "cops") { 
    return(<div className="App">
      <h1>FIRST OF ALL!!<br/>Weed is legal in oregon ya idiot so chill out!</h1>
      <section className="person-section-question">
      What is the tone of the conversation:
      <button>Your mother and I are worried</button>
      <button>Have you been eating enough</button>
      <button>Grandma died</button>
      </section>

       <section className="person-section-question">
      What is the tone of the conversation:
      <button>Your mother and I are worried</button>
      <button>Have you been eating enough</button>
      <button>Grandma died</button>
      </section>

       <section className="person-section-question">
      What is the tone of the conversation:
      <button>Your mother and I are worried</button>
      <button>Have you been eating enough</button>
      <button>Grandma died</button>
      </section>
       <section className="response">
          <span className={this.state.class}></span>
      </section>
    </div>)
  }
  }
}

export default App;
