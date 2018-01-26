// @flow

import { createEpicMiddleware } from 'redux-observable';
import adapter from 'redux-observable-adapter-most';
import createEpic from '../epics/root';
import type { EpicOptionsRoot as Options } from '../types/EpicOptionsRoot';

export default (opts: Options) => {
  const epic = createEpic(opts);
  const middleware = createEpicMiddleware(epic, { adapter });
  return middleware;
};
