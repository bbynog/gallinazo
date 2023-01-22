import Player from './Player';

interface GameSession {
  id: number;
  active: boolean;
  gameStateIds: number[];
  players: Player[];
}

export default GameSession;
