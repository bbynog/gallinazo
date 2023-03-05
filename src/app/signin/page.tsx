import Link from 'next/link';

import SignInButton from '@components/SignInButton';
import Container from '@ui-components/Container';

const SignIn = () => {
  return (
    <Container>
      <h1>SignIn Page</h1>
      <form>
        <div>
          {/* <input name={'email'} />
          <input name={'password'} type={'password'} /> */}
          <SignInButton>Sign In</SignInButton>
          <Link href='/'>&larr; Go Back</Link>
        </div>
      </form>
    </Container>
  );
};

export default SignIn;
