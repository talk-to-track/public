// @flow

import { InMemoryCache as ApolloCacheInMemory } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { SchemaLink as ApolloLinkSchema } from 'apollo-link-schema';
import test from 'ava';

import {
  createObjectGetFoodsErrorNotFound,
  queryAuthenticateClient,
  queryGetFoods,
  schemaCreate,
} from '../../src';

import type {
  AuthenticateClientOperation,
  AuthenticateClientResponse,
  GetFoodsOperation,
  GetFoodsResponse,
} from '../..';

const schema = schemaCreate();

const client = new ApolloClient({
  cache: new ApolloCacheInMemory(),
  link: new ApolloLinkSchema({ schema }),
  ssrMode: true,
});

test.cb('query', (t) => {
  const authOp: AuthenticateClientOperation = {
    query: queryAuthenticateClient,
    variables: {
      clientId: ((process.env.API_CLIENT_ID: any): string),
      clientSecret: ((process.env.API_CLIENT_SECRET: any): string),
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
          foodIds: ['-1', '-2', '1', '2'],
        },
      };

      client
        .query(op)
        .then((res: GetFoodsResponse) => {
          const { errors, result } = res.data.getFoods;

          t.deepEqual(errors, [
            createObjectGetFoodsErrorNotFound({ foodId: '-1' }),
            createObjectGetFoodsErrorNotFound({ foodId: '-2' }),
          ]);

          t.is(typeof result, 'object');

          if (result) {
            t.is(result.foods.length, 2);

            if (result.foods.length === 2) {
              const food1 = result.foods[0];
              const food2 = result.foods[1];
              t.is(food1.id, '1');
              t.is(food2.id, '2');
              t.is(typeof food1.name, 'string');
              t.is(typeof food2.name, 'string');
              t.is(typeof food1.calories, 'number');
              t.is(typeof food2.calories, 'number');
              t.is(typeof food1.nutrients, 'object');
              t.is(typeof food2.nutrients, 'object');
            }
          }

          t.end();
        });
    });
});
