// @flow

import foodBaconStrips from './bacon-strips';
import foodBakedPotatoChips from './baked-potato-chips';
import foodBlackCoffee from './black-coffee';
import foodCaesarSalad from './caesar-salad';
import foodCaesarSaladDressing from './caesar-salad-dressing';
import foodChickenNuggets from './chicken-nuggets';
import foodClassicGardenSalad from './classic-garden-salad';
import foodClubSoda from './club-soda';
import foodGreenBellPepper from './green-bell-pepper';
import foodItalianSub from './italian-sub';
import foodKraftMayoWithOliveOil from './kraft-mayo_with_olive-oil';
import foodOrangeJuice from './orange-juice';
import foodParmesanCheese from './parmesan-cheese';
import foodRedWine from './red-wine';
import foodReducedFatMayonnaise from './reduced-fat-mayonnaise';
import foodRomaTomatoSlices from './roma-tomato-slices';
import foodRomaineLettuce from './romaine-lettuce';
import foodScrambledEggs from './scrambled-eggs';
import foodSeasonedCrouton from './seasoned-crouton';
import foodSubwaySpicyItalian from './subway-spicy-italian';
import foodWhiteOnion from './white-onion';
import type { Food } from '../../../types/flow/Food';

type Lookup = { [string]: Food };

const lookup: Lookup = {
  [foodBaconStrips.id]: foodBaconStrips,
  [foodBakedPotatoChips.id]: foodBakedPotatoChips,
  [foodBlackCoffee.id]: foodBlackCoffee,
  [foodCaesarSalad.id]: foodCaesarSalad,
  [foodCaesarSaladDressing.id]: foodCaesarSaladDressing,
  [foodChickenNuggets.id]: foodChickenNuggets,
  [foodClassicGardenSalad.id]: foodClassicGardenSalad,
  [foodClubSoda.id]: foodClubSoda,
  [foodGreenBellPepper.id]: foodGreenBellPepper,
  [foodItalianSub.id]: foodItalianSub,
  [foodKraftMayoWithOliveOil.id]: foodKraftMayoWithOliveOil,
  [foodKraftMayoWithOliveOil.id]: foodKraftMayoWithOliveOil,
  [foodOrangeJuice.id]: foodOrangeJuice,
  [foodParmesanCheese.id]: foodParmesanCheese,
  [foodRedWine.id]: foodRedWine,
  [foodReducedFatMayonnaise.id]: foodReducedFatMayonnaise,
  [foodRomaTomatoSlices.id]: foodRomaTomatoSlices,
  [foodRomaineLettuce.id]: foodRomaineLettuce,
  [foodScrambledEggs.id]: foodScrambledEggs,
  [foodSeasonedCrouton.id]: foodSeasonedCrouton,
  [foodSubwaySpicyItalian.id]: foodSubwaySpicyItalian,
  [foodSubwaySpicyItalian.id]: foodSubwaySpicyItalian,
  [foodWhiteOnion.id]: foodWhiteOnion,
};

export default lookup;
