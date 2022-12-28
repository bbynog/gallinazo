import Head from 'next/head';
import { Container, Main, Title } from '@ui-components';

const GamePage = () => {
  return (
    <Container>
      <Head>
        <title>GamePage</title>
        <meta name='description' content='GamePage page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        <Title>GamePage Page</Title>
      </Main>
    </Container>
  );
};

export default GamePage;
