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
      wrongSecret: false,
    }
    this.onChangeSecretCode = this.onChangeSecretCode.bind(this)
    this.openPresent = this.openPresent.bind(this)
  }
  onChangeSecretCode ({target}) {
    this.setState({
      secretCodeInput: target.value,
      wrongSecret: false,
      openPresent: false,
    })
  }
  openPresent () {
    const { secretCodeInput } = this.state
    if (_.toLower(secretCodeInput) === SECRET_CODE) {
      this.setState({openPresent: true, wrongSecret: false})
    } else {
      this.setState({wrongSecret: true})
    }
  }
  renderLoginPage () {
    const { secretCodeInput, openPresent, wrongSecret } = this.state
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
              openPresent={this.openPresent}
              secretCodeInput={secretCodeInput}
              wrongSecret={wrongSecret}
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
