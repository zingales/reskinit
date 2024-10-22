import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { NodeRouter } from 'next-connect/dist/types/node';

export const createApiRouter = <RESPONSE>(): NodeRouter<NextApiRequest, NextApiResponse<RESPONSE>> => {
  const router = createRouter<NextApiRequest, NextApiResponse<RESPONSE>>();

  router.handler({
    onError: (_error, _request, response) => {
      response.status(500).end('Internal server error');
    },
  });

  return router;
};
