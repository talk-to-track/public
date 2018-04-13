// @flow

import createFoodResolver from './food';
import createQueryResolver from './query';
import type { ResolverConfig } from '../../types/flow/ResolverConfig';

const defaultConfig = {
  apiUrl: 'https://secure.genesant.com/api',
};

export default (cfg?: ResolverConfig) => {
  const mergedConfig = { ...defaultConfig, ...cfg };

  return {
    Food: createFoodResolver(),
    Query: createQueryResolver(mergedConfig),
  };
};
