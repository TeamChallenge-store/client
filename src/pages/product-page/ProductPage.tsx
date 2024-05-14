/* eslint-disable react/jsx-wrap-multilines */
import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

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

const ProductPage = () => {
  const [pageOffset, setPageOffset] = useState(1);
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useProductCategoryQuery({
    page: pageOffset || 1,
    sortBy: searchParams.get(QUERY_NAME)?.toString() ?? DEFAULT_SORT_PARAM,
  });

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
      productList={<ProductList products={data} />}
      pagination={
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={-1}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      }
    />
  );
};

export { ProductPage };
