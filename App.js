import React, {Component} from 'react';
import Navigator from './src/components/Navigator';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './config/config';

// class App extends React.Component{
//   render() {
//     return(
//        <Navigator />
//     );
//   }
// }

export default class App extends React.Component {
  constructor() {
    super();
    this.initializeFirebase();
  }
  initializeFirebase = () =>{
    firebase.initializeApp(firebaseConfig);
  };
  render() {
    return <Navigator />;
  }
}