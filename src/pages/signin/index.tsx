import { FormEvent, useRef } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Container from '../../shared/ui-components/Container';
import Description from '../../shared/ui-components/Description';
import Main from '../../shared/ui-components/Main';
import Title from '../../shared/ui-components/Title';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const auth = getAuth();
    console.log('auth', auth);

    signInWithEmailAndPassword(auth, email || '', password || '')
      .then((userCredential) => {
        console.log('userCredential', userCredential);
      })
      .catch((error) => {
        console.log('ERROR ON SIGNIN', error);
      });
  };

  return (
    <Container>
      <Head>
        <title>Sign In</title>
        <meta name='description' content='Sign In to the Gallinazo Game' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        <Title>SignIn Page</Title>
        <Description>
          <form onSubmit={onSubmit}>
            <input name={'email'} />
            <input name={'password'} type={'password'} />
            <button>Sign In</button>
          </form>
          <Link href='/'>&larr; Go Back</Link>
        </Description>
      </Main>
    </Container>
  );
};

export default SignIn;
