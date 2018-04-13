// @flow

import { InMemoryCache as ApolloCacheInMemory } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { SchemaLink as ApolloLinkSchema } from 'apollo-link-schema';
import test from 'ava';
import { addMockFunctionsToSchema } from 'graphql-tools';

import {
  OAUTH2_ERROR_TYPE_INVALID_CLIENT,
  mocks,
  queryAuthenticateClient,
  schemaCreate,
} from '../..';

import type {
  AuthenticateData,
  AuthenticateClientOperation,
  AuthenticateClientResponse,
} from '../..';

const expectedInvalidData: AuthenticateData = {
  __typename: 'AuthenticateData',
  errors: [{
    __typename: 'OAuth2Error',
    error: OAUTH2_ERROR_TYPE_INVALID_CLIENT,
    error_description: 'ClientID not found',
    error_uri: '',
  }],
  result: null,
};

const expectedValidData: AuthenticateData = {
  __typename: 'AuthenticateData',
  errors: null,
  result: {
    __typename: 'OAuth2Result',
    access_token: '0000-0000-0000-0000-0000',
    expires_in: 300000000,
    refresh_token: '',
    token_type: 'bearer',
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
      t.deepEqual(res.data.authenticateClient, expectedInvalidData);
      t.end();
    });
});

test.cb('query with valid credentials', (t) => {
  const op: AuthenticateClientOperation = {
    query: queryAuthenticateClient,
    variables: {
      clientId: 'CLIENT_ID',
      clientSecret: 'CLIENT_SECRET',
    },
  };

  client
    .query(op)
    .then((res: AuthenticateClientResponse) => {
      t.deepEqual(res.data.authenticateClient, expectedValidData);
      t.end();
    });
});
