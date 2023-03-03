import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './authOptions';

/**
 * Wrapper for `getServerSession` so that you don'et need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => {
  return unstable_getServerSession(authOptions);
};
