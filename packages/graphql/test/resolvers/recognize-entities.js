// @flow

import { InMemoryCache as ApolloCacheInMemory } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { SchemaLink as ApolloLinkSchema } from 'apollo-link-schema';
import test from 'ava';

import {
  queryAuthenticateClient,
  queryRecognizeEntities,
  schemaCreate,
  TRANSLATION_SEGMENT_TYPE_DIET,
} from '../../src';

import type {
  AuthenticateClientOperation,
  AuthenticateClientResponse,
  RecognizeEntitiesOperation,
  RecognizeEntitiesResponse,
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
          const { result } = res.data.recognizeEntities;

          t.is(typeof result, 'object');

          if (result) {
            const { entities, translations } = result;

            t.is(typeof entities, 'object');
            t.true(Array.isArray(translations));

            if (entities) {
              const { foods } = entities;

              t.true(Array.isArray(foods));

              if (Array.isArray(foods)) {
                t.is(foods.length, 2);

                if (foods.length === 2) {
                  const food1 = foods[0];
                  const food2 = foods[1];

                  t.is(typeof food1.id, 'string');
                  t.is(typeof food2.id, 'string');
                  t.is(typeof food1.name, 'string');
                  t.is(typeof food2.name, 'string');
                  t.is(typeof food1.calories, 'number');
                  t.is(typeof food2.calories, 'number');
                  t.is(typeof food1.nutrients, 'object');
                  t.is(typeof food2.nutrients, 'object');
                }
              }
            }

            if (translations) {
              t.is(translations.length, 1);

              if (translations.length === 1) {
                const translation = translations[0];

                t.is(typeof translation, 'object');

                if (translation) {
                  const { segments } = translation;

                  t.true(Array.isArray(segments));

                  if (segments) {
                    t.is(segments.length, 2);

                    if (segments.length === 2) {
                      const segment1 = segments[0];
                      const segment2 = segments[1];

                      t.is(typeof segment1, 'object');
                      t.is(typeof segment2, 'object');
                      t.is(segment1.type, TRANSLATION_SEGMENT_TYPE_DIET);
                      t.is(segment2.type, TRANSLATION_SEGMENT_TYPE_DIET);
                    }
                  }
                }
              }
            }
          }

          t.end();
        });
    });
});
