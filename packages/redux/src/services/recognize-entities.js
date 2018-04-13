// @flow

import type { ServiceData } from '../types/ServiceData';
import type { ServiceEntityRecognitionResponse } from '../types/ServiceEntityRecognitionResponse';

type Callback = (err: ?Error, res: ?ServiceEntityRecognitionResponse) => void;

export default (opts: ServiceData, text: string, cb: Callback) => {
  const matchedPair = opts.matches.find(pair => text.match(pair[0]));

  cb(null, matchedPair ? matchedPair[1] : {
    entities: {},
    text,
    translations: [],
  });
};
