import Link from 'next/link';
import Container from '../../shared/ui-components/Container';
import Description from '../../shared/ui-components/Description';
import Main from '../../shared/ui-components/Main';
import Title from '../../shared/ui-components/Title';

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
