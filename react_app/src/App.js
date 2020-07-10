import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/AddFrom';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelFrom';


// Appコンポーネント
class App extends Component{
	td = {
		width: "250px"
	}

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
			  <h1>Memo</h1>
			  <AddForm />
			  <hr />
			  <table><tbody><tr>
			    <td style={this.td}><FindForm /></td>
			    <td style={this.td}><DelFrom /></td>
			  </tr></tbody></table>
			  <Memo />
			</div>
		);
	}
}

export default connect()(App);