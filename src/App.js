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

const SECRET_CODE = 'Whereismypresent'
const COOKIE_NAME = 'firstTime'

class App extends Component {
  constructor () {
    super()
    const firstTime = this.checkFirstTime()
    this.state = {
      secretCodeInput: '',
      openPresent: false,
      wrongSecret: false,
      showContent: false,
      initialScreenOff: false,
      showRecipes: false,
      showSkip: firstTime !== '' ? true : false,
    }
    if (firstTime === '') {
      this.setCookie(10000)
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
  checkFirstTime () {
    let cookieValue = ''
    const values = document.cookie.split(';')
    _.each(values, (value) => {
      while(value.charAt(0) === ' ') {
        value = value.substring(1)
      }
      if (value.indexOf(COOKIE_NAME) === 0) {
        cookieValue = value.substring(COOKIE_NAME.length, value.length)
      }
    })
    return cookieValue
  }
  setCookie (exdays) {
    const d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + d.toUTCString()
    document.cookie = COOKIE_NAME + '=' + 'No' + ';' + expires + ";path=/"
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
  openPresent (event) {
    event.preventDefault()
    const { secretCodeInput } = this.state
    if (_.toLower(secretCodeInput) === _.toLower(SECRET_CODE)) {
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
      showSkip
    } = this.state
    return (
      <div style={{height: '100vh', overflow: 'hidden'}} className='App'>
        <InitialScreen
          onSkipInto={this.onSkipInto}
          shouldRenderSkip={!openPresent && showSkip}
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
