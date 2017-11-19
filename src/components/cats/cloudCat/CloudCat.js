import React, { Component } from 'react'
import _ from 'lodash'
import './styles.css'

export default class CloudCat extends Component {
  render () {
    return (
      <div className="cloudCatCtontainer">
        <div className="cloudCat">
          <span className="eyes left"></span>
          <span className="eyes right"></span>
          <span className="mouth"></span>
        </div>
      </div>
    )
  }
}
