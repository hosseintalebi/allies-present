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
  SOURCE,
  RECIPES_DATA,
} from './constants'

export default class Card extends Component {

  render () {
    const { recipe, image, onClickRecipe } = this.props
    return (
      <div className='card'>
        <div className='image'>
          <img src={image} />
        </div>
        <div className='container'>
            <div className='title'>
              {recipe[TITLE]}
            </div>
            <div className='ingredient'>
              {_.reduce(recipe[INGREDIENT], (acc, item) => {
                if (acc === '') {
                  return item
                }
                return `${acc}, ${item}`
              }, '')}
            </div>
            <div
              className='recipeDirectionBtn'
            >
              <span onClick={onClickRecipe(recipe, image)}>Recipe</span>
            </div>
        </div>
      </div>
    )
  }
}
