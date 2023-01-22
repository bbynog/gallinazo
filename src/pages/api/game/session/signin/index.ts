import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'method not allowed' });
    } else {
      const { channelName, uid } = req.body;
      // query for this gamesession on db
      //   if (!gameSessionInDb) {
      //     createGameSessionInDb();
      //   } else {
      //     updateGameSessionAddingMyName();
      //   }

      // push pusher to notify clients on the session that one other member got in
    }
    // res.status(200).json();
  } catch (error) {
    console.log('error on api handler', error);
    res.status(400).json({ message: error });
  }
};

export default handler;
