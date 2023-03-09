import Link from 'next/link';

import SignInButton from '@components/SignInButton';
import Container from '@ui-components/Container';

const SignIn = () => {
  return (
    <Container>
      <h1>Sign In</h1>
      <form>
        <div>
          <SignInButton>Sign In</SignInButton>
          <Link href='/'>&larr; Go Back</Link>
        </div>
      </form>
    </Container>
  );
};

export const runtime = 'experimental-edge';
export default SignIn;
