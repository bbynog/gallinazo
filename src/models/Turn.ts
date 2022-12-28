import CardsInfo from './CardsInfo';
import MoveType from './MoveType';
import Player from './Player';

export default interface Turn {
  player: Player;
  move: {
    type: MoveType;
    cardsInfo: CardsInfo;
  };
}
