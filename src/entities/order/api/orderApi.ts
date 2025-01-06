import { baseApi } from '~shared/api/baseApi';
import { IOrder } from '../model/types';

export const orderApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createOrder: build.mutation<void, IOrder>({
      query: order => {
        return {
          url: '/orders/',
          method: 'POST',
          body: order,
          credentials: 'include',
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
