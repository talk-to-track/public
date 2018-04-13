// @flow

import { InMemoryCache as ApolloCacheInMemory } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { SchemaLink as ApolloLinkSchema } from 'apollo-link-schema';
import test from 'ava';

import {
  OAUTH2_ERROR_TYPE_INVALID_CLIENT,
  queryAuthenticateClient,
  schemaCreate,
} from '../..';

import type {
  AuthenticateClientOperation,
  AuthenticateClientResponse,
} from '../..';

const schema = schemaCreate();

const client = new ApolloClient({
  cache: new ApolloCacheInMemory(),
  link: new ApolloLinkSchema({ schema }),
  ssrMode: true,
});

test.cb('query with invalid credentials', (t) => {
  const op: AuthenticateClientOperation = {
    query: queryAuthenticateClient,
    variables: {
      clientId: '',
      clientSecret: '',
    },
  };

  client
    .query(op)
    .then((res: AuthenticateClientResponse) => {
      const { errors } = res.data.authenticateClient;

      if (errors) {
        t.is(errors[0].error, OAUTH2_ERROR_TYPE_INVALID_CLIENT);
      }

      t.end();
    });
});

test.cb('query with valid credentials', (t) => {
  const op: AuthenticateClientOperation = {
    query: queryAuthenticateClient,
    variables: {
      clientId: ((process.env.API_CLIENT_ID: any): string),
      clientSecret: ((process.env.API_CLIENT_SECRET: any): string),
    },
  };

  client
    .query(op)
    .then((res: AuthenticateClientResponse) => {
      const { result } = res.data.authenticateClient;

      if (result) {
        t.is(typeof result.access_token, 'string');
        t.true(result.access_token.length > 0);
        t.is(typeof result.expires_in, 'number');
        t.is(result.token_type, 'bearer');
      }

      t.end();
    });
});
