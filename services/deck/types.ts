// Define Suit, includes image
// Define Rank, includes letter and number

import { z } from 'zod';

export const Suit = z.enum(['clubs', 'diamonds', 'hearts', 'spades']);
export type Suit = z.infer<typeof Suit>;
export const SUITS = Suit.enum;

export const Rank = z.enum([
  'ace',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'jack',
  'queen',
  'king',
]);
export type Rank = z.infer<typeof Rank>;
export const RANKS = Rank.enum;

export const VALUES_BY_RANK: Record<Rank, number> = {
  ace: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 11,
  queen: 12,
  king: 13,
};

export const Card = z.object({
  rank: Rank,
  suit: Suit,
});
export type Card = z.infer<typeof Card>;

export const Deck = z.array(Card);
export type Deck = z.infer<typeof Deck>;

export const STANDARD_DECK: Deck = [];
for (const suit of Suit.options) {
  for (const rank of Rank.options) {
    STANDARD_DECK.push({ rank, suit });
  }
}
