// @flow

export default (food1: any, food2: any, multiplier?: number = 1) => (food1
  .update('calcium', x => x + (multiplier * (food2.get('calcium') || 0)))
  .update('calories', x => x + (multiplier * (food2.get('calories') || 0)))
  .update('carbs', x => x + (multiplier * (food2.get('carbs') || 0)))
  .update('cholesterol', x => x + (multiplier * (food2.get('cholesterol') || 0)))
  .update('fat', x => x + (multiplier * (food2.get('fat') || 0)))
  .update('fiber', x => x + (multiplier * (food2.get('fiber') || 0)))
  .update('iron', x => x + (multiplier * (food2.get('iron') || 0)))
  .update('protein', x => x + (multiplier * (food2.get('protein') || 0)))
  .update('satFat', x => x + (multiplier * (food2.get('satFat') || 0)))
  .update('sodium', x => x + (multiplier * (food2.get('sodium') || 0)))
  .update('sugars', x => x + (multiplier * (food2.get('sugars') || 0)))
  .update('transFat', x => x + (multiplier * (food2.get('transFat') || 0)))
  .update('vitA', x => x + (multiplier * (food2.get('vitA') || 0)))
  .update('vitC', x => x + (multiplier * (food2.get('vitC') || 0)))
);
