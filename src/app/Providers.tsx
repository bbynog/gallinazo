'use client';

import { Session } from 'next-auth';
import { getSession, SessionProvider } from 'next-auth/react';
import { PropsWithChildren, useEffect, useState } from 'react';

interface ProvidersProps {
  // authSession: Session | null;
}
const Providers = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);

  const [ready, setReady] = useState<boolean>(false);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  useEffect(() => {
    if (isFirstLoad) {
      getSession()
        .then((returnedSession) => {
          setSession(returnedSession);
        })
        .finally(() => {
          setReady(true);
          setIsFirstLoad(false);
        });
    }
  }, []);

  console.log('🚀 ~ file: Providers.tsx:14 ~ session:', session);

  if (!ready) {
    console.log('providers not ready yet');
    return children;
  }

  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
