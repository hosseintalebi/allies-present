import React, { Component } from 'react'
import _ from 'lodash'
import OverflowScrolling from 'react-overflow-scrolling'

import Recipe from './Recipe'
import './styles.css'
import Gheime from './resourses/gheime.jpeg'
import Ghorme from './resourses/ghorme.jpg'
import Kookoo from './resourses/kookoo.jpg'

import Card from './Card'

import { RECIPES_DATA } from './constants'

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
  onCloseRecipe () {
    this.setState({
      showRecipe: false,
      selectedRecipe: {},
      image: null,
    })
  }
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
    const { showRecipe, image, selectedRecipe } = this.state
    const { visible } = this.props
    console.log('showRecipe: ', showRecipe)
    return (
      <div className={`cards${visible ? ' visible' : ''}`}>
        <OverflowScrolling className='overflow-scrolling'>
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
        </OverflowScrolling>

      </div>
    )
  }
}
