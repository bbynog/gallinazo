import type Channel from '@models/Channel';
import { clientEnv } from 'src/env/client.mjs';
import { serverEnv } from 'src/env/server.mjs';

const selectChannelObject = (channels?: {
  channelName: string;
  channelInfo: { user_count: number };
}) => {
  const channelsRes: Channel[] = [];

  console.log('serverENv', serverEnv);
  console.log('clientEnv', clientEnv);
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
    serverEnv.APP_DOMAIN + '/api/pusher/get-presence-channels',
    {
      next: { revalidate: 10 }
    }
  );

  console.log('presenceChannelsResponse', presenceChannelsResponse);

  return selectChannelObject(presenceChannelsResponse.data?.channels);
};

const usePresenceChannels = async () => {
  return await getPresenceChannels();
};

export default usePresenceChannels;
