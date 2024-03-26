import { baseApi } from '~shared/api/baseApi';

import { IProductCard } from '~entities/product/model/types';

export const productApi = baseApi.injectEndpoints({
  endpoints: build => ({
    bestsellersProduct: build.query<IProductCard[], void>({
      query: () => 'products/?sort=rate',
    }),
  }),
});

export const { useBestsellersProductQuery } = productApi;
