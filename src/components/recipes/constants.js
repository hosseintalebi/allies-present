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
    [INGREDIENT]: ['gluten-free flour', 'pizza sauce', 'dairy-free cheese', 'toppings'],
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
  {
    [TITLE]: 'Croissants',
    [IMAGE]: 'croissants',
    [INGREDIENT]: [ 'gluten free plain flour', 'dairy free milk', 'egg'],
    [INGREDIENT_FULL]: [
      '60ml water',
      '7g dried active yeast',
      '120ml dairy free milk',
      '1 egg',
      '50g caster sugar',
      '1/2 teaspoon salt',
      '350g gluten free plain flour',
      '1 teaspoon xanthan gum',
      '210g dairy free spread',
    ],
    [INTRODUCTION]: [
      'I’ve tried a couple of times to make croissants that are gluten and dairy free and I’ve never been entirely happy with the results, until today! As the dairy free spread is fairly difficult to work with I’ve changed the traditional technique of rolling the ‘butter’ into the dough with rubbing the dairy free spread in and it works well.',
      'So croissants are back on the menu even if you are gluten and dairy free.',
    ],
    [DESCRIPTION]: [
      {
        [TITLE]: '',
        [INTRODUCTION]: [],
        [STEPS]: [
          'Place the flour, xanthan gum and dairy free spread in a large bowl',
          'Rub the dairy free spread into the flour but leave fairly large chunks of dairy free spread',
          'Mix the water and milk together and heat in the microwave for 30 seconds',
          'Whisk in the yeast, egg, sugar and salt',
          'Pour this into the flour and butter mix',
          'Stir until combined, you should be able to see chunks of the dairy free spread',
          'Wrap in clingfilm and leave in the fridge for a couple of hours or overnight if you have time',
          'Dust the worktop with gluten free flour',
          'Roll out into a 15″ long rectangle rectangle',
          'Fold into thirds, the way you would fold a letter',
          'Rollout again to 15 ” and fold into thirds',
          'Repeat this process again',
          'Wrap in clingfilm and chill for 30 minutes in the fridge',
          'Preheat the oven to 180 oC',
          'Roll out the pastry until it is about 3mm thick',
          'Cut out 16 triangles with the base being around 5″',
          'Roll up each croissant starting at the wide end and rolling to the opposite point',
          'Curve into a croissant shape and place on a baking sheet',
          'Brush with some dairy free milk or beaten egg',
          'Bake for 20 minutes until golden brown',
          'Serve warm',
        ],
      },
    ],
    [SOURCE_NAME]: 'freefromfavourites',
    [SOURCE_LINK]: 'http://freefromfavourites.com/gluten-dairy-free-croissants/'
  },
]
