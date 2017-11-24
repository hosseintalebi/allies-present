import React, { Component } from 'react'
import _ from 'lodash'
import './styles.css'

export default class BlackCat extends Component {
  constructor () {
    super()
    this.state = {
      visible: false,
    }
  }
  componentDidMount () {
    setTimeout(() => this.setState({visible: true}), 4000)
  }
  render () {
    const {visible} = this.state
    return (
      <div className={`blackCatCtontainer${visible ? ' visible' : ''}`}>
        <div class="cat">
          <div class="ear ear--left"></div>
          <div class="ear ear--right"></div>
          <div class="face">
            <div class="eye eye--left">
              <div class="eye-pupil"></div>
            </div>
            <div class="eye eye--right">
              <div class="eye-pupil"></div>
            </div>
            <div class="muzzle"></div>
          </div>
        </div>
      </div>
    )
  }
}
