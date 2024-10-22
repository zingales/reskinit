import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { EmptyObject, MessageObject } from '../../helpers/zodTypes';
import { createApiRouter } from '../../helpers/api';

export namespace ApiIndex {
  export namespace Get {
    export const Params = EmptyObject;
    export type Params = z.infer<typeof Params>;

    export const Error = MessageObject;
    export type Error = z.infer<typeof Error>;

    export const Result = EmptyObject;
    export type Result = z.infer<typeof Result>;
  }

  export namespace Post {
    export const Params = EmptyObject;
    export type Params = z.infer<typeof Params>;

    export const Error = MessageObject;
    export type Error = z.infer<typeof Error>;

    export const Result = EmptyObject;
    export type Result = z.infer<typeof Result>;
  }
}

const handler = createApiRouter()
  .get(async (request: NextApiRequest, response: NextApiResponse<ApiIndex.Get.Error | ApiIndex.Get.Result>) => {
    const params = ApiIndex.Get.Params.safeParse(request.query);
    if (!params.success) {
      return response.status(400).json({
        message: 'Invalid params',
      });
    }

    return response.status(200).json({});
  })
  .post(async (request: NextApiRequest, response: NextApiResponse<ApiIndex.Post.Error | ApiIndex.Post.Result>) => {
    const params = ApiIndex.Post.Params.safeParse(request.body);
    if (!params.success) {
      return response.status(400).json({
        message: 'Invalid params',
      });
    }

    return response.status(200).json({});
  })
  .handler();

export default handler;
