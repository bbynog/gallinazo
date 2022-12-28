import { FormEvent } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { Container, Description, Main, Title } from '@ui-components';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
const SignUp = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email || '', password || '')
      .then((userCredential) => {
        console.log('userCredential', userCredential);
      })
      .catch((error) => {
        console.log('ERROR ON CREATEACCOUNT', error);
      });
  };
  return (
    <Container>
      <Head>
        <title>Sign Up</title>
        <meta name='description' content='Sign Up to the Gallinazo Game' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        <Title>SignUp Page</Title>
        <Description>
          <form onSubmit={onSubmit}>
            <input name={'email'} />
            <input name={'password'} type={'password'} />
            <button>create acc</button>
          </form>
          <Link href='/'>&larr; Go Back</Link>
        </Description>
      </Main>
    </Container>
  );
};

export default SignUp;
