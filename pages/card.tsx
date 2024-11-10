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

const getStandardDeckFilename = ({ rank, suit }: CardQueryParams) => `${rank}_of_${suit}.svg`;

const Card: FC = () => {
  const router = useRouter();

  const queryParams = useMemo((): CardQueryParams | null => {
    const queryParams = CardQueryParams.safeParse(router.query);
    if (!queryParams.success) {
      return null;
    }

    return queryParams.data;
  }, [router.query]);

  if (queryParams === null) {
    return null;
  }

  return (
    <PageWrapper>
      <img src={`/static/standard_deck/${getStandardDeckFilename(queryParams)}`} />
    </PageWrapper>
  );
};

export default Card;
