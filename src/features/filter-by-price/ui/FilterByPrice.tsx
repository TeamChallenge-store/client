/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import Slider from 'rc-slider';
import arrow from '../../product-list/ui/icons/arrow.svg';
import { CustomRatioButton } from '~shared/CustomRatioButton';

import css from './FilterByPrice.module.scss';

type TFilterByPriceProps = {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
};

const FilterByPrice: FC<TFilterByPriceProps> = ({
  minPrice,
  maxPrice,
  onPriceChange,
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
    const value = e.target.value.replace(/^0+(?!$)/, '');
    const newValue = value === '' ? 0 : Number(value);

    setFilterRangePrice([newValue, filterRangePrice[1]]);
    onPriceChange(newValue, filterRangePrice[1]);
  };

  const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? 0 : Number(e.target.value);

    setFilterRangePrice([filterRangePrice[0], newValue]);
    onPriceChange(filterRangePrice[0], newValue);
  };

  const handlePriceButtonClick = (min: number, max: number) => {
    setFilterRangePrice([min, max]);
    onPriceChange(min, max);
  };

  return (
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
              onBlur={e =>
                (e.target.value = e.target.value.replace(/^0+(?!$)/, ''))
              }
            />
            <span className={css.lineDecor} />
            <input
              className={css.priceValue}
              onChange={handleMaxValueChange}
              type="number"
              name="max"
              value={filterRangePrice[1]}
              onBlur={e =>
                (e.target.value = e.target.value.replace(/^0+(?!$)/, ''))
              }
            />
          </div>
        </div>
        <CustomRatioButton
          className={css.input}
          labelText="Up to 1000 ₴"
          name="price"
          id="upTo1000"
          onClick={() => handlePriceButtonClick(0, 1000)}
        />
        <CustomRatioButton
          className={css.input}
          labelText="1000 ₴ - 10000 ₴"
          name="price"
          id="middle"
          onClick={() => handlePriceButtonClick(1000, 10000)}
        />
        <CustomRatioButton
          className={css.input}
          labelText="At least 10000 ₴"
          name="price"
          id="atLeast10000"
          onClick={() => handlePriceButtonClick(10000, 20000)}
        />
      </div>
    </section>
  );
};

export { FilterByPrice };
