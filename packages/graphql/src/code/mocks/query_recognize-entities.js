// @flow

import TRANSLATION_SEGMENT_TYPE_DIET from '../constants/TRANSLATION_SEGMENT_TYPE_DIET';
import foodLookup from '../mock-objects/foods';
import translationSegmentLookups from '../mock-objects/translation-segments';
import type { Ingredient } from '../../types/flow/Ingredient';
import type { RecognizeEntitiesData } from '../../types/flow/RecognizeEntitiesData';
import type { RecognizeEntitiesVariables } from '../../types/flow/RecognizeEntitiesVariables';
import type { TranslationSegment } from '../../types/flow/TranslationSegment';

const gatherFoodsFromIngredients = (foodIds: string[], ingredients: Ingredient[]) => {
  ingredients.forEach((ingredient) => {
    const { foodId } = ingredient;
    const food = foodLookup[foodId];
    foodIds.push(foodId);

    if (food.ingredients) {
      gatherFoodsFromIngredients(foodIds, food.ingredients);
    }

    if (ingredient.ingredients) {
      gatherFoodsFromIngredients(foodIds, ingredient.ingredients);
    }
  });
};

const gatherFoodsFromTranslationSegment = (foodIds: string[], translationSegment: TranslationSegment) => {
  if (translationSegment.type === TRANSLATION_SEGMENT_TYPE_DIET) {
    const ingredients = [translationSegment.ingredient];
    gatherFoodsFromIngredients(foodIds, ingredients);
  }

  return foodIds;
};

export default (_: any, req: RecognizeEntitiesVariables): RecognizeEntitiesData => {
  const { text } = req;
  const textSegments = text.split(',');
  const foodIds = [];
  const translation = { segments: [] };
  const translations = [translation];

  for (let i = 0; i < textSegments.length; i += 1) {
    const textSegment = textSegments[i].trim();

    for (let j = 0; j < translationSegmentLookups.length; j += 1) {
      const translationsSegmentLookup = translationSegmentLookups[j];
      const [regex, translationSegment] = translationsSegmentLookup;

      if (textSegment.match(regex)) {
        gatherFoodsFromTranslationSegment(foodIds, translationSegment);
        translation.segments.push(translationSegment);
      }
    }
  }

  const foods = foodIds.map(foodId => foodLookup[foodId]);

  return {
    result: {
      entities: { foods },
      translations,
    },
  };
};
