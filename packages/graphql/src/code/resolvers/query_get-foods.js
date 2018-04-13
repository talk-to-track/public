// @flow

import asyncMap from 'async/map';
import fetch from 'node-fetch';
import deserializeFood from '../deserializers/food';
import createObjectGetFoodsErrorNotFound from '../factories/get-foods_error_not-found';
import type { Food } from '../../types/flow/Food';
import type { GetFoodsData } from '../../types/flow/GetFoodsData';
import type { GetFoodsError } from '../../types/flow/GetFoodsError';
import type { GetFoodsVariables } from '../../types/flow/GetFoodsVariables';
import type { ResolverConfig } from '../../types/flow/ResolverConfig';

type PartialResult = {|
  error?: GetFoodsError,
  food?: Food,
|};

const reducePartialResults = (partialResults: PartialResult[]) => (
  partialResults.reduce(
    (acc, { error, food }) => {
      if (error) acc.errors.push(error);
      if (food) acc.result.foods.push(food);
      return acc;
    },
    {
      errors: [],
      result: { foods: [] },
    },
  )
);

export default (cfg: ResolverConfig) => {
  const url = `${cfg.apiUrl}/foods`;

  return (_: any, vars: GetFoodsVariables): Promise<GetFoodsData> => {
    const Authorization = `Bearer ${vars.authToken}`;
    const urlOpts = { headers: { Authorization } };

    return new Promise((resolve, reject) => (
      asyncMap(
        vars.foodIds,
        (foodId, next) => (
          fetch(`${url}/${foodId}.json`, urlOpts)
            .catch(err => next(err))
            .then(res => res.json())
            .then(json => {
              const { data, error } = json;

              if (error) {
                return error.code === 404 ?
                  next(null, { error: createObjectGetFoodsErrorNotFound({ foodId }) }) :
                  next(error);
              }

              return next(null, {
                food: deserializeFood(data && data.food),
              });
            })
        ),
        (err, partialResults) => (err ?
          reject(err) :
          resolve(reducePartialResults(partialResults))
        ),
      )
    ));
  };
};
