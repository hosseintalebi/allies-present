import React, { Component } from 'react'
import _ from 'lodash'
import './styles.css'

export default class Ground extends Component {
  render () {
    const { openPresent } = this.props
    return (
      <div className="giftBoxContainer">
        <div className={`box${ openPresent ? ' open' : ''}`}>

          <div className="box-top">
            <ul>
              <li className="first"></li>
              <li className="middle"></li>
              <li className="last"></li>
            </ul>
            <div className="lid"><span></span></div>
          </div>

          <div className="box-bottom">
            <div className="base"><span></span></div>
          </div>
        </div>
      </div>
    )
  }
}
