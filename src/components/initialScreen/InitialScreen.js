import React, { Component } from 'react'
import _ from 'lodash'
import { BarLoader } from 'react-spinners'
import './styles.css'

export default class Ground extends Component {
  render () {
    const { openPresent } = this.props
    return (
      <div className="initialScreen">
        <div className="cake">
          <div className="velas">
            <div className="fuego"></div>
            <div className="fuego"></div>
            <div className="fuego"></div>
            <div className="fuego"></div>
            <div className="fuego"></div>
          </div>
          <div className="cobertura"></div>
          <div className="bizcocho"></div>
          <h1>happy birthday!</h1>
          <p>Allie</p>
          <BarLoader color={'#6c5299'}/>
        </div>
      </div>
    )
  }
}
