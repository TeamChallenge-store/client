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

const CustomArrow: FC = () => (
  <svg
    width="14"
    height="24"
    viewBox="0 0 14 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      // eslint-disable-next-line max-len
      d="M13.0009 1.42151C13.7809 2.20151 13.7809 3.46151 13.0009 4.24151L5.24094 12.0015L13.0009 19.7615C13.7809 20.5415 13.7809 21.8015 13.0009 22.5815C12.2209 23.3615 10.9609 23.3615 10.1809 22.5815L1.00094 13.4015C0.220938 12.6215 0.220938 11.3615 1.00094 10.5815L10.1809 1.40151C10.9409 0.641509 12.2209 0.641509 13.0009 1.42151Z"
      fill="#2C5030"
    />
  </svg>
);

const Pagination: FC<TPaginationProps> = ({
  handlePageClick,
  totalPages,
  currentPage,
}) => {
  return (
    <ReactPaginate
      nextLabel={<CustomArrow />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={showItems(currentPage)}
      marginPagesDisplayed={0}
      pageCount={totalPages}
      previousLabel={<CustomArrow />}
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
