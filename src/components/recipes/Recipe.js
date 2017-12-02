import React, { Component } from 'react'
import _ from 'lodash'
import './styles.css'

export default class Card extends Component {
  render () {
    const { recipe, image, visible, onClose } = this.props
    return (
      <div className={`recipe${visible ? ' visible' : ''}`}>
        <div className='closeBtn'>
          <span onClick={onClose}>X</span>
        </div>
        <div className='container'>
          <div className='image'>
            <img src={image} />
          </div>
            <div className='title'>
              {recipe.title}
            </div>
            <div className='direction'>
              <div className='ingredient'>
                {_.reduce(recipe.ingredient, (acc, item) => {
                  if (acc === '') {
                    return item
                  }
                  return `${acc}, ${item}`
                }, '')}
              </div>
              <div>
                how to
              </div>
            </div>
        </div>
      </div>
    )
  }
}
