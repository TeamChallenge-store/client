/* eslint-disable react/jsx-wrap-multilines */
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
import { selectSelectedCategory } from '~widgets/Header/ui/Navbar/model/slice';

const ProductPage = () => {
  const [pageOffset, setPageOffset] = useState(1);
  const [searchParams] = useSearchParams();
  const selectedCategory = useSelector(selectSelectedCategory);

  const { data, isLoading } = useProductCategoryQuery({
    page: pageOffset || 1,
    sortBy: searchParams.get(QUERY_NAME)?.toString() ?? DEFAULT_SORT_PARAM,
    categoryId: selectedCategory,
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
      sidebar={null}
      sortBy={
        <CustomSelect options={options} startValue={DEFAULT_SORT_LABLE} />
      }
      filtersMob={<ProductListFilters />}
      productList={<ProductList products={data.results} />}
      pagination={
        <Pagination
          handlePageClick={handlePageClick}
          totalPages={totalPages}
          currentPage={pageOffset}
        />
      }
      categoryId={selectedCategory}
    />
  );
};

export { ProductPage };
