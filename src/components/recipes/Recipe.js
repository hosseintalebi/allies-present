import React, { Component } from 'react'
import _ from 'lodash'
import './styles.css'

export default class Recipe extends Component {
  render () {
    const { recipe, image } = this.props
    return (
      <div className={'recipe'}>
        <div className='image'>
          <img src={image} />
        </div>
        <div className='container'>
            <div className='title'>
              {recipe.title}
            </div>
            <div className='ingredient'>
              {_.reduce(recipe.ingredient, (acc, item) => {
                if (acc === '') {
                  return item
                }
                return `${acc}, ${item}`
              }, '')}
            </div>
            <div className='recipeDirectionBtn'>
              <span>Recipe</span>
            </div>
        </div>

      </div>
    )
  }
}
