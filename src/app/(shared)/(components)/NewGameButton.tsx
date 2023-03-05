'use client';

import useAuth from '@hooks/useAuth';
import useSubscribe from '@hooks/useSubscribe';
import generatePresenceChannelName from '@utils/generatePresenceChannelName';
import { useRouter } from 'next/navigation';
import { useEffect, useState, type PropsWithChildren } from 'react';

const NewGameButton = ({ children }: PropsWithChildren) => {
  const { currentUser } = useAuth();
  console.log('currentUser SubscribeButton', currentUser);
  const [channelName, setChannelName] = useState<string>('');
  const { channel, unsubscribe, subscribe } = useSubscribe(channelName);

  const router = useRouter();

  console.log('channelName SubscribeButtin', channelName);

  useEffect(() => {
    if (currentUser?.uid && !channelName) {
      setChannelName(generatePresenceChannelName(currentUser.uid));
    }
  }, [currentUser, channelName]);

  useEffect(() => {
    console.log('channel', channel);
    channel?.bind('pusher:subscription_succeeded', (members: any) => {
      console.log(`There are ${members.count} members in this channel`);
    });
    channel?.bind('halu-event', (data: any) => {
      console.log('data', data);
    });

    channel?.bind('pusher:subscription_error', (error: any) => {
      console.error('subscription error', error);
    });

    return () => {};
  }, [channel]);

  const onClickHandler = async () => {
    if (!channel) {
      subscribe();
    }
    setTimeout(() => {
      if (!channel) {
        console.log('theres no channel yet, increase timeout');
      } else {
        router.push(`/game/${channelName}`);
      }
    }, 2000);
  };

  return <button onClick={onClickHandler}>{children}</button>;
};

export default NewGameButton;
