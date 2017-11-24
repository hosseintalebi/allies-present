import React, { Component } from 'react'
import _ from 'lodash'
import Typist from 'react-typist';
import {emojify} from 'react-emojione'
import './styles.css'

const INITIAL_DELAY = 9500
const DELAY_BETWEEN_P = 600
const TIME_OF_FIRST_DIALOG = INITIAL_DELAY + 3 * 600

export default class DialogBox extends Component {
  constructor () {
    super()
    this.state = {
      visible: false,
      dialog: 1
    }
    this.setNextDialog = this.setNextDialog.bind(this)
  }
  componentDidMount () {
    const { delayOffset = 0 } = this.props
    setTimeout(() => this.setState({visible: true}), 8500)
  }
  setNextDialog () {
    this.setState({dialog: this.state.dialog + 1})
  }
  renderFirtDialog () {
    const { delayOffset = 0 } = this.props
    return (
      <Typist onTypingDone={this.setNextDialog} cursor={{show: false}}>
        <Typist.Delay ms={delayOffset + INITIAL_DELAY} />
        <p style={{textAlign: 'center'}}>
          <br />
          <p style={{margin: 0, marginTop: 15, fontWeight: 400}}>Happy Birthday Allie!</p>
          <br />
        </p>
        <Typist.Delay ms={2500} />
      </Typist>
    )
  }
  renderSecondDialog () {
    return(
      <Typist onTypingDone={this.setNextDialog} cursor={{show: false}}>
        <p>
          {"I'm the Wise Cat!"}
        </p>
        <Typist.Delay ms={DELAY_BETWEEN_P} />
        <p>
        I helped Hossein to find the perfect present for you!
        </p>
        <Typist.Delay ms={2000} />
      </Typist>
    )
  }
  renderThirdDialog () {
    return (
      <Typist onTypingDone={this.setNextDialog} cursor={{show: false}}>
        <p>
          {"Why don't you go ahead and type the secret code to open your present?"}
        </p>
        <Typist.Delay ms={1200} />
      </Typist>
    )
  }
  renderFourthDialog () {
    const { onChangeSecretCode, secretCodeInput, openPresent, wrongSecret } = this.props
    return (
      <div id="secretCode">
        <p>Your Secret Code:</p>
        <input
          type="password"
          value={secretCodeInput}
          onChange={onChangeSecretCode}
        />
        <span onClick={openPresent}>Open</span>
        {wrongSecret ?
        <p>Sorry, wrong Secret!</p>
      : <p>{' '}</p>}
      </div>
    )
  }
  render () {
    const { styles, delayOffset = 0 } = this.props
    const { visible, dialog } = this.state
    return (
      <div style={styles} className={`dialogBox ${visible ? 'visible' : ''}`}>
        {dialog === 1 &&
          this.renderFirtDialog()
        }
        {dialog === 2 &&
          this.renderSecondDialog()
        }
        {dialog === 3 &&
          this.renderThirdDialog()
        }
        {dialog === 4 &&
          this.renderFourthDialog()
        }
      </div>
    )
  }
}
