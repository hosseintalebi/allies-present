import React, { Component } from 'react'
import _ from 'lodash'
import './styles.css'

import {
  TITLE,
  IMAGE,
  INGREDIENT,
  INGREDIENT_FULL,
  INTRODUCTION,
  DESCRIPTION,
  STEPS,
  SOURCE_LINK,
  SOURCE_NAME,
  RECIPES_DATA,
} from './constants'

export default class Card extends Component {
  renderCloseBtn () {
    const { onClose } = this.props
    return (
      <div className='closeBtn'>
        <span onClick={onClose}>X</span>
      </div>
    )
  }
  renderImage () {
    const { image } = this.props
    return (
      <div className='image'>
        <img src={image} />
      </div>
    )
  }

  renderRecipe () {
    const { recipe } = this.props
    return (
      <div className='textContainer'>
        <div className='title'>
          {recipe[TITLE]}
        </div>
        <div className='direction'>
          {this.renderIntro()}
          {this.renderIngredients()}
          {this.renderDecriptions()}
      </div>
    </div>
    )
  }

  renderIntro () {
    const { recipe } = this.props
    return (
      <div className='introduction'>
        {recipe[INTRODUCTION]}
      </div>
    )
  }
  renderIngredients () {
    const { recipe } = this.props
    return (
      <div className='ingredient-full'>
        <div className='title'>What You'll Need</div>
        <div>
          {_.map(recipe[INGREDIENT_FULL], (item) => {
            return (
              <div>
                {`- ${item}`}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  renderDecriptions () {
    const { recipe } = this.props
    return (
      <div className='descriptions'>
        <div className='title'>
          How to Make It
        </div>
        <div>
          {
            _.map(recipe[DESCRIPTION], (description) => {
              return this.renderDecription(description)
            })
          }
        </div>
    </div>
    )
  }

  renderDecription (description) {
    return (
      <div className='description'>
        <div className='title'>
        </div>
        {_.size(description[INTRODUCTION]) > 0 &&
          _.map(description[INTRODUCTION], (intro)=> {
            return (
              <div className='intro'>{intro}</div>
            )
          })
        }
        <div className='steps'>
          {this.renderSteps(description[STEPS])}
        </div>
      </div>
    )
  }

  renderSteps (steps) {
    return _.map(steps, (step) => {
      return (
        <div className='step'>
          {step}
        </div>
      )
    })
  }

  renderSource () {
    const { recipe } = this.props
    return (
      <div className='source'>
        <span>{`Source: `}</span>
        <a href={recipe[SOURCE_LINK]} target='_blank'>
          {recipe[SOURCE_NAME]}
        </a>
      </div>
    )
  }
  render () {
    const { visible } = this.props
    return (
      <div className={`recipe${visible ? ' visible' : ''}`}>
        {this.renderCloseBtn()}
        <div className='container'>
          {this.renderImage()}
          {this.renderRecipe()}
          {this.renderSource()}
        </div>
      </div>
    )
  }
}
