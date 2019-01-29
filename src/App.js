
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

import { askForPermissioToReceiveNotifications } from './push-notification';
class App extends Component {
componentDidMount() {
  window.addEventListener('load', this.handlePushNoti);
}
handlePushNoti = () => {
const messaging = firebase.messaging();

  messaging.onMessage(function(payload) {
    console.log(payload);
     //TODO
});
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={askForPermissioToReceiveNotifications} >
          Click here to receive notifications
        </button>
      </div>
    );
  }
}

export default App;
