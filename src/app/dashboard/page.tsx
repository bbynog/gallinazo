import usePresenceChannels from '@hooks/usePresenceChannels';
import Container from '@ui-components/Container';
import NewGameButton from '@components/NewGameButton';
import Link from 'next/link';

export default async function Dashboard() {
  const presenceChannels = await usePresenceChannels();
  console.log('presenceChannelsXomp', presenceChannels);

  return (
    <Container>
      <h1>Dashboard Page</h1>
      <NewGameButton> Subscribe to a channel</NewGameButton>
      {presenceChannels.map((channel) => {
        return channel ? (
          <div className={'w-50 h-3'}>
            {`${channel.name} ${channel.userCount}`}
          </div>
        ) : null;
      })}
      <Link href='/'>&larr; Go Back</Link>
    </Container>
  );
}
