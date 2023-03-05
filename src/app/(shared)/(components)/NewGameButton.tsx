'use client';

import useAuth from '@hooks/useAuth';
import useSubscribe from '@hooks/useSubscribe';
import generatePresenceChannelName from '@utils/generatePresenceChannelName';
import { useRouter } from 'next/navigation';
import { useEffect, useState, type PropsWithChildren } from 'react';

const NewGameButton = ({ children }: PropsWithChildren) => {
  const { currentUser } = useAuth();
  const [channelName, setChannelName] = useState<string>('');
  const { channel, unsubscribe, subscribe } = useSubscribe(channelName);

  const router = useRouter();

  useEffect(() => {
    if (currentUser?.uid && !channelName) {
      setChannelName(generatePresenceChannelName(currentUser.uid));
    }
  }, [currentUser, channelName]);

  useEffect(() => {
    channel?.bind(
      'pusher:subscription_succeeded',
      (members: { count: number }) => {
        console.log(`There are ${members.count} members in this channel`);
      },
    );
    channel?.bind('halu-event', (data: any) => {
      console.log('data', data);
    });

    channel?.bind('pusher:subscription_error', (error: any) => {
      console.error('subscription error', error);
    });
  }, [channel]);

  const onClickHandler = () => {
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
