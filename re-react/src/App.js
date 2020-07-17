import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// Appコンポーネント
class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>React</h1>
        <Message />
        <Button />
      </div>
    );
  }
}

// ストアのコネクト
App = connect()(App);


class Message extends Component {
  style = {
    fontSize: "20pt",
    padding: "20px 5px"
  }

  render(){
    return(
      <p style={this.style}>
        {this.props.message}: {this.props.counter}
      </p>
    );
  }
}

// ストアのコネクト
Message = connect((store)=>store)(Message);


class Button extends Component {
  style = {
    fontSize: "16pt",
    padding: "5px 10px"
  }

  constructor(props){
    super(props);
    this.doAciton = this.doAciton.bind(this);
  }

  doAciton(e){
    if(e.shiftKey){
      this.props.dispatch({ type: 'DECREMENT' });
    } else if(e.altKey){
      this.props.dispatch({ type: 'INCREMENT' });
    } else {
      this.props.dispatch({ type: 'RESET' });
    }
  }

  render(){
    return(
      <button style={this.style} onClick={this.doAciton}>
        Click
      </button>
    );
  }
}

// ストアのコネクト
Button = connect()(Button);

export default App;