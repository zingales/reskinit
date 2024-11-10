import React from 'react';

import { FC } from 'react';
import { Button, Grid2 as Grid } from '@mui/material';
import { PageWrapper } from '../components/pageWrapper';
import { STANDARD_DECK } from '../services/deck/types';
import Link from 'next/link';

const Card: FC = () => {
  return (
    <PageWrapper>
      <Grid container spacing={2} columns={13}>
        {STANDARD_DECK.map((card, index) => (
          <Grid size={1} key={index}>
            <Button>
              <Link
                href={{
                  pathname: '/card',
                  query: { rank: card.rank, suit: card.suit },
                }}
              >
                {card.rank} of {card.suit}
              </Link>
            </Button>
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default Card;
