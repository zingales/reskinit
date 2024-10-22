import React, { FC } from 'react';
import Head from 'next/head';
import { ReactNode } from 'react';

export const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>TODO: Title</title>

        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="TODO: some description" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};
