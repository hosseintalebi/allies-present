import React, { Component } from 'react';
import logo from './logo.svg';

// components
import Balloons from './components/balloon/Balloons'
import Sky from './components/sky/Sky'
import Ground from './components/ground/Ground'
import GiftBox from './components/giftBox/GiftBox'

import './App.css';

class App extends Component {
  renderLoginPage () {
    return (
      <div style={{height: '100vh'}}>
        <Balloons />
        <Sky />
        <Ground />
        <GiftBox />
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
