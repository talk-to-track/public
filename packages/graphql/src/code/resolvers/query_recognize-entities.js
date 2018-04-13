// @flow

import TRANSLATION_SEGMENT_TYPE_DIET from '../constants/TRANSLATION_SEGMENT_TYPE_DIET';
import createResolverGetFoods from './query_get-foods';
import type { Ingredient } from '../../types/flow/Ingredient';
import type { RecognizeEntitiesData } from '../../types/flow/RecognizeEntitiesData';
import type { RecognizeEntitiesVariables } from '../../types/flow/RecognizeEntitiesVariables';
import type { ResolverConfig } from '../../types/flow/ResolverConfig';
import type { TranslationSegment } from '../../types/flow/TranslationSegment';
import foodLookup from '../mock-objects/foods';
import translationSegmentLookups from '../mock-objects/translation-segments';

const gatherFoodsFromIngredients = (foodIds: string[], ingredients: Ingredient[]) => {
  ingredients.forEach((ingredient) => {
    const { foodId } = ingredient;
    const food = foodLookup[ingredient.foodId];
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

export default (cfg: ResolverConfig) => {
  const resolverGetFoods = createResolverGetFoods(cfg);

  return (_: any, vars: RecognizeEntitiesVariables): Promise<RecognizeEntitiesData> => {
    const { authToken, text } = vars;
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

    return new Promise((resolve, reject) => (
      resolverGetFoods(null, { authToken, foodIds })
        .then(({ result }) => resolve({
          result: {
            entities: { foods: result.foods },
            translations,
          },
        }))
        .catch(err => reject(err))
    ));
  };
};
