import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { persistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';


let state_value = {
	counter: 0,
	message: "COUNTER"
}


function counter(state = state_value, action){
	switch(action.type){
		case 'INCREMENT':
		return {
			counter: state.counter + 1,
			message: 'INCREMENT'
		};
		case 'DECREMENT':
		return {
			counter: state.counter - 1,
			message: 'DECREMENT'
		};
		case 'RESET':
		return {
			counter: 0,
			message: "RESET"
		};
		default:
		return state;
	}
}

// Redux Persistの設定
const persistConfig= {
	key: 'root',
	storage,
}

// パーシストレデューサーの作成
const persistedReducer = persistReducer(persistConfig, counter)

// ストア、パーシスターの作成
let store = createStore(persistedReducer)
let pstore = persistStore(store)

// 表示をレンダリング
ReactDOM.render(
	<Provider store={store}>
	  <persistGate loading={<p>loading</p>} persister={pstore}>
	    <App />
	  </persistGate>
	</Provider>,
	document.getElementById('root')
);
