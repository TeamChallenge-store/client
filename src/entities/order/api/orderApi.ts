import Cookies from 'js-cookie';
import { baseApi } from '~shared/api/baseApi';
import { IOrder } from '../model/types';

export const orderApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createOrder: build.mutation<void, IOrder>({
      query: order => {
        const sessionId = Cookies.get('sessionid');

        return {
          url: '/orders/',
          method: 'POST',
          headers: {
            'x-session-id': sessionId || '',
          },
          body: order,
          credentials: 'include',
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
