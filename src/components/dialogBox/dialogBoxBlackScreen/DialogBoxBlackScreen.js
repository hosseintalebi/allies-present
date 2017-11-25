import React, { Component } from 'react'
import _ from 'lodash'
import Typist from 'react-typist'
import './styles.css'

const INITIAL_DELAY = 9500
const DELAY_BETWEEN_P = 600
const TIME_OF_FIRST_DIALOG = INITIAL_DELAY + 3 * 600

export default class DialogBoxBlackScreen extends Component {
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
      <Typist avgTypingDelay={85} onTypingDone={this.setNextDialog} cursor={{show: false}}>
        <Typist.Delay ms={delayOffset + INITIAL_DELAY} />
        <p>You may wonder where we are now and who I am!</p>
        <Typist.Delay ms={500} />
        <p>We're inside the gift box and I'm the wise cat!</p>
        <Typist.Delay ms={500} />
        <p>Apart from being wise, I'm able to deform to different cat shapes.</p>
        <Typist.Delay ms={1500} />
      </Typist>
    )
  }
  renderSecondDialog () {
    return(
      <Typist avgTypingDelay={85} onTypingDone={this.setNextDialog} cursor={{show: false}}>
        <p>Ok... enough about me! Let's get to your present.</p>
        <Typist.Delay ms={500} />
        <p>Considering that I'm inside your gift box, you may think that I'm your present!</p>
        <Typist.Delay ms={500} />
        <p>I know it's disappointing... <span style={{fontSize: '2em'}}>but I'm not!</span></p>
        <Typist.Delay ms={1500} />
      </Typist>
    )
  }
  renderThirdDialog () {
    return (
      <Typist avgTypingDelay={85} onTypingDone={this.setNextDialog} cursor={{show: false}}>
        <p>Hossein came to me for ideas about a perfect gift for you.</p>
        <Typist.Delay ms={500} />
        <p>I told him it's simple. The perfect gift for Allie is what she loves...</p>
        <Typist.Delay ms={500} />
        <p>I told him there's something that she loves even more than you... if you give her that, she'll be happy!</p>
        <Typist.Delay ms={1500} />
      </Typist>
    )
  }
  renderFourthDialog () {
    return (
      <Typist avgTypingDelay={85} onTypingDone={this.setNextDialog} cursor={{show: false}}>
        <p>You know what I'm talking about, right?</p>
        <Typist.Delay ms={500} />
        <p style={{textAlign: 'center'}}>Yeah! Your gift is:</p>
        <Typist.Delay ms={500} />
        <p style={{textAlign: 'center'}}>...</p>
        <Typist.Backspace count={3} delay={1500} />
        <p style={{fontSize: '1.5em', textAlign: 'center'}}>...</p>
        <Typist.Backspace count={3} delay={2000} />
        <p style={{fontSize: '2em', textAlign: 'center'}}>...</p>
        <Typist.Delay ms={1500} />
      </Typist>
    )
  }

  renderFifthDialog () {
    return (
      <div>
        <Typist onTypingDone={this.setNextDialog} cursor={{show: false}}>
          <Typist.Delay ms={1000} />
          <p style={{textAlign: 'center', fontSize: '4em'}}>FOOD</p>
          <Typist.Delay ms={1000} />
          <p style={{textAlign: 'center'}}>Let's be honest, we all know you love food more than him!</p>
          <Typist.Delay ms={2000} />
        </Typist>
      </div>

    )
  }
  renderSixthDialog () {
    return (
      <Typist avgTypingDelay={85} onTypingDone={this.setNextDialog} cursor={{show: false}}>
        <Typist.Delay ms={1000} />
        <p>Now let me explain how it works.</p>
        <Typist.Delay ms={500} />
        <p>He found 10 new recipes for you!</p>
        <Typist.Delay ms={500} />
        <p>You can choose 5 of those and he'll cook them for you in 5 weekends!</p>
        <Typist.Delay ms={1500} />
      </Typist>
    )
  }

  renderSeventhDialog () {
    return (
      <Typist avgTypingDelay={85} cursor={{show: false}}>
        <Typist.Delay ms={1000} />
        <p>So let's see the recipes he chose for you.</p>
        <Typist.Delay ms={500} />
        <p >Click on the button to unveil them:</p>
        <Typist.Delay ms={500} />
        <span style={{textAlign: 'center'}}>Recipes</span>
        <Typist.Delay ms={1500} />
      </Typist>
    )
  }

  render () {
    const { styles, delayOffset = 0 } = this.props
    const { visible, dialog } = this.state
    return (
      <div style={styles} className={'dialogBoxBlackScreenContainer'}>
      <div className={'dialogBoxBlackScreen'}>
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
          {dialog === 5 &&
            this.renderFifthDialog()
          }
          {dialog === 6 &&
            this.renderSixthDialog()
          }
          {dialog === 7 &&
            this.renderSeventhDialog()
          }
        </div>
      </div>
    )
  }
}
