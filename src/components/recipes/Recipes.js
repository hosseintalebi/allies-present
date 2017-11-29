import React, { Component } from 'react'
import _ from 'lodash'
import './styles.css'
import Gheime from './resourses/gheime.jpeg'
import Ghorme from './resourses/ghorme.jpg'
import Kookoo from './resourses/kookoo.jpg'

import Recipe from './Recipe'

import { RECIPES_DATA } from './constants'

export default class Recipes extends Component {
  getImage(recipe) {
    switch (recipe.image) {
      case 'gheime':
        return Gheime
      case 'ghorme':
        return Ghorme
      case 'kookoo':
        return Kookoo
    }
  }
  render () {
    const { visible } = this.props
    return (
      <div className={`recipes${visible ? ' visible' : ''}`}>
        <div className='recipesTitle'>
          Recipes for You
        </div>
        {
          _.map(RECIPES_DATA, (recipe, key) => {
            const image = this.getImage(recipe)
            return <Recipe key={`recipe${key}`} recipe={recipe} image={image}/>
          })
        }
      </div>
    )
  }
}
