// @flow

import { Buffer } from 'buffer';
import fetch from 'node-fetch';
import { URLSearchParams } from 'url';
import type { AuthenticateClientVariables } from '../../types/flow/AuthenticateClientVariables';
import type { ResolverConfig } from '../../types/flow/ResolverConfig';

export default (cfg: ResolverConfig) => {
  const url = `${cfg.apiUrl}/oauth2/token`;

  return (_: any, vars: AuthenticateClientVariables) => {
    const credentials = `${vars.clientId}:${vars.clientSecret}`;
    const credentialsEncoded = Buffer.from(credentials).toString('base64');

    const urlOpts = {
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${credentialsEncoded}` },
      method: 'POST',
    };

    return fetch(url, urlOpts)
      .then(res => res.json())
      .then(res => (
        res.error ?
          { errors: [res] } :
          { result: res }
      ));
  };
};
