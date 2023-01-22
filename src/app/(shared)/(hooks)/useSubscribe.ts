'use client';

import ClientPusherService from '@services/PusherService';
import type { Channel } from 'pusher-js';
import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useSubscribe = (channelName: string) => {
  const [subscribe, setSubscribe] = useState<boolean>(false);
  // const { currentUser } = useAuth();

  const [channel, setChannel] = useState<Channel | undefined>();

  useEffect(() => {
    const currentUser = {
      uid: 'mock'
    };

    console.log('useSubscribe()s useEffect', currentUser?.uid);
    if (subscribe && currentUser?.uid) {
      const pusher = ClientPusherService.getInstance(currentUser.uid);

      const subscriptionChannel = pusher.subscribe(channelName);

      setChannel(subscriptionChannel);
      setSubscribe(false);
    }
    return () => undefined;
  }, [channelName, subscribe]);

  const doSubscribe = () => {
    setSubscribe(true);
  };
  const unsubscribe = () => {
    if (!channel) {
      console.warn('there are no channels to unsubscribe');
    }

    // unsafe
    channel?.unsubscribe();
    setSubscribe(false);
  };

  return {
    channel: channel,
    unsubscribe: unsubscribe,
    subscribe: doSubscribe
  };
};

export default useSubscribe;
