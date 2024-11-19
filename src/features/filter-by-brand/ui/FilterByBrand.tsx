import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import arrow from '../../product-list/ui/icons/arrow.svg';

import { brandList } from '../data/brandList';
import css from './FilterByBrand.module.scss';
import { CustomCheckbox } from '~shared/ui/CustomCheckbox';

type TFilterByBrandProps = {
  selectedBrands: string[];
  onSelectBrand: (brand: string) => void;
};

const FilterByBrand: FC<TFilterByBrandProps> = ({
  selectedBrands,
  onSelectBrand,
}) => {
  const [isBrandVisible, setIsBrandVisible] = useState(true);
  const [isShowMore, setIsShowMore] = useState(false);

  const [visibleBrandCount, setVisibleBrandCount] = useState(5);

  useEffect(() => {
    setVisibleBrandCount(isShowMore ? brandList.length : 5);
  }, [isShowMore]);

  const getMaxHeight = () => {
    if (!isBrandVisible) {
      return '0';
    }

    return isShowMore ? `${brandList.length * 40}px` : '200px';
  };

  return (
    <section className={css.filterBrand}>
      <div className={css.topContainer}>
        <h3 className={css.title}>Brand</h3>
        <button
          className={css.showButton}
          type="button"
          onClick={() => setIsBrandVisible(prevState => !prevState)}
        >
          <img
            src={arrow}
            alt="arrow"
            className={cn(css.arrow, {
              [css.rotateArrow]: !isBrandVisible,
            })}
          />
        </button>
      </div>
      <div
        className={css.brandListWrapper}
        style={{
          maxHeight: getMaxHeight(),
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {brandList.slice(0, visibleBrandCount).map(brand => (
          <CustomCheckbox
            className={css.brandItem}
            key={brand}
            labelText={brand}
            id={brand}
            checked={selectedBrands.includes(brand)}
            onChange={() => onSelectBrand(brand)}
          />
        ))}
      </div>
      {isBrandVisible && (
        <button
          type="button"
          onClick={() => setIsShowMore(prevState => !prevState)}
          className={css.showMoreButton}
        >
          <img
            src={arrow}
            alt="showMoreArrow"
            className={cn(css.showMoreArrow, {
              [css.rotateMoreArrow]: !isShowMore,
            })}
          />
          {!isShowMore ? `Show all ${brandList.length}` : 'Show less'}
        </button>
      )}
    </section>
  );
};

export { FilterByBrand };
