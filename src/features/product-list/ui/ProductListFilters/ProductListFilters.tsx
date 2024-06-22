/* eslint-disable react/jsx-one-expression-per-line */
import { FC } from 'react';
import cn from 'classnames';
import 'rc-slider/assets/index.css';
import filterIcon from '../icons/filter-icon.svg';
import closeIcon from '../../../../shared/ui/Icon/icons/close.svg';

import css from './ProductListFilters.module.scss';
import { FilterByPrice } from '~features/filter-by-price';
import { FilterByBrand } from '~features/filter-by-brand';

type TProductListFiltersProps = {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
  isOpenFilters: boolean;
  handleFilters: () => void;
  selectedBrands: string[];
  onSelectBrand: (brand: string) => void;
};

const ProductListFilters: FC<TProductListFiltersProps> = ({
  minPrice,
  maxPrice,
  onPriceChange,
  isOpenFilters,
  handleFilters,
  selectedBrands,
  onSelectBrand,
}) => {
  return (
    <div className={css.inner}>
      <div className={cn(css.filtersBox, { [css.animating]: isOpenFilters })}>
        <div className={css.filterHeader}>
          <h3 className={css.filterTitle}>FILTER</h3>
          <button onClick={() => handleFilters()} type="button">
            <img className={css.closeIcon} src={closeIcon} alt="close" />
          </button>
        </div>
        <FilterByPrice
          minPrice={minPrice}
          maxPrice={maxPrice}
          onPriceChange={onPriceChange}
        />
        <FilterByBrand
          selectedBrands={selectedBrands}
          onSelectBrand={onSelectBrand}
        />
      </div>

      <button
        className={css.filterIcon}
        type="button"
        onClick={() => handleFilters()}
      >
        <img className={css.icon} src={filterIcon} alt="filter" />
        Filter
      </button>
    </div>
  );
};

export { ProductListFilters };
