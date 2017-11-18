import React, { Component } from 'react';
import logo from './logo.svg';
import Balloons from './components/balloon/Balloons'
import Sky from './components/sky/Sky'
import './App.css';

class App extends Component {
  renderLoginPage () {
    return (
      <div style={{height: '100vh'}}>
        <Balloons />
        <Sky />
        <div></div>
      </div>
    )
  }
  render() {
    return (
      this.renderLoginPage()
    );
  }
}

export default App;
