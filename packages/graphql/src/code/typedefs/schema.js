// @flow

import Query from './query';

const Schema = `
  schema {
    query: Query
  }
`;

export default [Schema, ...Query];
