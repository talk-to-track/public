// @flow

export type Ingredient = {|
  __typename: 'Ingredient',
  foodId: string,
  ingredients: ?Ingredient[],
  quantity: number,
  unitId: string,
|};
