// @flow

import translationSegmentACupOfOJ from './a_cup_of_oj';
import translationSegmentAGlassOfRedWine from './a_glass_of_red-wine';
import translationSegmentALargeCaesarSalad from './a_large_caesar-salad';
import translationSegmentBacon from './bacon';
import translationSegmentBlackCoffee from './black-coffee';
import translationSegmentEightyFourChickenNuggets from './eighty-four_chicken-nuggets';
import translationSegmentMyRegularItalianSub from './my_regular_italian-sub';
import translationSegmentSodaWater from './soda-water';
import translationSegmentSomeBakedChips from './some_baked-chips';
import translationSegmentTwoScrambledEggs from './two-scrambled-eggs';
import type { TranslationSegmentDiet } from '../../../types/flow/TranslationSegmentDiet';

type Lookup = [RegExp, TranslationSegmentDiet][];

const lookup: Lookup = [
  [/egg/i, translationSegmentTwoScrambledEggs],
  [/scrambled/i, translationSegmentTwoScrambledEggs],
  [/bacon/i, translationSegmentBacon],
  [/black/i, translationSegmentBlackCoffee],
  [/coffee/i, translationSegmentBlackCoffee],
  [/cup/i, translationSegmentACupOfOJ],
  [/oj/i, translationSegmentACupOfOJ],
  [/orange/i, translationSegmentACupOfOJ],
  [/juice/i, translationSegmentACupOfOJ],
  [/my/i, translationSegmentMyRegularItalianSub],
  [/regular/i, translationSegmentMyRegularItalianSub],
  [/italian/i, translationSegmentMyRegularItalianSub],
  [/sub/i, translationSegmentMyRegularItalianSub],
  [/some/i, translationSegmentSomeBakedChips],
  [/baked/i, translationSegmentSomeBakedChips],
  [/chip/i, translationSegmentSomeBakedChips],
  [/soda/i, translationSegmentSodaWater],
  [/water/i, translationSegmentSodaWater],
  [/large/i, translationSegmentALargeCaesarSalad],
  [/ceasar/i, translationSegmentALargeCaesarSalad],
  [/salad/i, translationSegmentALargeCaesarSalad],
  [/glass/i, translationSegmentAGlassOfRedWine],
  [/red/i, translationSegmentAGlassOfRedWine],
  [/wine/i, translationSegmentAGlassOfRedWine],
  [/chicken/i, translationSegmentEightyFourChickenNuggets],
  [/nugget/i, translationSegmentEightyFourChickenNuggets],
];

export default lookup;
