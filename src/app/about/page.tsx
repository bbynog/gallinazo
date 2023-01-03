import Link from 'next/link';
import Container from '@ui-components/Container';

export default function About() {
  // useEffect(() => {
  //   const currentUser = getAuth().currentUser;

  //   console.log('currentUser', currentUser);

  //   if (currentUser?.uid && PUSHER_APP_CLUSTER && PUSHER_APP_KEY) {
  //     const pusher = PusherService.getInstance(currentUser.uid);

  //     const channel = pusher.subscribe(
  //       currentUser.email === 'gabs@gmail.com'
  //         ? 'presence-halu-channel'
  //         : 'presence-halu-channel-2'
  //     );

  //     channel.bind('pusher:subscription_succeeded', (members: any) => {
  //       console.log(`There are ${members.count} members in this channel`);
  //     });
  //     channel.bind('halu-event', (data: any) => {
  //       console.log('data', data);
  //     });

  //     channel.bind('pusher:subscription_error', (error: any) => {
  //       console.error('subscription error', error);
  //     });
  //   }
  //   return () => {};
  // }, [PUSHER_APP_CLUSTER, PUSHER_APP_KEY]);

  return (
    <Container>
      <h1>About Page</h1>
      <Link href='/'>&larr; Go Back</Link>
    </Container>
  );
}
