import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      page: "landing",
      class: "notVisible"
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
    return(<div className="App">
      <section className="person-section-question">
      What is the tone of the conversation:
      <button>Your mother and I are worried</button>
      <button>Have you been eating enough</button>
      <button>Grandma died</button>
      </section>

       <section className="person-section-question">
      When did you last talk to your parents:
      <button>last week</button>
      <button>i dont know</button>
      <button>last week</button>
      </section>

       <section className="person-section-question">
      Are your parents seperated:
      <button onClick={()=>{this.setState({class: ""})}}>Yes</button>
      <button onClick={()=>{this.setState({class: ""})}}>No</button>
      <button onClick={()=>{this.setState({class: ""})}}>i dont know</button>
      </section>
       <section className="response">
          <span className={this.state.class}>"This is alot to take in right now as I am working on my life board right now. I love you. Goodbye"</span>
      </section>
    </div>)
  } else if(this.state.page === "pizza") { 
    return(<div className="App">
      <section className="person-section-question">
      Did you order a pizza:
      <button>Yes</button>
      <button>No</button>
      <button>I don't know</button>
      </section>

       <section className="person-section-question">
      How tall in the pizza man/woman:
      <button>Greater than 6 feet</button>
      <button>Less than 6 feet</button>
      <button>Me height</button>
      </section>

       <section className="person-section-question">
      Do you have money:
      <button onClick={()=>{this.setState({class: ""})}}>Yes</button>
      <button onClick={()=>{this.setState({class: ""})}}>No</button>
      <button onClick={()=>{this.setState({class: ""})}}>Roommate owes you</button>
      </section>
       <section className="response">
          <span className={this.state.class}>"I'm feeling generous tonight. Here is an amount of money that is enough to pay you. No need to count it."</span>
      </section>
    </div>)
  } else if(this.state.page === "partner") { 
    return(<div className="App">
      <section className="person-section-question">
      What is the tone of the conversation:
      <button>Marge Simpsons grunt</button>
      <button>Just checking in (eye roll)</button>
      <button></button>
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
      Did you break the law recently:
      <button>Yes</button>
      <button>No</button>
      <button>Maybe?</button>
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
