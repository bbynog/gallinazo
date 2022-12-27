import { getAuth } from 'firebase/auth';
import Link from 'next/link';
import pusherJs from 'pusher-js';
import { useEffect } from 'react';
import Container from '../../shared/ui-components/Container';
import Description from '../../shared/ui-components/Description';
import Main from '../../shared/ui-components/Main';
import Title from '../../shared/ui-components/Title';

export async function getServerSideProps() {
  return {
    props: {
      PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
      PUSHER_APP_CLUSTER: process.env.PUSHER_APP_CLUSTER
    }
  };
}

interface AboutProps {
  PUSHER_APP_KEY: string;
  PUSHER_APP_CLUSTER: string;
}

export default function About({
  PUSHER_APP_KEY,
  PUSHER_APP_CLUSTER
}: AboutProps) {
  useEffect(() => {
    const currentUser = getAuth().currentUser;

    console.log('PUSHER_APP_KEY', PUSHER_APP_KEY);
    console.log('PUSHER_APP_CLUSTER', PUSHER_APP_CLUSTER);
    console.log('currentUser', currentUser);

    if (currentUser?.uid && PUSHER_APP_CLUSTER && PUSHER_APP_KEY) {
      const params = new URLSearchParams();
      params.set('user_id', currentUser?.uid);

      const authEndpoint = `/api/pusher/user-auth?${params.toString()}`;

      const pusher = new pusherJs(PUSHER_APP_KEY!, {
        cluster: PUSHER_APP_CLUSTER!,
        authEndpoint
      });

      const channel = pusher.subscribe('presence-halu-channel');

      channel.bind('pusher:subscription_succeeded', (members: any) => {
        console.log(`There are ${members.count} members in this channel`);
      });
      channel.bind('halu-event', (data: any) => {
        console.log('data', data);
      });

      channel.bind('pusher:subscription_error', (error: any) => {
        console.error('subscription error', error);
      });
    }
    return () => {};
  }, [PUSHER_APP_CLUSTER, PUSHER_APP_KEY]);

  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href='/'>&larr; Go Back</Link>
        </Description>
      </Main>
    </Container>
  );
}
