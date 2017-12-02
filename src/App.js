import React, { Component } from 'react';
import logo from './logo.svg';
import _ from 'lodash'
// components
import InitialScreen from './components/initialScreen/InitialScreen'
import Balloons from './components/balloon/Balloons'
import Sky from './components/sky/Sky'
import Ground from './components/ground/Ground'
import GiftBox from './components/giftBox/GiftBox'
import CloudCat from './components/cats/cloudCat/CloudCat'
import DialogBoxFirst from './components/dialogBox/dialogBoxFirst/DialogBoxFirst'
import BlackScreen from './components/blackScreen/BlackScreen'
import BlackCat from './components/cats/blackCat/BlackCat'
import DialogBoxBlackScreen from './components/dialogBox/dialogBoxBlackScreen/DialogBoxBlackScreen'
import Cards from './components/recipes/Cards'
import './App.css';

const SECRET_CODE = 'hbd2017'

class App extends Component {
  constructor () {
    super()
    this.state = {
      secretCodeInput: '',
      openPresent: false,
      wrongSecret: false,
      showContent: false,
      initialScreenOff: false,
      showRecipes: false,
    }
    this.onChangeSecretCode = this.onChangeSecretCode.bind(this)
    this.openPresent = this.openPresent.bind(this)
    this.onShowRecipes = this.onShowRecipes.bind(this)
    this.onSkipInto = this.onSkipInto.bind(this)
  }
  componentDidMount () {
    setTimeout(() => this.setState({initialScreenOff: true}), 5000)
    setTimeout(() => this.setState({showContent: true}), 7000)
  }
  onChangeSecretCode ({target}) {
    this.setState({
      secretCodeInput: target.value,
      wrongSecret: false,
      openPresent: false,
    })
  }
  onShowRecipes() {
    this.setState({showRecipes: true})
  }
  openPresent () {
    const { secretCodeInput } = this.state
    if (_.toLower(secretCodeInput) === SECRET_CODE) {
      this.setState({openPresent: true, wrongSecret: false})
    } else {
      this.setState({wrongSecret: true})
    }
  }
  onSkipInto () {
    this.setState({
      openPresent: true,
      showContent: true,
      initialScreenOff: true,
      showRecipes: true,
    })
  }
  renderLoginPage () {
    const {
      secretCodeInput,
      openPresent,
      wrongSecret,
      initialScreenOff,
      showContent,
      showRecipes,
    } = this.state
    return (
      <div style={{height: '100vh', overflow: 'hidden'}} className='App'>
        <InitialScreen
          onSkipInto={this.onSkipInto}
          shouldRenderSkip={!showRecipes}
          shouldMoveBottomRight={initialScreenOff}
        />
        <div className={`blueScreen${initialScreenOff ? ' visible' : ''}`}>
          {showContent &&
            <div className={'appContainer'}>
              <Balloons />
              <Sky>
                <CloudCat>
                  <DialogBoxFirst
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
              <BlackScreen visible={openPresent}>
                <BlackCat />
                <DialogBoxBlackScreen visible={openPresent} onShowRecipes={this.onShowRecipes}/>
              </BlackScreen>
              <Cards visible={showRecipes} />
            </div>
          }
        </div>
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
