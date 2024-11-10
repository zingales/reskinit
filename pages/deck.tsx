import React from 'react';

import { FC } from 'react';
import { Button, Grid } from '@mui/material';
import { PageWrapper } from '../components/pageWrapper';
import { STANDARD_DECK } from '../services/deck/types';
import Link from 'next/link';

const Card: FC = () => {
  return (
    <PageWrapper>
      <Grid container spacing={2} columns={16}>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
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
