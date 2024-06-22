/* eslint-disable max-len */
import { baseApi } from '~shared/api/baseApi';

import {
  IProductCard,
  TResponse,
  TResponseProducts,
  TResponseProductsPage,
} from '../model/types';

export const productApi = baseApi.injectEndpoints({
  endpoints: build => ({
    // prettier-ignore
    productCategory: build.query<TResponseProductsPage, { page: number; sortBy: string, minPrice?: number, maxPrice?: number, brand?: string[]; }>({
      query: ({ page, sortBy, minPrice, maxPrice, brand }) => {
        return {
          url: 'products',
          params: {
            page,
            sortBy,
            min_price: minPrice,
            max_price: maxPrice,
            brand,
          },
        };
      },
      keepUnusedDataFor: 30,
      transformResponse: (response: TResponseProductsPage) => response,
    }),
    searchProducts: build.query<IProductCard[], string>({
      query: searchProduct => ({
        url: `products?search=${searchProduct}`,
      }),
      keepUnusedDataFor: 30,
      transformResponse: (response: TResponse) => response.results,
    }),
    bestsellersProduct: build.query<IProductCard[], string>({
      query: () => 'products?sort=rate',
      keepUnusedDataFor: 30,
      transformResponse: (response: TResponse) => response.results,
    }),
    newProduct: build.query<IProductCard[], void>({
      query: () => 'products?sort=date',
      keepUnusedDataFor: 30,
      transformResponse: (response: TResponse) => response.results,
    }),
    saleProducts: build.query<IProductCard[], void>({
      query: () => 'product-categories/sale',
      keepUnusedDataFor: 30,
      transformResponse: (response: TResponseProducts) =>
        response.results.products,
    }),
  }),
});

export const {
  useProductCategoryQuery,
  useSearchProductsQuery,
  useBestsellersProductQuery,
  useNewProductQuery,
  useSaleProductsQuery,
} = productApi;
