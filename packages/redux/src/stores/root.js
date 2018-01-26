// @flow

import { applyMiddleware, createStore } from 'redux';
import createMiddleware from '../middleware/root';
import reducer from '../reducers/root';
import type { EpicOptionsRoot as Options } from '../types/EpicOptionsRoot';

export default (opts: Options) => {
  const middleware = createMiddleware(opts);
  const store = createStore(reducer, applyMiddleware(middleware));
  return store;
};
