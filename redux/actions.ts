import { createZodAction } from '../helpers/redux';
import { ApiIndex } from '../pages/api';

export const todo = createZodAction('todo', ApiIndex.Get.Result, (params: ApiIndex.Get.Params) => {
  return {
    request: {
      params,
      method: 'GET',
      url: '/api',
    },
  };
});
