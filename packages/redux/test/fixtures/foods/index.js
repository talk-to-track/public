// @flow

import type { ServiceFood } from '../../../src/types/ServiceFood';

export const foodScrambledEggs: ServiceFood = {
  foodID: 10294,
  foodName: 'Scrambled Eggs',
  nutriValues: {
    calcium: 40.25,
    calories: 91,
    carbs: 1,
    cholesterol: 169,
    fat: 7,
    iron: 0.8,
    protein: 6.1,
    satFat: 2.05,
    sodium: 88.5,
    sugars: 0.85,
    transFat: 0.38,
    vitA: 352.5,
  },
};

export const foodBacon: ServiceFood = {
  foodID: 846337,
  foodName: 'Bacon Strips - Fried',
  nutriValues: {
    calories: 86,
    cholesterol: 18,
    fat: 6.6,
    protein: 6,
    satFat: 2,
    sodium: 274,
  },
};

export const foodBlackCoffee: ServiceFood = {
  foodID: 847045,
  foodName: 'Black Coffee',
  nutriValues: {
    calories: 2,
    protein: 0.3,
    sodium: 5,
  },
};

export const foodOrangeJuice: ServiceFood = {
  foodID: 2293,
  foodName: 'Orange Juice',
  nutriValues: {
    calcium: 20,
    calories: 110,
    carbs: 26,
    protein: 2,
    sugars: 22,
    vitC: 72,
  },
};

export const foodSubwaySpicyItalian: ServiceFood = {
  foodID: 502753,
  foodName: 'Subway Spicy Italian',
  nutriValues: {
    calcium: 64.9917,
    calories: 274.6167,
    carbs: 30.7631,
    cholesterol: 27,
    fat: 11.5833,
    fiber: 4.6399,
    iron: 1.6386,
    protein: 11.3737,
    satFat: 4.03,
    sodium: 774.4175,
    sugars: 6.992,
    transFat: 0.25,
    vitA: 754.8917,
    vitC: 39.029,
  },
};

export const foodClassicGardenSalad: ServiceFood = {
  foodID: 272349,
  foodName: 'Fresh Selections by Kroger Classic Garden Salad',
};

export const foodRomaTomatoSlice: ServiceFood = {
  foodID: 436982,
  foodName: 'Roma Tomato Slices',
};

export const foodWhiteOnion: ServiceFood = {
  foodID: 3864,
  foodName: 'White Onion - Chopped',
};

export const foodGreenBellPepper: ServiceFood = {
  foodID: 3883,
  foodName: 'Green Bell Pepper - Fresh, Chopped',
};

export const foodReducedFatMayonnaise: ServiceFood = {
  foodID: 517278,
  foodName: 'Kraft Mayo with Olive Oil - Reduced Fat Mayonnaise',
};

export const foodItalianSub: ServiceFood = {
  foodID: 528698,
  foodName: 'Italian Sub',
  foodPortions: [
    { foodID: foodSubwaySpicyItalian.foodID, unitID: 0 },
    { foodID: foodClassicGardenSalad.foodID, unitID: 0 },
    { foodID: foodRomaTomatoSlice.foodID, unitID: 0 },
    { foodID: foodWhiteOnion.foodID, unitID: 0 },
    { foodID: foodGreenBellPepper.foodID, unitID: 0 },
    { foodID: foodReducedFatMayonnaise.foodID, unitID: 0 },
  ],
};

export const foodBakedPotatoChip: ServiceFood = {
  foodID: 38697,
  foodName: 'Baked Potato Chips',
  nutriValues: {
    calories: 119.998,
    carbs: 21.9996,
    fat: 3.4999,
    fiber: 2,
    iron: 0.36,
    protein: 2,
    sodium: 139.9976,
    sugars: 2,
    vitC: 1.8,
  },
};

export const foodClubSoda: ServiceFood = {
  foodID: 10400,
  foodName: 'Club Soda',
  nutriValues: {
    calcium: 6.6667,
    sodium: 50,
  },
};

