import { FormEvent } from 'react';
import Link from 'next/link';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Container from '@ui-components/Container';

const SignUp = () => {
  // const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);

  //   const email = formData.get('email') as string;
  //   const password = formData.get('password') as string;

  //   // const auth = getAuth();

  //   // createUserWithEmailAndPassword(auth, email || '', password || '')
  //   //   .then((userCredential) => {
  //   //     console.log('userCredential', userCredential);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log('ERROR ON CREATEACCOUNT', error);
  //   //   });
  // };
  return (
    <Container>
      <h1>SignUp Page</h1>
      <span>
        <form>
          <input name={'email'} />
          <input name={'password'} type={'password'} />
          <button>create acc</button>
        </form>
        <Link href='/'>&larr; Go Back</Link>
      </span>
    </Container>
  );
};

export default SignUp;
