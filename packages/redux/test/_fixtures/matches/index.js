// @flow

import type { ServiceEntityRecognitionResponse } from '../../../src/types/ServiceEntityRecognitionResponse';

import {
  foodBacon,
  foodBakedPotatoChip,
  foodBlackCoffee,
  foodCaesarSalad,
  foodCaesarSaladDressing,
  foodChickenNugget,
  foodClassicGardenSalad,
  foodClubSoda,
  foodGreenBellPepper,
  foodItalianSub,
  foodOrangeJuice,
  foodRedWine,
  foodReducedFatMayonnaise,
  foodRomaTomatoSlice,
  foodRomaineLettuce,
  foodScrambledEggs,
  foodSeasonedCrouton,
  foodSubwaySpicyItalian,
  foodWhiteOnion,
} from '../foods';

export const foodMatchTwoScrambled: ServiceEntityRecognitionResponse = {
  text: '2 scrambled eggs',
  entities: {
    foods: {
      [foodScrambledEggs.foodID]: foodScrambledEggs,
    },
  },
  translations: [{
    segments: [{
      type: 0,
      value: {
        foodPortions: [{
          foodID: foodScrambledEggs.foodID,
          qty: 2,
          unitID: 5,
        }],
      },
    }],
  }],
};

export const foodMatchBacon: ServiceEntityRecognitionResponse = {
  text: 'Bacon',
  entities: {
    foods: {
      [foodBacon.foodID]: foodBacon,
    },
  },
  translations: [{
    segments: [{
      type: 0,
      value: {
        foodPortions: [{
          foodID: foodBacon.foodID,
          qty: 2,
          unitID: 5,
        }],
      },
    }],
  }],
};

export const foodMatchBlackCoffee: ServiceEntityRecognitionResponse = {
  text: 'Black coffee',
  entities: {
    foods: {
      [foodBlackCoffee.foodID]: foodBlackCoffee,
    },
  },
  translations: [{
    segments: [{
      type: 0,
      value: {
        foodPortions: [{
          foodID: foodBlackCoffee.foodID,
          qty: 1,
          unitID: 3,
        }],
      },
    }],
  }],
};

export const foodMatchACupOfOJ: ServiceEntityRecognitionResponse = {
  text: 'A cup of OJ',
  entities: {
    foods: {
      [foodOrangeJuice.foodID]: foodOrangeJuice,
    },
  },
  translations: [{
    segments: [{
      type: 0,
      value: {
        foodPortions: [{
          foodID: foodOrangeJuice.foodID,
          qty: 1,
          unitID: 95,
        }],
      },
    }],
  }],
};

export const foodMatchMyRegularItalianSub: ServiceEntityRecognitionResponse = {
  text: 'My regular italian sub',
  entities: {
    foods: {
      [foodItalianSub.foodID]: foodItalianSub,
      [foodSubwaySpicyItalian.foodID]: foodSubwaySpicyItalian,
      [foodClassicGardenSalad.foodID]: foodClassicGardenSalad,
      [foodRomaTomatoSlice.foodID]: foodRomaTomatoSlice,
      [foodWhiteOnion.foodID]: foodWhiteOnion,
      [foodGreenBellPepper.foodID]: foodGreenBellPepper,
      [foodReducedFatMayonnaise.foodID]: foodReducedFatMayonnaise,
    },
  },
  translations: [{
    segments: [{
      type: 0,
      value: {
        foodPortions: [{
          foodID: foodItalianSub.foodID,
          qty: 1,
          unitID: 5,
          foodPortions: [
            { foodID: foodSubwaySpicyItalian.foodID, qty: 1, unitID: 0 },
            { foodID: foodClassicGardenSalad.foodID, qty: 1, unitID: 0 },
            { foodID: foodRomaTomatoSlice.foodID, qty: 1, unitID: 0 },
            { foodID: foodWhiteOnion.foodID, qty: 1, unitID: 0 },
            { foodID: foodGreenBellPepper.foodID, qty: 1, unitID: 0 },
            { foodID: foodReducedFatMayonnaise.foodID, qty: 1, unitID: 0 },
          ],
        }],
      },
    }],
  }],
};

