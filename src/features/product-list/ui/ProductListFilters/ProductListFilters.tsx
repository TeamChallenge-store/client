/* eslint-disable react/jsx-one-expression-per-line */
import { FC, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import filterIcon from '../icons/filter-icon.svg';
import arrow from '../icons/arrow.svg';

import css from './ProductListFilters.module.scss';
import { CustomRatioButton } from '~shared/CustomRatioButton';

type TProductListFiltersProps = object;

const ProductListFilters: FC<TProductListFiltersProps> = () => {
  const [sliderValues, setSliderValues] = useState([0, 12000]);

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setSliderValues(value);
    } else {
      setSliderValues([value, sliderValues[1]]);
    }
  };

  const minValue = sliderValues[0];
  const maxValue = sliderValues[1];

  return (
    <div className={css.inner}>
      <section className={css.price}>
        <div className={css.topContainer}>
          <h3 className={css.title}>Price</h3>
          <button className={css.showButton} type="button">
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className={css.rangePrice}>
          <Slider
            range
            min={0}
            max={20000}
            value={sliderValues}
            onChange={handleSliderChange}
            className={css.range}
          />
          <div className={css.selectedValues}>
            <span className={css.priceValue}>{minValue} </span>
            <span className={css.priceValue}>{maxValue} </span>
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
      </section>

      <button className={css.filterIcon} type="button">
        <img className={css.icon} src={filterIcon} alt="filter" />
        Filter
      </button>
    </div>
  );
};

export { ProductListFilters };
