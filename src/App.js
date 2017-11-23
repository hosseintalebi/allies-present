import React, { Component } from 'react';
import logo from './logo.svg';
import _ from 'lodash'
// components
import Balloons from './components/balloon/Balloons'
import Sky from './components/sky/Sky'
import Ground from './components/ground/Ground'
import GiftBox from './components/giftBox/GiftBox'
import CloudCat from './components/cats/cloudCat/CloudCat'
import DialogBox from './components/dialogBox/DialogBox'

import './App.css';

const SECRET_CODE = 'hbd2017'

class App extends Component {
  constructor () {
    super()
    this.state = {
      secretCodeInput: '',
      openPresent: false,
    }
    this.onChangeSecretCode = this.onChangeSecretCode.bind(this)
  }
  onChangeSecretCode ({target}) {
    this.setState({secretCodeInput: target.value})
    if (_.toLower(target.value) === SECRET_CODE) {
      this.setState({openPresent: true})
    }
  }
  renderLoginPage () {
    const { secretCodeInput, openPresent } = this.state
    return (
      <div style={{height: '100vh', overflow: 'hidden'}}>
        <Balloons />
        <Sky>
          <CloudCat>
            <DialogBox
              styles={{
                left: -10,
                bottom: 100,
              }}
              onChangeSecretCode={this.onChangeSecretCode}
              secretCodeInput={secretCodeInput}
            />
          </CloudCat>
        </Sky>
        <Ground />
        <GiftBox openPresent={openPresent}/>
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
