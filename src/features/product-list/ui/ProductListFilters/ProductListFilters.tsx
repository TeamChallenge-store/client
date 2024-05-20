import { FC } from 'react';
import filterIcon from '../icons/filter-icon.svg';

import css from './ProductListFilters.module.scss';

type TProductListFiltersProps = object;

const ProductListFilters: FC<TProductListFiltersProps> = () => {
  return (
    <div className={css.inner}>
      <img className={css.icon} src={filterIcon} alt="filter" />
      Filter
    </div>
  );
};

export { ProductListFilters };
