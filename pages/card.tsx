import React, { useMemo } from 'react';

import { FC } from 'react';
import { PageWrapper } from '../components/pageWrapper';
import { useRouter } from 'next/router';
import { z } from 'zod';
import { Rank, Suit } from '../services/deck/types';

export const CardQueryParams = z.object({
  rank: Rank,
  suit: Suit,
});
export type CardQueryParams = z.infer<typeof CardQueryParams>;

const getBaseDeckFilename = ({ rank, suit }: CardQueryParams) => {
  `/static/base_deck/${rank.toUpperCase()}${suit[0].toUpperCase()}.svg`;
};

const Card: FC = () => {
  const router = useRouter();

  const queryParams = useMemo((): CardQueryParams | null => {
    const queryParams = CardQueryParams.safeParse(router.query);
    if (!queryParams.success) {
      return null;
    }

    return queryParams.data;
  }, [router.query]);

  return (
    <PageWrapper>
      <img src="/static/base_deck/AH.svg" />
    </PageWrapper>
  );
};

export default Card;
