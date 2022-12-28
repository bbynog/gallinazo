import Head from 'next/head';
import Link from 'next/link';

import { useEffect, useState } from 'react';

import { axiosService } from '@services';
import { Container, Description, Main, Title } from '@src/ui-components';
import { Card } from '@src/components';

interface DashboardProps {}
interface Channel {
  name: string;
  userCount: number;
}
export default function Dashboard({}: DashboardProps) {
  // react query to redo req every 5s
  const [presenceChannels, setPresenceChannels] = useState<Channel[]>([]);
  const axios = axiosService.getInstance();

  useEffect(() => {
    const getPresenceChannels = async () => {
      const response = await axios.get('/api/pusher/get-presence-channels');
      if (response?.data?.channels) {
        console.log('response?.data?.channels', response?.data?.channels);

        const channels: Channel[] = [];

        for (const [channelName, channelInfo] of Object.entries(
          response.data.channels
        )) {
          const info = channelInfo as { user_count: number };
          channels.push({
            name: channelName,
            userCount: info.user_count
          });
        }

        console.log('channels', channels);
        setPresenceChannels(channels);
      }
    };

    getPresenceChannels();
  }, [axios]);
  return (
    <Container>
      <Head>
        <title>Dashboard</title>
        <meta
          name='description'
          content='The dashboard/board you will find the game sessions to join or create one yourself'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        <Title>Dashboard Page</Title>
        {presenceChannels.map((channel) => {
          return channel ? (
            <Card title={channel.name + ' ' + channel.userCount} />
          ) : null;
        })}
        <Description>
          <Link href='/'>&larr; Go Back</Link>
        </Description>
      </Main>
    </Container>
  );
}
