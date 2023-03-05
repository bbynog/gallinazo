// @ts-check
import { z } from 'zod';

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
  NEXTAUTH_SECRET:
    process.env.NODE_ENV === 'production'
      ? z.string().min(1)
      : z.string().min(1).optional(),
  NEXTAUTH_URL: z.preprocess(
    // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    // Since NextAuth.js automatically uses the VERCEL_URL if present.
    (str) => process.env.VERCEL_URL ?? str,
    // VERCEL_URL doesn't include `https` so it cant be validated as a URL
    process.env.VERCEL ? z.string() : z.string().url(),
  ),
  APP_DOMAIN: z.string(),
  PUSHER_APP_SECRET: z.string(),
  PUSHER_APP_ID: z.string(),
  DISCORD_CLIENT_ID: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
  VERCEL_ENV: z.string().optional(),
});

/**
 * You can't destruct `process.env` as a regular object in the Next.js
 * middleware, so you have to do it manually here.
 * @type {{ [k in keyof z.infer<typeof serverSchema>]: z.infer<typeof serverSchema>[k] | undefined }}
 */
export const _serverEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  APP_DOMAIN: process.env.APP_DOMAIN,
  PUSHER_APP_SECRET: process.env.PUSHER_APP_SECRET,
  PUSHER_APP_ID: process.env.PUSHER_APP_ID,
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
  VERCEL_ENV: process.env.VERCEL_ENV,
};