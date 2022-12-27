import { NextApiRequest, NextApiResponse } from 'next';

import {} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { pusher } from '..';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const currentUser = getAuth().currentUser;
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const userId = req.body.user_id;

    console.log('currentUser', currentUser);
    console.log('socketId', socketId);
    console.log('channel', channel);
    console.log('userId', userId);

    if (!currentUser) {
      throw 'User not logged in.';
    }

    const user = {
      id: currentUser.uid,
      user_info: currentUser.email
    };

    const authResponse = pusher.authenticateUser(socketId, user);

    res.status(200).send(authResponse);
  } catch (error) {
    console.log('api user-auth error', error);
    res.status(403).send({ message: error });
  }
};

export default handler;
