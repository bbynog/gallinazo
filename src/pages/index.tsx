import { getAuth } from 'firebase/auth';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { Card } from '@components';
import { Container, Main, Title } from '@ui-components';

export default function Home() {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(auth?.currentUser);

  useEffect(() => {
    // Subscribe to changes in the current user
    const unsubscribe = auth?.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, [auth]); // Only re-run the effect when the `auth` variable changes

  return (
    <Container>
      <Head>
        <title>Gallinazo</title>
        <meta name='description' content='Gallinazo app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        <Title>Welcome to Gallinazo!</Title>

        <Card title={'Sign Up'} href={'/signup'} />
        <Card title={'Sign In'} href={'/signin'} />
        <Card title={'Dashboard'} href={'/dashboard'} />
        <Card title={'About (presencechannel testing'} href={'/about'} />
        {currentUser ? (
          <button
            onClick={() => {
              auth?.signOut();
            }}>
            Logout
          </button>
        ) : null}
      </Main>
    </Container>
  );
}
