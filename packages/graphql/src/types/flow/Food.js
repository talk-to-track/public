// @flow

import type { Ingredient } from './Ingredient';
import type { Nutrients } from './Nutrients';

export type Food = {|
  __typename: 'Food',
  calories: ?number,
  id: string,
  ingredients: ?Ingredient[],
  name: string,
  nutrients: ?Nutrients,
|};
