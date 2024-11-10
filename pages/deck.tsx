import React from 'react';

import { FC } from 'react';
import { PageWrapper } from '../components/pageWrapper';
import { STANDARD_DECK } from '../services/deck/types';
import Link from 'next/link';

const Card: FC = () => {
  return (
    <>
      <PageWrapper>
        {STANDARD_DECK.map((card, index) => (
          <div key={index}>
            <Link
              legacyBehavior
              href={{
                pathname: '/card',
                query: { rank: card.rank, suit: card.suit },
              }}
            >
              <a>
                {card.rank} of {card.suit}
              </a>
            </Link>
          </div>
        ))}
      </PageWrapper>
      <style>{`
        a {
          color: blue;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Card;
