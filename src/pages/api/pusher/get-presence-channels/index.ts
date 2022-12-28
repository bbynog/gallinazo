import { NextApiRequest, NextApiResponse } from 'next';
import Pusher from 'pusher';

import { pusher } from '..';

const getPresenceChannels = async () => {
  const pusherOptions: Pusher.RequestOptions = {
    path: '/channels',
    params: { filter_by_prefix: 'presence-', info: 'user_count' }
  };
  return await pusher
    .get(pusherOptions)
    .then((response) => {
      if (response.status !== 200) {
        throw Error('unexpected status');
      }
      // Parse the response body as JSON
      return response.json();
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO: implement token security to see the channels ? or let the not loggedin users to see?
  try {
    const presenceChannelsResponse = await getPresenceChannels();

    res.status(200).json(presenceChannelsResponse);
  } catch (error) {
    console.log('error on get-presence-channels');
  }
};

export default handler;
