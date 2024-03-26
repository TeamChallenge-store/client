import { baseApi } from '~shared/api/baseApi';

import { IProductCard } from '~entities/product/model/types';

export const productApi = baseApi.injectEndpoints({
  endpoints: build => ({
    newProduct: build.query<IProductCard[], void>({
      query: () => 'products/?sort=date',
    }),
  }),
});

export const { useNewProductQuery } = productApi;
