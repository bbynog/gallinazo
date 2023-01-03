import PusherService from '@services/PusherService';
import { Channel } from 'pusher-js';
import { useEffect, useState } from 'react';
import useAuth from './useAuth';

interface useSubscribeParams {
  channelName: string;
}

const useSubscribe = ({ channelName }: useSubscribeParams) => {
  const { currentUser } = useAuth();
  const [channel, setChannel] = useState<Channel | undefined>();

  useEffect(() => {
    console.log('useSubscribe()s useEffect');
    if (currentUser?.uid) {
      const pusher = PusherService.getInstance(currentUser.uid);

      const subscriptionChannel = pusher.subscribe(channelName);

      setChannel(subscriptionChannel);
    }
    return () => {};
  }, [currentUser, channelName]);

  const unsubscribe = () => {
    if (!channel) {
      console.warn('there are no channels to unsubscribe');
    }

    channel?.unsubscribe();
  };

  return {
    channel: channel,
    unsubscribe: unsubscribe
  };
};

export default useSubscribe;
