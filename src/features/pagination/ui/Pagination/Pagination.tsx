import { FC } from 'react';
import ReactPaginate from 'react-paginate';

import css from './Pagination.module.scss';

type TPaginationProps = {
  handlePageClick: (pag: { selected: number }) => void;
  totalPages: number;
};

const Pagination: FC<TPaginationProps> = ({ handlePageClick, totalPages }) => {
  return (
    <ReactPaginate
      nextLabel=""
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      marginPagesDisplayed={0}
      pageCount={totalPages}
      previousLabel=""
      pageClassName={css.pageItem}
      pageLinkClassName={css.pageLinkItem}
      previousLinkClassName={css.previousArrow}
      nextLinkClassName={css.nextArrow}
      breakLabel=""
      breakClassName={css.pageItem}
      breakLinkClassName={css.pageLink}
      containerClassName={css.pagination}
      activeClassName={css.activeItem}
      renderOnZeroPageCount={null}
    />
  );
};

export { Pagination };
