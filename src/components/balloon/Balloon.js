import React, {Component} from 'react'
import _ from 'lodash'
import './styles.css'
export default class Balloon extends Component {
  constructor () {
    super()
    this.state = {
      divClassName: ''
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({divClassName: 'float'})
    }, _.random(1.0, 2.1) * 1000 )
  }
  render () {
    const { color } = this.props
    const { divClassName } = this.state
    return (
      <div style={{marginLeft: -20}}>
        <div className={'balloon'}>
          <div>
            <div className={`${divClassName} ${color}`}></div>
          </div>
        </div>
      </div>
    )
  }
}
