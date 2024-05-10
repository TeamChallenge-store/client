import { baseApi } from '~shared/api/baseApi';

import { IBagProduct, TResponseBag } from '../model/types';

export const cartApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCartProduct: build.query<IBagProduct[], void>({
      query: () => 'cart',
      keepUnusedDataFor: 30,
      transformResponse: (response: TResponseBag) => response.cart_items,
    }),
    addProductToCart: build.mutation<void, { pk: number; quantity: number }>({
      query: ({ pk, quantity }) => ({
        url: 'cart',
        method: 'POST',
        params: { pk, quantity },
      }),
    }),
    deleteCartProduct: build.mutation<void, { pk: number }>({
      query: ({ pk }) => ({
        url: 'cart',
        method: 'DELETE',
        params: { pk },
      }),
    }),
  }),
});

export const {
  useGetCartProductQuery,
  useAddProductToCartMutation,
  useDeleteCartProductMutation,
} = cartApi;
