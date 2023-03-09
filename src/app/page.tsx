import Container from '@ui-components/Container';

const Home = () => {
  return (
    <Container>
      <p className={'text-red'}>Welcome to gallinazo!</p>
      <div className='btn'>Halu, daisy!</div>
    </Container>
  );
};

export const runtime = 'experimental-edge';
export default Home;
