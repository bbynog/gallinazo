import { FormEvent } from 'react';

import Link from 'next/link';

import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword
} from 'firebase/auth';
import Container from '@ui-components/Container';

const SignIn = () => {
  // const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   const auth = getAuth();
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);

  //   const email = formData.get('email') as string;
  //   const password = formData.get('password') as string;

  //   // setPersistence(auth, browserLocalPersistence)
  //   //   .then(() => {
  //   //     return signInWithEmailAndPassword(auth, email || '', password || '');
  //   //   })
  //   //   .then((userCredential) => {
  //   //     console.log('userCredential', userCredential);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log('ERROR ON SIGNIN', error);
  //   //   });
  // };

  return (
    <Container>
      <h1>SignIn Page</h1>
      <form>
        <div>
          <input name={'email'} />
          <input name={'password'} type={'password'} />
          <button>Sign In</button>
          <Link href='/'>&larr; Go Back</Link>
        </div>
      </form>
    </Container>
  );
};

export default SignIn;
