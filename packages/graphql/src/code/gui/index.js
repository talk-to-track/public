// @flow

/* eslint-disable import/no-extraneous-dependencies */

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { json as bodyParserJson } from 'body-parser';
import express from 'express';
import getPort from 'get-port';
import { addMockFunctionsToSchema } from 'graphql-tools';
import opn from 'opn';
import mocks from '../mocks';
import schemaCreate from '../schema';

const schema = schemaCreate();

if (process.argv.includes('--mock')) {
  addMockFunctionsToSchema({
    mocks,
    schema,
  });
}

const app = express();

app.use('/graphql', bodyParserJson(), graphqlExpress({
  schema,
  tracing: true,
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

getPort().then(port => {
  app.listen(port);
  opn(`http://localhost:${port}/graphiql`);
});
