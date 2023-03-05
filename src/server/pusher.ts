import { serverEnv } from '@env/serverEnv.mjs';
import Pusher from 'pusher';

export const pusher = new Pusher({
  appId: serverEnv.PUSHER_APP_ID,
  secret: serverEnv.PUSHER_APP_SECRET,
  key: serverEnv.NEXT_PUBLIC_PUSHER_APP_KEY,
  cluster: serverEnv.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
  useTLS: true,
});
