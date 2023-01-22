import { FormEvent } from 'react';

import Link from 'next/link';

import Container from '@ui-components/Container';

const SignIn = () => {
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
