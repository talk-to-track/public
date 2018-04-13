// @flow

export type GraphQLOperation<T> = {|
  query: any,
  variables: T,
|};
