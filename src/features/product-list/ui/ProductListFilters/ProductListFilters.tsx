/* eslint-disable react/jsx-one-expression-per-line */
import { FC, useEffect, useState } from 'react';
import Slider from 'rc-slider';
import cn from 'classnames';
import 'rc-slider/assets/index.css';
import filterIcon from '../icons/filter-icon.svg';
import arrow from '../icons/arrow.svg';
import closeIcon from '../../../../shared/ui/Icon/icons/close.svg';

import css from './ProductListFilters.module.scss';
import { CustomRatioButton } from '~shared/CustomRatioButton';

type TProductListFiltersProps = {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
  isOpenFilters: boolean;
  handleFilters: () => void;
};

const ProductListFilters: FC<TProductListFiltersProps> = ({
  minPrice,
  maxPrice,
  onPriceChange,
  isOpenFilters,
  handleFilters,
}) => {
  const [filterRangePrice, setFilterRangePrice] = useState([
    minPrice,
    maxPrice,
  ]);
  const [isPriceVisible, setIsPriceVisible] = useState(true);

  useEffect(() => {
    setFilterRangePrice([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setFilterRangePrice(value);
      onPriceChange(value[0], value[1]);
    } else {
      setFilterRangePrice([value, filterRangePrice[1]]);
      onPriceChange(value, filterRangePrice[1]);
    }
  };

  const handleMinValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? 0 : Number(e.target.value);

    setFilterRangePrice([newValue, filterRangePrice[1]]);
    onPriceChange(newValue, filterRangePrice[1]);
  };

  const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? 0 : Number(e.target.value);

    setFilterRangePrice([filterRangePrice[0], newValue]);
    onPriceChange(filterRangePrice[0], newValue);
  };

  return (
    <div className={css.inner}>
      <div className={cn(css.filtersBox, { [css.animating]: isOpenFilters })}>
        <div className={css.filterHeader}>
          <h3 className={css.filterTitle}>FILTER</h3>
          <button onClick={() => handleFilters()} type="button">
            <img className={css.closeIcon} src={closeIcon} alt="close" />
          </button>
        </div>
        <section className={css.filterPrice}>
          <div className={css.topContainer}>
            <h3 className={css.title}>Price</h3>
            <button
              className={css.showButton}
              type="button"
              onClick={() => setIsPriceVisible(prevState => !prevState)}
            >
              <img
                src={arrow}
                alt="arrow"
                className={cn(css.arrow, {
                  [css.rotateArrow]: !isPriceVisible,
                })}
              />
            </button>
          </div>
          <div
            className={cn(css.buttonContainer, {
              [css.showPrice]: isPriceVisible,
            })}
          >
            <div className={css.rangePrice}>
              <Slider
                range
                min={0}
                max={20000}
                value={filterRangePrice}
                onChange={handleSliderChange}
                className={css.range}
                styles={{
                  track: { backgroundColor: '#37643B' },
                  handle: {
                    backgroundColor: 'white',
                    border: '2px solid #37643B',
                    width: 24,
                    height: 24,
                    opacity: 1,
                    marginTop: -10,
                  },
                  rail: { backgroundColor: '#E7E7E7' },
                }}
              />
              <div className={css.selectedValues}>
                <input
                  className={css.priceValue}
                  onChange={handleMinValueChange}
                  type="number"
                  name="min"
                  value={filterRangePrice[0]}
                />
                <span className={css.lineDecor} />
                <input
                  className={css.priceValue}
                  onChange={handleMaxValueChange}
                  type="number"
                  name="max"
                  value={filterRangePrice[1]}
                />
              </div>
            </div>
            <CustomRatioButton
              className={css.input}
              labelText="Up to 1000 ₴"
              name="price"
              id="upTo1000"
            />
            <CustomRatioButton
              className={css.input}
              labelText="1000 ₴ - 10000 ₴"
              name="price"
              id="middle"
            />
            <CustomRatioButton
              className={css.input}
              labelText="At least 10000 ₴"
              name="price"
              id="atLeast10000"
            />
          </div>
        </section>
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
