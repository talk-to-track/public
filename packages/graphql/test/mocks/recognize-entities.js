// @flow

import { InMemoryCache as ApolloCacheInMemory } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { SchemaLink as ApolloLinkSchema } from 'apollo-link-schema';
import test from 'ava';
import { addMockFunctionsToSchema } from 'graphql-tools';

import {
  mockObjectFoodBaconStrips,
  mockObjectFoodBlackCoffee,
  mockObjectTranslationSegmentBacon,
  mockObjectTranslationSegmentBlackCoffee,
  mocks,
  queryAuthenticateClient,
  queryRecognizeEntities,
  schemaCreate,
} from '../..';

import type {
  AuthenticateClientOperation,
  AuthenticateClientResponse,
  RecognizeEntitiesData,
  RecognizeEntitiesOperation,
  RecognizeEntitiesResponse,
} from '../..';

const expectedRecognizeEntitiesData: RecognizeEntitiesData = {
  __typename: 'RecognizeEntitiesData',
  result: {
    __typename: 'RecognizeEntitiesResult',
    entities: {
      __typename: 'Entities',
      foods: [
        mockObjectFoodBaconStrips,
        mockObjectFoodBlackCoffee,
      ],
    },
    translations: [
      {
        __typename: 'Translation',
        segments: [
          mockObjectTranslationSegmentBacon,
          mockObjectTranslationSegmentBlackCoffee,
        ],
      },
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

      const op: RecognizeEntitiesOperation = {
        query: queryRecognizeEntities,
        variables: {
          authToken,
          text: 'Bacon, coffee',
        },
      };

      client
        .query(op)
        .then((res: RecognizeEntitiesResponse) => {
          t.deepEqual(res.data.recognizeEntities, expectedRecognizeEntitiesData);
          t.end();
        });
    });
});
