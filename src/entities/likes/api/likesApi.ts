import { baseApi } from '~shared/api/baseApi';
import { LikedProduct } from '../model/types';

export const likesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getLikedProducts: build.query<LikedProduct[], void>({
      query: () => ({
        url: 'likes/',
        credentials: 'include',
      }),
      keepUnusedDataFor: 60,
      transformResponse: (response: any[]) => {
        return response.map(product => ({
          ...product,
          price: parseFloat(product.price),
        }));
      },
    }),
    addProductToLikes: build.mutation<void, { product_id: number }>({
      query: ({ product_id }) => ({
        url: 'likes/',
        method: 'POST',
        body: { product_id },
        credentials: 'include',
      }),
    }),
    deleteLikedProduct: build.mutation<void, { product_id: number }>({
      query: ({ product_id }) => ({
        url: 'likes/',
        method: 'DELETE',
        body: { product_id },
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useGetLikedProductsQuery,
  useAddProductToLikesMutation,
  useDeleteLikedProductMutation,
} = likesApi;