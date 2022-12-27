import { Player } from './Player';

export interface Card {
  suit: 'hearts' | 'spades' | 'clubs' | 'diamonds' | null;
  value:
    | 'ace'
    | 'two'
    | 'three'
    | 'four'
    | 'five'
    | 'six'
    | 'seven'
    | 'eight'
    | 'nine'
    | 'ten'
    | 'jack'
    | 'queen'
    | 'king'
    | 'joker';
  ownerHistory: Player[];
}
