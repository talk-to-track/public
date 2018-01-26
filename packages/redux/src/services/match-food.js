// @flow

import type { ServiceFood } from '../types/ServiceFood';
import type { ServiceFoods } from '../types/ServiceFoods';
import type { ServiceFoodMatch } from '../types/ServiceFoodMatch';

type Options = { foods: ServiceFoods, foodMatches: ServiceFoodMatch[] };
type Callback = (err: ?Error, res: ?ServiceFood) => void;

export default (opts: Options, text: string, cb: Callback) => {
  const match = opts.foodMatches.find(pair => text.match(pair[0]));
  const food = match ? opts.foods[match[1]] : { id: '0', text };
  cb(null, food);
};
