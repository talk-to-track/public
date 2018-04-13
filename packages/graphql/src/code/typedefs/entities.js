// @flow

import Food from './food';

const Entities = `
  type Entities {
    foods: [Food!]
  }
`;

export default [Entities, ...Food];
