// @flow

import createObjectGetFoodsErrorNotFound from '../factories/get-foods_error_not-found';
import foodLookup from '../mock-objects/foods';
import type { GetFoodsData } from '../../types/flow/GetFoodsData';
import type { GetFoodsVariables } from '../../types/flow/GetFoodsVariables';

export default (_: any, vars: GetFoodsVariables): GetFoodsData => {
  const { foodIds } = vars;

  const data = {
    errors: [],
    result: { foods: [] },
  };

  foodIds.forEach((foodId) => {
    const food = foodLookup[foodId];

    return food ?
      data.result.foods.push(food) :
      data.errors.push(createObjectGetFoodsErrorNotFound({ foodId }));
  });

  return data;
};
