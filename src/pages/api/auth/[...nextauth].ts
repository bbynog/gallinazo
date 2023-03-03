import { authOptions } from '@features/authentication/authOptions';
import NextAuth from 'next-auth/next';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
export default NextAuth(authOptions);
