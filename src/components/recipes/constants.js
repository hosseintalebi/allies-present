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
  {
    [TITLE]: 'Sholeh Zard',
    [IMAGE]: 'sholezard',
    [INGREDIENT]: [ 'rice', 'sugar', 'saffron', 'rosewater'],
    [INGREDIENT_FULL]: [
      '1 Cup  white rice',
      '2 Cups  white sugar',
      '1/4 Cups  butter',
      '2 Teaspoons  ground saffron',
      '3 Cups  water',
      '1/4 Cups  slivered almonds',
      '1/2 Cups  rosewater',
      '1 Teaspoon  ground cardamom',
      '2 Teaspoons  ground cinnamon',
    ],
    [INTRODUCTION]: [
      'The history of this beautiful traditional dessert goes back to several hundred years ago, when it was served only on special occasions like the Persian new year. Nowadays it´s a more common food in Iran, but still people tend to make it on special events and share it with friends or family. It might sound strange but in Iran it’s very common that some neighbor, that you may hardly know knocks on your door and gives you a big bowl of this delicious dessert. for free! This kind of free foods are called “Nazri“.',
    ],
    [DESCRIPTION]: [
      {
        [TITLE]: '',
        [INTRODUCTION]: [],
        [STEPS]: [
          'Rinse the rice with cool water, put the rice and 2 cups of water in a bowl, soak it overnight.',
          'Drain the soaked rice, place in a large pot, add 3 cups of water, bring to a boil over medium heat, then reduce the heat and cook over low heat until rice is soft, stirring occasionally. Add more water if needed.',
          'Add sugar to the pot and stir until it is completely dissolved and make sure to stir the rice every so often so that it does not stick to the bottom of the pot.',
          'Add 5 tablespoons of hot water to the ground saffron. Let it brew while the rice cooks.',
          'Add butter, ground cardamom, rosewater and saffron to the rice.',
          'Continue cooking the pudding on the stove top on low heat until it is dense. Five minutes before serving it add silvered almonds.',
          'Place it in small bowls. Garnish with cinnamon and slivered almond or pistachio. Let cool before serving.',
        ],
      },
    ],
    [SOURCE_NAME]: 'thepersianpot',
    [SOURCE_LINK]: 'http://www.thepersianpot.com/recipe/shole-zard-saffron-rice-pudding/'
  },
  {
    [TITLE]: 'Vegetable Paella',
    [IMAGE]: 'paella',
    [INGREDIENT]: [ 'tomatoes', 'garlic', 'artichokes', 'rice'],
    [INGREDIENT_FULL]: [
      '8 vine-ripened plum tomatoes',
      'Kosher salt',
      '1/4 cup extra-virgin olive oil, plus more for drizzling',
      '1 small onion, finely chopped',
      '3 cloves garlic, finely chopped',
      '1 1/2 teaspoons paprika',
      '1/4 teaspoon cayenne pepper',
      '1 teaspoon saffron threads',
      '1 large bulb fennel, cut into 8 wedges',
      '8 baby artichokes, trimmed and halved (see Cook\'s Note)',
      '1 large Japanese eggplant, cut into 2-inch pieces',
      '4 ounces shiitake mushrooms, stemmed',
      '2 cups dry white wine',
      '2 1/2 cups short-grain paella rice',
      '4 ounces haricots verts or string beans, halved if large',
      '1/4 cup capers, drained',
      '1/4 cup piquillo or roasted red peppers, cut into strips',
      'Chopped fresh parsley, for garnish (optional)',
    ],
    [INTRODUCTION]: [
    ],
    [DESCRIPTION]: [
      {
        [TITLE]: '',
        [INTRODUCTION]: [],
        [STEPS]: [
          'Preheat the oven to 450 degrees. Core the tomatoes, cut into wedges and place in a medium bowl; season with salt, drizzle with a bit of olive oil and toss. Set aside.',
          'Heat 1/4 cup olive oil in a 12-inch ovenproof skillet or a paella pan over medium-high heat. Add the onion, garlic, paprika, cayenne and saffron and season with salt. Cook, stirring occasionally, until the onion softens, about 5 minutes.',
          'Add the fennel wedges and cook until lightly browned on one side, about 5 minutes. Flip the fennel and add the baby artichokes and eggplant to the skillet; cook until slightly tender, about 4 more minutes. Add the mushrooms and cook for 1 to 2 minutes. Pour in the wine and simmer until reduced by about one-third. Stir in the rice and 1 3/4 teaspoons salt; add just enough water to cover the rice completely, 2 1/2 to 3 cups. Increase the heat to high and boil for 2 to 3 minutes. Scatter the haricots verts and 2 tablespoons capers over the rice. Remove the pan from the heat and arrange the tomatoes on top; drizzle with any tomato juices.',
          'Transfer the paella to the oven and bake, undisturbed, for 20 minutes. Scatter the remaining 2 tablespoons capers and the piquillo peppers over the paella. Turn off the oven but leave the paella inside to continue cooking until the rice is tender, 15 to 20 more minutes. Garnish with parsley, if desired',
        ],
      },
    ],
    [SOURCE_NAME]: 'foodnetwork',
    [SOURCE_LINK]: 'http://www.foodnetwork.com/recipes/food-network-kitchen/vegetable-paella-recipe-1972902#reviewsTop'
  },
  {
    [TITLE]: 'Tofu Cauliflower Korma',
    [IMAGE]: 'tofuKorma',
    [INGREDIENT]: [ 'tofu', 'cauliflower', 'curry powder'],
    [INGREDIENT_FULL]: [
      '2 tbsp coconut oil or olive oil',
      '1 tbsp mild or hot curry powder',
      '2 tsp garam masala',
      '2 tsp sea salt',
      '1 cup roughly chopped carrots',
      '1 onion, peeled and roughly cut',
      '3 cloves garlic, roughly chopped',
      '1/3 to 1/2 cup unsweetened shredded coconut or coconut milk, to your taste',
      '1 (28 oz) can whole tomatoes',
      '1 (350g/12 oz) pkg extra firm tofu, (pressed if you have time) cut into ½-inch cubes',
      '1 small cauliflower, cut into bite-sized florets',
      '1 tbsp lemon juice',
      'Chopped fresh mint or cilantro, to serve (optional)',
      'Cooked brown rice or quinoa, to serve (optional)',
    ],
    [INTRODUCTION]: [
      'What exactly is a korma, you may ask? I’m not sure. I’ve called this a “korma” as my method of nomenclature here revolves around my Cookshelf Indian cookbook, a gift I received many years ago from a former colleague of my dad’s, and a swift search on Google.',
      'With a few fresh ingredients, a blend of spices (which themselves have a variety of anti-inflammatory, antioxidant, and healthy-promoting qualities), and some tofu, a meal that all diners and diets can partake in, is served. When stewed, tofu gets incredibly tender, soaking in the zippy seasoning from those heady Indian spices. Ditto for the cauliflower. I can make a tofu and cauliflower believer out of you. If you’re avoiding soy or simply can’t stomach tofu, you can replace it with chickpeas and it’ll turn out just as well.',
    ],
    [DESCRIPTION]: [
      {
        [TITLE]: '',
        [INTRODUCTION]: [],
        [STEPS]: [
          'In a large pot, heat oil over medium heat; add spices, salt, carrots, onion, garlic, and shredded coconut (if not using coconut milk). Sauté for 10 minutes.',
          'Add tomatoes and coconut milk (if not using shredded coconut); bring to a boil, reduce to medium, cover, and cook for 15 to 20 minutes, until vegetables are very tender. Transfer to a blender or food processor (or use an immersion/stick blender); purée until smooth. Add back to pot along with tofu, cauliflower, and lemon juice. Bring to a boil, reduce to medium, cover, and cook until cauliflower is extremely tender (about 15 minutes).',
          'Serve hot with brown rice, basmati rice, or quinoa, and a scattering of mint.',
        ],
      },
    ],
    [SOURCE_NAME]: 'yummybeet',
    [SOURCE_LINK]: 'http://yummybeet.com/tofu-cauliflower-korma/'
  },
  {
    [TITLE]: 'Vegetable and Tofu Pad Thai',
    [IMAGE]: 'tofupad',
    [INGREDIENT]: [ 'rice noodles', 'eggs', 'chili sauce'],
    [INGREDIENT_FULL]: [
      '8 ounces dried wide, flat rice noodles',
      '1/4 cup fresh lime juice, plus lime wedges for serving (3 limes)',
      '3 tablespoons soy sauce or fish sauce',
      '1 tablespoon chili sauce, such as Sriracha',
      '1 tablespoon packed dark-brown sugar',
      '2 tablespoons vegetable oil',
      '2 large eggs, lightly beaten',
      '1 package (14 ounces) firm tofu, drained, thinly sliced, and patted dry',
      '2 medium carrots, peeled and shredded',
      '2 garlic cloves, minced',
      '8 scallions, white and green parts separated and thinly sliced',
      'Coarse salt',
      '2 tablespoons roasted salted peanuts, chopped',
      '1/4 cup fresh cilantro leaves',
    ],
    [INTRODUCTION]: [
      'Make this healthy version of the tasty Thai classic in less time than it takes to have it delivered. If you have fish sauce and aren\'t a strict vegetarian, substitute it for the soy sauce. It will give the dish deeper flavor. ',
    ],
    [DESCRIPTION]: [
      {
        [TITLE]: '',
        [INTRODUCTION]: [],
        [STEPS]: [
          'Soak noodles according to package instructions; drain. In a small bowl, whisk together lime juice, soy sauce, chili sauce, and brown sugar.',
          'In a large nonstick skillet, heat 1/2 teaspoon oil over medium-high, tilting to coat pan. Add eggs, swirl to coat bottom, and cook until just set, about 1 minute. Transfer eggs to a cutting board, loosely roll up, and cut crosswise into thin strips. Add 4 teaspoons oil to skillet and heat. Add tofu in a single layer and cook until golden brown on both sides, 7 minutes, flipping halfway through. Transfer to cutting board.',
          'Add 1 1/2 teaspoons oil, carrots, garlic, and scallion whites to skillet and cook until softened, 5 minutes. Add lime-juice mixture and bring to a simmer. Add noodles and cook, stirring frequently, 1 minute. Add eggs and tofu and gently toss to combine. Season to taste with salt. Divide among 4 plates and top with peanuts, cilantro, and scallion greens. Serve with lime wedges.',
        ],
      },
    ],
    [SOURCE_NAME]: 'marthastewart',
    [SOURCE_LINK]: 'https://www.marthastewart.com/872941/vegetable-and-tofu-pad-thai'
  },
  {
    [TITLE]: 'Gnocchi with spinach pesto and caramelised leeks',
    [IMAGE]: 'gnocchi',
    [INGREDIENT]: [ 'gnocchi', 'leeks', 'baby spinach'],
    [INGREDIENT_FULL]: [
      '135g baby leeks',
      'A little olive oil for drizzling',
      '2 handfuls of baby spinach',
      '70g walnuts',
      '40g grated parmesan',
      '1 small garlic clove',
      'A small handful of basil',
      '50ml extra-virgin olive oil',
      '800g fresh gnocchi',
      'Lemon juice, to serve',
    ],
    [INTRODUCTION]: [
    ],
    [DESCRIPTION]: [
      {
        [TITLE]: '',
        [INTRODUCTION]: [],
        [STEPS]: [
          'Heat the oven to 200°C/fan180°C/gas 6. Toss the leeks in a little olive oil in a baking tray, season and roast for 10 minutes until golden, turning once.',
          'Wash and dry the spinach. In a mini food processor, whizz the walnuts, parmesan (or vegetarian alternative), garlic and basil into crumbs.',
          'Drizzle in the extra-virgin olive oil and whizz into a chunky paste. Add the spinach and pulse to combine.',
          'Drop the gnocchi into boiling salted water. When they float they’re cooked. Drain, reserving a cup of cooking water, and toss with the pesto, adding a little water if too dry. Season and squeeze over a little lemon. Tear the leeks into shreds and serve with the gnocchi.',
        ],
      },
    ],
    [SOURCE_NAME]: 'marthastewart',
    [SOURCE_LINK]: 'https://www.marthastewart.com/872941/vegetable-and-tofu-pad-thai'
  },
]
