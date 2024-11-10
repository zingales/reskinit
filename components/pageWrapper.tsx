import React, { FC } from 'react';
import { Container } from '@mui/material';
import Head from 'next/head';
import { ReactNode } from 'react';

export const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Reskinit</title>

        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="App for reskining games" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>{children}</Container>
      </main>
      <style>{`
      `}</style>
    </>
  );
};
