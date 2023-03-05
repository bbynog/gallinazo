import { getServerAuthSession } from '@features/authentication/getServerAuthSession';
import Container from '@ui-components/Container';

export default async function Home() {
  // const session = getSession();
  // console.log('🚀 ~ file: page.tsx:7 ~ Home ~ session:', session);
  const serverSession = await getServerAuthSession();
  console.log(
    'server session',
    serverSession ? JSON.stringify(serverSession, null, 2) : null,
  );
  console.log('env process', process.env);
  return (
    <Container>
      <p className={'text-red'}>Welcome to gallinazo!</p>
      <div className='btn'>Halu, daisy!</div>
    </Container>
  );
}
