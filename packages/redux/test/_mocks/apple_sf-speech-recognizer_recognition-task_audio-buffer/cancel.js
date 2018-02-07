// @flow

type Callback = (?Error) => void;

export default (id: string, cb: Callback) => (
  cb(new Error('Not implemented'))
);
