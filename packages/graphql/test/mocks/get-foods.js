// @flow

import { InMemoryCache as ApolloCacheInMemory } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { SchemaLink as ApolloLinkSchema } from 'apollo-link-schema';
import test from 'ava';
import { addMockFunctionsToSchema } from 'graphql-tools';

import {
  createObjectGetFoodsErrorNotFound,
  mockObjectFoodBaconStrips,
  mockObjectFoodBlackCoffee,
  mocks,
  queryAuthenticateClient,
  queryGetFoods,
  schemaCreate,
} from '../..';

import type {
  AuthenticateClientOperation,
  AuthenticateClientResponse,
  GetFoodsData,
  GetFoodsOperation,
  GetFoodsResponse,
} from '../..';

const expectedGetFoodsData: GetFoodsData = {
  __typename: 'GetFoodsData',
  errors: [
    createObjectGetFoodsErrorNotFound({ foodId: '-1' }),
    createObjectGetFoodsErrorNotFound({ foodId: '-2' }),
  ],
  result: {
    __typename: 'GetFoodsResult',
    foods: [
      mockObjectFoodBaconStrips,
      mockObjectFoodBlackCoffee,
    ],
  },
};

const schema = schemaCreate();

addMockFunctionsToSchema({
  mocks,
  schema,
});

const client = new ApolloClient({
  cache: new ApolloCacheInMemory(),
  link: new ApolloLinkSchema({ schema }),
  ssrMode: true,
});

test.cb('query', (t) => {
  const authOp: AuthenticateClientOperation = {
    query: queryAuthenticateClient,
    variables: {
      clientId: 'CLIENT_ID',
      clientSecret: 'CLIENT_SECRET',
    },
  };

  client
    .query(authOp)
    .then((authRes: AuthenticateClientResponse) => {
      const authResult = authRes.data.authenticateClient.result || {};
      const authToken = ((authResult.access_token: any): string);

      const op: GetFoodsOperation = {
        query: queryGetFoods,
        variables: {
          authToken,
          foodIds: ['-1', '-2', mockObjectFoodBaconStrips.id, mockObjectFoodBlackCoffee.id],
        },
      };

      client
        .query(op)
        .then((res: GetFoodsResponse) => {
          t.deepEqual(res.data.getFoods, expectedGetFoodsData);
          t.end();
        });
    });
});
