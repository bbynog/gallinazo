'use client';

import useAuth from '@hooks/useAuth';
import Player from '@models/Player';
import Container from '@ui-components/Container';
import { use, useEffect, useState } from 'react';

interface GamePageProps {
  params: {
    channelName: string;
  };
}

const signIn = async (channelName: string, uid: string) => {
  const signInResponse = await fetch('/api/game/session/signin', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify({
      channelName: channelName,
      uid: uid
    })
  });

  return signInResponse;
};

const GamePage = ({ params }: GamePageProps) => {
  console.log('params gamepage: ', params);
  const { channelName } = params;
  const { currentUser } = useAuth();

  const [signedIn, setSignedIn] = useState<boolean>(false);

  const [readySetGo, setReadySetGo] = useState<boolean>(false);
  const [playersReady, setPlayersReady] = useState<Player[]>([]);
  const [playersInLobby, setPlayersInLobby] = useState<Player[]>([]);
  const [playQueue, setPlayerQueue] = useState<Player[]>();

  useEffect(() => {
    if (!signedIn && currentUser?.uid) {
      const signInResponse = use(signIn(channelName, currentUser.uid));
      if (signInResponse) {
        setSignedIn(true);
      }
    }
  }, [channelName, currentUser, signedIn]);

  return (
    <Container>
      <h1>GamePage Page</h1>
    </Container>
  );
};

export default GamePage;