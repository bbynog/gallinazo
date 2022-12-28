import DeckCard from './DeckCard';

export default interface CardsInfo {
  drawn: {
    from: 'DECK' | 'TRASH';
    card: DeckCard;
  };
  keeps: DeckCard | null; // if type UNLEASH | KNOCK, keeps is null
  discards: DeckCard | null; // if type KNOCK, discards is null
}
