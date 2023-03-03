import { getServerAuthSession } from '@features/authentication/getServerAuthSession';
import Container from '@ui-components/Container';

export default async function Home() {
  const serverSession = await getServerAuthSession();
  console.log('server session', serverSession);
  return (
    <Container>
      <p className={'text-red'}>Welcome to gallinazo, {serverSession}!</p>
    </Container>
  );
}
