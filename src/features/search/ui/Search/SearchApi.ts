import { baseApi } from '~shared/api/baseApi';

import { IProductCard, TResponse } from '~entities/product/model/types';

export const searchApi = baseApi.injectEndpoints({
  endpoints: build => ({
    searchProducts: build.query<IProductCard[], string>({
      query: searchProduct => ({
        url: `products/?search=${searchProduct}`,
      }),
      transformResponse: (response: TResponse) => response.results,
    }),
  }),
});

export const { useSearchProductsQuery } = searchApi;
