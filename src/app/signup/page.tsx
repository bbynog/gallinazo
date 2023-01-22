import Link from 'next/link';

import Container from '@ui-components/Container';

const SignUp = () => {
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
