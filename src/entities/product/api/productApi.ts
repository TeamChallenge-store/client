import { baseApi } from '~shared/api/baseApi';

import { IProductCard, TResponse } from '../model/types';

export const productApi = baseApi.injectEndpoints({
  endpoints: build => ({
    productCategory: build.query<IProductCard[], string>({
      query: sortBy => ({
        url: `products/${sortBy}`,
      }),
      keepUnusedDataFor: 30,
      transformResponse: (response: TResponse) => response.results,
    }),
  }),
});

export const { useProductCategoryQuery } = productApi;
