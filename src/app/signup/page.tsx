import Container from '@ui-components/Container';
import Link from 'next/link';

const SignUp = () => {
  return (
    <Container>
      <h1>SignUp Page</h1>
      <span>
        <form>
          <input name={'email'} />
          <input name={'password'} type={'password'} />
        </form>
        <Link href='/'>&larr; Go Back</Link>
      </span>
    </Container>
  );
};

export default SignUp;
