import { pusher } from '@server/pusher';
import Pusher from 'pusher';

const getPresenceChannels = async () => {
  const pusherOptions: Pusher.RequestOptions = {
    path: '/channels',
    params: { filter_by_prefix: 'presence-', info: 'user_count' },
  };
  return await pusher
    .get(pusherOptions)
    .then((response) => {
      if (response.status !== 200) {
        throw Error('unexpected status');
      }

      return response.json();
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export default getPresenceChannels;
