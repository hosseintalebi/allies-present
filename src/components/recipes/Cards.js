import React, { Component } from 'react'
import _ from 'lodash'
import Recipe from './Recipe'
import './styles.css'
import Pizza from './resourses/pizza.jpg'
import Croissants from './resourses/croissants.jpg'
import Kookoo from './resourses/kookoo.jpg'

import Card from './Card'

import {
  IMAGE,
  RECIPES_DATA,
} from './constants'

export default class Cards extends Component {
  constructor() {
    super()
    this.state = {
      showRecipe: false,
      selectedRecipe: {},
      image: null,
    }
    this.onClickRecipe = this.onClickRecipe.bind(this)
    this.onCloseRecipe = this.onCloseRecipe.bind(this)
  }
  onClickRecipe (recipe, image) {
    console.log('onClick init')
    return () => {
      console.log('onClick called')
      this.setState({
        showRecipe: true,
        selectedRecipe: recipe,
        image: image,
      })
    }
  }
  onCloseRecipe (ref) {
    const className = ref.target.className || ''
    if (className.indexOf('closeArea') !== -1) {
      this.setState({
        showRecipe: false,
        selectedRecipe: {},
        image: null,
      })
    }
  }
  getImage(recipe) {
    switch (recipe[IMAGE]) {
      case 'pizza':
        return Pizza
      case 'croissants':
        return Croissants
      case 'kookoo':
        return Kookoo
    }
  }

  render () {
    const { showRecipe, image, selectedRecipe } = this.state
    const { visible } = this.props
    console.log('showRecipe: ', showRecipe)
    return (
      <div className={`cards${visible ? ' visible' : ''}`}>
        <div className='cardsTitle'>
          Recipes for You
        </div>
        {
          _.map(RECIPES_DATA, (recipe, key) => {
            const image = this.getImage(recipe)
            return (
                <Card
                key={`Card${key}`}
                recipe={recipe}
                image={image}
                onClickRecipe={this.onClickRecipe}
              />
            )
          })
        }
        <Recipe
          onClose={this.onCloseRecipe}
          visible={showRecipe}
          recipe={selectedRecipe}
          image={image}
        />
      </div>
    )
  }
}
