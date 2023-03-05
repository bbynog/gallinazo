import { clientEnv } from '@env/clientEnv.mjs';
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
  console.log('clientEnv home', clientEnv);
  return (
    <Container>
      <p className={'text-red'}>Welcome to gallinazo!</p>
      <div className='btn'>Halu, daisy!</div>
    </Container>
  );
}
