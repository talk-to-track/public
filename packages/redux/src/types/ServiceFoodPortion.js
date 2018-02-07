// @flow

export type ServiceFoodPortion = {|
  foodID: number,
  foodPortions?: ServiceFoodPortion[],
  qty: number,
  unitID: number,
|};
