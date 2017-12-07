export const TITLE = 'title'
export const IMAGE = 'image'
export const INGREDIENT = 'ingredient'
export const INGREDIENT_FULL = 'ingredient_full'
export const INTRODUCTION = 'introduction'
export const DESCRIPTION = 'description'
export const STEPS = 'steps'
export const SOURCE_NAME = 'source_name'
export const SOURCE_LINK = 'source_link'

export const RECIPES_DATA = [
  {
    [TITLE]: 'Pizza (from scratch)',
    [IMAGE]: 'pizza',
    [INGREDIENT]: ['Gluten-free flour', 'pizza sauce', 'dairy-free cheese', 'toppings'],
    [INGREDIENT_FULL]: [
      '1 cup water (warm, plus as much as 1/4 cup more if needed)',
      '1 tablespoon dry active yeast',
      '2 tablespoons sugar (unrefined cane or white)',
      '3 cups gluten-free flour (all-purpose such as King Arthur’s)',
      '1 teaspoon sea salt',
      '1/2 teaspoon baking powder',
      '1 tablespoon olive oil',
      '1/2 to 1 cup pizza sauce (store-bought or homemade)',
      '8 ounces dairy-free cheese (shredded, such as Daiya or another dairy-free cheese of your preference)',
      'any veggies you like',
    ],
    [INTRODUCTION]: [
      'This gluten-free dairy-free pizza recipe is simple enough to prepare for weekdays but can be as fancy as you’d like.',
      'Use a simple homemade pizza sauce, grandma’s favorite recipe, or a good-quality marinara you picked up at the store. As for toppings: let your taste buds reign. Some favored combinations are listed below.',
      'This recipe is suitable for dairy-free, egg-free, vegan, and gluten-free diets, but as with any recipe intended for persons with allergies or dietary restrictions, make sure to read all nutritional labels carefully to make sure that they do not contain any hidden dairy-derived ingredients (or other allergens, if these apply to you).',
    ],
    [DESCRIPTION]: [
      {
        [TITLE]: 'Make the Dough',
        [INTRODUCTION]: [],
        [STEPS]: [
          'Heat the oven to 375 F. Lightly oil a baking sheet or pizza pan.',
          'In a large mixing bowl, combine the warm water, yeast, and sugar, stirring to mix. Allow mixture to sit for about 5 minutes.',
          'Meanwhile, combine the gluten-free flour, sea salt, and baking powder in a separate bowl. Add the olive oil and flour mixture to the yeast mixture, and mix until a soft dough forms and adding more water 1 tablespoon at a time, if necessary.',
        ],
      },
      {
        [TITLE]: 'Assemble and Bake the Pizza',
        [INTRODUCTION]: [],
        [STEPS]: [
          'Press the dough into a ball with your hands. Place the ball in the prepared pan or baking sheet and working from the middle, press the dough with your hands or a rolling pin and flatten to about 1/8-inch to 1/4-inch thin. (This can be any shape you’d like, but just keep it thin!)',
          'Place the pan in the oven for 7 to 10 minutes, or until a few cracks form on the surface.',
          'Remove the pan from the oven. Using a spoon, spread the pizza sauce onto the pizza crust, leaving a 1/2-inch margin around the edges.',
          'Top generously with dairy-free cheese and veggies. (Brush the crust with a bit of olive oil here if you\'d like a darker crust.)',
          'Place back into the oven for 20 to 30 minutes or until the crust looks dry. Remove from oven.',
          'Allow pizza to cool slightly before serving. Serve hot.',
        ]
      },
      {
        [TITLE]: 'Popular Topping Combinations',
        [INTRODUCTION]: ['If you’re stumped on how to top your beautifully dairy-free and gluten-free creation, here are some ideas:'],
        [STEPS]: [
          'Daiya (or other shredded dairy-free cheese), broccoli florets, black olives',
          'Daiya, roasted garlic, sun-dried tomatoes, fresh tomatoes, fresh basil leaves',
          'Daiya, chopped bell pepper, chopped onions, fresh herbs, marinated artichoke hearts',
        ],
      },
    ],
    [SOURCE_NAME]: 'thespruce',
    [SOURCE_LINK]: 'https://www.thespruce.com/dairy-free-gluten-free-pizza-1001403'
  },
]
