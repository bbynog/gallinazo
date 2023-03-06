// @ts-check
import { clientSchema, _clientEnv } from './clientSchema.mjs';
import { formatErrors } from './formatErrors.mjs';

const __clientEnv = clientSchema.safeParse(_clientEnv);

if (!__clientEnv.success) {
  console.error(
    '❌ Invalid client environment variables:\n',
    ...formatErrors(__clientEnv.error.format()),
  );
  throw new Error('Invalid client environment variables');
}

for (let key of Object.keys(__clientEnv.data)) {
  if (!key.startsWith('NEXT_PUBLIC_')) {
    console.warn(
      `❌ Invalid public environment variable name: ${key}. It must begin with 'NEXT_PUBLIC_'`,
    );

    throw new Error('Invalid public environment variable name');
  }
}

export const clientEnv = __clientEnv.data;
