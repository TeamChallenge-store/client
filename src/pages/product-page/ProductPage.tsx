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
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useProductCategoryQuery({
    page: pageOffset || 1,
    sortBy: searchParams.get(QUERY_NAME)?.toString() ?? DEFAULT_SORT_PARAM,
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

  return (
    <Layout
      sidebar={<ProductListFilters />}
      sortBy={
        <CustomSelect options={options} startValue={DEFAULT_SORT_LABLE} />
      }
      productList={<ProductList products={data.results} />}
      pagination={
        <Pagination
          handlePageClick={handlePageClick}
          totalPages={totalPages}
          currentPage={pageOffset}
        />
      }
    />
  );
};

export { ProductPage };
