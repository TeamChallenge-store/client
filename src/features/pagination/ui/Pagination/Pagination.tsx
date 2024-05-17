import { FC } from 'react';
import ReactPaginate from 'react-paginate';

import css from './Pagination.module.scss';

type TPaginationProps = {
  handlePageClick: (pag: { selected: number }) => void;
  totalPages: number;
  currentPage: number;
};

const showItems = (currentPage: number) => {
  if (currentPage === 2 || currentPage === 3) {
    return 4;
  }

  return 5;
};

const Pagination: FC<TPaginationProps> = ({
  handlePageClick,
  totalPages,
  currentPage,
}) => {
  return (
    <ReactPaginate
      nextLabel=""
      onPageChange={handlePageClick}
      pageRangeDisplayed={showItems(currentPage)}
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
      forcePage={0}
    />
  );
};

export { Pagination };
