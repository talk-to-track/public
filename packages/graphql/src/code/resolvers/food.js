// @flow

import type { Food } from '../../types/flow/Food';

export default () => ({
  nutrients: (food: Food) => food.nutrients,
});
