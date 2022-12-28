import { FormEvent } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Container from '../../shared/ui-components/Container';
import Description from '../../shared/ui-components/Description';
import Main from '../../shared/ui-components/Main';
import Title from '../../shared/ui-components/Title';

import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword
} from 'firebase/auth';

const SignIn = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const auth = getAuth();
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email || '', password || '');
      })
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
        <form onSubmit={onSubmit}>
          <Description>
            <input name={'email'} />
            <input name={'password'} type={'password'} />
            <button>Sign In</button>
            <Link href='/'>&larr; Go Back</Link>
          </Description>
        </form>
      </Main>
    </Container>
  );
};

export default SignIn;
