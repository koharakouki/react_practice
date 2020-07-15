import React, { Component } from 'react';
import './App.css';
import Rect from './Rect';

class App extends Component {
  render(){
    return(
      <div>
        <Rect x="50" y="50" w="150" h="150" c="cyan" r="50" />
        <Rect x="150" y="100" w="150" h="150" c="magenta" r="75" />
        <Rect x="100" y="150" w="150" h="150" c="black" r="25" />
      </div>
    );
  }
}

export default App;