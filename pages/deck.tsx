import React from 'react';

import { FC } from 'react';
import { Box, Button, Grid2 as Grid, Typography } from '@mui/material';
import { PageWrapper } from '../components/pageWrapper';
import { STANDARD_DECK, Card } from '../services/deck/types';
import Link from 'next/link';

const getStandardDeckFilename = ({ rank, suit }: Card) => `${rank}_of_${suit}.svg`;

const DeckFC: FC = () => {
  return (
    <PageWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          // height: '100vh', // Adjust height as needed
          backgroundColor: '#f5f5f5', // Optional background color
          padding: 4,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Standard Deck of Cards
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          This is a standard deck of cards. 4 suits 13 cards per suit. All with the same background.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2, // Space between buttons
            mt: 3, // Margin-top
            paddingBottom: 10,
          }}
        >
          <Button variant="contained" color="primary">
            <Link href={{ pathname: '/deck' }}>Reskin Something</Link>
          </Button>
          <Button variant="outlined" color="primary">
            <Link href={{ pathname: '/discover' }}>See other reskinnings</Link>
          </Button>
        </Box>

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
                    width={100}
                  />
                </Link>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageWrapper>
  );
};

export default DeckFC;
