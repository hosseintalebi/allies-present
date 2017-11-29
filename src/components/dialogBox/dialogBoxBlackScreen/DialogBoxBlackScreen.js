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
      dialog: 7, //1,
      showRecipesBtn: false,
    }
    this.setNextDialog = this.setNextDialog.bind(this)
    this.showRecipesBtn = this.showRecipesBtn.bind(this)
  }
  componentDidMount () {
    const { delayOffset = 0 } = this.props
    setTimeout(() => this.setState({visible: true}), 8500)
  }
  setNextDialog () {
    this.setState({dialog: this.state.dialog + 1})
  }
  showRecipesBtn () {
    this.setState({showRecipesBtn: true})
  }
  renderFirtDialog () {
    const { delayOffset = 0 } = this.props
    return (
      <Typist onTypingDone={this.setNextDialog} cursor={{show: false}}>
        <Typist.Delay ms={delayOffset + INITIAL_DELAY} />
        <p>You may wonder where we are and who I am!</p>
        <Typist.Delay ms={500} />
        <p>We're inside the gift box and I'm the Wise Cat!</p>
        <Typist.Delay ms={500} />
        <p>Apart from being wise, I'm able to deform to different cat shapes.</p>
        <Typist.Delay ms={1500} />
      </Typist>
    )
  }
  renderSecondDialog () {
    return(
      <Typist onTypingDone={this.setNextDialog} cursor={{show: false}}>
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
      <Typist onTypingDone={this.setNextDialog} cursor={{show: false}}>
        <p>Hossein came to me for ideas about a perfect gift for you.</p>
        <Typist.Delay ms={500} />
        <p>I told him it's simple. The perfect gift for Allie is what she loves...</p>
        <Typist.Delay ms={500} />
        <p>if you give her that, she'll be happy!</p>
        <Typist.Delay ms={1500} />
      </Typist>
    )
  }
  renderFourthDialog () {
    return (
      <Typist onTypingDone={this.setNextDialog} cursor={{show: false}}>
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
      <Typist onTypingDone={this.setNextDialog} cursor={{show: false}}>
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
    const { onShowRecipes } = this.props
    const { showRecipesBtn } = this.state
    return (
      <div>
      <Typist onTypingDone={this.showRecipesBtn} cursor={{show: false}}>
        <Typist.Delay ms={1000} />
        <p>So let's see the recipes he chose for you.</p>
        <Typist.Delay ms={500} />
        <p >Click on the button to unveil them:</p>
        <Typist.Delay ms={500} />
      </Typist>
      <div className={`recipesBtn${showRecipesBtn ? ' visible' : ''}`}>
        <span style={{textAlign: 'center'}} onClick={onShowRecipes}>Recipes</span>
      </div>
      </div>
    )
  }

  render () {
    const { styles, delayOffset = 0 } = this.props
    const { visible, dialog } = this.state
    return (
      <div style={styles} className={'dialogBoxBlackScreenContainer'}>
      <div className={'dialogBoxBlackScreen'}>
          { /*dialog === 1 &&
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
          {*/dialog === 7 &&
            this.renderSeventhDialog()
          }
        </div>
      </div>
    )
  }
}
