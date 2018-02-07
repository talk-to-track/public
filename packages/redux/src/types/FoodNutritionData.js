// @flow

import type { RecordInstance as ImmutableRecordInstance } from 'immutable';

export type ImmutableServiceFoodNutritionData = ImmutableRecordInstance<{|
  calcium?: number,
  calories?: number,
  carbs?: number,
  cholesterol?: number,
  fat?: number,
  fiber?: number,
  iron?: number,
  protein?: number,
  satFat?: number,
  sodium?: number,
  sugars?: number,
  transFat?: number,
  vitA?: number,
  vitC?: number,
|}>;
