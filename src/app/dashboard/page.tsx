import Container from '@ui-components/Container';
import Link from 'next/link';

interface DashboardProps {}
interface Channel {
  name: string;
  userCount: number;
}

const selectChannelObject = (channels?: {
  channelName: string;
  channelInfo: { user_count: number };
}) => {
  const channelsRes: Channel[] = [];

  if (!channels) {
    return channelsRes;
  }

  for (const [channelName, channelInfo] of Object.entries(channels)) {
    const info = channelInfo as { user_count: number };
    channelsRes.push({
      name: channelName,
      userCount: info.user_count
    });
  }

  return channelsRes;
};

const getPresenceChannels = async () => {
  const presenceChannelsResponse = await fetch(
    process.env.APP_DOMAIN + '/api/pusher/get-presence-channels',
    {
      next: { revalidate: 10 }
    }
  );

  console.log('presenceChannelsResponse', presenceChannelsResponse);

  // @ts-expect-error
  return selectChannelObject(presenceChannelsResponse.data?.channels);
};

export default async function Dashboard({}: DashboardProps) {
  const presenceChannels = await getPresenceChannels();
  console.log('presenceChannelsXomp', presenceChannels);
  return (
    <Container>
      <h1>Dashboard Page</h1>
      {presenceChannels.map((channel) => {
        return channel ? (
          <div className={'w-50 h-3'}>
            {channel.name + ' ' + channel.userCount}
          </div>
        ) : null;
      })}
      <Link href='/'>&larr; Go Back</Link>
    </Container>
  );
}
