import Container from '@ui-components/Container';

export default async function Home() {
  return (
    <Container>
      <p className={'text-red'}>Welcome to gallinazo!</p>
      <div className={'btn'}>Halu, daisy!</div>
      <div className={'bg-ruby card-bordered card'}>
        <div className={'card-title'}>Halu, daisy card!</div>
        <div className={'card-body'}>Ipsilom!</div>
        <div className={'card-actions'}>
          <div className={'btn'}>Go</div>
        </div>
      </div>
    </Container>
  );
}
