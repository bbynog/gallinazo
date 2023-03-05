// @ts-check
/**
 * This file is included in `/next.config.mjs` which ensures the app isn't built with invalid env vars.
 * It has to be a `.mjs`-file to be imported there.
 */
import { clientEnv } from './clientEnv.mjs';
import { formatErrors } from './formatErrors.mjs';
import { serverSchema, _serverEnv } from './serverSchema.mjs';

console.log('serverEnv before zod parsing', _serverEnv);
const __serverEnv = serverSchema.safeParse(_serverEnv);
console.log('serverEnv after zod parsing', __serverEnv);

if (!__serverEnv.success) {
  console.error(
    '❌ Invalid server environment variables:\n',
    ...formatErrors(__serverEnv.error.format()),
  );
  throw new Error('Invalid environment variables');
}

for (let key of Object.keys(__serverEnv.data)) {
  if (key.startsWith('NEXT_PUBLIC_')) {
    console.warn('❌ You are exposing a server-side env-variable:', key);

    throw new Error('You are exposing a server-side env-variable');
  }
}

export const serverEnv = { ...__serverEnv.data, ...clientEnv };
