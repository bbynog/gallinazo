import { useState } from 'react';
import { Card } from '../../models/Card';

// props from server
const initialQueue = [1, 2, 3, 4];
const initialHand: Card[] = [
  {
    suit: 'spades',
    value: 'king',
    ownerHistory: []
  },
  {
    suit: 'hearts',
    value: 'queen',
    ownerHistory: []
  },
  {
    suit: 'spades',
    value: 'seven',
    ownerHistory: []
  },
  {
    suit: 'diamonds',
    value: 'king',
    ownerHistory: []
  }
];

const Game = () => {
  return <></>;
};

export default Game;
