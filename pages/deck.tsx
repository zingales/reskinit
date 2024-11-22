import React from 'react';

import { FC, useRef } from 'react';
import { Button, Grid2 as Grid } from '@mui/material';
import { PageWrapper } from '../components/pageWrapper';
import { STANDARD_DECK, Card } from '../services/deck/types';
import Link from 'next/link';

const getStandardDeckFilename = ({ rank, suit }: Card) => `${rank}_of_${suit}.svg`;

const DeckFC: FC = () => {
  const elementRef = useRef(null);
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
                <img
                  src={`/static/standard_deck/${getStandardDeckFilename({ rank: card.rank, suit: card.suit })}`}
                  alt={`{card.rank} of {card.suit}`}
                  width={elementRef.current === null ? 100 : elementRef.current.getBoundingClientRect()}
                />
              </Link>
            </Button>
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default DeckFC;
