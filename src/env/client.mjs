// @ts-check
import { _clientEnv, clientSchema } from './schema.mjs';

const __clientEnv = clientSchema.safeParse(_clientEnv);

export const formatErrors = (
  /** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */
  errors
) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && '_errors' in value)
        return `${name}: ${value._errors.join(', ')}\n`;
    })
    .filter(Boolean);

if (!__clientEnv.success) {
  console.error(
    '❌ Invalid environment variables:\n',
    ...formatErrors(__clientEnv.error.format())
  );
  throw new Error('Invalid environment variables');
}

for (let key of Object.keys(__clientEnv.data)) {
  if (!key.startsWith('NEXT_PUBLIC_')) {
    console.warn(
      `❌ Invalid public environment variable name: ${key}. It must begin with 'NEXT_PUBLIC_'`
    );

    throw new Error('Invalid public environment variable name');
  }
}

export const clientEnv = __clientEnv.data;
