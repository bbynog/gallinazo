import DeckCard from './DeckCard';
import Player from './Player';
import Turn from './Turn';

export default interface GameState {
  id: number;
  gameSessionId: number;
  playQueue: Player[];
  deck: DeckCard[];
  trash: DeckCard[];
  turnHistory: Turn[];
}
