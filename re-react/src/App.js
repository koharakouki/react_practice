import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


let theme = {
  light: {
    backgroundColor: "#eef",
    color: "#006",
    padding: "10px"
  },
  dark: {
    backgroundColor: "#006",
    color: "#eef",
    padding: "10px"
  }
};

let content = {
  title: "context",
  message: "This is samaple context"
}

const ThemeContext = React.createContext(theme.light);
const contentContext = React.createContext(content);


class App extends Component {
  static contextType = ThemeContext;

  render(){
    return(
      <div style={this.context}>
        <Title value="Content page" />
        <Message value="This is samaple Content" />
      </div>
    );
  }
}

class Title extends Component {
  static contextType = ThemeContext;
  static contextType = contentContext;

  render(){
    return(
      <h2 style={this.context}>{this.context.title}</h2>
    );
  }
}


class Message extends Component {
  static contextType = ThemeContext;
  static contextType = contentContext;

    render(){
    return(
      <p style={this.context}>{this.context.message}</p>
    );
  }
}


export default App;