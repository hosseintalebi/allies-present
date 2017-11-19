import React, { Component } from 'react'
import _ from 'lodash'
import './styles.css'

export default class Ground extends Component {
  render () {
    return (
      <div class="giftBoxContainer">
        <div class="box">

          <div class="box-top">
            <ul>
              <li class="first"></li>
              <li class="middle"></li>
              <li class="last"></li>
            </ul>
            <div class="lid"><span></span></div>
          </div>

          <div class="box-bottom">
            <div class="base"><span></span></div>
          </div>
        </div>
      </div>
    )
  }
}