export const foodRomaineLettuce: ServiceFood = {
  foodID: 3851,
  foodName: 'Romaine Lettuce - Chopped or Shredded',
  nutriValues: {
    calories: 10,
    carbs: 1,
    fiber: 1,
    protein: 1,
    vitC: 6,
    vitA: 500,
  },
};

export const foodCaesarSaladDressing: ServiceFood = {
  foodID: 847929,
  foodName: 'Girard\'s Caesar Salad Dressing',
  nutriValues: {
    calcium: 80,
    carbs: 3,
    calories: 100,
    cholesterol: 80,
    fat: 20,
    protein: 1,
    satFat: 6,
    sodium: 550,
    sugars: 1,
    vitA: 3000,
  },
};

export const foodSeasonedCrouton: ServiceFood = {
  foodID: 13682,
  foodName: 'Seasoned Crouton',
  nutriValues: {
    calories: 100,
    carbs: 6,
    fiber: 3,
    iron: 0.5,
    protein: 1,
    sodium: 150,
    sugars: 4,
    vitA: 100,
  },
};

export const foodParmesanCheese: ServiceFood = {
  foodID: 1010,
  foodName: 'Kraft Parmesan Cheese',
  nutriValues: {
    calcium: 120,
    calories: 200,
    cholesterol: 40,
    fat: 10,
    iron: 0.5,
    protein: 4,
    satFat: 2,
    sodium: 300,
    vitA: 100,
  },
};

export const foodCaesarSalad: ServiceFood = {
  foodID: 30045,
  foodName: 'Caesar Salad',
  foodPortions: [
    { foodID: foodRomaineLettuce.foodID, unitID: 0 },
    { foodID: foodCaesarSaladDressing.foodID, unitID: 0 },
    { foodID: foodSeasonedCrouton.foodID, unitID: 0 },
    { foodID: foodParmesanCheese.foodID, unitID: 0 },
  ],
};

export const foodRedWine: ServiceFood = {
  foodID: 11194,
  foodName: 'Red Wine',
  nutriValues: {
    calcium: 11.76,
    calories: 124.95,
    carbs: 3.8367,
    iron: 0.6762,
    protein: 0.1029,
    sodium: 5.88,
    sugars: 0.9114,
    vitA: 2.94,
  },
};

export const foodChickenNugget: ServiceFood = {
  foodID: 824593,
  foodName: 'Chicken Nuggets',
  nutriValues: {
    calories: 48,
    carbs: 3,
    cholesterol: 6,
    fat: 2.9,
    iron: 0.072,
    protein: 2.4,
    satFat: 0.6,
    sodium: 100,
  },
};

export const foods = {
  [foodScrambledEggs.foodID]: foodScrambledEggs,
  [foodBacon.foodID]: foodBacon,
  [foodOrangeJuice.foodID]: foodOrangeJuice,
  [foodItalianSub.foodID]: foodItalianSub,
  [foodSubwaySpicyItalian.foodID]: foodSubwaySpicyItalian,
  [foodClassicGardenSalad.foodID]: foodClassicGardenSalad,
  [foodRomaTomatoSlice.foodID]: foodRomaTomatoSlice,
  [foodWhiteOnion.foodID]: foodWhiteOnion,
  [foodGreenBellPepper.foodID]: foodGreenBellPepper,
  [foodReducedFatMayonnaise.foodID]: foodReducedFatMayonnaise,
  [foodBakedPotatoChip.foodID]: foodBakedPotatoChip,
  [foodClubSoda.foodID]: foodClubSoda,
  [foodCaesarSalad.foodID]: foodCaesarSalad,
  [foodRomaineLettuce.foodID]: foodRomaineLettuce,
  [foodCaesarSaladDressing.foodID]: foodCaesarSaladDressing,
  [foodSeasonedCrouton.foodID]: foodSeasonedCrouton,
  [foodParmesanCheese.foodID]: foodParmesanCheese,
  [foodRedWine.foodID]: foodRedWine,
  [foodChickenNugget.foodID]: foodChickenNugget,
};
