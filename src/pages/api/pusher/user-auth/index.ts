import { NextApiRequest, NextApiResponse } from 'next';
import { PresenceChannelData } from 'pusher';

import { pusher } from '@server/pusher';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const uid = req.query.user_id;

    const user: PresenceChannelData = {
      user_id: uid as string
    };

    const authResponse = pusher.authorizeChannel(socketId, channel, user);

    res.status(200).json(authResponse);
  } catch (error) {
    console.log('api user-auth error', error);
    res.status(403).json({ message: error });
  }
};

export default handler;
