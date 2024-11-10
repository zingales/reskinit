import React from 'react';

import { FC } from 'react';
import { Button } from '@mui/material';
import { PageWrapper } from '../components/pageWrapper';

const Home: FC = () => {
  return (
    <PageWrapper>
      <Button href="/deck">Deck</Button>
    </PageWrapper>
  );
};

export default Home;
