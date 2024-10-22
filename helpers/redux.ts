import { RequestAction } from '@redux-requests/core';
import { createAction } from 'redux-smart-actions';
import { z } from 'zod';

export const createZodAction = <ZOD_TYPE extends z.ZodTypeAny, PARAMS extends Array<unknown>>(
  name: string,
  modelParser: ZOD_TYPE,
  actionCreator: (...params: PARAMS) => RequestAction<z.infer<ZOD_TYPE>>,
): ((...params: PARAMS) => RequestAction<z.infer<ZOD_TYPE>> & { type: string }) => {
  return createAction(name, (...params: PARAMS): RequestAction<z.infer<ZOD_TYPE>> => {
    const action = actionCreator(...params);

    return {
      ...action,
      meta: {
        ...action.meta,
        onSuccess: <T extends { data: unknown }>(response: T): T & { data?: z.infer<ZOD_TYPE> } => {
          const result = modelParser.safeParse(response.data);

          if (!result.success) {
            // eslint-disable-next-line no-console
            console.error('failed to parse response');
            return {
              ...response,
              data: undefined,
            };
          }

          return {
            ...response,
            data: result.data,
          };
        },
      },
    };
  });
};
