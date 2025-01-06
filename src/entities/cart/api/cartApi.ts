import { baseApi } from '~shared/api/baseApi';

import { IBagProduct, TResponseBag } from '../model/types';

export const cartApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCartProduct: build.query<
      { cart_items: IBagProduct[]; total_price: number },
      void
    >({
      query: () => ({
        url: 'cart',
        credentials: 'include',
      }),
      keepUnusedDataFor: 30,
      transformResponse: (response: TResponseBag) => ({
        cart_items: response.cart_items,
        total_price: response.total_price,
      }),
    }),
    addProductToCart: build.mutation<void, { pk: number; quantity: number }>({
      query: ({ pk, quantity }) => ({
        url: 'cart',
        method: 'POST',
        params: { pk, quantity },
        credentials: 'include',
      }),
    }),
    deleteCartProduct: build.mutation<void, { pk: number }>({
      query: ({ pk }) => ({
        url: 'cart',
        method: 'PATCH',
        params: { pk },
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useGetCartProductQuery,
  useAddProductToCartMutation,
  useDeleteCartProductMutation,
} = cartApi;
