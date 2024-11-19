/* eslint-disable react/jsx-wrap-multilines */
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ProductList } from '~widgets/product-list';
import { ProductListFilters } from '~features/product-list';
import { useProductCategoryQuery } from '~entities/product';
import { CustomSelect } from '~shared/ui/CustomSelect';

import { Layout } from './ui/Layout';
import options from './model/selectOptions';
import {
  QUERY_NAME,
  DEFAULT_SORT_PARAM,
  DEFAULT_SORT_LABLE,
} from './constants';
import { Pagination } from '~features/pagination';

const ProductPage = () => {
  const [pageOffset, setPageOffset] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpenFilters, setIsOpenFilters] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const sortBy = searchParams.get(QUERY_NAME) ?? DEFAULT_SORT_PARAM;
  const minPrice = parseInt(searchParams.get('min_price') ?? '0', 10);
  const maxPrice = parseInt(searchParams.get('max_price') ?? '12000', 10);

  const { data, isLoading } = useProductCategoryQuery({
    page: pageOffset || 1,
    sortBy,
    minPrice,
    maxPrice,
    brand: selectedBrands,
  });

  const totalPages = data?.total_pages || -1;

  if (isLoading) {
    return 'Loading';
  }

  if (!data) {
    return 'no category';
  }

  // Invoke when user click to request another page.
  const handlePageClick = (pag: { selected: number }) => {
    setPageOffset(pag.selected + 1);
  };

  const handlePriceChange = (min: number, max: number) => {
    setSearchParams({ min_price: min.toString(), max_price: max.toString() });
    setPageOffset(1);
  };

  const handleFilters = () => {
    setIsOpenFilters(!isOpenFilters);
  };

  const handleBrandSelect = (brand: string) => {
    setSelectedBrands(prevSelectedBrands => {
      const updatedBrands = prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter(b => b !== brand)
        : [...prevSelectedBrands, brand];

      const params: Record<string, string> = {};

      searchParams.forEach((value, key) => {
        if (key !== 'brand') {
          params[key] = value;
        }
      });

      if (updatedBrands.length > 0) {
        params.brand = updatedBrands.join(',');
      } else {
        delete params.brand;
      }

      setSearchParams(new URLSearchParams(params).toString());

      return updatedBrands;
    });
  };

  return (
    <Layout
      sidebar={
        <ProductListFilters
          minPrice={Number(minPrice)}
          maxPrice={Number(maxPrice)}
          onPriceChange={handlePriceChange}
          isOpenFilters={isOpenFilters}
          handleFilters={handleFilters}
          selectedBrands={selectedBrands}
          onSelectBrand={handleBrandSelect}
        />
      }
      sortBy={
        <CustomSelect options={options} startValue={DEFAULT_SORT_LABLE} />
      }
      productList={<ProductList products={data.results} />}
      pagination={
        <Pagination
          handlePageClick={handlePageClick}
          totalPages={totalPages}
          currentPage={pageOffset}
          products={data.results}
        />
      }
    />
  );
};

export { ProductPage };
