// @flow

import type { ServiceFood } from '../types/ServiceFood';
import type { ServiceEntityRecognitionResponse } from '../types/ServiceEntityRecognitionResponse';

type Options = {
  foods: { [string]: ServiceFood },
  matches: [RegExp, ServiceEntityRecognitionResponse][]
};

type Callback = (err: ?Error, res: ?ServiceEntityRecognitionResponse) => void;

export default (opts: Options, text: string, cb: Callback) => {
  const matchedPair = opts.matches.find(pair => text.match(pair[0]));

  cb(null, matchedPair ? matchedPair[1] : {
    entities: {},
    text,
    translations: [],
  });
};
