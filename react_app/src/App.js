// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import './App.css';

// // Appコンポーネント
// class App extends Component {
// 	constructor(props){
// 		super(props);
// 	}

// 	render(){
// 		return(
// 			<div>
// 			  <h1>Redux</h1>
// 			  <Message />
// 			  <Button />
// 			</div>
// 		);
// 	}
// }

// // ストアのコネクト
// App = connect()(App);


// // Messageコンポーネント
// class Message extends Component {
// 	style = {
// 		fontSize: "20pt",
// 		padding: "20px 5px"
// 	}

// 	render(){
// 		return(
// 			<p style={this.style}>{this.props.message}: {this.props.counter}</p>
// 		);
// 	}
// }

// // ストアのコネクト
// Message = connect((state)=>state)(Message);


// // Buttonコンポーネント
// class Button extends Component {
// 	style = {
// 		fontSize: "16pt",
// 		padding: "5px 10px"
// 	}

// 	constructor(props){
// 		super(props);
// 		this.doAction = this.doAction.bind(this);
// 	}

// 	// ボタンクリックでディスパッチ実行
// 	doAction(e){
// 		if(e.shiftKey){
// 			this.props.dispatch({ type: 'DECREMENT' });
// 		} else if(e.altKey){
// 			this.props.dispatch({ type: 'INCREMENT' });
// 		} else {
// 			this.props.dispatch({ type: 'RESET' });
// 		}
// 	}

// 	render(){
// 		return(
// 			<button style={this.style} onClick={this.doAction}>click</button>
// 		);
// 	}
// }

// // ストアのコネクト
// Button = connect()(Button);

// export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';


// Appコンポーネント
class App extends Component {
  td = {
    width:"250px"
  }


  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Memo</h1>
        <AddForm />
        <hr />
        <table><tbody><tr>
          <td style={this.td}><FindForm /></td>
          <td style={this.td}><DelForm /></td>
        </tr></tbody></table>
        <Memo />
      </div>
    );
  }
}


export default connect()(App);