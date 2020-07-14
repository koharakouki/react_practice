import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/Sampledata';
import firebase from "firebase";

// Firebaseの設定
var firebaseConfig = {
  apiKey: "AIzaSyBWkYRUOfosfHzIWOx-XbGm0jfO3c42iBY",
  authDomain: "react-202007.firebaseapp.com",
  databaseURL: "https://react-202007.firebaseio.com",
  projectId: "react-202007",
  storageBucket: "react-202007.appspot.com",
  messagingSenderId: "411488934792",
};

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);

// Appコンポーネント
class App extends Component {
  render(){
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}

export default App;







// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBWkYRUOfosfHzIWOx-XbGm0jfO3c42iBY",
//     authDomain: "react-202007.firebaseapp.com",
//     databaseURL: "https://react-202007.firebaseio.com",
//     projectId: "react-202007",
//     storageBucket: "react-202007.appspot.com",
//     messagingSenderId: "411488934792",
//     appId: "1:411488934792:web:7239d28daa3c2703d2383d",
//     measurementId: "G-2Y69G4BHXK"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>