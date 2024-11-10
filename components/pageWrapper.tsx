import React, { FC } from 'react';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
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
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Reskinit
            </Typography>
          </Toolbar>
        </AppBar>
        <Container className="container">{children}</Container>
      </main>
      <style>{`
        body {
          background-color: #f0f0f0;
        }
        .container {
          margin-top: 2em;
        }
      `}</style>
    </>
  );
};
