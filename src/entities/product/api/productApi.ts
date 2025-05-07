/* eslint-disable max-len */
import { baseApi } from '~shared/api/baseApi';

import {
  IProductCard,
  TResponse,
  TResponseProducts,
  TResponseProductsPage,
  IProductDetails,
} from '../model/types';

export const productApi = baseApi.injectEndpoints({
  endpoints: build => ({
    // prettier-ignore
    productCategory: build.query<TResponseProductsPage, { page: number; sortBy: string, minPrice?: number, maxPrice?: number, brand?: string[], color?: string[], category?: string }>({
      query: ({ page, sortBy, minPrice, maxPrice, brand, color, category }) => {
        const params: Record<string, string | number> = {
          page,
          sortBy,
          min_price: minPrice || 0,
          max_price: maxPrice || 12000,
        };

        if (brand && brand.length > 0) {
          params.brand = brand.join(',');
        }

        if (color && color.length > 0) {
          params.color = color.join(',');
        }

        if (category) {
          params.category = category;
        }

        return {
          url: `products?sort=${sortBy}`,
          params,
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
      query: () => 'products?sort=created_at',
      keepUnusedDataFor: 30,
      transformResponse: (response: TResponse) => response.results,
    }),
    saleProducts: build.query<IProductCard[], void>({
      query: () => 'product-categories/sale',
      keepUnusedDataFor: 30,
      transformResponse: (response: TResponseProducts) =>
        response.results.products,
    }),
    productById: build.query<IProductDetails, number>({
      query: (productId) => ({
        url: `products/${productId}`,
      }),
      keepUnusedDataFor: 30,
      transformResponse: (response: IProductDetails) => response,
    }),
  }),
});

export const {
  useProductCategoryQuery,
  useSearchProductsQuery,
  useBestsellersProductQuery,
  useNewProductQuery,
  useSaleProductsQuery,
  useProductByIdQuery,
} = productApi;
