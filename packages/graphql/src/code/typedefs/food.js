// @flow

import Ingredient from './ingredient';
import Nutrients from './nutrients';

const Food = `
  type Food {
    id: ID!
    ingredients: [Ingredient],
    name: String!
    calories: Float
    nutrients: Nutrients
  }
`;

export default [
  Food,
  ...Ingredient,
  ...Nutrients,
];
