// @flow

type Callback = (err: ?Error, permission: ?boolean) => void;

export default (cb: Callback) => (
  cb(new Error('Not implemented'))
);
