import { baseApi } from '~shared/api/baseApi';

import { IProductCard, TResponse, TResponseProducts } from '../model/types';

export const productApi = baseApi.injectEndpoints({
  endpoints: build => ({
    productCategory: build.query<IProductCard[], string>({
      query: sortBy => ({
        url: `products/${sortBy}`,
      }),
      keepUnusedDataFor: 30,
      transformResponse: (response: TResponse) => response.results,
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
