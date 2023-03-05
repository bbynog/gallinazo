import { clientEnv } from '@env/clientEnv.mjs';
import type Channel from '@models/Channel';

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
      userCount: info.user_count,
    });
  }

  return channelsRes;
};

const getPresenceChannels = async () => {
  const presenceChannelsResponse = await fetch(
    clientEnv.NEXT_PUBLIC_APP_URL + '/api/pusher/get-presence-channels',
    {
      next: { revalidate: 10 },
    },
  );

  // @ts-expect-error
  return selectChannelObject(presenceChannelsResponse.json());
};

const usePresenceChannels = async () => {
  return await getPresenceChannels();
};

export default usePresenceChannels;
