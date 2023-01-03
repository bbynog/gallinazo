import Container from '@ui-components/Container';
import NavBar from './NavBar';

export default function Home() {
  return (
    <Container>
      <p className={'text-red'}>Welcome to gallinazo!</p>
      <NavBar />
    </Container>
  );
}
