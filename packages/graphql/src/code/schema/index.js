// @flow

import { makeExecutableSchema } from 'graphql-tools';
import createResolvers from '../resolvers';
import typeDefs from '../typedefs/schema';

type Options = { [string]: any };

export default (opts: Options = {}) => makeExecutableSchema({
  resolvers: createResolvers(),
  typeDefs,
  ...opts,
});