export const foodMatchSomeBakedChips: ServiceEntityRecognitionResponse = {
  text: 'Some baked chips',
  entities: {
    foods: {
      [foodBakedPotatoChip.foodID]: foodBakedPotatoChip,
    },
  },
  translations: [{
    segments: [{
      type: 0,
      value: {
        foodPortions: [{
          foodID: foodBakedPotatoChip.foodID,
          qty: 1,
          unitID: 6,
        }],
      },
    }],
  }],
};

export const foodMatchSodaWater: ServiceEntityRecognitionResponse = {
  text: 'Soda water',
  entities: {
    foods: {
      [foodClubSoda.foodID]: foodClubSoda,
    },
  },
  translations: [{
    segments: [{
      type: 0,
      value: {
        foodPortions: [{
          foodID: foodClubSoda.foodID,
          qty: 1,
          unitID: 3,
        }],
      },
    }],
  }],
};

export const foodMatchALargeCaesarSalad: ServiceEntityRecognitionResponse = {
  text: 'A large Caesar salad',
  entities: {
    foods: {
      [foodCaesarSalad.foodID]: foodCaesarSalad,
      [foodRomaineLettuce.foodID]: foodRomaineLettuce,
      [foodCaesarSaladDressing.foodID]: foodCaesarSaladDressing,
      [foodSeasonedCrouton.foodID]: foodSeasonedCrouton,
    },
  },
  translations: [{
    segments: [{
      type: 0,
      value: {
        foodPortions: [{
          foodID: foodCaesarSalad.foodID,
          qty: 2,
          unitID: 20,
          foodPortions: [
            { foodID: foodRomaineLettuce.foodID, qty: 1, unitID: 0 },
            { foodID: foodCaesarSaladDressing.foodID, qty: 1, unitID: 0 },
            { foodID: foodSeasonedCrouton.foodID, qty: 1, unitID: 0 },
          ],
        }],
      },
    }],
  }],
};

export const foodMatchAGlassOfRedWine: ServiceEntityRecognitionResponse = {
  text: 'A glass of red wine',
  entities: {
    foods: {
      [foodRedWine.foodID]: foodRedWine,
    },
  },
  translations: [{
    segments: [{
      type: 0,
      value: {
        foodPortions: [{
          foodID: foodRedWine.foodID,
          qty: 1,
          unitID: 95,
        }],
      },
    }],
  }],
};

export const foodMatchEightyFourChickenNuggets: ServiceEntityRecognitionResponse = {
  text: '84 chicken nuggets',
  entities: {
    foods: {
      [foodChickenNugget.foodID]: foodChickenNugget,
    },
  },
  translations: [{
    segments: [{
      type: 0,
      value: {
        foodPortions: [{
          foodID: foodChickenNugget.foodID,
          qty: 84,
          unitID: 5,
        }],
      },
    }],
  }],
};

export const matches = [
  [/egg/i, foodMatchTwoScrambled],
  [/scrambled/i, foodMatchTwoScrambled],
  [/bacon/i, foodMatchBacon],
  [/black/i, foodMatchBlackCoffee],
  [/coffee/i, foodMatchBlackCoffee],
  [/cup/i, foodMatchACupOfOJ],
  [/oj/i, foodMatchACupOfOJ],
  [/orange/i, foodMatchACupOfOJ],
  [/juice/i, foodMatchACupOfOJ],
  [/my/i, foodMatchMyRegularItalianSub],
  [/regular/i, foodMatchMyRegularItalianSub],
  [/italian/i, foodMatchMyRegularItalianSub],
  [/sub/i, foodMatchMyRegularItalianSub],
  [/some/i, foodMatchSomeBakedChips],
  [/baked/i, foodMatchSomeBakedChips],
  [/chip/i, foodMatchSomeBakedChips],
  [/soda/i, foodMatchSodaWater],
  [/water/i, foodMatchSodaWater],
  [/large/i, foodMatchALargeCaesarSalad],
  [/ceasar/i, foodMatchALargeCaesarSalad],
  [/salad/i, foodMatchALargeCaesarSalad],
  [/glass/i, foodMatchAGlassOfRedWine],
  [/red/i, foodMatchAGlassOfRedWine],
  [/wine/i, foodMatchAGlassOfRedWine],
  [/chicken/i, foodMatchEightyFourChickenNuggets],
  [/nugget/i, foodMatchEightyFourChickenNuggets],
];
