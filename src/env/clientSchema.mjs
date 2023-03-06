// @ts-check
import { z } from 'zod';

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  NEXT_PUBLIC_PUSHER_APP_CLUSTER: z.string(),
  NEXT_PUBLIC_PUSHER_APP_KEY: z.string(),
  NEXT_PUBLIC_APP_URL: z.string(),
  NEXT_PUBLIC_VERCEL_ENV: z.string(),
});

const resolveAppUrl = () => {
  if (
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
  ) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}-git-${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}-${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}.vercel.app`;
  } else if (
    !process.env.NEXT_PUBLIC_VERCEL_ENV ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
  ) {
    return 'http://localhost:3000';
  }

  return 'http://localhost:3000';
};

process.env.NEXT_PUBLIC_APP_URL = resolveAppUrl();
console.log('🚀 ~ NEXT_PUBLIC_APP_URL:', process.env.NEXT_PUBLIC_APP_URL);

/**
 * You can't destruct process.env as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const _clientEnv = {
  NEXT_PUBLIC_PUSHER_APP_CLUSTER: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
  NEXT_PUBLIC_PUSHER_APP_KEY: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV || 'development',
};
