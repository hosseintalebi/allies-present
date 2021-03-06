import React, {Component} from 'react'
import _ from 'lodash'

import './styles.css'

export default class Sky extends Component {
  render () {
    return (
      <div className="sky">
        <div className="cloud1">
          <div className="c1" />
          <div className="c2" />
          <div className="c3" />
          <div className="c4" />
          {this.props.children}
        </div>
        <div className="cloud2">
          <div className="c1" />
          <div className="c2" />
          <div className="c3" />
          <div className="c4" />
        </div>
      </div>
    )
  }
}
