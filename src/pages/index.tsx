import { getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import Head from 'next/head';

import Card from '../shared/components/Card/Card';
import CodeTag from '../shared/ui-components/CodeTag';
import Container from '../shared/ui-components/Container';
import Description from '../shared/ui-components/Description';
import Main from '../shared/ui-components/Main';
import Title from '../shared/ui-components/Title';

export default function Home() {
  console.log('current user', getAuth()?.currentUser);

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
        <Card title={'Sign Up'} href={'/signup'} />
        <Card title={'Sign In'} href={'/signin'} />
      </Main>
    </Container>
  );
}
