// @flow

/* eslint-disable import/no-extraneous-dependencies */

import { outputJson as fsExtraOutputJson } from 'fs-extra';
import { graphql, introspectionQuery } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { join as pathJoin } from 'path';
import { typeDefs } from '../src';

const schema = makeExecutableSchema({ typeDefs });
const schemaPath = pathJoin(__dirname, '../dist/schema.json');

graphql(schema, introspectionQuery)
  .then(json => fsExtraOutputJson(schemaPath, json))
  .catch((err) => { throw err; });
