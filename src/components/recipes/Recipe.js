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
      <div className='closeBtn closeArea'>
        <span className='closeArea' onClick={onClose}>X</span>
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
        <div className='title1'>
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
        {
          _.map(recipe[INTRODUCTION], (intro) => {
            return <div>{intro}</div>
          })
        }
      </div>
    )
  }
  renderIngredients () {
    const { recipe } = this.props
    return (
      <div className='ingredient-full'>
        <div className='title1'>What You'll Need</div>
        <div>
          {_.map(recipe[INGREDIENT_FULL], (item) => {
            return (
              <div className='ingredient-item'>
                <div className='bullet'>•</div>
                <div>{item}</div>
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
        <div className='title1'>
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
        <div className='title2'>
          {description[TITLE]}
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
    return _.map(steps, (step, index) => {
      return (
        <div className='step'>
          <div className='step-number'>
            {`${index < 9 ? '0' : ''}${index + 1}`}
          </div>
          <div>
            {step}
          </div>
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

  isSmallScreen () {
    const { innerWidth } = window
    return innerWidth < 500
  }
  render () {
    const { visible, onClose} = this.props
    const sm = this.isSmallScreen()
    return (
      <div
        className={`closeArea recipe${visible ? ' visible' : ''}`}
        onClick={onClose}>
        {this.renderCloseBtn()}
        <div className='container' style={{width: sm ? '100%' : '85%', marginBottom: sm ? 0 : 20}}>
          {this.renderImage()}
          {this.renderRecipe()}
          {this.renderSource()}
        </div>
      </div>
    )
  }
}
