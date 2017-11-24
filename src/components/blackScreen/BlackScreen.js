import React, {Component} from 'react'
import _ from 'lodash'

import './styles.css'

export default class BlackScreen extends Component {
  render () {
    const { visible } = this.props
    return (
      <div className={`blackScreen${visible ? ' visible': ''}`}>
        {visible && this.props.children}
      </div>
    )
  }
}
