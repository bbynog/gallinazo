'use client';

import { SessionProvider } from 'next-auth/react';
import type { PropsWithChildren } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
