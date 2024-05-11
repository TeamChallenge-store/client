import { baseApi } from '~shared/api/baseApi';
import { IOrder } from '../model/types';

export const orderApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createOrder: build.mutation<void, IOrder>({
      query: order => ({
        url: '/orders/',
        method: 'POST',
        body: order,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
