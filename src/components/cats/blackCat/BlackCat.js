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
        <div className="cat">
          <div className="ear ear--left"></div>
          <div className="ear ear--right"></div>
          <div className="face">
            <div className="eye eye--left">
              <div className="eye-pupil"></div>
            </div>
            <div className="eye eye--right">
              <div className="eye-pupil"></div>
            </div>
            <div className="muzzle"></div>
          </div>
        </div>
      </div>
    )
  }
}
