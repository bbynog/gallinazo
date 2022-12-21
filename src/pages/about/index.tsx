import Link from 'next/link';
import { Container, Main, Title, Description } from '../../components/sharedStyles';

export default function About() {
  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href='/'>&larr; Go Back</Link>
        </Description>
      </Main>
    </Container>
  );
}
