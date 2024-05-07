import { baseApi } from '~shared/api/baseApi';

import { IBagProduct, TResponse } from '../model/types';

export const cartApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCartProduct: build.query<IBagProduct[], void>({
      query: () => '/cart/',
      keepUnusedDataFor: 30,
      transformResponse: (response: TResponse) => response.results,
    }),
    addProductToCart: build.mutation<void, { pk: number; quantity: number }>({
      query: ({ pk, quantity }) => ({
        url: '/cart/',
        method: 'POST',
        params: { pk, quantity },
      }),
    }),
  }),
});

export const { useGetCartProductQuery, useAddProductToCartMutation } = cartApi;
