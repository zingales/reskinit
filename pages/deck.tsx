import React from 'react';

import { FC } from 'react';
import { Button } from '@mui/material';
import { PageWrapper } from '../components/pageWrapper';
import { STANDARD_DECK } from '../services/deck/types';
import Link from 'next/link';

const Card: FC = () => {
  return (
    <PageWrapper>
      {STANDARD_DECK.map((card, index) => (
        <Button key={index}>
          <Link
            href={{
              pathname: '/card',
              query: { rank: card.rank, suit: card.suit },
            }}
          >
            {card.rank} of {card.suit}
          </Link>
        </Button>
      ))}
    </PageWrapper>
  );
};

export default Card;
