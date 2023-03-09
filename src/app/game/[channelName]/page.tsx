import { getServerAuthSession } from '@features/authentication/getServerAuthSession';
import Container from '@ui-components/Container';

interface GamePageProps {
  params: {
    channelName: string;
  };
}

const GamePage = async ({ params }: GamePageProps) => {
  const { channelName } = params;
  console.log('🚀 ~ file: page.tsx:13 ~ GamePage ~ channelName:', channelName);
  const session = await getServerAuthSession();

  console.log('session data', session);

  return (
    <Container>
      <h1>GamePage Page</h1>
    </Container>
  );
};

export const runtime = 'experimental-edge';
export default GamePage;
