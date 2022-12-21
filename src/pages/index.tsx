import Head from 'next/head';
import { Container, Main, Title, Description, CodeTag } from '../components/sharedStyles';
import Cards from '../components/Cards';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Gallinazo</title>
        <meta name='description' content='Gallinazo app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        <Title>Welcome to Gallinazo!</Title>

        <Description>
          Entry
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>

        <Cards />
      </Main>
    </Container>
  );
}
